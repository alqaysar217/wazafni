
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export function Navbar() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg">
              {logo?.imageUrl ? (
                <Image 
                  src={logo.imageUrl} 
                  alt="Wazafni Logo" 
                  fill 
                  className="object-cover"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-primary/10 flex items-center justify-center text-primary font-bold">W</div>
              )}
            </div>
            <span className="text-2xl font-black font-headline text-primary">وظفني</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
            <Link href="/jobs" className="hover:text-primary transition-colors">الوظائف</Link>
            <Link href="/companies" className="hover:text-primary transition-colors">الشركات</Link>
            <Link href="/services" className="hover:text-primary transition-colors">خدماتنا</Link>
            <Link href="/about" className="hover:text-primary transition-colors">عن المنصة</Link>
            <Link href="/contact" className="hover:text-primary transition-colors">التواصل</Link>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-[15px] font-bold text-primary hover:opacity-80 px-4">
            تسجيل الدخول
          </Link>
          <Button asChild className="rounded-lg px-8 bg-primary hover:bg-primary/90 font-bold shadow-md text-white">
            <Link href="/register">انضم الآن</Link>
          </Button>
          <Button variant="ghost" size="icon" className="lg:hidden text-primary">
            <Menu className="w-7 h-7" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
