
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
  Heart,
  Sparkles,
  Building2,
  Bookmark,
  LayoutGrid,
  List
} from 'lucide-react';
import Image from 'next/image';

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "مطور برمجيات أول (React & Node.js)",
      company: "شركة يمن تيك للحلول الرقمية",
      location: "صنعاء - ريموت",
      salary: "$1,500 - $2,500",
      type: "دوام كامل",
      posted: "منذ يومين",
      match: 95,
      skills: ["React", "TypeScript", "Node.js"],
      logo: "https://picsum.photos/seed/tech1/100/100"
    },
    {
      id: 2,
      title: "أخصائي تسويق رقمي",
      company: "مجموعة هائل سعيد أنعم",
      location: "تعز - المقر الرئيسي",
      salary: "800k - 1.2M ريال",
      type: "دوام كامل",
      posted: "منذ 4 ساعات",
      match: 88,
      skills: ["SEO", "Content Strategy", "Ads"],
      logo: "https://picsum.photos/seed/hsa/100/100"
    },
    {
      id: 3,
      title: "مدير مشاريع إنشائية",
      company: "شركة تهامة للهندسة والمقاولات",
      location: "عدن - كريتر",
      salary: "$2,000 - $3,500",
      type: "عقد",
      posted: "منذ أسبوع",
      match: 72,
      skills: ["PMP", "Project Mgmt", "Civil Eng"],
      logo: "https://picsum.photos/seed/eng/100/100"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        {/* Search Header */}
        <div className="bg-primary p-12 lg:p-16 rounded-[40px] shadow-2xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10 space-y-8">
            <h1 className="text-4xl lg:text-5xl font-black text-white text-center">ابحث عن فرصة أحلامك</h1>
            <div className="bg-white p-3 flex flex-col lg:flex-row gap-4 shadow-2xl rounded-3xl border-none max-w-5xl mx-auto">
              <div className="flex-1 flex items-center px-4 gap-3 bg-muted/30 rounded-2xl h-16">
                <Search className="text-primary/40" size={24} />
                <Input placeholder="المسمى الوظيفي..." className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold" />
              </div>
              <div className="flex-1 flex items-center px-4 gap-3 bg-muted/30 rounded-2xl h-16">
                <MapPin className="text-primary/40" size={24} />
                <Input placeholder="المدينة أو المنطقة..." className="border-none bg-transparent shadow-none focus-visible:ring-0 text-lg font-bold" />
              </div>
              <Button size="lg" className="rounded-2xl h-16 px-12 bg-primary font-black text-xl shadow-lg shadow-primary/20">بحث</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Enhanced Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-[40px] border border-border/50 shadow-sm space-y-10">
              <div className="flex items-center justify-between border-b border-border/50 pb-6">
                <h3 className="text-xl font-black flex items-center gap-2"><Filter size={20} /> الفلاتر</h3>
                <button className="text-sm text-secondary font-black hover:underline transition-all">مسح</button>
              </div>
              
              <div className="space-y-6">
                <h4 className="font-black text-xs uppercase text-muted-foreground tracking-widest">نوع العمل</h4>
                <div className="space-y-4">
                  {["دوام كامل", "دوام جزئي", "عمل حر", "تدريب"].map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group hover:text-primary transition-colors">
                      <div className="w-6 h-6 rounded-lg border-2 border-border group-hover:border-primary transition-all flex items-center justify-center">
                        <div className="w-3 h-3 bg-primary rounded-sm opacity-0 group-aria-checked:opacity-100"></div>
                      </div>
                      <span className="text-md font-bold">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <h4 className="font-black text-xs uppercase text-muted-foreground tracking-widest">نطاق الراتب</h4>
                <div className="pt-4 space-y-4">
                  <div className="h-3 bg-muted rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl cursor-pointer"></div>
                    <div className="absolute right-[50%] top-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-xl cursor-pointer"></div>
                    <div className="absolute right-0 left-[50%] h-full bg-secondary rounded-full"></div>
                  </div>
                  <div className="flex justify-between text-xs font-black text-muted-foreground uppercase">
                    <span>$10,000+</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>

              <Button className="w-full h-14 rounded-2xl bg-primary/5 text-primary hover:bg-primary hover:text-white font-black transition-all">تطبيق الفلاتر</Button>
            </div>
          </aside>

          {/* World-Class Job Listings */}
          <div className="lg:col-span-9 space-y-8">
            <div className="flex items-center justify-between bg-white p-6 rounded-[30px] border border-border/50">
              <p className="text-muted-foreground font-bold">وجدنا <span className="text-primary font-black text-lg">1,248</span> وظيفة متاحة</p>
              <div className="flex items-center gap-4">
                <div className="flex bg-muted p-1 rounded-xl">
                  <button className="p-2 bg-white rounded-lg shadow-sm text-primary"><List size={18} /></button>
                  <button className="p-2 text-muted-foreground"><LayoutGrid size={18} /></button>
                </div>
                <div className="flex items-center gap-2 text-sm font-black text-primary bg-primary/5 px-4 py-2 rounded-xl">
                  <span>الأحدث</span>
                  <ChevronDown size={14} />
                </div>
              </div>
            </div>

            {jobs.map(job => (
              <div key={job.id} className="bg-white p-8 lg:p-10 rounded-[40px] border border-border/50 flex flex-col md:flex-row gap-10 items-start hover:shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] transition-all duration-500 group relative">
                
                <div className="w-24 h-24 rounded-3xl overflow-hidden border border-border/50 bg-[#F8F7FA] shrink-0 shadow-inner group-hover:scale-105 transition-transform">
                  <Image src={job.logo} alt={job.company} width={96} height={96} className="object-cover w-full h-full" />
                </div>
                
                <div className="flex-1 space-y-6">
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                    <div>
                      <h3 className="text-3xl font-black text-primary hover:text-secondary transition-colors cursor-pointer mb-2 leading-tight">{job.title}</h3>
                      <div className="flex items-center gap-4 text-muted-foreground font-bold">
                        <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg text-sm"><Building2 size={16} /> {job.company}</span>
                        <span className="flex items-center gap-2 bg-muted/50 px-3 py-1 rounded-lg text-sm"><MapPin size={16} /> {job.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2.5 rounded-2xl border border-green-100 shadow-sm">
                      <Sparkles size={16} className="animate-pulse" />
                      <span className="text-md font-black">توافق {job.match}%</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-bold border-t border-border/50 pt-6">
                    <div className="flex items-center gap-2"><Briefcase size={18} className="text-primary" /> {job.type}</div>
                    <div className="flex items-center gap-2"><Clock size={18} className="text-primary" /> {job.posted}</div>
                    <div className="flex items-center gap-2 text-foreground font-black bg-[#F8F7FA] px-4 py-1.5 rounded-full"><DollarSign size={18} className="text-green-600" /> {job.salary}</div>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    {job.skills.map(skill => (
                      <Badge key={skill} variant="secondary" className="rounded-xl px-4 py-2 bg-primary/5 text-primary border-none font-black text-xs uppercase tracking-wider">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-4 shrink-0 self-stretch justify-center pt-6 lg:pt-0 lg:border-r lg:pr-10 border-border/50">
                  <Button className="rounded-2xl px-10 bg-primary h-16 text-lg font-black shadow-xl shadow-primary/20 hover:scale-105 transition-all">التقدم للوظيفة</Button>
                  <Button variant="outline" size="icon" className="rounded-2xl border-2 border-border h-16 w-16 hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all">
                    <Bookmark size={24} />
                  </Button>
                </div>
              </div>
            ))}
            
            <Button variant="ghost" className="w-full py-10 text-primary font-black text-xl hover:bg-primary/5 rounded-[40px] border-4 border-dashed border-primary/10 transition-all">
              اكتشف المزيد من الفرص المهنية
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
