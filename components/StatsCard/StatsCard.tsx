/*
 * TEMPLATE COMPONENT - REQUIRES CUSTOMIZATION
 * 
 * This is a template individual stats card component for displaying single KPIs. Before using:
 * 1. Update the data type to match your actual metric structure
 * 2. Modify the title, value, diff, and period fields to match your KPIs
 * 3. Update the comparison text to match your time period
 * 4. Adjust the diff calculation and coloring logic if needed
 * 5. Ensure your data provides meaningful titles and values
 * 
 * DO NOT use this component as-is without customizing the data and comparison text!
 */

import { Badge, Group, PaperProps, Text } from '@mantine/core';
import { IconArrowDownRight, IconArrowUpRight } from '@tabler/icons-react';

import { Surface } from '@/components';

import classes from './Stats.module.css';

type StatsCardProps = {
  // TODO: Update this data structure to match your actual metric
  data: { title: string; value: string; diff: number; period?: string }; // TEMPLATE DATA STRUCTURE - CUSTOMIZE FOR YOUR KPI
} & PaperProps;

const StatsCard = ({ data, ...others }: StatsCardProps) => {
  const { title, value, period, diff } = data;
  const DiffIcon = diff > 0 ? IconArrowUpRight : IconArrowDownRight;

  return (
    <Surface {...others}>
      <Group justify="space-between">
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        {period && (
          <Badge variant="filled" radius="sm">
            {period}
          </Badge>
        )}
      </Group>

      <Group align="flex-end" gap="xs" mt={25}>
        <Text className={classes.value}>{value}</Text>
        <Text
          c={diff > 0 ? 'teal' : 'red'}
          fz="sm"
          fw={500}
          className={classes.diff}
        >
          <span>{diff}%</span>
          <DiffIcon size="1rem" stroke={1.5} />
        </Text>
      </Group>

      <Text fz="xs" mt={7}>
        COMPARISON_TEXT_REPLACE_ME {/* TODO: Update with your actual comparison period */}
      </Text>
    </Surface>
  );
};

export default StatsCard;
