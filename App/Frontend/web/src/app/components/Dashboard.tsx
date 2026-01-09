import { Database, Server, ShieldCheck, Activity, CircleAlert, Clock } from 'lucide-react';
import React from 'react';
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function Dashboard() {
  const [statsTotalBackupsCount, setTotalBackupsCount] = React.useState<number | null>(null);

  React.useEffect(() => {
    fetch("/api/dashboard/getTotalBackupsCount")
    .then(r => r.json())
    .then(data => setTotalBackupsCount(data.count))
  }, [])

  const stats = [
    {
      label: 'Total Backups',
      value: statsTotalBackupsCount ?? '—',
      change: '+12%',
      trend: 'up',
      icon: Database,
      color: '#ff6b35',
    },
    {
      label: 'Active Servers',
      value: '24',
      change: '+2',
      trend: 'up',
      icon: Server,
      color: '#4ecdc4',
    },
    {
      label: 'Success Rate',
      value: '98.5%',
      change: '+1.2%',
      trend: 'up',
      icon: ShieldCheck,
      color: '#45b7d1',
    },
    {
      label: 'Failed Tests',
      value: '3',
      change: '-5',
      trend: 'down',
      icon: CircleAlert,
      color: '#f7b731',
    },
  ];

  const backupData = [
    { time: '00:00', backups: 45, size: 120 },
    { time: '04:00', backups: 52, size: 145 },
    { time: '08:00', backups: 78, size: 210 },
    { time: '12:00', backups: 65, size: 175 },
    { time: '16:00', backups: 89, size: 240 },
    { time: '20:00', backups: 72, size: 195 },
    { time: '24:00', backups: 68, size: 185 },
  ];

  const serverActivity = [
    { name: 'Mon', success: 240, failed: 5 },
    { name: 'Tue', success: 280, failed: 8 },
    { name: 'Wed', success: 260, failed: 3 },
    { name: 'Thu', success: 295, failed: 7 },
    { name: 'Fri', success: 310, failed: 4 },
    { name: 'Sat', success: 220, failed: 2 },
    { name: 'Sun', success: 200, failed: 1 },
  ];

  const recentBackups = [
    { name: 'production-db-01', status: 'success', time: '2 minutes ago', size: '45.2 GB', duration: '4m 23s' },
    { name: 'staging-db-02', status: 'success', time: '15 minutes ago', size: '12.8 GB', duration: '1m 45s' },
    { name: 'analytics-db', status: 'success', time: '1 hour ago', size: '89.5 GB', duration: '8m 12s' },
    { name: 'user-db-replica', status: 'failed', time: '2 hours ago', size: '0 GB', duration: '0m 34s' },
    { name: 'cache-db-01', status: 'success', time: '3 hours ago', size: '5.2 GB', duration: '45s' },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Monitor your database backups and server health</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${stat.color}20` }}>
                  <Icon className="w-6 h-6" style={{ color: stat.color }} />
                </div>
                <span className={`text-sm px-2 py-1 rounded ${stat.trend === 'up' ? 'text-green-400 bg-green-400/10' : 'text-red-400 bg-red-400/10'}`}>
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-gray-400 text-sm mb-1">{stat.label}</p>
                <p className="text-white text-3xl">{stat.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <h3 className="text-white mb-6">Backup Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={backupData}>
              <defs>
                <linearGradient id="colorBackups" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ff6b35" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#ff6b35" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f2e" />
              <XAxis dataKey="time" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#12121a', border: '1px solid #1f1f2e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Area type="monotone" dataKey="backups" stroke="#ff6b35" fillOpacity={1} fill="url(#colorBackups)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <h3 className="text-white mb-6">Server Activity</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={serverActivity}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1f1f2e" />
              <XAxis dataKey="name" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#12121a', border: '1px solid #1f1f2e', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Bar dataKey="success" fill="#4ecdc4" radius={[8, 8, 0, 0]} />
              <Bar dataKey="failed" fill="#f7b731" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-[#12121a] rounded-xl border border-[#1f1f2e] overflow-hidden">
        <div className="p-6 border-b border-[#1f1f2e]">
          <h3 className="text-white">Recent Backups</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#0f0f17]">
              <tr>
                <th className="text-left p-4 text-gray-400 text-sm">Database</th>
                <th className="text-left p-4 text-gray-400 text-sm">Status</th>
                <th className="text-left p-4 text-gray-400 text-sm">Time</th>
                <th className="text-left p-4 text-gray-400 text-sm">Size</th>
                <th className="text-left p-4 text-gray-400 text-sm">Duration</th>
              </tr>
            </thead>
            <tbody>
              {recentBackups.map((backup, index) => (
                <tr key={index} className="border-t border-[#1f1f2e] hover:bg-[#1a1a24] transition-colors">
                  <td className="p-4 text-white">{backup.name}</td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${
                      backup.status === 'success' 
                        ? 'bg-green-400/10 text-green-400' 
                        : 'bg-red-400/10 text-red-400'
                    }`}>
                      <span className={`w-2 h-2 rounded-full ${
                        backup.status === 'success' ? 'bg-green-400' : 'bg-red-400'
                      }`} />
                      {backup.status}
                    </span>
                  </td>
                  <td className="p-4 text-gray-400">{backup.time}</td>
                  <td className="p-4 text-white">{backup.size}</td>
                  <td className="p-4 text-gray-400">{backup.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
