
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, MapPin, Users, Briefcase, Star, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CompaniesPage() {
  const getLogo = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '';

  const companies = [
    {
      id: 1,
      name: "مجموعة هائل سعيد أنعم",
      category: "مجموعة شركات متنوعة",
      location: "تعز، اليمن",
      employees: "20,000+",
      jobs: 15,
      rating: 4.9,
      logoId: "company-hsa-logo"
    },
    {
      id: 2,
      name: "بنك الكريمي الإسلامي",
      category: "خدمات مالية وبنكية",
      location: "صنعاء، اليمن",
      employees: "2,500+",
      jobs: 8,
      rating: 4.7,
      logoId: "company-kuraimi-logo"
    },
    {
      id: 3,
      name: "يمن تيك للحلول الرقمية",
      category: "تقنية معلومات",
      location: "ريموت / صنعاء",
      employees: "50-100",
      jobs: 4,
      rating: 4.8,
      logoId: "company-ytech-logo"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        <header className="py-24 bg-white border-b">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-black text-primary leading-tight">أفضل بيئات العمل في اليمن</h1>
            <p className="text-xl text-muted-foreground font-medium">اكتشف المؤسسات والشركات التي توفر أفضل فرص النمو والاحترافية.</p>
            
            <div className="flex bg-white p-2 rounded-2xl shadow-2xl border border-border/50 max-w-2xl mx-auto">
              <div className="flex-1 flex items-center px-4 gap-3">
                <Search className="text-primary/40" size={24} />
                <Input placeholder="ابحث عن شركة..." className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg h-14 font-bold" />
              </div>
              <Button size="lg" className="rounded-xl h-14 px-10 bg-primary font-black text-lg text-white">ابحث</Button>
            </div>
          </div>
        </header>

        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {companies.map(company => (
              <div key={company.id} className="bg-white rounded-[40px] p-10 border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                <div className="absolute top-6 left-6 flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold text-sm">
                  <Star size={14} fill="currentColor" /> {company.rating}
                </div>
                
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative group/logo">
                    <div className="absolute -inset-6 bg-secondary/20 blur-3xl rounded-full scale-0 group-hover:scale-110 transition-transform duration-700 opacity-0 group-hover:opacity-100"></div>
                    
                    <div className="w-24 h-24 rounded-[5px] overflow-hidden border-2 border-white bg-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.2)] group-hover:border-secondary/20">
                      <Image src={getLogo(company.logoId)} alt={company.name} width={96} height={96} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 relative z-10">
                    <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors leading-tight">{company.name}</h3>
                    <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{company.category}</span>
                  </div>

                  <div className="w-full grid grid-cols-2 gap-4 pt-6 border-t border-border/50 relative z-10">
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">الموقع</p>
                      <p className="font-bold text-primary flex items-center justify-center gap-1 text-xs"><MapPin size={12} className="text-secondary" /> {company.location.split('،')[0]}</p>
                    </div>
                    <div className="space-y-1 text-center">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-tighter">الوظائف</p>
                      <p className="font-bold text-secondary flex items-center justify-center gap-1 text-xs"><Briefcase size={12} /> {company.jobs} شاغرة</p>
                    </div>
                  </div>

                  <div className="w-full pt-4 relative z-10">
                    <Button asChild variant="outline" className="w-full h-14 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-black text-lg gap-2 shadow-sm">
                      <Link href={`/companies/${company.id}`}>عرض الملف <ArrowUpRight size={18} /></Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
