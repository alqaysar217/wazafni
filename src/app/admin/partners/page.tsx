
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Handshake, Plus, Trash2, Edit, Globe, ExternalLink, ShieldCheck, Zap, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

export default function AdminPartnersPage() {
  const partners = [
    { id: 1, name: "بنك الكريمي الإسلامي", type: "شريك استراتيجي", website: "kuraimibank.com", icon: <ShieldCheck size={40} />, color: "bg-blue-50 text-blue-600" },
    { id: 2, name: "مجموعة هائل سعيد أنعم", type: "شريك صناعي", website: "hsa.com", icon: <Zap size={40} />, color: "bg-orange-50 text-orange-600" },
    { id: 3, name: "يمن تيك للحلول الرقمية", type: "شريك تقني", website: "ytech.ye", icon: <Rocket size={40} />, color: "bg-purple-50 text-purple-600" },
    { id: 4, name: "جامعة صنعاء", type: "شريك تعليمي", website: "su.edu.ye", icon: <Globe size={40} />, color: "bg-green-50 text-green-600" },
    { id: 5, name: "شركة يمن موبايل", type: "شريك اتصالات", website: "yemenmobile.com.ye", icon: <Zap size={40} />, color: "bg-red-50 text-red-600" },
    { id: 6, name: "صندوق تنمية المهارات", type: "شريك حكومي", website: "sdf.ye", icon: <ShieldCheck size={40} />, color: "bg-indigo-50 text-indigo-600" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 text-right">
            <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">إدارة الشركاء</h1>
            <p className="text-lg text-muted-foreground font-medium">إدارة قائمة الشعارات والشركاء الرسميين والمؤسسات التي تثق بالمنصة.</p>
          </div>
          <Button className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
            <Plus size={20} /> إضافة شريك جديد
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(p => (
            <div key={p.id} className="bg-white p-10 rounded-[50px] border border-primary/5 shadow-sm hover:shadow-2xl hover:translate-y-[-5px] transition-all group text-center space-y-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
              
              <div className={cn("w-28 h-28 rounded-[40px] flex items-center justify-center mx-auto shadow-sm group-hover:rotate-6 transition-transform relative z-10", p.color)}>
                {p.icon}
              </div>
              
              <div className="space-y-3 relative z-10">
                <h3 className="text-2xl font-black text-primary font-headline leading-tight">{p.name}</h3>
                <Badge variant="secondary" className="rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-widest bg-muted/50 text-primary/60 border-none">{p.type}</Badge>
              </div>

              <div className="flex items-center justify-center gap-3 text-muted-foreground font-bold text-sm bg-muted/20 py-3 rounded-2xl relative z-10">
                <Globe size={16} className="text-primary/20" /> {p.website}
              </div>

              <div className="pt-6 border-t border-primary/5 flex gap-4 relative z-10">
                <Button variant="outline" className="flex-1 h-12 rounded-xl font-black border-primary/10 hover:bg-primary hover:text-white transition-all"><Edit size={16} className="ml-2" /> تعديل</Button>
                <Button variant="outline" className="flex-1 h-12 rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-black transition-all"><Trash2 size={16} className="ml-2" /> حذف</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
