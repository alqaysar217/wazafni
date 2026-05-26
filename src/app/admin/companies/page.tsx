
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Building2, ShieldCheck, ShieldAlert, Search, CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export default function AdminCompaniesPage() {
  const companies = [
    { id: 1, name: "مجموعة هائل سعيد", status: "verified", date: "منذ أسبوع", jobs: 15 },
    { id: 2, name: "بنك الكريمي", status: "verified", date: "منذ شهر", jobs: 8 },
    { id: 3, name: "تليمن للاتصالات", status: "pending", date: "منذ ساعة", jobs: 2 },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-primary tracking-tighter">إدارة الشركات</h1>
            <p className="text-lg text-muted-foreground font-medium">توثيق ومراجعة حسابات المؤسسات والشركات.</p>
          </div>
          <Button className="rounded-2xl h-14 px-8 bg-secondary font-black gap-3 text-white">
            <ShieldCheck size={20} /> توثيق سريع
          </Button>
        </header>

        <div className="bg-white rounded-[40px] border border-primary/5 shadow-sm overflow-hidden">
          <table className="w-full text-right">
            <thead>
              <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                <th className="px-8 py-6">الشركة</th>
                <th className="px-8 py-6">الحالة</th>
                <th className="px-8 py-6">الوظائف</th>
                <th className="px-8 py-6">تاريخ التسجيل</th>
                <th className="px-8 py-6 text-left">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {companies.map((c) => (
                <tr key={c.id} className="hover:bg-muted/5 transition-colors">
                  <td className="px-8 py-8 flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary font-black shadow-inner">
                      <Building2 size={24} />
                    </div>
                    <span className="font-black text-lg text-primary">{c.name}</span>
                  </td>
                  <td className="px-8 py-8">
                    <Badge className={cn(
                      "rounded-full px-4 py-1 font-black text-[10px] uppercase tracking-wider",
                      c.status === 'verified' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'
                    )}>
                      {c.status === 'verified' ? 'موثقة' : 'قيد المراجعة'}
                    </Badge>
                  </td>
                  <td className="px-8 py-8 font-bold text-primary">{c.jobs} وظيفة</td>
                  <td className="px-8 py-8 font-bold text-muted-foreground">{c.date}</td>
                  <td className="px-8 py-8 text-left">
                    {c.status === 'pending' ? (
                      <div className="flex gap-2 justify-end">
                        <Button className="rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold gap-2"><CheckCircle2 size={16} /> قبول</Button>
                        <Button variant="outline" className="rounded-xl border-red-100 text-red-500 hover:bg-red-50 font-bold gap-2"><XCircle size={16} /> رفض</Button>
                      </div>
                    ) : (
                      <Button variant="ghost" className="text-muted-foreground font-bold">تعديل البيانات</Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
}
