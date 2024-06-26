import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "DataLoaf",
  tagline: "A self hosted product analytics platform for developers.",
  favicon: "img/favicon.png",

  // Set the production url of your site here
  url: "https://data-loaf.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "data-loaf", // Usually your GitHub org/user name.
  projectName: "data-loaf.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/data-loaf/data-loaf.github.io/tree/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/data-loaf/data-loaf.github.io/tree/main/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    async function taildwindPlugin(context, options) {
      return {
        name: "tailwind-plugin",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins = [
            require("postcss-import"),
            require("tailwindcss"),
            require("autoprefixer"),
          ];
          return postcssOptions;
        },
      };
    },
  ],

  themeConfig:
    // Replace with your project's social card
    {
      colorMode: { defaultMode: "dark", respectPrefersColorScheme: true },
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "DataLoaf",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-image.png",
        },
        items: [
          {
            position: "right",
            label: "Case Study",
            href: "/docs/category/case-study",
          },

          {
            href: "/docs/category/api",
            position: "right",
            label: "Docs",
          },
          {
            href: "/#team",
            label: "Team",
            position: "right",
          },
          {
            href: "https://github.com/data-loaf",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Documentation",
                to: "/docs/category/api",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/dataloaf/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/data-loaf",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} DataLoaf`,
      },
      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },

      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 3,
      },
    } satisfies Preset.ThemeConfig,
};

export default config;
