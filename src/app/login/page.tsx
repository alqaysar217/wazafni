
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Chrome, Linkedin as LinkedinIcon, Loader2 } from 'lucide-react';
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
        description: "لا يمكن الاتصال بخدمات Firebase حالياً. يرجى مراجعة إعدادات المشروع.",
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
      console.error("Login error:", error);
      let title = "خطأ في تسجيل الدخول";
      let message = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

      if (error.code === 'auth/api-key-not-valid' || error.message.includes('api-key-not-valid')) {
        title = "مفتاح Firebase غير صالح";
        message = "يرجى وضع مفتاح الـ API الحقيقي في ملف config.ts بدلاً من النص التجريبي.";
      } else if (error.code === 'auth/network-request-failed') {
        message = "فشل في الاتصال. يرجى التأكد من تفعيل الدومين في الـ Console.";
      } else if (error.code === 'auth/too-many-requests') {
        message = "تم حظر المحاولات مؤقتاً لكثرة المحاولات الخاطئة.";
      }
      
      toast({
        variant: "destructive",
        title: title,
        description: `${message} (${error.code})`,
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
          <p className="text-xl text-white/80 leading-relaxed font-medium">سجل دخولك لتكتشف مئات الوظائف الجديدة المتاحة اليوم في أفضل الشركات اليمنية.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-md space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
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
              <Label className="font-bold flex items-center gap-2 justify-end">البريد الإلكتروني</Label>
              <Input name="email" type="email" required placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
            </div>
            <div className="space-y-2 text-right">
              <Label className="font-bold flex items-center gap-2 justify-end">كلمة المرور</Label>
              <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
            </div>
            <Button disabled={loading || !firebaseReady} className="w-full h-14 rounded-xl text-lg font-bold bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 text-white">
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
