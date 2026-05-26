
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  MapPin, 
  Filter, 
  ChevronDown, 
  Briefcase, 
  Clock, 
  DollarSign,
  Sparkles,
  Building2,
  Bookmark,
  LayoutGrid,
  List
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function JobsPage() {
  const getPlaceholder = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || "";

  const jobs = [
    {
      id: 1,
      title: "مطور برمجيات أول (React & Node.js)",
      company: "شركة يمن تيك للحلول الرقمية",
      location: "صنعاء - ريموت",
      salary: "5,600 - 9,400 ر.س",
      type: "دوام كامل",
      posted: "منذ يومين",
      match: 95,
      skills: ["React", "TypeScript", "Node.js"],
      logo: getPlaceholder('company-ytech-logo')
    },
    {
      id: 2,
      title: "أخصائي تسويق رقمي",
      company: "مجموعة هائل سعيد أنعم",
      location: "تعز - المقر الرئيسي",
      salary: "12,000 - 18,000 ر.س",
      type: "دوام كامل",
      posted: "منذ 4 ساعات",
      match: 88,
      skills: ["SEO", "Content Strategy", "Ads"],
      logo: getPlaceholder('company-hsa-logo')
    },
    {
      id: 3,
      title: "مدير مشاريع إنشائية",
      company: "شركة تهامة للهندسة والمقاولات",
      location: "عدن - كريتر",
      salary: "7,500 - 13,000 ر.س",
      type: "عقد",
      posted: "منذ أسبوع",
      match: 72,
      skills: ["PMP", "Project Mgmt", "Civil Eng"],
      logo: getPlaceholder('company-1')
    },
    {
      id: 4,
      title: "مصمم تجربة مستخدم UI/UX",
      company: "أنا مبرمج للتقنية",
      location: "حضرموت - المكلا",
      salary: "4,500 - 6,800 ر.س",
      type: "دوام كامل",
      posted: "منذ 3 أيام",
      match: 91,
      skills: ["Figma", "UI Design", "UX Research"],
      logo: getPlaceholder('company-ytech-logo')
    },
    {
      id: 5,
      title: "محاسب قانوني",
      company: "شركة العمقي للصرافة",
      location: "صنعاء",
      salary: "7,500 - 10,500 ر.س",
      type: "دوام كامل",
      posted: "منذ يومين",
      match: 65,
      skills: ["Accounting", "Excel", "ERP"],
      logo: getPlaceholder('company-kuraimi-logo')
    },
    {
      id: 6,
      title: "مهندس شبكات وأمن معلومات",
      company: "يمن موبايل",
      location: "صنعاء",
      salary: "6,800 - 9,000 ر.س",
      type: "دوام كامل",
      posted: "منذ 6 ساعات",
      match: 82,
      skills: ["CCNA", "Security", "Networking"],
      logo: getPlaceholder('company-1')
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <main className="flex-1">
        {/* Modern Search Header */}
        <section className="bg-primary pt-20 pb-32 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
            <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">استكشف الفرص المهنية</h1>
            <p className="text-xl text-white/60 font-medium max-w-2xl mx-auto">نساعدك في الوصول إلى الوظيفة التي تستحق مهاراتك باستخدام تقنياتنا الذكية.</p>
            
            <div className="max-w-5xl mx-auto bg-white p-3 rounded-[32px] shadow-2xl flex flex-col md:flex-row gap-3">
              <div className="flex-1 flex items-center px-6 gap-3 bg-[#F8F7FA] rounded-2xl h-16">
                <Search className="text-primary/40" size={24} />
                <Input placeholder="المسمى الوظيفي، الكلمات المفتاحية..." className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold" />
              </div>
              <div className="flex-1 flex items-center px-6 gap-3 bg-[#F8F7FA] rounded-2xl h-16">
                <MapPin className="text-primary/40" size={24} />
                <Input placeholder="المدينة أو المنطقة..." className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold" />
              </div>
              <Button size="lg" className="rounded-2xl h-16 px-12 bg-primary font-black text-xl hover:scale-[1.02] transition-transform text-white">بحث</Button>
            </div>
          </div>
        </section>

        {/* Top Filters Bar */}
        <div className="container mx-auto px-4 -mt-12 relative z-20">
          <div className="bg-white p-6 rounded-[30px] shadow-xl border border-border/50 flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3 px-4 py-2 bg-primary/5 text-primary rounded-xl font-black text-sm">
              <Filter size={18} /> تصفية حسب:
            </div>
            
            <div className="flex flex-wrap gap-3">
              {[
                { label: "نوع العمل", options: ["دوام كامل", "دوام جزئي", "عمل حر"] },
                { label: "نطاق الراتب", options: ["أقل من 5000 ر.س", "5000 - 10000 ر.س", "10000+ ر.س"] },
                { label: "الخبرة", options: ["مبتدئ", "متوسط", "خبير"] },
                { label: "تاريخ النشر", options: ["اليوم", "هذا الأسبوع", "هذا الشهر"] }
              ].map((filter, index) => (
                <Button key={index} variant="outline" className="rounded-xl h-12 border-border/50 font-bold gap-2 text-muted-foreground hover:bg-muted">
                  {filter.label} <ChevronDown size={14} />
                </Button>
              ))}
            </div>

            <div className="mr-auto flex items-center gap-4">
              <div className="hidden lg:flex bg-muted p-1 rounded-xl">
                <button className="p-2 bg-white rounded-lg shadow-sm text-primary"><LayoutGrid size={18} /></button>
                <button className="p-2 text-muted-foreground"><List size={18} /></button>
              </div>
              <Button variant="ghost" className="text-secondary font-black hover:bg-secondary/5">مسح الكل</Button>
            </div>
          </div>
        </div>

        {/* Jobs Grid Display */}
        <section className="container mx-auto px-4 py-16 space-y-12">
          <div className="flex items-center justify-between">
            <p className="text-muted-foreground font-bold">وجدنا <span className="text-primary font-black text-2xl">1,248</span> وظيفة متاحة تناسب مهاراتك</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.map(job => (
              <div key={job.id} className="bg-white rounded-[40px] border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col h-full">
                <div className="p-8 space-y-6 flex-1">
                  <div className="flex justify-between items-start">
                    <div className="relative group/logo">
                      <div className="absolute -inset-2 bg-secondary/30 blur-xl rounded-full scale-0 group-hover:scale-125 transition-transform duration-500 opacity-0 group-hover:opacity-100"></div>
                      
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-border/50 bg-white shrink-0 shadow-md relative z-10 transition-all duration-500 group-hover:shadow-xl group-hover:border-secondary/20 flex items-center justify-center p-2">
                        <Image src={job.logo} alt={job.company} width={64} height={64} className="object-contain w-full h-full" />
                      </div>
                    </div>
                    
                    <Button variant="ghost" size="icon" className="rounded-xl hover:bg-red-50 hover:text-red-500 transition-colors">
                      <Bookmark size={22} />
                    </Button>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-green-600 bg-green-50 w-fit px-3 py-1 rounded-lg text-xs font-black">
                      <Sparkles size={12} /> توافق {job.match}%
                    </div>
                    <h3 className="text-xl font-black text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2 h-[3.5rem]">{job.title}</h3>
                    <div className="flex flex-col gap-2 pt-2">
                      <span className="flex items-center gap-2 text-muted-foreground font-bold text-sm"><Building2 size={16} className="text-primary/40" /> {job.company}</span>
                      <span className="flex items-center gap-2 text-muted-foreground font-bold text-sm"><MapPin size={16} className="text-primary/40" /> {job.location}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {job.skills.slice(0, 3).map(skill => (
                      <Badge key={skill} variant="secondary" className="rounded-lg px-3 py-1 bg-primary/5 text-primary border-none font-bold text-[10px] uppercase tracking-wider">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="px-8 py-6 bg-[#F8F7FA] border-t border-border/50 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-muted-foreground">
                    <div className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</div>
                    <div className="flex items-center gap-1"><Clock size={14} /> {job.posted}</div>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <div className="font-black text-primary text-lg">{job.salary}</div>
                    <Button asChild className="rounded-xl px-6 bg-primary font-black shadow-lg shadow-primary/10 text-white">
                      <Link href={`/jobs/${job.id}`}>التفاصيل</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-12 text-center">
            <Button variant="outline" className="rounded-2xl h-16 px-12 border-2 border-primary text-primary text-lg font-black hover:bg-primary hover:text-white transition-all shadow-xl shadow-primary/5">
              عرض المزيد من الوظائف
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
