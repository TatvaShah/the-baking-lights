import type { SiteConfig } from "@/lib/types";

// The ONLY file a builder edits (plus images in /public).
// Empty or missing optional fields hide their section automatically.
// Use real facts only: the leads JSON, the IG profile, and posts. Never invent hours, prices, or reviews.
// No double hyphens anywhere in copy; the build fails if one slips in.

export const site: SiteConfig = {
  name: "The Baking Lights",
  tagline: "Eggless custom celebration cakes in Brampton. Freshly baked, made to order.",
  category: "Eggless custom cakes",
  schemaType: "Bakery",
  area: "Brampton, ON",
  siteUrl: "https://the-baking-lights.vercel.app",

  theme: {
    preset: "bakery-pastel",
    colors: { accent: "#a97d77" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    variant: "split",
    eyebrow: "Brampton and Toronto",
    headline: "Eggless cakes made for your celebration",
    subhead:
      "Custom kids cakes, baby showers, birthdays, engagements, and more. Send a DM with your date and idea to get started.",
    images: [
      {
        src: "/images/post1.jpg",
        alt: "Rainbow butterfly celebration cake by The Baking Lights",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/post3.jpg",
        alt: "Soft floral cake with gold accents",
        width: 1080,
        height: 1080,
      },
      {
        src: "/images/post2.jpg",
        alt: "Hello Kitty pink birthday cake",
        width: 1080,
        height: 1080,
      },
    ],
    secondaryCta: { label: "See the cakes", href: "#gallery" },
  },

  highlights: [
    "100% eggless",
    "Made to order",
    "Orders by DM or phone",
    "Brampton",
  ],

  about: {
    title: "Freshly baked, made to order",
    body: [
      "The Baking Lights creates eggless custom celebration cakes for kids birthdays, baby showers, engagements, and every sweet moment in between.",
      "Based in Brampton and serving Toronto too. Tell us your date, size, flavour, and design idea, and we will craft something made just for you.",
    ],
    image: {
      src: "/images/post7.jpg",
      alt: "Romantic celebration cake with soft florals",
      width: 1080,
      height: 1080,
    },
  },

  menu: {
    title: "What we bake",
    intro: "Every cake is quoted in your DM based on size, design, and date. All cakes are eggless.",
    variant: "cards",
    groups: [
      {
        title: "Celebration cakes",
        note: "Quoted by DM",
        items: [
          {
            name: "Kids theme cakes",
            description: "Unicorn, Hello Kitty, gamer, elephant, hot air balloon, and more.",
            image: {
              src: "/images/post2.jpg",
              alt: "Hello Kitty themed birthday cake",
              width: 1080,
              height: 1080,
            },
            href: "https://www.instagram.com/p/DeFWtdEgrTF/",
          },
          {
            name: "Birthday cakes",
            description: "Sparkle, florals, and custom designs for every age.",
            image: {
              src: "/images/post6.jpg",
              alt: "Sparkly birthday celebration cake",
              width: 1080,
              height: 1080,
            },
            href: "https://www.instagram.com/p/DdwIqXBxH8b/",
          },
          {
            name: "Baby shower and welcome baby",
            description: "Gender reveal, baby shower, and welcome baby cakes.",
            image: {
              src: "/images/post8.jpg",
              alt: "Baby shower celebration cake",
              width: 1080,
              height: 1080,
            },
            href: "https://www.instagram.com/p/DdoacmgxWDt/",
          },
          {
            name: "Engagement and wedding",
            description: "Soft florals and elegant designs for your big day.",
            image: {
              src: "/images/post7.jpg",
              alt: "Engagement celebration cake",
              width: 1080,
              height: 1080,
            },
            href: "https://www.instagram.com/p/DdtlXJQxuZX/",
          },
        ],
      },
    ],
  },

  gallery: {
    title: "A look at the cakes",
    items: [
      {
        src: "/images/post1.jpg",
        width: 1080,
        height: 1080,
        alt: "Rainbow butterfly celebration cake",
        caption: "Rainbows and butterflies",
        href: "https://www.instagram.com/p/DeImqJLtEca/",
      },
      {
        src: "/images/post2.jpg",
        width: 1080,
        height: 1080,
        alt: "Hello Kitty pink birthday cake",
        caption: "Hello Kitty birthday",
        href: "https://www.instagram.com/p/DeFWtdEgrTF/",
      },
      {
        src: "/images/post3.jpg",
        width: 1080,
        height: 1080,
        alt: "Soft swirls and gold floral cake",
        caption: "Soft swirls and gold",
        href: "https://www.instagram.com/p/DeDhFv4Nvg2/",
      },
      {
        src: "/images/post4.jpg",
        width: 1080,
        height: 1080,
        alt: "Gamer themed birthday cake",
        caption: "Gamer birthday upgrade",
        href: "https://www.instagram.com/p/Dd6gFzcRRkB/",
      },
      {
        src: "/images/post5.jpg",
        width: 1080,
        height: 1080,
        alt: "Custom celebration cake",
        caption: "Better than the inspo",
        href: "https://www.instagram.com/p/Ddy73jyxFBL/",
      },
      {
        src: "/images/post6.jpg",
        width: 1080,
        height: 1080,
        alt: "Sparkly birthday cake",
        caption: "A little extra sparkle",
        href: "https://www.instagram.com/p/DdwIqXBxH8b/",
      },
      {
        src: "/images/post7.jpg",
        width: 1080,
        height: 1080,
        alt: "Romantic engagement cake",
        caption: "A whole new world of love",
        href: "https://www.instagram.com/p/DdtlXJQxuZX/",
      },
      {
        src: "/images/post8.jpg",
        width: 1080,
        height: 1080,
        alt: "Baby shower cake",
        caption: "Tiny kicks and big dreams",
        href: "https://www.instagram.com/p/DdoacmgxWDt/",
      },
      {
        src: "/images/post9.jpg",
        width: 1080,
        height: 1080,
        alt: "Hot air balloon birthday cake",
        caption: "Hot air balloons and teddies",
        href: "https://www.instagram.com/p/DdnFU4ytiIC/",
      },
      {
        src: "/images/post10.jpg",
        width: 1080,
        height: 1080,
        alt: "Soft floral cake with candles",
        caption: "Soft florals and candles",
        href: "https://www.instagram.com/p/DdZeT6Xx6Dn/",
      },
    ],
  },

  reels: {
    title: "A closer look",
    intro: "",
    items: [],
  },

  instagram: {
    handle: "the_baking_lights",
    embeds: [
      "https://www.instagram.com/p/DeImqJLtEca/",
      "https://www.instagram.com/p/DeDhFv4Nvg2/",
      "https://www.instagram.com/p/Dd6gFzcRRkB/",
    ],
    embedsTitle: "Fresh from Instagram",
  },

  order: {
    title: "Order in a quick DM",
    intro: "Orders are taken through Instagram or by phone. Tap the button to open a starter message, then send it along.",
    dmMessage:
      "Hi The Baking Lights! I would like to order a custom cake.\nDate needed:\nServings or size:\nFlavour:\nDesign idea:",
    links: [],
    note: "Made to order. All cakes are eggless.",
  },

  reviews: { items: [] },

  faq: [
    {
      q: "How do I order?",
      a: "Send a DM on Instagram or call us with your date, servings or size, flavour, and design idea. You will get a quote back from there.",
    },
    {
      q: "Are your cakes eggless?",
      a: "Yes. Every cake is 100% eggless.",
    },
    {
      q: "Where are you based?",
      a: "We are based in Brampton and also serve Toronto.",
    },
    {
      q: "What kinds of cakes do you make?",
      a: "Custom celebration cakes for kids birthdays, baby showers, gender reveals, engagements, weddings, and more. Tell us your theme and we will design it.",
    },
  ],

  contact: {
    area: "Brampton",
    phone: "+1 (437) 776-4647",
    socials: [
      { label: "Facebook", href: "https://facebook.com/109584588034818" },
    ],
  },

  seo: {
    title: "The Baking Lights | Eggless custom cakes in Brampton",
    description:
      "Eggless custom celebration cakes in Brampton. Kids themes, baby showers, birthdays, and engagements. Order by Instagram DM or phone.",
    keywords: [
      "eggless cakes Brampton",
      "custom cakes Brampton",
      "celebration cakes Brampton",
      "kids birthday cakes Brampton",
      "baby shower cakes Brampton",
    ],
    ogPhoto: "/images/og-photo.jpg",
  },
};
