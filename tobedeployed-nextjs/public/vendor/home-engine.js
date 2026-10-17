




    CustomEase.create("latestVisualAppear", "M0,0 C0.175,0.885,0.327,1.41,1,1");




    function initHomePage() {
      /* ------------------------
         1) Hover images
      ------------------------ */
      const homeIntroRoot = document.querySelector('.home_intro_component');
      if (homeIntroRoot) {
        const mediasUrl = [];

        homeIntroRoot.querySelectorAll('.home_intro_image').forEach(el => {
          mediasUrl.push(el.getAttribute('src'));
        });

        const firstGroupImages = mediasUrl.slice(0, 5);
        const secondGroupImages = [mediasUrl[5], mediasUrl[6], mediasUrl[9], mediasUrl[8], mediasUrl[
          7]];

        const hovers = homeIntroRoot.querySelectorAll('.home_intro_hover');
        let interval, incr = 0;

        function displayImages(distX, distY, imagesToUse) {
          incr = 0;
          interval = setInterval(() => {
            // wrapper → uniquement border-radius + overflow
            const wrapper = document.createElement("div");
            Object.assign(wrapper.style, {
              borderRadius: "var(--_responsive---other--border-radius)",
              overflow: "hidden",
              display: "inline-block",
              position: "absolute",
              top: "0",
              left: "0",
              pointerEvents: "none"
            });

            // image → gère sa taille et ratio
            const image = document.createElement("img");
            image.src = imagesToUse[incr % imagesToUse.length];
            Object.assign(image.style, {
              display: "block",
              maxWidth: "20rem",   // limite largeur
              maxHeight: "20rem",  // limite hauteur
              height: "auto",
              width: "auto"
            });

            wrapper.appendChild(image);
            homeIntroRoot.appendChild(wrapper);

            // animations GSAP sur le wrapper
            gsap.fromTo(wrapper, {
              xPercent: -50,
              yPercent: -50,
              x: distX + (Math.random() - 0.5) * 50,
              y: distY + 50,
              rotation: (Math.random() - 0.5) * 10
            }, {
              y: distY,
              rotation: (Math.random() - 0.5) * 10,
              ease: 'back.out(3)',
              duration: 0.4
            });

            gsap.to(wrapper, {
              scale: 0.9,
              delay: 0.5,
              duration: 0.2,
              ease: 'back.in(2)',
              onComplete: () => {
                homeIntroRoot.removeChild(wrapper);
              }
            });

            incr++;
          }, 240);
        }

        function stopImages() {
          clearInterval(interval);
        }

        hovers.forEach(el => {
          el.addEventListener('mouseenter', () => {
            let imagesToUse;
            if (el.classList.contains('is-first')) {
              imagesToUse = firstGroupImages;
            } else if (el.classList.contains('is-second')) {
              imagesToUse = secondGroupImages;
            } else {
              imagesToUse = mediasUrl;
            }

            const bound = el.getBoundingClientRect();
            const distX = bound.left + bound.width / 2;
            const distY = bound.top + bound.height / 2 + window.scrollY;

            displayImages(distX, distY, imagesToUse);
          });

          el.addEventListener('mouseleave', stopImages);
        });
      }

      /* ------------------------
         2) Hero mousemove
      ------------------------ */
      const heroRoot = document.querySelector('.hero_component');
      if (heroRoot) {
        const card = heroRoot.querySelector('.moving-visual_wrapper');
        // On utilise querySelectorAll pour cibler les DEUX éléments
        const media = heroRoot.querySelectorAll('.moving-visual');

        const xTo = gsap.quickTo(card, "x", { duration: 1, ease: "power4" });
        const yTo = gsap.quickTo(card, "y", { duration: 1, ease: "power4" });
        const rotationYTo = gsap.quickTo(card, "rotationY", { duration: 1, ease: "power4" });
        const rotationXTo = gsap.quickTo(card, "rotationX", { duration: 1, ease: "power4" });
        // GSAP appliquera l'animation à tous les éléments de la variable "media"
        const scaleXTo = gsap.quickTo(media, "scaleX", { duration: 2, ease: "power1" });
        const scaleYTo = gsap.quickTo(media, "scaleY", { duration: 2, ease: "power1" });
        const opacityTo = gsap.quickTo(card, "opacity", { duration: 0.8, ease: "power2" });

        const W = window.innerWidth;
        const H = window.innerHeight;
        let isMoving;
        let oldPosX = 0;
        let oldPosY = 0;
        let hasMovedOnce = false;

        gsap.set(card, { opacity: 0 });

        window.addEventListener("mousemove", e => {
          if (!hasMovedOnce) {
            opacityTo(1);
            hasMovedOnce = true;
          }

          rotationYTo((e.clientX - oldPosX) * 2);
          rotationXTo(-(e.clientY - oldPosY) * 2);
          xTo(e.clientX - W / 2);
          yTo(e.clientY - heroRoot.getBoundingClientRect().top - H / 2);
          scaleXTo(1);
          scaleYTo(1);
          oldPosX = e.clientX;
          oldPosY = e.clientY;

          window.clearTimeout(isMoving);
          isMoving = setTimeout(() => {
            rotationYTo(0);
            rotationXTo(0);
            scaleXTo(1.2);
            scaleYTo(1.2);
          }, 66);
        });
      }

      /* ------------------------
         3) SplitText intro
      ------------------------ */
      const introTextElement = document.getElementById('intro-text');
      const originalVideoSpanHTML = introTextElement?.querySelector('.home_intro_image_wrapper')
        ?.outerHTML || null;

      let currentSplitText = null;
      let lineScrollTriggers = [];

      function cleanupIntroAnimation() {
        lineScrollTriggers.forEach(st => st.kill());
        lineScrollTriggers = [];
        if (currentSplitText) {
          currentSplitText.revert();
          currentSplitText = null;
        }
        const lingeringVideoSpan = introTextElement?.querySelector('.home_intro_image_wrapper');
        if (lingeringVideoSpan && lingeringVideoSpan.parentNode === introTextElement) {
          lingeringVideoSpan.parentNode.removeChild(lingeringVideoSpan);
        }
      }

      function setupIntroAnimation() {
        if (typeof SplitText === "undefined") {
          console.error("SplitText plugin is required for setupIntroAnimation()");
          return;
        }

        let videoSpanToInsert = null;
        if (originalVideoSpanHTML) {
          const tempDiv = document.createElement('div');
          tempDiv.innerHTML = originalVideoSpanHTML;
          videoSpanToInsert = tempDiv.firstChild;
          if (videoSpanToInsert) {
            videoSpanToInsert.style.display = 'inline-block';
            videoSpanToInsert.style.verticalAlign = 'baseline';
            videoSpanToInsert.style.marginRight = '0.2rem';
          }
        }

        const split = new SplitText(introTextElement, {
          type: "lines",
          linesClass: "intro-line-anim"
        });

        if (videoSpanToInsert && split.lines?.length > 0) {
          let lineFound = false;
          for (let i = 0; i < split.lines.length; i++) {
            const lineElement = split.lines[i];
            const lineText = lineElement.textContent.trim();
            if (lineText.startsWith("Votre design")) {
              lineElement.insertBefore(videoSpanToInsert, lineElement.firstChild);
              lineFound = true;
              break;
            }
          }
          if (!lineFound && split.lines[0]) {
            split.lines[0].insertBefore(videoSpanToInsert, split.lines[0].firstChild);
          }
        } else if (videoSpanToInsert && introTextElement) {
          introTextElement.appendChild(videoSpanToInsert);
        }

        if (split.lines?.length > 0) {
          split.lines.forEach(line => {
            gsap.set(line, { opacity: 0, filter: "blur(10px)" });
            gsap.to(line, {
              opacity: 1,
              filter: "blur(0px)",
              duration: 0.8,
              ease: "power1.out",
              scrollTrigger: {
                trigger: line,
                start: "top bottom-=15%",
                once: true
              }
            });
          });
        }
      }

      if (introTextElement) {
        const videoElement = introTextElement.querySelector('.home_intro_image_wrapper video');
        if (originalVideoSpanHTML && videoElement) {
          if (videoElement.readyState >= 1 || videoElement.error) {
            setupIntroAnimation();
          } else {
            videoElement.addEventListener('loadedmetadata', setupIntroAnimation, { once: true });
            window.addEventListener('load', () => {
              setupIntroAnimation();
            }, { once: true });
          }
        } else {
          setupIntroAnimation();
        }
      }

      if (introTextElement) {
        const videoElement = introTextElement.querySelector('.home_intro_image_wrapper video');
        if (originalVideoSpanHTML && videoElement) {
          if (videoElement.readyState >= 1 || videoElement.error) {
            setupIntroAnimation();
          } else {
            videoElement.addEventListener('loadedmetadata', setupIntroAnimation, { once: true });
            window.addEventListener('load', () => {
              if (!currentSplitText) setupIntroAnimation();
            }, { once: true });
          }
        } else {
          setupIntroAnimation();
        }

        ScrollTrigger.addEventListener("refreshInit", cleanupIntroAnimation);
        ScrollTrigger.addEventListener("refresh", setupIntroAnimation);
      }

      initLatestVisualHover();
      initLogoAppear();
    }










    function initLatestVisualHover() {
      const visuals = document.querySelectorAll(".latest_visual");
      const hoverDuration = 0.3;
      const hoverEasing = "customElementAppear";

      visuals.forEach((visual) => {
        const background = visual.querySelector(".latest_visual_background");
        const overlay = visual.querySelector(".latest_visual_overlay");
        const videoWrapper = visual.querySelector(".latest_visual_video_wrapper");
        const video = videoWrapper?.querySelector("video");

        // NEW: parent trigger
        const triggerEl = visual.closest(".latest_content_item") || visual;

        // Apparition au scroll (déclenchée par le parent)
        gsap.to(visual, {
          y: 0,
          x: 0,
          rotationZ: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power4.out",
          scrollTrigger: {
            trigger: triggerEl,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });

        if (window.innerWidth > tabletBreakpoint) {

          // Hover in
          visual.addEventListener("mouseenter", () => {
            if (video) { video.currentTime = 0; video.play(); }

            gsap.to(visual, { scale: 0.98, duration: hoverDuration, ease: "latestVisualAppear" });
            gsap.to(background, { filter: "blur(5px)", duration: hoverDuration, ease: hoverEasing });
            gsap.to(overlay, { opacity: 0.3, duration: hoverDuration, ease: hoverEasing });
            gsap.to(videoWrapper, { opacity: 1, duration: hoverDuration, ease: hoverEasing });
          });

          // Hover out
          visual.addEventListener("mouseleave", () => {
            gsap.to(visual, { scale: 1, duration: hoverDuration, ease: "latestVisualAppear" });
            gsap.to(background, { filter: "blur(0px)", duration: hoverDuration, ease: hoverEasing });
            gsap.to(overlay, { opacity: 0, duration: hoverDuration, ease: hoverEasing });
            gsap.to(videoWrapper, { opacity: 0, duration: hoverDuration, ease: hoverEasing });
          });

        }
      });
    }






    function initLogoAppear() {
      const elements = document.querySelectorAll(".client_logo");

      // On ajoute ce "garde-fou" :
      if (elements.length === 0) {
        return; // Si pas de logos trouvés, on arrête tout de suite la fonction.
      }

      gsap.to(elements, {
        y: "0%",
        duration: 1.5,
        ease: "custom",
        stagger: 0.1,
        scrollTrigger: {
          trigger: elements[0],
          start: "top bottom-=10%",
          toggleActions: "play none none none"
        }
      });
    }

    // Called directly rather than via a "DOMContentLoaded" listener: this script is injected
    // client-side after React hydration (see VendorScripts.tsx), which always happens after
    // DOMContentLoaded has already fired — so that event listener was a silent dead end and
    // initHomePage() (and, with it, initLatestVisualHover()/initLogoAppear() that it calls) never
    // ran at all. By the time this script executes, the DOM is already fully ready, so a direct
    // call is correct and immediate.
    initHomePage();








    function initServicesMobile() {
      // Animation uniquement sur mobile (< 767px)
      gsap.matchMedia().add("(max-width: 767px)", () => {

        // Sélectionner tous les wrappers
        const items = document.querySelectorAll('.home_services_list-item_wrapper');

        items.forEach((item) => {
          const visual = item.querySelector('.home_services_visual_wrapper');

          // Timeline pour chaque item
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: item,
              start: "top 50%",
              end: "bottom 50%",
              scrub: true,
              onEnter: () => {
                // Réduire l'opacité de tous les items
                gsap.to('.home_services_list-item_wrapper', {
                  opacity: 0.15,
                  duration: 0
                });
                // Mettre l'item actuel à 100%
                gsap.to(item, {
                  opacity: 1,
                  duration: 0
                });
              },
              onLeave: () => {
                // Remettre tous à 100% quand on sort
                gsap.to('.home_services_list-item_wrapper', {
                  opacity: 1,
                  duration: 0
                });
              },
              onEnterBack: () => {
                // Réduire l'opacité de tous les items
                gsap.to('.home_services_list-item_wrapper', {
                  opacity: 0.15,
                  duration: 0
                });
                // Mettre l'item actuel à 100%
                gsap.to(item, {
                  opacity: 1,
                  duration: 0
                });
              },
              onLeaveBack: () => {
                // Remettre tous à 100% quand on remonte
                gsap.to('.home_services_list-item_wrapper', {
                  opacity: 1,
                  duration: 0
                });
              }
            }
          });

          // Animer le visual wrapper
          tl.to(visual, {
            display: 'block',
            opacity: 1,
            height: 'auto',
            duration: 0,
            ease: "power2.inOut"
          }, 0);
        });

      });
    }


    // Same reasoning as initHomePage() above: DOMContentLoaded has already fired by the time this
    // script runs, so the original event listener never ran this function.
    initServicesMobile();
