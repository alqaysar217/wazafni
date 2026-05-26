
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Star, Quote, CheckCircle2, XCircle, Trash2, MessageSquare, Filter, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function AdminReviewsPage() {
  const reviews = [
    { id: 1, name: "أحمد محمد المقطري", role: "مطور برمجيات أول", text: "بفضل وظفني، وجدت الوظيفة التي كنت أحلم بها في أقل من أسبوعين. النظام الذكي ساعدني كثيراً في تحسين سيرتي الذاتية.", status: "published", rating: 5, date: "منذ يومين" },
    { id: 2, name: "سارة العبسي", role: "مديرة تسويق", text: "أفضل منصة توظيف في اليمن بدون منازع. السهولة في التعامل والاحترافية في عرض الوظائف تجعل التجربة رائعة.", status: "pending", rating: 5, date: "منذ 4 ساعات" },
    { id: 3, name: "علي سالم", role: "محاسب قانوني", text: "لقد ساعدتني أدوات الذكاء الاصطناعي في المنصة على معرفة نقاط الضعف في ملفي الشخصي وتجاوز المقابلات بنجاح.", status: "published", rating: 4, date: "منذ أسبوع" },
    { id: 4, name: "فاطمة الضبيبي", role: "مصممة جرافيك", text: "واجهة الموقع مريحة جداً، والوظائف المتاحة حقيقية وذات جودة عالية مقارنة بالمواقع الأخرى.", status: "pending", rating: 5, date: "منذ يوم" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 text-right">
            <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">آراء العملاء والشهادات</h1>
            <p className="text-lg text-muted-foreground font-medium">إدارة ومراجعة تجارب المستخدمين والباحثين المعروضة في الواجهة الرئيسية.</p>
          </div>
          <Button className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
            <Plus size={20} /> إضافة رأي يدوي
          </Button>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {reviews.map(r => (
            <div key={r.id} className="bg-white p-10 rounded-[50px] border border-primary/5 shadow-sm space-y-10 relative overflow-hidden group hover:shadow-xl transition-all duration-500">
              <Quote className="absolute top-10 left-10 text-primary/5 w-32 h-32 group-hover:scale-110 transition-transform" />
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex gap-1.5 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill={i < r.rating ? "currentColor" : "none"} size={22} className={cn(i < r.rating ? "text-secondary" : "text-muted/30")} />
                  ))}
                </div>
                <Badge className={cn(
                  "rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-widest border-none",
                  r.status === 'published' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'
                )}>
                  {r.status === 'published' ? 'منشور علناً' : 'بانتظار المراجعة'}
                </Badge>
              </div>

              <p className="text-2xl font-bold text-primary/80 leading-relaxed relative z-10 font-medium italic">"{r.text}"</p>
              
              <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-primary/5 relative z-10 gap-6">
                <div className="flex items-center gap-5">
                  <Avatar className="w-16 h-16 border-4 border-white shadow-md">
                    <AvatarImage src={`https://picsum.photos/seed/${r.id}/100/100`} />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                  <div className="text-right">
                    <h4 className="font-black text-xl text-primary leading-tight">{r.name}</h4>
                    <p className="text-sm text-muted-foreground font-bold">{r.role}</p>
                  </div>
                </div>
                
                <div className="flex gap-3 w-full md:w-auto">
                  {r.status === 'pending' && (
                    <Button className="flex-1 md:flex-none h-12 px-6 rounded-xl bg-green-500 hover:bg-green-600 text-white font-black gap-2 shadow-lg shadow-green-500/10">
                      <CheckCircle2 size={18} /> قبول النشر
                    </Button>
                  )}
                  <Button variant="outline" className="flex-1 md:flex-none h-12 px-6 rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-black">
                    <Trash2 size={18} />
                  </Button>
                </div>
              </div>

              <div className="absolute bottom-4 left-10">
                <span className="text-[10px] font-black text-muted-foreground/30 uppercase tracking-widest">{r.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
