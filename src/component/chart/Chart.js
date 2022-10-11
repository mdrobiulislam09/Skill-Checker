import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Chart = () => {
    const datas = useLoaderData()
    const {data} = datas ;
    return (
        <div className='container p-5'>
            {
            <LineChart width={300} height={400} data={data}>
                <XAxis dataKey="name" />
                <YAxis/>
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="blueviolet"></Line>
            </LineChart>
            }
        </div>
    );
};

export default Chart;