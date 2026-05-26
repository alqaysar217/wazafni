
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  CheckCircle2, 
  Sparkles, 
  Rocket, 
  Zap, 
  ArrowRight, 
  Star, 
  ShieldCheck,
  BrainCircuit,
  FileText,
  Building
} from 'lucide-react';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ServiceDetailsPage() {
  const params = useParams();
  const serviceId = params.id as string;

  const servicesData = {
    'service-cv': {
      title: "بناء السيرة الذاتية الذكية",
      desc: "نظام يساعدك على إنشاء سيرة ذاتية احترافية متوافقة مع أنظمة الـ ATS العالمية لزيادة فرص قبولك بنسبة 300%.",
      image: PlaceHolderImages.find(img => img.id === 'service-cv')?.imageUrl,
      icon: <FileText size={40} />,
      benefits: ["تنسيقات عصرية معتمدة عالمياً", "تحليل الكلمات المفتاحية الذكية", "تحميل بصيغة PDF قابلة للقراءة آلياً", "تحسين الترتيب في قواعد بيانات التوظيف"],
      process: ["اختر نموذجاً", "أدخل بياناتك", "احصل على اقتراحات التحسين", "حمل الملف النهائي"]
    },
    'service-ai': {
      title: "المطابقة الوظيفية (AI)",
      desc: "نقوم بتحليل مهاراتك وخبراتك وترشيحك تلقائياً للوظائف التي تناسبك تماماً باستخدام خوارزمياتنا المتقدمة.",
      image: PlaceHolderImages.find(img => img.id === 'service-ai')?.imageUrl,
      icon: <BrainCircuit size={40} />,
      benefits: ["توفير الوقت في البحث اليدوي", "اكتشاف فرص قد لا تلاحظها", "زيادة نسبة النجاح في المقابلات", "تقارير توافق مئوية دقيقة"],
      process: ["أكمل ملفك الشخصي", "فعل ميزة المطابقة الذكية", "استلم تنبيهات يومية", "تقدم بضغطة واحدة"]
    },
    'service-business': {
      title: "حلول التوظيف للمؤسسات",
      desc: "نساعد الشركات في الوصول إلى أفضل الكفاءات اليمنية وإدارة عملية التوظيف بكامل مراحلها بكفاءة عالية.",
      image: PlaceHolderImages.find(img => img.id === 'service-business')?.imageUrl,
      icon: <Building size={40} />,
      benefits: ["تصفية آلية للمتقدمين", "نظام إدارة مقابلات متكامل", "تقييم الكفاءات بالذكاء الاصطناعي", "لوحة تحكم لإدارة العلامة التجارية"],
      process: ["سجل كصاحب عمل", "انشر أول وظيفة", "استعرض المرشحين المصفين", "وظف الأفضل"]
    }
  };

  const currentService = servicesData[serviceId as keyof typeof servicesData] || servicesData['service-cv'];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary pt-24 pb-40 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10 text-center space-y-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto text-secondary mb-6 border border-white/20">
              {currentService.icon}
            </div>
            <h1 className="text-5xl lg:text-7xl font-black font-headline leading-tight">{currentService.title}</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto font-medium leading-relaxed">
              {currentService.desc}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 -mt-24 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* Left: Visualization & Process */}
            <div className="space-y-12 order-2 lg:order-1">
              <div className="relative h-[500px] w-full rounded-[60px] overflow-hidden shadow-2xl border-8 border-white">
                <Image src={currentService.image || ''} alt={currentService.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              </div>

              <div className="space-y-8">
                <h3 className="text-3xl font-black text-primary">كيف يعمل النظام؟</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {currentService.process.map((step, i) => (
                    <div key={i} className="bg-white p-8 rounded-[35px] border border-border/50 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow">
                      <div className="w-12 h-12 bg-secondary text-white rounded-2xl flex items-center justify-center text-xl font-black shrink-0">
                        {i + 1}
                      </div>
                      <p className="font-bold text-primary">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Benefits & Order Form */}
            <div className="space-y-8 order-1 lg:order-2">
              <div className="bg-white rounded-[50px] p-12 border border-border/50 shadow-2xl space-y-10">
                <div className="space-y-6">
                  <h3 className="text-3xl font-black text-primary flex items-center gap-4">
                    <Star className="text-secondary" fill="currentColor" /> المميزات والفوائد
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {currentService.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-center gap-4 text-lg font-bold text-muted-foreground">
                        <div className="w-8 h-8 bg-green-500/10 text-green-600 rounded-full flex items-center justify-center shrink-0">
                          <CheckCircle2 size={18} />
                        </div>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-10 border-t space-y-6">
                  <div className="flex items-center gap-4 text-primary bg-primary/5 p-6 rounded-3xl border border-primary/10">
                    <ShieldCheck size={32} className="shrink-0" />
                    <div>
                      <p className="font-black text-lg">ضمان الجودة والنتائج</p>
                      <p className="text-sm font-medium text-primary/60">نضمن لك تحسناً ملحوظاً في تجربة التوظيف الخاصة بك.</p>
                    </div>
                  </div>
                  
                  <Button className="w-full h-20 rounded-[25px] bg-primary hover:bg-secondary text-2xl font-black shadow-xl shadow-primary/20 transition-all gap-4">
                    بدء استخدام الخدمة الآن <ArrowRight size={24} className="rtl:rotate-180" />
                  </Button>
                  
                  <p className="text-center text-sm font-bold text-muted-foreground">لا يتطلب دفع مسبق للمميزات الأساسية</p>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-8 opacity-40 grayscale">
                <Zap size={40} />
                <Rocket size={40} />
                <CheckCircle2 size={40} />
              </div>
            </div>

          </div>
        </section>

        {/* Comparison Section (Optional but good) */}
        <section className="py-24 bg-primary text-white overflow-hidden relative">
          <div className="container mx-auto px-4 text-center space-y-12 relative z-10">
            <h2 className="text-4xl font-black font-headline">انضم إلى المستقبل الرقمي</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
              أكثر من 15,000 متخصص في اليمن يستخدمون خدماتنا الذكية لتطوير مساراتهم المهنية.
            </p>
            <div className="flex justify-center gap-10">
              <div className="text-center space-y-2">
                <p className="text-5xl font-black text-secondary">98%</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">نسبة الرضا</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-5xl font-black text-secondary">+300%</p>
                <p className="text-white/60 font-bold uppercase tracking-widest text-xs">فرص المقابلات</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
