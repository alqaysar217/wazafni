
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
  BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';

export default function SeekerDashboard() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={20} />, active: true, href: "/seeker/dashboard" },
    { label: "وظائفي", icon: <Briefcase size={20} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={20} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={20} />, href: "/seeker/messages", badge: 3 },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={20} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={20} />, href: "/seeker/settings" }
  ];

  const stats = [
    { label: "الوظائف المتقدم لها", value: "12", icon: <Briefcase className="text-blue-600" />, color: "bg-blue-50" },
    { label: "مشاهدات الملف الشخصي", value: "348", icon: <Eye className="text-purple-600" />, color: "bg-purple-50" },
    { label: "دعوات للمقابلة", value: "3", icon: <CheckCircle2 className="text-green-600" />, color: "bg-green-50" },
    { label: "قوة السيرة الذاتية", value: "85%", icon: <Sparkles className="text-orange-600" />, color: "bg-orange-50" }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7FA] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-8 gap-8">
        {/* Dashboard Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0 space-y-6">
          <div className="premium-card bg-white p-6 space-y-8 h-fit">
            <div className="flex flex-col items-center text-center space-y-4 pb-4 border-b">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary/10">
                  <Image src="https://picsum.photos/seed/seeker/200/200" alt="Avatar" width={100} height={100} />
                </div>
                <div className="absolute bottom-0 right-0 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="text-lg font-bold">أحمد محمد المقطري</h3>
                <p className="text-xs text-muted-foreground">مطور برمجيات أول</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`flex items-center justify-between p-3 rounded-xl font-medium transition-all ${item.active ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted-foreground hover:bg-muted hover:text-foreground'}`}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span>{item.label}</span>
                  </div>
                  {item.badge && <span className="w-5 h-5 rounded-full bg-red-500 text-white text-[10px] flex items-center justify-center font-bold animate-pulse">{item.badge}</span>}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="rounded-3xl bg-gradient-to-br from-primary to-secondary p-8 text-white space-y-4 shadow-xl shadow-primary/20">
            <Sparkles className="animate-pulse" />
            <h4 className="font-bold text-lg">باقة برو (PRO)</h4>
            <p className="text-xs text-white/70">احصل على ظهور أعلى في نتائج البحث بنسبة 5x.</p>
            <Button className="w-full bg-white text-primary hover:bg-white/90 rounded-xl font-bold">ترقية الحساب</Button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8 overflow-hidden">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black font-headline">أهلاً بك، أحمد 👋</h1>
              <p className="text-muted-foreground">إليك آخر التحديثات في رحلتك الوظيفية لهذا اليوم.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-xl border-border bg-white shadow-sm">
                <Bell size={20} />
              </Button>
              <Button className="rounded-xl px-6 bg-primary font-bold shadow-lg shadow-primary/20">نشر ملفك الشخصي</Button>
            </div>
          </header>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="premium-card p-6 bg-white space-y-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${stat.color}`}>
                  {stat.icon}
                </div>
                <div>
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            {/* AI Recommendations */}
            <div className="xl:col-span-2 space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold font-headline flex items-center gap-2">
                  <Sparkles className="text-primary" /> وظائف مقترحة لك
                </h2>
                <Link href="/jobs" className="text-sm font-bold text-primary hover:underline">عرض الكل</Link>
              </div>
              
              <div className="space-y-4">
                {[
                  { title: "مهندس واجهات أمامية", company: "بنك الكريمي", location: "صنعاء", type: "دوام كامل", match: 98 },
                  { title: "مدير تقني CTO", company: "شركة وصل", location: "عدن", type: "عقد", match: 92 }
                ].map((job, i) => (
                  <div key={i} className="premium-card p-6 bg-white flex items-center justify-between gap-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 rounded-2xl bg-muted overflow-hidden shrink-0 border border-border/50">
                        <Image src={`https://picsum.photos/seed/job${i}/100/100`} alt="Logo" width={64} height={64} />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-bold text-lg hover:text-primary transition-colors cursor-pointer">{job.title}</h4>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1"><Building2 size={14} /> {job.company}</span>
                          <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className="hidden md:flex flex-col items-end gap-2">
                      <Badge className="bg-green-100 text-green-700 border-none rounded-full px-3">توافق {job.match}%</Badge>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/5 rounded-lg group">
                        التفاصيل <ChevronRight size={14} className="rtl:rotate-180 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Timeline & Analytics */}
            <div className="space-y-8">
              <div className="premium-card p-6 bg-white space-y-6">
                <h3 className="font-bold text-lg border-b pb-4">تحليل السيرة الذاتية</h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>قوة المحتوى</span>
                      <span className="text-primary">85%</span>
                    </div>
                    <Progress value={85} className="h-2 rounded-full" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span>توافق ATS</span>
                      <span className="text-green-600">92%</span>
                    </div>
                    <Progress value={92} className="h-2 rounded-full" />
                  </div>
                  <Button variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-white font-bold h-12">
                    <Sparkles size={16} className="ml-2" /> حسن سيرتك بالذكاء الاصطناعي
                  </Button>
                </div>
              </div>

              <div className="premium-card p-6 bg-white space-y-6">
                <h3 className="font-bold text-lg border-b pb-4">آخر النشاطات</h3>
                <div className="space-y-6 relative before:absolute before:right-[7px] before:top-2 before:bottom-2 before:w-[2px] before:bg-muted">
                  {[
                    { label: "تم التقدم لوظيفة مطور برامج", time: "منذ ساعتين", status: "success" },
                    { label: "تمت مشاهدة ملفك من شركة تليمن", time: "يوم أمس", status: "info" },
                    { label: "تم تحديث السيرة الذاتية", time: "منذ 3 أيام", status: "muted" }
                  ].map((activity, i) => (
                    <div key={i} className="relative pr-8 space-y-1">
                      <div className={`absolute right-0 top-1.5 w-4 h-4 rounded-full border-2 border-white ${activity.status === 'success' ? 'bg-green-500' : activity.status === 'info' ? 'bg-primary' : 'bg-muted-foreground'}`}></div>
                      <p className="text-sm font-bold leading-tight">{activity.label}</p>
                      <p className="text-xs text-muted-foreground flex items-center gap-1"><Clock size={12} /> {activity.time}</p>
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
