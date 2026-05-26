'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Bell, 
  Settings, 
  Sparkles, 
  ChevronRight,
  TrendingUp,
  Clock,
  Eye,
  CheckCircle2,
  BrainCircuit,
  Building2,
  MapPin,
  Search,
  Zap,
  Star,
  ArrowUpRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { useUser } from '@/firebase';

export default function SeekerDashboard() {
  const { user } = useUser();

  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={22} />, active: true, href: "/seeker/dashboard" },
    { label: "وظائفي المتقدم لها", icon: <Briefcase size={22} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={22} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={22} />, href: "/seeker/messages", badge: 3 },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={22} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={22} />, href: "/seeker/settings" }
  ];

  const stats = [
    { label: "تم التقديم", value: "12", icon: <Briefcase />, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "مشاهدات", value: "348", icon: <Eye />, color: "text-purple-600", bg: "bg-purple-50" },
    { label: "مقابلات", value: "3", icon: <CheckCircle2 />, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "قوة الملف", value: "85%", icon: <Sparkles />, color: "text-orange-600", bg: "bg-orange-50" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-10 gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="sticky top-28 space-y-6">
            <div className="bg-white p-8 rounded-[40px] shadow-sm border border-primary/5 space-y-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-tr from-primary to-secondary rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white relative z-10 shadow-xl">
                    <Image src={user?.photoURL || "https://picsum.photos/seed/seeker/200/200"} alt="Avatar" width={96} height={96} className="object-cover" />
                  </div>
                  <div className="absolute bottom-1 right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white z-20 shadow-lg"></div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-primary leading-tight line-clamp-1">{user?.displayName || "أحمد محمد المقطري"}</h3>
                  <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase mt-1">مطور برمجيات أول</p>
                </div>
              </div>
              
              <nav className="space-y-1">
                {sidebarItems.map(item => (
                  <Link 
                    key={item.label} 
                    href={item.href} 
                    className={cn(
                      "flex items-center justify-between p-4 rounded-2xl font-black transition-all duration-300 group",
                      item.active 
                        ? "bg-primary text-white shadow-xl shadow-primary/20" 
                        : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <span className={cn(item.active ? "text-secondary" : "text-primary/40 group-hover:text-primary/60")}>
                        {item.icon}
                      </span>
                      <span className="text-[15px]">{item.label}</span>
                    </div>
                    {item.badge && (
                      <span className="w-6 h-6 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-black shadow-lg shadow-red-200">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                ))}
              </nav>
            </div>
            
            <div className="rounded-[40px] bg-primary p-8 text-white space-y-6 relative overflow-hidden group shadow-2xl shadow-primary/20">
              <Zap className="absolute -top-10 -left-10 w-40 h-40 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative z-10 space-y-4 text-center">
                <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                  <Star fill="currentColor" size={24} />
                </div>
                <h4 className="font-black text-xl leading-tight">باقة بريميوم (PRO)</h4>
                <p className="text-sm text-white/60 font-medium">احصل على ظهور أعلى في نتائج البحث بنسبة 5 أضعاف.</p>
                <Button className="w-full bg-white text-primary hover:bg-secondary hover:text-white rounded-2xl font-black transition-all">ترقية الآن</Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-10 min-w-0">
          <header className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-3 text-secondary mb-2">
                <Sparkles size={20} className="animate-pulse" />
                <span className="text-sm font-black uppercase tracking-widest">لوحة التحكم الذكية</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">أهلاً بك، {user?.displayName?.split(' ')[0] || "أحمد"} 👋</h1>
              <p className="text-lg text-muted-foreground font-medium">لديك اليوم 4 فرص وظيفية جديدة تناسب ملفك الشخصي.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button size="lg" className="rounded-2xl px-8 bg-primary font-black shadow-xl shadow-primary/10 text-white gap-3 h-14 transition-all hover:scale-105 active:scale-95">
                نشر ملفي الشخصي <ArrowUpRight size={20} />
              </Button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <Card key={i} className="rounded-[35px] border-none shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden bg-white">
                <CardContent className="p-8 space-y-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} group-hover:scale-110 transition-transform`}>
                    {stat.icon}
                  </div>
                  <div>
                    <p className="text-4xl font-black text-primary tracking-tighter group-hover:text-secondary transition-colors">{stat.value}</p>
                    <p className="text-xs font-black text-muted-foreground uppercase tracking-widest mt-1">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
            {/* AI Recommendations */}
            <div className="xl:col-span-2 space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black font-headline flex items-center gap-3 text-primary tracking-tight">
                  <div className="w-2 h-8 bg-secondary rounded-full"></div>
                  وظائف مقترحة لك
                </h2>
                <Link href="/jobs" className="text-sm font-black text-secondary hover:underline underline-offset-8 flex items-center gap-2">عرض الكل <ChevronRight size={16} /></Link>
              </div>
              
              <div className="space-y-6">
                {[
                  { title: "مهندس واجهات أمامية (React)", company: "بنك الكريمي الإسلامي", location: "صنعاء", type: "دوام كامل", match: 98, logo: "/logo-2.png" },
                  { title: "مدير تقني CTO", company: "شركة وصل للتقنية", location: "عدن - ريموت", type: "عقد", match: 92, logo: "/logo-3.png" }
                ].map((job, i) => (
                  <div key={i} className="bg-white p-8 flex flex-col md:flex-row items-center justify-between gap-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 group relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700"></div>
                    <div className="flex items-center gap-8 relative z-10 w-full">
                      <div className="w-20 h-20 rounded-3xl bg-primary/5 overflow-hidden shrink-0 border-4 border-white shadow-lg flex items-center justify-center p-3 group-hover:rotate-6 transition-transform">
                        <Image src={job.logo} alt="Logo" width={64} height={64} className="object-contain" />
                      </div>
                      <div className="space-y-3 flex-1">
                        <div className="flex items-center gap-3">
                          <Badge className="bg-green-500/10 text-green-600 border-none rounded-full px-3 py-1 font-black text-[10px] uppercase tracking-wider">
                            <Sparkles size={10} className="inline-block mr-1" /> توافق {job.match}%
                          </Badge>
                          <Badge variant="outline" className="rounded-full border-primary/10 text-primary/60 font-bold text-[10px]">{job.type}</Badge>
                        </div>
                        <h4 className="font-black text-2xl group-hover:text-secondary transition-colors text-primary tracking-tight">{job.title}</h4>
                        <div className="flex items-center gap-6 text-sm font-bold text-muted-foreground">
                          <span className="flex items-center gap-2"><Building2 size={16} className="text-primary/40" /> {job.company}</span>
                          <span className="flex items-center gap-2"><MapPin size={16} className="text-primary/40" /> {job.location}</span>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="lg" className="rounded-2xl px-10 border-2 border-primary/10 text-primary font-black group-hover:bg-primary group-hover:text-white transition-all h-14 relative z-10 w-full md:w-auto">
                      التفاصيل
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Timeline & Analytics */}
            <div className="space-y-10">
              <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm space-y-8 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -mr-12 -mt-12"></div>
                <h3 className="font-black text-xl border-b border-primary/5 pb-4 text-primary tracking-tight">تحليل السيرة الذاتية</h3>
                <div className="space-y-8 relative z-10">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-black uppercase tracking-widest text-primary">
                      <span>جودة المحتوى</span>
                      <span className="text-secondary">85%</span>
                    </div>
                    <Progress value={85} className="h-3 rounded-full bg-primary/5" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-black uppercase tracking-widest text-primary">
                      <span>توافق الـ ATS</span>
                      <span className="text-emerald-500">92%</span>
                    </div>
                    <Progress value={92} className="h-3 rounded-full bg-primary/5" />
                  </div>
                  <Button asChild variant="outline" className="w-full rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-black h-16 transition-all shadow-xl shadow-primary/5">
                    <Link href="/seeker/ai-tools" className="gap-3">
                      <BrainCircuit size={20} /> حسن ملفك الآن
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm space-y-8">
                <h3 className="font-black text-xl border-b border-primary/5 pb-4 text-primary tracking-tight">آخر النشاطات</h3>
                <div className="space-y-8 relative before:absolute before:right-[9px] before:top-2 before:bottom-2 before:w-[2px] before:bg-primary/5">
                  {[
                    { label: "تم التقدم لوظيفة مطور برمجيات", time: "منذ ساعتين", status: "success" },
                    { label: "تمت مشاهدة ملفك من شركة تليمن", time: "يوم أمس", status: "info" },
                    { label: "تم تحديث السيرة الذاتية", time: "منذ 3 أيام", status: "muted" }
                  ].map((activity, i) => (
                    <div key={i} className="relative pr-10 space-y-2 group">
                      <div className={cn(
                        "absolute right-0 top-1 w-5 h-5 rounded-full border-4 border-white shadow-md transition-all group-hover:scale-125 z-10",
                        activity.status === 'success' ? 'bg-emerald-500' : activity.status === 'info' ? 'bg-secondary' : 'bg-primary/20'
                      )}></div>
                      <p className="text-[15px] font-black leading-tight text-primary group-hover:text-secondary transition-colors">{activity.label}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-2 font-bold uppercase tracking-wider"><Clock size={12} className="text-primary/20" /> {activity.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}