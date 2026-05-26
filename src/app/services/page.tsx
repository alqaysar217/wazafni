
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Sparkles, FileText, BrainCircuit, Target, CheckCircle2 } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: "بناء السيرة الذاتية الذكية",
      desc: "نظام يساعدك على إنشاء سيرة ذاتية احترافية متوافقة مع أنظمة الـ ATS العالمية لزيادة فرص قبولك.",
      icon: <FileText className="w-12 h-12" />,
      features: ["نماذج عصرية", "كلمات مفتاحية ذكية", "تحميل PDF مباشر"]
    },
    {
      title: "المطابقة الوظيفية بالذكاء الاصطناعي",
      desc: "نقوم بتحليل مهاراتك وخبراتك وترشيحك تلقائياً للوظائف التي تناسبك تماماً.",
      icon: <BrainCircuit className="w-12 h-12" />,
      features: ["تحليل دقيق للمهارات", "تنبيهات فورية", "نسبة توافق مئوية"]
    },
    {
      title: "حلول التوظيف للمؤسسات",
      desc: "نساعد الشركات في الوصول إلى أفضل الكفاءات اليمنية وإدارة عملية التوظيف بكفاءة عالية.",
      icon: <Target className="w-12 h-12" />,
      features: ["لوحة تحكم للشركات", "تصفية ذكية للمتقدمين", "إدارة المقابلات"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary text-white py-24 text-center space-y-6">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-black font-headline">خدماتنا المتكاملة</h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">نوفر حلولاً مبتكرة لكل من الباحثين عن عمل وأصحاب الشركات لضمان أفضل تجربة توظيف.</p>
          </div>
        </section>

        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, i) => (
              <div key={i} className="bg-[#F8F7FA] p-12 rounded-[40px] space-y-8 border hover:bg-white hover:shadow-2xl transition-all">
                <div className="text-primary">{service.icon}</div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-black font-headline">{service.title}</h3>
                  <p className="text-muted-foreground font-medium leading-relaxed">{service.desc}</p>
                </div>
                <ul className="space-y-3">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm font-bold">
                      <CheckCircle2 size={18} className="text-secondary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full rounded-2xl h-14 bg-primary font-bold">ابدأ الآن</Button>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
