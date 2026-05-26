
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Building2, 
  ShieldCheck, 
  ShieldAlert, 
  Search, 
  CheckCircle2, 
  XCircle, 
  ExternalLink,
  MapPin,
  Briefcase,
  Users,
  MoreVertical,
  Filter,
  Clock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function AdminCompaniesPage() {
  const companies = [
    { id: 1, name: "مجموعة هائل سعيد أنعم", status: "verified", date: "منذ أسبوع", jobs: 15, category: "صناعة وتجارة", location: "تعز" },
    { id: 2, name: "بنك الكريمي الإسلامي", status: "verified", date: "منذ شهر", jobs: 8, category: "خدمات مالية", location: "صنعاء" },
    { id: 3, name: "تليمن للاتصالات", status: "pending", date: "منذ ساعة", jobs: 2, category: "اتصالات", location: "صنعاء" },
    { id: 4, name: "يمن موبايل", status: "verified", date: "منذ عام", jobs: 22, category: "اتصالات", location: "صنعاء" },
    { id: 5, name: "مجموعة الشيباني", status: "pending", date: "منذ يومين", jobs: 0, category: "صناعة الأغذية", location: "تعز" },
    { id: 6, name: "شركة ناتكو للسيارات", status: "verified", date: "منذ 3 أشهر", jobs: 5, category: "سيارات", location: "عدن" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 text-right">
            <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">إدارة الشركات</h1>
            <p className="text-lg text-muted-foreground font-medium">توثيق ومراجعة حسابات المؤسسات والشركات اليمنية.</p>
          </div>
          <Button className="rounded-2xl h-14 px-10 bg-secondary font-black gap-3 text-white shadow-xl shadow-secondary/20 hover:translate-y-[-2px] transition-transform">
            <ShieldCheck size={20} /> توثيق سريع للمؤسسات
          </Button>
        </header>

        {/* Filters */}
        <div className="bg-white p-6 rounded-[35px] shadow-sm border border-primary/5 flex flex-wrap items-center gap-6">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute right-5 top-5 text-muted-foreground" size={20} />
            <Input placeholder="بحث باسم الشركة، التصنيف، أو الموقع..." className="h-16 rounded-2xl pr-14 bg-muted/10 border-none font-bold text-lg focus-visible:ring-primary/10" />
          </div>
          <Button variant="outline" className="h-16 rounded-2xl border-primary/10 font-bold gap-3 px-8 text-primary shadow-sm bg-white">
            <Filter size={18} /> تصفية الشركات
          </Button>
        </div>

        {/* Companies Table */}
        <div className="bg-white rounded-[50px] border border-primary/5 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <th className="px-10 py-8">المؤسسة والنشاط</th>
                  <th className="px-10 py-8">الموقع</th>
                  <th className="px-10 py-8">الحالة</th>
                  <th className="px-10 py-8">عدد الوظائف</th>
                  <th className="px-10 py-8">تاريخ التسجيل</th>
                  <th className="px-10 py-8">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {companies.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary/5 rounded-[22px] flex items-center justify-center text-primary font-black shadow-inner shrink-0 group-hover:scale-105 transition-transform">
                          <Building2 size={28} />
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-2xl text-primary leading-tight mb-1 truncate">{c.name}</p>
                          <p className="text-xs text-muted-foreground font-bold uppercase tracking-widest">{c.category}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <span className="font-bold text-primary/80 flex items-center gap-2"><MapPin size={16} className="text-primary/20" /> {c.location}</span>
                    </td>
                    <td className="px-10 py-10">
                      <Badge className={cn(
                        "rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-wider border-none",
                        c.status === 'verified' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'
                      )}>
                        {c.status === 'verified' ? (
                          <span className="flex items-center gap-2"><ShieldCheck size={12} /> موثقة</span>
                        ) : (
                          <span className="flex items-center gap-2"><Clock size={12} /> قيد المراجعة</span>
                        )}
                      </Badge>
                    </td>
                    <td className="px-10 py-10 font-bold text-primary">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-2xl">{c.jobs}</span>
                        <span className="text-[10px] font-black text-muted-foreground uppercase">وظيفة</span>
                      </div>
                    </td>
                    <td className="px-10 py-10 font-bold text-muted-foreground/60">{c.date}</td>
                    <td className="px-10 py-10">
                      <div className="flex gap-2 justify-end">
                        {c.status === 'pending' ? (
                          <>
                            <Button className="rounded-xl h-11 bg-green-500 hover:bg-green-600 text-white font-bold gap-2 px-6 shadow-lg shadow-green-500/10"><CheckCircle2 size={16} /> قبول</Button>
                            <Button variant="outline" className="rounded-xl h-11 border-red-100 text-red-500 hover:bg-red-50 font-bold px-6"><XCircle size={16} /></Button>
                          </>
                        ) : (
                          <>
                            <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11 text-secondary hover:bg-secondary/5"><ExternalLink size={18} /></Button>
                            <Button variant="ghost" size="icon" className="rounded-xl h-11 w-11 text-primary/40"><MoreVertical size={18} /></Button>
                          </>
                        )}
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
