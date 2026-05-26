
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock, Loader2, AlertCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAuth, useFirestore } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { isFirebaseConfigValid } from '@/firebase/config';

export default function LoginPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [configValid, setConfigValid] = useState(true);

  useEffect(() => {
    setConfigValid(isFirebaseConfigValid());
  }, []);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!configValid) {
      toast({
        variant: "destructive",
        title: "إعدادات Firebase ناقصة",
        description: "يرجى إضافة مفاتيح المشروع الحقيقية في ملف الإعدادات أو .env للمتابعة.",
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
      let message = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";

      if (error.code === 'auth/network-request-failed') {
        message = "فشل في الاتصال. تأكد من إضافة الدومين الحالي في Authorized Domains بـ Firebase Console.";
      } else if (error.code === 'auth/too-many-requests') {
        message = "تم حظر المحاولات مؤقتاً لكثرة المحاولات الخاطئة.";
      } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        message = "البريد الإلكتروني أو كلمة المرور غير صحيحة.";
      }
      
      toast({
        variant: "destructive",
        title: "فشل الدخول",
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
        <div className="w-full max-md space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <h1 className="text-4xl font-black font-headline text-primary">تسجيل الدخول</h1>
            <p className="text-muted-foreground">أهلاً بك مجدداً! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          {!configValid && (
            <div className="bg-amber-50 border border-amber-200 p-4 rounded-2xl flex flex-col gap-2 text-amber-800 text-sm">
              <div className="flex items-center gap-2 font-bold">
                <AlertCircle size={18} /> تنبيه: الربط مع Firebase غير مكتمل
              </div>
              <p>يرجى نسخ إعدادات مشروعك من Firebase Console ووضعها في ملف .env لتحويل المنصة إلى العمل الحقيقي.</p>
            </div>
          )}

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
