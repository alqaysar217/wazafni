
import Link from 'next/link';
import { Briefcase, Twitter, Linkedin, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-headline">وظفني</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              المنصة الرائدة للتوظيف في اليمن. نربط أفضل الكفاءات بأكبر الشركات لخلق مستقبل وظيفي أفضل.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Twitter size={18} /></Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Linkedin size={18} /></Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Facebook size={18} /></Link>
              <Link href="#" className="p-2 bg-muted rounded-full hover:bg-primary hover:text-white transition-all"><Instagram size={18} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6">للباحثين عن عمل</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/jobs" className="hover:text-primary">تصفح الوظائف</Link></li>
              <li><Link href="/seeker/resume" className="hover:text-primary">إنشاء سيرة ذاتية</Link></li>
              <li><Link href="/seeker/ai-tools" className="hover:text-primary">أدوات الذكاء الاصطناعي</Link></li>
              <li><Link href="/career-advice" className="hover:text-primary">نصائح مهنية</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">لأصحاب العمل</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li><Link href="/employer/post-job" className="hover:text-primary">نشر وظيفة</Link></li>
              <li><Link href="/employer/candidates" className="hover:text-primary">إدارة المرشحين</Link></li>
              <li><Link href="/pricing" className="hover:text-primary">خطط الأسعار</Link></li>
              <li><Link href="/employer/solutions" className="hover:text-primary">حلول الشركات</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li>info@wazafni.ye</li>
              <li>صنعاء، اليمن - شارع الزبيري</li>
              <li>+967 77x xxx xxx</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 وظفني - جميع الحقوق محفوظة</p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-primary">الشروط والأحكام</Link>
            <Link href="/privacy" className="hover:text-primary">سياسة الخصوصية</Link>
            <Link href="/cookies" className="hover:text-primary">ملفات تعريف الارتباط</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
