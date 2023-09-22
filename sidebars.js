/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // documentationSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  docs: [
    'index',
    {
      type: 'category',
      label: 'Learn',
      collapsed: true,
      collapsible: true,
      items: [
        'learn/index',
        'learn/the-network',
        'learn/delivery-acknowledgements',
        'learn/token-and-economics',
        'learn/services',
        'learn/developers',
      ],
    },
    {
      type: 'category',
      label: 'Node',
      collapsed: true,
      collapsible: true,
      items: [
        'node/index',
        'node/requirements',
        'node/testnet-onboarding',
        'node/install',
        'node/health-check',
        // TODO: Disabled `node/configuration` and `node/diagnostics` sidebar category
        // 'node/configuration',
        // 'node/diagnostics',
      ],
    },
    // TODO: Disabled `develop` sidebar category
    // {
    //   type: 'category',
    //   label: 'Develop',
    //   collapsed: true,
    //   collapsible: true,
    //   items: [
    //     'develop/index',
    //     'develop/client',
    //     'develop/service-development',
    //     'develop/json-rpc',
    //   ],
    // },
    'roadmap',
    {
      type: 'category',
      label: 'Open-source',
      collapsed: true,
      collapsible: true,
      items: [
        'Open-source/code-of-conduct',
        'Open-source/contributing',
        'Open-source/repositories',
      ],
    },
    'whitepaper',
  ],
};

module.exports = sidebars;
