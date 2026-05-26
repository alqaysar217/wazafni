
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function ContactPage() {
  const contactImg = PlaceHolderImages.find(img => img.id === 'contact-bg')?.imageUrl;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* Header Section */}
        <section className="relative py-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-5xl font-black text-white mb-6">تواصل معنا</h1>
            <p className="text-white/70 text-xl max-w-2xl mx-auto">نحن هنا لخدمتك والإجابة على استفساراتك على مدار الساعة.</p>
          </div>
        </section>

        <section className="py-20 container mx-auto px-4 -mt-16 relative z-20">
          <div className="max-w-6xl mx-auto flex flex-col lg:flex-row bg-white rounded-[40px] shadow-2xl overflow-hidden border border-border/50">
            
            {/* Info Side */}
            <div className="lg:w-2/5 bg-primary p-12 lg:p-16 text-white space-y-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-black">معلومات الاتصال</h2>
                <p className="text-white/60">يمكنك الوصول إلينا عبر القنوات التالية:</p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/50 uppercase">اتصل بنا</p>
                    <p className="text-xl font-bold tracking-wider" dir="ltr">+967 775258830</p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/50 uppercase">البريد الإلكتروني</p>
                    <p className="text-xl font-bold">info@wazafni.ye</p>
                  </div>
                </div>

                <div className="flex gap-6 items-center group">
                  <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white group-hover:bg-secondary transition-colors">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white/50 uppercase">الموقع</p>
                    <p className="text-xl font-bold">اليمن، حضرموت، المكلا</p>
                  </div>
                </div>
              </div>

              <div className="pt-12">
                <Button className="w-full h-14 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-bold gap-3 text-lg">
                  تحدث معنا عبر واتساب <MessageCircle size={20} />
                </Button>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:w-3/5 p-12 lg:p-16 space-y-10">
              <h3 className="text-3xl font-black text-primary">أرسل لنا رسالة</h3>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-muted-foreground uppercase">الاسم الكامل</label>
                  <Input placeholder="أدخل اسمك هنا" className="h-14 rounded-2xl border-border bg-[#F8F7FA] focus:bg-white" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-muted-foreground uppercase">البريد الإلكتروني</label>
                  <Input placeholder="example@mail.com" className="h-14 rounded-2xl border-border bg-[#F8F7FA] focus:bg-white" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold text-muted-foreground uppercase">الموضوع</label>
                  <Input placeholder="كيف يمكننا مساعدتك؟" className="h-14 rounded-2xl border-border bg-[#F8F7FA] focus:bg-white" />
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-sm font-bold text-muted-foreground uppercase">الرسالة</label>
                  <Textarea placeholder="اكتب تفاصيل استفسارك هنا..." className="min-h-[180px] rounded-2xl border-border bg-[#F8F7FA] focus:bg-white p-6" />
                </div>
                <div className="md:col-span-2">
                  <Button className="w-full h-16 rounded-2xl bg-primary text-xl font-bold gap-3 shadow-xl shadow-primary/20">
                    إرسال الرسالة <Send size={20} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
