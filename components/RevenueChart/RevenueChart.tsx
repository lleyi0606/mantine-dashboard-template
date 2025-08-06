'use client';

/*
 * TEMPLATE COMPONENT - REQUIRES CUSTOMIZATION
 * 
 * This is a template time series area chart component. Before using:
 * 1. Update the series data with your actual time series values
 * 2. Change series names from 'series1', 'series2' to meaningful names
 * 3. Update the chart title to reflect what you're measuring
 * 4. Replace hardcoded datetime categories with your actual time periods
 * 5. Adjust tooltip format to match your date format
 * 6. Update y-axis formatting if needed for your data units
 * 
 * DO NOT use this component as-is without customizing the data and time periods!
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
import dynamic from 'next/dynamic';

import { Surface } from '@/components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type RevenueChartProps = PaperProps;

const RevenueChart = ({ ...others }: RevenueChartProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // TODO: Replace with actual time series data from your dataset
  // TEMPLATE DATA - MUST BE CUSTOMIZED FOR YOUR USE CASE
  const series = [
    {
      name: 'SERIES_1_REPLACE_ME', // TODO: Use meaningful series name (e.g., 'Revenue', 'Sales')
      data: [31, 40, 28, 51, 42, 109, 100], // TODO: Replace with actual time series values
    },
    {
      name: 'SERIES_2_REPLACE_ME', // TODO: Use meaningful series name (e.g., 'Profit', 'Users')
      data: [11, 32, 45, 32, 34, 52, 41], // TODO: Replace with actual time series values
    },
  ];

  const options: any = {
    chart: {
      height: 350,
      type: 'area',
      fontFamily: 'Open Sans, sans-serif',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    xaxis: {
      type: 'datetime',
      // TODO: Replace with actual datetime values from your dataset
      categories: [
        '2018-09-19T00:00:00.000Z', // TEMPLATE DATES - REPLACE WITH YOUR ACTUAL TIME PERIODS
        '2018-09-19T01:30:00.000Z',
        '2018-09-19T02:30:00.000Z',
        '2018-09-19T03:30:00.000Z',
        '2018-09-19T04:30:00.000Z',
        '2018-09-19T05:30:00.000Z',
        '2018-09-19T06:30:00.000Z',
      ],
      labels: {
        style: {
          colors: colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
    colors: [
      theme.colors[theme.primaryColor][5],
      theme.colors[theme.primaryColor][2],
    ],
    legend: {
      labels: {
        colors: [colorScheme === 'dark' ? theme.white : theme.black],
      },
    },
  };

  return (
    <Surface {...others}>
      <Group justify="space-between" mb="md">
        <Text size="lg" fw={600}>
          CHART_TITLE_REPLACE_ME {/* TODO: Update with meaningful title for your time series */}
        </Text>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
        </ActionIcon>
      </Group>
      {/*@ts-ignore*/}
      <Chart
        options={options}
        series={series}
        type="area"
        height={350}
        width={'100%'}
      />
    </Surface>
  );
};

export default RevenueChart;
