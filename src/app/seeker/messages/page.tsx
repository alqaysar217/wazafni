'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  LayoutDashboard, 
  Briefcase, 
  FileText, 
  MessageSquare, 
  Settings, 
  BrainCircuit,
  Search,
  MoreVertical,
  Send,
  Paperclip,
  CheckCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export default function MessagesPage() {
  const sidebarItems = [
    { label: "لوحة التحكم", icon: <LayoutDashboard size={22} />, href: "/seeker/dashboard" },
    { label: "وظائفي المتقدم لها", icon: <Briefcase size={22} />, href: "/seeker/applied-jobs" },
    { label: "السيرة الذاتية", icon: <FileText size={22} />, href: "/seeker/resume" },
    { label: "الرسائل", icon: <MessageSquare size={22} />, active: true, href: "/seeker/messages", badge: 3 },
    { label: "أدوات الذكاء الاصطناعي", icon: <BrainCircuit size={22} />, href: "/seeker/ai-tools" },
    { label: "الإعدادات", icon: <Settings size={22} />, href: "/seeker/settings" }
  ];

  const chats = [
    { id: 1, name: "بنك الكريمي الإسلامي", lastMsg: "تمت مراجعة ملفك، هل أنت متاح للمقابلة؟", time: "10:30 ص", unread: 2, online: true },
    { id: 2, name: "يمن تيك للحلول", lastMsg: "شكراً لتواصلك معنا، سنرد عليك قريباً.", time: "الأمس", unread: 0, online: false },
    { id: 3, name: "مجموعة هائل سعيد", lastMsg: "نعتذر، تم ملء الشاغر الوظيفي حالياً.", time: "الأربعاء", unread: 0, online: false }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 flex container mx-auto px-4 py-8 gap-8 overflow-hidden h-[calc(100vh-80px)]">
        {/* Sidebar */}
        <aside className="hidden lg:block w-72 shrink-0">
          <div className="bg-white p-6 space-y-6 shadow-sm rounded-[30px] border h-full">
            <nav className="space-y-1">
              {sidebarItems.map(item => (
                <Link 
                  key={item.label} 
                  href={item.href} 
                  className={cn(
                    "flex items-center justify-between p-3 rounded-2xl font-black transition-all",
                    item.active ? "bg-primary text-white shadow-lg" : "text-muted-foreground hover:bg-primary/5 hover:text-primary"
                  )}
                >
                  <div className="flex items-center gap-3">
                    {item.icon}
                    <span className="text-sm">{item.label}</span>
                  </div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Messaging Area */}
        <main className="flex-1 flex bg-white rounded-[40px] shadow-sm border overflow-hidden">
          {/* Chats List */}
          <div className="w-80 border-l flex flex-col">
            <div className="p-6 border-b space-y-4">
              <h2 className="text-xl font-black text-primary tracking-tight">المحادثات</h2>
              <div className="relative">
                <Search className="absolute right-3 top-3 text-muted-foreground" size={16} />
                <Input placeholder="بحث..." className="pr-10 rounded-xl bg-muted/30 border-none h-11 text-sm font-bold" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map(chat => (
                <div key={chat.id} className={cn(
                  "p-5 flex items-start gap-4 cursor-pointer hover:bg-muted/30 transition-colors border-b last:border-0",
                  chat.unread > 0 && "bg-secondary/5"
                )}>
                  <div className="relative shrink-0">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                      <AvatarImage src={`https://picsum.photos/seed/${chat.id}/100/100`} />
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    {chat.online && <div className="absolute bottom-0 left-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-black text-sm text-primary truncate">{chat.name}</h4>
                      <span className="text-[10px] font-bold text-muted-foreground">{chat.time}</span>
                    </div>
                    <p className={cn(
                      "text-xs truncate font-medium",
                      chat.unread > 0 ? "text-primary font-black" : "text-muted-foreground"
                    )}>{chat.lastMsg}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-5 h-5 bg-secondary text-white text-[10px] flex items-center justify-center rounded-full font-black mt-1">
                      {chat.unread}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Active Chat */}
          <div className="flex-1 flex flex-col bg-[#FBFBFE]">
            {/* Chat Header */}
            <div className="p-5 border-b bg-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="w-10 h-10 border shadow-sm">
                  <AvatarImage src="https://picsum.photos/seed/1/100/100" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-black text-sm text-primary">بنك الكريمي الإسلامي</h4>
                  <p className="text-[10px] font-bold text-green-500">متصل الآن</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" className="rounded-xl"><MoreVertical size={20} /></Button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-8 overflow-y-auto space-y-6">
              <div className="flex justify-center">
                <span className="bg-muted px-4 py-1 rounded-full text-[10px] font-bold text-muted-foreground uppercase tracking-widest">اليوم</span>
              </div>
              
              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8"><AvatarImage src="https://picsum.photos/seed/1/100/100" /></Avatar>
                <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm border max-w-md">
                  <p className="text-sm font-medium leading-relaxed">أهلاً أحمد، قمنا بمراجعة ملفك الشخصي المحدث بالذكاء الاصطناعي ووجدنا مهاراتك في React و Node.js ممتازة جداً.</p>
                  <span className="text-[10px] text-muted-foreground font-bold mt-2 block">10:25 ص</span>
                </div>
              </div>

              <div className="flex items-start gap-4 flex-row-reverse">
                <Avatar className="w-8 h-8"><AvatarImage src="https://picsum.photos/seed/seeker/100/100" /></Avatar>
                <div className="bg-primary p-4 rounded-2xl rounded-tl-none shadow-lg text-white max-w-md">
                  <p className="text-sm font-medium leading-relaxed">أهلاً بكم، شكراً جزيلاً لتقديركم. أنا متاح للمقابلة في أي وقت يناسبكم الأسبوع القادم.</p>
                  <div className="flex items-center justify-end gap-1 mt-2">
                    <span className="text-[10px] text-white/60 font-bold">10:28 ص</span>
                    <CheckCheck size={14} className="text-secondary" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Avatar className="w-8 h-8"><AvatarImage src="https://picsum.photos/seed/1/100/100" /></Avatar>
                <div className="bg-white p-4 rounded-2xl rounded-tr-none shadow-sm border max-w-md">
                  <p className="text-sm font-medium leading-relaxed">رائع! هل أنت متاح يوم الأحد القادم الساعة 10 صباحاً لإجراء مقابلة تقنية عبر Zoom؟</p>
                  <span className="text-[10px] text-muted-foreground font-bold mt-2 block">10:30 ص</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-6 bg-white border-t">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="icon" className="rounded-xl shrink-0"><Paperclip size={20} className="text-muted-foreground" /></Button>
                <div className="flex-1 relative">
                  <Input placeholder="اكتب رسالتك هنا..." className="h-14 rounded-2xl bg-muted/30 border-none pr-6 font-bold text-sm" />
                </div>
                <Button className="h-14 w-14 rounded-2xl bg-primary shadow-xl shadow-primary/20"><Send size={20} /></Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}