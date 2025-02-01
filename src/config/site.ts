import { SiteConfig } from "@/types";

import { env } from "@/env.mjs";

export const siteConfig: SiteConfig = {
  name: "Charyll",
  author: "Charyll Mae Cabungcal",
  description: "My personal website built in Nextjs.",
  url: env.NEXT_PUBLIC_APP_URL,
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/logo.png`,
  links: {
    github: "https://github.com/asdfghjk000/CHARM",
    facebook: "https://www.facebook.com/charyllmae.cabungcal.3",
    twitter: "https://x.com/charyll",
    linkedin: "https://www.linkedin.com/in/charyll-cabungcal",
    email: "charllycbncl@gmail.com",
    resume:
      "https://drive.google.com/file/d/16OQGu47vpXpTBhVnehUiLKlgSsWLFN-i/view?usp=sharing",
  },
};
