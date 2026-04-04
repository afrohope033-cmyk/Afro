import { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import { auth } from './firebase';
import { signOut } from 'firebase/auth';
import { 
  LayoutDashboard, 
  BookOpen, 
  GraduationCap, 
  CreditCard, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Menu, 
  X, 
  User,
  Bell,
  Search
} from 'lucide-react';
import Logo from './components/Logo';
import AIAssistant from './components/AIAssistant';
import PaymentModal from './components/PaymentModal';
import { cn } from './lib/utils';

function Sidebar({ isOpen, setIsOpen }: { isOpen: boolean; setIsOpen: (v: boolean) => void }) {
  const location = useLocation();
  const { profile } = useAuth();
  const navigate = useNavigate();

  const menuItems = [
    { icon: LayoutDashboard, label: 'Overview', path: '/dashboard' },
    { icon: BookOpen, label: 'My Classes', path: '/dashboard/classes' },
    { icon: GraduationCap, label: 'Assessments', path: '/dashboard/assessments' },
    { icon: CreditCard, label: 'Payments', path: '/dashboard/payments' },
    { icon: MessageSquare, label: 'AI Assistant', path: '/dashboard/ai' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  const handleLogout = async () => {
    await signOut(auth);
    navigate('/');
  };

  return (
    <>
      <div 
        className={cn(
          "fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />
      <aside className={cn(
        "fixed top-0 left-0 bottom-0 w-64 bg-white border-r border-green-100 z-50 transition-transform md:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="p-6 flex items-center gap-3 border-b border-green-50">
          <Logo className="w-8 h-8 text-green-700" />
          <span className="font-bold text-green-900 tracking-tight">AFROHOPE</span>
        </div>

        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium",
                location.pathname === item.path 
                  ? "bg-green-700 text-white shadow-lg shadow-green-200" 
                  : "text-gray-600 hover:bg-green-50 hover:text-green-700"
              )}
            >
              <item.icon size={20} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-green-50">
          <div className="flex items-center gap-3 p-3 bg-green-50 rounded-xl mb-4">
            <div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold">
              {profile?.displayName?.[0] || profile?.email?.[0] || 'U'}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-bold text-green-900 truncate">{profile?.displayName || 'User'}</p>
              <p className="text-xs text-green-600 capitalize">{profile?.role || 'Student'}</p>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all font-medium"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

function Header({ setIsOpen }: { setIsOpen: (v: boolean) => void }) {
  return (
    <header className="h-16 bg-white border-b border-green-100 flex items-center justify-between px-6 sticky top-0 z-30">
      <button 
        onClick={() => setIsOpen(true)}
        className="md:hidden p-2 text-gray-600 hover:bg-green-50 rounded-lg"
      >
        <Menu size={24} />
      </button>

      <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 w-96">
        <Search size={18} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search classes, assessments..." 
          className="bg-transparent border-none outline-none text-sm w-full"
        />
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 text-gray-600 hover:bg-green-50 rounded-lg relative">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>
        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold text-xs">
          AH
        </div>
      </div>
    </header>
  );
}

function Overview() {
  const { profile } = useAuth();
  return (
    <div className="space-y-8">
      <div className="bg-green-900 rounded-3xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold">Welcome back, {profile?.displayName || 'Scholar'}! 👋</h1>
          <p className="text-green-200 mt-2 max-w-md">
            You have 3 upcoming assessments and 2 new class announcements. Keep up the great work!
          </p>
          <button className="mt-6 px-6 py-2 bg-white text-green-900 rounded-full font-bold hover:bg-green-50 transition-colors">
            View Schedule
          </button>
        </div>
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-green-800/50 skew-x-12 translate-x-1/2"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-4">
            <BookOpen size={24} />
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Active Classes</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">12</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
          <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-4">
            <GraduationCap size={24} />
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Completed Quizzes</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">45</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
          <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-4">
            <CreditCard size={24} />
          </div>
          <h3 className="text-gray-500 text-sm font-medium">Next Payment</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">Apr 15</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
          <h3 className="text-xl font-bold text-green-900 mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-700 shrink-0">
                  <BookOpen size={18} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">New material added in Biology 101</p>
                  <p className="text-xs text-gray-500 mt-1">2 hours ago • Instructor: Dr. Jallah</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm">
          <h3 className="text-xl font-bold text-green-900 mb-6">Upcoming Deadlines</h3>
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-600 shrink-0">
                    <GraduationCap size={18} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Math Quiz: Algebra II</p>
                    <p className="text-xs text-gray-500 mt-1">Due tomorrow at 11:59 PM</p>
                  </div>
                </div>
                <button className="text-sm font-bold text-green-700 hover:underline">Start</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Payments({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-900">Payments & Billing</h1>
        <button 
          onClick={onOpenModal}
          className="px-6 py-2 bg-green-700 text-white rounded-full font-bold hover:bg-green-800 transition-colors"
        >
          Make Payment
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm border-l-4 border-l-green-500">
          <h3 className="text-gray-500 text-sm font-medium">Current Balance</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">$45.00</p>
          <p className="text-xs text-green-600 mt-2">Due by April 15, 2026</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm border-l-4 border-l-blue-500">
          <h3 className="text-gray-500 text-sm font-medium">Total Paid</h3>
          <p className="text-3xl font-bold text-gray-900 mt-1">$1,250.00</p>
          <p className="text-xs text-blue-600 mt-2">Last payment: Mar 10, 2026</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-green-100 shadow-sm border-l-4 border-l-purple-500">
          <h3 className="text-gray-500 text-sm font-medium">Payment Method</h3>
          <div className="flex items-center gap-2 mt-2">
            <div className="px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-bold">MTN MOBILE MONEY</div>
            <p className="text-xs text-gray-500">Ending in 4567</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-green-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-green-50">
          <h3 className="font-bold text-green-900">Transaction History</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Transaction ID</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Method</th>
                <th className="px-6 py-4">Amount</th>
                <th className="px-6 py-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-green-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <tr key={i} className="hover:bg-green-50/30 transition-colors">
                  <td className="px-6 py-4 font-mono text-xs">TXN-98234-{i}</td>
                  <td className="px-6 py-4 text-sm">Mar {10 - i}, 2026</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-gray-100 rounded text-[10px] font-bold uppercase">MTN MoMo</span>
                  </td>
                  <td className="px-6 py-4 font-bold text-sm">$25.00</td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-green-100 text-green-700 rounded-full text-[10px] font-bold uppercase">Completed</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      
      <div className="flex-1 md:ml-64 flex flex-col min-h-screen">
        <Header setIsOpen={setIsSidebarOpen} />
        
        <main className="flex-1 p-6 md:p-8 max-w-7xl mx-auto w-full">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/payments" element={<Payments onOpenModal={() => setIsPaymentModalOpen(true)} />} />
            <Route path="/ai" element={<div className="h-[calc(100vh-12rem)]"><AIAssistant /></div>} />
            <Route path="*" element={<div className="flex items-center justify-center h-full text-gray-500">Coming Soon...</div>} />
          </Routes>
        </main>
      </div>

      <PaymentModal isOpen={isPaymentModalOpen} onClose={() => setIsPaymentModalOpen(false)} />
    </div>
  );
}
