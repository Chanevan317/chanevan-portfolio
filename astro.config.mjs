// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightThemeNova from "starlight-theme-nova";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [starlightThemeNova()],

      title: "Chan Evan Wesley",

      // defaultLocale: "en", // Set English as the root language
      // locales: {
      //   en: {
      //     label: "English",
      //     lang: "en",
      //   },
      //   fr: {
      //     label: "Français",
      //     lang: "fr", // This makes your site available at /fr/
      //   },
      // },

      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/Chanevan317",
        },
        {
          icon: "email",
          label: "email",
          href: "mailto:chanevan.std@gmail.com",
        },
      ],

      sidebar: [
        {
          label: "Profile",
          items: [
            { label: "About Me & Overview", link: "/profile/about/" },
            { label: "Technical Tech Stack", link: "/profile/specs/" },
          ],
        },
        {
          label: "Robotics & Hardware", // Direct, simple, universally understood
          items: [
            {
              label: 'Smart LoadBot: Autonomous "Follow-Me" Robot',
              link: "/hardware/smart_loadbot/",
            },
            {
              label: "FinMe: Find me devices",
              link: "/hardware/finme/",
            },
          ],
        },
        {
          label: "Applications & Software",
          items: [
            {
              label: "DeptHub: Academic Messaging App",
              link: "software/dept_hub/",
            },
          ],
        },
        {
          label: "Background",
          items: [
            {
              label: "Academic Foundations",
              link: "background/academic/",
            },
            {
              label: "Professional Experience",
              link: "background/experience",
            },
            {
              label: "Certifications",
              link: "background/certifications/",
            },
          ],
        },
      ],
    }),
  ],
});
