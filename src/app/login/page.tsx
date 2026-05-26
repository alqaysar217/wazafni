'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Chrome, Linkedin as LinkedinIcon, Loader2, AlertCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAuth, useFirestore } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    if (auth && db) {
      setFirebaseReady(true);
    }
  }, [auth, db]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!auth || !db) {
      toast({
        variant: "destructive",
        title: "خطأ في الاتصال",
        description: "لا يمكن الاتصال بخدمات Firebase حالياً. يرجى تحديث الصفحة.",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userDocRef);
      const role = userDoc.exists() ? userDoc.data().role : 'seeker';

      toast({
        title: "تم تسجيل الدخول",
        description: "أهلاً بك مجدداً!",
      });

      router.push(role === 'seeker' ? '/seeker/dashboard' : '/employer/dashboard');
    } catch (error: any) {
      let message = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      if (error.code === 'auth/user-not-found') message = "المستخدم غير موجود.";
      if (error.code === 'auth/wrong-password') message = "كلمة المرور غير صحيحة.";
      if (error.code === 'auth/invalid-email') message = "البريد الإلكتروني غير صحيح.";
      
      toast({
        variant: "destructive",
        title: "خطأ في تسجيل الدخول",
        description: message,
      });
      setLoading(false);
    }
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
          <p className="text-xl text-white/80 leading-relaxed font-light">سجل دخولك لتكتشف مئات الوظائف الجديدة المتاحة اليوم في أفضل الشركات اليمنية.</p>
          
          <div className="pt-12 grid grid-cols-2 gap-8">
            <div className="space-y-2">
              <p className="text-3xl font-black text-white">+25k</p>
              <p className="text-white/60 text-sm">فرصة وظيفية</p>
            </div>
            <div className="space-y-2">
              <p className="text-3xl font-black text-white">+1.2k</p>
              <p className="text-white/60 text-sm">شركة موثوقة</p>
            </div>
          </div>
        </div>
        
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-8 group justify-end">
              <span className="text-2xl font-bold font-headline text-primary">وظفني</span>
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-md p-1 text-primary flex items-center justify-center">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
                )}
              </div>
            </Link>
            <h1 className="text-4xl font-black font-headline text-primary">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أهلاً بك مجدداً! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          {!firebaseReady && (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl flex items-center gap-3 text-orange-700 font-bold">
              <Loader2 className="animate-spin w-5 h-5" /> جاري تهيئة الاتصال...
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-6 text-right">
            <div className="space-y-2 text-right">
              <Label className="font-bold flex items-center gap-2 justify-end">
                <span>البريد الإلكتروني</span>
                <Mail size={16} className="text-primary/60" />
              </Label>
              <Input name="email" type="email" required placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
            </div>
            <div className="space-y-2 text-right">
              <div className="flex justify-between items-center flex-row-reverse">
                <Label className="font-bold flex items-center gap-2 justify-end">
                  <span>كلمة المرور</span>
                  <Lock size={16} className="text-primary/60" />
                </Label>
                <Link href="#" title="استعادة كلمة المرور" className="text-sm font-bold text-primary hover:underline">نسيت كلمة المرور؟</Link>
              </div>
              <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
            </div>
            <Button disabled={loading || !firebaseReady} className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-white">
              {loading ? <Loader2 className="animate-spin" /> : "دخول"}
            </Button>
          </form>

          <div className="relative">
            <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
            <div className="relative flex justify-center text-xs uppercase"><span className="bg-[#F8F7FA] px-2 text-muted-foreground font-bold">أو سجل عبر</span></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="h-14 rounded-xl font-bold flex gap-2 border-border bg-white hover:bg-muted items-center justify-center">
              <Chrome size={20} /> جوجل
            </Button>
            <Button variant="outline" className="h-14 rounded-xl font-bold flex gap-2 border-border bg-white hover:bg-muted items-center justify-center">
              <LinkedinIcon size={20} /> لينكد إن
            </Button>
          </div>

          <p className="text-center text-muted-foreground font-medium">
            ليس لديك حساب؟ <Link href="/register" className="text-primary font-bold hover:underline">أنشئ حساباً جديداً</Link>
          </p>
        </div>
      </div>
    </div>
  );
}