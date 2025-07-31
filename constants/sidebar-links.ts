import { IconChartBar, IconChartInfographic, IconChartArcs3 } from '@tabler/icons-react';

import { PATH_DASHBOARD } from '@/routes';

// Sidebar will only show the three dashboard variants.
export const SIDEBAR_LINKS = [
  {
    title: 'Dashboard',
    links: [
      { label: 'Default', icon: IconChartBar, link: PATH_DASHBOARD.default },
      { label: 'Analytics', icon: IconChartInfographic, link: PATH_DASHBOARD.analytics },
      { label: 'SaaS', icon: IconChartArcs3, link: PATH_DASHBOARD.saas },
    ],
  },
];
