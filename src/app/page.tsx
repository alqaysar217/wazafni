
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
  Quote
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');
  const companies = PlaceHolderImages.filter(img => img.id.startsWith('company-'));
  
  const testimonials = [
    {
      name: "أحمد المقطري",
      role: "مطور برمجيات",
      content: "بفضل وظفني، وجدت الوظيفة التي كنت أحلم بها في أقل من أسبوعين. النظام الذكي ساعدني كثيراً في تحسين سيرتي الذاتية.",
      avatar: PlaceHolderImages.find(img => img.id === 'user-1')?.imageUrl
    },
    {
      name: "سارة العبسي",
      role: "مديرة تسويق",
      content: "أفضل منصة توظيف في اليمن بدون منازع. السهولة في التعامل والاحترافية في عرض الوظائف تجعل التجربة رائعة.",
      avatar: PlaceHolderImages.find(img => img.id === 'user-2')?.imageUrl
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main>
        {/* Hero Section */}
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
                <Button size="lg" className="rounded-lg h-14 px-12 bg-primary font-bold w-full md:w-auto">
                  بحث
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Trusted By Section (Company Logos) */}
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto px-4">
            <p className="text-center text-sm font-bold text-muted-foreground uppercase tracking-widest mb-10">شركاء النجاح - شركات تثق بنا</p>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all">
              {companies.map((company, index) => (
                <div key={index} className="relative w-40 h-12">
                  <Image src={company.imageUrl} alt={company.description} fill className="object-contain" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
              <h2 className="text-4xl font-black font-headline text-primary">لماذا تختار وظفني؟</h2>
              <p className="text-lg text-muted-foreground font-medium">نجمع بين التكنولوجيا المتطورة والخبرة المحلية لتوفير أفضل تجربة توظيف.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                {
                  title: "مطابقة ذكية",
                  desc: "نظام ذكاء اصطناعي يقوم بتحليل مهاراتك وربطها بالوظائف الأكثر توافقاً.",
                  icon: <Sparkles className="w-10 h-10" />,
                  bg: "bg-blue-50 text-blue-600"
                },
                {
                  title: "تطوير السيرة الذاتية",
                  desc: "أدوات متقدمة لتحسين سيرتك الذاتية لتتوافق مع أنظمة ATS العالمية.",
                  icon: <TrendingUp className="w-10 h-10" />,
                  bg: "bg-indigo-50 text-indigo-600"
                },
                {
                  title: "فرص عالمية",
                  desc: "نربطك بشركات يمنية ودولية تبحث عن خبراتك الفريدة.",
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

        {/* Testimonials Section */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3 space-y-6 text-center lg:text-right">
                <h2 className="text-4xl font-black font-headline">ماذا يقولون عنا؟</h2>
                <p className="text-xl text-white/70 font-medium">قصص نجاح حقيقية بدأت من هنا.</p>
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
                      <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary">
                        {t.avatar && <Image src={t.avatar} alt={t.name} width={48} height={48} className="object-cover" />}
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

        {/* CTA Section */}
        <section className="py-24 bg-accent/30">
          <div className="container mx-auto px-4">
            <div className="bg-white rounded-3xl p-16 text-center shadow-xl border border-primary/5 space-y-8 max-w-5xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-black font-headline text-primary">جاهز للخطوة القادمة؟</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                انضم الآن لآلاف المتخصصين وابدأ رحلتك المهنية مع أقوى منصة توظيف في اليمن.
              </p>
              <div className="flex flex-wrap justify-center gap-5 pt-4">
                <Button size="lg" className="rounded-lg h-16 px-12 bg-primary text-xl font-bold">
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
