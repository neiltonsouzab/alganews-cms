import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Chart from '../components/Chart';
export default {
  title: 'Example/Chart',
  component: Chart,
} as ComponentMeta<typeof Chart>;

const Template: ComponentStory<typeof Chart> = (args) => <Chart {...args} />;

const data = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
  datasets: [
    {
      label: 'Receitas',
      data: [500, 300, 200, 150, 400, 600],
      fill: true,
      backgroundColor: '#0099FF',
      borderColor: '#0099FF',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
    {
      label: 'Despesas',
      data: [400, 200, 400, 300, 500, 350],
      fill: true,
      backgroundColor: '#274060',
      borderColor: '#244060',
      borderWidth: 0.5,
      yAxisID: 'cashflow',
    },
  ],
};

export const Default = Template.bind({});
Default.args = {
  data,
  title: 'Média de performance nos últimos 12 meses'
};

export const WithoutData = Template.bind({});
WithoutData.args = {
  title: 'Média de performance nos últimos 12 meses'
};
