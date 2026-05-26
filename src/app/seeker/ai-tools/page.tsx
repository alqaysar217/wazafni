'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
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
import { cn } from '@/lib/utils';

export default function AiToolsPage() {
  const tools = [
    {
      title: "محلل السيرة الذاتية (ATS)",
      desc: "تحليل ذكي يكشف عن مدى توافق سيرتك مع أنظمة الفرز العالمية ويوفر نصائح فورية لتحسينها.",
      icon: <FileSearch className="w-12 h-12 text-blue-600" />,
      color: "bg-blue-50",
      action: "ابدأ التحليل الآن",
      tag: "الأكثر طلباً"
    },
    {
      title: "المطابقة الوظيفية الدقيقة",
      desc: "خوارزمية متقدمة تقارن مهاراتك بآلاف الوظائف لتجد لك المكان الذي ستنجح فيه فعلياً.",
      icon: <Target className="w-12 h-12 text-purple-600" />,
      color: "bg-purple-50",
      action: "عرض المطابقات",
      tag: "ذكي جداً"
    },
    {
      title: "منشئ خطابات التقديم",
      desc: "توليد خطاب تقديم (Cover Letter) مخصص لكل وظيفة بضغطة زر بناءً على وصف العمل وسيرتك.",
      icon: <Zap className="w-12 h-12 text-orange-600" />,
      color: "bg-orange-50",
      action: "إنشاء خطاب",
      tag: "توفير وقت"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <main className="space-y-12">
          <header className="space-y-3 text-center md:text-right max-w-3xl">
            <div className="flex items-center gap-3 text-secondary mb-2 justify-center md:justify-start">
              <Sparkles size={24} className="animate-pulse" />
              <span className="text-sm font-black uppercase tracking-widest text-primary">المختبر الذكي لـ وظفني</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-black font-headline text-primary tracking-tighter">أدوات الذكاء الاصطناعي</h1>
            <p className="text-xl text-muted-foreground font-medium">نستخدم أقوى نماذج الذكاء الاصطناعي لمساعدتك في التميز والحصول على وظيفة أحلامك في اليمن.</p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {tools.map((tool, i) => (
              <Card key={i} className="rounded-[50px] border-none shadow-sm hover:shadow-2xl transition-all group overflow-hidden bg-white border border-primary/5 flex flex-col">
                <CardHeader className="p-10 pb-6 flex-1">
                  <div className="flex justify-between items-start mb-8">
                    <div className={cn("w-24 h-24 rounded-[35px] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-sm", tool.color)}>
                      {tool.icon}
                    </div>
                    <span className="bg-primary/5 text-primary text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest">{tool.tag}</span>
                  </div>
                  <CardTitle className="text-3xl font-black text-primary leading-tight font-headline">{tool.title}</CardTitle>
                  <CardDescription className="text-lg font-medium leading-relaxed pt-4 text-primary/60">
                    {tool.desc}
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-10 pt-4">
                  <Button className="w-full h-16 rounded-3xl bg-primary text-xl font-black group-hover:bg-secondary transition-colors gap-3 shadow-xl shadow-primary/10">
                    {tool.action} <ArrowRight size={22} className="rtl:rotate-180" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Premium Banner */}
          <div className="bg-primary rounded-[60px] p-16 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 w-80 h-84 bg-secondary/20 rounded-full blur-[100px] -mr-32 -mt-32 transition-transform duration-1000 group-hover:scale-150"></div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-10">
                <h3 className="text-5xl font-black font-headline leading-tight">انطلق بقوة المحركات الذكية</h3>
                <p className="text-2xl text-white/70 font-medium leading-relaxed">
                  احصل على وصول كامل لمميزات تحليل الرواتب المقترحة في السوق اليمني، التنبؤ بأسئلة المقابلات، وتوليد فيديوهات تعريفية احترافية.
                </p>
                <div className="flex flex-wrap gap-6">
                  <div className="bg-white/10 px-8 py-4 rounded-[25px] font-bold border border-white/10 flex items-center gap-3"><ShieldCheck size={24} className="text-secondary" /> خصوصية مطلقة للبيانات</div>
                  <div className="bg-white/10 px-8 py-4 rounded-[25px] font-bold border border-white/10 flex items-center gap-3"><LineChart size={24} className="text-secondary" /> دقة بيانات 99.9%</div>
                </div>
                <Button size="lg" className="h-20 px-16 bg-white text-primary hover:bg-secondary hover:text-white text-2xl font-black rounded-3xl shadow-2xl transition-all hover:scale-105 active:scale-95">
                  ترقية حسابك لـ PRO الآن
                </Button>
              </div>
              <div className="hidden lg:flex justify-center">
                <div className="w-80 h-80 bg-white/5 rounded-[70px] rotate-12 flex items-center justify-center border border-white/10 group-hover:rotate-0 transition-transform duration-1000 group-hover:bg-white/10">
                  <Sparkles size={160} className="text-secondary animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
