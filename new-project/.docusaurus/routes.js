import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jitsibox-pro/en/markdown-page',
    component: ComponentCreator('/jitsibox-pro/en/markdown-page', '5f0'),
    exact: true
  },
  {
    path: '/jitsibox-pro/en/docs',
    component: ComponentCreator('/jitsibox-pro/en/docs', '7ea'),
    routes: [
      {
        path: '/jitsibox-pro/en/docs/github-read-me/apps/apps-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/apps/apps-read-me', '369'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/apps/controller-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/apps/controller-read-me', '54a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/apps/main-screen-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/apps/main-screen-read-me', '07e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/packages/model-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/packages/model-read-me', '23e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/packages/packages-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/packages/packages-read-me', '751'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/packages/ui-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/packages/ui-read-me', 'f66'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/services/bridge-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/services/bridge-read-me', '605'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/github-read-me/services/services-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/github-read-me/services/services-read-me', 'e48'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/installation/fontend-app',
        component: ComponentCreator('/jitsibox-pro/en/docs/installation/fontend-app', '821'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/installation/instal-chrome',
        component: ComponentCreator('/jitsibox-pro/en/docs/installation/instal-chrome', 'acb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/installation/instal-kiosk',
        component: ComponentCreator('/jitsibox-pro/en/docs/installation/instal-kiosk', '304'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/installation/installation-detaillee',
        component: ComponentCreator('/jitsibox-pro/en/docs/installation/installation-detaillee', 'cb0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/installation/para-tablette',
        component: ComponentCreator('/jitsibox-pro/en/docs/installation/para-tablette', '22d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/jitsi-pro-read-me',
        component: ComponentCreator('/jitsibox-pro/en/docs/jitsi-pro-read-me', 'ba4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/presentation/',
        component: ComponentCreator('/jitsibox-pro/en/docs/presentation/', '119'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/Roadmap/',
        component: ComponentCreator('/jitsibox-pro/en/docs/Roadmap/', '58b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/Roadmap/AfficherParticipants',
        component: ComponentCreator('/jitsibox-pro/en/docs/Roadmap/AfficherParticipants', '059'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/Roadmap/AfficherTchat',
        component: ComponentCreator('/jitsibox-pro/en/docs/Roadmap/AfficherTchat', 'a95'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/Roadmap/CallViaConfNumber',
        component: ComponentCreator('/jitsibox-pro/en/docs/Roadmap/CallViaConfNumber', '9d2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/Roadmap/GestionVolume',
        component: ComponentCreator('/jitsibox-pro/en/docs/Roadmap/GestionVolume', '8d7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/en/docs/structure/',
        component: ComponentCreator('/jitsibox-pro/en/docs/structure/', '0e2'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/jitsibox-pro/en/',
    component: ComponentCreator('/jitsibox-pro/en/', '4ed'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
