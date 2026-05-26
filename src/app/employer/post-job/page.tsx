
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  PlusCircle, 
  Briefcase, 
  MapPin, 
  DollarSign, 
  FileText, 
  CheckCircle2, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function PostJobPage() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "تم نشر الوظيفة بنجاح",
        description: "ستتم مراجعة الوظيفة ونشرها علناً خلال دقائق.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-5xl">
        <main className="space-y-10">
          <header className="space-y-3 text-right">
            <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">إضافة وظيفة جديدة</h1>
            <p className="text-xl text-muted-foreground font-medium">املأ البيانات التالية للوصول إلى أفضل الكفاءات في اليمن.</p>
          </header>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <Card className="rounded-[50px] border-none shadow-sm p-12 bg-white space-y-10 border border-primary/5">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <Label className="font-black text-primary text-md">المسمى الوظيفي</Label>
                    <Input required placeholder="مثال: مطور تطبيقات هاتف" className="h-16 rounded-2xl bg-muted/10 border-none font-bold px-8 text-lg focus-visible:ring-primary/10 text-right" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <Label className="font-black text-primary text-md">نوع العمل</Label>
                      <Select>
                        <SelectTrigger className="h-16 rounded-2xl bg-muted/10 border-none font-bold px-8 text-lg">
                          <SelectValue placeholder="اختر النوع" />
                        </SelectTrigger>
                        <SelectContent className="rounded-xl border-none shadow-2xl" dir="rtl">
                          <SelectItem value="full-time">دوام كامل</SelectItem>
                          <SelectItem value="part-time">دوام جزئي</SelectItem>
                          <SelectItem value="contract">عقد / عمل حر</SelectItem>
                          <SelectItem value="remote">عن بعد</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-4">
                      <Label className="font-black text-primary text-md">الموقع</Label>
                      <Input required placeholder="صنعاء، عدن، ريموت..." className="h-16 rounded-2xl bg-muted/10 border-none font-bold px-8 text-lg text-right" />
                    </div>
                  </div>

                  <div className="space-y-4">
                    <Label className="font-black text-primary text-md">وصف الوظيفة</Label>
                    <Textarea required placeholder="اكتب تفاصيل الوظيفة، المسؤوليات، والمتطلبات..." className="min-h-[250px] rounded-3xl bg-muted/10 border-none font-bold p-8 text-lg text-right" />
                  </div>
                </div>
              </Card>

              <div className="flex justify-end gap-6">
                <Button variant="ghost" className="h-16 px-10 rounded-2xl font-black text-lg text-primary">حفظ كمسودة</Button>
                <Button type="submit" disabled={loading} className="h-16 px-16 rounded-2xl bg-primary text-white font-black text-xl shadow-xl shadow-primary/20 transition-all hover:translate-y-[-3px]">
                  {loading ? "جاري النشر..." : "نشر الوظيفة الآن"}
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-secondary/5 border border-secondary/10 p-10 rounded-[40px] space-y-8 text-right">
                <h4 className="text-2xl font-black text-primary flex items-center gap-3">
                  <Sparkles className="text-secondary" /> نصيحة ذكية
                </h4>
                <div className="space-y-6">
                  <p className="text-md font-bold text-muted-foreground/80 leading-relaxed">
                    الوظائف التي تذكر <span className="text-secondary">نطاق الراتب</span> بوضوح تحصل على عدد متقدمين أكثر بنسبة <span className="font-black text-primary">40%</span>.
                  </p>
                  <div className="h-[2px] bg-secondary/10 w-full"></div>
                  <div className="space-y-4">
                    <Label className="font-black text-primary">نطاق الراتب المتوقع</Label>
                    <div className="flex items-center gap-3 bg-white p-2 rounded-2xl border border-secondary/20">
                      <Input placeholder="1,200" className="border-none bg-transparent shadow-none font-black text-center" />
                      <span className="font-black text-primary/40 px-2">-</span>
                      <Input placeholder="2,500" className="border-none bg-transparent shadow-none font-black text-center" />
                      <span className="bg-secondary/10 text-secondary px-4 py-2 rounded-xl font-black text-sm">USD</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm space-y-8 text-right">
                <h4 className="text-xl font-black text-primary border-b border-primary/5 pb-4">الإعدادات الإضافية</h4>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm text-primary/80">تفعيل الفرز التلقائي (AI)</p>
                    <div className="w-12 h-6 bg-primary rounded-full relative"><div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="font-bold text-sm text-primary/80">إظهار الراتب علناً</p>
                    <div className="w-12 h-6 bg-muted rounded-full relative"><div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div></div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}

function Card({ children, className, ...props }: any) {
  return <div className={cn("bg-white shadow-sm border", className)} {...props}>{children}</div>;
}
