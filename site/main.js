(function () {
  "use strict";

  var root = document.documentElement;

  /* ── Nummer kopieren ─────────────────────────────────────── */
  function setupCopy() {
    var btn = document.querySelector("[data-copy]");
    var status = document.querySelector("[data-copy-status]");
    var number = document.querySelector("[data-number]");
    if (!btn || !status || !number) return;
    if (!(navigator.clipboard && navigator.clipboard.writeText)) return; // Nummer bleibt markierbar sichtbar

    btn.hidden = false;
    btn.addEventListener("click", function () {
      navigator.clipboard.writeText(btn.getAttribute("data-copy")).then(
        function () {
          status.textContent = "Kopiert";
        },
        function () {
          status.textContent = "Kopieren hat nicht geklappt. Die Nummer ist markiert, einfach selbst kopieren";
          var range = document.createRange();
          range.selectNodeContents(number);
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
        }
      );
    });
  }

  /* ── Fax und Brieftaube: nur lokale Reaktionen ───────────── */
  function setupFakes() {
    var fakes = document.querySelectorAll("div[data-fake]");
    Array.prototype.forEach.call(fakes, function (el) {
      var replies = el.getAttribute("data-fake").split("|");
      var out = el.parentNode.querySelector(".lt__reply");
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = el.className;
      btn.setAttribute("data-lt", "");
      while (el.firstChild) btn.appendChild(el.firstChild);
      el.parentNode.replaceChild(btn, el);

      var n = 0;
      btn.addEventListener("click", function () {
        out.textContent = replies[Math.min(n, replies.length - 1)];
        n++;
      });
    });
  }

  setupCopy();
  setupFakes();

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  if (!gsap || !ScrollTrigger) return; // statische Fotostory bleibt vollständig

  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });

  var mm = gsap.matchMedia();

  mm.add(
    {
      motion: "(prefers-reduced-motion: no-preference)",
      roomy: "(min-height: 521px)"
    },
    function (ctx) {
      if (!ctx.conditions.motion) return;
      var roomy = ctx.conditions.roomy;

      try {
        root.classList.add("is-motion");
        if (roomy) root.classList.add("is-pinning");

        introDrift();
        lowerThirds();
        beachWindow();
        spaDrift();
        shishaWipe();
        if (roomy) timeGag();
        if (roomy) stadiumZoom();
        fakeout();
      } catch (err) {
        // Animation fehlgeschlagen: alles zurück auf den statischen Zustand
        if (window.console) console.error(err);
        setTimeout(function () { mm.revert(); }, 0);
      }

      return function () {
        root.classList.remove("is-motion", "is-pinning");
      };
    }
  );

  /* Senderlogo wechselt beim Finale; kein Bewegungseffekt.
     Erst nach den Pins anlegen, sonst fehlt den Positionen der Pin-Abstand. */
  var bug = document.querySelector("[data-bug]");
  if (bug) {
    var box = bug.parentNode;
    // nach Resize/Rotation kann sich die Position ohne Enter/Leave ändern, daher auch onRefresh
    var past = function (self) { return self.scroll() >= self.start; };
    ScrollTrigger.create({
      trigger: "[data-finale]",
      start: "top 60%",
      onEnter: function () { bug.textContent = "Finale"; },
      onLeaveBack: function () { bug.textContent = "Folge 1"; },
      onRefresh: function (self) { bug.textContent = past(self) ? "Finale" : "Folge 1"; }
    });
    // Sobald Televoting und Kontaktliste nach oben laufen, geht das Logo aus dem Weg und verdeckt keine Aktion
    ScrollTrigger.create({
      trigger: "[data-vote]",
      start: "top 96px",
      onEnter: function () { box.classList.add("is-off"); },
      onLeaveBack: function () { box.classList.remove("is-off"); },
      onRefresh: function (self) { box.classList.toggle("is-off", past(self)); }
    });
  }

  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  /* ── Einzelne Beats ──────────────────────────────────────── */

  function introDrift() {
    gsap.to(".intro__title", {
      yPercent: -18,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: { trigger: ".intro", start: "top top", end: "bottom top", scrub: true }
    });
  }

  // Bauchbinden wischen von links rein; rückwärts scrollen nimmt sie wieder raus
  function lowerThirds() {
    var hidden = "inset(0% 100% 0% 0%)";
    var shown = "inset(0% 0% 0% 0%)";

    gsap.utils.toArray("[data-lt]").forEach(function (lt) {
      var bars = lt.querySelectorAll(".lt__name, .lt__sub");
      var isIntro = !!lt.closest(".intro");
      var tl = gsap.timeline({
        delay: isIntro ? 1.1 : 0,
        scrollTrigger: isIntro ? null : {
          trigger: lt,
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      });
      tl.fromTo(bars, { clipPath: hidden }, {
        clipPath: shown,
        duration: 0.55,
        ease: "expo.out",
        stagger: 0.12
      });
    });
  }

  // Erstes Bildfenster öffnet sich beim ersten Wischen
  function beachWindow() {
    var fig = document.querySelector("[data-window]");
    var tl = gsap.timeline({
      scrollTrigger: { trigger: fig, start: "top 98%", end: "top 20%", scrub: true }
    });
    tl.fromTo(fig, { clipPath: "inset(16% 18% 16% 18%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "power2.out" }, 0)
      .fromTo(fig.querySelector("img"), { scale: 1.18 }, { scale: 1, ease: "power2.out" }, 0);
  }

  function spaDrift() {
    var fig = document.querySelector("[data-drift]");
    gsap.fromTo(fig.querySelector("img"), { scale: 1.12, yPercent: -3 }, {
      scale: 1,
      yPercent: 0,
      ease: "none",
      scrollTrigger: { trigger: fig, start: "top bottom", end: "center center", scrub: true }
    });
  }

  // Shisha: aus einem schmalen Ausschnitt zum ganzen Bild, wie eine TV-Blende
  function shishaWipe() {
    var fig = document.querySelector("[data-wipe]");
    gsap.fromTo(fig, { clipPath: "inset(0% 0% 0% 64%)" }, {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: "power1.out",
      scrollTrigger: { trigger: fig, start: "top 92%", end: "top 28%", scrub: true }
    });
  }

  function timeGag() {
    var section = document.querySelector("[data-timegag]");
    var stage = section.querySelector(".timegag__stage");
    var five = section.querySelector(".timegag__five");
    var twenty = section.querySelector(".timegag__twenty");
    var line = section.querySelector(".timegag__line");
    var punch = section.querySelector(".timegag__punch");

    gsap.set(five, { "--strike": 0 });
    gsap.set(twenty, { autoAlpha: 0, y: 12 });
    gsap.set(punch, { autoAlpha: 0, y: 24 });

    var tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: stage,
        start: "center center",
        end: "+=110%",
        pin: true,
        scrub: 0.4
      }
    });
    tl.to({}, { duration: 0.6 })
      .to(five, { "--strike": 1, duration: 0.35 })
      .to(twenty, { autoAlpha: 1, y: 0, duration: 0.35 }, "<0.1")
      .to({}, { duration: 0.6 })
      .to(line, { color: getComputedStyle(root).getPropertyValue("--ink-dim").trim(), duration: 0.35 }) // nur die Zeile dimmen; „zwanzig“ bleibt pink
      .to(punch, { autoAlpha: 1, y: 0, duration: 0.4 }, "<")
      .to({}, { duration: 0.5 });
  }

  // Dramatischer Zoom: Tolgas Gesicht → das Paar → das Stadion
  function stadiumZoom() {
    var section = document.querySelector("[data-reveal]");
    var stage = section.querySelector(".reveal__stage");
    var img = stage.querySelector("img");
    var label = stage.querySelector(".super");
    var face = { x: parseFloat(img.dataset.faceX), y: parseFloat(img.dataset.faceY) };
    var pair = { x: parseFloat(img.dataset.pairX), y: parseFloat(img.dataset.pairY) };

    // Punkt p bei Skalierung s in die Bildmitte holen
    function aim(p, s) {
      return { scale: s, xPercent: -s * (p.x - 0.5) * 100, yPercent: -s * (p.y - 0.5) * 100 };
    }

    // Start nur 2,2-fach: das Stadionfoto ist 1122 px breit, stärker wird es auf Retina weich
    gsap.set(img, Object.assign({ transformOrigin: "50% 50%" }, aim(face, 2.2)));
    gsap.set(label, { autoAlpha: 0 });

    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: "top top",
        end: "+=140%",
        pin: true,
        scrub: 0.5,
        anticipatePin: 1
      }
    });
    tl.to({}, { duration: 0.35 })
      .to(img, Object.assign({ duration: 1, ease: "power2.inOut" }, aim(pair, 1.4)))
      .to({}, { duration: 0.3 })
      .to(img, Object.assign({ duration: 1, ease: "power2.inOut" }, aim({ x: 0.5, y: 0.5 }, 1)))
      .to(label, { autoAlpha: 1, duration: 0.2 }, "-=0.15")
      .to({}, { duration: 0.3 });
  }

  function fakeout() {
    gsap.fromTo("[data-almost]", { autoAlpha: 0, scale: 1.5, rotate: -8 }, {
      autoAlpha: 1,
      scale: 1,
      rotate: -3,
      duration: 0.5,
      ease: "back.out(2)",
      scrollTrigger: { trigger: "[data-almost]", start: "top 85%", toggleActions: "play none none reverse" }
    });
  }
})();
