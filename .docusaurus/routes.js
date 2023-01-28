import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'b10'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '18b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '03e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f9e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'fd2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '35a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c65'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '727'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'ca9'),
    routes: [
      {
        path: '/docs/',
        component: ComponentCreator('/docs/', '621'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/about',
        component: ComponentCreator('/docs/about', '978'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/collaboration',
        component: ComponentCreator('/docs/collaboration', 'cbc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/license',
        component: ComponentCreator('/docs/license', 'b5f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'f3e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
