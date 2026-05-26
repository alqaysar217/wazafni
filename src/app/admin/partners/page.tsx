
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Handshake, Plus, Trash2, Edit, Globe, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function AdminPartnersPage() {
  const partners = [
    { id: 1, name: "بنك الكريمي", type: "شريك استراتيجي", website: "kuraimibank.com" },
    { id: 2, name: "مجموعة هائل سعيد", type: "شريك صناعي", website: "hsa.com" },
    { id: 3, name: "يمن تيك", type: "شريك تقني", website: "ytech.ye" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-primary tracking-tighter">إدارة الشركاء</h1>
            <p className="text-lg text-muted-foreground font-medium">إدارة قائمة الشعارات والشركاء الرسميين في واجهة الموقع.</p>
          </div>
          <Button className="rounded-2xl h-14 px-8 bg-primary font-black gap-3 text-white">
            <Plus size={20} /> إضافة شريك
          </Button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partners.map(p => (
            <div key={p.id} className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm hover:shadow-xl transition-all group text-center space-y-6">
              <div className="w-24 h-24 bg-primary/5 rounded-[30px] flex items-center justify-center mx-auto text-primary group-hover:scale-110 transition-transform">
                <Handshake size={40} />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-black text-primary">{p.name}</h3>
                <Badge variant="secondary" className="rounded-lg">{p.type}</Badge>
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground font-bold">
                <Globe size={16} /> {p.website}
              </div>
              <div className="pt-4 border-t border-primary/5 flex gap-3">
                <Button variant="outline" className="flex-1 rounded-xl font-bold"><Edit size={16} className="ml-2" /> تعديل</Button>
                <Button variant="outline" className="flex-1 rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-bold"><Trash2 size={16} className="ml-2" /> حذف</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
