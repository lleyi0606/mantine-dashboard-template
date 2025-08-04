import { IconChartBar } from '@tabler/icons-react';

import { PATH_DASHBOARD } from '@/routes';

// Sidebar will only show the dashboard.
export const SIDEBAR_LINKS = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Dashboard', icon: IconChartBar, link: PATH_DASHBOARD.default },
    ],
  },
];
