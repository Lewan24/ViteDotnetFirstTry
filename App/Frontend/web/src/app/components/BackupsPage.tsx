import { Plus, Search, Download, Play, Clock, Database } from 'lucide-react';

export function BackupsPage() {
  const backups = [
    {
      id: 1,
      name: 'production-db-01',
      database: 'PostgreSQL',
      schedule: 'Daily at 2:00 AM',
      lastRun: '2 minutes ago',
      nextRun: 'Tomorrow at 2:00 AM',
      size: '45.2 GB',
      retention: '30 days',
      status: 'success',
    },
    {
      id: 2,
      name: 'staging-db-02',
      database: 'MySQL',
      schedule: 'Every 6 hours',
      lastRun: '15 minutes ago',
      nextRun: 'In 5 hours',
      size: '12.8 GB',
      retention: '7 days',
      status: 'success',
    },
    {
      id: 3,
      name: 'analytics-db',
      database: 'MongoDB',
      schedule: 'Daily at 3:00 AM',
      lastRun: '1 hour ago',
      nextRun: 'Tomorrow at 3:00 AM',
      size: '89.5 GB',
      retention: '90 days',
      status: 'success',
    },
    {
      id: 4,
      name: 'user-db-replica',
      database: 'PostgreSQL',
      schedule: 'Every 4 hours',
      lastRun: '2 hours ago',
      nextRun: 'In 2 hours',
      size: '34.1 GB',
      retention: '14 days',
      status: 'failed',
    },
    {
      id: 5,
      name: 'cache-db-01',
      database: 'Redis',
      schedule: 'Every 12 hours',
      lastRun: '3 hours ago',
      nextRun: 'In 9 hours',
      size: '5.2 GB',
      retention: '3 days',
      status: 'success',
    },
    {
      id: 6,
      name: 'warehouse-db',
      database: 'PostgreSQL',
      schedule: 'Weekly on Sunday',
      lastRun: '2 days ago',
      nextRun: 'In 5 days',
      size: '156.7 GB',
      retention: '180 days',
      status: 'success',
    },
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white mb-2">Backup Management</h1>
          <p className="text-gray-400">Create and manage database backups</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6b35] hover:bg-[#ff8c5f] text-white rounded-lg transition-colors">
          <Plus className="w-5 h-5" />
          New Backup
        </button>
      </div>

      <div className="mb-6 flex gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search backups..."
            className="w-full pl-10 pr-4 py-2 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ff6b35]"
          />
        </div>
        <select className="px-4 py-2 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]">
          <option>All Databases</option>
          <option>PostgreSQL</option>
          <option>MySQL</option>
          <option>MongoDB</option>
          <option>Redis</option>
        </select>
        <select className="px-4 py-2 bg-[#12121a] border border-[#1f1f2e] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b35]">
          <option>All Status</option>
          <option>Success</option>
          <option>Failed</option>
          <option>Running</option>
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {backups.map((backup) => (
          <div key={backup.id} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e] hover:border-[#ff6b35] transition-all">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#ff6b35]" />
                </div>
                <div>
                  <h3 className="text-white mb-1">{backup.name}</h3>
                  <p className="text-sm text-gray-400">{backup.database}</p>
                </div>
              </div>
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
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Schedule</span>
                <span className="text-white">{backup.schedule}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Last Run</span>
                <span className="text-white">{backup.lastRun}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Next Run</span>
                <span className="text-white">{backup.nextRun}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Size</span>
                <span className="text-white">{backup.size}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-400">Retention</span>
                <span className="text-white">{backup.retention}</span>
              </div>
            </div>

            <div className="flex gap-2 pt-4 border-t border-[#1f1f2e]">
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                <Play className="w-4 h-4" />
                Run Now
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                <Download className="w-4 h-4" />
                Download
              </button>
              <button className="flex items-center justify-center px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                <Clock className="w-4 h-4" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
