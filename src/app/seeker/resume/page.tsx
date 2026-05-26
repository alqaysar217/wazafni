'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  Upload,
  Download,
  Trash2,
  Sparkles,
  CheckCircle2,
  FileIcon,
  BrainCircuit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-10 max-w-6xl">
        <main className="space-y-10">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <h1 className="text-4xl font-black font-headline text-primary tracking-tighter">إدارة السيرة الذاتية</h1>
              <p className="text-lg text-muted-foreground font-medium">قم برفع وتحديث سيرتك الذاتية لتعزيز فرصك المهنية.</p>
            </div>
            <Button size="lg" className="rounded-2xl px-10 bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 h-14 font-black">
              <Upload size={20} className="ml-3" /> رفع ملف جديد
            </Button>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-8">
              {/* Current Resume Card */}
              <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm flex flex-col md:flex-row items-center justify-between gap-10 hover:shadow-md transition-all">
                <div className="flex items-center gap-8">
                  <div className="w-24 h-24 bg-primary/5 rounded-[30px] flex items-center justify-center text-primary">
                    <FileIcon size={48} />
                  </div>
                  <div className="space-y-1 text-right">
                    <h3 className="text-2xl font-black text-primary leading-tight">Ahmed_Resume_2024.pdf</h3>
                    <p className="text-sm text-muted-foreground font-bold uppercase tracking-widest">تم التحديث: 14 أكتوبر 2023 • 2.4 MB</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 font-bold border-primary/10 hover:bg-primary hover:text-white transition-colors">
                    <Download size={24} />
                  </Button>
                  <Button variant="outline" className="rounded-2xl h-14 w-14 p-0 font-bold border-red-100 text-red-500 hover:bg-red-50 transition-colors">
                    <Trash2 size={24} />
                  </Button>
                </div>
              </div>

              {/* Analysis Results Preview */}
              <div className="bg-white p-12 rounded-[50px] border border-primary/5 shadow-sm space-y-12">
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl font-black text-primary font-headline tracking-tight">تحليل الذكاء الاصطناعي</h3>
                  <Badge className="bg-green-500 text-white border-none rounded-full px-6 py-2 font-black text-[10px] uppercase tracking-widest">قوية جداً</Badge>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
                  <div className="space-y-6">
                    <div className="flex justify-between font-black text-primary text-[10px] uppercase tracking-widest">
                      <span>توافق الـ ATS</span>
                      <span className="text-secondary text-lg font-headline">92%</span>
                    </div>
                    <Progress value={92} className="h-3 rounded-full bg-primary/5" />
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">سيرتك الذاتية مهيأة بشكل ممتاز لأنظمة التتبع العالمية (Applicant Tracking Systems).</p>
                  </div>
                  <div className="space-y-6">
                    <div className="flex justify-between font-black text-primary text-[10px] uppercase tracking-widest">
                      <span>اكتمال الملف</span>
                      <span className="text-emerald-500 text-lg font-headline">85%</span>
                    </div>
                    <Progress value={85} className="h-3 rounded-full bg-primary/5" />
                    <p className="text-sm text-muted-foreground font-medium leading-relaxed">أضف روابط أعمالك السابقة (Portfolio) لتصل إلى نسبة اكتمال 100%.</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Button asChild size="lg" className="w-full h-20 rounded-[30px] bg-primary text-2xl font-black gap-4 shadow-2xl shadow-primary/20 hover:translate-y-[-3px] transition-transform">
                    <Link href="/seeker/ai-tools">
                      <Sparkles size={28} /> عرض تقرير التحليل المفصل
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Sidebar Suggestions */}
            <div className="space-y-8">
              <div className="bg-secondary/5 border border-secondary/10 p-10 rounded-[40px] space-y-8 text-right">
                <h4 className="text-2xl font-black text-primary flex items-center gap-3">
                  <Sparkles className="text-secondary" /> نصائح مهنية
                </h4>
                <div className="space-y-6">
                  {[
                    "استخدم كلمات مفتاحية مثل 'Node.js' و 'Next.js' لرفع نسبة التوافق في المجال التقني.",
                    "تأكد من ذكر المشاريع التطوعية إذا كانت ذات صلة بمهاراتك القيادية.",
                    "تجنب استخدام الجداول المعقدة لضمان قراءة ملفك بواسطة أنظمة ATS."
                  ].map((tip, i) => (
                    <div key={i} className="flex gap-4 text-md font-bold text-muted-foreground/80 leading-relaxed">
                      <CheckCircle2 size={20} className="text-secondary shrink-0 mt-1" />
                      {tip}
                    </div>
                  ))}
                </div>
              </div>

              <Alert className="rounded-[40px] border-primary/20 bg-primary/5 p-10 space-y-4 text-right">
                <BrainCircuit className="h-10 w-10 text-primary" />
                <AlertTitle className="font-black text-2xl text-primary">ميزة متقدمة</AlertTitle>
                <AlertDescription className="text-md font-medium leading-relaxed text-primary/70">
                  يمكنك الآن توليد خطاب تقديم (Cover Letter) مخصص لكل وظيفة بضغطة واحدة باستخدام محركاتنا الذكية.
                </AlertDescription>
                <Button variant="link" className="text-secondary font-black p-0 h-auto text-lg underline-offset-8 decoration-2">جربها الآن</Button>
              </Alert>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
