'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2, Sparkles } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).toUpperCase();
    const password = formData.get('password') as string;

    // محاكاة تأخير بسيط للواقعية
    await new Promise(resolve => setTimeout(resolve, 800));

    // نظام الدخول المباشر المطلوب
    if (password === 'HA892019') {
      if (email === 'EMP@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك في لوحة تحكم الموظف" });
        router.push('/seeker/dashboard');
        return;
      } 
      if (email === 'ADMIN@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك أيها المدير" });
        router.push('/admin/dashboard');
        return;
      }
      if (email === 'COM@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك في لوحة تحكم الشركات" });
        router.push('/employer/dashboard');
        return;
      }
    }

    toast({
      variant: "destructive",
      title: "فشل الدخول",
      description: "البريد الإلكتروني أو كلمة المرور غير صحيحة.",
    });
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-stretch" dir="rtl">
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="relative z-10 text-white space-y-8 max-w-lg text-right">
          <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shadow-xl p-1 transition-transform group-hover:scale-110 text-primary flex items-center justify-center">
              {logo?.imageUrl && (
                <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
              )}
            </div>
            <span className="text-3xl font-black font-headline text-white">وظفني</span>
          </Link>
          <h2 className="text-5xl font-black font-headline leading-tight text-white">عد إلينا لنكمل <br /> قصة نجاحك.</h2>
          <p className="text-xl text-white/80 leading-relaxed font-medium">سجل دخولك لتكتشف مئات الوظائف الجديدة المتاحة اليوم في أفضل الشركات اليمنية.</p>
          
          <div className="pt-10 space-y-4">
            <p className="text-sm font-bold text-secondary flex items-center gap-2"> <Sparkles size={16} /> حسابات الوصول السريع (Demo):</p>
            <div className="grid grid-cols-1 gap-2 text-xs font-mono bg-white/5 p-4 rounded-2xl border border-white/10">
              <p>الموظف: EMP@GMAIL.COM</p>
              <p>المدير: ADMIN@GMAIL.COM</p>
              <p>الشركات: COM@GMAIL.COM</p>
              <p className="text-secondary">الباسورد: HA892019</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <h1 className="text-4xl font-black font-headline text-primary">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أهلاً بك مجدداً! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 text-right">
            <div className="space-y-2 text-right">
              <Label className="font-bold flex items-center gap-2 justify-end">البريد الإلكتروني</Label>
              <div className="relative">
                <Input name="email" type="email" required placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white text-right pr-12" dir="rtl" />
                <Mail className="absolute right-4 top-4 text-muted-foreground" size={20} />
              </div>
            </div>
            <div className="space-y-2 text-right">
              <Label className="font-bold flex items-center gap-2 justify-end">كلمة المرور</Label>
              <div className="relative">
                <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right pr-12" dir="rtl" />
                <Lock className="absolute right-4 top-4 text-muted-foreground" size={20} />
              </div>
            </div>
            <Button disabled={loading} className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-white">
              {loading ? <Loader2 className="animate-spin" /> : "دخول"}
            </Button>
          </form>

          <p className="text-center text-muted-foreground font-medium">
            ليس لديك حساب؟ <Link href="/register" className="text-primary font-bold hover:underline">أنشئ حساباً جديداً</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
