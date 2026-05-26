'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";

export function Navbar() {
  const pathname = usePathname();
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  const navLinks = [
    { href: '/', label: 'الرئيسية' },
    { href: '/jobs', label: 'الوظائف' },
    { href: '/companies', label: 'الشركات' },
    { href: '/services', label: 'خدماتنا' },
    { href: '/about', label: 'عن المنصة' },
    { href: '/contact', label: 'التواصل' },
  ];

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
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-all duration-300 hover:text-primary",
                    isActive 
                      ? "text-primary font-black after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[3px] after:bg-secondary after:rounded-full" 
                      : "text-muted-foreground hover:translate-y-[-1px]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-[15px] font-bold text-primary hover:opacity-80 px-4">
            تسجيل الدخول
          </Link>
          <Button asChild className="rounded-lg px-8 bg-primary hover:bg-primary/90 font-bold shadow-md text-white">
            <Link href="/register">انضم الآن</Link>
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary">
                <Menu className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetTitle className="text-right font-black text-2xl mb-8">القائمة</SheetTitle>
              <div className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "text-xl font-bold transition-all",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <hr className="my-4" />
                <Button asChild className="w-full h-14 rounded-xl text-lg font-bold">
                  <Link href="/login">تسجيل الدخول</Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
