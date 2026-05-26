
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Bell, 
  Settings, 
  BrainCircuit,
  Search,
  Clock,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function AppliedJobsPage() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={20} />, href: "/seeker/dashboard" },
    { label: "وظائفي", icon: <Briefcase size={20} />, active: true, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={20} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={20} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={20} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={20} />, href: "/seeker/settings" }
  ];

  const applications = [
    {
      id: 1,
      title: "مطور برمجيات أول",
      company: "يمن تيك",
      appliedDate: "12 أكتوبر 2023",
      status: "مقابلة",
      statusColor: "text-blue-600 bg-blue-50",
      icon: <Clock size={16} />
    },
    {
      id: 2,
      title: "أخصائي تسويق",
      company: "مجموعة هائل سعيد",
      appliedDate: "05 أكتوبر 2023",
      status: "مقبول",
      statusColor: "text-green-600 bg-green-50",
      icon: <CheckCircle2 size={16} />
    },
    {
      id: 3,
      title: "محاسب قانوني",
      company: "بنك الكريمي",
      appliedDate: "28 سبتمبر 2023",
      status: "مرفوض",
      statusColor: "text-red-600 bg-red-50",
      icon: <XCircle size={16} />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7FA] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-8 gap-8">
        {/* Dashboard Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          <div className="premium-card bg-white p-6 space-y-8 h-fit shadow-sm rounded-[30px] border">
            <nav className="space-y-2">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${item.active ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:bg-muted'}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black font-headline text-primary">وظائفي المتقدم لها</h1>
              <p className="text-muted-foreground">تابع حالة طلبات التوظيف الخاصة بك هنا.</p>
            </div>
            <Button asChild className="rounded-xl px-8 bg-primary">
              <Link href="/jobs">ابحث عن وظيفة جديدة <Search size={18} className="mr-2" /></Link>
            </Button>
          </div>

          <div className="bg-white rounded-[35px] border shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-muted/30 border-b">
                    <th className="px-8 py-6 font-black text-primary">الوظيفة</th>
                    <th className="px-8 py-6 font-black text-primary">الشركة</th>
                    <th className="px-8 py-6 font-black text-primary">تاريخ التقديم</th>
                    <th className="px-8 py-6 font-black text-primary">الحالة</th>
                    <th className="px-8 py-6 font-black text-primary text-left">الإجراء</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-muted/10 transition-colors">
                      <td className="px-8 py-6 font-bold text-primary">{app.title}</td>
                      <td className="px-8 py-6 font-medium text-muted-foreground">{app.company}</td>
                      <td className="px-8 py-6 font-medium text-muted-foreground">{app.appliedDate}</td>
                      <td className="px-8 py-6">
                        <Badge className={`rounded-full px-4 py-1 border-none font-bold ${app.statusColor}`}>
                          <span className="flex items-center gap-2">{app.icon} {app.status}</span>
                        </Badge>
                      </td>
                      <td className="px-8 py-6 text-left">
                        <Button variant="ghost" className="text-primary font-bold hover:bg-primary/5 rounded-lg group">
                          التفاصيل <ChevronRight size={14} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
