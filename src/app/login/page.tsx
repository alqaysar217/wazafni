
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Briefcase, Chrome, Github } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <div className="min-h-screen flex items-stretch">
      {/* Left side: Visual Content */}
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="relative z-10 text-white space-y-8 max-w-lg">
          <Link href="/" className="inline-flex items-center gap-2 mb-12 group">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shadow-xl p-1 transition-transform group-hover:scale-110">
              {logo?.imageUrl && (
                <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
              )}
            </div>
            <span className="text-3xl font-black font-headline">وظفني</span>
          </Link>
          <h2 className="text-5xl font-black font-headline leading-tight">عد إلينا لنكمل <br /> قصة نجاحك.</h2>
          <p className="text-xl text-white/80 leading-relaxed font-light">سجل دخولك لتكتشف مئات الوظائف الجديدة المتاحة اليوم في أفضل الشركات اليمنية.</p>
          
          <div className="pt-12 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-3xl font-black">+25k</p>
              <p className="text-white/60 text-sm">فرصة وظيفية</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-black">+1.2k</p>
              <p className="text-white/60 text-sm">شركة موثوقة</p>
            </div>
          </div>
        </div>
        
        {/* Abstract Shapes */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Right side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          <div className="space-y-4">
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-8 group">
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-md p-1">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
                )}
              </div>
              <span className="text-2xl font-bold font-headline">وظفني</span>
            </Link>
            <h1 className="text-4xl font-black font-headline text-foreground">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أهلاً بك مجدداً! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          <form className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="font-bold">البريد الإلكتروني</Label>
              <Input id="email" type="email" placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white" />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <Label htmlFor="password" className="font-bold">كلمة المرور</Label>
                <Link href="/forgot-password" title="استعادة كلمة المرور" className="text-sm font-bold text-primary hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <Input id="password" type="password" placeholder="••••••••" className="h-14 rounded-xl border-border bg-white" />
            </div>
            <Button className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
              دخول
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#F8F7FA] px-2 text-muted-foreground font-bold">أو سجل عبر</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-14 rounded-xl font-bold flex gap-2 border-border bg-white hover:bg-muted">
              <Chrome size={20} /> جوجل
            </Button>
            <Button variant="outline" className="h-14 rounded-xl font-bold flex gap-2 border-border bg-white hover:bg-muted">
              <Github size={20} /> لينكد إن
            </Button>
          </div>

          <p className="text-center text-muted-foreground">
            ليس لديك حساب؟ <Link href="/register" className="text-primary font-bold hover:underline">أنشئ حساباً جديداً</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
