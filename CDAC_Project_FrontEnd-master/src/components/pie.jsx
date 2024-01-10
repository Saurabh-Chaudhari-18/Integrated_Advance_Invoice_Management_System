import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie(props) {
  const is=props.invoiceState;
  const data=is?.map((item,index)=>{
    return { id: index, value: item[0], label: item[1] }
  })
  return (
    <PieChart
      series={[
        {
          data: data,
        },
      ]}
      width={400}
      height={200}
    />
  );
}