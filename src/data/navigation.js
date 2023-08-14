export const MainNav = [
  {title: 'Home', to: '/'},
  {title: 'About', to: 'about#foo'},
  {title: 'News', to: 'news'},
  {title: 'Contacts', to: 'contacts'}
];

export const FooterNav = [
  {title: 'About', to: 'about'}
];

export const sidebarNav = [
  {title: 'Group 1', to: "group-1"},
  {title: 'Group 2', to: "group-2", 
    children: [
      {title: 'Subgroup 1', to: "subgroup-1"},
      {title: 'Subgroup 2', to: "subgroup-2",
        children: [
          {title: 'Subsubgroup 1', to: "subgroup-1"},
          {title: 'Subsubgroup 2', to: "subgroup-2"},
        ]
      },
    ]
  },
  {title: 'Group 3', to: "group-3"},
];