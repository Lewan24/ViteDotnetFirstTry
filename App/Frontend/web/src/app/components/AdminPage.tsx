import { Users, Settings, ShieldCheck, Activity, Clock, Database } from 'lucide-react';

export function AdminPage() {
  const users = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john.doe@company.com',
      role: 'Admin',
      status: 'active',
      lastLogin: '2 hours ago',
      permissions: ['All Access'],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane.smith@company.com',
      role: 'Operator',
      status: 'active',
      lastLogin: '5 minutes ago',
      permissions: ['View Backups', 'Run Backups', 'View Servers'],
    },
    {
      id: 3,
      name: 'Mike Johnson',
      email: 'mike.johnson@company.com',
      role: 'Viewer',
      status: 'active',
      lastLogin: '1 day ago',
      permissions: ['View Backups', 'View Servers'],
    },
    {
      id: 4,
      name: 'Sarah Williams',
      email: 'sarah.williams@company.com',
      role: 'Operator',
      status: 'inactive',
      lastLogin: '2 weeks ago',
      permissions: ['View Backups', 'Run Tests'],
    },
  ];

  const systemLogs = [
    { time: '14:23:45', level: 'INFO', user: 'john.doe@company.com', action: 'Created new backup job: production-db-01' },
    { time: '14:22:12', level: 'INFO', user: 'jane.smith@company.com', action: 'Started manual backup for staging-db-02' },
    { time: '14:20:58', level: 'WARNING', user: 'system', action: 'Redis Tunnel connection failed - retry attempt 3/5' },
    { time: '14:18:34', level: 'INFO', user: 'mike.johnson@company.com', action: 'Viewed backup history for analytics-db' },
    { time: '13:45:22', level: 'ERROR', user: 'system', action: 'Backup encryption test failed for prod-db-20260103' },
    { time: '13:30:15', level: 'INFO', user: 'john.doe@company.com', action: 'Updated server connection: Production Server 01' },
  ];

  const systemMetrics = [
    { label: 'Total Users', value: '4', icon: Users, color: '#ff6b35' },
    { label: 'Active Sessions', value: '3', icon: Activity, color: '#4ecdc4' },
    { label: 'Total Backups', value: '1,248', icon: Database, color: '#45b7d1' },
    { label: 'System Uptime', value: '45d 12h', icon: Clock, color: '#f7b731' },
  ];

  const settings = [
    {
      category: 'Backup Settings',
      items: [
        { name: 'Default Retention Period', value: '30 days' },
        { name: 'Compression Level', value: 'High' },
        { name: 'Encryption Method', value: 'AES-256' },
        { name: 'Auto-cleanup', value: 'Enabled' },
      ],
    },
    {
      category: 'Notification Settings',
      items: [
        { name: 'Email Notifications', value: 'Enabled' },
        { name: 'Slack Integration', value: 'Enabled' },
        { name: 'Alert Threshold', value: 'Critical Only' },
        { name: 'Daily Reports', value: 'Enabled' },
      ],
    },
    {
      category: 'Security Settings',
      items: [
        { name: '2FA Enforcement', value: 'Required' },
        { name: 'Session Timeout', value: '4 hours' },
        { name: 'Password Policy', value: 'Strong' },
        { name: 'IP Whitelist', value: 'Enabled' },
      ],
    },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'Admin':
        return 'bg-[#ff6b35]/10 text-[#ff6b35]';
      case 'Operator':
        return 'bg-blue-400/10 text-blue-400';
      case 'Viewer':
        return 'bg-gray-400/10 text-gray-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  const getLogLevelColor = (level: string) => {
    switch (level) {
      case 'INFO':
        return 'text-green-400';
      case 'WARNING':
        return 'text-yellow-400';
      case 'ERROR':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-white mb-2">Admin Panel</h1>
        <p className="text-gray-400">Manage users, settings, and system configuration</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {systemMetrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.label} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${metric.color}20` }}>
                  <Icon className="w-6 h-6" style={{ color: metric.color }} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">{metric.label}</p>
                  <p className="text-white text-2xl">{metric.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-[#12121a] rounded-xl border border-[#1f1f2e]">
          <div className="p-6 border-b border-[#1f1f2e] flex items-center justify-between">
            <h3 className="text-white">User Management</h3>
            <button className="px-3 py-1.5 bg-[#ff6b35] hover:bg-[#ff8c5f] text-white rounded-lg transition-colors text-sm">
              Add User
            </button>
          </div>
          <div className="p-6 space-y-4">
            {users.map((user) => (
              <div key={user.id} className="p-4 bg-[#0f0f17] rounded-lg border border-[#1f1f2e] hover:border-[#ff6b35] transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h4 className="text-white">{user.name}</h4>
                    <p className="text-sm text-gray-400">{user.email}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded text-xs ${getRoleColor(user.role)}`}>
                      {user.role}
                    </span>
                    <span className={`w-2 h-2 rounded-full ${user.status === 'active' ? 'bg-green-400' : 'bg-gray-400'}`} />
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Last login: {user.lastLogin}</span>
                  <button className="text-[#ff6b35] hover:text-[#ff8c5f] transition-colors">
                    Manage
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl border border-[#1f1f2e]">
          <div className="p-6 border-b border-[#1f1f2e]">
            <h3 className="text-white">System Settings</h3>
          </div>
          <div className="p-6 space-y-6">
            {settings.map((section, index) => (
              <div key={index}>
                <h4 className="text-white mb-3">{section.category}</h4>
                <div className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-center justify-between py-2 border-b border-[#1f1f2e] last:border-0">
                      <span className="text-sm text-gray-400">{item.name}</span>
                      <span className="text-sm text-white">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 border-t border-[#1f1f2e]">
            <button className="w-full px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
              Configure Settings
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#12121a] rounded-xl border border-[#1f1f2e]">
        <div className="p-6 border-b border-[#1f1f2e] flex items-center justify-between">
          <h3 className="text-white">System Activity Logs</h3>
          <button className="px-3 py-1.5 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors text-sm">
            Export Logs
          </button>
        </div>
        <div className="p-6">
          <div className="space-y-3 font-mono text-sm">
            {systemLogs.map((log, index) => (
              <div key={index} className="flex gap-3 items-start">
                <span className="text-gray-500 whitespace-nowrap">[{log.time}]</span>
                <span className={`${getLogLevelColor(log.level)} min-w-[70px]`}>{log.level}</span>
                <div className="flex-1">
                  <span className="text-gray-400">{log.user}</span>
                  <span className="text-gray-500"> - </span>
                  <span className="text-white">{log.action}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
