
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, ArrowLeft, CheckCircle2, User, Mail, Lock, Phone, MapPin, Loader2, AlertTriangle } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { useAuth, useFirestore } from '@/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';

export default function RegisterPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');
  const auth = useAuth();
  const db = useFirestore();
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState<'seeker' | 'employer'>('seeker');
  const [firebaseReady, setFirebaseReady] = useState(false);

  useEffect(() => {
    if (auth && db) {
      setFirebaseReady(true);
    }
  }, [auth, db]);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!auth || !db) {
      toast({
        variant: "destructive",
        title: "خطأ في الاتصال",
        description: "خدمات Firebase غير جاهزة. تأكد من إعداد مفاتيح المشروع.",
      });
      return;
    }

    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
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
      
      setDoc(userDocRef, userData)
        .then(() => {
          toast({
            title: "تم إنشاء الحساب بنجاح",
            description: "مرحباً بك في منصة وظفني!",
          });
          router.push(role === 'seeker' ? '/seeker/dashboard' : '/employer/dashboard');
        })
        .catch(async (dbError) => {
          const permissionError = new FirestorePermissionError({
            path: userDocRef.path,
            operation: 'create',
            requestResourceData: userData,
          });
          errorEmitter.emit('permission-error', permissionError);
          setLoading(false);
        });
    } catch (authError: any) {
      let title = "فشل إنشاء الحساب";
      let message = "حدث خطأ غير متوقع.";

      // معالجة مفتاح الـ API غير الصالح
      if (authError.code === 'auth/api-key-not-valid' || authError.message.includes('api-key-not-valid')) {
        title = "مفتاح Firebase غير صالح";
        message = "المفتاح الحالي (API Key) هو نص تجريبي. يرجى نسخ إعدادات مشروعك الحقيقية من Firebase Console ووضعها في ملف config.ts أو .env";
      } else if (authError.code === 'auth/email-already-in-use') {
        message = "البريد الإلكتروني مستخدم بالفعل.";
      } else if (authError.code === 'auth/weak-password') {
        message = "كلمة المرور ضعيفة جداً.";
      } else if (authError.code === 'auth/invalid-email') {
        message = "البريد الإلكتروني غير صحيح.";
      } else if (authError.code === 'auth/operation-not-allowed') {
        message = "يجب تفعيل 'Email/Password' في Firebase Console.";
      } else if (authError.code === 'auth/network-request-failed') {
        title = "خطأ في الشبكة";
        message = "يرجى التحقق من اتصالك بالإنترنت وتفعيل الدومين في Authorized Domains.";
      }
      
      toast({
        variant: "destructive",
        title: title,
        description: `${message} (${authError.code})`,
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
              "مطابقة ذكية للوظائف",
              "تحليل السيرة الذاتية مجاناً",
              "تواصل مباشر مع كبرى الشركات",
              "لوحة تحكم احترافية لإدارة طلباتك"
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
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-8 group justify-end">
              <span className="text-2xl font-bold font-headline text-primary">وظفني</span>
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-md p-1 text-primary flex items-center justify-center">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
                )}
              </div>
            </Link>
            <h1 className="text-4xl font-black font-headline text-primary">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">اختر نوع الحساب الذي يناسب احتياجاتك للمتابعة.</p>
          </div>

          {!firebaseReady && (
            <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl flex items-center gap-3 text-orange-700 font-bold">
              <Loader2 className="animate-spin w-5 h-5" /> جاري تهيئة الاتصال بقاعدة البيانات...
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
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>الاسم الكامل</span>
                    <User size={16} className="text-primary/60" />
                  </Label>
                  <Input name="fullName" required placeholder="أدخل اسمك الكامل" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>البريد الإلكتروني</span>
                    <Mail size={16} className="text-primary/60" />
                  </Label>
                  <Input name="email" type="email" required placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>رقم الهاتف</span>
                    <Phone size={16} className="text-primary/60" />
                  </Label>
                  <Input name="phone" placeholder="+967 7xx xxx xxx" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>كلمة المرور</span>
                    <Lock size={16} className="text-primary/60" />
                  </Label>
                  <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>تأكيد كلمة المرور</span>
                    <Lock size={16} className="text-primary/60" />
                  </Label>
                  <Input name="confirmPassword" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <Button disabled={loading || !firebaseReady} className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-white">
                  {loading ? <Loader2 className="animate-spin" /> : "إنشاء حساب كباحث عن عمل"}
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="employer">
              <form onSubmit={handleRegister} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2 md:col-span-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>اسم الشركة / المؤسسة</span>
                    <Building2 size={16} className="text-primary/60" />
                  </Label>
                  <Input name="fullName" required placeholder="أدخل اسم الشركة" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>البريد الإلكتروني للعمل</span>
                    <Mail size={16} className="text-primary/60" />
                  </Label>
                  <Input name="email" type="email" required placeholder="hr@company.com" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>مقر الشركة الرئيسي</span>
                    <MapPin size={16} className="text-primary/60" />
                  </Label>
                  <Input name="location" placeholder="صنعاء، عدن، المكلا..." className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>كلمة المرور</span>
                    <Lock size={16} className="text-primary/60" />
                  </Label>
                  <Input name="password" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <div className="space-y-2 text-right">
                  <Label className="font-bold flex items-center gap-2 justify-end">
                    <span>تأكيد كلمة المرور</span>
                    <Lock size={16} className="text-primary/60" />
                  </Label>
                  <Input name="confirmPassword" type="password" required placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" dir="rtl" />
                </div>
                <Button disabled={loading || !firebaseReady} className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 text-white">
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
