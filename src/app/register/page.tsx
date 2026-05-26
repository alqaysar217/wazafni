
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building2, ArrowLeft, CheckCircle2, User, Mail, Lock, Phone, MapPin } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function RegisterPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'logo-main');

  return (
    <div className="min-h-screen flex items-stretch" dir="rtl">
      {/* Right side: Visual Content */}
      <div className="hidden lg:flex w-1/2 bg-primary relative items-center justify-center p-20 overflow-hidden order-2">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary opacity-90"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
        
        <div className="relative z-10 text-white space-y-12 max-w-lg text-right">
          <Link href="/" className="inline-flex items-center gap-3 mb-12 group">
            <div className="relative w-12 h-12 bg-white rounded-xl overflow-hidden shadow-xl p-1 transition-transform group-hover:scale-110">
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
        
        {/* Abstract Shapes */}
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      </div>

      {/* Left side: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 md:p-16 bg-[#F8F7FA] order-1">
        <div className="w-full max-w-xl space-y-10 animate-fade-in-up">
          <div className="space-y-4 text-right">
            <Link href="/" className="lg:hidden flex items-center gap-2 mb-8 group justify-end">
              <span className="text-2xl font-bold font-headline text-primary">وظفني</span>
              <div className="relative w-10 h-10 bg-white rounded-xl overflow-hidden shadow-md p-1">
                {logo?.imageUrl && (
                  <Image src={logo.imageUrl} alt="Wazafni" fill className="object-contain" />
                )}
              </div>
            </Link>
            <h1 className="text-4xl font-black font-headline text-primary">إنشاء حساب جديد</h1>
            <p className="text-muted-foreground">اختر نوع الحساب الذي يناسب احتياجاتك للمتابعة.</p>
          </div>

          <Tabs defaultValue="seeker" className="w-full space-y-8">
            <TabsList className="grid w-full grid-cols-2 h-16 p-2 bg-white rounded-2xl shadow-sm border">
              <TabsTrigger value="seeker" className="rounded-xl font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center justify-center">
                <User size={20} /> باحث عن عمل
              </TabsTrigger>
              <TabsTrigger value="employer" className="rounded-xl font-bold text-lg data-[state=active]:bg-primary data-[state=active]:text-white gap-2 flex items-center justify-center">
                <Building2 size={20} /> صاحب عمل
              </TabsTrigger>
            </TabsList>

            <TabsContent value="seeker" className="space-y-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="s-name" className="font-bold flex items-center gap-2 justify-start">
                    <User size={16} className="text-primary/60" />
                    <span>الاسم الكامل</span>
                  </Label>
                  <Input id="s-name" placeholder="أدخل اسمك الكامل" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="s-email" className="font-bold flex items-center gap-2 justify-start">
                    <Mail size={16} className="text-primary/60" />
                    <span>البريد الإلكتروني</span>
                  </Label>
                  <Input id="s-email" type="email" placeholder="example@gmail.com" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="s-phone" className="font-bold flex items-center gap-2 justify-start">
                    <Phone size={16} className="text-primary/60" />
                    <span>رقم الهاتف</span>
                  </Label>
                  <Input id="s-phone" placeholder="+967 7xx xxx xxx" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="s-password" className="font-bold flex items-center gap-2 justify-start">
                    <Lock size={16} className="text-primary/60" />
                    <span>كلمة المرور</span>
                  </Label>
                  <Input id="s-password" type="password" placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="s-confirm" className="font-bold flex items-center gap-2 justify-start">
                    <Lock size={16} className="text-primary/60" />
                    <span>تأكيد كلمة المرور</span>
                  </Label>
                  <Input id="s-confirm" type="password" placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <Button className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20 text-white">
                  إنشاء حساب كباحث عن عمل
                </Button>
              </form>
            </TabsContent>

            <TabsContent value="employer" className="space-y-6">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-right">
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="c-name" className="font-bold flex items-center gap-2 justify-start">
                    <Building2 size={16} className="text-primary/60" />
                    <span>اسم الشركة / المؤسسة</span>
                  </Label>
                  <Input id="c-name" placeholder="أدخل اسم الشركة" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email" className="font-bold flex items-center gap-2 justify-start">
                    <Mail size={16} className="text-primary/60" />
                    <span>البريد الإلكتروني للعمل</span>
                  </Label>
                  <Input id="c-email" type="email" placeholder="hr@company.com" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-location" className="font-bold flex items-center gap-2 justify-start">
                    <MapPin size={16} className="text-primary/60" />
                    <span>مقر الشركة الرئيسي</span>
                  </Label>
                  <Input id="c-location" placeholder="صنعاء، عدن، المكلا..." className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-password" className="font-bold flex items-center gap-2 justify-start">
                    <Lock size={16} className="text-primary/60" />
                    <span>كلمة المرور</span>
                  </Label>
                  <Input id="c-password" type="password" placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-confirm" className="font-bold flex items-center gap-2 justify-start">
                    <Lock size={16} className="text-primary/60" />
                    <span>تأكيد كلمة المرور</span>
                  </Label>
                  <Input id="c-confirm" type="password" placeholder="••••••••" className="h-14 rounded-xl border-border bg-white text-right" />
                </div>
                <Button className="md:col-span-2 h-14 rounded-xl text-lg font-black bg-secondary hover:bg-secondary/90 shadow-xl shadow-secondary/20 text-white">
                  إنشاء حساب كصاحب عمل
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          <p className="text-center text-muted-foreground font-medium">
            لديك حساب بالفعل؟ <Link href="/login" className="text-primary font-black hover:underline transition-all">تسجيل الدخول</Link>
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
