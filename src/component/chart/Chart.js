import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Line, LineChart, ResponsiveContainer, XAxis,  YAxis, Tooltip} from 'recharts';
import './Chart.css'

const Chart = () => {
    const datas = useLoaderData()
    const {data} = datas ;
    return (
        <div className='container mt-5'>
            {
            <ResponsiveContainer width="90%" height={500}>
                <LineChart data={data}>
                    <XAxis dataKey="name" />
                    <YAxis/>
                    <Tooltip />
                    <Line type="monotone" dataKey="total" stroke="blueviolet"></Line>
                </LineChart>
            </ResponsiveContainer>
            }
        </div>
    );
};

export default Chart;