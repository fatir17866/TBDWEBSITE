
    // =================================================================
    // ==                      CONFIGURATION GLOBALE                  ==
    // =================================================================

    // Variables globales
    let isOpen = false;
    let isAnimating = false;
    let lenis;
    const tabletBreakpoint = 1024;
    const landscapeBreakpoint = 767;
    const portraitBreakpoint = 478;

    CustomEase.create("custom", "M0,0 C0.819,0.077 0,1 1,1");
    CustomEase.create("customElementAppear", "M0,0 C0.42,0 0.596,1.001 1,1");
    CustomEase.create("latestVisualAppear", "M0,0 C0.175,0.885,0.327,1.41,1,1");
    CustomEase.create("overlayBezier", ".77,0,.181,1.001");

    // Injecte le style si absent (évite de dépendre d’un fichier CSS)
    (() => {
      if (!document.getElementById("split-line-style")) {
        const s = document.createElement("style");
        s.id = "split-line-style";
        s.textContent = ".split-line{display:block;overflow:hidden;line-height:inherit}";
        document.head.appendChild(s);
      }
    })();







    // =================================================================
    // ==                      FONCTIONS PRINCIPALES                  ==
    // =================================================================

    // (facultatif, mais utile contre le pinch-zoom iOS quand le menu est ouvert)
    function setViewportZoomDisabled(disabled) {
      try {
        let meta = document.querySelector('meta[name="viewport"]');
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', 'viewport');
          document.head.appendChild(meta);
        }
        if (disabled) {
          if (!meta.dataset.original) {
            meta.dataset.original = meta.getAttribute('content') || '';
          }
          meta.setAttribute('content', 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover');
          const prevent = (e) => e.preventDefault();
          document.addEventListener('gesturestart', prevent, { passive: false });
          document.addEventListener('gesturechange', prevent, { passive: false });
          document.addEventListener('gestureend', prevent, { passive: false });
          document.documentElement.classList.add('no-zoom');
        } else {
          const original = meta.dataset.original ?? '';
          meta.setAttribute('content', original || 'width=device-width, initial-scale=1, viewport-fit=cover');
          const prevent = (e) => e.preventDefault();
          document.removeEventListener('gesturestart', prevent, { passive: false });
          document.removeEventListener('gesturechange', prevent, { passive: false });
          document.removeEventListener('gestureend', prevent, { passive: false });
          document.documentElement.classList.remove('no-zoom');
        }
      } catch (e) {
        console.warn('[Menu] viewport lock error:', e);
      }
    }

    function initOnce() {

      if (window.innerWidth > tabletBreakpoint) {
        lenis = new Lenis({
          lerp: 0.05,
          wheelMultiplier: 1,
          touchMultiplier: 2,
          infinite: false
        });
        lenis.on('scroll', () => {
          ScrollTrigger.update();
        });
        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });
        gsap.ticker.lagSmoothing(0);
      }

      // --- CURSOR (Création unique) ---
      if (window.innerWidth > tabletBreakpoint) {
        const cursor = document.createElement("div");
        cursor.classList.add("custom-cursor");
        document.body.appendChild(cursor);
        let mouseX = 0,
          mouseY = 0;
        let cursorX = 0,
          cursorY = 0;
        const offsetX = 24;
        const offsetY = 24;
        const speed = 0.3;
        cursor.style.opacity = "0";

        document.addEventListener(
          "mousemove",
          (e) => {
            // On vérifie si c'est bien le premier mouvement (la condition est implicite grâce à "once: true")
            // On initialise les positions comme avant
            mouseX = e.clientX + offsetX;
            mouseY = e.clientY + offsetY;
            cursorX = mouseX;
            cursorY = mouseY;
            cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0)`;

            // --- MODIFICATION ---
            // On vérifie si la cible du mouvement n'a PAS la classe .no-cursor (ni l'un de ses parents)
            // e.target est l'élément le plus profond sous la souris.
            if (!e.target.closest(".no-cursor")) {
              cursor.style.opacity = "1"; // On affiche le curseur uniquement dans ce cas
            }
            // Si la souris est sur un élément .no-cursor, on ne fait rien, l'opacité reste à 0.
          },
          { once: true } // Cet écouteur ne s'exécutera qu'une seule fois
        );

        document.addEventListener("mousemove", (e) => {
          mouseX = e.clientX + offsetX;
          mouseY = e.clientY + offsetY;
        });

        // 🔥 Gestion de l'opacité avec .no-cursor
        document.querySelectorAll(".no-cursor").forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cursor.style.opacity = "0";
          });
          el.addEventListener("mouseleave", () => {
            cursor.style.opacity = "1";
          });
        });

        function animateCursor() {
          cursorX += (mouseX - cursorX) * speed;
          cursorY += (mouseY - cursorY) * speed;
          const angle = cursor.classList.contains("hover") ? -7 : 0;
          cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) rotate(${angle}deg)`;
          requestAnimationFrame(animateCursor);
        }
        animateCursor();
      }

      // --- TIME SWITCH (Initialisation unique de l'intervalle) ---

      const cityTimezones = {
        'Paris, France': 'Europe/Paris',
        'Los Angeles, California': 'America/Los_Angeles',
        'Los Angeles, CA': 'America/Los_Angeles',
        'Barcelona, Spain': 'Europe/Madrid',
        'Hong Kong, China': 'Asia/Hong_Kong'
      };

      function updateTime() {
        for (let i = 1; i <= 5; i++) {
          const cityElement = document.getElementById(`citySwitch${i}`);
          const timeElement = document.getElementById(`timeSwitch${i}`);
          if (cityElement && timeElement) {
            const cityName = cityElement.textContent.trim();
            const timezone = cityTimezones[cityName];
            if (timezone) {
              try {
                const now = new Date();
                const timeString = now.toLocaleTimeString('fr-FR', {
                  timeZone: timezone,
                  hour12: false,
                  hour: '2-digit',
                  minute: '2-digit',
                  second: '2-digit'
                });
                timeElement.textContent = timeString;
              } catch (error) {
                console.error(`Erreur pour le fuseau horaire ${timezone}:`, error);
              }
            }
          }
        }
      }
      updateTime();
      setInterval(updateTime, 1000);

    }

    function setVH() {
      // On récupère la vraie hauteur de la fenêtre (barre incluse)
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    setVH();
    window.addEventListener('resize', setVH);








    // --- NAVIGATION ---

    // ====== OUVERTURE ======
    function openMenu() {
      const container = document.querySelector(".page-main");
      const menuToggle = document.querySelector("#menuToggle");
      const menuOverlay = document.querySelector(".nav-menu");
      const menuContent = document.querySelector(".nav-menu_component");
      const firstTextNav = menuToggle?.querySelector(".link_first .text-mono");
      const secondTextNav = menuToggle?.querySelector(".link_second .text-mono");

      if (!container || !menuOverlay || !menuContent || !menuToggle) return;
      if (isAnimating || isOpen) return;

      isAnimating = true;
      isOpen = true;

      try { setViewportZoomDisabled?.(true); } catch (_) { }

      // Interaction
      menuOverlay.style.pointerEvents = "auto";
      document.body.style.overflow = "hidden";
      container.style.pointerEvents = "none";
      menuToggle.setAttribute("aria-expanded", "true");

      // État de départ sûr
      gsap.set(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" });
      gsap.set(menuContent, { rotation: -15, x: -100, y: -100, scale: 1.5, opacity: 0.25 });
      gsap.set(container, { transformOrigin: "50% 50% 0" });

      // Anim principale
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 2 },
        onComplete: () => { isAnimating = false; }
      });

      tl.to(container, { rotation: 10, x: 300, y: 450, opacity: 0, scale: 1.5 }, 0);
      tl.to(menuContent, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
      tl.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)" }, 0);

      // Texte du bouton (synchro visuelle) - MODIFIÉ
      gsap.delayedCall(1.5, () => {
        const isFrench = document.documentElement.lang === "fr-FR";
        const closeText = isFrench ? "Fermer" : "Close";
        if (firstTextNav) firstTextNav.textContent = closeText;
        if (secondTextNav) secondTextNav.textContent = closeText;
      });

      // slide-in des liens
      const links = gsap.utils.toArray(".nav-menu_link");
      gsap.killTweensOf(links);
      const tlLinks = gsap.timeline({ defaults: { ease: "power4.out" } });
      tlLinks.set(links, { y: (i, el) => el.getBoundingClientRect().height * 1.2 });
      tlLinks.to(links, { y: 0, duration: 1.5, delay: 0.8, stagger: 0.05, overwrite: "auto" });

      // visuals sur tablette et moins
      if (window.innerWidth <= 991) {
        let visualsWidth = window.innerWidth <= landscapeBreakpoint ? "4.5rem" : "5.5rem";
        const visuals = gsap.utils.toArray(".nav-menu_visual");
        gsap.set(visuals, { width: "0rem" });
        tlLinks.to(visuals, {
          width: visualsWidth,
          duration: 0.8,
          ease: "custom",
          stagger: 0.05
        }, "-=0.9");
      }
    }

    // ====== FERMETURE ======
    function closeMenu() {
      const container = document.querySelector(".page-main");
      const menuToggle = document.querySelector("#menuToggle");
      const menuOverlay = document.querySelector(".nav-menu");
      const menuContent = document.querySelector(".nav-menu_component");
      const firstTextNav = menuToggle?.querySelector(".link_first .text-mono");
      const secondTextNav = menuToggle?.querySelector(".link_second .text-mono");

      if (!container || !menuOverlay || !menuContent) return;
      if (isAnimating || !isOpen) return;

      isAnimating = true;

      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut", duration: 2 },
        onComplete: () => {
          isOpen = false;
          isAnimating = false;

          try { setViewportZoomDisabled?.(false); } catch (_) { }

          // Rendre l'overlay traversable une fois fermé
          menuOverlay.style.pointerEvents = "none";

          // Rendre la page interactive
          document.body.style.overflow = "";
          container.style.pointerEvents = "";
          menuToggle?.setAttribute("aria-expanded", "false");

          // Nettoyage
          const links = gsap.utils.toArray(".nav-menu_link");
          gsap.set(links, { clearProps: "transform" });
          if (window.innerWidth <= 991) gsap.set(".nav-menu_visual", { clearProps: "width" });

          gsap.set(menuContent, { clearProps: "transform,opacity" });
          gsap.set(menuOverlay, { clearProps: "clipPath" });
          gsap.set(container, { clearProps: "transform,opacity" });
        }
      });

      // Texte du bouton (synchro visuelle) - MODIFIÉ
      gsap.delayedCall(1.5, () => {
        const isFrench = document.documentElement.lang === "fr-FR";
        const menuText = isFrench ? "Menu\u00A0\u00A0" : "Menu";
        const openText = isFrench ? "Ouvrir" : "Open";
        if (firstTextNav) firstTextNav.textContent = menuText;
        if (secondTextNav) secondTextNav.textContent = openText;
      });

      // Fermeture
      tl.to(container, { rotation: 0, x: 0, y: 0, scale: 1, opacity: 1 }, 0);
      tl.to(menuContent, { rotation: -15, x: -100, y: -100, scale: 1.5, opacity: 0.25 }, 0);
      tl.to(menuOverlay, { clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }, 0);

      // En mobile, replie les visuals pendant la fermeture (optionnel)
      if (window.innerWidth <= 991) {
        tl.to(".nav-menu_visual", { width: "0rem", duration: 0.4, stagger: 0.05, ease: "custom" }, "<");
      }

      return tl;
    }

    // (ré)attache le toggle — si tu as changé la logique plus haut, garde celle-ci :
    (() => {
      const container = document.querySelector(".page-main");
      const menuToggle = document.querySelector("#menuToggle");
      if (menuToggle && container) {
        menuToggle.addEventListener("click", () => {
          if (isAnimating) return;
          isOpen ? closeMenu() : openMenu();
        });
      }
    })();








    // =================================================================
    // ==                   PAGE TRANSITION (STYLE MENU)             ==
    // =================================================================

    function resetPageTransition() {
      gsap.set(".transition", { display: "none" });
      gsap.set(".transition_overlay", {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
        clearProps: "backgroundColor"
      });
      gsap.set(".page-main, .nav-menu", { clearProps: "transform,opacity" });
    }

    function initPageTransition() {
      resetPageTransition();

      const transitionOverlay = document.querySelector(".transition_overlay");
      const pageMain = document.querySelector(".page-main");
      const navMenu = document.querySelector(".nav-menu");
      const transitionEl = document.querySelector(".transition");

      if (!transitionOverlay || !pageMain || !transitionEl) return;

      function playTransition(url) {
        // Afficher le container de transition
        gsap.set(transitionEl, { display: "block" });

        // Définir les couleurs en fonction du thème
        const isDark = document.documentElement.classList.contains('is-dark');
        const startColor = isDark ? '#1C1C1C' : '#FAFAFA';
        const endColor = isDark ? '#111111' : '#E4E4E4';

        // État de départ de l'overlay
        gsap.set(transitionOverlay, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
        });

        // État de départ des contenus
        gsap.set([pageMain, navMenu], {
          transformOrigin: "50% 50% 0"
        });

        const tl = gsap.timeline({
          defaults: { ease: "power4.inOut", duration: 2 },
          onComplete: () => {
            window.location.href = url;
          }
        });

        // Animation simultanée :
        // 1. La page part en haut à DROITE
        tl.to(pageMain, {
          rotation: 10,   // Rotation POSITIVE pour aller à droite
          x: 300,         // Vers la droite
          y: -450,        // Vers le haut
          opacity: 0,
          scale: 1.5
        }, 0);

        // 2. Le menu part aussi en haut à DROITE
        tl.to(navMenu, {
          rotation: 10,   // Rotation POSITIVE pour aller à droite
          x: 300,         // Vers la droite
          y: -450,        // Vers le haut
          opacity: 0,
          scale: 1.5
        }, 0);

        // 3. L'overlay se déploie
        tl.to(transitionOverlay, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 175%, 0% 100%)"
        }, 0);

        // 4. La couleur change APRÈS que l'overlay soit bien visible (démarre à 0.8s)
        tl.fromTo(transitionOverlay,
          { backgroundColor: startColor },
          {
            backgroundColor: endColor,
            duration: 1.2,
            ease: "power4.inOut"
          },
          0.8); // Commence à 0.8 seconde au lieu de 0

        return tl;
      }

      // Liens internes uniquement
      document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute("href");
        const isExternal = url.startsWith("http") || url.startsWith("#") || url.startsWith("mailto");

        if (!isExternal) {
          link.addEventListener("click", e => {
            e.preventDefault();
            if (url !== window.location.pathname) {
              playTransition(url);
            }
          });
        }
      });

      // Navigation back/forward
      window.addEventListener("popstate", () => {
        playTransition(window.location.href);
      });
    }

    window.addEventListener("pageshow", () => {
      resetPageTransition();
    });









    function initElementAppear() {
      const elements = document.querySelectorAll(".element-appear .visual_overlay");

      elements.forEach((el) => {
        gsap.to(el, {
          height: "0%",
          duration: 0.6,
          ease: 'customElementAppear', // remplace par le nom de ton easing GSAP custom
          scrollTrigger: {
            trigger: el,
            start: "top bottom-=10%", // déclenche 10% au-dessus du bas du viewport
            toggleActions: "play none none none"
          }
        });
      });
    }



    function initPhoneValidation() {
      const phone = document.querySelector('input[type="tel"], input[name="phone"], input[name="Phone"]');
      if (!phone) return;

      // Améliore l'UX clavier + validation
      phone.setAttribute('inputmode', 'tel');
      phone.setAttribute('autocomplete', 'tel');
      phone.setAttribute('pattern', '^\\+?[0-9 ()-]{6,}$');

      // Filtre en temps réel (tape et collage)
      phone.addEventListener('input', (e) => {
        let v = e.target.value;

        // garde chiffres, espace, +, (), -
        v = v.replace(/[^0-9()+\- ]/g, '');

        // n'autorise le + qu'au début (supprime les autres)
        v = v.replace(/(?!^)\+/g, '');

        // compacte les espaces multiples (optionnel)
        v = v.replace(/ {2,}/g, ' ');

        e.target.value = v;
      });
    }

    function initCtaVisual() {
      document.querySelectorAll(".cta_visual").forEach((el) => {
        gsap.set(el, { width: "0rem" });

        let targetWidth = "10rem";

        if (window.innerWidth <= tabletBreakpoint) {
          targetWidth = "7rem";
        } if (window.innerWidth <= landscapeBreakpoint) {
          targetWidth = "4rem";
        }

        gsap.fromTo(el,
          { width: "0rem" },
          {
            width: targetWidth,
            duration: 1.2,
            delay: 0.4,
            ease: "custom",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      });
    }

    function initSmallLinkArrow() {
      document.querySelectorAll(".small-link_arrow").forEach((el) => {
        // Démarrage : largeur 0rem
        gsap.set(el, { opacity: "0" });

        gsap.to(el,
          {
            opacity: 1,
            duration: 1.5,
            ease: "custom",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              toggleActions: "play none none none",
              once: true
            }
          }
        );
      });
    }

    function initTextMonoAnimation() {
      // Animation pour les .text-mono qui ont un wrapper
      document.querySelectorAll(".text-mono_wrapper").forEach((wrapper) => {
        const textMono = wrapper.querySelector(".text-mono");
        if (textMono) {
          gsap.fromTo(textMono,
            {
              scale: 0.9,
              y: "120%"
            },
            {
              scale: 1,
              y: "0%",
              duration: 1,
              ease: "custom",
              scrollTrigger: {
                trigger: wrapper,
                start: "top 95%",
                once: true,
                toggleActions: "play none none none"
              }
            }
          );
        }
      });
    }

    function initTextAppear() {
      if (typeof SplitText === "undefined") {
        console.error("SplitText plugin is required for initTextAppear()");
        return;
      }

      document.querySelectorAll(".text-appear, .mono-appear").forEach((el) => {
        if (el.dataset.gsapInit === "1") return;
        el.dataset.gsapInit = "1";

        const split = new SplitText(el, { type: "words", wordsClass: "split-word" });

        // =================================================================
        // CORRECTION : On vérifie si SplitText a bien trouvé des mots
        // =================================================================
        if (!split.words || split.words.length === 0) {
          // Si l'élément est vide, on l'affiche simplement et on arrête.
          el.style.visibility = "visible";
          return;
        }
        // =================================================================

        // Wrap chaque mot dans un masque
        split.words.forEach((word) => {
          const wrapper = document.createElement("span");
          wrapper.classList.add("animated-word-classic");
          word.parentNode.insertBefore(wrapper, word);
          wrapper.appendChild(word);
        });

        // État initial
        gsap.set(split.words, { yPercent: 100, willChange: "transform" });

        // Ne révèle qu'après préparation
        el.style.visibility = "visible";

        ScrollTrigger.create({
          trigger: el,
          start: "top bottom-=5%",
          once: true,
          onEnter: () => {
            gsap.to(split.words, {
              yPercent: 0,
              duration: 0.5,
              ease: "power2.out",
              stagger: 0.02,
              onComplete: () => gsap.set(split.words, { willChange: "auto" }),
            });
          },
          onRefresh(self) {
            if (self.progress === 1) {
              gsap.set(split.words, { yPercent: 0, clearProps: "transform" });
            }
          },
        });

        el._split = split;
      });
    }

    // Init côté Webflow au bon moment
    window.Webflow ||= [];
    window.Webflow.push(() => {
      const run = () => {
        initTextAppear();
        ScrollTrigger.refresh();
      };
      if (document.readyState === "complete") run();
      else window.addEventListener("load", run);
    });

    function initTopNavAnimation() {
      gsap.to(".nav-top", {
        y: 0,
        duration: 1,
        ease: "custom"
      });
    }

    function initBottomNavAnimation() {
      gsap.to(".nav-bottom", {
        y: 0,
        duration: 1,
        ease: "custom"
      });
    }
      







    function initGrowAppearAnimations() {
      const elements = document.querySelectorAll(".grow-appear");
      const elements2 = document.querySelectorAll(".archives_visual_wrapper");

      elements.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "latestVisualAppear",
          delay: i * 0.05,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          }
        });
      });

      elements2.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "overlayBezier",
          delay: i * 0.02,
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          }
        });
      });

    }

    function initSimpleAppearAnimations() {
      const elements = document.querySelectorAll(".simple-appear");

      elements.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          delay: 0.6,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      });

      const elements2 = document.querySelectorAll(".simple-appear-no-delay");

      elements2.forEach((el, i) => {
        gsap.to(el, {
          opacity: 1,
          y: 0,
          duration: 1.5,
          ease: "power4.out",
          scrollTrigger: {
            trigger: el,
            start: "top 95%",
            toggleActions: "play none none none"
          }
        });
      });
    }







    /*
    function resetPageTransition() {
      gsap.set(".transition", { display: "none" });
      gsap.set(".transition_background", { opacity: 0 });
      gsap.set(".transition_content", { width: "0vw", height: "80vh" });
      gsap.set(".logo-instance.is-transition .footer_logo", { yPercent: 105 });
      gsap.set(".transition_overlay", { height: 0 });
    }
    
    function initPageTransition() {
      resetPageTransition();
      
      const transitionEl = document.querySelector(".transition");
      const logoEl = document.querySelector(".logo-instance.is-transition .footer_logo");
      const bgEl = document.querySelector(".transition_background");
      const contentEl = document.querySelector(".transition_content");
      const overlayEl = document.querySelector(".transition_overlay");
      
      gsap.set(logoEl, { yPercent: 105 });
    
      if (!transitionEl || !bgEl || !contentEl || !overlayEl) return;
    
      function playTransition(url) {
        gsap.set(transitionEl, { display: "block" });
    
        const tl = gsap.timeline({
          defaults: { ease: "custom" },
          onComplete: () => {
            window.location.href = url;
          }
        });
    
        // Étape 1 : fade bg + scale content + fade content
        tl.to(bgEl, { opacity: 1, duration: 1.4 }, 0);
        tl.to(contentEl, { width: "80vw", duration: 1 }, 0);
        tl.to(logoEl, { yPercent: 0, duration: 0.5 }, "-=1.2");
        tl.to(contentEl, { width: "100vw", height: "100vh", duration: 0.5 }, "-=0.2");
    
        // Étape overlays (5 bandes) : 9% de hauteur chacune, avec décalages
        const overlays = gsap.utils.toArray(".transition_overlay"); 
        // décalages : 0, 0.07, 0.14, 0.21, 0.28s
        const baseDelay = 0.07;
        
        tl.add("overlaysStart", ">"); // démarrer les bandes juste après l’étape précédente
        overlays.forEach((el, i) => {
          tl.to(el, {
            height: "100%",
            duration: 1.1,
            ease: "overlayBezier"
          }, `overlaysStart+=${i * baseDelay}`);
        });
    
        return tl;
      }
    
      // Liens internes uniquement
      document.querySelectorAll('a[href]').forEach(link => {
        const url = link.getAttribute("href");
        const isExternal = url.startsWith("http") || url.startsWith("#") || url.startsWith("mailto");
    
        if (!isExternal) {
          link.addEventListener("click", e => {
            e.preventDefault();
            if (url !== window.location.pathname) {
              playTransition(url);
            }
          });
        }
      });
    
      // Navigation back/forward
      window.addEventListener("popstate", () => {
        playTransition(window.location.href);
      });
    }
    
    window.addEventListener("pageshow", () => {
      resetPageTransition();
    });
    */











    function initDarkModeControls() {
      // Protection contre double init
      if (window._darkModeInitialized) {
        console.warn('⚠️ initDarkModeControls déjà initialisée, on skip');
        return;
      }
      window._darkModeInitialized = true;

      const rootEl = document.documentElement;
      const desktopEl = document.getElementById("modeSwitch");
      const mobileEl = document.getElementById("modeSwitch2");

      // 🔥 DEBUG 1 : Vérifier que les éléments sont trouvés
      console.log('🔍 initDarkModeControls appelée', {
        desktopEl,
        mobileEl,
        rootElHasClass: rootEl.className
      });

      // Lottie mobile (facultatif)
      const lottieUrl = "https://studionamma.vercel.app/dark-light.json";
      const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
      const lottieDuration = reduceMotion ? 0.001 : 0.8;
      const DARK_PERCENT = 0.22;
      const LIGHT_PERCENT = 1.00;

      let anim = null, lottieReady = false;
      if (mobileEl && window.lottie) {
        anim = lottie.loadAnimation({
          container: mobileEl,
          renderer: "svg",
          loop: false,
          autoplay: false,
          path: lottieUrl
        });
        anim.addEventListener("DOMLoaded", () => {
          lottieReady = true;
          syncLottieToState(false);
        });
      }

      const isDark = () => rootEl.classList.contains("is-dark");

      function applyTheme(darkOn, { animateLottie = false } = {}) {
        // 🔥 DEBUG 5 : Vérifier l'application du thème
        console.log('🔍 applyTheme appelée:', { darkOn, animateLottie });

        // Active les mini-transitions le temps du toggle
        rootEl.classList.add("theme-toggling");

        // ⬇️ Applique le thème sur <html> (aligné avec ton CSS embed)
        rootEl.classList.toggle("is-dark", darkOn);
        rootEl.setAttribute("data-theme", darkOn ? "dark" : "light");
        localStorage.setItem("darkMode", darkOn ? "enabled" : "disabled");

        updateDesktopText(darkOn);
        updateAria(darkOn);
        syncLottieToState(animateLottie);

        // Retire la classe après la durée de transition
        setTimeout(() => rootEl.classList.remove("theme-toggling"), 350);
      }

      function updateDesktopText(darkOn) {
        const first = desktopEl?.querySelector(".link_first .text-mono");
        const second = desktopEl?.querySelector(".link_second .text-mono");
        if (!first || !second) return;
        const label = darkOn ? "Light mode" : "Dark mode";
        first.textContent = label;
        second.textContent = label;
      }

      function updateAria(darkOn) {
        [desktopEl, mobileEl].forEach(btn => {
          if (!btn) return;
          btn.setAttribute("role", "button");
          btn.setAttribute("tabindex", "0");
          btn.setAttribute("aria-pressed", String(darkOn));
        });
      }

      function getTargetFrame(dark) {
        if (!anim) return 0;
        const total = anim.totalFrames || 0;
        const pct = dark ? DARK_PERCENT : LIGHT_PERCENT;
        return Math.max(0, Math.min(total, Math.floor(total * pct)));
      }

      function syncLottieToState(animate) {
        if (!anim || !lottieReady) return;
        const toFrame = getTargetFrame(isDark());
        if (animate && !reduceMotion) {
          const from = anim.currentFrame ?? 0;
          const proxy = { f: from };
          gsap.killTweensOf(proxy);
          gsap.to(proxy, {
            f: toFrame,
            duration: lottieDuration,
            ease: "power1.inOut",
            onUpdate: () => anim.goToAndStop(proxy.f, true)
          });
        } else {
          anim.goToAndStop(toFrame, true);
        }
      }

      // --- INIT: lit la valeur stockée (défaut: suit prefers-color-scheme fait dans <head>)
      const stored = localStorage.getItem("darkMode"); // "enabled" | "disabled" | null
      const startDark = stored === "enabled";

      console.log('🔍 État initial:', { stored, startDark });

      applyTheme(startDark, { animateLottie: false });


      const toggle = (e) => {
        console.log('🔥 TOGGLE APPELÉ !', e);
        applyTheme(!isDark(), { animateLottie: true });
      };

      // 🔥 DEBUG 4 : Vérifier l'attachement des listeners
      if (desktopEl) {
        console.log('✅ Attachement listener desktop');
        desktopEl.addEventListener("click", toggle);
      } else {
        console.warn('❌ desktopEl introuvable');
      }

      if (mobileEl) {
        console.log('✅ Attachement listener mobile');
        mobileEl.addEventListener("click", toggle);
      } else {
        console.warn('❌ mobileEl introuvable');
      }
    }



    // Appelle ça une fois (par ex. dans initCommonPageElements() ou juste après initializeSite())
    function initContactFormStates() {
      const root = document.querySelector('.section_contact');
      if (!root) return;

      const wfBlock = root.querySelector('.contact_form-block.w-form');
      const wfForm = root.querySelector('#wf-form-Contact-Form');
      const wfDone = root.querySelector('.w-form-done');
      const wfFail = root.querySelector('.w-form-fail');
      const customBox = root.querySelector('.contact_success');
      const heading = customBox?.querySelector('.heading-style-h2');
      const visual = customBox?.querySelector('.success_visual');
      const ctaLink = customBox?.querySelector('.contact_success_mono_wrapper .link'); // <-- bouton

      // garde-fous
      if (!wfBlock || !wfForm || !wfDone || !customBox || !heading) return;

      let visualSize = "10rem";
      if (window.innerWidth <= tabletBreakpoint) {
        visualSize = "7rem";
      } if (window.innerWidth <= landscapeBreakpoint) {
        visualSize = "4.4rem";
      }

      // états init
      gsap.set(customBox, { display: 'none' });
      gsap.set(heading, { yPercent: 140 });
      if (visual) gsap.set(visual, { width: '0rem' });
      if (ctaLink) gsap.set(ctaLink, { yPercent: 110 }); // <-- bouton caché en bas

      let played = false;
      const showCustomSuccess = () => {
        if (played) return;
        played = true;

        // cacher le success Webflow et afficher ton bloc
        wfDone.style.display = 'none';

        const tl = gsap.timeline();
        tl.set(customBox, { display: 'flex' })
          // heading
          .to(heading, { yPercent: 0, duration: 1.4, ease: 'custom' })
          // span visuel, démarre -0.4s avant la fin du heading
          .to(visual, { width: visualSize, duration: 1, ease: 'custom' }, '-=0.4')
          // bouton .link, démarre +0.4s après le début du heading
          .to(ctaLink, { yPercent: 0, duration: 1, ease: 'custom' }, '>-1');
        // explication : '>-1' = 0.4s après le début du heading (heading = 1.4s, donc on lance à t=0.4)
      };

      // helper de visibilité
      const successIsVisible = () =>
        wfDone && getComputedStyle(wfDone).display !== 'none' &&
        getComputedStyle(wfDone).visibility !== 'hidden';

      // observe les bascules que Webflow fait sur .w-form-done / le wrapper
      const check = () => { if (successIsVisible()) showCustomSuccess(); };

      const mo = new MutationObserver(check);
      mo.observe(wfBlock, {
        attributes: true,
        attributeFilter: ['style', 'class'],
        childList: true,
        subtree: true
      });

      // après un submit, revérifie plusieurs fois (Webflow AJAX)
      wfForm.addEventListener('submit', () => {
        setTimeout(check, 50);
        setTimeout(check, 200);
        setTimeout(check, 600);
      });

      // si, pour une raison quelconque, le success est déjà visible au chargement
      check();
    }

    window.initContactFormSuccess = initContactFormStates;





    function initCommonPageElements() {
      document.querySelectorAll('.heading-appear').forEach(el => el.classList.add('gsap-ready'));

      // --- CURSOR (Détection des nouveaux éléments) ---

      const cursor = document.querySelector(".custom-cursor");
      if (cursor) {
        const hoverElements = document.querySelectorAll("[data-cursor-hover]");
        hoverElements.forEach((el) => {
          el.addEventListener("mouseenter", () => {
            cursor.classList.add("hover");
            cursor.innerHTML = el.getAttribute("data-cursor-hover");
          });
          el.addEventListener("mouseleave", () => {
            cursor.classList.remove("hover");
            cursor.innerHTML = "";
          });
        });
      }

      // --- STRETCH LOGO FOOTER ---

      if (window.innerWidth > landscapeBreakpoint) {
        setTimeout(() => {
          ScrollTrigger.refresh();
          gsap.fromTo(".footer_logo_stretch .logo-instance", {
            height: "0px",
            transformOrigin: "top"
          }, {
            height: "100%",
            duration: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".footer_logo_fill",
              start: "top bottom-=51px",
              end: "bottom bottom-=51px",
              scrub: 0.05,
            }
          });
        }, 1500);
      }

      window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
      });

      // --- ANIMATION H1 ---

      const textElementsH1 = gsap.utils.toArray('.heading-appear');

      textElementsH1.forEach((element) => {
        const st = new SplitText(element, {
          type: 'words,chars',
          wordsClass: 'animated-word',
          charsClass: 'animated-char'
        });
        const chars = st.chars;
        gsap.set(chars, { yPercent: 150, display: 'inline-block' });

        chars[0]?.offsetTop;

        gsap.to(chars, {
          yPercent: 9,
          stagger: 0.027,
          duration: 1.5,
          ease: 'power4.out',
          scrollTrigger: { trigger: element, start: 'top 95%' }
        });
      });

      function initLineAppear() {
        console.log("✅ initLineAppear : la fonction est appelée !");

        if (typeof SplitText === "undefined") {
          console.error("SplitText plugin is required for initLineAppear()");
          return;
        }

        const elements = gsap.utils.toArray('.quote_text, .line-appear');

        console.log(`🔎 initLineAppear : ${elements.length} élément(s) trouvé(s).`, elements);

        elements.forEach((el) => {
          // évite double init (Webflow/SPA)
          if (el.dataset.gsapInit === "1") return;
          el.dataset.gsapInit = "1";

          // garder caché via CSS avant prep (pas de flash)
          gsap.set(el, { autoAlpha: 0 });

          // split en lignes
          const split = new SplitText(el, { type: 'lines', linesClass: 'animated-line' });

          // wrap chaque ligne dans un masque overflow hidden
          split.lines.forEach((line) => {
            const mask = document.createElement('span');
            mask.className = 'line-mask';
            line.parentNode.insertBefore(mask, line);
            mask.appendChild(line);
          });

          // état initial
          gsap.set(split.lines, { yPercent: 110, willChange: 'transform' });

          // révélé seulement maintenant, après préparation
          gsap.set(el, { autoAlpha: 1 });

          // Trigger qui LANCE le tween au moment de l’entrée
          ScrollTrigger.create({
            trigger: el,
            start: 'top 95%',
            once: true,
            onEnter: () => {
              gsap.to(split.lines, {
                yPercent: 0,
                duration: 1.2,
                ease: 'power4.out',
                stagger: 0.12,
                onComplete: () => gsap.set(split.lines, { willChange: 'auto' }),
              });
            },
            onRefresh(self) {
              // si déjà vu avant un refresh (Chrome/Arc), force l’état final sans stagger
              if (self.progress === 1) {
                gsap.set(split.lines, { yPercent: 0, clearProps: 'transform' });
              }
            },
          });

          // stocke la ref si besoin de revert
          el._split = split;
        });
      }

      // Show/Hide video preview in home hero

      const visuals = document.querySelectorAll('.visuals_component');
      const heroVisuals = document.querySelectorAll('.hero_bottom_visual');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            heroVisuals.forEach(el => el.style.opacity = 0);
          } else {
            heroVisuals.forEach(el => el.style.opacity = 1);
          }
        });
      }, { threshold: 0.1 }); // déclenche si au moins 10% est visible

      visuals.forEach(el => observer.observe(el));

      initElementAppear();
      initCtaVisual();
      initTextMonoAnimation();
      initTextAppear();
      initTopNavAnimation();
      initBottomNavAnimation();
      initSmallLinkArrow();
      initGrowAppearAnimations();
      initSimpleAppearAnimations();
      initPageTransition();
      initDarkModeControls();
      initContactFormSuccess();
      initPhoneValidation();
      initLineAppear();
    }









    // =================================================================
    // ==           GESTION DU BANDEAU DE COOKIE                      ==
    // =================================================================
    const COOKIE_NAME = 'cookieConsent';
    const COOKIE_DURATION = 395; // jours (13 mois, durée maximale recommandée)

    // Fonction pour créer/lire un cookie
    function setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      const expires = "expires=" + date.toUTCString();
      document.cookie = name + "=" + value + ";" + expires + ";path=/;SameSite=Lax";
    }

    function getCookie(name) {
      const nameEQ = name + "=";
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length);
        }
      }
      return null;
    }

    // Initialisation du bandeau
    function initCookieBanner() {
      const cookieBanner = document.getElementById('cookie');
      const acceptButton = document.getElementById('acceptCookie');

      // Vérifier si l'utilisateur a déjà accepté
      if (getCookie(COOKIE_NAME) === 'accepted') {
        cookieBanner.style.display = 'none';
        return;
      }

      // Afficher le bandeau avec animation
      cookieBanner.style.opacity = '0';
      cookieBanner.style.display = 'flex';

      // Animation d'apparition avec easing
      setTimeout(() => {
        cookieBanner.style.transition = 'opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        cookieBanner.style.opacity = '1';
      }, 100);

      // Gestion du clic sur "Accept cookies"
      acceptButton.addEventListener('click', function () {
        // Créer le cookie
        setCookie(COOKIE_NAME, 'accepted', COOKIE_DURATION);

        // Animation de disparition
        cookieBanner.style.transition = 'opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        cookieBanner.style.opacity = '0';

        // Cacher complètement après l'animation
        setTimeout(() => {
          cookieBanner.style.display = 'none';
        }, 400);
      });
    }






































    // =================================================================
    // ==           LANCEMENT DU SITE (AVEC PRELOADER VIDÉO)         ==
    // =================================================================

    const preloader = document.querySelector('.preloader');

    const initializeSite = async () => {
      initOnce(); // Lenis, menu, etc.
      try { await document.fonts.ready; } catch (e) { /* no-op */ }
      initCommonPageElements();
      initCookieBanner();
    };

    if (sessionStorage.getItem('loaderHasBeenDisplayed')) {
      // Pas de preloader → go direct
      if (preloader) preloader.style.display = 'none';
      initializeSite();
    } else {
      const videoPlayer = document.querySelector('#preloader-tbd');

      if (!videoPlayer) {
        if (preloader) preloader.style.display = 'none';
        initializeSite();
      } else {
        // Logique de thème
        const storedTheme = localStorage.getItem('darkMode');
        const useDarkTheme = storedTheme ? (storedTheme === 'enabled') : false;

        // Logique mobile/desktop
        const isMobile = window.innerWidth < 767;
        const darkVideo = isMobile
          ? 'https://studionamma.vercel.app/videos/9-16_dark-mobile.mp4'
          : 'https://studionamma.vercel.app/videos/16-9_dark-hd.mp4';
        const lightVideo = isMobile
          ? 'https://studionamma.vercel.app/videos/9-16_light-mobile.mp4'
          : 'https://studionamma.vercel.app/videos/16-9_light-hd.mp4';


        const onVideoEnd = () => {
          // ✅ Init AVANT le fade du preloader
          initializeSite();

          // Petit délai pour que GSAP prépare les états initiaux
          gsap.delayedCall(0.15, () => {
            gsap.to(preloader, {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                preloader.style.display = 'none';
                sessionStorage.setItem('loaderHasBeenDisplayed', 'true');
                document.documentElement.classList.remove('show-preloader');
              }
            });
          });
        };

        const q = (x) => document.querySelectorAll(x);
        const px = { y: 520 };
        const applyWave = () => {
          document.getElementById('tbdBandP').setAttribute('transform', 'translate(' + (-px.x || 0) + ',' + (px.y - 90) + ')');
          document.getElementById('tbdBelowP').setAttribute('transform', 'translate(' + (-px.x || 0) + ',' + (px.y - 90) + ')');
        };
        px.x = 0; applyWave();
        gsap.set('#tbd-word', { svgOrigin: '120 60', scale: 5, x: 305, y: 140 });
        gsap.set('.tbd_o', { strokeDasharray: 1, strokeDashoffset: 1 });
        gsap.set('.tbd_a', { scale: 0, transformOrigin: '50% 50%' });
        const tl = gsap.timeline({ onComplete: onVideoEnd });
        tl.to('.tbd_o', { strokeDashoffset: 0, duration: 2.6, ease: 'power1.inOut', stagger: 0.25 }, 0)
          .to('.tbd_a', { scale: 1, duration: 0.3, stagger: 0.05, ease: 'back.out(3)' }, 0.2)
          .to('#tbd-word', { scale: 1, x: 0, y: 0, duration: 3.6, ease: 'power2.inOut' }, 0.4)
          .to(['#tbd-anchors', '#tbd-guide'], { opacity: 0, duration: 0.6 }, 3.6)
          .set(['#tbd-white', '#tbd-blue'], { opacity: 1 }, 3.9)
          .to(px, { y: -140, x: 250, duration: 1.8, ease: 'power1.inOut', onUpdate: applyWave }, 3.9)
          .to('#tbd-outline', { opacity: 0, duration: 0.4 }, 5.0)
          .to('#tbd-word', { y: 4, duration: 0.15, yoyo: true, repeat: 1 }, 6.0)
          .to({}, { duration: 0.8 }, 6.2);
      }
    }

    window.addEventListener('load', function () {
      document.documentElement.classList.remove('no-theme-transitions');
    });

