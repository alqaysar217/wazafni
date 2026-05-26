
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
  Trash2,
  Filter,
  Building2,
  MapPin,
  TrendingUp,
  Sparkles
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function AdminJobsPage() {
  const jobs = [
    { id: 1, title: "مطور برمجيات أول", company: "يمن تيك للحلول", status: "published", date: "منذ يومين", apps: 24, type: "Full-time", salary: "$1200-$1800" },
    { id: 2, title: "محاسب مالي معتمد", company: "بنك الكريمي الإسلامي", status: "pending", date: "منذ ساعة", apps: 0, type: "Full-time", salary: "$800-$1100" },
    { id: 3, title: "مدير مشاريع إنشائية", company: "مجموعة هائل سعيد", status: "closed", date: "منذ أسبوع", apps: 45, type: "Contract", salary: "$2500-$3500" },
    { id: 4, title: "أخصائي تسويق رقمي", company: "تليمن للاتصالات", status: "published", date: "منذ 3 ساعات", apps: 12, type: "Remote", salary: "$600-$900" },
    { id: 5, title: "مصمم تجربة مستخدم UI/UX", company: "أنا مبرمج للتقنية", status: "published", date: "منذ 5 أيام", apps: 31, type: "Part-time", salary: "$700-$1000" },
    { id: 6, title: "مهندس شبكات وأمن", company: "يمن موبايل", status: "pending", date: "منذ ساعة", apps: 0, type: "Full-time", salary: "$1500-$2200" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 text-right">
            <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">إدارة الوظائف</h1>
            <p className="text-lg text-muted-foreground font-medium">متابعة، توثيق، وتحليل كافة الوظائف المنشورة في المنصة.</p>
          </div>
          <Button className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
            <PlusCircle size={20} /> إضافة وظيفة إدارية
          </Button>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: "إجمالي الوظائف", val: "1,240", color: "text-blue-600", bg: "bg-blue-50" },
            { label: "منشورة الآن", val: "840", color: "text-green-600", bg: "bg-green-50" },
            { label: "قيد المراجعة", val: "12", color: "text-orange-600", bg: "bg-orange-50" },
            { label: "وظائف مغلقة", val: "388", color: "text-red-600", bg: "bg-red-50" }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm text-center space-y-3 hover:shadow-md transition-shadow">
              <p className={cn("text-4xl font-black", s.color)}>{s.val}</p>
              <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="bg-white p-6 rounded-[35px] shadow-sm border border-primary/5 flex flex-wrap items-center gap-6">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute right-5 top-5 text-muted-foreground" size={20} />
            <Input placeholder="بحث بالمسمى الوظيفي أو الشركة..." className="h-16 rounded-2xl pr-14 bg-muted/10 border-none font-bold text-lg focus-visible:ring-primary/10" />
          </div>
          <Button variant="outline" className="h-16 rounded-2xl border-primary/10 font-bold gap-3 px-8 text-primary shadow-sm bg-white">
            <Filter size={18} /> تصفية متقدمة
          </Button>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-[50px] border border-primary/5 shadow-sm overflow-hidden border border-primary/5">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <th className="px-10 py-8">الوظيفة والشركة</th>
                  <th className="px-10 py-8">النوع والراتب</th>
                  <th className="px-10 py-8">الحالة</th>
                  <th className="px-10 py-8">المتقدمين</th>
                  <th className="px-10 py-8">التاريخ</th>
                  <th className="px-10 py-8">إجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {jobs.map((j) => (
                  <tr key={j.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform shadow-inner shrink-0">
                          <Briefcase size={24} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-xl text-primary leading-tight mb-1 truncate">{j.title}</p>
                          <p className="text-xs text-muted-foreground font-bold flex items-center gap-2">
                            <Building2 size={12} className="text-primary/20" /> {j.company}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <div className="space-y-1">
                        <p className="text-sm font-black text-primary/80">{j.type}</p>
                        <p className="text-[10px] font-black text-green-600 uppercase tracking-wider">{j.salary}</p>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <Badge className={cn(
                        "rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-wider border-none",
                        j.status === 'published' ? 'bg-green-500/10 text-green-600' : 
                        j.status === 'pending' ? 'bg-orange-500/10 text-orange-600' : 
                        'bg-red-500/10 text-red-600'
                      )}>
                        {j.status === 'published' ? 'منشورة' : j.status === 'pending' ? 'قيد المراجعة' : 'مغلقة'}
                      </Badge>
                    </td>
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-2xl text-primary">{j.apps}</span>
                        <span className="text-[10px] font-black text-muted-foreground uppercase">متقدم</span>
                      </div>
                    </td>
                    <td className="px-10 py-10 font-bold text-muted-foreground/60">{j.date}</td>
                    <td className="px-10 py-10">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-secondary hover:bg-secondary/5"><Eye size={20} /></Button>
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-red-500 hover:bg-red-50"><Trash2 size={20} /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
