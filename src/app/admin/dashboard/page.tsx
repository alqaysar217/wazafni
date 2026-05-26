
'use client';

import { Navbar } from '@/components/layout/Navbar';
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
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function AdminDashboard() {
  const stats = [
    { label: "إجمالي المستخدمين", value: "15,240", icon: <Users className="text-blue-600" />, color: "bg-blue-50" },
    { label: "الوظائف النشطة", value: "1,120", icon: <Briefcase className="text-purple-600" />, color: "bg-purple-50" },
    { label: "شركات موثقة", value: "450", icon: <ShieldCheck className="text-green-600" />, color: "bg-green-50" },
    { label: "تقارير معلقة", value: "12", icon: <AlertTriangle className="text-red-600" />, color: "bg-red-50" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-10">
        <main className="space-y-10">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">لوحة التحكم الإدارية</h1>
              <p className="text-lg text-muted-foreground font-medium">مرحباً بك مجدداً، إليك نظرة شاملة على أداء المنصة اليوم.</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-2xl h-14 w-14 border-primary/10 relative">
                <Bell size={24} className="text-primary" />
                <span className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></span>
              </Button>
              <Button className="rounded-2xl px-10 bg-primary font-black shadow-xl shadow-primary/20 h-14 text-white">تصدير التقارير</Button>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-8 rounded-[35px] border border-primary/5 shadow-sm hover:shadow-md transition-all space-y-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.color} shadow-inner`}>{stat.icon}</div>
                <div>
                  <p className="text-4xl font-black text-primary tracking-tighter">{stat.value}</p>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <Card className="rounded-[40px] border-none shadow-sm overflow-hidden xl:col-span-2">
              <CardHeader className="bg-white border-b px-10 py-8 flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-black text-primary font-headline">شركات تنتظر التوثيق</CardTitle>
                <Button variant="ghost" className="text-secondary font-black">عرض الكل</Button>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y border-t border-primary/5">
                  {[
                    { name: "تليمن للاتصالات", date: "منذ ساعة", category: "اتصالات", status: "pending" },
                    { name: "مجموعة الشيباني", date: "منذ 3 ساعات", category: "تجارة وصناعة", status: "pending" },
                    { name: "بنك الأمل", date: "منذ 5 ساعات", category: "تمويل أصغر", status: "pending" }
                  ].map((company, i) => (
                    <div key={i} className="p-8 flex flex-col md:flex-row items-center justify-between hover:bg-muted/5 transition-colors gap-6">
                      <div className="flex items-center gap-6 w-full md:w-auto">
                        <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black shadow-sm">
                          <Building2 size={24} />
                        </div>
                        <div className="text-right">
                          <p className="font-black text-xl text-primary">{company.name}</p>
                          <div className="flex items-center gap-3 text-xs font-bold text-muted-foreground uppercase tracking-widest">
                            <span>{company.category}</span>
                            <span className="w-1 h-1 bg-muted-foreground/30 rounded-full"></span>
                            <span>{company.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4 w-full md:w-auto">
                        <Button className="flex-1 md:flex-none h-12 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold gap-2">
                          <CheckCircle2 size={18} /> توثيق
                        </Button>
                        <Button variant="outline" className="flex-1 md:flex-none h-12 px-6 rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-bold gap-2">
                          <XCircle size={18} /> رفض
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <Card className="rounded-[40px] border-none shadow-sm p-10 bg-primary text-white relative overflow-hidden group">
                <TrendingUp className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <div className="relative z-10 space-y-6">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-secondary">
                    <BarChart3 size={24} />
                  </div>
                  <h3 className="text-2xl font-black font-headline">نمو المنصة</h3>
                  <p className="text-white/60 font-medium leading-relaxed">زادت طلبات التوظيف بنسبة 15% هذا الشهر مقارنة بالشهر السابق.</p>
                  <Button variant="outline" className="w-full h-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white hover:text-primary font-black transition-all">تحليل البيانات</Button>
                </div>
              </Card>

              <Card className="rounded-[40px] border-none shadow-sm p-10 bg-white space-y-8">
                <h3 className="text-xl font-black text-primary border-b border-primary/5 pb-4">آخر العمليات</h3>
                <div className="space-y-6">
                  {[
                    { action: "تم إضافة وظيفة جديدة", user: "بنك الكريمي", time: "10:30 ص", color: "bg-blue-500" },
                    { action: "تسجيل مستخدم جديد", user: "علي سالم", time: "09:45 ص", color: "bg-secondary" },
                    { action: "تحديث شروط الخدمة", user: "المدير", time: "الأمس", color: "bg-primary" }
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between text-sm font-bold group">
                      <div className="flex items-center gap-4">
                        <div className={`w-2 h-2 rounded-full ${log.color}`}></div>
                        <div className="text-right">
                          <span className="text-primary block leading-none">{log.action}</span>
                          <span className="text-[10px] text-muted-foreground uppercase tracking-widest">{log.user}</span>
                        </div>
                      </div>
                      <span className="text-muted-foreground/60">{log.time}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
