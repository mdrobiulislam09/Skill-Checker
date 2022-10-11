import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const datas = useLoaderData()
    const {data} = datas ;
    return (
        <div>
            {
            <LineChart width={500} height={500} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line type="monotone" dataKey="total" stroke="#82ca9d"></Line>
            </LineChart>
            }
        </div>
    );
};

export default Chart;