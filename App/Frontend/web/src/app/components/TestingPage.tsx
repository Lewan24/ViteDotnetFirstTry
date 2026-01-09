import { Play, Clock, ShieldCheck, CircleAlert, Check } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export function TestingPage() {
  const tests = [
    {
      id: 1,
      name: 'Production DB Integrity',
      type: 'Data Integrity',
      schedule: 'Every 6 hours',
      lastRun: '2 hours ago',
      duration: '45s',
      status: 'passed',
      issues: 0,
    },
    {
      id: 2,
      name: 'Backup Restoration Test',
      type: 'Restoration',
      schedule: 'Daily at 4:00 AM',
      lastRun: '8 hours ago',
      duration: '3m 12s',
      status: 'passed',
      issues: 0,
    },
    {
      id: 3,
      name: 'Connection Pool Test',
      type: 'Performance',
      schedule: 'Every hour',
      lastRun: '15 minutes ago',
      duration: '23s',
      status: 'passed',
      issues: 0,
    },
    {
      id: 4,
      name: 'Replication Lag Check',
      type: 'Monitoring',
      schedule: 'Every 30 minutes',
      lastRun: '5 minutes ago',
      duration: '12s',
      status: 'warning',
      issues: 2,
    },
    {
      id: 5,
      name: 'Schema Validation',
      type: 'Data Integrity',
      schedule: 'Daily at 2:00 AM',
      lastRun: '12 hours ago',
      duration: '1m 34s',
      status: 'passed',
      issues: 0,
    },
    {
      id: 6,
      name: 'Backup Encryption Test',
      type: 'Security',
      schedule: 'Weekly on Monday',
      lastRun: '2 days ago',
      duration: '2m 45s',
      status: 'failed',
      issues: 5,
    },
  ];

  const testHistory = [
    { date: 'Mon', passed: 45, failed: 2, warnings: 3 },
    { date: 'Tue', passed: 48, failed: 1, warnings: 2 },
    { date: 'Wed', passed: 52, failed: 0, warnings: 4 },
    { date: 'Thu', passed: 46, failed: 3, warnings: 1 },
    { date: 'Fri', passed: 50, failed: 1, warnings: 2 },
    { date: 'Sat', passed: 43, failed: 0, warnings: 1 },
    { date: 'Sun', passed: 41, failed: 2, warnings: 3 },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'passed':
        return 'bg-green-400/10 text-green-400';
      case 'warning':
        return 'bg-yellow-400/10 text-yellow-400';
      case 'failed':
        return 'bg-red-400/10 text-red-400';
      default:
        return 'bg-gray-400/10 text-gray-400';
    }
  };

  const getStatusDot = (status: string) => {
    switch (status) {
      case 'passed':
        return 'bg-green-400';
      case 'warning':
        return 'bg-yellow-400';
      case 'failed':
        return 'bg-red-400';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-white mb-2">Automatic Testing</h1>
          <p className="text-gray-400">Monitor backup integrity and database health</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-[#ff6b35] hover:bg-[#ff8c5f] text-white rounded-lg transition-colors">
          <Play className="w-5 h-5" />
          Run All Tests
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-green-400/10 flex items-center justify-center">
              <Check className="w-6 h-6 text-green-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Passed</p>
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
            <div className="w-12 h-12 rounded-lg bg-red-400/10 flex items-center justify-center">
              <CircleAlert className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Failed</p>
              <p className="text-white text-2xl">1</p>
            </div>
          </div>
        </div>

        <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e]">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-[#ff6b35]" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">Success Rate</p>
              <p className="text-white text-2xl">83%</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e] mb-8">
        <h3 className="text-white mb-6">Test History (Last 7 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={testHistory}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1f1f2e" />
            <XAxis dataKey="date" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#12121a', border: '1px solid #1f1f2e', borderRadius: '8px' }}
              labelStyle={{ color: '#fff' }}
            />
            <Line type="monotone" dataKey="passed" stroke="#4ecdc4" strokeWidth={2} />
            <Line type="monotone" dataKey="failed" stroke="#f7b731" strokeWidth={2} />
            <Line type="monotone" dataKey="warnings" stroke="#ff6b35" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="space-y-4">
        {tests.map((test) => (
          <div key={test.id} className="bg-[#12121a] rounded-xl p-6 border border-[#1f1f2e] hover:border-[#ff6b35] transition-all">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-lg bg-[#ff6b35]/10 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#ff6b35]" />
                </div>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-6 gap-4">
                  <div className="md:col-span-2">
                    <h3 className="text-white mb-1">{test.name}</h3>
                    <p className="text-sm text-gray-400">{test.type}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Schedule</p>
                    <p className="text-white text-sm">{test.schedule}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Last Run</p>
                    <p className="text-white">{test.lastRun}</p>
                    <p className="text-xs text-gray-400">Duration: {test.duration}</p>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Status</p>
                    <span className={`inline-flex items-center gap-2 px-2 py-1 rounded-full text-sm ${getStatusColor(test.status)}`}>
                      <span className={`w-2 h-2 rounded-full ${getStatusDot(test.status)}`} />
                      {test.status}
                    </span>
                  </div>

                  <div>
                    <p className="text-xs text-gray-400 mb-1">Issues Found</p>
                    <p className={`text-xl ${test.issues > 0 ? 'text-red-400' : 'text-green-400'}`}>
                      {test.issues}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-2 ml-4">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                  <Play className="w-4 h-4" />
                  Run
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1a24] hover:bg-[#1f1f2e] text-white rounded-lg transition-colors">
                  <Clock className="w-4 h-4" />
                  History
                </button>
              </div>
            </div>

            {test.issues > 0 && (
              <div className="mt-4 pt-4 border-t border-[#1f1f2e]">
                <p className="text-sm text-gray-400 mb-2">Recent Issues:</p>
                <div className="space-y-2">
                  {test.status === 'warning' && (
                    <>
                      <div className="flex items-start gap-2 text-sm">
                        <CircleAlert className="w-4 h-4 text-yellow-400 mt-0.5" />
                        <span className="text-gray-400">Replication lag detected on replica-01: 2.3s</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CircleAlert className="w-4 h-4 text-yellow-400 mt-0.5" />
                        <span className="text-gray-400">Replication lag detected on replica-02: 1.8s</span>
                      </div>
                    </>
                  )}
                  {test.status === 'failed' && (
                    <>
                      <div className="flex items-start gap-2 text-sm">
                        <CircleAlert className="w-4 h-4 text-red-400 mt-0.5" />
                        <span className="text-gray-400">Encryption verification failed for backup: prod-db-20260103</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CircleAlert className="w-4 h-4 text-red-400 mt-0.5" />
                        <span className="text-gray-400">Missing encryption key in vault</span>
                      </div>
                      <div className="flex items-start gap-2 text-sm">
                        <CircleAlert className="w-4 h-4 text-red-400 mt-0.5" />
                        <span className="text-gray-400">Checksum mismatch detected</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
