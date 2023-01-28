import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'cea'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '0ae'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '78a'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '121'),
    exact: true
  },
  {
    path: '/blog/tags/community',
    component: ComponentCreator('/blog/tags/community', 'a8f'),
    exact: true
  },
  {
    path: '/blog/tags/welcome',
    component: ComponentCreator('/blog/tags/welcome', 'a17'),
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
