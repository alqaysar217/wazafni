
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Settings, Shield, Bell, Globe, Save, Database, Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function AdminSettingsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-black text-primary tracking-tighter">إعدادات النظام</h1>
          <p className="text-lg text-muted-foreground font-medium">التحكم في معايير المنصة، الأمان، والربط التقني.</p>
        </header>

        <Tabs defaultValue="general" className="w-full space-y-8" dir="rtl">
          <TabsList className="bg-white p-2 rounded-2xl shadow-sm border h-16 w-fit grid grid-cols-3 gap-2">
            <TabsTrigger value="general" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
              <Settings size={18} /> عام
            </TabsTrigger>
            <TabsTrigger value="security" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
              <Shield size={18} /> الأمان
            </TabsTrigger>
            <TabsTrigger value="integration" className="rounded-xl font-bold px-8 data-[state=active]:bg-primary data-[state=active]:text-white flex items-center gap-2">
              <Database size={18} /> الربط
            </TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="space-y-8">
            <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <Label className="font-black text-primary">اسم المنصة</Label>
                  <Input defaultValue="وظفني - Wazafni" className="h-14 rounded-2xl bg-muted/10 border-none font-bold px-6" />
                </div>
                <div className="space-y-4">
                  <Label className="font-black text-primary">البريد الإلكتروني الرسمي</Label>
                  <Input defaultValue="info@wazafni.ye" className="h-14 rounded-2xl bg-muted/10 border-none font-bold px-6" />
                </div>
              </div>
              <div className="pt-8 border-t border-primary/5 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="font-black text-primary">وضع الصيانة</p>
                  <p className="text-sm text-muted-foreground font-medium">إيقاف استقبال الطلبات الجديدة مؤقتاً.</p>
                </div>
                <Switch />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="security" className="space-y-8">
            <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm space-y-10">
              <div className="flex items-center justify-between group">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                    <Key size={24} />
                  </div>
                  <div className="space-y-1">
                    <p className="font-black text-primary">المصادقة الثنائية الإجبارية للشركات</p>
                    <p className="text-sm text-muted-foreground font-medium">فرض كود التحقق عند دخول أي شركة جديدة.</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end">
          <Button className="rounded-2xl h-16 px-16 bg-primary font-black shadow-xl shadow-primary/20 text-white gap-3 text-lg">
            <Save size={24} /> حفظ كافة الإعدادات
          </Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
