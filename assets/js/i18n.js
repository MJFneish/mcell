(function () {
  var STORAGE_KEY = "mcell-lang";

  var BOOTSTRAP_CSS = {
    en: {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
      integrity: "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
    },
    ar: {
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.rtl.min.css",
      integrity: "sha384-nU14brUcp6StFntEOOEBvcJm4huWjB0OcIeQ3fltAfSmuZFrkAif0T+UtNGlKKQv",
    },
  };

  var STRINGS = {
    en: {
      "nav.home": "Home",
      "nav.charges": "Charges",
      "nav.apps": "Apps",
      "nav.games": "Games",
      "nav.contacts": "Contacts",
      "nav.backToHome": "Back to Home",

      "hero.badge": "Instant Top-Ups & Subscriptions",
      "hero.slide1.title": "Mobile & Internet Recharge, Instantly",
      "hero.slide1.desc": "Top up Alfa, Touch and Ogero in seconds — no app, no lines, just a quick message on WhatsApp.",
      "hero.slide2.title": "Every App & Game You Love",
      "hero.slide2.desc": "iTunes, Netflix, PlayStation, Steam, PUBG, Valorant and more — subscriptions and top-ups, all in one place.",
      "hero.slide3.title": "Fast, Secure & Always on WhatsApp",
      "hero.slide3.desc": "Real people, real fast replies. Message us anytime and get your order sorted in minutes.",

      "cta.getInTouch": "get in touch",
      "cta.messageUs": "Message us",
      "cta.checkForMore": "Check For More",
      "cta.submit": "Submit",

      "features.instant.title": "Instant Delivery",
      "features.instant.desc": "Top-ups delivered in minutes",
      "features.secure.title": "Secure Payment",
      "features.secure.desc": "Trusted, verified transactions",
      "features.prices.title": "Best Prices",
      "features.prices.desc": "Competitive rates, always",
      "features.support.title": "24/7 Support",
      "features.support.desc": "Reach us anytime on WhatsApp",

      "charges.eyebrow": "Top-Up Instantly",
      "charges.title": "Mobile & Internet Charges",
      "charges.sub": "Recharge your line or internet account in seconds — pick your provider below.",

      "apps.eyebrow": "Digital Subscriptions",
      "apps.title": "Apps & Streaming",
      "apps.sub": "Gift cards, subscriptions and credit for the platforms you already use.",
      "apps.itunes": "Itunes",
      "apps.netflix": "Netflix",
      "apps.playStore": "Play Store",
      "apps.playstation": "Playstation",
      "apps.steam": "Steam",
      "apps.shahid": "Shahid",

      "games.eyebrow": "Level Up",
      "games.title": "Game Top-Ups",
      "games.sub": "Subscriptions, in-game currency and event passes for your favorite titles.",
      "games.pubg": "Top up UC instantly for the latest skins, the Royale Pass and in-game bundles.",
      "games.valorant": "Recharge VP for the newest skins, the battle pass and agent unlocks.",
      "games.fifa": "Get FC Points for player packs, Ultimate Team upgrades and more.",
      "games.fortnite": "Load up V-Bucks for skins, the Battle Pass and item shop drops.",
      "games.brawlStars": "Top up Gems for new brawlers, skins and the Brawl Pass.",
      "games.callOfDuty": "Recharge CP for battle passes, weapon blueprints and bundles.",
      "games.clashOfClans": "Top up Gems to rush builds, troops and upgrades in your village.",
      "games.clashRoyale": "Recharge Gems for chests, card upgrades and Pass Royale rewards.",
      "games.deltaForce": "Top up in-game credits for operator skins, weapons and battle pass tiers.",
      "games.freeFire": "Recharge Diamonds for characters, skins and Elite Pass access.",
      "games.lordsMobile": "Top up Gems to speed up building, training and kingdom upgrades.",
      "games.minecraft": "Load up Minecoins for skins, texture packs and Marketplace content.",

      "gameTitle.pubg": "PUBG",
      "gameTitle.valorant": "Valorant",
      "gameTitle.fifa": "FIFA",
      "gameTitle.fortnite": "Fortnite",
      "gameTitle.brawlStars": "Brawl Stars",
      "gameTitle.callOfDuty": "Call of Duty",
      "gameTitle.clashOfClans": "Clash of Clans",
      "gameTitle.clashRoyale": "Clash Royale",
      "gameTitle.deltaForce": "Delta Force",
      "gameTitle.freeFire": "Free Fire",
      "gameTitle.lordsMobile": "Lords Mobile",
      "gameTitle.minecraft": "Minecraft",

      "contact.eyebrow": "Say Hello",
      "contact.location": "Bedias, Sour, Lebanon",

      "contactUs.title": "Get In Touch",
      "contactUs.sub": "If you have any questions, just fill in the contact form, and we will answer you shortly.",
      "contactUs.labelName": "Your Name",
      "contactUs.labelEmail": "E-mail",
      "contactUs.labelPhone": "Phone",
      "contactUs.labelMessage": "Message",
      "contactUs.placeholderName": "Name",
      "contactUs.placeholderEmail": "someone@email.com",
      "contactUs.placeholderPhone": "xxx-xxx-xxxx",
      "contactUs.placeholderMessage": "Your Message",

      "footer.brand": "MCell",
      "footer.rights": "All rights reserved.",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsConditions": "Terms and Condition",

      "aria.whatsapp": "Chat with us on WhatsApp",
      "aria.backToTop": "Back to top",
      "aria.langSwitch": "Language",

      "legal.enOnly": "This document is currently available in English only.",
    },
    ar: {
      "nav.home": "الرئيسية",
      "nav.charges": "الشحن",
      "nav.apps": "التطبيقات",
      "nav.games": "الألعاب",
      "nav.contacts": "تواصل معنا",
      "nav.backToHome": "العودة إلى الرئيسية",

      "hero.badge": "شحن واشتراكات فورية",
      "hero.slide1.title": "شحن الخط والإنترنت فورًا",
      "hero.slide1.desc": "اشحن ألفا وتاتش وأوجيرو خلال ثوانٍ — بدون تطبيقات وبدون انتظار، فقط رسالة سريعة عبر واتساب.",
      "hero.slide2.title": "كل تطبيق ولعبة تحبها",
      "hero.slide2.desc": "آيتونز، نتفليكس، بلايستيشن، ستيم، ببجي، فالورانت وغيرها — كل الاشتراكات والشحن في مكان واحد.",
      "hero.slide3.title": "سريع وآمن ومتوفر دائمًا على واتساب",
      "hero.slide3.desc": "أشخاص حقيقيون وردود سريعة. راسلنا في أي وقت واحصل على طلبك خلال دقائق.",

      "cta.getInTouch": "تواصل معنا",
      "cta.messageUs": "راسلنا",
      "cta.checkForMore": "عرض المزيد",
      "cta.submit": "إرسال",

      "features.instant.title": "توصيل فوري",
      "features.instant.desc": "يتم تفعيل الشحن خلال دقائق",
      "features.secure.title": "دفع آمن",
      "features.secure.desc": "معاملات موثوقة ومضمونة",
      "features.prices.title": "أفضل الأسعار",
      "features.prices.desc": "أسعار تنافسية دائمًا",
      "features.support.title": "دعم على مدار الساعة",
      "features.support.desc": "تواصل معنا في أي وقت عبر واتساب",

      "charges.eyebrow": "شحن فوري",
      "charges.title": "شحن الخط والإنترنت",
      "charges.sub": "اشحن خطك أو اشتراك الإنترنت خلال ثوانٍ — اختر مزودك أدناه.",

      "apps.eyebrow": "اشتراكات رقمية",
      "apps.title": "تطبيقات وبث",
      "apps.sub": "بطاقات هدايا واشتراكات ورصيد للمنصات التي تستخدمها بالفعل.",

      "games.eyebrow": "ارتقِ بمستواك",
      "games.title": "شحن الألعاب",
      "games.sub": "اشتراكات وعملات داخل اللعبة وتذاكر فعاليات لألعابك المفضلة.",
      "games.pubg": "اشحن UC فورًا للحصول على أحدث الأزياء وبطاقة الملكية وحزم داخل اللعبة.",
      "games.valorant": "اشحن VP للحصول على أحدث الأزياء وتذكرة الموسم وفتح العملاء.",
      "games.fifa": "احصل على نقاط FC لحزم اللاعبين وترقيات Ultimate Team والمزيد.",
      "games.fortnite": "اشحن V-Bucks للأزياء وتذكرة الموسم ومحتوى المتجر.",
      "games.brawlStars": "اشحن الجواهر لفتح مقاتلين جدد وأزياء وتذكرة Brawl Pass.",
      "games.callOfDuty": "اشحن CP لتذاكر المواسم ومخططات الأسلحة والحزم.",
      "games.clashOfClans": "اشحن الجواهر لتسريع البناء والتدريب والترقيات في قريتك.",
      "games.clashRoyale": "اشحن الجواهر للصناديق وترقية البطاقات ومكافآت Pass Royale.",
      "games.deltaForce": "اشحن العملة داخل اللعبة لأزياء الشخصيات والأسلحة ومستويات تذكرة الموسم.",
      "games.freeFire": "اشحن الماس للشخصيات والأزياء والوصول إلى Elite Pass.",
      "games.lordsMobile": "اشحن الجواهر لتسريع البناء والتدريب وترقيات المملكة.",
      "games.minecraft": "اشحن Minecoins للأزياء وحزم الخرائط ومحتوى المتجر.",

      "contact.eyebrow": "تواصل معنا",
      "contact.location": "بلدة بدياس، صور، لبنان",

      "contactUs.title": "تواصل معنا",
      "contactUs.sub": "إذا كان لديك أي أسئلة، فقط املأ نموذج التواصل وسنرد عليك بأسرع وقت.",
      "contactUs.labelName": "الاسم الكامل",
      "contactUs.labelEmail": "البريد الإلكتروني",
      "contactUs.labelPhone": "رقم الهاتف",
      "contactUs.labelMessage": "الرسالة",
      "contactUs.placeholderName": "الاسم",
      "contactUs.placeholderEmail": "someone@email.com",
      "contactUs.placeholderPhone": "xxx-xxx-xxxx",
      "contactUs.placeholderMessage": "رسالتك",

      "footer.brand": "إم سيل",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.privacyPolicy": "سياسة الخصوصية",
      "footer.termsConditions": "الشروط والأحكام",

      "aria.whatsapp": "تواصل معنا عبر واتساب",
      "aria.backToTop": "العودة إلى الأعلى",
      "aria.langSwitch": "اللغة",

      "legal.enOnly": "هذه الصفحة متوفرة حاليًا باللغة الإنجليزية فقط.",
    },
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ar" ? "ar" : "en";
  }

  function swapBootstrap(lang) {
    var link = document.getElementById("bootstrapCss");
    if (!link) return;
    var cfg = BOOTSTRAP_CSS[lang];
    if (link.getAttribute("href") !== cfg.href) {
      // Set integrity before href: changing href triggers the fetch, so the
      // correct hash must already be in place or the browser validates
      // against the stale value and blocks the stylesheet.
      link.setAttribute("integrity", cfg.integrity);
      link.setAttribute("href", cfg.href);
    }
  }

  function applyLang(lang) {
    var dict = STRINGS[lang];
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    swapBootstrap(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Rebuild WhatsApp deep-links so their pre-filled text matches the
    // now-current-language titles (links.js reads titles from the DOM).
    if (typeof window.buildWhatsappLinks === "function") window.buildWhatsappLinks();

    document.documentElement.setAttribute("data-i18n-ready", "true");
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang"));
    });
  });

  applyLang(getLang());
})();
