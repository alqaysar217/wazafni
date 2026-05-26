'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  Home, 
  Briefcase, 
  Building2, 
  Zap, 
  LogIn, 
  UserPlus,
  User,
  LogOut,
  LayoutDashboard,
  Bell,
  FileText,
  MessageSquare,
  BrainCircuit,
  Settings
} from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from 'react';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const [mounted, setMounted] = useState(false);
  const { user, loading } = useUser();
  const auth = useAuth();

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/');
  };

  const navLinks = [
    { href: '/', label: 'الرئيسية', icon: <Home size={20} /> },
    { href: '/jobs', label: 'الوظائف', icon: <Briefcase size={20} /> },
    { href: '/companies', label: 'الشركات', icon: <Building2 size={20} /> },
    { href: '/services', label: 'خدماتنا', icon: <Zap size={20} /> },
  ];

  const dashboardLinks = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={18} />, href: "/seeker/dashboard" },
    { label: "وظائفي المتقدم لها", icon: <Briefcase size={18} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={18} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={18} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={18} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={18} />, href: "/seeker/settings" }
  ];

  if (!mounted) return null;

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-primary/5 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 overflow-hidden rounded-xl shadow-inner bg-primary/5 flex items-center justify-center p-1">
              {logo?.imageUrl ? (
                <Image 
                  src={logo.imageUrl} 
                  alt="Wazafni Logo" 
                  fill 
                  className="object-contain p-1"
                  priority
                />
              ) : (
                <span className="text-primary font-black">W</span>
              )}
            </div>
            <span className="text-2xl font-black font-headline text-primary tracking-tighter">وظفني</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-8 text-[15px] font-bold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative py-1 transition-all duration-300 hover:text-primary",
                    isActive 
                      ? "text-primary after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[2px] after:bg-secondary after:rounded-full" 
                      : "text-muted-foreground hover:translate-y-[-1px]"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-primary relative">
                <Bell size={22} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
              </Button>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-3 p-1 pr-3 rounded-full bg-primary/5 hover:bg-primary/10 transition-all border border-primary/5 group">
                    <div className="text-right hidden sm:block">
                      <p className="text-xs font-black text-primary line-clamp-1">{user.displayName || user.email?.split('@')[0]}</p>
                      <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">لوحة التحكم</p>
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
                      <Image src={user.photoURL || `https://picsum.photos/seed/${user.uid}/100/100`} alt="Avatar" width={40} height={40} className="object-cover" />
                    </div>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-64 p-2 rounded-2xl shadow-2xl border-primary/5 mt-2" dir="rtl">
                  <DropdownMenuLabel className="font-black text-primary px-3 py-3 text-right">حسابي</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  
                  {dashboardLinks.map((link) => (
                    <DropdownMenuItem key={link.href} asChild className="rounded-xl p-3 focus:bg-primary/5 cursor-pointer font-bold">
                      <Link href={link.href} className="flex items-center justify-between w-full gap-3">
                        <span className="flex-1 text-right">{link.label}</span>
                        <span className="text-primary/60">{link.icon}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                  
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="rounded-xl p-3 focus:bg-red-50 text-red-600 cursor-pointer font-bold flex items-center justify-between gap-3">
                    <span className="flex-1 text-right">تسجيل الخروج</span>
                    <LogOut size={18} />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <>
              <Link href="/login" className="hidden lg:block text-[15px] font-bold text-primary hover:opacity-80 px-4">
                تسجيل الدخول
              </Link>
              <Button asChild className="hidden lg:flex rounded-xl px-8 bg-primary hover:bg-primary/90 font-black shadow-lg shadow-primary/10 text-white transition-all active:scale-95">
                <Link href="/register">انضم الآن</Link>
              </Button>
            </>
          )}

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden text-primary rounded-xl">
                <Menu className="w-7 h-7" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0 flex flex-col [&>button]:hidden border-none shadow-2xl rounded-l-[40px]">
              <div className="p-8 border-b border-primary/5 flex items-center justify-between">
                <SheetTitle className="text-right font-black text-2xl text-primary">القائمة</SheetTitle>
                <Zap size={24} className="text-secondary" />
              </div>
              
              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col gap-3">
                  {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        className={cn(
                          "flex items-center gap-4 p-4 rounded-2xl font-black transition-all text-lg",
                          isActive 
                            ? "bg-primary text-white shadow-xl shadow-primary/20" 
                            : "text-muted-foreground hover:bg-primary/5"
                        )}
                      >
                        <span className={cn(isActive ? "text-secondary" : "text-primary/40")}>
                          {link.icon}
                        </span>
                        {link.label}
                      </Link>
                    );
                  })}
                </div>

                {user && (
                  <>
                    <div className="mt-8 pt-8 border-t border-primary/5">
                      <p className="text-xs font-black text-muted-foreground uppercase tracking-widest px-4 mb-4">لوحة التحكم</p>
                      <div className="flex flex-col gap-2">
                        {dashboardLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="flex items-center gap-4 p-4 rounded-2xl font-black transition-all text-primary/80 hover:bg-primary/5"
                          >
                            <span className="text-primary/40">{link.icon}</span>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {!user ? (
                <div className="p-8 bg-[#F8F7FA] border-t border-primary/5 space-y-4">
                  <Button asChild variant="outline" className="w-full h-14 rounded-2xl text-lg font-black border-primary text-primary hover:bg-primary hover:text-white flex gap-3 shadow-sm transition-all">
                    <Link href="/login">
                      <LogIn size={20} />
                      تسجيل الدخول
                    </Link>
                  </Button>
                  <Button asChild className="w-full h-14 rounded-2xl text-lg font-black bg-primary text-white flex gap-3 shadow-xl shadow-primary/20 transition-all">
                    <Link href="/register">
                      <UserPlus size={20} />
                      انضم الآن
                    </Link>
                  </Button>
                </div>
              ) : (
                <div className="p-8 bg-[#F8F7FA] border-t border-primary/5">
                  <Button onClick={handleLogout} variant="ghost" className="w-full h-14 rounded-2xl text-lg font-black text-red-500 hover:bg-red-50 flex gap-3 transition-all">
                    <LogOut size={20} />
                    تسجيل الخروج
                  </Button>
                </div>
              )}
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}