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
  MobileDesktopChart,
  PageHeader,
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
            <Grid.Col span={12}>
              <RevenueChart {...PAPER_PROPS} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <MobileDesktopChart {...PAPER_PROPS} />
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 4 }}>
              <SalesChart {...PAPER_PROPS} />
            </Grid.Col>
          </Grid>


        </Stack>
      </Container>
    </>
  );
}
