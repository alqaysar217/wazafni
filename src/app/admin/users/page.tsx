
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
  Filter
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AdminUsersPage() {
  const users = [
    { id: 1, name: "أحمد المقطري", email: "ahmed@mail.com", role: "seeker", status: "active", date: "2024/01/15" },
    { id: 2, name: "سارة العبسي", email: "sara@company.ye", role: "employer", status: "active", date: "2024/02/10" },
    { id: 3, name: "علي سالم", email: "ali@test.com", role: "seeker", status: "banned", date: "2023/12/05" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-4xl font-black text-primary tracking-tighter">إدارة المستخدمين</h1>
            <p className="text-lg text-muted-foreground font-medium">عرض وإدارة كافة حسابات الباحثين وأصحاب العمل.</p>
          </div>
          <Button className="rounded-2xl h-14 px-8 bg-primary font-black gap-3 text-white">
            <UserPlus size={20} /> إضافة مستخدم جديد
          </Button>
        </header>

        <div className="bg-white p-6 rounded-[30px] shadow-sm border border-primary/5 flex flex-wrap items-center gap-4">
          <div className="flex-1 relative min-w-[300px]">
            <Search className="absolute right-4 top-4 text-muted-foreground" size={20} />
            <Input placeholder="بحث بالاسم أو البريد..." className="h-14 rounded-2xl pr-12 bg-muted/10 border-none font-bold" />
          </div>
          <Button variant="outline" className="h-14 rounded-2xl border-primary/10 font-bold gap-2">
            <Filter size={18} /> تصفية
          </Button>
        </div>

        <div className="bg-white rounded-[40px] border border-primary/5 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-muted/30 border-b text-[10px] font-black uppercase tracking-widest text-primary/60">
                  <th className="px-8 py-6">المستخدم</th>
                  <th className="px-8 py-6">الدور</th>
                  <th className="px-8 py-6">الحالة</th>
                  <th className="px-8 py-6">تاريخ الانضمام</th>
                  <th className="px-8 py-6">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {users.map((u) => (
                  <tr key={u.id} className="hover:bg-muted/5 transition-colors">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border-2 border-white shadow-sm">
                          <AvatarImage src={`https://picsum.photos/seed/${u.id}/100/100`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-black text-primary">{u.name}</p>
                          <p className="text-xs text-muted-foreground font-bold">{u.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <Badge variant="outline" className="rounded-lg font-bold">
                        {u.role === 'seeker' ? 'باحث عن عمل' : 'صاحب عمل'}
                      </Badge>
                    </td>
                    <td className="px-8 py-6">
                      <Badge className={cn(
                        "rounded-full px-4 py-1 font-black text-[10px] uppercase tracking-wider",
                        u.status === 'active' ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'
                      )}>
                        {u.status === 'active' ? 'نشط' : 'محظور'}
                      </Badge>
                    </td>
                    <td className="px-8 py-6 font-bold text-muted-foreground">{u.date}</td>
                    <td className="px-8 py-6">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="icon" className="text-blue-500 hover:bg-blue-50"><Mail size={18} /></Button>
                        <Button variant="ghost" size="icon" className="text-red-500 hover:bg-red-50"><UserX size={18} /></Button>
                        <Button variant="ghost" size="icon"><MoreVertical size={18} /></Button>
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
