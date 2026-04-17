"use client"
import { ParsonContext } from '@/component/ParsonProvider';
import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = {
  Text: '#a855f7',   
  Call: '#1e3a2f',   
  Video: '#22c55e', 
};

const StatsPage = () => {
  const { stored } = useContext(ParsonContext);
  const typeCounts = stored.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(typeCounts).map(([name, value]) => ({ name, value }));

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Friendship Analytics</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <p className="text-sm text-gray-500 mb-4">By Interaction Type</p>

        {chartData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                innerRadius={80}
                outerRadius={120}
                paddingAngle={4}
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[entry.name] || '#94a3b8'} />
                ))}
              </Pie>
              <Tooltip formatter={(value, name) => [value, name]} />
              <Legend
                iconType="circle"
                iconSize={8}
                formatter={(value) => (
                  <span className="text-sm text-gray-600">{value}</span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <div className="text-center py-16 text-gray-400">No data available.</div>
        )}
      </div>
    </div>
  );
};

export default StatsPage;