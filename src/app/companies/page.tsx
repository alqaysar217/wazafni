
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Building2, Search, MapPin, Users, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function CompaniesPage() {
  const companies = [
    {
      id: 1,
      name: "مجموعة هائل سعيد أنعم",
      category: "مجموعة شركات متنوعة",
      location: "تعز، اليمن",
      employees: "20,000+",
      jobs: 15,
      logo: "https://picsum.photos/seed/hsa/120/120"
    },
    {
      id: 2,
      name: "بنك الكريمي الإسلامي",
      category: "خدمات مالية وبنكية",
      location: "صنعاء، اليمن",
      employees: "2,500+",
      jobs: 8,
      logo: "https://picsum.photos/seed/kuraimi/120/120"
    },
    {
      id: 3,
      name: "يمن تيك للحلول الرقمية",
      category: "تقنية معلومات",
      location: "ريموت / صنعاء",
      employees: "50-100",
      jobs: 4,
      logo: "https://picsum.photos/seed/ytech/120/120"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FA]">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-16 space-y-12">
        <header className="max-w-3xl space-y-4">
          <h1 className="text-4xl font-black font-headline text-primary">تصفح أفضل الشركات</h1>
          <p className="text-xl text-muted-foreground font-medium">اكتشف الشركات التي توفر أفضل بيئة عمل وفرص نمو في السوق اليمني.</p>
        </header>

        <div className="bg-white p-4 rounded-2xl shadow-sm border flex flex-col md:flex-row gap-4">
          <div className="flex-1 flex items-center px-4 gap-3 bg-muted/30 rounded-xl h-14">
            <Search className="text-primary" size={20} />
            <Input placeholder="ابحث عن شركة باسمها..." className="border-none bg-transparent shadow-none focus-visible:ring-0" />
          </div>
          <Button size="lg" className="rounded-xl h-14 px-10 bg-primary font-bold">ابحث</Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map(company => (
            <div key={company.id} className="bg-white rounded-3xl p-8 border hover:shadow-xl transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-4 border-muted/50 shadow-inner">
                  <Image src={company.logo} alt={company.name} width={80} height={80} className="object-cover" />
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-primary bg-primary/5 px-3 py-1 rounded-full">{company.category}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-bold font-headline group-hover:text-primary transition-colors">{company.name}</h3>
                <div className="flex flex-col gap-2 text-sm text-muted-foreground font-medium">
                  <div className="flex items-center gap-2"><MapPin size={16} /> {company.location}</div>
                  <div className="flex items-center gap-2"><Users size={16} /> {company.employees} موظف</div>
                  <div className="flex items-center gap-2 font-bold text-primary"><Briefcase size={16} /> {company.jobs} وظيفة شاغرة</div>
                </div>
              </div>
              
              <Button variant="outline" className="w-full mt-8 rounded-xl border-primary text-primary hover:bg-primary hover:text-white font-bold">عرض ملف الشركة</Button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
