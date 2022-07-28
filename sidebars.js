// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  whitepaperSidebar: [
    {
      type: 'category',
      label: 'Whitepaper',
      items: [
        {
          type: 'autogenerated',
          dirName: 'whitepaper'
        }
      ]
    },
    {
      type: 'doc',
      id: 'faq/faq',
      label: 'FAQ'
    }
  ],
  operatorsSidebar: [
    {
      type: 'category',
      label: 'Nodes & Validators',
      items: [
        {
          type: 'autogenerated',
          dirName: 'operators'
        }
      ]
    }
  ]
}

module.exports = sidebars
