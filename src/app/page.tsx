
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
  Building2
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Professional Hero Section */}
        <section className="relative min-h-[85vh] flex items-center py-20 overflow-hidden">
          <div className="absolute inset-0 z-0">
            {heroImg?.imageUrl && (
              <Image 
                src={heroImg.imageUrl} 
                alt="Professional Background"
                fill
                className="object-cover"
                priority
                data-ai-hint="professional workspace"
              />
            )}
            <div className="absolute inset-0 hero-overlay z-10"></div>
          </div>

          <div className="container mx-auto px-4 relative z-20">
            <div className="max-w-4xl space-y-10">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-bold shadow-2xl">
                <Sparkles size={16} className="text-secondary" />
                <span>المنصة رقم #1 للتوظيف الذكي في اليمن</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black font-headline leading-[1.2] text-white">
                استثمر مهاراتك <br />
                في المكان الصحيح.
              </h1>
              
              <p className="text-xl text-white/90 max-w-2xl leading-relaxed font-medium">
                نحن نربط الكفاءات اليمنية الطموحة بأفضل الفرص المهنية محلياً ودولياً باستخدام تقنيات الذكاء الاصطناعي الأكثر تطوراً.
              </p>
              
              {/* Refined Search Bar */}
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
                <Button size="lg" className="rounded-lg h-14 px-12 bg-primary hover:bg-primary/95 text-md font-bold w-full md:w-auto shadow-lg">
                  بحث
                </Button>
              </div>

              <div className="flex items-center gap-10 pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3 rtl:space-x-reverse">
                    {[1, 2, 3, 4].map(i => (
                      <div key={i} className="w-10 h-10 rounded-full border-2 border-primary overflow-hidden shadow-md">
                        <Image src={`https://picsum.photos/seed/user${i}/100/100`} alt="User" width={40} height={40} />
                      </div>
                    ))}
                  </div>
                  <p className="text-sm font-bold text-white/90">
                    انضم لـ <span className="text-white border-b-2 border-secondary">+25,000 متخصص</span> اليوم
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl font-black font-headline text-primary">تميز مهني بلا حدود</h2>
              <p className="text-lg text-muted-foreground font-medium">نقدم لك مجموعة من الأدوات المتكاملة لضمان نجاحك في سوق العمل.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "مطابقة ذكية",
                  desc: "نظام ذكاء اصطناعي يقوم بتحليل مهاراتك وربطها بالوظائف الأكثر توافقاً مع طموحك المهني.",
                  icon: <Sparkles className="w-10 h-10" />,
                  bg: "bg-blue-50 text-blue-600"
                },
                {
                  title: "تطوير السيرة الذاتية",
                  desc: "أدوات متقدمة لتحسين سيرتك الذاتية لتتوافق مع أنظمة ATS العالمية وتزيد فرص قبولك.",
                  icon: <TrendingUp className="w-10 h-10" />,
                  bg: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "شركات موثوقة",
                  desc: "نتعامل مع أفضل المؤسسات والشركات لضمان بيئة عمل احترافية وفرص نمو حقيقية.",
                  icon: <Building2 className="w-10 h-10" />,
                  bg: "bg-emerald-50 text-emerald-600"
                }
              ].map((feature, i) => (
                <div key={i} className="p-10 rounded-2xl border bg-white hover:shadow-xl transition-all duration-300 group">
                  <div className={`w-20 h-20 rounded-xl flex items-center justify-center mb-8 ${feature.bg} group-hover:scale-110 transition-transform`}>
                    {feature.icon}
                  </div>
                  <h4 className="text-2xl font-bold font-headline mb-4 text-primary">{feature.title}</h4>
                  <p className="text-muted-foreground leading-relaxed font-medium">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Stats */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { label: "وظيفة نشطة", value: "1,500+" },
                { label: "شركة مسجلة", value: "800+" },
                { label: "مستخدم مفعل", value: "45,000+" },
                { label: "توظيف شهري", value: "250+" }
              ].map((stat, i) => (
                <div key={i} className="text-white">
                  <p className="text-stat-value text-5xl font-black font-headline mb-2">{stat.value}</p>
                  <p className="text-white/60 font-bold tracking-wide uppercase text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-accent">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl p-16 text-center shadow-xl border border-primary/5 space-y-8 max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-primary">هل أنت مستعد للخطوة التالية؟</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed">
                انضم الآن لآلاف المهنيين الذين وجدوا شغفهم المهني عبر منصة وظفني.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-4">
                <Button size="lg" className="rounded-lg h-16 px-12 bg-primary text-xl font-bold shadow-lg hover:bg-primary/95">
                  سجل كباحث عن عمل
                </Button>
                <Button size="lg" variant="outline" className="rounded-lg h-16 px-12 border-primary text-primary text-xl font-bold hover:bg-primary/5">
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
