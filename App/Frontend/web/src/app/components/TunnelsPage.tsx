import { Plus, Terminal, Activity, Play, Clock } from 'lucide-react';

export function TunnelsPage() {
  const tunnels = [
    {
      id: 1,
      name: 'Production SSH Tunnel',
      type: 'SSH',
      source: 'localhost:5433',
      destination: '192.168.1.100:5432',
      status: 'active',
      uptime: '45 days 12h',
      dataTransferred: '45.2 GB',
      lastActivity: '2 seconds ago',
      autoReconnect: true,
    },
    {
      id: 2,
      name: 'Staging Tunnel',
      type: 'SSH',
      source: 'localhost:3307',
      destination: '192.168.1.101:3306',
      status: 'active',
      uptime: '12 days 8h',
      dataTransferred: '12.8 GB',
      lastActivity: '5 seconds ago',
      autoReconnect: true,
    },
    {
      id: 3,
      name: 'Analytics VPN',
      type: 'VPN',
      source: '10.0.0.1',
      destination: '192.168.1.102:27017',
      status: 'active',
      uptime: '89 days 3h',
      dataTransferred: '234.5 GB',
      lastActivity: '1 second ago',
      autoReconnect: true,
    },
    {
      id: 4,
      name: 'Dev Database Tunnel',
      type: 'SSH',
      source: 'localhost:5434',
      destination: '192.168.1.104:5432',
      status: 'inactive',
      uptime: '0h',
      dataTransferred: '0 GB',
      lastActivity: '2 hours ago',
      autoReconnect: false,
    },
    {
      id: 5,
      name: 'Redis Tunnel',
      type: 'SSH',
      source: 'localhost:6380',
      destination: '192.168.1.103:6379',
      status: 'error',
      uptime: '0h',
      dataTransferred: '5.2 GB',
      lastActivity: '10 minutes ago',
      autoReconnect: true,
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-400/10 text-green-400';
      case 'inactive':
        return 'bg-gray-400/10 text-gray-400';
      case 'error':
        return 'bg-red-400/10 text-red-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-400';
      case 'inactive':
        return 'bg-gray-400';
      case 'error':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white mb-2">Server Tunnels</h1>
          <p className="text-gray-400">Manage SSH tunnels and VPN connections</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6b35] hover:bg-[#ff8c5f] text-white rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          New Tunnel
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center">
              <Activity className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Active Tunnels</p>
              <p className="text-white text-2xl">3</p>
            </div>
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
              <Terminal className="w-6 h-6 text-[#ff6b35]" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Total Data</p>
              <p className="text-white text-2xl">297.7 GB</p>
            </div>
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-red-400/10 flex items-center justify-center">
              <Clock className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Errors</p>
              <p className="text-white text-2xl">1</p>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {tunnels.map((tunnel) => (
          <div key={tunnel.id} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e] hover:border-[#ff6b35] transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
                  <Terminal className="w-6 h-6 text-[#ff6b35]" />
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div>
                    <h3 className="text-white mb-1">{tunnel.name}</h3>
                    <span className={`inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs ${getStatusColor(tunnel.status)}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${getStatusDot(tunnel.status)}`} />
                      {tunnel.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Type</p>
                    <p className="text-white">{tunnel.type}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Source → Destination</p>
                    <p className="text-sm text-white">{tunnel.source}</p>
                    <p className="text-sm text-gray-400">→ {tunnel.destination}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Uptime</p>
                    <p className="text-white">{tunnel.uptime}</p>
                    <p className="text-xs text-gray-400 mt-1">Data: {tunnel.dataTransferred}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Last Activity</p>
                    <p className="text-white">{tunnel.lastActivity}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Auto-reconnect: {tunnel.autoReconnect ? 'On' : 'Off'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                {tunnel.status === 'active' ? (
                  <button className="px-4 py-2 bg-red-400/10 hover:bg-red-400/20 text-red-400 rounded-lg transition-colors">
                    Stop
                  </button>
                ) : (
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-400/10 hover:bg-green-400/20 text-green-400 rounded-lg transition-colors">
                    <Play className="w-4 h-4" />
                    Start
                  </button>
                )}
                <button className="px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                  Configure
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
        <h3 className="text-white mb-4">Connection Logs</h3>
        <div className="space-y-2 font-mono text-sm">
          <div className="flex gap-3 text-gray-400">
            <span className="text-gray-500">[2026-01-03 14:23:45]</span>
            <span className="text-green-400">INFO</span>
            <span>Production SSH Tunnel: Connection established</span>
          </div>
          <div className="flex gap-3 text-gray-400">
            <span className="text-gray-500">[2026-01-03 14:23:12]</span>
            <span className="text-green-400">INFO</span>
            <span>Staging Tunnel: Connection established</span>
          </div>
          <div className="flex gap-3 text-gray-400">
            <span className="text-gray-500">[2026-01-03 14:22:58]</span>
            <span className="text-red-400">ERROR</span>
            <span>Redis Tunnel: Connection failed - Authentication error</span>
          </div>
          <div className="flex gap-3 text-gray-400">
            <span className="text-gray-500">[2026-01-03 14:22:45]</span>
            <span className="text-green-400">INFO</span>
            <span>Analytics VPN: Connection established</span>
          </div>
          <div className="flex gap-3 text-gray-400">
            <span className="text-gray-500">[2026-01-03 12:15:32]</span>
            <span className="text-yellow-400">WARN</span>
            <span>Dev Database Tunnel: Connection closed by user</span>
          </div>
        </div>
      </div>
    </div>
  );
}
