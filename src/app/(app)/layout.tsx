import Navbar from '@/components/Navbar';

interface RootLayoutProps {
    children: React.ReactNode;
  }

export default function DashboardLayout({ children } : RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
       <Navbar/>
       {children}
    </div>
  )
}
