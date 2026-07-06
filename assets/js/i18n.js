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

      "footer.tagline": "Instant mobile & internet recharge, app subscriptions and game top-ups — all on WhatsApp.",
      "footer.quickLinks": "Quick Links",
      "footer.contactHeading": "Get In Touch",
      "footer.legalHeading": "Legal",
      "footer.brand": "MCell",
      "footer.rights": "All rights reserved.",
      "footer.privacyPolicy": "Privacy Policy",
      "footer.termsConditions": "Terms and Condition",

      "aria.whatsapp": "Chat with us on WhatsApp",
      "aria.backToTop": "Back to top",
      "aria.langSwitch": "Language",
      "aria.themeToggle": "Toggle dark mode",

      "legal.eyebrow": "Legal",
      "legal.toc": "On this page",

      "privacy.pageTitle": "Privacy Policy",
      "privacy.updated": "Last updated: July 4, 2026",
      "privacy.intro": "MCell (\"we\", \"us\", \"our\") provides mobile & internet top-ups, digital app subscriptions and game top-ups in Lebanon. This policy explains what information we collect through this website, how it is used, and the choices you have. By using this site, you agree to the practices described below.",

      "privacy.s1.title": "Information We Collect",
      "privacy.s1.p1": "We only collect information that you choose to give us. This happens in two places on the site:",
      "privacy.s1.li1Strong": "The contact form.",
      "privacy.s1.li1Text": "If you fill in the \"Get In Touch\" form, we ask for your name, email address, phone number and message. This form does not submit to a server we control — it opens your own email application with the message pre-filled, so it is sent directly from your inbox to ours. We never see or store this data unless you actually send that email.",
      "privacy.s1.li2Strong": "WhatsApp links.",
      "privacy.s1.li2Text": "Buttons across the site (Charges, Apps, Games, and the floating WhatsApp icon) open a WhatsApp chat with a pre-filled message. Once you send it, we receive whatever information WhatsApp shares with us — typically your phone number, profile name, and the message content.",

      "privacy.s2.title": "How We Use Your Information",
      "privacy.s2.p1": "Any information you send us is used only to:",
      "privacy.s2.li1": "Respond to your inquiry and provide customer support;",
      "privacy.s2.li2": "Process and coordinate the top-up, subscription or game credit you requested;",
      "privacy.s2.li3": "Keep a record of the conversation so we can follow up if needed.",
      "privacy.s2.p2": "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",

      "privacy.s3.title": "WhatsApp Communication",
      "privacy.s3.p1a": "Since orders and support are handled over WhatsApp, that conversation is also subject to",
      "privacy.s3.link": "WhatsApp's own Privacy Policy",
      "privacy.s3.p1b": ", operated by Meta. We recommend reviewing it to understand how WhatsApp itself handles your data.",

      "privacy.s4.title": "Third-Party Services & Links",
      "privacy.s4.p1": "This site loads a small number of external resources to function and look the way it does — Bootstrap, Swiper, Font Awesome and Google Fonts, served from their respective content delivery networks. Loading these may expose your IP address and browser information to those providers, under their own privacy policies.",
      "privacy.s4.p2": "The Charges, Apps and Games sections link out to third-party providers and platforms (e.g. Alfa, Touch, Ogero, iTunes, Netflix, Google Play, PlayStation, Steam, Shahid, PUBG, Valorant, FIFA and similar). We are not responsible for the privacy practices of those third-party sites once you leave ours.",

      "privacy.s5.title": "Cookies & Tracking",
      "privacy.s5.p1": "We do not use analytics, advertising, or tracking cookies on this site. Your browser may still store standard, functional data (such as font or script caching) as part of normal web browsing.",

      "privacy.s6.title": "Data Security",
      "privacy.s6.p1": "We take reasonable steps to keep any information shared with us confidential. However, no method of transmission over the internet, email, or WhatsApp is 100% secure, and we cannot guarantee absolute security.",

      "privacy.s7.title": "Data Retention",
      "privacy.s7.p1": "We keep conversation and order records only for as long as needed to provide support, resolve any issues, or comply with applicable law. Messages sent through WhatsApp are also retained according to WhatsApp's own retention practices.",

      "privacy.s8.title": "Your Rights",
      "privacy.s8.p1": "You may ask us to access, correct, or delete any personal information we hold about you at any time — just reach out through the contact details below and we'll take care of it.",

      "privacy.s9.title": "Children's Privacy",
      "privacy.s9.p1": "Our services are not directed at children, and we do not knowingly collect personal information from anyone under the age of 13.",

      "privacy.s10.title": "Changes to This Policy",
      "privacy.s10.p1": "We may update this policy from time to time to reflect changes to our practices. The \"Last updated\" date at the top of this page will always reflect the latest revision.",

      "privacy.s11.title": "Contact Us",
      "privacy.s11.p1": "If you have any questions about this policy or how your information is handled, reach out through any of the channels below.",

      "terms.pageTitle": "Terms & Conditions",
      "terms.updated": "Last updated: July 4, 2026",
      "terms.intro": "These Terms and Conditions govern your use of the MCell website and the services advertised on it. By browsing this site or placing an order through WhatsApp, you agree to these terms.",

      "terms.s1.title": "Acceptance of Terms",
      "terms.s1.p1a": "By accessing this website, requesting a top-up, subscription, or game credit through us, you confirm that you have read, understood, and agreed to these Terms and Conditions and our",
      "terms.s1.p1b": ". If you do not agree, please do not use our services.",

      "terms.s2.title": "About Our Services",
      "terms.s2.p1": "MCell facilitates:",
      "terms.s2.li1": "Mobile & internet recharges for local providers such as Alfa, Touch and Ogero;",
      "terms.s2.li2": "Digital subscriptions and gift cards, including iTunes, Netflix, Google Play, PlayStation and Steam;",
      "terms.s2.li3": "Game top-ups and in-game currency for titles such as PUBG, Valorant, FIFA, Fortnite and others.",
      "terms.s2.p2": "This website is a catalog, not an automated checkout. Every request is finalized manually, with a real person, over WhatsApp.",

      "terms.s3.title": "Orders & Payment",
      "terms.s3.p1": "Pricing, availability and accepted payment methods are confirmed directly with you over WhatsApp at the time of your request, and may change without prior notice. An order is only confirmed once we have agreed on the details and received payment as arranged. You are responsible for double-checking the account, number, or ID you provide before we process it.",

      "terms.s4.title": "Delivery of Digital Goods",
      "terms.s4.p1": "Most top-ups and codes are delivered shortly after payment is confirmed, but delivery times can vary depending on the provider or network involved and are not guaranteed to be instant. We'll keep you updated over WhatsApp if anything is delayed.",

      "terms.s5.title": "Refunds & Cancellations",
      "terms.s5.p1": "Because top-ups, subscriptions and game credits are digital goods that are typically activated immediately, they are generally non-refundable once delivered. If something was delivered incorrectly or does not work due to an error on our part, contact us right away and we will make it right on a case-by-case basis.",

      "terms.s6.title": "Your Responsibilities",
      "terms.s6.p1": "When using our services, you agree to:",
      "terms.s6.li1": "Provide accurate account details, phone numbers, or game/player IDs;",
      "terms.s6.li2": "Only request top-ups or subscriptions for accounts you own or are authorized to use;",
      "terms.s6.li3": "Use our services lawfully and not for fraudulent purposes.",

      "terms.s7.title": "Third-Party Platforms & Trademarks",
      "terms.s7.p1": "Alfa, Touch, Ogero, iTunes, Netflix, Google Play, PlayStation, Steam, Shahid, PUBG, Valorant, FIFA, Fortnite, and all other provider and game names mentioned on this site are trademarks of their respective owners. MCell is an independent reseller/facilitator and, unless explicitly stated, is not officially affiliated with, endorsed by, or sponsored by these companies.",

      "terms.s8.title": "Intellectual Property",
      "terms.s8.p1": "The MCell name, logo, and the original content, layout and design of this website belong to MCell and may not be copied or reused without permission.",

      "terms.s9.title": "Limitation of Liability",
      "terms.s9.p1": "We do our best to make sure every order is fulfilled correctly, but MCell is not liable for delays, losses, or issues caused by third-party providers, networks, payment platforms, or incorrect information provided by you. Our services are provided \"as is,\" without warranties beyond those required by applicable law.",

      "terms.s10.title": "Governing Law",
      "terms.s10.p1": "These terms are governed by the laws of Lebanon, without regard to conflict-of-law principles.",

      "terms.s11.title": "Changes to These Terms",
      "terms.s11.p1": "We may update these Terms and Conditions from time to time. The \"Last updated\" date at the top of this page reflects the most recent revision, and continued use of our services after a change means you accept the updated terms.",

      "terms.s12.title": "Contact Us",
      "terms.s12.p1": "Questions about these terms? Reach out through any of the channels below.",
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
      "apps.itunes": "آيتونز",
      "apps.netflix": "نتفليكس",
      "apps.playStore": "بلاي ستور",
      "apps.playstation": "بلايستيشن",
      "apps.steam": "ستيم",
      "apps.shahid": "شاهد",

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

      "gameTitle.pubg": "ببجي",
      "gameTitle.valorant": "فالورانت",
      "gameTitle.fifa": "فيفا",
      "gameTitle.fortnite": "فورتنايت",
      "gameTitle.brawlStars": "براول ستارز",
      "gameTitle.callOfDuty": "كول أوف ديوتي",
      "gameTitle.clashOfClans": "كلاش أوف كلانس",
      "gameTitle.clashRoyale": "كلاش رويال",
      "gameTitle.deltaForce": "دلتا فورس",
      "gameTitle.freeFire": "فري فاير",
      "gameTitle.lordsMobile": "لوردز موبايل",
      "gameTitle.minecraft": "ماين كرافت",

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

      "footer.tagline": "شحن الخط والإنترنت فورًا، واشتراكات التطبيقات، وشحن الألعاب — كل ذلك عبر واتساب.",
      "footer.quickLinks": "روابط سريعة",
      "footer.contactHeading": "تواصل معنا",
      "footer.legalHeading": "قانوني",
      "footer.brand": "إم سيل",
      "footer.rights": "جميع الحقوق محفوظة.",
      "footer.privacyPolicy": "سياسة الخصوصية",
      "footer.termsConditions": "الشروط والأحكام",

      "aria.whatsapp": "تواصل معنا عبر واتساب",
      "aria.backToTop": "العودة إلى الأعلى",
      "aria.langSwitch": "اللغة",
      "aria.themeToggle": "تبديل الوضع الداكن",

      "legal.eyebrow": "قانوني",
      "legal.toc": "في هذه الصفحة",

      "privacy.pageTitle": "سياسة الخصوصية",
      "privacy.updated": "آخر تحديث: 4 يوليو 2026",
      "privacy.intro": "توفر MCell (\"نحن\" أو \"لنا\") خدمات شحن الخط والإنترنت واشتراكات التطبيقات الرقمية وشحن الألعاب في لبنان. توضح هذه السياسة المعلومات التي نجمعها من خلال هذا الموقع، وكيفية استخدامها، والخيارات المتاحة لك. باستخدامك هذا الموقع، فإنك توافق على الممارسات الموضحة أدناه.",

      "privacy.s1.title": "المعلومات التي نجمعها",
      "privacy.s1.p1": "نجمع فقط المعلومات التي تختار مشاركتها معنا. يحدث ذلك في مكانين على الموقع:",
      "privacy.s1.li1Strong": "نموذج التواصل.",
      "privacy.s1.li1Text": "إذا قمت بتعبئة نموذج \"تواصل معنا\"، نطلب منك اسمك وبريدك الإلكتروني ورقم هاتفك ورسالتك. لا يُرسل هذا النموذج إلى خادم نتحكم به — بل يفتح تطبيق البريد الإلكتروني الخاص بك مع الرسالة معبأة مسبقًا، بحيث تُرسل مباشرة من بريدك إلينا. نحن لا نرى أو نخزّن هذه البيانات أبدًا ما لم ترسل تلك الرسالة فعليًا.",
      "privacy.s1.li2Strong": "روابط واتساب.",
      "privacy.s1.li2Text": "تفتح الأزرار المنتشرة في الموقع (الشحن، التطبيقات، الألعاب، وأيقونة واتساب العائمة) محادثة واتساب برسالة معبأة مسبقًا. بمجرد إرسالها، نستلم أي معلومات يشاركها واتساب معنا — عادةً رقم هاتفك واسم ملفك الشخصي ومحتوى الرسالة.",

      "privacy.s2.title": "كيف نستخدم معلوماتك",
      "privacy.s2.p1": "تُستخدم أي معلومات ترسلها إلينا فقط من أجل:",
      "privacy.s2.li1": "الرد على استفسارك وتقديم خدمة الدعم؛",
      "privacy.s2.li2": "معالجة وتنسيق الشحن أو الاشتراك أو رصيد اللعبة الذي طلبته؛",
      "privacy.s2.li3": "الاحتفاظ بسجل للمحادثة لنتمكن من المتابعة إذا لزم الأمر.",
      "privacy.s2.p2": "نحن لا نبيع أو نؤجّر أو نتاجر بمعلوماتك الشخصية مع أي طرف ثالث لأغراض تسويقية.",

      "privacy.s3.title": "التواصل عبر واتساب",
      "privacy.s3.p1a": "بما أن الطلبات والدعم تتم عبر واتساب، فإن تلك المحادثة تخضع أيضًا لـ",
      "privacy.s3.link": "سياسة الخصوصية الخاصة بواتساب",
      "privacy.s3.p1b": "، التي تديرها شركة Meta. ننصح بمراجعتها لفهم كيفية تعامل واتساب نفسه مع بياناتك.",

      "privacy.s4.title": "خدمات وروابط الطرف الثالث",
      "privacy.s4.p1": "يقوم هذا الموقع بتحميل عدد صغير من الموارد الخارجية ليعمل ويظهر بالشكل الذي تراه — مثل Bootstrap وSwiper وFont Awesome وGoogle Fonts، والتي تُقدَّم من شبكات توصيل المحتوى الخاصة بها. قد يؤدي تحميل هذه الموارد إلى كشف عنوان IP الخاص بك ومعلومات المتصفح لتلك الجهات، وفقًا لسياسات الخصوصية الخاصة بها.",
      "privacy.s4.p2": "تحتوي أقسام الشحن والتطبيقات والألعاب على روابط لمزودين ومنصات خارجية (مثل ألفا وتاتش وأوجيرو وآيتونز ونتفليكس وGoogle Play وبلايستيشن وستيم وشاهد وببجي وفالورانت وفيفا وغيرها). نحن غير مسؤولين عن ممارسات الخصوصية لتلك المواقع بمجرد مغادرتك موقعنا.",

      "privacy.s5.title": "ملفات تعريف الارتباط والتتبع",
      "privacy.s5.p1": "نحن لا نستخدم ملفات تعريف ارتباط للتحليلات أو الإعلانات أو التتبع على هذا الموقع. قد يقوم متصفحك مع ذلك بتخزين بيانات وظيفية عادية (مثل تخزين الخطوط أو النصوص البرمجية مؤقتًا) كجزء طبيعي من تصفح الويب.",

      "privacy.s6.title": "أمن البيانات",
      "privacy.s6.p1": "نتخذ خطوات معقولة للحفاظ على سرية أي معلومات تتم مشاركتها معنا. مع ذلك، لا توجد طريقة نقل عبر الإنترنت أو البريد الإلكتروني أو واتساب آمنة بنسبة 100%، ولا يمكننا ضمان الأمان المطلق.",

      "privacy.s7.title": "الاحتفاظ بالبيانات",
      "privacy.s7.p1": "نحتفظ بسجلات المحادثات والطلبات فقط للمدة اللازمة لتقديم الدعم أو حل أي مشكلات أو الامتثال للقانون المعمول به. كما تُحفظ الرسائل المرسلة عبر واتساب وفقًا لممارسات الاحتفاظ بالبيانات الخاصة بواتساب نفسه.",

      "privacy.s8.title": "حقوقك",
      "privacy.s8.p1": "يمكنك أن تطلب منا الوصول إلى أي معلومات شخصية نحتفظ بها عنك أو تصحيحها أو حذفها في أي وقت — فقط تواصل معنا عبر بيانات الاتصال أدناه وسنعتني بالأمر.",

      "privacy.s9.title": "خصوصية الأطفال",
      "privacy.s9.p1": "خدماتنا غير موجهة للأطفال، ونحن لا نجمع عن قصد أي معلومات شخصية من أي شخص يقل عمره عن 13 عامًا.",

      "privacy.s10.title": "التغييرات على هذه السياسة",
      "privacy.s10.p1": "قد نقوم بتحديث هذه السياسة من وقت لآخر لتعكس التغييرات في ممارساتنا. سيعكس تاريخ \"آخر تحديث\" أعلى هذه الصفحة دائمًا أحدث مراجعة.",

      "privacy.s11.title": "تواصل معنا",
      "privacy.s11.p1": "إذا كانت لديك أي أسئلة حول هذه السياسة أو كيفية التعامل مع معلوماتك، تواصل معنا عبر أي من القنوات أدناه.",

      "terms.pageTitle": "الشروط والأحكام",
      "terms.updated": "آخر تحديث: 4 يوليو 2026",
      "terms.intro": "تحكم هذه الشروط والأحكام استخدامك لموقع MCell والخدمات المعلن عنها فيه. من خلال تصفح هذا الموقع أو تقديم طلب عبر واتساب، فإنك توافق على هذه الشروط.",

      "terms.s1.title": "الموافقة على الشروط",
      "terms.s1.p1a": "من خلال الوصول إلى هذا الموقع، أو طلب شحن أو اشتراك أو رصيد لعبة من خلالنا، فإنك تؤكد أنك قد قرأت وفهمت ووافقت على هذه الشروط والأحكام و",
      "terms.s1.p1b": " الخاصة بنا. إذا كنت لا توافق، يرجى عدم استخدام خدماتنا.",

      "terms.s2.title": "حول خدماتنا",
      "terms.s2.p1": "تُسهّل MCell:",
      "terms.s2.li1": "شحن الخط والإنترنت لمزودين محليين مثل ألفا وتاتش وأوجيرو؛",
      "terms.s2.li2": "الاشتراكات الرقمية وبطاقات الهدايا، بما في ذلك آيتونز ونتفليكس وGoogle Play وبلايستيشن وستيم؛",
      "terms.s2.li3": "شحن الألعاب والعملات داخل اللعبة لألعاب مثل ببجي وفالورانت وفيفا وفورتنايت وغيرها.",
      "terms.s2.p2": "هذا الموقع هو كتالوج، وليس نظام دفع آلي. يتم إنهاء كل طلب يدويًا، من قبل شخص حقيقي، عبر واتساب.",

      "terms.s3.title": "الطلبات والدفع",
      "terms.s3.p1": "يتم تأكيد الأسعار والتوفر وطرق الدفع المقبولة معك مباشرة عبر واتساب وقت تقديم طلبك، وقد تتغير دون إشعار مسبق. لا يتم تأكيد الطلب إلا بعد الاتفاق على التفاصيل واستلام الدفع بالطريقة المتفق عليها. أنت مسؤول عن التأكد من صحة الحساب أو الرقم أو المعرّف الذي تقدمه قبل أن نقوم بمعالجته.",

      "terms.s4.title": "توصيل المنتجات الرقمية",
      "terms.s4.p1": "يتم توصيل معظم عمليات الشحن والأكواد بعد وقت قصير من تأكيد الدفع، لكن أوقات التوصيل قد تختلف حسب المزود أو الشبكة المعنية وليست مضمونة أن تكون فورية. سنبقيك على اطلاع عبر واتساب في حال حدوث أي تأخير.",

      "terms.s5.title": "الاسترداد والإلغاء",
      "terms.s5.p1": "نظرًا لأن عمليات الشحن والاشتراكات وأرصدة الألعاب هي منتجات رقمية تُفعَّل عادةً فورًا، فهي غير قابلة للاسترداد بشكل عام بعد التسليم. إذا تم تسليم شيء بشكل غير صحيح أو لم يعمل بسبب خطأ من جانبنا، تواصل معنا فورًا وسنقوم بمعالجة الأمر وفقًا لكل حالة على حدة.",

      "terms.s6.title": "مسؤولياتك",
      "terms.s6.p1": "عند استخدام خدماتنا، فإنك توافق على:",
      "terms.s6.li1": "تقديم بيانات حساب دقيقة، أو أرقام هواتف، أو معرّفات لعبة/لاعب صحيحة؛",
      "terms.s6.li2": "طلب الشحن أو الاشتراكات فقط لحسابات تملكها أو مخوّل باستخدامها؛",
      "terms.s6.li3": "استخدام خدماتنا بشكل قانوني وعدم استخدامها لأغراض احتيالية.",

      "terms.s7.title": "منصات وعلامات الطرف الثالث التجارية",
      "terms.s7.p1": "تُعد ألفا وتاتش وأوجيرو وآيتونز ونتفليكس وGoogle Play وبلايستيشن وستيم وشاهد وببجي وفالورانت وفيفا وفورتنايت وجميع أسماء المزودين والألعاب الأخرى المذكورة في هذا الموقع علامات تجارية مملوكة لأصحابها. تُعد MCell بائعًا/وسيطًا مستقلاً، وما لم يُذكر صراحةً، فهي غير منتسبة رسميًا أو مدعومة أو برعاية هذه الشركات.",

      "terms.s8.title": "الملكية الفكرية",
      "terms.s8.p1": "اسم MCell وشعارها، والمحتوى الأصلي وتخطيط وتصميم هذا الموقع، ملك لـ MCell ولا يجوز نسخها أو إعادة استخدامها دون إذن.",

      "terms.s9.title": "حدود المسؤولية",
      "terms.s9.p1": "نبذل قصارى جهدنا للتأكد من تنفيذ كل طلب بشكل صحيح، لكن MCell غير مسؤولة عن أي تأخير أو خسائر أو مشكلات ناتجة عن مزودين خارجيين أو شبكات أو منصات دفع أو معلومات غير صحيحة قدمتها أنت. تُقدَّم خدماتنا \"كما هي\"، دون أي ضمانات تتجاوز ما يقتضيه القانون المعمول به.",

      "terms.s10.title": "القانون الحاكم",
      "terms.s10.p1": "تخضع هذه الشروط لقوانين لبنان، بغض النظر عن مبادئ تنازع القوانين.",

      "terms.s11.title": "التغييرات على هذه الشروط",
      "terms.s11.p1": "قد نقوم بتحديث هذه الشروط والأحكام من وقت لآخر. يعكس تاريخ \"آخر تحديث\" أعلى هذه الصفحة أحدث مراجعة، واستمرار استخدامك لخدماتنا بعد أي تغيير يعني أنك تقبل الشروط المحدثة.",

      "terms.s12.title": "تواصل معنا",
      "terms.s12.p1": "لديك أسئلة حول هذه الشروط؟ تواصل معنا عبر أي من القنوات أدناه.",
    },
  };

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ar" ? "ar" : "en";
  }

  /** @param {"en"|"ar"} lang */
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

  /** @param {"en"|"ar"} lang */
  function applyLang(lang) {
    /** @type {Record<string, string>} */
    var dict = STRINGS[lang];
    var html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";

    swapBootstrap(lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (key && dict[key] !== undefined) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key && dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    // Rebuild WhatsApp deep-links so their pre-filled text matches the
    // now-current-language titles (links.js reads titles from the DOM).
    var win = /** @type {any} */ (window);
    if (typeof win.buildWhatsappLinks === "function") win.buildWhatsappLinks();

    document.documentElement.setAttribute("data-i18n-ready", "true");
  }

  /** @param {"en"|"ar"} lang */
  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  document.querySelectorAll(".lang-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      setLang(btn.getAttribute("data-lang") === "ar" ? "ar" : "en");
    });
  });

  applyLang(getLang());
})();
