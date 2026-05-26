'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Settings, 
  BrainCircuit,
  Upload,
  Download,
  Trash2,
  Sparkles,
  CheckCircle2,
  FileIcon
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export default function ResumePage() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={20} />, href: "/seeker/dashboard" },
    { label: "وظائفي", icon: <Briefcase size={20} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={20} />, active: true, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={20} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={20} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={20} />, href: "/seeker/settings" }
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
            <div>
              <h1 className="text-3xl font-black font-headline text-primary">إدارة السيرة الذاتية</h1>
              <p className="text-muted-foreground">ارفع سيرتك الذاتية أو قم بإنشائها باستخدام أدواتنا الذكية.</p>
            </div>
            <Button className="rounded-xl px-8 bg-secondary hover:bg-secondary/90 shadow-lg shadow-secondary/20">
              <Upload size={18} className="ml-2" /> رفع ملف جديد
            </Button>
          </header>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
            <div className="xl:col-span-2 space-y-6">
              {/* Current Resume Card */}
              <div className="bg-white p-8 rounded-[40px] border shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-primary/5 rounded-[25px] flex items-center justify-center text-primary">
                    <FileIcon size={40} />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-primary leading-tight">Ahmed_Resume_2024.pdf</h3>
                    <p className="text-sm text-muted-foreground font-medium">تم التحديث: 14 أكتوبر 2023 • 2.4 MB</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="rounded-xl h-12 px-6 font-bold border-border">
                    <Download size={18} />
                  </Button>
                  <Button variant="outline" className="rounded-xl h-12 px-6 font-bold border-red-100 text-red-500 hover:bg-red-50">
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>

              {/* Analysis Results Preview */}
              <div className="bg-white p-10 rounded-[40px] border shadow-sm space-y-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-black text-primary">تحليل الذكاء الاصطناعي للسيرة</h3>
                  <Badge className="bg-green-500 text-white border-none rounded-full px-4 py-1 font-bold">قوية جداً</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <div className="flex justify-between font-black text-primary">
                      <span>توافق الـ ATS</span>
                      <span>92%</span>
                    </div>
                    <Progress value={92} className="h-3 rounded-full" />
                    <p className="text-xs text-muted-foreground font-medium">سيرتك الذاتية مهيأة بشكل ممتاز لأنظمة التتبع العالمية.</p>
                  </div>
                  <div className="space-y-4">
                    <div className="flex justify-between font-black text-primary">
                      <span>اكتمال الملف</span>
                      <span>85%</span>
                    </div>
                    <Progress value={85} className="h-3 rounded-full" />
                    <p className="text-xs text-muted-foreground font-medium">أضف روابط أعمالك السابقة لتصل إلى 100%.</p>
                  </div>
                </div>

                <div className="pt-6">
                  <Button asChild className="w-full h-16 rounded-2xl bg-primary text-lg font-black gap-3">
                    <Link href="/seeker/ai-tools">
                      <Sparkles size={20} /> عرض تقرير التحليل المفصل
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar Suggestions */}
            <div className="space-y-6">
              <div className="bg-secondary/5 border border-secondary/10 p-8 rounded-[40px] space-y-6">
                <h4 className="text-xl font-black text-primary flex items-center gap-2">
                  <Sparkles className="text-secondary" /> نصائح سريعة
                </h4>
                <div className="space-y-4">
                  {[
                    "استخدم كلمات مفتاحية مثل 'Node.js' و 'Next.js' لرفع نسبة التوافق.",
                    "تأكد من ذكر المشاريع التطوعية إذا كانت ذات صلة تقنية.",
                    "تجنب استخدام الصور الشخصية لضمان قراءة ملفك بواسطة ATS."
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-3 text-sm font-medium text-muted-foreground leading-relaxed">
                      <CheckCircle2 size={16} className="text-secondary shrink-0 mt-1" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              <Alert className="rounded-[40px] border-primary/20 bg-primary/5 p-8">
                <BrainCircuit className="h-6 w-6 text-primary" />
                <AlertTitle className="font-black text-lg mr-8 mb-2">ميزة جديدة!</AlertTitle>
                <AlertDescription className="text-sm font-medium leading-relaxed mr-8">
                  يمكنك الآن توليد خطاب تقديم (Cover Letter) مخصص لكل وظيفة بضغطة واحدة.
                </AlertDescription>
                <Button variant="link" className="text-primary font-black p-0 h-auto mt-4 mr-8">جربها الآن</Button>
              </Alert>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
