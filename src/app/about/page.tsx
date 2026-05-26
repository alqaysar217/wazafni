
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* About Hero */}
        <section className="py-24 bg-[#F8F7FA] border-b">
          <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-5xl font-black font-headline text-primary">من نحن؟</h1>
              <p className="text-xl text-muted-foreground font-medium leading-relaxed">
                منصة <span className="text-primary font-bold">وظفني</span> هي المبادرة الوطنية الأكبر في اليمن لتمكين الكفاءات وتطوير سوق العمل اليمني باستخدام التكنولوجيا الذكية.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-primary">2024</h4>
                  <p className="text-sm font-bold text-muted-foreground uppercase">سنة التأسيس</p>
                </div>
                <div className="space-y-2">
                  <h4 className="text-4xl font-black text-primary">+45k</h4>
                  <p className="text-sm font-bold text-muted-foreground uppercase">مستخدم نشط</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 relative h-[500px] w-full rounded-[40px] overflow-hidden shadow-2xl">
              <Image src="https://picsum.photos/seed/aboutus/800/1000" alt="Team Work" fill className="object-cover" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-24 container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div className="p-12 bg-primary text-white rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black font-headline">رؤيتنا</h3>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                أن نكون الجسر الرقمي الأول الذي يربط كل كفاءة يمنية بفرصتها المناسبة، والمساهمة في بناء اقتصاد وطني قائم على المهارات والابتكار.
              </p>
            </div>
            <div className="p-12 bg-secondary text-white rounded-[40px] space-y-6">
              <h3 className="text-3xl font-black font-headline">رسالتنا</h3>
              <p className="text-lg text-white/80 leading-relaxed font-medium">
                توفير أدوات توظيف ذكية، شفافة، وفعالة تساعد الشباب على الانخراط في سوق العمل وتساعد الشركات على النمو من خلال الكوادر المتميزة.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
