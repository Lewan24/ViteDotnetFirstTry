import { Plus, Server, Activity, CircleAlert } from 'lucide-react';

export function ServersPage() {
  const servers = [
    {
      id: 1,
      name: 'Production Server 01',
      host: '192.168.1.100',
      port: 5432,
      type: 'PostgreSQL',
      status: 'online',
      uptime: '45 days',
      connections: 234,
      cpu: 45,
      memory: 68,
      lastBackup: '2 minutes ago',
    },
    {
      id: 2,
      name: 'Staging Server',
      host: '192.168.1.101',
      port: 3306,
      type: 'MySQL',
      status: 'online',
      uptime: '12 days',
      connections: 89,
      cpu: 23,
      memory: 42,
      lastBackup: '15 minutes ago',
    },
    {
      id: 3,
      name: 'Analytics Cluster',
      host: '192.168.1.102',
      port: 27017,
      type: 'MongoDB',
      status: 'online',
      uptime: '89 days',
      connections: 567,
      cpu: 78,
      memory: 85,
      lastBackup: '1 hour ago',
    },
    {
      id: 4,
      name: 'Cache Server',
      host: '192.168.1.103',
      port: 6379,
      type: 'Redis',
      status: 'warning',
      uptime: '23 days',
      connections: 1234,
      cpu: 91,
      memory: 95,
      lastBackup: '2 hours ago',
    },
    {
      id: 5,
      name: 'Dev Database',
      host: '192.168.1.104',
      port: 5432,
      type: 'PostgreSQL',
      status: 'online',
      uptime: '7 days',
      connections: 45,
      cpu: 12,
      memory: 28,
      lastBackup: '3 hours ago',
    },
    {
      id: 6,
      name: 'Replica Server 01',
      host: '192.168.1.105',
      port: 5432,
      type: 'PostgreSQL',
      status: 'offline',
      uptime: '0 days',
      connections: 0,
      cpu: 0,
      memory: 0,
      lastBackup: 'Never',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-400/10 text-green-400';
      case 'warning':
        return 'bg-yellow-400/10 text-yellow-400';
      case 'offline':
        return 'bg-red-400/10 text-red-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'online':
        return 'bg-green-400';
      case 'warning':
        return 'bg-yellow-400';
      case 'offline':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getMetricColor = (value: number) => {
    if (value >= 90) return 'text-red-400';
    if (value >= 70) return 'text-yellow-400';
    return 'text-green-400';
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white mb-2">Server Connections</h1>
          <p className="text-gray-400">Manage your database server connections</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6b35] hover:bg-[#ff8c5f] text-white rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          Add Server
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center">
              <Server className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Online Servers</p>
              <p className="text-white text-2xl">4</p>
            </div>
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-yellow-400/10 flex items-center justify-center">
              <CircleAlert className="w-6 h-6 text-yellow-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Warnings</p>
              <p className="text-white text-2xl">1</p>
            </div>
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-[#ff6b35]" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Connections</p>
              <p className="text-white text-2xl">2,169</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {servers.map((server) => (
          <div key={server.id} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e] hover:border-[#ff6b35] transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
                  <Server className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">{server.name}</h3>
                  <p className="text-sm text-gray-400">{server.type}</p>
                </div>
              </div>
              <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm ${getStatusColor(server.status)}`}>
                <span className={`w-2 h-2 rounded-full ${getStatusDot(server.status)}`} />
                {server.status}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Host</span>
                <span className="text-white">{server.host}:{server.port}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Uptime</span>
                <span className="text-white">{server.uptime}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Connections</span>
                <span className="text-white">{server.connections}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Last Backup</span>
                <span className="text-white">{server.lastBackup}</span>
              </div>
            </div>

            <div className="space-y-3 pt-4 border-t border-[#1f1f2e]">
              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">CPU Usage</span>
                  <span className={getMetricColor(server.cpu)}>{server.cpu}%</span>
                </div>
                <div className="h-2 bg-[#0f0f17] rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      server.cpu >= 90 ? 'bg-red-400' : 
                      server.cpu >= 70 ? 'bg-yellow-400' : 
                      'bg-green-400'
                    }`}
                    style={{ width: `${server.cpu}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between text-sm mb-2">
                  <span className="text-gray-400">Memory Usage</span>
                  <span className={getMetricColor(server.memory)}>{server.memory}%</span>
                </div>
                <div className="h-2 bg-[#0f0f17] rounded-full overflow-hidden">
                  <div 
                    className={`h-full rounded-full ${
                      server.memory >= 90 ? 'bg-red-400' : 
                      server.memory >= 70 ? 'bg-yellow-400' : 
                      'bg-green-400'
                    }`}
                    style={{ width: `${server.memory}%` }}
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-4">
              <button className="flex-1 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                Test Connection
              </button>
              <button className="flex-1 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                View Logs
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
