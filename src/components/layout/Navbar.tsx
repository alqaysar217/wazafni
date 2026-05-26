
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  Home, 
  Briefcase, 
  Building2, 
  Zap, 
  Info, 
  Phone, 
  LogIn, 
  UserPlus 
} from 'lucide-react';
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
    { href: '/', label: 'الرئيسية', icon: <Home size={20} /> },
    { href: '/jobs', label: 'الوظائف', icon: <Briefcase size={20} /> },
    { href: '/companies', label: 'الشركات', icon: <Building2 size={20} /> },
    { href: '/services', label: 'خدماتنا', icon: <Zap size={20} /> },
    { href: '/about', label: 'عن المنصة', icon: <Info size={20} /> },
    { href: '/contact', label: 'التواصل', icon: <Phone size={20} /> },
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
            <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 flex flex-col [&>button]:hidden">
              <div className="p-6 border-b">
                <SheetTitle className="text-right font-black text-2xl">القائمة</SheetTitle>
              </div>
              
              <div className="flex-1 overflow-y-auto py-6 px-4">
                <div className="flex flex-col gap-2">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-xl font-bold transition-all text-lg",
                          isActive 
                            ? "bg-primary text-white" 
                            : "text-muted-foreground hover:bg-muted"
                        )}
                      >
                        <span className={cn(isActive ? "text-secondary" : "text-primary/60")}>
                          {link.icon}
                        </span>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>
              </div>

              <div className="p-6 bg-[#F8F7FA] border-t space-y-4">
                <Button asChild variant="outline" className="w-full h-14 rounded-xl text-lg font-bold border-primary text-primary hover:bg-primary/5 flex gap-3">
                  <Link href="/login">
                    <LogIn size={20} />
                    تسجيل الدخول
                  </Link>
                </Button>
                <Button asChild className="w-full h-14 rounded-xl text-lg font-bold bg-primary text-white flex gap-3">
                  <Link href="/register">
                    <UserPlus size={20} />
                    انضم الآن
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
