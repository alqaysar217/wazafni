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
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';

export default function AiToolsPage() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={20} />, href: "/seeker/dashboard" },
    { label: "وظائفي", icon: <Briefcase size={20} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={20} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={20} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={20} />, active: true, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={20} />, href: "/seeker/settings" }
  ];

  const tools = [
    {
      title: "محلل السيرة الذاتية الذكي",
      desc: "قم برفع سيرتك الذاتية وسنقوم بتحليلها وتقديم نصائح لتحسينها لتتوافق مع أنظمة الـ ATS.",
      icon: <FileSearch className="w-10 h-10 text-blue-600" />,
      color: "bg-blue-50",
      action: "ابدأ التحليل"
    },
    {
      title: "مطابقة الوظائف الذكية",
      desc: "نظام ذكاء اصطناعي يقارن مهاراتك مع آلاف الوظائف ليجد لك الأنسب تماماً.",
      icon: <Target className="w-10 h-10 text-purple-600" />,
      color: "bg-purple-50",
      action: "عرض المطابقات"
    },
    {
      title: "منشئ خطابات التقديم",
      desc: "أنشئ خطاب تقديم (Cover Letter) مخصص واحترافي لكل وظيفة تتقدم لها بضغطة واحدة.",
      icon: <Zap className="w-10 h-10 text-orange-600" />,
      color: "bg-orange-50",
      action: "إنشاء خطاب"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F7FA] flex flex-col">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-8 gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="premium-card bg-white p-6 space-y-8 shadow-sm rounded-[30px] border h-fit">
            <nav className="space-y-2">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={`flex items-center gap-3 p-3 rounded-xl font-medium transition-all ${item.active ? 'bg-primary text-white shadow-lg' : 'text-muted-foreground hover:bg-muted'}`}
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-8">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-black font-headline text-primary flex items-center gap-3">
                <Sparkles className="text-secondary animate-pulse" /> أدوات الذكاء الاصطناعي
              </h1>
              <p className="text-muted-foreground">استخدم أحدث تقنيات الذكاء الاصطناعي لتعزيز مسارك المهني في اليمن.</p>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, i) => (
              <Card key={i} className="rounded-[40px] border-none shadow-sm hover:shadow-xl transition-all group overflow-hidden bg-white">
                <CardHeader className="p-8 pb-4">
                  <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mb-6 ${tool.color} group-hover:scale-110 transition-transform`}>
                    {tool.icon}
                  </div>
                  <CardTitle className="text-2xl font-black text-primary">{tool.title}</CardTitle>
                  <CardDescription className="text-md font-medium leading-relaxed pt-2">
                    {tool.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <Button className="w-full h-14 rounded-2xl bg-primary text-lg font-bold group-hover:bg-secondary transition-colors gap-2">
                    {tool.action} <ArrowRight size={18} className="rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* AI Status Card */}
          <div className="bg-primary rounded-[50px] p-12 text-white relative overflow-hidden">
            <Sparkles className="absolute -top-10 -left-10 w-64 h-64 text-white/5 rotate-12" />
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="space-y-6 text-center lg:text-right">
                <h3 className="text-3xl font-black">جاهز لتحسين فرصك؟</h3>
                <p className="text-xl text-white/70 max-w-xl font-medium">
                  نظامنا الذكي يحلل أكثر من 500 نقطة بيانات في سيرتك الذاتية ليقارنها بمتطلبات السوق اليمني الحالي.
                </p>
                <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                  <div className="bg-white/10 px-6 py-3 rounded-2xl font-bold border border-white/10">مطابقة فورية</div>
                  <div className="bg-white/10 px-6 py-3 rounded-2xl font-bold border border-white/10">تحليل ATS</div>
                  <div className="bg-white/10 px-6 py-3 rounded-2xl font-bold border border-white/10">توصيات مهنية</div>
                </div>
              </div>
              <Button size="lg" className="h-20 px-12 bg-white text-primary hover:bg-white/90 text-2xl font-black rounded-3xl shrink-0 shadow-2xl">
                حلل سيرتي الآن
              </Button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
