
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  MapPin, 
  Sparkles, 
  TrendingUp, 
  Building2,
  Star,
  Quote,
  Briefcase,
  Clock,
  DollarSign,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const partners = PlaceHolderImages.filter(img => img.id.startsWith('company-') && img.id.endsWith('-logo'));
  
  const getPlaceholder = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || "";

  const featuredJobs = [
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
    }
  ];

  const featuredCompanies = [
    {
      id: 1,
      name: "مجموعة هائل سعيد أنعم",
      category: "مجموعة شركات متنوعة",
      location: "تعز، اليمن",
      employees: "20,000+",
      jobs: 15,
      rating: 4.9,
      logo: getPlaceholder('company-hsa-logo')
    },
    {
      id: 2,
      name: "بنك الكريمي الإسلامي",
      category: "خدمات مالية وبنكية",
      location: "صنعاء، اليمن",
      employees: "2,500+",
      jobs: 8,
      rating: 4.7,
      logo: getPlaceholder('company-kuraimi-logo')
    },
    {
      id: 3,
      name: "يمن تيك للحلول الرقمية",
      category: "تقنية معلومات",
      location: "ريموت / صنعاء",
      employees: "50-100",
      jobs: 4,
      rating: 4.8,
      logo: getPlaceholder('company-ytech-logo')
    }
  ];

  const testimonials = [
    {
      name: "أحمد المقطري",
      role: "مطور برمجيات",
      content: "بفضل وظفني، وجدت الوظيفة التي كنت أحلم بها في أقل من أسبوعين. النظام الذكي ساعدني كثيراً في تحسين سيرتي الذاتية.",
      avatar: "https://picsum.photos/seed/u1/100/100"
    },
    {
      name: "سارة العبسي",
      role: "مديرة تسويق",
      content: "أفضل منصة توظيف في اليمن بدون منازع. السهولة في التعامل والاحترافية في عرض الوظائف تجعل التجربة رائعة.",
      avatar: "https://picsum.photos/seed/u2/100/100"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Section 1: Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImg?.imageUrl && (
              <Image 
                src={heroImg.imageUrl} 
                alt="Professional Background"
                fill
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 hero-overlay z-10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-bold">
                <Sparkles size={16} className="text-secondary" />
                <span>المنصة رقم #1 للتوظيف الذكي في اليمن</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black font-headline leading-[1.2] text-white">
                استثمر مهاراتك <br />
                في المكان الصحيح.
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
                نحن نربط الكفاءات اليمنية الطموحة بأفضل الفرص المهنية محلياً ودولياً باستخدام تقنيات الذكاء الاصطناعي.
              </p>
              
              <div className="bg-white p-3 rounded-xl shadow-2xl flex flex-col md:flex-row items-center gap-3 max-w-3xl">
                <div className="flex-1 flex items-center px-4 gap-3 border-l-0 md:border-l h-14 w-full">
                  <Search className="text-muted-foreground" size={20} />
                  <Input 
                    placeholder="المسمى الوظيفي أو الشركة" 
                    className="border-none shadow-none focus-visible:ring-0 text-md font-semibold"
                  />
                </div>
                <div className="flex-1 flex items-center px-4 gap-3 h-14 w-full">
                  <MapPin className="text-muted-foreground" size={20} />
                  <Input 
                    placeholder="المدينة أو المنطقة" 
                    className="border-none shadow-none focus-visible:ring-0 text-md font-semibold"
                  />
                </div>
                <Button size="lg" className="rounded-lg h-14 px-12 bg-primary font-bold w-full md:w-auto text-white">
                  بحث
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why Choose Us */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl font-black font-headline text-primary">لماذا تختار وظفني؟</h2>
              <p className="text-lg text-muted-foreground font-medium">نجمع بين التكنولوجيا المتطورة والخبرة المحلية لتوفير أفضل تجربة توظيف في اليمن.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "مطابقة ذكية",
                  desc: "نظام ذكاء اصطناعي يقوم بتحليل مهاراتك وربطها بالوظائف الأكثر توافقاً مع طموحاتك.",
                  icon: <Sparkles className="w-10 h-10" />,
                  bg: "bg-blue-50 text-blue-600"
                },
                {
                  title: "تطوير السيرة الذاتية",
                  desc: "أدوات متقدمة لتحسين سيرتك الذاتية لتتوافق مع أنظمة ATS العالمية وزيادة فرص قبولك بنسبة 300%.",
                  icon: <TrendingUp className="w-10 h-10" />,
                  bg: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "فرص حصرية",
                  desc: "نربطك مباشرة بكبرى الشركات اليمنية والدولية التي تبحث عن خبراتك الفريدة.",
                  icon: <Building2 className="w-10 h-10" />,
                  bg: "bg-emerald-50 text-emerald-600"
                }
              ].map((feature, i) => (
                <div key={i} className="p-10 rounded-3xl border bg-[#F8F7FA] hover:bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-8 ${feature.bg} group-hover:scale-110 transition-transform shadow-sm`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-4 text-primary">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Latest Jobs */}
        <section className="py-24 bg-[#F8F7FA]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-black font-headline text-primary">أحدث الوظائف الشاغرة</h2>
                <p className="text-lg text-muted-foreground font-medium">اكتشف أحدث الفرص المتاحة اليوم في مختلف التخصصات.</p>
              </div>
              <Button asChild variant="outline" className="rounded-xl border-primary text-primary font-bold px-8 h-12">
                <Link href="/jobs" className="flex items-center gap-2">عرض كل الوظائف <ChevronRight size={18} className="rtl:rotate-180" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-[40px] border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group overflow-hidden flex flex-col h-full">
                  <div className="p-8 space-y-6 flex-1">
                    <div className="flex justify-between items-start">
                      <div className="w-16 h-16 rounded-2xl overflow-hidden border border-border/50 bg-white shrink-0 shadow-sm group-hover:scale-110 transition-transform flex items-center justify-center p-2">
                        <Image src={job.logo} alt={job.company} width={64} height={64} className="object-contain w-full h-full" />
                      </div>
                      <div className="flex items-center gap-2 text-green-600 bg-green-50 w-fit px-3 py-1 rounded-lg text-xs font-black">
                        <Sparkles size={12} /> توافق {job.match}%
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xl font-black text-primary leading-snug group-hover:text-secondary transition-colors line-clamp-2 h-[3.5rem]">{job.title}</h3>
                      <div className="flex flex-col gap-2 pt-2">
                        <span className="flex items-center gap-2 text-muted-foreground font-bold text-sm"><Building2 size={16} className="text-primary/40" /> {job.company}</span>
                        <span className="flex items-center gap-2 text-muted-foreground font-bold text-sm"><MapPin size={16} className="text-primary/40" /> {job.location}</span>
                      </div>
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
          </div>
        </section>

        {/* Section 4: Featured Companies */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-center md:text-right">
              <div className="space-y-4">
                <h2 className="text-4xl font-black font-headline text-primary">شركات يمنية رائدة</h2>
                <p className="text-lg text-muted-foreground font-medium">تعاون مع أفضل المؤسسات التي تبحث عن كفاءات مثلك.</p>
              </div>
              <Button asChild variant="outline" className="rounded-xl border-primary text-primary font-bold px-8 h-12">
                <Link href="/companies">اكتشف كل الشركات <ChevronRight size={18} className="rtl:rotate-180" /></Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {featuredCompanies.map(company => (
                <div key={company.id} className="bg-white rounded-[40px] p-10 border border-border/50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all group overflow-hidden relative">
                  <div className="absolute top-6 left-6 flex items-center gap-1 px-3 py-1 bg-secondary/10 text-secondary rounded-full font-bold text-sm">
                    <Star size={14} fill="currentColor" /> {company.rating}
                  </div>
                  
                  <div className="flex flex-col items-center text-center space-y-6">
                    <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-[#F8F7FA] shadow-inner mb-2 flex items-center justify-center p-3 bg-white">
                      <Image src={company.logo} alt={company.name} width={96} height={96} className="object-contain" />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="text-2xl font-black text-primary group-hover:text-secondary transition-colors leading-tight h-[3.5rem] flex items-center justify-center">{company.name}</h3>
                      <span className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{company.category}</span>
                    </div>

                    <div className="w-full grid grid-cols-2 gap-4 pt-6 border-t border-border/50">
                      <div className="space-y-1">
                        <p className="text-xs font-bold text-muted-foreground uppercase">الموقع</p>
                        <p className="font-bold text-primary flex items-center justify-center gap-1 text-xs"><MapPin size={12} /> {company.location.split('،')[0]}</p>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-secondary flex items-center justify-center gap-1 text-xs"><Briefcase size={12} /> {company.jobs} شاغرة</p>
                      </div>
                    </div>

                    <div className="w-full pt-4">
                      <Button asChild variant="outline" className="w-full h-14 rounded-2xl border-2 border-primary text-primary hover:bg-primary hover:text-white font-black text-lg gap-2">
                        <Link href={`/companies/${company.id}`}>عرض الملف <ArrowUpRight size={18} /></Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5: Success Partners (Logos Only) */}
        <section className="py-24 bg-[#F8F7FA] border-b">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-bold text-muted-foreground uppercase tracking-widest mb-16">شركاء النجاح - مؤسسات تثق بنا</p>
            <div className="flex flex-wrap justify-center items-center gap-16 lg:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {partners.map((partner, index) => (
                <div key={index} className="relative w-48 h-20 group">
                  <Image 
                    src={partner.imageUrl} 
                    alt={partner.description} 
                    fill 
                    className="object-contain" 
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 6: Testimonials */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3 space-y-6 text-center lg:text-right">
                <h2 className="text-4xl font-black font-headline">ماذا يقولون عنا؟</h2>
                <p className="text-xl text-white/70 font-medium">قصص نجاح حقيقية بدأت مع منصة وظفني.</p>
                <div className="flex justify-center lg:justify-start gap-2 text-secondary">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" size={20} />)}
                </div>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 space-y-6 relative">
                    <Quote className="absolute top-6 left-6 text-white/10 w-16 h-16" />
                    <p className="text-lg leading-relaxed font-medium relative z-10">{t.content}</p>
                    <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary shrink-0">
                        <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover" />
                      </div>
                      <div>
                        <h4 className="font-bold">{t.name}</h4>
                        <p className="text-sm text-white/60">{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: CTA */}
        <section className="py-24 bg-[#F8F7FA]">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-[40px] p-12 md:p-20 text-center shadow-2xl shadow-primary/5 border border-primary/5 space-y-10 max-w-5xl mx-auto">
              <div className="w-20 h-20 bg-primary/5 rounded-3xl flex items-center justify-center text-primary mx-auto mb-6">
                <Sparkles size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-black font-headline text-primary">جاهز للخطوة القادمة؟</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                انضم الآن لآلاف المتخصصين وابدأ رحلتك المهنية مع أقوى منصة توظيف ذكية في اليمن.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-4">
                <Button size="lg" className="rounded-2xl h-16 px-12 bg-primary text-xl font-bold shadow-lg shadow-primary/20 text-white">
                  سجل كباحث عن عمل
                </Button>
                <Button size="lg" variant="outline" className="rounded-2xl h-16 px-12 border-primary text-primary text-xl font-bold hover:bg-primary/5">
                  سجل كصاحب عمل
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
