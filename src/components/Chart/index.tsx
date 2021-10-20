import { Line } from 'react-chartjs-2';
import * as ChartJS from 'chart.js';

import * as Styled from './styles';
import Heading from '../Typograph/Heading';
import NoData from '../NoData';

interface ChartProps {
  data: ChartJS.ChartData;
  title: string;
}

const options: ChartJS.ChartOptions = {
  maintainAspectRatio: true,
  elements: {
    line: {
      tension: 0,
    }
  },
  legend: {
    display: true,
    position: 'bottom',
    align: 'center',
    labels: {
      usePointStyle: true,
    }
  },
  scales: {
    xAxes: [
      {
        display: true,
        gridLines: {
          display: false,
        }
      }
    ],
    yAxes: [
      {
        type: 'linear',
        display: false,
        position: 'left',
        id: 'cashflow',
      },
    ],
  },
};


export default function Chart({ data, title }: ChartProps) {
  return (
    <Styled.Wrapper>
      <div>
        <Heading level={3}>
          {title}
        </Heading>
      </div>
      {data ? (
        <Line
          type="line"
          height={139}
          width={600}
          data={data}
          options={options} 
        />
      ) : <NoData height={139} />}
    </Styled.Wrapper>
  )
}