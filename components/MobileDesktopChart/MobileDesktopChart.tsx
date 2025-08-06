'use client';

/*
 * TEMPLATE COMPONENT - REQUIRES CUSTOMIZATION
 * 
 * This is a template bar chart component. Before using:
 * 1. Update the series data with your actual dataset values
 * 2. Change category names and x-axis labels to match your data
 * 3. Update the chart title to reflect what you're visualizing
 * 4. Adjust colors if needed to match your theme
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
import dynamic from 'next/dynamic';

import { Surface } from '@/components';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

type MobileDesktopChartProps = PaperProps;
const MobileDesktopChart = ({ ...others }: MobileDesktopChartProps) => {
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  // TODO: Replace with actual data from your dataset
  // TEMPLATE DATA - MUST BE CUSTOMIZED FOR YOUR USE CASE
  const series = [
    {
      name: 'CATEGORY_1_REPLACE_ME', // TODO: Use actual category name
      data: [44, 55, 41, 67, 22, 43, 34], // TODO: Replace with actual data values
    },
    {
      name: 'CATEGORY_2_REPLACE_ME', // TODO: Use actual category name  
      data: [13, 23, 20, 8, 13, 27, 10], // TODO: Replace with actual data values
    },
  ];

  const options: any = {
    chart: {
      type: 'bar',
      height: 300,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
      fontFamily: 'Open Sans, sans-serif',
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        columnWidth: '25%',
        dataLabels: {
          total: {
            enabled: false,
            style: {
              fontSize: '13px',
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'], // TODO: Replace with actual x-axis labels
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
    colors: [
      theme.colors[theme.primaryColor][8],
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
          CHART_TITLE_REPLACE_ME {/* TODO: Update with meaningful title for your data */}
        </Text>
        <ActionIcon variant="subtle">
          <IconDotsVertical size={16} />
        </ActionIcon>
      </Group>
      {/*@ts-ignore*/}
      <Chart
        options={options}
        series={series}
        type="bar"
        height={300}
        width={'100%'}
      />
    </Surface>
  );
};

export default MobileDesktopChart;
