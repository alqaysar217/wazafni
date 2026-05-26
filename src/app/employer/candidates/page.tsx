
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Users, 
  Search, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  MoreVertical, 
  Star,
  FileText,
  Mail,
  Phone,
  LayoutGrid,
  List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CandidatesPage() {
  const candidates = [
    { id: 1, name: "أحمد المقطري", job: "مطور برمجيات أول", score: 98, status: "interview", date: "منذ ساعتين", location: "صنعاء" },
    { id: 2, name: "سارة العبسي", job: "أخصائي تسويق", score: 92, status: "reviewing", date: "منذ 5 ساعات", location: "تعز" },
    { id: 3, name: "علي سالم", job: "محاسب مالي", score: 85, status: "pending", date: "الأمس", location: "عدن" },
    { id: 4, name: "فاطمة الضبيبي", job: "مصممة جرافيك", score: 88, status: "rejected", date: "منذ يومين", location: "إب" },
    { id: 5, name: "خالد الوصابي", job: "مطور برمجيات أول", score: 94, status: "interview", date: "منذ 3 أيام", location: "ريموت" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-2 text-right">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <Users size={24} />
              <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">إدارة المواهب</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">المتقدمين للوظائف</h1>
            <p className="text-lg text-muted-foreground font-medium">فرز ومراجعة كافة المرشحين لفرص العمل النشطة.</p>
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="rounded-2xl h-14 px-8 border-primary/10 font-black gap-3 bg-white shadow-sm">
              <LayoutGrid size={20} /> عرض الشبكة
            </Button>
            <Button className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 transition-transform hover:translate-y-[-2px]">
              تصدير القائمة
            </Button>
          </div>
        </header>

        {/* Filters & Tabs */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-[35px] shadow-sm border border-primary/5 flex flex-wrap items-center gap-6">
            <div className="flex-1 relative min-w-[300px]">
              <Search className="absolute right-5 top-5 text-muted-foreground" size={20} />
              <Input placeholder="بحث باسم المرشح أو الوظيفة..." className="h-16 rounded-2xl pr-14 bg-muted/10 border-none font-bold text-lg focus-visible:ring-primary/10 text-right" />
            </div>
            <Button variant="outline" className="h-16 rounded-2xl border-primary/10 font-bold gap-3 px-8 text-primary shadow-sm bg-white">
              <Filter size={18} /> تصفية النتائج
            </Button>
          </div>

          <Tabs defaultValue="all" className="w-full" dir="rtl">
            <TabsList className="bg-white/50 p-2 rounded-2xl border h-16 w-fit grid grid-cols-4 gap-2">
              <TabsTrigger value="all" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white">الكل</TabsTrigger>
              <TabsTrigger value="new" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white">جديد</TabsTrigger>
              <TabsTrigger value="interview" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white">مقابلة</TabsTrigger>
              <TabsTrigger value="hired" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white">مقبول</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Candidates Table */}
        <div className="bg-white rounded-[50px] border border-primary/5 shadow-sm overflow-hidden border border-primary/5">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <th className="px-10 py-8">المرشح</th>
                  <th className="px-10 py-8">الوظيفة</th>
                  <th className="px-10 py-8">المطابقة (AI)</th>
                  <th className="px-10 py-8">الحالة</th>
                  <th className="px-10 py-8">التاريخ</th>
                  <th className="px-10 py-8">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {candidates.map((c) => (
                  <tr key={c.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-6">
                        <Avatar className="w-16 h-16 border-4 border-white shadow-md transition-transform group-hover:scale-105 shrink-0">
                          <AvatarImage src={`https://picsum.photos/seed/${c.id + 20}/100/100`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div className="min-w-0">
                          <p className="font-black text-2xl text-primary leading-tight mb-1">{c.name}</p>
                          <p className="text-xs text-muted-foreground font-bold flex items-center gap-2">
                            <Clock size={12} className="text-primary/20" /> {c.location}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-10 font-bold text-primary/80">{c.job}</td>
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full border-4 border-secondary/10 flex items-center justify-center text-secondary font-black text-xs">
                          {c.score}%
                        </div>
                        <span className="text-[10px] font-black text-secondary uppercase">توافق عالي</span>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <Badge className={cn(
                        "rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-wider border-none",
                        c.status === 'interview' ? 'bg-blue-500/10 text-blue-600' : 
                        c.status === 'reviewing' ? 'bg-orange-500/10 text-orange-600' : 
                        c.status === 'rejected' ? 'bg-red-500/10 text-red-600' : 'bg-green-500/10 text-green-600'
                      )}>
                        {c.status === 'interview' ? 'مقابلة' : c.status === 'reviewing' ? 'قيد المراجعة' : c.status === 'rejected' ? 'مرفوض' : 'جديد'}
                      </Badge>
                    </td>
                    <td className="px-10 py-10 font-bold text-muted-foreground/60 whitespace-nowrap">{c.date}</td>
                    <td className="px-10 py-10">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-secondary hover:bg-secondary/5"><FileText size={20} /></Button>
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-primary/40"><MoreVertical size={20} /></Button>
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
