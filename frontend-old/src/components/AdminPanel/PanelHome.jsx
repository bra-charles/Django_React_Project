import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';

function PanelHome() {

    const data = [
        {
          name: 'Page A',
          uv: 400,
          pv: 240,
          amt: 240,
        },
        {
          name: 'Page B',
          uv: 300,
          pv: 139,
          amt: 221,
        },
        {
          name: 'Page C',
          uv: 200,
          pv: 980,
          amt: 229,
        },
        {
          name: 'Page D',
          uv: 278,
          pv: 390,
          amt: 200,
        },
        {
          name: 'Page E',
          uv: 189,
          pv: 480,
          amt: 218,
        },
        {
          name: 'Page F',
          uv: 239,
          pv: 380,
          amt: 250,
        },
        {
          name: 'Page G',
          uv: 349,
          pv: 430,
          amt: 210,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>QUESTIONS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>12</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>STUDENTS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>10</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>5</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#00b497" />
                <Bar dataKey="uv" fill="#c4c7c5" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#00b497" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#c4c7c5" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default PanelHome
