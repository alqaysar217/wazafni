
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  AlertTriangle,
  Bell,
  CheckCircle2,
  XCircle,
  TrendingUp,
  BarChart3,
  Building2,
  ArrowUpRight,
  Clock,
  Activity,
  UserPlus,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي المستخدمين", value: "15,240", icon: <Users className="text-blue-600" />, color: "bg-blue-50", trend: "+12%" },
    { label: "الوظائف النشطة", value: "1,120", icon: <Briefcase className="text-purple-600" />, color: "bg-purple-50", trend: "+5%" },
    { label: "شركات موثقة", value: "450", icon: <ShieldCheck className="text-green-600" />, color: "bg-green-50", trend: "+8%" },
    { label: "تقارير معلقة", value: "12", icon: <AlertTriangle className="text-red-600" />, color: "bg-red-50", trend: "-2%" }
  ];

  const pendingCompanies = [
    { name: "تليمن للاتصالات", date: "منذ ساعة", category: "اتصالات", location: "صنعاء" },
    { name: "مجموعة الشيباني", date: "منذ 3 ساعات", category: "تجارة وصناعة", location: "تعز" },
    { name: "بنك الأمل", date: "منذ 5 ساعات", category: "تمويل أصغر", location: "عدن" },
    { name: "شركة ناتكو", date: "منذ يوم", category: "تكنولوجيا", location: "حضرموت" }
  ];

  const recentLogs = [
    { action: "تم إضافة وظيفة جديدة", user: "بنك الكريمي", time: "10:30 ص", color: "bg-blue-500", icon: <Briefcase size={12} /> },
    { action: "تسجيل مستخدم جديد", user: "علي سالم", time: "09:45 ص", color: "bg-orange-500", icon: <UserPlus size={12} /> },
    { action: "تم توثيق شركة", user: "يمن تيك", time: "الأمس", color: "bg-green-500", icon: <ShieldCheck size={12} /> },
    { action: "تحديث شروط الخدمة", user: "المدير", time: "الأمس", color: "bg-primary", icon: <Activity size={12} /> },
    { action: "رسالة دعم جديدة", user: "سارة العبسي", time: "منذ يومين", color: "bg-secondary", icon: <MessageSquare size={12} /> }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl">
        <main className="space-y-12">
          {/* Header */}
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-secondary mb-2">
                <Activity size={20} />
                <span className="text-xs font-black uppercase tracking-widest text-primary/60">نظرة عامة على النظام</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">لوحة التحكم الإدارية</h1>
              <p className="text-lg text-muted-foreground font-medium">مرحباً بك مجدداً، إليك ملخص أداء المنصة لهذا اليوم.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 border-primary/10 relative bg-white shadow-sm">
                <Bell size={24} className="text-primary" />
                <span className="absolute top-4 right-4 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              <Button className="rounded-2xl px-10 bg-primary font-black shadow-xl shadow-primary/20 h-14 text-white hover:translate-y-[-2px] transition-transform">تصدير التقارير</Button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl transition-all duration-500 group space-y-6">
                <div className="flex justify-between items-start">
                  <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center shadow-inner", stat.color)}>{stat.icon}</div>
                  <span className={cn("text-[10px] font-black px-2 py-1 rounded-full", stat.trend.startsWith('+') ? "bg-green-50 text-green-600" : "bg-red-50 text-red-600")}>
                    {stat.trend}
                  </span>
                </div>
                <div>
                  <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* Pending Companies Table */}
            <Card className="rounded-[50px] border-none shadow-sm overflow-hidden xl:col-span-2 bg-white border border-primary/5">
              <CardHeader className="bg-white/50 backdrop-blur-sm border-b px-10 py-8 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-black text-primary font-headline tracking-tight">شركات بانتظار التوثيق</CardTitle>
                <Button asChild variant="ghost" className="text-secondary font-black hover:bg-secondary/5">
                  <Link href="/admin/companies">عرض الكل</Link>
                </Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y border-t border-primary/5">
                  {pendingCompanies.map((company, i) => (
                    <div key={i} className="p-8 flex flex-col md:flex-row items-center justify-between hover:bg-muted/5 transition-colors gap-8 group">
                      <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black shadow-sm group-hover:scale-110 transition-transform">
                          <Building2 size={24} />
                        </div>
                        <div className="text-right">
                          <p className="font-black text-xl text-primary">{company.name}</p>
                          <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            <span>{company.category}</span>
                            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                            <span>{company.location}</span>
                            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                            <span>{company.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 w-full md:w-auto">
                        <Button className="flex-1 md:flex-none h-12 px-8 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold gap-2 shadow-lg shadow-green-500/10">
                          <CheckCircle2 size={18} /> توثيق
                        </Button>
                        <Button variant="outline" className="flex-1 md:flex-none h-12 px-8 rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-bold gap-2">
                          <XCircle size={18} /> رفض
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Sidebar Column: Growth & Activity */}
            <div className="space-y-8">
              <Card className="rounded-[50px] border-none shadow-sm p-10 bg-primary text-white relative overflow-hidden group">
                <TrendingUp className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative z-10 space-y-8">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-secondary border border-white/10 shadow-xl">
                    <BarChart3 size={28} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-black font-headline tracking-tight">نمو المنصة</h3>
                    <p className="text-white/60 font-medium leading-relaxed">زادت طلبات التوظيف بنسبة <span className="text-secondary font-black">15%</span> هذا الشهر مقارنة بالأشهر السابقة.</p>
                  </div>
                  <Button asChild variant="outline" className="w-full h-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white hover:text-primary font-black transition-all shadow-xl shadow-black/10">
                    <Link href="/admin/stats">تحليل البيانات الكاملة</Link>
                  </Button>
                </div>
              </Card>

              <Card className="rounded-[50px] border-none shadow-sm p-10 bg-white space-y-10 border border-primary/5">
                <h3 className="text-2xl font-black text-primary border-b border-primary/5 pb-4 font-headline">آخر العمليات</h3>
                <div className="space-y-8">
                  {recentLogs.map((log, i) => (
                    <div key={i} className="flex items-center justify-between text-sm font-bold group">
                      <div className="flex items-center gap-5">
                        <div className={cn("w-8 h-8 rounded-lg flex items-center justify-center text-white shrink-0 shadow-sm", log.color)}>
                          {log.icon}
                        </div>
                        <div className="text-right">
                          <span className="text-primary block leading-none mb-1">{log.action}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{log.user}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground/40 text-[10px] font-black flex items-center gap-1">
                        <Clock size={10} /> {log.time}
                      </span>
                    </div>
                  ))}
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
