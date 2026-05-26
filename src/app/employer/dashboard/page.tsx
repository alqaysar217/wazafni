
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Users, 
  Briefcase, 
  TrendingUp, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  Building2, 
  ArrowUpRight,
  MessageSquare,
  Eye,
  Star
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function EmployerDashboard() {
  const stats = [
    { label: "الوظائف النشطة", value: "8", icon: <Briefcase />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "إجمالي المتقدمين", value: "142", icon: <Users />, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "تمت مقابلتهم", value: "24", icon: <CheckCircle2 />, color: "text-green-600", bg: "bg-green-50" },
    { label: "مشاهدات الوظائف", value: "3.2k", icon: <Eye />, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  const recentApplicants = [
    { name: "أحمد المقطري", job: "مطور برمجيات أول", date: "منذ ساعتين", status: "reviewing", rating: 4.8 },
    { name: "سارة العبسي", job: "أخصائي تسويق", date: "منذ 5 ساعات", status: "interview", rating: 4.5 },
    { name: "علي سالم الحاشدي", job: "محاسب مالي", date: "الأمس", status: "pending", rating: 4.2 }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <main className="space-y-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-2 text-right">
              <div className="flex items-center gap-3 text-secondary mb-2">
                <Building2 size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">بوابة أصحاب الأعمال</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">مرحباً بك مجدداً</h1>
              <p className="text-lg text-muted-foreground font-medium">إليك نظرة سريعة على نشاط التوظيف لمؤسستك.</p>
            </div>
            <Button asChild className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
              <Link href="/employer/post-job"><PlusCircle size={20} /> نشر وظيفة جديدة</Link>
            </Button>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="rounded-[40px] border-none shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden bg-white border border-primary/5">
                <CardContent className="p-8 space-y-6">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner transition-transform group-hover:scale-110", stat.bg, stat.color)}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                    <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* Recent Applicants */}
            <Card className="rounded-[50px] border-none shadow-sm overflow-hidden xl:col-span-2 bg-white border border-primary/5">
              <CardHeader className="bg-white/50 backdrop-blur-sm border-b px-10 py-8 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-black text-primary font-headline tracking-tight">آخر المتقدمين</CardTitle>
                <Button asChild variant="ghost" className="text-secondary font-black hover:bg-secondary/5">
                  <Link href="/employer/candidates">عرض الكل</Link>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y border-t border-primary/5">
                  {recentApplicants.map((applicant, i) => (
                    <div key={i} className="p-8 flex flex-col md:flex-row items-center justify-between hover:bg-muted/5 transition-colors gap-8 group">
                      <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="w-16 h-16 bg-primary/5 rounded-[22px] flex items-center justify-center text-primary font-black shadow-sm group-hover:scale-110 transition-transform overflow-hidden border-2 border-white">
                          <img src={`https://picsum.photos/seed/${i + 10}/100/100`} alt="Avatar" className="object-cover" />
                        </div>
                        <div className="text-right">
                          <p className="font-black text-xl text-primary">{applicant.name}</p>
                          <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{applicant.job}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-8 w-full md:w-auto justify-between md:justify-end">
                        <div className="text-right space-y-1">
                          <div className="flex items-center gap-1 text-secondary font-black text-sm">
                            <Star size={14} fill="currentColor" /> {applicant.rating}
                          </div>
                          <p className="text-[10px] text-muted-foreground/60 font-bold uppercase">{applicant.date}</p>
                        </div>
                        <Button variant="outline" className="rounded-xl h-11 border-primary/10 text-primary font-black px-6 hover:bg-primary hover:text-white transition-all">مراجعة الملف</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar: Hiring Insights */}
            <div className="space-y-8">
              <Card className="rounded-[50px] border-none shadow-sm p-10 bg-primary text-white relative overflow-hidden group">
                <TrendingUp className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-xl">
                    <Star size={28} fill="currentColor" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black font-headline tracking-tight text-right">تحليلات ذكية</h3>
                    <p className="text-white/60 font-medium leading-relaxed text-right">المتقدمون لهذا الشهر هم الأكثر مطابقة لمعاييرك بنسبة <span className="text-secondary font-black">22%</span>.</p>
                  </div>
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white hover:text-primary font-black transition-all">تحسين الوصف الوظيفي</Button>
                </div>
              </Card>

              <Card className="rounded-[50px] border-none shadow-sm p-10 bg-white space-y-10 border border-primary/5">
                <h3 className="text-2xl font-black text-primary border-b border-primary/5 pb-4 font-headline text-right">تنبيهات هامة</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4 text-right group">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 shrink-0"><Clock size={20} /></div>
                    <div className="space-y-1">
                      <p className="font-bold text-primary text-sm">وظيفة "محاسب" ستنتهي صلاحيتها</p>
                      <p className="text-[10px] text-muted-foreground font-medium">بقي يومان فقط على تاريخ الإغلاق.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 text-right group">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 shrink-0"><MessageSquare size={20} /></div>
                    <div className="space-y-1">
                      <p className="font-bold text-primary text-sm">3 رسائل جديدة من مرشحين</p>
                      <p className="text-[10px] text-muted-foreground font-medium">يرجى الرد لتحديد مواعيد المقابلات.</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
