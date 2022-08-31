import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/jitsibox-pro/markdown-page',
    component: ComponentCreator('/jitsibox-pro/markdown-page', '845'),
    exact: true
  },
  {
    path: '/jitsibox-pro/docs',
    component: ComponentCreator('/jitsibox-pro/docs', '04f'),
    routes: [
      {
        path: '/jitsibox-pro/docs/github-read-me/apps/apps-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/apps/apps-read-me', '99d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/apps/controller-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/apps/controller-read-me', '0f3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/apps/main-screen-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/apps/main-screen-read-me', 'af4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/packages/model-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/packages/model-read-me', '68a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/packages/packages-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/packages/packages-read-me', '078'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/packages/ui-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/packages/ui-read-me', 'eaf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/services/bridge-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/services/bridge-read-me', '2d6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/github-read-me/services/services-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/github-read-me/services/services-read-me', 'fbf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/installation/fontend-app',
        component: ComponentCreator('/jitsibox-pro/docs/installation/fontend-app', 'dfa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/installation/instal-chrome',
        component: ComponentCreator('/jitsibox-pro/docs/installation/instal-chrome', '5ef'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/installation/instal-kiosk',
        component: ComponentCreator('/jitsibox-pro/docs/installation/instal-kiosk', '811'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/installation/installation-detaillee',
        component: ComponentCreator('/jitsibox-pro/docs/installation/installation-detaillee', '557'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/installation/para-tablette',
        component: ComponentCreator('/jitsibox-pro/docs/installation/para-tablette', 'de0'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/jitsi-pro-read-me',
        component: ComponentCreator('/jitsibox-pro/docs/jitsi-pro-read-me', '51c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/presentation/',
        component: ComponentCreator('/jitsibox-pro/docs/presentation/', '77b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/Roadmap/',
        component: ComponentCreator('/jitsibox-pro/docs/Roadmap/', '3a1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/Roadmap/AfficherParticipants',
        component: ComponentCreator('/jitsibox-pro/docs/Roadmap/AfficherParticipants', '828'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/Roadmap/AfficherTchat',
        component: ComponentCreator('/jitsibox-pro/docs/Roadmap/AfficherTchat', 'efc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/Roadmap/CallViaConfNumber',
        component: ComponentCreator('/jitsibox-pro/docs/Roadmap/CallViaConfNumber', '03c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/Roadmap/GestionVolume',
        component: ComponentCreator('/jitsibox-pro/docs/Roadmap/GestionVolume', '4de'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/jitsibox-pro/docs/structure/',
        component: ComponentCreator('/jitsibox-pro/docs/structure/', '615'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/jitsibox-pro/',
    component: ComponentCreator('/jitsibox-pro/', 'bd7'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
