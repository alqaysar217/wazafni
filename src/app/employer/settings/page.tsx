
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Building2, 
  Shield, 
  Bell, 
  Globe, 
  Mail, 
  Phone, 
  MapPin, 
  Save, 
  Upload,
  Camera,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EmployerSettingsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-12 max-w-6xl space-y-12">
        <header className="space-y-2 text-right">
          <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">إعدادات المؤسسة</h1>
          <p className="text-xl text-muted-foreground font-medium">إدارة ملفك التعريفي، العلامة التجارية، وصلاحيات التوظيف.</p>
        </header>

        <Tabs defaultValue="company" className="w-full space-y-10" dir="rtl">
          <TabsList className="bg-white p-3 rounded-[30px] shadow-sm border h-20 w-full md:w-fit grid grid-cols-3 gap-4">
            <TabsTrigger value="company" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
              <Building2 size={20} /> بيانات الشركة
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
              <Shield size={20} /> الأمان والتوثيق
            </TabsTrigger>
            <TabsTrigger value="notifications" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
              <Bell size={20} /> الإشعارات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="company" className="space-y-10">
            <div className="bg-white p-12 rounded-[50px] border border-primary/5 shadow-sm space-y-12">
              {/* Branding Section */}
              <div className="flex flex-col md:flex-row items-center gap-12 border-b border-primary/5 pb-12">
                <div className="relative group">
                  <div className="w-40 h-40 rounded-[40px] bg-primary/5 border-4 border-white shadow-xl flex items-center justify-center overflow-hidden transition-transform group-hover:scale-105">
                    <img src="https://picsum.photos/seed/company/200/200" alt="Logo" className="object-cover w-full h-full" />
                  </div>
                  <Button size="icon" className="absolute -bottom-2 -right-2 rounded-2xl w-12 h-12 bg-secondary text-white shadow-lg border-4 border-white"><Camera size={20} /></Button>
                </div>
                <div className="text-right space-y-3">
                  <h3 className="text-3xl font-black text-primary">شعار المؤسسة</h3>
                  <p className="text-muted-foreground font-medium max-w-md">يرجى رفع شعار بدقة عالية (PNG أو JPG) بحد أقصى 2 ميجابايت.</p>
                  <Button variant="outline" className="rounded-xl h-12 px-8 border-primary/10 font-black mt-2">تحديث الصورة</Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-right">
                <div className="space-y-4">
                  <Label className="font-black text-primary text-md">اسم المؤسسة (بالعربي)</Label>
                  <Input defaultValue="مجموعة هائل سعيد أنعم" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg" />
                </div>
                <div className="space-y-4">
                  <Label className="font-black text-primary text-md">البريد الإلكتروني للعمل</Label>
                  <Input defaultValue="hr@hsa-group.ye" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg" />
                </div>
                <div className="space-y-4">
                  <Label className="font-black text-primary text-md">الموقع الإلكتروني</Label>
                  <Input defaultValue="www.hsa-group.com" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg" dir="ltr" />
                </div>
                <div className="space-y-4">
                  <Label className="font-black text-primary text-md">رقم الهاتف الرسمي</Label>
                  <Input defaultValue="+967 4 211000" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg" dir="ltr" />
                </div>
                <div className="md:col-span-2 space-y-4">
                  <Label className="font-black text-primary text-md">نبذة عن المؤسسة</Label>
                  <Textarea defaultValue="أكبر تكتل صناعي وتجاري في اليمن يعمل في مجالات متنوعة..." className="min-h-[150px] rounded-3xl bg-muted/20 border-none font-bold p-8 text-lg" />
                </div>
              </div>

              <div className="pt-10 border-t border-primary/5 flex justify-end">
                <Button className="h-16 px-20 rounded-3xl bg-primary text-xl font-black gap-4 shadow-xl shadow-primary/20 transition-transform hover:translate-y-[-3px]">
                  <Save size={24} /> حفظ التغييرات
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-10">
            <div className="bg-white p-12 rounded-[50px] border border-primary/5 shadow-sm space-y-10 text-right">
              <div className="flex items-center justify-between p-10 bg-green-50 rounded-[40px] border border-green-100 group transition-all">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-green-500 text-white flex items-center justify-center shadow-lg"><Globe size={20} /></div>
                    <p className="font-black text-2xl text-green-700">حساب موثق</p>
                  </div>
                  <p className="text-lg text-green-600/80 font-medium">مؤسستك موثقة بالعلامة الزرقاء، مما يزيد ثقة الباحثين بنسبة 90%.</p>
                </div>
              </div>

              <div className="pt-10 space-y-12">
                <h3 className="text-2xl font-black text-primary border-b border-primary/5 pb-4">إدارة الدخول</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label className="font-bold">كلمة المرور الحالية</Label>
                    <Input type="password" placeholder="••••••••" className="h-16 rounded-3xl bg-muted/10 border-none px-8" />
                  </div>
                  <div className="space-y-4">
                    <Label className="font-bold">كلمة المرور الجديدة</Label>
                    <Input type="password" placeholder="••••••••" className="h-16 rounded-3xl bg-muted/10 border-none px-8" />
                  </div>
                </div>
                <Button variant="outline" className="h-14 px-10 rounded-2xl border-primary/10 font-black">تحديث كلمة السر</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}
