import { 
  Database, 
  DatabaseBackup, 
  Server, 
  Terminal, 
  ShieldCheck, 
  Settings,
  House,
  ChevronRight
} from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
}

export function Sidebar({ activePage, onPageChange }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: House },
    { id: 'backups', label: 'Backups', icon: DatabaseBackup },
    { id: 'servers', label: 'Servers', icon: Server },
    { id: 'tunnels', label: 'Tunnels', icon: Terminal },
    { id: 'testing', label: 'Testing', icon: ShieldCheck },
    { id: 'admin', label: 'Admin', icon: Settings },
  ];

  return (
    <aside className="w-64 bg-[#0f0f17] border-r border-[#1f1f2e] flex flex-col">
      <div className="p-6 border-b border-[#1f1f2e]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#ff6b35] to-[#ff8c5f] flex items-center justify-center">
            <Database className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-white">BackupPro</h1>
            <p className="text-xs text-gray-400">Database Manager</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onPageChange(item.id)}
                  className={`w-full flex items-center justify-between gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#ff6b35] text-white'
                      : 'text-gray-400 hover:bg-[#1a1a24] hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </div>
                  {isActive && <ChevronRight className="w-4 h-4" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 border-t border-[#1f1f2e]">
        <div className="bg-[#1a1a24] rounded-lg p-4">
          <p className="text-sm text-gray-400">Storage Used</p>
          <div className="mt-2">
            <div className="flex items-end gap-1">
              <span className="text-2xl text-white">2.4</span>
              <span className="text-sm text-gray-400 mb-1">TB / 5 TB</span>
            </div>
            <div className="mt-2 h-2 bg-[#0f0f17] rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-[#ff6b35] to-[#ff8c5f] w-[48%]" />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
