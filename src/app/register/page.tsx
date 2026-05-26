
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, ArrowLeft, CheckCircle2, User, Mail, Lock, Phone, MapPin, Loader2, AlertCircle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAuth, useFirestore } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { isFirebaseConfigValid } from '@/firebase/config';

export default function RegisterPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'seeker' | 'employer'>('seeker');
  const [configValid, setConfigValid] = useState(true);

  useEffect(() => {
    setConfigValid(isFirebaseConfigValid());
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!configValid) {
      toast({
        variant: "destructive",
        title: "خطأ في الإعدادات",
        description: "يجب تزويد التطبيق بمفاتيح Firebase الحقيقية للمتابعة.",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = (formData.get('email') as string).trim().toLowerCase();
    const password = formData.get('password') as string;
    const confirmPassword = formData.get('confirmPassword') as string;
    const fullName = formData.get('fullName') as string;
    const phone = (formData.get('phone') as string) || '';
    const location = (formData.get('location') as string) || '';

    if (password !== confirmPassword) {
      toast({
        variant: "destructive",
        title: "خطأ في البيانات",
        description: "كلمات المرور غير متطابقة.",
      });
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      const userData = {
        uid: user.uid,
        fullName,
        email,
        role,
        phone,
        location,
        createdAt: serverTimestamp(),
      };

      const userDocRef = doc(db, 'users', user.uid);
      
      // نقوم بحفظ البيانات ومتابعة العملية حتى لو تأخر Firestore
      await setDoc(userDocRef, userData).catch(err => {
        console.warn("Firestore error during registration:", err);
      });

      // تخزين الجلسة فوراً لضمان التعرف على المستخدم في الـ Navbar
      localStorage.setItem('wazafni_user', JSON.stringify({
        uid: user.uid,
        email: email,
        fullName: fullName,
        role: role
      }));
      
      toast({
        title: "تم إنشاء الحساب بنجاح",
        description: "مرحباً بك في منصة وظفني!",
      });
      
      const path = role === 'seeker' ? '/seeker/dashboard' : '/employer/dashboard';
      window.location.href = path;

    } catch (error: any) {
      console.error("Register error:", error);
      let message = "حدث خطأ أثناء إنشاء الحساب.";

      if (error.code === 'auth/email-already-in-use') {
        message = "هذا البريد الإلكتروني مسجل مسبقاً.";
      } else if (error.code === 'auth/weak-password') {
        message = "كلمة المرور يجب أن تكون 6 أحرف على الأقل.";
      } else if (error.code === 'auth/network-request-failed') {
        message = "فشل الاتصال بالخادم. يرجى المحاولة مرة أخرى.";
      }
      
      toast({
        variant: "destructive",
        title: "فشل إنشاء الحساب",
        description: `${message}`,
      });
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-stretch" dir="rtl">
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="relative z-10 text-white space-y-12 max-w-lg text-right">
          <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shadow-xl p-1 transition-transform group-hover:scale-110 text-primary flex items-center justify-center">
              {logo?.imageUrl && (
                <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
              )}
            </div>
            <span className="text-3xl font-black font-headline text-white">وظفني</span>
          </Link>
          
          <div className="space-y-6">
            <h2 className="text-5xl font-black font-headline leading-tight text-white">ابدأ رحلة <br /> مستقبلك اليوم.</h2>
            <p className="text-xl text-white/80 leading-relaxed font-medium">انضم إلى أكبر تجمع مهني في اليمن واحصل على أدوات الذكاء الاصطناعي التي ستغير مسارك المهني.</p>
          </div>

          <div className="space-y-6">
            {[
              "ربط حقيقي بقاعدة بيانات سحابية",
              "إدارة طلبات التوظيف لحظياً",
              "تواصل آمن ومشفر",
              "تحليلات ذكية لبياناتك"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-4 text-white/90 font-bold justify-start">
                <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
                  <CheckCircle2 size={14} className="text-white" />
                </div>
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA]">
        <div className="w-full max-w-xl space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <h1 className="text-4xl font-black font-headline text-primary">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">اختر نوع الحساب الذي يناسب احتياجاتك للمتابعة.</p>
          </div>

          {!configValid && (
            <div className="bg-amber-50 border border-amber-200 p-6 rounded-[25px] space-y-3 text-amber-900 text-sm">
              <div className="flex items-center gap-2 font-black text-lg">
                <AlertCircle size={24} /> تنبيه الربط التقني
              </div>
              <p className="font-medium leading-relaxed">
                التطبيق يحتاج إلى مفاتيح الربط الخاصة بمشروعك على Firebase للمتابعة.
              </p>
            </div>
          )}

          <Tabs defaultValue="seeker" onValueChange={(v) => setRole(v as any)} className="w-full space-y-8" dir="rtl">
            <TabsList className="grid w-full grid-cols-2 h-16 p-2 bg-white rounded-2xl shadow-sm border">
              <TabsTrigger value="seeker" className="rounded-xl font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center justify-center">
                <User size={20} /> باحث عن عمل
              </TabsTrigger>
              <TabsTrigger value="employer" className="rounded-xl font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center justify-center">
                <Building2 size={20} /> صاحب عمل
              </TabsTrigger>
            </TabsList>

            <TabsContent value="seeker">
              <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2 md:col-span-2 text-right">
                  <Label className="font-bold">الاسم الكامل</Label>
                  <Input name="fullName" required placeholder="أدخل اسمك الكامل" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">البريد الإلكتروني</Label>
                  <Input name="email" type="email" required placeholder="example@mail.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">رقم الهاتف</Label>
                  <Input name="phone" placeholder="+967 7xx xxx xxx" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">كلمة المرور</Label>
                  <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">تأكيد كلمة المرور</Label>
                  <Input name="confirmPassword" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <Button disabled={loading} className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-white">
                  {loading ? <Loader2 className="animate-spin" /> : "إنشاء حساب كباحث عن عمل"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="employer">
              <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2 md:col-span-2 text-right">
                  <Label className="font-bold">اسم الشركة / المؤسسة</Label>
                  <Input name="fullName" required placeholder="أدخل اسم الشركة" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">البريد الإلكتروني للعمل</Label>
                  <Input name="email" type="email" required placeholder="hr@company.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">مقر الشركة الرئيسي</Label>
                  <Input name="location" placeholder="صنعاء، عدن، المكلا..." className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">كلمة المرور</Label>
                  <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold">تأكيد كلمة المرور</Label>
                  <Input name="confirmPassword" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <Button disabled={loading} className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 text-white">
                  {loading ? <Loader2 className="animate-spin" /> : "إنشاء حساب كصاحب عمل"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <p className="text-center text-muted-foreground font-medium">
            لديك حساب بالفعل؟ <Link href="/login" className="text-primary font-bold hover:underline transition-all">تسجيل الدخول</Link>
          </p>
          
          <div className="text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-primary transition-colors">
              <ArrowLeft size={16} className="rtl:rotate-180" /> العودة للرئيسية
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
