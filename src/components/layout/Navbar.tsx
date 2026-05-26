
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Briefcase, User, Search, Menu } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full glass border-b">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30">
              <Briefcase className="w-6 h-6" />
            </div>
            <span className="text-2xl font-bold font-headline tracking-tight">وظفني</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="/jobs" className="hover:text-primary transition-colors">تصفح الوظائف</Link>
            <Link href="/companies" className="hover:text-primary transition-colors">الشركات</Link>
            <Link href="/services" className="hover:text-primary transition-colors">خدماتنا</Link>
            <Link href="/about" className="hover:text-primary transition-colors">عن المنصة</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-sm font-medium hover:text-primary px-4">
            تسجيل الدخول
          </Link>
          <Button asChild className="rounded-full px-6 bg-primary hover:bg-primary/90">
            <Link href="/register">انضم الآن</Link>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
