
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  Users, 
  Search, 
  UserPlus, 
  MoreVertical, 
  Shield, 
  UserX, 
  Mail,
  Filter,
  ArrowUpRight,
  ShieldCheck,
  Briefcase
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "أحمد محمد المقطري", email: "ahmed@mail.com", role: "seeker", status: "active", date: "2024/01/15", location: "صنعاء" },
    { id: 2, name: "سارة العبسي", email: "sara@hsa.ye", role: "employer", status: "active", date: "2024/02/10", location: "تعز" },
    { id: 3, name: "علي سالم الحاشدي", email: "ali@test.com", role: "seeker", status: "banned", date: "2023/12/05", location: "عدن" },
    { id: 4, name: "مجموعة هائل سعيد", email: "hr@hsa.com", role: "employer", status: "active", date: "2024/03/01", location: "تعز" },
    { id: 5, name: "فاطمة الضبيبي", email: "fatima@design.ye", role: "seeker", status: "active", date: "2024/02/20", location: "إب" },
    { id: 6, name: "بنك الكريمي", email: "jobs@kuraimi.ye", role: "employer", status: "active", date: "2023/11/15", location: "صنعاء" }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="space-y-2 text-right">
            <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">إدارة المستخدمين</h1>
            <p className="text-lg text-muted-foreground font-medium">عرض وإدارة كافة حسابات الباحثين وأصحاب العمل في المنصة.</p>
          </div>
          <Button className="rounded-2xl h-14 px-10 bg-primary font-black gap-3 text-white shadow-xl shadow-primary/20 hover:translate-y-[-2px] transition-transform">
            <UserPlus size={20} /> إضافة مستخدم جديد
          </Button>
        </header>

        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: "إجمالي المسجلين", val: "15,240", icon: <Users />, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "باحثين نشطين", val: "14,100", icon: <Briefcase />, color: "text-purple-600", bg: "bg-purple-50" },
            { label: "أصحاب عمل موثقين", val: "1,140", icon: <ShieldCheck />, color: "text-green-600", bg: "bg-green-50" }
          ].map((s, i) => (
            <div key={i} className="bg-white p-8 rounded-[40px] border border-primary/5 shadow-sm flex items-center gap-6">
              <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center", s.bg, s.color)}>{s.icon}</div>
              <div>
                <p className="text-3xl font-black text-primary">{s.val}</p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-[35px] shadow-sm border border-primary/5 flex flex-wrap items-center gap-6">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute right-5 top-5 text-muted-foreground" size={20} />
            <Input placeholder="بحث بالاسم، البريد أو الموقع..." className="h-16 rounded-2xl pr-14 bg-muted/10 border-none font-bold text-lg focus-visible:ring-primary/10" />
          </div>
          <div className="flex gap-4">
            <Button variant="outline" className="h-16 rounded-2xl border-primary/10 font-bold gap-3 px-8 text-primary bg-white hover:bg-muted/5 shadow-sm">
              <Filter size={18} /> تصفية النتائج
            </Button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-[50px] border border-primary/5 shadow-sm overflow-hidden border border-primary/5">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <th className="px-10 py-8">المستخدم</th>
                  <th className="px-10 py-8">الدور</th>
                  <th className="px-10 py-8">الموقع</th>
                  <th className="px-10 py-8">الحالة</th>
                  <th className="px-10 py-8">تاريخ الانضمام</th>
                  <th className="px-10 py-8">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-muted/5 transition-colors group">
                    <td className="px-10 py-10">
                      <div className="flex items-center gap-6">
                        <div className="relative">
                          <Avatar className="w-16 h-16 border-4 border-white shadow-md transition-transform group-hover:scale-105 shrink-0">
                            <AvatarImage src={`https://picsum.photos/seed/${u.id}/100/100`} />
                            <AvatarFallback>U</AvatarFallback>
                          </Avatar>
                          <div className={cn("absolute bottom-0 right-0 w-4 h-4 rounded-full border-2 border-white", u.status === 'active' ? 'bg-green-500' : 'bg-red-500')}></div>
                        </div>
                        <div className="min-w-0">
                          <p className="font-black text-xl text-primary truncate leading-tight mb-1">{u.name}</p>
                          <p className="text-xs text-muted-foreground font-bold flex items-center gap-2">
                            <Mail size={12} className="text-primary/20" /> {u.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-10 py-10">
                      <Badge variant="outline" className={cn(
                        "rounded-xl px-5 py-2 font-black text-[10px] uppercase tracking-wider border-none",
                        u.role === 'seeker' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      )}>
                        {u.role === 'seeker' ? 'باحث عن عمل' : 'صاحب عمل'}
                      </Badge>
                    </td>
                    <td className="px-10 py-10">
                      <span className="font-bold text-muted-foreground">{u.location}</span>
                    </td>
                    <td className="px-10 py-10">
                      <Badge className={cn(
                        "rounded-full px-5 py-2 font-black text-[10px] uppercase tracking-wider border-none",
                        u.status === 'active' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                      )}>
                        {u.status === 'active' ? 'نشط' : 'محظور'}
                      </Badge>
                    </td>
                    <td className="px-10 py-10 font-bold text-muted-foreground/60">{u.date}</td>
                    <td className="px-10 py-10">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-blue-500 hover:bg-blue-50"><Mail size={20} /></Button>
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-red-500 hover:bg-red-50"><UserX size={20} /></Button>
                        <Button variant="ghost" size="icon" className="rounded-xl h-12 w-12 text-primary/40"><MoreVertical size={20} /></Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
