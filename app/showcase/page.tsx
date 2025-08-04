'use client';

import { Container, Grid, SimpleGrid, Stack, Title, Text, Divider } from '@mantine/core';

import {
  StatsCard,
  MapChart,
  InvoicesTable,
  PricingCard,
  ProjectsCard,
  RevenueChart,
  SalesChart,
  MobileDesktopChart,
  LanguageTable,
  TrafficTable,
  UserProfileCard,
  ChatsList,
  AddTaskCard,
  Surface,
  Logo,
  ToggleTheme,
} from '@/components';

// Mock data
const statsData = {
  title: 'Revenue',
  value: '$13,456',
  diff: 18.2,
  period: 'Month'
};

const pricingData = {
  tier: 'Professional',
  description: 'Perfect for growing businesses',
  price: { month: 29, year: 290 },
  features: [
    'Unlimited projects',
    'Advanced analytics',
    'Priority support',
    'Custom integrations'
  ],
  preferred: true,
  actionText: 'Get Started',
  monthly: false
};

const projectData = {
  id: '1',
  title: 'Analytics Dashboard',
  description: 'A comprehensive dashboard for tracking business metrics and KPIs',
  status: 'in progress' as const,
  image: null,
  completion: 75
};

const invoicesData = [
  {
    id: 'inv_001',
    full_name: 'John Doe',
    email: 'john@example.com',
    address: '123 Main St',
    country: 'USA',
    status: 'approved' as const,
    amount: 1250,
    issue_date: '2024-01-15',
    description: 'Web development services',
    client_email: 'client@example.com',
    client_address: '456 Oak Ave',
    client_country: 'USA',
    client_name: 'Acme Corp',
    client_company: 'Acme Corporation'
  },
  {
    id: 'inv_002',
    full_name: 'Jane Smith',
    email: 'jane@example.com',
    address: '789 Pine Rd',
    country: 'Canada',
    status: 'pending' as const,
    amount: 850,
    issue_date: '2024-01-20',
    description: 'Consulting services',
    client_email: 'contact@startup.com',
    client_address: '321 Elm St',
    client_country: 'Canada',
    client_name: 'StartupXYZ',
    client_company: 'StartupXYZ Inc'
  }
];

const languageData = [
  { id: '1', language: 'TypeScript', users: 1250, users_percentage: 45.2 },
  { id: '2', language: 'JavaScript', users: 980, users_percentage: 35.4 },
  { id: '3', language: 'Python', users: 750, users_percentage: 19.4 }
];

const trafficData = [
  { id: '1', source: 'Google', sessions: 12580, bounce_rate: 25.4, avg_session_period: 180 },
  { id: '2', source: 'Direct', sessions: 8920, bounce_rate: 18.2, avg_session_period: 240 },
  { id: '3', source: 'Social Media', sessions: 5640, bounce_rate: 35.7, avg_session_period: 120 }
];

const userProfileData = {
  data: {
    avatar: '',
    name: 'John Doe',
    email: 'john@example.com',
    job: 'Developer'
  }
};

const chatData = {
  avatar: '',
  firstName: 'Alice',
  lastName: 'Johnson',
  lastMessage: 'Hey, how is the project going?'
};

export default function ShowcasePage() {
  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <div>
          <Title order={1} mb="md">Component Showcase</Title>
          <Text c="dimmed">
            A collection of all components available in the Mantine Analytics Dashboard
          </Text>
        </div>

        <Divider />

        {/* Basic Components */}
        <section>
          <Title order={2} mb="lg">Basic Components</Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
            <div>
              <Text fw={500} mb="sm">Logo</Text>
              <Surface p="md">
                <Logo />
              </Surface>
            </div>
            <div>
              <Text fw={500} mb="sm">Toggle Theme</Text>
              <Surface p="md">
                <ToggleTheme />
              </Surface>
            </div>
            <div>
              <Text fw={500} mb="sm">Surface</Text>
              <Surface p="md">
                <Text>This is a surface component</Text>
              </Surface>
            </div>
          </SimpleGrid>
        </section>

        <Divider />

        {/* Stats & Charts */}
        <section>
          <Title order={2} mb="lg">Stats & Charts</Title>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <div>
              <Text fw={500} mb="sm">Stats Card</Text>
              <StatsCard data={statsData} />
            </div>
            <div>
              <Text fw={500} mb="sm">Revenue Chart</Text>
              <RevenueChart />
            </div>
            <div>
              <Text fw={500} mb="sm">Sales Chart</Text>
              <SalesChart />
            </div>
            <div>
              <Text fw={500} mb="sm">Mobile/Desktop Chart</Text>
              <MobileDesktopChart />
            </div>
          </SimpleGrid>
        </section>

        <Divider />

        {/* Map */}
        <section>
          <Title order={2} mb="lg">Map Chart</Title>
          <MapChart />
        </section>

        <Divider />

        {/* Cards */}
        <section>
          <Title order={2} mb="lg">Cards</Title>
          <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
            <div>
              <Text fw={500} mb="sm">Pricing Card</Text>
              <PricingCard {...pricingData} />
            </div>
            <div>
              <Text fw={500} mb="sm">Projects Card</Text>
              <ProjectsCard {...projectData} />
            </div>
            <div>
              <Text fw={500} mb="sm">User Profile Card</Text>
              <UserProfileCard {...userProfileData} />
            </div>
            <div>
              <Text fw={500} mb="sm">Add Task Card</Text>
              <AddTaskCard addCard={(title) => console.log('Adding card:', title)} />
            </div>
          </SimpleGrid>
        </section>

        <Divider />

        {/* Tables */}
        <section>
          <Title order={2} mb="lg">Data Tables</Title>
          <Stack gap="lg">
            <div>
              <Text fw={500} mb="sm">Invoices Table</Text>
              <InvoicesTable data={invoicesData} />
            </div>
            <div>
              <Text fw={500} mb="sm">Language Table</Text>
              <LanguageTable data={languageData} error={null} loading={false} />
            </div>
            <div>
              <Text fw={500} mb="sm">Traffic Table</Text>
              <TrafficTable data={trafficData} error={null} loading={false} />
            </div>
          </Stack>
        </section>

        <Divider />

        {/* Communication */}
        <section>
          <Title order={2} mb="lg">Communication</Title>
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            <div>
              <Text fw={500} mb="sm">Chats List</Text>
              <ChatsList {...chatData} />
            </div>
          </SimpleGrid>
        </section>

      </Stack>
    </Container>
  );
}
