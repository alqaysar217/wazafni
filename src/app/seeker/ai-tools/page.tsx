'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Settings, 
  BrainCircuit,
  Sparkles,
  Zap,
  Target,
  FileSearch,
  ArrowRight,
  ShieldCheck,
  LineChart
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function AiToolsPage() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={22} />, href: "/seeker/dashboard" },
    { label: "وظائفي المتقدم لها", icon: <Briefcase size={22} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={22} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={22} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={22} />, active: true, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={22} />, href: "/seeker/settings" }
  ];

  const tools = [
    {
      title: "محلل السيرة الذاتية (ATS)",
      desc: "تحليل ذكي يكشف عن مدى توافق سيرتك مع أنظمة الفرز العالمية ويوفر نصائح فورية.",
      icon: <FileSearch className="w-10 h-10 text-blue-600" />,
      color: "bg-blue-50",
      action: "ابدأ التحليل",
      tag: "الأكثر طلباً"
    },
    {
      title: "المطابقة الوظيفية الدقيقة",
      desc: "خوارزمية تقارن مهاراتك بآلاف الوظائف لتجد لك المكان الذي ستنجح فيه فعلياً.",
      icon: <Target className="w-10 h-10 text-purple-600" />,
      color: "bg-purple-50",
      action: "عرض المطابقات",
      tag: "ذكي جداً"
    },
    {
      title: "منشئ خطابات التقديم",
      desc: "توليد خطاب تقديم (Cover Letter) مخصص لكل وظيفة بضغطة زر بناءً على وصف العمل.",
      icon: <Zap className="w-10 h-10 text-orange-600" />,
      color: "bg-orange-50",
      action: "إنشاء خطاب",
      tag: "توفير وقت"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-10 gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-primary/5 h-fit sticky top-28">
            <nav className="space-y-1">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl font-black transition-all group",
                    item.active ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <span className={cn(item.active ? "text-secondary" : "text-primary/40 group-hover:text-primary/60")}>{item.icon}</span>
                  <span className="text-[15px]">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-10">
          <header className="space-y-2">
            <div className="flex items-center gap-3 text-secondary mb-2">
              <Sparkles size={20} className="animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest text-primary">المختبر الذكي</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">أدوات الذكاء الاصطناعي</h1>
            <p className="text-lg text-muted-foreground font-medium max-w-2xl">نستخدم أقوى نماذج الذكاء الاصطناعي لمساعدتك في الحصول على وظيفة أحلامك في اليمن.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <Card key={i} className="rounded-[40px] border-none shadow-sm hover:shadow-2xl transition-all group overflow-hidden bg-white border border-primary/5">
                <CardHeader className="p-8 pb-4">
                  <div className="flex justify-between items-start mb-6">
                    <div className={cn("w-20 h-20 rounded-3xl flex items-center justify-center transition-transform group-hover:scale-110", tool.color)}>
                      {tool.icon}
                    </div>
                    <span className="bg-primary/5 text-primary text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest">{tool.tag}</span>
                  </div>
                  <CardTitle className="text-2xl font-black text-primary leading-tight">{tool.title}</CardTitle>
                  <CardDescription className="text-md font-medium leading-relaxed pt-2">
                    {tool.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <Button className="w-full h-14 rounded-2xl bg-primary text-lg font-black group-hover:bg-secondary transition-colors gap-2 shadow-lg shadow-primary/10">
                    {tool.action} <ArrowRight size={18} className="rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Banner */}
          <div className="bg-primary rounded-[50px] p-12 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-150"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h3 className="text-4xl font-black font-headline">انطلق بقوة المحركات الذكية</h3>
                <p className="text-xl text-white/70 font-medium leading-relaxed">
                  احصل على وصول كامل لمميزات تحليل الرواتب المقترحة، التنبؤ بأسئلة المقابلات لكل شركة يمنية، وتوليد فيديوهات تعريفية بالذكاء الاصطناعي.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 px-6 py-3 rounded-2xl font-bold border border-white/10 flex items-center gap-2"><ShieldCheck size={18} /> خصوصية مطلقة</div>
                  <div className="bg-white/10 px-6 py-3 rounded-2xl font-bold border border-white/10 flex items-center gap-2"><LineChart size={18} /> دقة بيانات 99%</div>
                </div>
                <Button size="lg" className="h-16 px-12 bg-white text-primary hover:bg-secondary hover:text-white text-xl font-black rounded-2xl shadow-2xl transition-all">
                  ترقية حسابك الآن
                </Button>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-64 h-64 bg-white/5 rounded-[60px] rotate-12 flex items-center justify-center border border-white/10 group-hover:rotate-0 transition-transform duration-700">
                  <Sparkles size={120} className="text-secondary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}