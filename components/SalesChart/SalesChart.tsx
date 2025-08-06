'use client';

/*
 * TEMPLATE COMPONENT - REQUIRES CUSTOMIZATION
 * 
 * This is a template donut chart component. Before using:
 * 1. Update the series data with your actual values
 * 2. Modify the data source (currently loads from /mocks/Sales.json)
 * 3. Update the chart title and DataTable columns
 * 4. Ensure the data structure matches your dataset
 * 
 * DO NOT use this component as-is without customizing the data!
 */

import {
  ActionIcon,
  Group,
  PaperProps,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconDotsVertical } from '@tabler/icons-react';
import { DataTable } from 'mantine-datatable';
import dynamic from 'next/dynamic';

import { ErrorAlert, Surface } from '@/components';
import { useFetchData } from '@/hooks';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type SalesChartProps = PaperProps;

const SalesChart = ({ ...others }: SalesChartProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  
  const CATEGORY_NUM = 4;
  
  // Configurable chart title
  const CHART_TITLE = 'Sales Overview'; // TODO: Replace with meaningful title for your data
  
  const {
    data: salesData,
    error: salesError,
    loading: salesLoading,
  } = useFetchData('/mocks/Sales.json');

  // Generate series data dynamically from the first CATEGORY_NUM items
  // with NO fallback data
  const series = salesData?.length ? 
    salesData.slice(0, CATEGORY_NUM).map((item: any) => item.value) : [];

  const options: any = {
    chart: { type: 'donut', fontFamily: 'Open Sans, sans-serif' },
    legend: { show: false },
    dataLabels: { enabled: false },
    tooltip: { enabled: false },
    states: {
      hover: { filter: { type: 'lighten', value: 0.5 } },
      active: { filter: { type: 'none', value: 0 } },
    },
    stroke: { width: 0 },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '75%',
          labels: {
            show: true,
            name: {
              show: true,
              fontSize: '12px',
              fontWeight: '400',
              color:
                colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
            },
            value: {
              show: true,
              fontSize: '22px',
              fontWeight: '600',
              color:
                colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
            },
            total: {
              show: true,
              showAlways: true,
              formatter: function (w: any) {
                const totals = w.globals.seriesTotals;

                const result = totals.reduce(
                  (a: number, b: number) => a + b,
                  0,
                );

                return (result / 1000).toFixed(3);
              },
              color:
                colorScheme === 'dark' ? theme.white : theme.colors.dark[6],
            },
          },
        },
      },
    },
    colors: Array.from({ length: CATEGORY_NUM }, (_, i) => {
      const shades = [9, 7, 5, 3, 2, 1];
      return theme.colors[theme.primaryColor][shades[i] || 1];
    }),
  };

  return (
    <Surface {...others}>
      <Group justify="space-between" mb="md">
        <Text size="lg" fw={600}>
          {CHART_TITLE}
        </Text>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
        </ActionIcon>
      </Group>
      {/*@ts-ignore*/}
      <Chart
        options={options}
        series={series}
        type="donut"
        height={160}
        width={'100%'}
      />
      {salesError ? (
        <ErrorAlert
          title="Error loading sales data"
          message={salesError.toString()}
        />
      ) : (
        <DataTable
          highlightOnHover
          columns={[
            { accessor: 'source' },
            { accessor: 'revenue' },
            { accessor: 'value' },
          ]}
          records={salesData.slice(0, CATEGORY_NUM)}
          height={200}
          fetching={salesLoading}
        />
      )}
    </Surface>
  );
};

export default SalesChart;
