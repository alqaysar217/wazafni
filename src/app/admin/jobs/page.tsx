
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Briefcase, 
  Search, 
  PlusCircle, 
  CheckCircle2, 
  XCircle, 
  Clock,
  Eye,
  Trash2
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function AdminJobsPage() {
  const jobs = [
    { id: 1, title: "مطور برمجيات أول", company: "يمن تيك", status: "published", date: "منذ يومين", apps: 24 },
    { id: 2, title: "محاسب مالي", company: "بنك الكريمي", status: "pending", date: "منذ ساعة", apps: 0 },
    { id: 3, title: "مدير مشاريع", company: "مجموعة هائل سعيد", status: "closed", date: "منذ أسبوع", apps: 45 },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-primary tracking-tighter">إدارة الوظائف</h1>
            <p className="text-lg text-muted-foreground font-medium">متابعة وتوثيق كافة الوظائف المنشورة في المنصة.</p>
          </div>
          <Button className="rounded-2xl h-14 px-8 bg-primary font-black gap-3 text-white">
            <PlusCircle size={20} /> إضافة وظيفة إدارية
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "منشورة", count: "1,240", color: "text-green-600", bg: "bg-green-50" },
            { label: "قيد المراجعة", count: "12", color: "text-orange-600", bg: "bg-orange-50" },
            { label: "مغلقة", count: "450", color: "text-red-600", bg: "bg-red-50" }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[35px] border border-primary/5 shadow-sm text-center space-y-2">
              <p className={`text-4xl font-black ${s.color}`}>{s.count}</p>
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-[40px] border border-primary/5 shadow-sm overflow-hidden">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                <th className="px-8 py-6">الوظيفة والشركة</th>
                <th className="px-8 py-6">الحالة</th>
                <th className="px-8 py-6">المتقدمين</th>
                <th className="px-8 py-6">التاريخ</th>
                <th className="px-8 py-6">إجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {jobs.map((j) => (
                <tr key={j.id} className="hover:bg-muted/5 transition-colors">
                  <td className="px-8 py-6">
                    <p className="font-black text-primary">{j.title}</p>
                    <p className="text-xs text-muted-foreground font-bold">{j.company}</p>
                  </td>
                  <td className="px-8 py-6">
                    <Badge className={cn(
                      "rounded-full px-4 py-1 font-black text-[10px] uppercase tracking-wider",
                      j.status === 'published' ? 'bg-green-500/10 text-green-600' : j.status === 'pending' ? 'bg-orange-500/10 text-orange-600' : 'bg-red-500/10 text-red-600'
                    )}>
                      {j.status === 'published' ? 'منشورة' : j.status === 'pending' ? 'قيد المراجعة' : 'مغلقة'}
                    </Badge>
                  </td>
                  <td className="px-8 py-6 font-bold text-primary">{j.apps}</td>
                  <td className="px-8 py-6 font-bold text-muted-foreground">{j.date}</td>
                  <td className="px-8 py-6">
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="text-secondary"><Eye size={18} /></Button>
                      <Button variant="ghost" size="icon" className="text-red-500"><Trash2 size={18} /></Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
