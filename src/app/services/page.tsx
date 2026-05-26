
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ServicesPage() {
  const services = [
    {
      id: "service-cv",
      title: "بناء السيرة الذاتية الذكية",
      desc: "نظام يساعدك على إنشاء سيرة ذاتية احترافية متوافقة مع أنظمة الـ ATS العالمية لزيادة فرص قبولك بنسبة 300%.",
      features: ["نماذج عصرية ومعتمدة", "كلمات مفتاحية ذكية", "تحليل التوافق الفوري"],
      image: PlaceHolderImages.find(img => img.id === 'service-cv')?.imageUrl
    },
    {
      id: "service-ai",
      title: "المطابقة الوظيفية (AI)",
      desc: "نقوم بتحليل مهاراتك وخبراتك وترشيحك تلقائياً للوظائف التي تناسبك تماماً باستخدام خوارزمياتنا المتقدمة.",
      features: ["تحليل دقيق للمهارات", "تنبيهات فورية ومخصصة", "نسبة توافق مئوية"],
      image: PlaceHolderImages.find(img => img.id === 'service-ai')?.imageUrl
    },
    {
      id: "service-business",
      title: "حلول التوظيف للمؤسسات",
      desc: "نساعد الشركات في الوصول إلى أفضل الكفاءات اليمنية وإدارة عملية التوظيف بكامل مراحلها بكفاءة عالية.",
      features: ["لوحة تحكم احترافية", "تصفية ذكية للمتقدمين", "إدارة المقابلات والتقييم"],
      image: PlaceHolderImages.find(img => img.id === 'service-business')?.imageUrl
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-24 text-center">
          <div className="container mx-auto px-4 space-y-6">
            <h1 className="text-5xl lg:text-6xl font-black leading-tight">حلول مهنية متكاملة</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">نجمع بين الذكاء الاصطناعي والخبرة العملية لتقديم أفضل الخدمات الوظيفية.</p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20">
            {services.map((service, i) => (
              <div key={i} className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16 group`}>
                <div className="lg:w-1/2 relative h-[450px] w-full rounded-[40px] overflow-hidden shadow-2xl border border-border/50">
                  {service.image && (
                    <Image 
                      src={service.image} 
                      alt={service.title} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
                
                <div className="lg:w-1/2 space-y-8">
                  <h3 className="text-4xl font-black text-primary">{service.title}</h3>
                  <p className="text-xl text-muted-foreground font-medium leading-relaxed">{service.desc}</p>
                  
                  <div className="space-y-4">
                    {service.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-4 text-lg font-bold text-primary/80">
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                          <CheckCircle2 size={18} />
                        </div>
                        {f}
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-6">
                    <Button asChild size="lg" className="h-16 px-12 rounded-2xl bg-primary text-xl font-bold shadow-xl shadow-primary/20 group-hover:bg-secondary transition-colors">
                      <Link href={`/services/${service.id}`}>
                        ابدأ الآن <ArrowRight size={20} className="mr-2 rtl:rotate-180" />
                      </Link>
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
