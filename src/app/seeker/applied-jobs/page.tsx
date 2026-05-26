'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  Briefcase, 
  Search,
  Clock,
  CheckCircle2,
  XCircle,
  ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function AppliedJobsPage() {
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
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <main className="space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 text-right">
            <div className="space-y-2">
              <h1 className="text-4xl font-black font-headline text-primary tracking-tighter">طلبات التوظيف</h1>
              <p className="text-lg text-muted-foreground font-medium">سجل تتبع كافة الوظائف التي قمت بالتقديم عليها.</p>
            </div>
            <Button asChild size="lg" className="rounded-2xl px-10 bg-primary font-black shadow-xl shadow-primary/10 h-14 transition-transform hover:translate-y-[-2px]">
              <Link href="/jobs" className="gap-3">ابحث عن وظيفة جديدة <Search size={20} /></Link>
            </Button>
          </div>

          <div className="bg-white rounded-[40px] border border-primary/5 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-right">
                <thead>
                  <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                    <th className="px-10 py-6">المسمى الوظيفي</th>
                    <th className="px-10 py-6">المنشأة</th>
                    <th className="px-10 py-6">تاريخ التقديم</th>
                    <th className="px-10 py-6">حالة الطلب</th>
                    <th className="px-10 py-6 text-left">التفاصيل</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {applications.map((app) => (
                    <tr key={app.id} className="hover:bg-muted/5 transition-colors">
                      <td className="px-10 py-8 font-bold text-xl text-primary">{app.title}</td>
                      <td className="px-10 py-8 font-black text-muted-foreground">{app.company}</td>
                      <td className="px-10 py-8 font-bold text-muted-foreground/60">{app.appliedDate}</td>
                      <td className="px-10 py-8">
                        <Badge className={`rounded-full px-5 py-2 border-none font-black text-[10px] uppercase tracking-wider ${app.statusColor}`}>
                          <span className="flex items-center gap-2">{app.icon} {app.status}</span>
                        </Badge>
                      </td>
                      <td className="px-10 py-8 text-left">
                        <Button variant="ghost" className="text-primary font-black hover:bg-primary/5 rounded-xl group h-12">
                          عرض <ChevronRight size={18} className="rtl:rotate-180 group-hover:translate-x-[-4px] transition-transform mr-2" />
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
