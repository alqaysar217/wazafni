'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Users, 
  Briefcase, 
  ShieldCheck, 
  BarChart3, 
  Settings, 
  Bell, 
  Search,
  CheckCircle2,
  XCircle,
  AlertTriangle,
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
    <div className="min-h-screen bg-[#F8F7FA] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="bg-white p-6 space-y-6 shadow-sm rounded-[30px] border h-fit sticky top-28">
            <div className="pb-4 border-b text-center space-y-2">
              <div className="w-20 h-20 bg-primary rounded-full mx-auto flex items-center justify-center text-white text-2xl font-black shadow-lg">AD</div>
              <h3 className="font-black text-primary">مدير النظام</h3>
              <Badge variant="secondary">إدارة عليا</Badge>
            </div>
            <nav className="space-y-1">
              {[
                { label: "الرئيسية", icon: <LayoutDashboard size={20} />, active: true },
                { label: "المستخدمين", icon: <Users size={20} /> },
                { label: "الوظائف", icon: <Briefcase size={20} /> },
                { label: "الإحصائيات", icon: <BarChart3 size={20} /> },
                { label: "الإعدادات", icon: <Settings size={20} /> }
              ].map((item, i) => (
                <button key={i} className={`flex items-center gap-3 w-full p-3 rounded-xl font-bold transition-all ${item.active ? 'bg-primary text-white shadow-md' : 'text-muted-foreground hover:bg-muted'}`}>
                  {item.icon} {item.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content */}
        <main className="flex-1 space-y-8">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black font-headline text-primary">لوحة تحكم الإدارة</h1>
              <p className="text-muted-foreground">مرحباً بك، لديك 5 مهام تتطلب انتباهك اليوم.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="icon" className="rounded-xl"><Bell size={20} /></Button>
              <Button className="rounded-xl px-6 bg-primary font-bold">تصدير التقارير</Button>
            </div>
          </header>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="bg-white p-6 rounded-[30px] border shadow-sm space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>{stat.icon}</div>
                <div>
                  <p className="text-3xl font-black text-primary">{stat.value}</p>
                  <p className="text-xs font-bold text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            <Card className="rounded-[40px] border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-white border-b px-8 py-6">
                <CardTitle className="text-xl font-black text-primary">شركات تنتظر التوثيق</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { name: "تليمن للاتصالات", date: "منذ ساعة", status: "pending" },
                    { name: "مجموعة الشيباني", date: "منذ 3 ساعات", status: "pending" }
                  ].map((company, i) => (
                    <div key={i} className="p-6 flex items-center justify-between hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-muted rounded-xl"></div>
                        <div>
                          <p className="font-black text-primary">{company.name}</p>
                          <p className="text-xs text-muted-foreground">{company.date}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-green-600 hover:bg-green-50"><CheckCircle2 size={18} /></Button>
                        <Button size="sm" variant="ghost" className="text-red-600 hover:bg-red-50"><XCircle size={18} /></Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-[40px] border-none shadow-sm overflow-hidden">
              <CardHeader className="bg-white border-b px-8 py-6">
                <CardTitle className="text-xl font-black text-primary">آخر العمليات</CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  {[
                    { action: "تم إضافة وظيفة جديدة", user: "بنك الكريمي", time: "10:30 ص" },
                    { action: "تسجيل مستخدم جديد", user: "علي سالم", time: "09:45 ص" },
                    { action: "تحديث شروط الخدمة", user: "المدير", time: "الأمس" }
                  ].map((log, i) => (
                    <div key={i} className="flex items-center justify-between text-sm font-bold">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-secondary"></div>
                        <span className="text-primary">{log.action}</span>
                      </div>
                      <span className="text-muted-foreground">{log.time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}
