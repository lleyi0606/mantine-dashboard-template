'use client';

import {
  Button,
  Container,
  Grid,
  Group,
  PaperProps,
  SimpleGrid,
  Skeleton,
  Stack,
  Text,
} from '@mantine/core';
import { IconChevronRight } from '@tabler/icons-react';

import {
  ErrorAlert,
  InvoicesTable,
  LanguageTable,
  MapChart,
  MobileDesktopChart,
  PageHeader,
  ProjectsTable,
  RevenueChart,
  SalesChart,
  StatsCard,
  StatsGrid,
  Surface,
} from '@/components';
import { useFetchData } from '@/hooks';

const PAPER_PROPS: PaperProps = {
  p: 'md',
  style: { minHeight: '100%' },
};

export default function HomePage() {
  const {
    data: projectsData,
    error: projectsError,
    loading: projectsLoading,
  } = useFetchData('/mocks/Projects.json');
  const {
    data: statsData,
    error: statsError,
    loading: statsLoading,
  } = useFetchData('/mocks/StatsGrid.json');
  const {
    data: languagesData,
    error: languageError,
    loading: languageLoading,
  } = useFetchData('/mocks/Languages.json');
  const {
    data: invoicesData,
    error: invoicesError,
    loading: invoicesLoading,
  } = useFetchData('/mocks/Invoices.json');

  return (
    <>
      <>
        <title>Dashboard | DesignSparx</title>
        <meta
          name="description"
          content="Explore our versatile dashboard website template featuring a stunning array of themes and meticulously crafted components. Elevate your web project with seamless integration, customizable themes, and a rich variety of components for a dynamic user experience. Effortlessly bring your data to life with our intuitive dashboard template, designed to streamline development and captivate users. Discover endless possibilities in design and functionality today!"
        />
      </>
      <Container fluid>
        <Stack gap="lg">
          <PageHeader title="Overview" withActions={true} />
          
          {/* Stats Grid Section */}
          <StatsGrid
            data={statsData.data}
            loading={statsLoading}
            error={statsError}
            paperProps={PAPER_PROPS}
          />

          {/* Charts Section */}
          <Grid gutter={{ base: 5, xs: 'md', md: 'xl', xl: 50 }}>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <RevenueChart {...PAPER_PROPS} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <SalesChart {...PAPER_PROPS} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <MobileDesktopChart {...PAPER_PROPS} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <MapChart {...PAPER_PROPS} />
            </Grid.Col>
          </Grid>

          {/* Tables and Data Section */}
          <Grid>
            <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
              <LanguageTable
                data={languagesData.slice(0, 6)}
                error={languageError}
                loading={languageLoading}
                {...PAPER_PROPS}
              />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6, lg: 8 }}>
              <InvoicesTable
                data={invoicesData.slice(0, 6)}
                error={invoicesError}
                loading={invoicesLoading}
                {...PAPER_PROPS}
              />
            </Grid.Col>
            <Grid.Col span={12}>
              <Surface {...PAPER_PROPS}>
                <Group justify="space-between" mb="md">
                  <Text size="lg" fw={600}>
                    Projects & Tasks
                  </Text>
                  <Button
                    variant="subtle"
                    rightSection={<IconChevronRight size={18} />}
                    disabled
                  >
                    View all
                  </Button>
                </Group>
                <ProjectsTable
                  data={projectsData.slice(0, 6)}
                  error={projectsError}
                  loading={projectsLoading}
                />
              </Surface>
            </Grid.Col>
          </Grid>
        </Stack>
      </Container>
    </>
  );
}
