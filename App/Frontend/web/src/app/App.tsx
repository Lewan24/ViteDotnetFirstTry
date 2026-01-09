import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { BackupsPage } from './components/BackupsPage';
import { ServersPage } from './components/ServersPage';
import { TunnelsPage } from './components/TunnelsPage';
import { TestingPage } from './components/TestingPage';
import { AdminPage } from './components/AdminPage';

export default function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const renderPage = () => {
    switch (activePage) {
      case 'dashboard':
        return <Dashboard />;
      case 'backups':
        return <BackupsPage />;
      case 'servers':
        return <ServersPage />;
      case 'tunnels':
        return <TunnelsPage />;
      case 'testing':
        return <TestingPage />;
      case 'admin':
        return <AdminPage />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground flex">
      <Sidebar activePage={activePage} onPageChange={setActivePage} />
      <main className="flex-1 overflow-auto">
        {renderPage()}
      </main>
    </div>
  );
}
