'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Settings, 
  BrainCircuit,
  User,
  Lock,
  Bell,
  Eye,
  LogOut,
  Save,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { useUser } from '@/firebase';

export default function SettingsPage() {
  const { user } = useUser();

  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={22} />, href: "/seeker/dashboard" },
    { label: "وظائفي المتقدم لها", icon: <Briefcase size={22} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={22} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={22} />, href: "/seeker/messages" },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={22} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={22} />, active: true, href: "/seeker/settings" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-10 gap-10">
        {/* Sidebar */}
        <aside className="hidden lg:block w-80 shrink-0">
          <div className="bg-white p-8 rounded-[40px] shadow-sm border border-primary/5 h-fit sticky top-28">
            <nav className="space-y-1">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={cn(
                    "flex items-center gap-4 p-4 rounded-2xl font-black transition-all group",
                    item.active ? "bg-primary text-white shadow-xl shadow-primary/20" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <span className={cn(item.active ? "text-secondary" : "text-primary/40 group-hover:text-primary/60")}>{item.icon}</span>
                  <span className="text-[15px]">{item.label}</span>
                </Link>
              ))}
            </nav>
            <div className="mt-10 pt-10 border-t">
              <Button variant="ghost" className="w-full justify-start gap-4 text-red-500 hover:bg-red-50 hover:text-red-600 rounded-2xl font-black h-14 transition-all">
                <LogOut size={20} /> تسجيل الخروج
              </Button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 space-y-10">
          <header className="space-y-2">
            <h1 className="text-4xl lg:text-5xl font-black font-headline text-primary tracking-tighter">إعدادات الحساب</h1>
            <p className="text-lg text-muted-foreground font-medium">تحكم في ملفك الشخصي، الأمان، وتفضيلات الإشعارات.</p>
          </header>

          <Tabs defaultValue="profile" className="w-full space-y-8" dir="rtl">
            <TabsList className="bg-white p-2 rounded-2xl shadow-sm border h-16 w-fit grid grid-cols-3 gap-2">
              <TabsTrigger value="profile" className="rounded-xl px-8 font-black data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
                <User size={18} /> الشخصي
              </TabsTrigger>
              <TabsTrigger value="security" className="rounded-xl px-8 font-black data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
                <Lock size={18} /> الأمان
              </TabsTrigger>
              <TabsTrigger value="notifications" className="rounded-xl px-8 font-black data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
                <Bell size={18} /> الإشعارات
              </TabsTrigger>
            </TabsList>

            <TabsContent value="profile" className="space-y-8 animate-in fade-in-50 duration-500">
              <Card className="rounded-[40px] border-none shadow-sm p-10 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-4">
                    <Label className="font-black text-primary">الاسم بالكامل</Label>
                    <Input defaultValue={user?.displayName || "أحمد محمد المقطري"} className="h-14 rounded-2xl bg-muted/30 border-none font-bold" />
                  </div>
                  <div className="space-y-4">
                    <Label className="font-black text-primary">البريد الإلكتروني</Label>
                    <Input defaultValue={user?.email || "emp@gmail.com"} className="h-14 rounded-2xl bg-muted/30 border-none font-bold" />
                  </div>
                  <div className="space-y-4">
                    <Label className="font-black text-primary">المسمى الوظيفي الحالي</Label>
                    <Input placeholder="مثال: مطور برمجيات" className="h-14 rounded-2xl bg-muted/30 border-none font-bold" />
                  </div>
                  <div className="space-y-4">
                    <Label className="font-black text-primary">رقم الهاتف</Label>
                    <Input placeholder="+967 7xx xxx xxx" className="h-14 rounded-2xl bg-muted/30 border-none font-bold" />
                  </div>
                </div>
                <div className="mt-10 pt-10 border-t flex justify-end">
                  <Button className="h-14 px-12 rounded-2xl bg-primary text-lg font-black gap-3 shadow-xl shadow-primary/20">
                    <Save size={20} /> حفظ التغييرات
                  </Button>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="security" className="space-y-8 animate-in fade-in-50 duration-500">
              <Card className="rounded-[40px] border-none shadow-sm p-10 bg-white space-y-10">
                <div className="space-y-6">
                  <h3 className="text-xl font-black text-primary flex items-center gap-3">
                    <Lock className="text-secondary" /> تغيير كلمة المرور
                  </h3>
                  <div className="grid grid-cols-1 gap-6 max-w-md">
                    <div className="space-y-3">
                      <Label className="font-bold">كلمة المرور الحالية</Label>
                      <Input type="password" placeholder="••••••••" className="h-14 rounded-2xl bg-muted/30 border-none" />
                    </div>
                    <div className="space-y-3">
                      <Label className="font-bold">كلمة المرور الجديدة</Label>
                      <Input type="password" placeholder="••••••••" className="h-14 rounded-2xl bg-muted/30 border-none" />
                    </div>
                  </div>
                  <Button className="h-12 px-8 rounded-xl bg-primary font-bold">تحديث كلمة المرور</Button>
                </div>

                <div className="pt-10 border-t space-y-6">
                  <h3 className="text-xl font-black text-primary flex items-center gap-3">
                    <Globe className="text-secondary" /> المصادقة الثنائية
                  </h3>
                  <div className="flex items-center justify-between p-6 bg-muted/20 rounded-3xl border border-dashed">
                    <div className="space-y-1">
                      <p className="font-black text-primary">إرسال كود التحقق عبر البريد</p>
                      <p className="text-sm text-muted-foreground font-medium">سيطلب منك التطبيق كود تحقق عند كل عملية دخول جديدة.</p>
                    </div>
                    <Switch />
                  </div>
                </div>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="space-y-8 animate-in fade-in-50 duration-500">
              <Card className="rounded-[40px] border-none shadow-sm p-10 bg-white space-y-8">
                <div className="space-y-10">
                  {[
                    { title: "تنبيهات الوظائف الجديدة", desc: "أرسل لي بريداً عند نشر وظائف تناسب مهاراتي.", icon: <Briefcase /> },
                    { title: "رسائل الشركات", desc: "تلقي إشعار فوري عند استلام رسالة جديدة من صاحب عمل.", icon: <MessageSquare /> },
                    { title: "حالة الطلبات", desc: "إشعارات عند تغيير حالة طلب التوظيف الخاص بي.", icon: <Eye /> },
                    { title: "نشرات مهنية", desc: "أهم الأخبار والنصائح الوظيفية في سوق العمل اليمني.", icon: <Globe /> }
                  ].map((pref, i) => (
                    <div key={i} className="flex items-center justify-between group">
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                          {pref.icon}
                        </div>
                        <div className="space-y-1">
                          <p className="font-black text-primary">{pref.title}</p>
                          <p className="text-sm text-muted-foreground font-medium">{pref.desc}</p>
                        </div>
                      </div>
                      <Switch defaultChecked />
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