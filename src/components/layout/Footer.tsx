
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <footer className="bg-primary text-white pt-24 pb-12 overflow-hidden relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white p-1">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
                )}
              </div>
              <span className="text-3xl font-black font-headline text-white">وظفني</span>
            </Link>
            <p className="text-white/70 text-lg leading-relaxed max-w-xs font-medium">
              المنصة الوطنية الأكبر للتوظيف والحلول المهنية الذكية. نساهم في بناء مستقبل الكفاءات اليمنية وربطهم بأفضل الشركات العالمية.
            </p>
            <div className="flex gap-4">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-12 h-12 flex items-center justify-center bg-white/10 rounded-xl text-white hover:bg-secondary hover:text-white transition-all">
                  <Icon size={20} strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10 text-white font-headline">الباحثين عن عمل</h4>
            <ul className="space-y-5 text-lg text-white/60 font-medium">
              <li><Link href="/jobs" className="hover:text-white transition-colors">تصفح أحدث الوظائف</Link></li>
              <li><Link href="/seeker/resume" className="hover:text-white transition-colors">بناء السيرة الذاتية الذكية</Link></li>
              <li><Link href="/seeker/ai-tools" className="hover:text-white transition-colors">أدوات الذكاء الاصطناعي</Link></li>
              <li><Link href="/career-advice" className="hover:text-white transition-colors">مقالات ونصائح مهنية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10 text-white font-headline">أصحاب العمل</h4>
            <ul className="space-y-5 text-lg text-white/60 font-medium">
              <li><Link href="/employer/post-job" className="hover:text-white transition-colors">إضافة وظيفة جديدة</Link></li>
              <li><Link href="/employer/candidates" className="hover:text-white transition-colors">إدارة المتقدمين</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">باقات الاشتراك</Link></li>
              <li><Link href="/employer/solutions" className="hover:text-white transition-colors">حلول التوظيف للشركات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-xl mb-10 text-white font-headline">روابط هامة</h4>
            <ul className="space-y-6 text-lg text-white/60 font-medium">
              <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0"><Mail size={18} /></div> info@wazafni.ye</li>
              <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0"><MapPin size={18} /></div> صنعاء، اليمن - شارع الزبيري</li>
              <li className="flex items-center gap-4"><div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center shrink-0"><Phone size={18} /></div> +967 770 000 000</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-sm font-medium text-white/40">
          <p className="text-base">© 2024 منصة وظفني - جميع الحقوق محفوظة</p>
          <div className="flex gap-10 text-base">
            <Link href="/terms" className="hover:text-white transition-colors">الشروط والأحكام</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">سياسة الخصوصية</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>
    </footer>
  );
}
