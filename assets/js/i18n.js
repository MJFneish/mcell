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

      "chDialog.tabs.plans": "Prepaid Plans",
      "chDialog.tabs.internet": "Mobile Internet",
      "chDialog.tabs.social": "WhatsApp & Social",
      "chDialog.tabs.bill": "Pay Your Bill",
      "chDialog.tabs.ogeroPlans": "Plans",
      "chDialog.group.monthly": "Monthly bundles",
      "chDialog.group.threeMonth": "3-month bundles",
      "chDialog.validity1m": "Valid for 1 month",
      "chDialog.validity3m": "Valid for 3 months",
      "chDialog.shareable": "Shareable with up to 3 users",
      "chDialog.rechargeName": "Recharge cards",
      "chDialog.rechargeDesc": "Credit vouchers of all values, with different validities",
      "chDialog.from1": "from $1",
      "chDialog.whatsappDesc": "WhatsApp-only data — keep chatting even when your credit runs out",
      "chDialog.note": "Prices are set by the provider and may change. We always confirm the final price with you on WhatsApp before charging.",

      "chDialog.alfa.desc": "Lebanon's first mobile network — recharge cards, prepaid plans and internet bundles, topped up for you in minutes.",
      "chDialog.alfa.go": "3 GB + 60 min + 60 SMS per month",
      "chDialog.alfa.goPlus": "15 GB + 120 min + 120 SMS per month",
      "chDialog.alfa.goMax": "33 GB + 240 min + 240 SMS per month",
      "chDialog.alfa.fourByFour": "400 MB + 40 min + 400 SMS + a free preferred number on weekends",
      "chDialog.alfa.aPlus": "5 GB + 180 min + 1,000 SMS per month",
      "chDialog.alfa.aPlusMax": "40 GB + 240 min + 1,000 SMS per month",
      "chDialog.alfa.ushareIntro":
        "Share one internet bundle across your devices and with family or friends — bundles of 22 GB and above can be shared with up to 3 secondary users.",

      "chDialog.touch.desc": "Lebanon's leading mobile operator — recharge cards, Web & Talk plans and internet bundles delivered straight to your line.",
      "chDialog.touch.mini2": "3 GB + 60 min + 60 SMS per month",
      "chDialog.touch.maxi1": "9 GB + 90 min + 90 SMS per month",
      "chDialog.touch.maxi2": "25 GB + 120 min + 120 SMS per month",
      "chDialog.touch.recharge": "Credit vouchers from $1 to $77, valid from 5 days up to a full year",
      "chDialog.touch.socialDesc": "Dedicated data for Facebook, Instagram, WhatsApp, X and Snapchat",

      "chDialog.ogero.desc": "Lebanon's fixed internet provider — pay your monthly Ogero internet subscription without leaving your home.",
      "chDialog.ogero.billIntro": "Renew your monthly Ogero internet subscription in three simple steps:",
      "chDialog.ogero.step1": "Send us your Ogero phone or account number on WhatsApp;",
      "chDialog.ogero.step2": "We confirm your plan and the amount due;",
      "chDialog.ogero.step3": "We settle the bill and send you the confirmation — done.",
      "chDialog.ogero.limited": "Limited plans (monthly quota)",
      "chDialog.ogero.unlimited": "Unlimited plans",
      "chDialog.ogero.speed4": "Up to 4 Mbps",
      "chDialog.ogero.speed6": "Up to 6 Mbps",
      "chDialog.ogero.speed8": "Up to 8 Mbps",
      "chDialog.ogero.speed50": "Up to 50 Mbps",
      "chDialog.ogero.speed300": "Up to 300 Mbps",
      "chDialog.ogero.unlimitedDesc": "Unlimited usage (fair-use policy)",
      "chDialog.ogero.topupName": "Extra 100 GB top-up",
      "chDialog.ogero.topupDesc": "Add 100 GB to any limited plan during the month",

      "cta.viewPacks": "View packs",
      "gameDialog.pubg.desc": "Official PUBG Mobile top-ups through Midasbuy — UC delivered straight to your player ID in minutes.",
      "gameDialog.tabs.uc": "UC Packs",
      "gameDialog.tabs.how": "How It Works",
      "gameDialog.pubg.uc60": "Base pack — no bonus UC",
      "gameDialog.pubg.uc325": "300 + 25 bonus UC",
      "gameDialog.pubg.uc660": "600 + 60 bonus UC",
      "gameDialog.pubg.uc1800": "1,500 + 300 bonus UC",
      "gameDialog.pubg.uc3850": "3,000 + 850 bonus UC",
      "gameDialog.pubg.uc8100": "6,000 + 2,100 bonus UC",
      "gameDialog.pubg.howIntro": "Get your UC in three simple steps:",
      "gameDialog.pubg.how1": "Send us your PUBG Mobile player ID on WhatsApp;",
      "gameDialog.pubg.how2": "Pick your UC pack and confirm the price;",
      "gameDialog.pubg.how3": "We top up your account through Midasbuy — the official PUBG Mobile store — and your UC lands instantly.",
      "gameDialog.tabs.royalePass": "Royale Pass",
      "gameDialog.pubg.passIntro": "Unlocks exclusive outfits, weapon skins and missions for the season — completing it to Level 100 refunds the Elite Pass's UC cost.",
      "gameDialog.pubg.elitePass": "Elite Pass (Lv 1–100)",
      "gameDialog.pubg.elitePassPlus": "Elite Pass Plus",

      "gameDialog.valorant.desc": "Official Valorant Points top-ups — VP credited to your Riot account for skins, the battle pass and agent unlocks.",
      "gameDialog.tabs.vp": "VP Packs",
      "gameDialog.valorant.base": "Base pack — no bonus VP",
      "gameDialog.valorant.bonusSmall": "Includes bonus VP",
      "gameDialog.valorant.bonusBig": "Includes 1,500 bonus VP — best value",
      "gameDialog.valorant.howIntro": "Get your VP in three simple steps:",
      "gameDialog.valorant.how1": "Send us your Riot ID and region on WhatsApp;",
      "gameDialog.valorant.how2": "Pick your VP pack and confirm the price;",
      "gameDialog.valorant.how3": "We deliver your VP through an official Riot top-up and it shows up in-game right away.",
      "gameDialog.tabs.battlePass": "Battle Pass",
      "gameDialog.valorant.passIntro": "Unlocks the premium track for the current Act — exclusive skins, gun buddies, player cards and titles.",

      "gameDialog.fifa.desc": "Official FC Points top-ups for Ultimate Team — player packs, squad upgrades and more, on any platform.",
      "gameDialog.tabs.fcPoints": "FC Points",
      "gameDialog.fifa.pointsIntro": "FC Points work on PlayStation, Xbox and PC — same price on every platform.",
      "gameDialog.fifa.howIntro": "Get your FC Points in three simple steps:",
      "gameDialog.fifa.how1": "Tell us your platform (PlayStation, Xbox or PC) on WhatsApp;",
      "gameDialog.fifa.how2": "Pick your FC Points pack and confirm the price;",
      "gameDialog.fifa.how3": "We deliver an official store code or top-up and the points appear in Ultimate Team.",
      "gameDialog.tabs.seasonPass": "Season Pass",
      "gameDialog.fifa.passIntro": "Unlocks the premium track for the current Ultimate Team season — player items, packs and exclusive rewards.",

      "gameDialog.fortnite.desc": "Official V-Bucks top-ups — credited to your Epic account for skins, the Battle Pass and Item Shop drops.",
      "gameDialog.tabs.vbucks": "V-Bucks Packs",
      "gameDialog.fortnite.howIntro": "Get your V-Bucks in three simple steps:",
      "gameDialog.fortnite.how1": "Send us your Epic Games username on WhatsApp;",
      "gameDialog.fortnite.how2": "Pick your V-Bucks pack and confirm the price;",
      "gameDialog.fortnite.how3": "We deliver an official top-up and the V-Bucks land in your Epic account right away.",
      "gameDialog.fortnite.passIntro": "Unlocks the premium track for the current season — outfits, emotes and more; completing it refunds V-Bucks toward the next one.",

      "gameDialog.brawlStars.desc": "Official Gems top-ups — credited to your Supercell ID for new brawlers, skins and the Brawl Pass.",
      "gameDialog.tabs.gems": "Gem Packs",
      "gameDialog.brawlStars.howIntro": "Get your Gems in three simple steps:",
      "gameDialog.brawlStars.how1": "Send us your in-game player tag (starts with #) on WhatsApp;",
      "gameDialog.brawlStars.how2": "Pick your Gem pack and confirm the price;",
      "gameDialog.brawlStars.how3": "We deliver an official top-up and the Gems land in your account right away.",
      "gameDialog.tabs.brawlPass": "Brawl Pass",
      "gameDialog.brawlStars.passIntro": "Unlocks the premium track for the season — an exclusive skin, bonus Gems, Coins and Power Points.",
      "gameDialog.brawlStars.brawlPassPlus": "Brawl Pass Plus",

      "gameDialog.cod.desc": "Official CP top-ups for Call of Duty: Mobile — battle passes, weapon blueprints and bundles.",
      "gameDialog.tabs.cp": "CP Packs",
      "gameDialog.cod.howIntro": "Get your CP in three simple steps:",
      "gameDialog.cod.how1": "Send us your Call of Duty: Mobile player ID on WhatsApp;",
      "gameDialog.cod.how2": "Pick your CP pack and confirm the price;",
      "gameDialog.cod.how3": "We deliver an official top-up and the CP lands in your account right away.",
      "gameDialog.cod.passIntro": "Unlocks the premium track for the season — operator skins, weapon blueprints and calling cards across 50 tiers.",
      "gameDialog.cod.battlePassBundle": "Battle Pass Bundle",

      "gameDialog.coc.desc": "Official Gems top-ups — credited to your Supercell ID to rush builds, troops and upgrades in your village.",
      "gameDialog.coc.howIntro": "Get your Gems in three simple steps:",
      "gameDialog.coc.how1": "Send us your in-game player tag (starts with #) on WhatsApp;",
      "gameDialog.coc.how2": "Pick your Gem pack and confirm the price;",
      "gameDialog.coc.how3": "We deliver an official top-up and the Gems land in your village right away.",
      "gameDialog.tabs.goldPass": "Gold Pass",
      "gameDialog.coc.passIntro": "Unlocks the premium track for the season — a Hero skin, extra Gems, resources and Builder Base rewards.",

      "gameDialog.cr.desc": "Official Gems top-ups — credited to your Supercell ID for chests, card upgrades and Pass Royale rewards.",
      "gameDialog.cr.howIntro": "Get your Gems in three simple steps:",
      "gameDialog.cr.how1": "Send us your in-game player tag (starts with #) on WhatsApp;",
      "gameDialog.cr.how2": "Pick your Gem pack and confirm the price;",
      "gameDialog.cr.how3": "We deliver an official top-up and the Gems land in your account right away.",
      "gameDialog.tabs.passRoyale": "Pass Royale",
      "gameDialog.cr.passIntro": "Unlocks the premium track for the season — cards, magic items, cosmetics and Gems, with a partial Gem refund as you progress.",

      "gameDialog.deltaForce.desc": "Official Delta Coins top-ups through Midasbuy — for operator skins, weapons and battle pass tiers.",
      "gameDialog.tabs.coins": "Delta Coins",
      "gameDialog.deltaForce.pack320": "300 + 20 bonus Coins",
      "gameDialog.deltaForce.pack750": "680 + 70 bonus Coins",
      "gameDialog.deltaForce.pack1980": "1,680 + 300 bonus Coins",
      "gameDialog.deltaForce.pack3950": "3,280 + 670 bonus Coins",
      "gameDialog.deltaForce.pack8100": "6,480 + 1,620 bonus Coins",
      "gameDialog.deltaForce.howIntro": "Get your Delta Coins in three simple steps:",
      "gameDialog.deltaForce.how1": "Send us your platform (PC, console or mobile) and player ID on WhatsApp;",
      "gameDialog.deltaForce.how2": "Pick your Delta Coins pack and confirm the price;",
      "gameDialog.deltaForce.how3": "We top up your account through Midasbuy — the official Delta Force store — and your Coins land instantly.",
      "gameDialog.deltaForce.passIntro": "Unlocks the premium track for the current season — operator skins, weapon camos and bonus Delta Coins.",
      "gameDialog.deltaForce.seasonPassName": "Season Battle Pass",

      "gameDialog.tabs.diamonds": "Diamond Packs",
      "gameDialog.tabs.elitePass": "Elite Pass",
      "gameDialog.tabs.diamondPass": "Diamond Pass",
      "gameDialog.tabs.minecoins": "Minecoins",
      "gameDialog.tabs.marketplacePass": "Marketplace Pass",

      "gameDialog.freeFire.desc": "Official Diamonds top-ups — credited to your account for characters, skins and Elite Pass access.",
      "gameDialog.freeFire.passIntro": "Unlocks the premium track for the season — exclusive outfits, weapon skins and missions.",
      "gameDialog.freeFire.elitePassPlus": "Elite Pass Plus",
      "gameDialog.freeFire.howIntro": "Get your Diamonds in three simple steps:",
      "gameDialog.freeFire.how1": "Send us your Free Fire player ID on WhatsApp;",
      "gameDialog.freeFire.how2": "Pick your Diamond pack or the Elite Pass and confirm the price;",
      "gameDialog.freeFire.how3": "We deliver an official top-up and it lands in your account right away.",

      "gameDialog.lordsMobile.desc": "Official Diamonds top-ups — credited to your account to speed up building, training and kingdom upgrades.",
      "gameDialog.lordsMobile.passIntro": "A subscription that pays out bonus Diamonds every day for its duration.",
      "gameDialog.lordsMobile.weeklyPass": "Weekly Diamond Pass",
      "gameDialog.lordsMobile.weeklyPassDesc": "199 Diamonds upfront + 30 Diamonds daily",
      "gameDialog.lordsMobile.monthlyPass": "Monthly Diamond Pass",
      "gameDialog.lordsMobile.monthlyPassDesc": "1,999 Diamonds upfront + 70 Diamonds daily",
      "gameDialog.lordsMobile.howIntro": "Get your Diamonds in three simple steps:",
      "gameDialog.lordsMobile.how1": "Send us your Kingdom and player ID on WhatsApp;",
      "gameDialog.lordsMobile.how2": "Pick your Diamond pack or the Diamond Pass and confirm the price;",
      "gameDialog.lordsMobile.how3": "We deliver an official top-up and it lands in your account right away.",

      "gameDialog.minecraft.desc": "Official Minecoins top-ups — credited to your Microsoft account for skins, texture packs and Marketplace content.",
      "gameDialog.minecraft.passIntro": "A monthly subscription unlocking a library of 150+ Marketplace worlds, add-ons, skin and texture packs.",
      "gameDialog.minecraft.passPeriod": "Billed monthly",
      "gameDialog.minecraft.howIntro": "Get your Minecoins in three simple steps:",
      "gameDialog.minecraft.how1": "Send us your Xbox/Microsoft gamertag on WhatsApp;",
      "gameDialog.minecraft.how2": "Pick your Minecoins pack or the Marketplace Pass and confirm the price;",
      "gameDialog.minecraft.how3": "We deliver an official top-up and it lands in your Microsoft account right away.",

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

      "games.otherOffersNote": "Other offers may be available for this game — just ask us.",

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
      "aria.close": "Close",
      "aria.loading": "Loading",

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

      "chDialog.tabs.plans": "باقات مسبقة الدفع",
      "chDialog.tabs.internet": "إنترنت الموبايل",
      "chDialog.tabs.social": "واتساب وسوشيال",
      "chDialog.tabs.bill": "دفع الفاتورة",
      "chDialog.tabs.ogeroPlans": "الباقات",
      "chDialog.group.monthly": "باقات شهرية",
      "chDialog.group.threeMonth": "باقات 3 أشهر",
      "chDialog.validity1m": "صالحة لمدة شهر",
      "chDialog.validity3m": "صالحة لمدة 3 أشهر",
      "chDialog.shareable": "قابلة للمشاركة مع 3 مستخدمين",
      "chDialog.rechargeName": "بطاقات الشحن",
      "chDialog.rechargeDesc": "قسائم رصيد بجميع الفئات وبمدد صلاحية مختلفة",
      "chDialog.from1": "ابتداءً من $1",
      "chDialog.whatsappDesc": "بيانات مخصصة لواتساب فقط — تابع الدردشة حتى بعد انتهاء رصيدك",
      "chDialog.note": "الأسعار يحددها المزود وقد تتغير. نؤكد لك السعر النهائي دائمًا عبر واتساب قبل الشحن.",

      "chDialog.alfa.desc": "أول شبكة خلوية في لبنان — بطاقات شحن وباقات مسبقة الدفع وباقات إنترنت، نشحنها لك خلال دقائق.",
      "chDialog.alfa.go": "3GB + 60 دقيقة + 60 رسالة شهريًا",
      "chDialog.alfa.goPlus": "15GB + 120 دقيقة + 120 رسالة شهريًا",
      "chDialog.alfa.goMax": "33GB + 240 دقيقة + 240 رسالة شهريًا",
      "chDialog.alfa.fourByFour": "400MB + 40 دقيقة + 400 رسالة + رقم مفضل مجاني في عطلة نهاية الأسبوع",
      "chDialog.alfa.aPlus": "5GB + 180 دقيقة + 1,000 رسالة شهريًا",
      "chDialog.alfa.aPlusMax": "40GB + 240 دقيقة + 1,000 رسالة شهريًا",
      "chDialog.alfa.ushareIntro":
        "شارك باقة إنترنت واحدة بين أجهزتك ومع العائلة أو الأصدقاء — الباقات من 22GB وما فوق قابلة للمشاركة مع 3 مستخدمين إضافيين.",

      "chDialog.touch.desc": "شركة الاتصالات الرائدة في لبنان — بطاقات شحن وباقات Web & Talk وباقات إنترنت تصل مباشرة إلى خطك.",
      "chDialog.touch.mini2": "3GB + 60 دقيقة + 60 رسالة شهريًا",
      "chDialog.touch.maxi1": "9GB + 90 دقيقة + 90 رسالة شهريًا",
      "chDialog.touch.maxi2": "25GB + 120 دقيقة + 120 رسالة شهريًا",
      "chDialog.touch.recharge": "قسائم رصيد من $1 إلى $77، صالحة من 5 أيام حتى سنة كاملة",
      "chDialog.touch.socialDesc": "بيانات مخصصة لفيسبوك وإنستغرام وواتساب وX وسناب شات",

      "chDialog.ogero.desc": "مزود الإنترنت الثابت في لبنان — ادفع اشتراك الإنترنت الشهري من أوجيرو دون مغادرة منزلك.",
      "chDialog.ogero.billIntro": "جدّد اشتراك الإنترنت الشهري من أوجيرو بثلاث خطوات بسيطة:",
      "chDialog.ogero.step1": "أرسل لنا رقم هاتفك أو رقم حسابك في أوجيرو عبر واتساب؛",
      "chDialog.ogero.step2": "نؤكد لك الباقة والمبلغ المستحق؛",
      "chDialog.ogero.step3": "نسدّد الفاتورة ونرسل لك التأكيد — وانتهى الأمر.",
      "chDialog.ogero.limited": "الباقات المحدودة (حصة شهرية)",
      "chDialog.ogero.unlimited": "الباقات غير المحدودة",
      "chDialog.ogero.speed4": "سرعة تصل إلى 4Mbps",
      "chDialog.ogero.speed6": "سرعة تصل إلى 6Mbps",
      "chDialog.ogero.speed8": "سرعة تصل إلى 8Mbps",
      "chDialog.ogero.speed50": "سرعة تصل إلى 50Mbps",
      "chDialog.ogero.speed300": "سرعة تصل إلى 300Mbps",
      "chDialog.ogero.unlimitedDesc": "استخدام غير محدود (وفق سياسة الاستخدام العادل)",
      "chDialog.ogero.topupName": "إضافة 100GB",
      "chDialog.ogero.topupDesc": "أضف 100GB إلى أي باقة محدودة خلال الشهر",

      "cta.viewPacks": "عرض الباقات",
      "gameDialog.pubg.desc": "شحن ببجي موبايل الرسمي عبر Midasbuy — يصل الشحن مباشرة إلى معرّف اللاعب الخاص بك خلال دقائق.",
      "gameDialog.tabs.uc": "باقات UC",
      "gameDialog.tabs.how": "طريقة الطلب",
      "gameDialog.pubg.uc60": "باقة أساسية — بدون UC إضافي",
      "gameDialog.pubg.uc325": "300 + 25 UC إضافي",
      "gameDialog.pubg.uc660": "600 + 60 UC إضافي",
      "gameDialog.pubg.uc1800": "1,500 + 300 UC إضافي",
      "gameDialog.pubg.uc3850": "3,000 + 850 UC إضافي",
      "gameDialog.pubg.uc8100": "6,000 + 2,100 UC إضافي",
      "gameDialog.pubg.howIntro": "احصل على الـUC بثلاث خطوات بسيطة:",
      "gameDialog.pubg.how1": "أرسل لنا معرّف اللاعب (Player ID) في ببجي موبايل عبر واتساب؛",
      "gameDialog.pubg.how2": "اختر باقة UC وأكّد السعر؛",
      "gameDialog.pubg.how3": "نشحن حسابك عبر Midasbuy — المتجر الرسمي لببجي موبايل — ويصل الـUC فورًا.",
      "gameDialog.tabs.royalePass": "رويال باس",
      "gameDialog.pubg.passIntro": "يفتح أزياءً حصرية وأشكال أسلحة ومهام الموسم — وإكماله حتى المستوى 100 يُرجع لك تكلفة الـUC لباقة Elite Pass.",
      "gameDialog.pubg.elitePass": "Elite Pass (المستوى 1–100)",
      "gameDialog.pubg.elitePassPlus": "Elite Pass Plus",

      "gameDialog.valorant.desc": "شحن نقاط فالورانت الرسمي — تُضاف النقاط إلى حساب Riot الخاص بك للأزياء وتذكرة الموسم وفتح العملاء.",
      "gameDialog.tabs.vp": "باقات VP",
      "gameDialog.valorant.base": "باقة أساسية — بدون VP إضافي",
      "gameDialog.valorant.bonusSmall": "تتضمن VP إضافي",
      "gameDialog.valorant.bonusBig": "تتضمن 1,500 VP إضافي — أفضل قيمة",
      "gameDialog.valorant.howIntro": "احصل على الـVP بثلاث خطوات بسيطة:",
      "gameDialog.valorant.how1": "أرسل لنا معرّف Riot الخاص بك والمنطقة عبر واتساب؛",
      "gameDialog.valorant.how2": "اختر باقة VP وأكّد السعر؛",
      "gameDialog.valorant.how3": "نوصل الـVP عبر شحن Riot رسمي وتظهر في اللعبة فورًا.",
      "gameDialog.tabs.battlePass": "تذكرة الموسم",
      "gameDialog.valorant.passIntro": "يفتح المسار المميز للحلقة الحالية — أزياء حصرية، حلقات مفاتيح، بطاقات لاعب وألقاب.",

      "gameDialog.fifa.desc": "شحن نقاط FC الرسمي لـ Ultimate Team — حزم اللاعبين وترقيات الفريق والمزيد، على أي منصة.",
      "gameDialog.tabs.fcPoints": "نقاط FC",
      "gameDialog.fifa.pointsIntro": "نقاط FC تعمل على بلايستيشن وإكس بوكس والكمبيوتر — بنفس السعر على كل المنصات.",
      "gameDialog.fifa.howIntro": "احصل على نقاط FC بثلاث خطوات بسيطة:",
      "gameDialog.fifa.how1": "أخبرنا بمنصتك (بلايستيشن، إكس بوكس أو كمبيوتر) عبر واتساب؛",
      "gameDialog.fifa.how2": "اختر باقة نقاط FC وأكّد السعر؛",
      "gameDialog.fifa.how3": "نوصل لك كود متجر رسمي أو شحنًا مباشرًا وتظهر النقاط في Ultimate Team.",
      "gameDialog.tabs.seasonPass": "تذكرة الموسم",
      "gameDialog.fifa.passIntro": "يفتح المسار المميز لموسم Ultimate Team الحالي — عناصر لاعبين وحزم ومكافآت حصرية.",

      "gameDialog.fortnite.desc": "شحن V-Bucks الرسمي — تُضاف إلى حساب Epic الخاص بك للأزياء وتذكرة الموسم ومحتوى المتجر.",
      "gameDialog.tabs.vbucks": "باقات V-Bucks",
      "gameDialog.fortnite.howIntro": "احصل على V-Bucks بثلاث خطوات بسيطة:",
      "gameDialog.fortnite.how1": "أرسل لنا اسم مستخدمك في Epic Games عبر واتساب؛",
      "gameDialog.fortnite.how2": "اختر باقة V-Bucks وأكّد السعر؛",
      "gameDialog.fortnite.how3": "نوصل شحنًا رسميًا وتصل V-Bucks إلى حساب Epic فورًا.",
      "gameDialog.fortnite.passIntro": "يفتح المسار المميز للموسم الحالي — أزياء وتعبيرات والمزيد؛ وإكماله يُرجع لك V-Bucks لصالح الموسم القادم.",

      "gameDialog.brawlStars.desc": "شحن الجواهر الرسمي — تُضاف إلى حساب Supercell الخاص بك لفتح مقاتلين جدد وأزياء وتذكرة Brawl Pass.",
      "gameDialog.tabs.gems": "باقات الجواهر",
      "gameDialog.brawlStars.howIntro": "احصل على الجواهر بثلاث خطوات بسيطة:",
      "gameDialog.brawlStars.how1": "أرسل لنا معرّف اللاعب داخل اللعبة (يبدأ بـ #) عبر واتساب؛",
      "gameDialog.brawlStars.how2": "اختر باقة الجواهر وأكّد السعر؛",
      "gameDialog.brawlStars.how3": "نوصل شحنًا رسميًا وتصل الجواهر إلى حسابك فورًا.",
      "gameDialog.tabs.brawlPass": "براول باس",
      "gameDialog.brawlStars.passIntro": "يفتح المسار المميز للموسم — زي حصري، جواهر إضافية، عملات ونقاط قوة.",
      "gameDialog.brawlStars.brawlPassPlus": "براول باس بلس",

      "gameDialog.cod.desc": "شحن CP الرسمي لـ Call of Duty: Mobile — تذاكر المواسم ومخططات الأسلحة والحزم.",
      "gameDialog.tabs.cp": "باقات CP",
      "gameDialog.cod.howIntro": "احصل على CP بثلاث خطوات بسيطة:",
      "gameDialog.cod.how1": "أرسل لنا معرّف اللاعب في Call of Duty: Mobile عبر واتساب؛",
      "gameDialog.cod.how2": "اختر باقة CP وأكّد السعر؛",
      "gameDialog.cod.how3": "نوصل شحنًا رسميًا وتصل CP إلى حسابك فورًا.",
      "gameDialog.cod.passIntro": "يفتح المسار المميز للموسم — أزياء عمليات، مخططات أسلحة وبطاقات اتصال عبر 50 مستوى.",
      "gameDialog.cod.battlePassBundle": "حزمة تذكرة الموسم",

      "gameDialog.coc.desc": "شحن الجواهر الرسمي — تُضاف إلى حساب Supercell الخاص بك لتسريع البناء والتدريب والترقيات في قريتك.",
      "gameDialog.coc.howIntro": "احصل على الجواهر بثلاث خطوات بسيطة:",
      "gameDialog.coc.how1": "أرسل لنا معرّف اللاعب داخل اللعبة (يبدأ بـ #) عبر واتساب؛",
      "gameDialog.coc.how2": "اختر باقة الجواهر وأكّد السعر؛",
      "gameDialog.coc.how3": "نوصل شحنًا رسميًا وتصل الجواهر إلى قريتك فورًا.",
      "gameDialog.tabs.goldPass": "الباس الذهبي",
      "gameDialog.coc.passIntro": "يفتح المسار المميز للموسم — زي بطل، جواهر إضافية، موارد ومكافآت القرية الثانية.",

      "gameDialog.cr.desc": "شحن الجواهر الرسمي — تُضاف إلى حساب Supercell الخاص بك للصناديق وترقية البطاقات ومكافآت Pass Royale.",
      "gameDialog.cr.howIntro": "احصل على الجواهر بثلاث خطوات بسيطة:",
      "gameDialog.cr.how1": "أرسل لنا معرّف اللاعب داخل اللعبة (يبدأ بـ #) عبر واتساب؛",
      "gameDialog.cr.how2": "اختر باقة الجواهر وأكّد السعر؛",
      "gameDialog.cr.how3": "نوصل شحنًا رسميًا وتصل الجواهر إلى حسابك فورًا.",
      "gameDialog.tabs.passRoyale": "باس رويال",
      "gameDialog.cr.passIntro": "يفتح المسار المميز للموسم — بطاقات، عناصر سحرية، مظاهر وجواهر، مع استرجاع جزئي للجواهر مع تقدمك.",

      "gameDialog.deltaForce.desc": "شحن Delta Coins الرسمي عبر Midasbuy — لأزياء الشخصيات والأسلحة ومستويات تذكرة الموسم.",
      "gameDialog.tabs.coins": "عملة Delta Coins",
      "gameDialog.deltaForce.pack320": "300 + 20 عملة إضافية",
      "gameDialog.deltaForce.pack750": "680 + 70 عملة إضافية",
      "gameDialog.deltaForce.pack1980": "1,680 + 300 عملة إضافية",
      "gameDialog.deltaForce.pack3950": "3,280 + 670 عملة إضافية",
      "gameDialog.deltaForce.pack8100": "6,480 + 1,620 عملة إضافية",
      "gameDialog.deltaForce.howIntro": "احصل على Delta Coins بثلاث خطوات بسيطة:",
      "gameDialog.deltaForce.how1": "أرسل لنا منصتك (كمبيوتر، كونسول أو موبايل) ومعرّف اللاعب عبر واتساب؛",
      "gameDialog.deltaForce.how2": "اختر باقة Delta Coins وأكّد السعر؛",
      "gameDialog.deltaForce.how3": "نشحن حسابك عبر Midasbuy — المتجر الرسمي لـ Delta Force — وتصل العملات فورًا.",
      "gameDialog.deltaForce.passIntro": "يفتح المسار المميز للموسم الحالي — أزياء عمليات، ألوان أسلحة وDelta Coins إضافية.",
      "gameDialog.deltaForce.seasonPassName": "تذكرة موسم المعارك",

      "gameDialog.tabs.diamonds": "باقات الماس",
      "gameDialog.tabs.elitePass": "الإيليت باس",
      "gameDialog.tabs.diamondPass": "تذكرة الماس",
      "gameDialog.tabs.minecoins": "عملة Minecoins",
      "gameDialog.tabs.marketplacePass": "تذكرة المتجر",

      "gameDialog.freeFire.desc": "شحن الماس الرسمي — يُضاف إلى حسابك للشخصيات والأزياء والوصول إلى Elite Pass.",
      "gameDialog.freeFire.passIntro": "يفتح المسار المميز للموسم — أزياء حصرية وأشكال أسلحة ومهام.",
      "gameDialog.freeFire.elitePassPlus": "Elite Pass Plus",
      "gameDialog.freeFire.howIntro": "احصل على الماس بثلاث خطوات بسيطة:",
      "gameDialog.freeFire.how1": "أرسل لنا معرّف اللاعب في Free Fire عبر واتساب؛",
      "gameDialog.freeFire.how2": "اختر باقة الماس أو Elite Pass وأكّد السعر؛",
      "gameDialog.freeFire.how3": "نوصل شحنًا رسميًا ويصل إلى حسابك فورًا.",

      "gameDialog.lordsMobile.desc": "شحن الماس الرسمي — يُضاف إلى حسابك لتسريع البناء والتدريب وترقيات المملكة.",
      "gameDialog.lordsMobile.passIntro": "اشتراك يمنحك ماسًا إضافيًا كل يوم طوال مدته.",
      "gameDialog.lordsMobile.weeklyPass": "تذكرة الماس الأسبوعية",
      "gameDialog.lordsMobile.weeklyPassDesc": "199 ماس فورًا + 30 ماس يوميًا",
      "gameDialog.lordsMobile.monthlyPass": "تذكرة الماس الشهرية",
      "gameDialog.lordsMobile.monthlyPassDesc": "1,999 ماس فورًا + 70 ماس يوميًا",
      "gameDialog.lordsMobile.howIntro": "احصل على الماس بثلاث خطوات بسيطة:",
      "gameDialog.lordsMobile.how1": "أرسل لنا اسم مملكتك ومعرّف اللاعب عبر واتساب؛",
      "gameDialog.lordsMobile.how2": "اختر باقة الماس أو تذكرة الماس وأكّد السعر؛",
      "gameDialog.lordsMobile.how3": "نوصل شحنًا رسميًا ويصل إلى حسابك فورًا.",

      "gameDialog.minecraft.desc": "شحن Minecoins الرسمي — تُضاف إلى حساب Microsoft الخاص بك للأزياء وحزم الخرائط ومحتوى المتجر.",
      "gameDialog.minecraft.passIntro": "اشتراك شهري يفتح مكتبة من أكثر من 150 عالمًا وإضافة وحزمة أزياء ونصوص من المتجر.",
      "gameDialog.minecraft.passPeriod": "يُفوتر شهريًا",
      "gameDialog.minecraft.howIntro": "احصل على Minecoins بثلاث خطوات بسيطة:",
      "gameDialog.minecraft.how1": "أرسل لنا اسم حسابك في Xbox/Microsoft عبر واتساب؛",
      "gameDialog.minecraft.how2": "اختر باقة Minecoins أو تذكرة المتجر وأكّد السعر؛",
      "gameDialog.minecraft.how3": "نوصل شحنًا رسميًا ويصل إلى حساب Microsoft الخاص بك فورًا.",

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

      "games.otherOffersNote": "قد تتوفر عروض أخرى لهذه اللعبة — فقط تواصل معنا.",

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
      "aria.close": "إغلاق",
      "aria.loading": "جارٍ التحميل",

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
