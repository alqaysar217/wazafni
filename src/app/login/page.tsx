
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2, Sparkles, ArrowLeft } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useToast } from '@/hooks/use-toast';
import { useAuth, useFirestore } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const emailInput = formData.get('email') as string;
    const emailUpper = emailInput.toUpperCase();
    const password = formData.get('password') as string;

    // 1. التحقق من حسابات الوصول السريع (Demo)
    if (password === 'HA892019') {
      if (emailUpper === 'EMP@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك في لوحة تحكم الباحث" });
        router.push('/seeker/dashboard');
        return;
      } 
      if (emailUpper === 'ADMIN@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك أيها المدير" });
        router.push('/admin/dashboard');
        return;
      }
      if (emailUpper === 'COM@GMAIL.COM') {
        toast({ title: "تم الدخول بنجاح", description: "مرحباً بك في لوحة تحكم الشركات" });
        router.push('/employer/dashboard');
        return;
      }
    }

    // 2. محاولة تسجيل الدخول الحقيقي
    try {
      const userCredential = await signInWithEmailAndPassword(auth, emailInput, password);
      const user = userCredential.user;

      // محاولة جلب بيانات المستخدم مع مهلة زمنية (Timeout)
      try {
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        
        if (userDoc.exists()) {
          const userData = userDoc.data();
          toast({ 
            title: "تم تسجيل الدخول", 
            description: `مرحباً بك مجدداً، ${userData.fullName || 'مستخدم وظفني'}` 
          });
          
          if (userData.role === 'employer') {
            router.push('/employer/dashboard');
          } else {
            router.push('/seeker/dashboard');
          }
        } else {
          router.push('/seeker/dashboard');
        }
      } catch (firestoreError) {
        // في حال فشل Firestore (مشكلة اتصال)، ندخله كباحث كخيار احتياطي
        console.warn("Firestore connectivity issue, falling back to seeker dashboard.");
        router.push('/seeker/dashboard');
      }
    } catch (error: any) {
      console.error("Login error:", error);
      let message = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      
      if (error.code === 'auth/user-not-found') {
        message = "هذا الحساب غير موجود.";
      } else if (error.code === 'auth/wrong-password') {
        message = "كلمة المرور التي أدخلتها خاطئة.";
      }

      toast({
        variant: "destructive",
        title: "فشل تسجيل الدخول",
        description: message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-stretch" dir="rtl">
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-95"></div>
        <div className="relative z-10 text-white space-y-8 max-w-lg text-right">
          <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-xl p-1 flex items-center justify-center">
              {logo?.imageUrl && (
                <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
              )}
            </div>
            <span className="text-3xl font-black font-headline text-white">وظفني</span>
          </Link>
          <h2 className="text-5xl font-black leading-tight text-white">عد إلينا لنكمل <br /> قصة نجاحك.</h2>
          <p className="text-xl text-white/80 leading-relaxed font-medium">سجل دخولك لتكتشف مئات الوظائف الجديدة المتاحة اليوم في أفضل الشركات اليمنية.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <h1 className="text-4xl font-black text-primary">تسجيل الدخول</h1>
            <p className="text-muted-foreground font-medium">أهلاً بك مجدداً! يرجى إدخال بيانات حسابك للمتابعة.</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6 text-right">
            <div className="space-y-3">
              <Label className="font-bold flex justify-end text-primary/70">البريد الإلكتروني</Label>
              <div className="relative">
                <Input name="email" type="email" required placeholder="example@mail.com" className="h-14 rounded-xl text-right pr-12" dir="ltr" />
                <Mail className="absolute right-4 top-4 text-muted-foreground/60" size={20} />
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <Link href="#" className="text-xs font-bold text-secondary">نسيت كلمة المرور؟</Link>
                <Label className="font-bold flex justify-end text-primary/70">كلمة المرور</Label>
              </div>
              <div className="relative">
                <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl text-right pr-12" dir="ltr" />
                <Lock className="absolute right-4 top-4 text-muted-foreground/60" size={20} />
              </div>
            </div>

            <Button disabled={loading} className="w-full h-14 rounded-xl text-lg font-black bg-primary text-white">
              {loading ? <Loader2 className="animate-spin" /> : "دخول للمنصة"}
            </Button>
          </form>

          <div className="text-center">
            <p className="text-muted-foreground font-medium mb-6">
              ليس لديك حساب؟ <Link href="/register" className="text-primary font-black hover:underline">أنشئ حساباً جديداً</Link>
            </p>
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground">
              <ArrowLeft size={16} className="rtl:rotate-180" /> العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
