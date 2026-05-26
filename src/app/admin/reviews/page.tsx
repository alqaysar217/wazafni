
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Star, Quote, CheckCircle2, XCircle, Trash2, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AdminReviewsPage() {
  const reviews = [
    { id: 1, name: "أحمد المقطري", role: "مطور برمجيات", text: "بفضل وظفني وجدت الوظيفة التي كنت أحلم بها.", status: "published", rating: 5 },
    { id: 2, name: "سارة العبسي", role: "مديرة تسويق", text: "أفضل منصة توظيف في اليمن بدون منازع.", status: "pending", rating: 4 },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-black text-primary tracking-tighter">آراء العملاء</h1>
          <p className="text-lg text-muted-foreground font-medium">إدارة الشهادات والآراء المعروضة في الصفحة الرئيسية.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {reviews.map(r => (
            <div key={r.id} className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm space-y-8 relative overflow-hidden group">
              <Quote className="absolute top-6 left-6 text-primary/5 w-24 h-24" />
              <div className="flex items-center justify-between relative z-10">
                <div className="flex gap-1 text-secondary">
                  {[...Array(r.rating)].map((_, i) => <Star key={i} fill="currentColor" size={20} />)}
                </div>
                <Badge className={cn(
                  "rounded-full px-4 py-1 font-black text-[10px] uppercase tracking-wider",
                  r.status === 'published' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'
                )}>
                  {r.status === 'published' ? 'منشور' : 'قيد المراجعة'}
                </Badge>
              </div>
              <p className="text-xl font-bold text-primary leading-relaxed relative z-10">"{r.text}"</p>
              <div className="flex items-center justify-between pt-6 border-t border-primary/5 relative z-10">
                <div>
                  <h4 className="font-black text-lg text-primary">{r.name}</h4>
                  <p className="text-sm text-muted-foreground font-bold">{r.role}</p>
                </div>
                <div className="flex gap-3">
                  {r.status === 'pending' && (
                    <Button className="rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold"><CheckCircle2 size={16} /></Button>
                  )}
                  <Button variant="outline" className="rounded-xl border-red-100 text-red-500 hover:bg-red-50"><Trash2 size={16} /></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
