
import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Footer() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <footer className="bg-white border-t pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-8 h-8 rounded-md overflow-hidden">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-cover" />
                )}
              </div>
              <span className="text-2xl font-bold font-headline text-primary">وظفني</span>
            </Link>
            <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xs">
              المنصة الوطنية الأكبر للتوظيف والحلول المهنية الذكية. نساهم في بناء مستقبل الكفاءات اليمنية وربطهم بأفضل الشركات.
            </p>
            <div className="flex gap-3">
              {[Twitter, Linkedin, Facebook, Instagram].map((Icon, i) => (
                <Link key={i} href="#" className="w-10 h-10 flex items-center justify-center bg-accent rounded-lg text-primary hover:bg-primary hover:text-white transition-all shadow-sm">
                  <Icon size={18} strokeWidth={2.5} />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-primary">الباحثين عن عمل</h4>
            <ul className="space-y-4 text-[15px] text-muted-foreground font-medium">
              <li><Link href="/jobs" className="hover:text-primary transition-colors">تصفح أحدث الوظائف</Link></li>
              <li><Link href="/seeker/resume" className="hover:text-primary transition-colors">بناء السيرة الذاتية الذكية</Link></li>
              <li><Link href="/seeker/ai-tools" className="hover:text-primary transition-colors">أدوات الذكاء الاصطناعي</Link></li>
              <li><Link href="/career-advice" className="hover:text-primary transition-colors">مقالات ونصائح مهنية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-primary">أصحاب العمل</h4>
            <ul className="space-y-4 text-[15px] text-muted-foreground font-medium">
              <li><Link href="/employer/post-job" className="hover:text-primary transition-colors">إضافة وظيفة جديدة</Link></li>
              <li><Link href="/employer/candidates" className="hover:text-primary transition-colors">إدارة المتقدمين</Link></li>
              <li><Link href="/pricing" className="hover:text-primary transition-colors">باقات الاشتراك</Link></li>
              <li><Link href="/employer/solutions" className="hover:text-primary transition-colors">حلول التوظيف للشركات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-8 text-primary">روابط هامة</h4>
            <ul className="space-y-4 text-[15px] text-muted-foreground font-medium">
              <li className="flex items-center gap-3 font-medium"><Mail size={16} /> info@wazafni.ye</li>
              <li className="flex items-center gap-3 font-medium"><MapPin size={16} /> صنعاء، اليمن - شارع الزبيري</li>
              <li className="flex items-center gap-3 font-medium"><Phone size={16} /> +967 770 000 000</li>
              <li><Link href="/faq" className="hover:text-primary transition-colors">الأسئلة الشائعة</Link></li>
              <li><Link href="/support" className="hover:text-primary transition-colors">مركز الدعم</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-medium text-muted-foreground">
          <p>© 2024 منصة وظفني - جميع الحقوق محفوظة</p>
          <div className="flex gap-8">
            <Link href="/terms" className="hover:text-primary transition-colors">الشروط والأحكام</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">سياسة الخصوصية</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
