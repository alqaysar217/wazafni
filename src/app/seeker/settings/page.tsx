'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  User,
  Lock,
  Bell,
  Eye,
  LogOut,
  Save,
  Globe,
  Briefcase,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import { useUser, useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
  const { user } = useUser();
  const auth = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-10 max-w-5xl">
        <main className="space-y-12">
          <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 text-right">
              <h1 className="text-5xl font-black font-headline text-primary tracking-tighter">إعدادات الحساب</h1>
              <p className="text-xl text-muted-foreground font-medium">إدارة المعلومات الشخصية، الأمان وتفضيلات التواصل.</p>
            </div>
            <Button onClick={handleLogout} variant="outline" className="h-14 px-8 rounded-2xl border-red-100 text-red-500 hover:bg-red-50 hover:text-red-600 font-black gap-3 transition-all">
              <LogOut size={22} /> تسجيل الخروج
            </Button>
          </header>

          <Tabs defaultValue="profile" className="w-full space-y-10" dir="rtl">
            <TabsList className="bg-white p-3 rounded-[30px] shadow-sm border h-20 w-full md:w-fit grid grid-cols-3 gap-4">
              <TabsTrigger value="profile" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
                <User size={20} /> الشخصي
              </TabsTrigger>
              <TabsTrigger value="security" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
                <Lock size={20} /> الأمان
              </TabsTrigger>
              <TabsTrigger value="notifications" className="rounded-2xl px-10 font-black text-lg data-[state=active]:bg-primary data-[state=active]:text-white flex items-center justify-center gap-3">
                <Bell size={20} /> الإشعارات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-10 animate-in fade-in-50 duration-500">
              <Card className="rounded-[50px] border-none shadow-sm p-12 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-right">
                  <div className="space-y-5">
                    <Label className="font-black text-primary text-md mr-2">الاسم بالكامل</Label>
                    <Input defaultValue={user?.displayName || "أحمد محمد المقطري"} className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg focus-visible:ring-primary/10" />
                  </div>
                  <div className="space-y-5">
                    <Label className="font-black text-primary text-md mr-2">البريد الإلكتروني</Label>
                    <Input defaultValue={user?.email || "emp@gmail.com"} className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg focus-visible:ring-primary/10" />
                  </div>
                  <div className="space-y-5">
                    <Label className="font-black text-primary text-md mr-2">المسمى الوظيفي الحالي</Label>
                    <Input placeholder="مثال: مطور برمجيات أول" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg focus-visible:ring-primary/10" />
                  </div>
                  <div className="space-y-5">
                    <Label className="font-black text-primary text-md mr-2">رقم الهاتف</Label>
                    <Input placeholder="+967 7xx xxx xxx" className="h-16 rounded-3xl bg-muted/20 border-none font-bold px-8 text-lg focus-visible:ring-primary/10" />
                  </div>
                </div>
                <div className="mt-12 pt-10 border-t border-primary/5 flex justify-end">
                  <Button className="h-16 px-16 rounded-3xl bg-primary text-xl font-black gap-4 shadow-md transition-transform hover:translate-y-[-2px]">
                    <Save size={24} /> حفظ التغييرات
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-10 animate-in fade-in-50 duration-500">
              <Card className="rounded-[50px] border-none shadow-sm p-12 bg-white space-y-12">
                <div className="space-y-8 text-right">
                  <h3 className="text-2xl font-black text-primary flex items-center gap-4 font-headline tracking-tight justify-start">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary"><Lock size={20} /></div>
                    تغيير كلمة المرور
                  </h3>
                  <div className="grid grid-cols-1 gap-8 max-w-xl">
                    <div className="space-y-4">
                      <Label className="font-bold mr-2">كلمة المرور الحالية</Label>
                      <Input type="password" placeholder="••••••••" className="h-16 rounded-3xl bg-muted/20 border-none px-8 text-lg" />
                    </div>
                    <div className="space-y-4">
                      <Label className="font-bold mr-2">كلمة المرور الجديدة</Label>
                      <Input type="password" placeholder="••••••••" className="h-16 rounded-3xl bg-muted/20 border-none px-8 text-lg" />
                    </div>
                  </div>
                  <Button size="lg" className="h-14 px-10 rounded-2xl bg-primary font-black shadow-sm transition-transform hover:translate-y-[-2px]">تحديث كلمة المرور</Button>
                </div>

                <div className="pt-12 border-t border-primary/5 space-y-8 text-right">
                  <h3 className="text-2xl font-black text-primary flex items-center gap-4 font-headline tracking-tight justify-start">
                    <div className="w-10 h-10 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary"><Globe size={20} /></div>
                    المصادقة الثنائية (2FA)
                  </h3>
                  <div className="flex items-center justify-between p-10 bg-muted/10 rounded-[40px] border border-dashed border-primary/20 group hover:bg-muted/20 transition-all">
                    <div className="space-y-2">
                      <p className="font-black text-xl text-primary">إرسال كود التحقق عبر البريد</p>
                      <p className="text-md text-muted-foreground font-medium">سيطلب منك النظام كود تحقق إضافي عند الدخول من جهاز جديد.</p>
                    </div>
                    <Switch className="scale-125" />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-10 animate-in fade-in-50 duration-500">
              <Card className="rounded-[50px] border-none shadow-sm p-12 bg-white space-y-10">
                <div className="space-y-12 text-right">
                  {[
                    { title: "تنبيهات الوظائف الجديدة", desc: "استلام إشعارات فورية عند نشر وظائف تتوافق مع مهاراتك.", icon: <Briefcase /> },
                    { title: "رسائل الشركات", desc: "تلقي تنبيه عند استلام رسالة جديدة أو دعوة مقابلة.", icon: <MessageSquare /> },
                    { title: "حالة طلبات التوظيف", desc: "متابعة تحديثات الحالة لطلباتك المقدمة.", icon: <Eye /> },
                    { title: "أخبار مهنية", desc: "الحصول على نصائح حصرية لتعزيز مسارك المهني في اليمن.", icon: <Globe /> }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between group p-6 hover:bg-muted/10 rounded-[35px] transition-all">
                      <div className="flex items-center gap-8">
                        <div className="w-16 h-16 bg-primary/5 rounded-[25px] flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                          {pref.icon}
                        </div>
                        <div className="space-y-2">
                          <p className="font-black text-xl text-primary">{pref.title}</p>
                          <p className="text-md text-muted-foreground font-medium max-w-md">{pref.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked className="scale-110" />
                    </div>
                  ))}
                </div>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
}
