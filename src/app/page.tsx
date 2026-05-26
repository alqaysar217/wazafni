
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Sparkles, 
  Zap, 
  Users, 
  TrendingUp, 
  ChevronRight,
  ShieldCheck,
  Building2,
  BrainCircuit
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Cinematic Hero Section */}
        <section className="relative pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-br from-primary/5 via-background to-accent/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in-up">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                  <Sparkles size={16} />
                  <span>مدعوم بالذكاء الاصطناعي لأول مرة في اليمن</span>
                </div>
                <h1 className="text-5xl lg:text-7xl font-extrabold font-headline leading-[1.15] text-foreground">
                  مستقبلك المهني <br />
                  <span className="text-primary italic">يبدأ من هنا.</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  اكتشف آلاف الفرص الوظيفية في كبرى الشركات اليمنية والعربية. استخدم أدواتنا الذكية لتحسين سيرتك الذاتية والوصول لهدفك أسرع.
                </p>
                
                {/* Smart Search Bar */}
                <div className="premium-card p-2 flex flex-col md:flex-row items-stretch gap-2 max-w-2xl bg-white/80 backdrop-blur-xl">
                  <div className="flex-1 flex items-center px-4 gap-3 border-b md:border-b-0 md:border-l">
                    <Search className="text-primary" size={20} />
                    <Input 
                      placeholder="المسمى الوظيفي، كلمات مفتاحية..." 
                      className="border-none shadow-none focus-visible:ring-0 text-md h-12"
                    />
                  </div>
                  <div className="flex-1 flex items-center px-4 gap-3">
                    <MapPin className="text-primary" size={20} />
                    <Input 
                      placeholder="المدينة (صنعاء، عدن، تعز...)" 
                      className="border-none shadow-none focus-visible:ring-0 text-md h-12"
                    />
                  </div>
                  <Button size="lg" className="rounded-2xl h-14 px-8 bg-primary hover:bg-primary/90 text-md font-bold">
                    ابحث الآن
                  </Button>
                </div>
                
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-3 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                        <Image 
                          src={`https://picsum.photos/seed/user${i}/100/100`} 
                          alt="user" 
                          width={40} 
                          height={40}
                        />
                      </div>
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-primary flex items-center justify-center text-white text-[10px] font-bold">
                      +10k
                    </div>
                  </div>
                  <p className="text-sm font-medium text-muted-foreground">
                    أكثر من <span className="text-foreground font-bold">10,000 متخصص</span> انضموا إلينا هذا الشهر
                  </p>
                </div>
              </div>
              
              <div className="relative hidden lg:block">
                <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-700">
                  <Image 
                    src={heroImg?.imageUrl || ''} 
                    alt="Hero Image"
                    width={800}
                    height={600}
                    className="object-cover"
                    data-ai-hint="business workspace"
                  />
                </div>
                {/* Floating Cards */}
                <div className="absolute -top-10 -right-10 glass p-6 rounded-2xl shadow-xl animate-bounce duration-[3000ms] z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      <ShieldCheck />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">تم القبول في</p>
                      <p className="font-bold">بنك اليمن والكويت</p>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-10 -left-10 glass p-6 rounded-2xl shadow-xl animate-pulse z-20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      <Zap />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground font-medium">درجة التوافق</p>
                      <p className="font-bold text-primary">98% ذكاء اصطناعي</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Companies */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 text-center space-y-12">
            <h3 className="text-muted-foreground font-medium">تثق بنا كبرى الشركات اليمنية والعالمية</h3>
            <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all">
              {['MTN', 'Yemen Mobile', 'SabaFon', 'Kuraimi Bank', 'CAC Bank', 'Tadhamon Bank'].map(brand => (
                <div key={brand} className="text-2xl font-black text-foreground/40 font-headline uppercase tracking-widest">{brand}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 space-y-16">
            <div className="max-w-3xl space-y-4">
              <h2 className="text-4xl font-extrabold font-headline">لماذا تختار <span className="text-primary italic">وظفني؟</span></h2>
              <p className="text-xl text-muted-foreground">نحن لسنا مجرد موقع وظائف، نحن رفيقك في رحلتك المهنية.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "مطابقة ذكية AI",
                  desc: "خوارزميات متطورة تحلل سيرتك الذاتية وتقترح عليك الوظائف الأكثر ملاءمة لمهاراتك بدقة 99%.",
                  icon: <BrainCircuit className="w-8 h-8" />,
                  color: "bg-purple-50 text-purple-600"
                },
                {
                  title: "تحليل السيرة الذاتية",
                  desc: "احصل على تقرير مفصل لنقاط القوة والضعف في سيرتك الذاتية لتحسين فرص ظهورك في أنظمة ATS العالمية.",
                  icon: <TrendingUp className="w-8 h-8" />,
                  color: "bg-blue-50 text-blue-600"
                },
                {
                  title: "شركات موثوقة",
                  desc: "نحن نضمن جودة الوظائف المنشورة ونتعامل فقط مع الشركات المسجلة رسمياً والباحثة عن الكفاءات الحقيقية.",
                  icon: <Building2 className="w-8 h-8" />,
                  color: "bg-green-50 text-green-600"
                }
              ].map((feature, i) => (
                <div key={i} className="premium-card p-8 space-y-6 group">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${feature.color} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold font-headline">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-primary text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              {[
                { label: "وظيفة شاغرة", value: "25,000+" },
                { label: "شركة مسجلة", value: "1,200+" },
                { label: "تم توظيفهم", value: "18,000+" },
                { label: "زيارة شهرية", value: "500k+" }
              ].map((stat, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-5xl font-black font-headline">{stat.value}</p>
                  <p className="text-primary-foreground/80 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Banner */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="rounded-[3rem] bg-gradient-to-r from-primary to-secondary p-12 md:p-24 text-center space-y-10 relative overflow-hidden">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
               <h2 className="text-4xl md:text-6xl font-black font-headline text-white max-w-4xl mx-auto leading-tight">
                 هل أنت مستعد لاتخاذ الخطوة التالية في مسيرتك؟
               </h2>
               <div className="flex flex-wrap justify-center gap-6">
                 <Button size="lg" className="bg-white text-primary hover:bg-white/90 px-12 h-16 rounded-full text-xl font-bold shadow-xl">
                   سجل كباحث عن عمل
                 </Button>
                 <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-12 h-16 rounded-full text-xl font-bold">
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
