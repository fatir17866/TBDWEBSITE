import { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/chrome/PageShell";
import { NewsTemplate } from "@/components/templates/NewsTemplate";
import { getArticleBySlug, newsArticles } from "@/content/news";
import { articleRegistry } from "@/components/news/articleRegistry";

export function generateStaticParams() {
  return newsArticles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.ogImage],
    },
  };
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const ArticleBody = articleRegistry[slug];
  if (!ArticleBody) notFound();

  return (
    <PageShell dataPage="article">
      <NewsTemplate meta={article}>
        <ArticleBody />
      </NewsTemplate>
    </PageShell>
  );
}
