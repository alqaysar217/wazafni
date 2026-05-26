
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import { Target, Eye, Rocket, CheckCircle2, Award, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function AboutPage() {
  const visionImg = PlaceHolderImages.find(img => img.id === 'about-vision')?.imageUrl;

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1">
        {/* Story Section */}
        <section className="py-24 bg-white border-b">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/5 text-primary rounded-full text-sm font-bold uppercase tracking-wider">قصتنا</div>
              <h1 className="text-5xl lg:text-6xl font-black text-primary leading-tight">نعيد صياغة مفهوم <br />التوظيف في اليمن.</h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                منصة <span className="text-primary font-bold">وظفني</span> ليست مجرد موقع للوظائف، بل هي مبادرة وطنية رقمية انطلقت لسد الفجوة بين الكفاءات اليمنية الطموحة وسوق العمل الحديث، من خلال دمج التكنولوجيا المتطورة بالذكاء الاصطناعي مع الخبرة المحلية العميقة.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center p-6 bg-[#F8F7FA] rounded-3xl">
                  <h4 className="text-3xl font-black text-primary">15k</h4>
                  <p className="text-sm font-bold text-muted-foreground">وظيفة منشورة</p>
                </div>
                <div className="text-center p-6 bg-[#F8F7FA] rounded-3xl">
                  <h4 className="text-3xl font-black text-primary">45k</h4>
                  <p className="text-sm font-bold text-muted-foreground">باحث نشط</p>
                </div>
                <div className="text-center p-6 bg-[#F8F7FA] rounded-3xl">
                  <h4 className="text-3xl font-black text-primary">1.2k</h4>
                  <p className="text-sm font-bold text-muted-foreground">شركة مسجلة</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[600px] w-full rounded-[60px] overflow-hidden shadow-2xl">
              {visionImg && <Image src={visionImg} alt="Wazafni Vision" fill className="object-cover" />}
            </div>
          </div>
        </section>

        {/* Vision & Mission Grid */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-16 bg-primary text-white rounded-[50px] space-y-6 relative overflow-hidden group">
              <Eye className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4">
                <Eye size={32} className="text-secondary" />
              </div>
              <h3 className="text-4xl font-black">رؤيتنا</h3>
              <p className="text-xl text-white/80 leading-relaxed font-medium">
                أن نكون المحرك الرقمي الأول لتطوير المهارات المهنية في اليمن، والمساهم الأساسي في خفض معدلات البطالة من خلال حلول تقنية ذكية تربط كل كفاءة بمكانها المستحق.
              </p>
            </div>
            
            <div className="p-16 bg-white border border-border/50 text-primary rounded-[50px] space-y-6 relative overflow-hidden group shadow-xl">
              <Rocket className="absolute -top-10 -left-10 w-48 h-48 text-primary/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-4">
                <Rocket size={32} className="text-primary" />
              </div>
              <h3 className="text-4xl font-black">رسالتنا</h3>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                توفير منظومة توظيف شفافة وعادلة تعتمد على الجدارة، وتزويد الباحثين عن عمل بأدوات الذكاء الاصطناعي اللازمة لتطوير مساراتهم المهنية، ومساعدة الشركات في بناء فرق عمل استثنائية.
              </p>
            </div>
          </div>
        </section>

        {/* Goals Section */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-4 text-center space-y-16">
            <h2 className="text-4xl font-black text-white">الأهداف التي نسعى لتحقيقها</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {[
                { title: "التمكين الرقمي", desc: "نقل سوق العمل اليمني إلى مستوى متطور يعتمد على البيانات والتقنية.", icon: <Award /> },
                { title: "دعم المؤسسات", desc: "تزويد الشركات المحلية بحلول توظيف عالمية المستوى لزيادة إنتاجيتها.", icon: <Users /> },
                { title: "تطوير الكوادر", desc: "تحسين مهارات الشباب اليمني من خلال تحليلات السير الذاتية الذكية.", icon: <CheckCircle2 /> }
              ].map((goal, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] border border-white/10 text-white space-y-6 hover:bg-white/10 transition-all">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto text-secondary">
                    {goal.icon}
                  </div>
                  <h4 className="text-2xl font-bold">{goal.title}</h4>
                  <p className="text-white/60 font-medium leading-relaxed">{goal.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
