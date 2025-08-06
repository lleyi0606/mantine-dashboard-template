# AI Customization Guide

## ⚠️ IMPORTANT FOR AI TOOLS

This template contains **PLACEHOLDER COMPONENTS** that **MUST BE CUSTOMIZED** for each dataset. Do not use components as-is!

## Required Customizations

### For ALL Chart Components:

1. **Replace hardcoded data** with actual values from the user's dataset
2. **Update chart titles** to reflect what the data represents  
3. **Change axis labels** to match actual data categories
4. **Modify series names** to use meaningful category names

### Component-Specific Requirements:

#### `MobileDesktopChart.tsx` (Bar Chart)
- [ ] Replace `CATEGORY_1_REPLACE_ME` and `CATEGORY_2_REPLACE_ME` with actual category names
- [ ] Replace hardcoded data arrays with actual values
- [ ] Update `CHART_TITLE_REPLACE_ME` with meaningful title
- [ ] Change x-axis categories from months to actual data labels

#### `SalesChart.tsx` (Donut Chart)  
- [ ] Replace hardcoded series array `[44, 55, 41, 17, 15]` with actual data
- [ ] Update data source from `/mocks/Sales.json` to match user's data structure
- [ ] Change `CHART_TITLE_REPLACE_ME` to reflect actual data meaning
- [ ] Update DataTable columns to match user's data fields

#### `RevenueChart.tsx` (Time Series)
- [ ] Replace date ranges with actual time periods from user data
- [ ] Update revenue values with actual metrics
- [ ] Change title and y-axis labels to match actual KPIs

### Before Deploying:

1. Test that all data displays correctly
2. Ensure no placeholder text like "REPLACE_ME" remains
3. Verify chart titles make sense for the dataset
4. Check that all data sources point to valid endpoints/files

## Search for These Patterns to Find What Needs Customization:

- `TODO:`
- `REPLACE_ME`
- `TEMPLATE DATA`
- `MUST BE CUSTOMIZED`

## AI Tool Instructions:

When using this template:
1. **NEVER** copy components without modifying the data
2. **ALWAYS** replace placeholder values with actual dataset values
3. **ALWAYS** update titles and labels to match the user's domain
4. **VERIFY** that all customizations are complete before finishing
