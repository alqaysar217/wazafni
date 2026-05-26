
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
  Building2
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
      logo: "https://picsum.photos/seed/tech1/60/60"
    },
    {
      id: 2,
      title: "أخصائي تسويق رقمي",
      company: "مجموعة هائل سعيد أنعم",
      location: "تعز - المقر الرئيسي",
      salary: "800,000 ريال - 1,200,000 ريال",
      type: "دوام كامل",
      posted: "منذ 4 ساعات",
      match: 88,
      logo: "https://picsum.photos/seed/hsa/60/60"
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
      logo: "https://picsum.photos/seed/eng/60/60"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#F8F7FA]">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-12 space-y-12">
        <header className="space-y-6">
          <h1 className="text-4xl font-black font-headline text-primary">استكشف الفرص المتاحة</h1>
          <div className="bg-white p-3 flex flex-col md:flex-row gap-4 shadow-xl rounded-3xl border-none">
            <div className="flex-1 flex items-center px-4 gap-3 bg-muted/30 rounded-2xl h-14">
              <Search className="text-primary" size={20} />
              <Input placeholder="المسمى الوظيفي..." className="border-none bg-transparent shadow-none focus-visible:ring-0" />
            </div>
            <div className="flex-1 flex items-center px-4 gap-3 bg-muted/30 rounded-2xl h-14">
              <MapPin className="text-primary" size={20} />
              <Input placeholder="المدينة أو المنطقة..." className="border-none bg-transparent shadow-none focus-visible:ring-0" />
            </div>
            <Button size="lg" className="rounded-2xl h-14 px-10 bg-primary font-bold">ابحث</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-3 space-y-8">
            <div className="bg-white p-8 rounded-[32px] border shadow-sm space-y-8">
              <div className="flex items-center justify-between border-b pb-4">
                <h3 className="font-bold flex items-center gap-2"><Filter size={18} /> التصفية</h3>
                <button className="text-xs text-primary font-bold">مسح الكل</button>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase text-muted-foreground tracking-wider">نوع الدوام</h4>
                <div className="space-y-3">
                  {["دوام كامل", "دوام جزئي", "عمل حر", "تدريب"].map(type => (
                    <label key={type} className="flex items-center gap-3 cursor-pointer group">
                      <div className="w-5 h-5 rounded border border-border group-hover:border-primary transition-colors"></div>
                      <span className="text-sm font-medium">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-bold text-sm uppercase text-muted-foreground tracking-wider">نطاق الراتب</h4>
                <div className="pt-2">
                  <div className="h-2 bg-muted rounded-full relative">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
                    <div className="absolute right-[40%] top-1/2 -translate-y-1/2 w-4 h-4 bg-primary rounded-full border-2 border-white shadow-md"></div>
                    <div className="absolute right-0 left-[40%] h-full bg-primary/40 rounded-full"></div>
                  </div>
                  <div className="flex justify-between mt-4 text-xs font-bold text-muted-foreground">
                    <span>$10,000</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[32px] bg-primary/5 p-8 border border-primary/10 space-y-4">
              <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                <Sparkles />
              </div>
              <h4 className="text-lg font-bold font-headline">فعل التنبيهات الذكية</h4>
              <p className="text-sm text-muted-foreground font-medium">سنقوم بإرسال تنبيه لك عندما تتوفر وظائف تناسب مهاراتك باستخدام الذكاء الاصطناعي.</p>
              <Button variant="outline" className="w-full rounded-xl border-primary text-primary hover:bg-primary hover:text-white font-bold">تفعيل التنبيهات</Button>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="lg:col-span-9 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-muted-foreground font-medium">تم العثور على <span className="text-foreground font-bold">1,248 وظيفة</span></p>
              <div className="flex items-center gap-2 text-sm font-bold">
                <span>ترتيب حسب:</span>
                <button className="flex items-center gap-1 text-primary">الأحدث <ChevronDown size={14} /></button>
              </div>
            </div>

            {jobs.map(job => (
              <div key={job.id} className="bg-white p-8 rounded-[32px] border flex flex-col md:flex-row gap-6 items-start hover:shadow-xl transition-all duration-300">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border bg-muted shrink-0 shadow-inner">
                  <Image src={job.logo} alt={job.company} width={80} height={80} className="object-cover w-full h-full" />
                </div>
                
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold font-headline hover:text-primary transition-colors cursor-pointer">{job.title}</h3>
                      <p className="text-muted-foreground font-medium flex items-center gap-2 mt-1">
                        <Building2 size={16} /> {job.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-full border border-green-100">
                      <Sparkles size={14} className="animate-pulse" />
                      <span className="text-sm font-bold">توافق {job.match}%</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground font-medium">
                    <div className="flex items-center gap-1"><MapPin size={16} /> {job.location}</div>
                    <div className="flex items-center gap-1"><Briefcase size={16} /> {job.type}</div>
                    <div className="flex items-center gap-1"><Clock size={16} /> {job.posted}</div>
                    <div className="flex items-center gap-1 font-bold text-foreground"><DollarSign size={16} className="text-green-600" /> {job.salary}</div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Node.js", "GraphQL"].map(skill => (
                      <Badge key={skill} variant="secondary" className="rounded-lg px-3 py-1 bg-primary/5 text-primary border-none font-bold">{skill}</Badge>
                    ))}
                  </div>
                </div>

                <div className="flex md:flex-col gap-3 shrink-0 self-stretch justify-center">
                  <Button className="rounded-xl px-8 bg-primary h-12 font-bold shadow-lg shadow-primary/20">التقدم الآن</Button>
                  <Button variant="outline" size="icon" className="rounded-xl border-border h-12 w-12 hover:bg-red-50 hover:text-red-500 hover:border-red-200">
                    <Heart size={20} />
                  </Button>
                </div>
              </div>
            ))}
            
            <Button variant="ghost" className="w-full py-8 text-primary font-bold text-lg hover:bg-primary/5 rounded-[32px] border-2 border-dashed border-primary/20">مشاهدة المزيد من الوظائف</Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
