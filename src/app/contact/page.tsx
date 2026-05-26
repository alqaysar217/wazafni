
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8F7FA]">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3 space-y-12">
            <div className="space-y-4">
              <h1 className="text-5xl font-black font-headline text-primary">تواصل معنا</h1>
              <p className="text-lg text-muted-foreground font-medium leading-relaxed">نحن هنا للإجابة على جميع استفساراتكم ومساعدتكم في رحلتكم المهنية.</p>
            </div>

            <div className="space-y-8">
              {[
                { icon: <Mail />, title: "البريد الإلكتروني", value: "info@wazafni.ye" },
                { icon: <Phone />, title: "الهاتف", value: "+967 770 000 000" },
                { icon: <MapPin />, title: "الموقع", value: "صنعاء، اليمن - شارع الزبيري" }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-muted-foreground text-sm uppercase">{item.title}</h4>
                    <p className="text-lg font-bold text-primary">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white p-12 rounded-[40px] shadow-xl border-none space-y-10">
              <h3 className="text-2xl font-black font-headline">أرسل لنا رسالة</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold">الاسم الكامل</label>
                    <Input placeholder="أدخل اسمك هنا" className="h-14 rounded-xl" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold">البريد الإلكتروني</label>
                    <Input placeholder="example@mail.com" className="h-14 rounded-xl" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">الموضوع</label>
                  <Input placeholder="كيف يمكننا مساعدتك؟" className="h-14 rounded-xl" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold">الرسالة</label>
                  <Textarea placeholder="اكتب تفاصيل استفسارك هنا..." className="min-h-[150px] rounded-xl" />
                </div>
                <Button className="w-full h-16 rounded-2xl bg-primary text-xl font-bold gap-3">
                  إرسال الرسالة <Send size={20} />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
