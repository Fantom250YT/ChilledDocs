// Sidebars are defined here - Automatic sidebars is turned off!

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {

  docs: [
    {
      type: 'link',
      label: 'Website',
      href: 'https://www.chilledadventures.net/'
  },

  {
      type: 'link',
      label: 'Support Discord',
      href: 'https://discord.chilledadventures.net',
  },
 
{
      type: 'category',
      label: 'Getting Started',
      items: [
          'getting_started/welcome',
      ],
},
  {
      type: 'doc',
      id: "welcome", // Welcome Page
  },
  ],
};

module.exports = sidebars;
