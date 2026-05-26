'use client';

import { Navbar } from '@/components/layout/Navbar';
import { 
  Search,
  MoreVertical,
  Send,
  Paperclip,
  CheckCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { cn } from '@/lib/utils';

export default function MessagesPage() {
  const chats = [
    { id: 1, name: "بنك الكريمي الإسلامي", lastMsg: "تمت مراجعة ملفك، هل أنت متاح للمقابلة؟", time: "10:30 ص", unread: 2, online: true },
    { id: 2, name: "يمن تيك للحلول", lastMsg: "شكراً لتواصلك معنا، سنرد عليك قريباً.", time: "الأمس", unread: 0, online: false },
    { id: 3, name: "مجموعة هائل سعيد", lastMsg: "نعتذر، تم ملء الشاغر الوظيفي حالياً.", time: "الأربعاء", unread: 0, online: false }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      
      <div className="flex-1 container mx-auto px-4 py-8 max-w-6xl overflow-hidden">
        <main className="flex bg-white rounded-[50px] shadow-2xl border border-primary/5 overflow-hidden h-[750px]">
          {/* Chats List */}
          <div className="w-96 border-l flex flex-col bg-muted/5">
            <div className="p-8 border-b space-y-6">
              <h2 className="text-3xl font-black text-primary tracking-tight font-headline">المحادثات</h2>
              <div className="relative">
                <Search className="absolute right-4 top-4 text-muted-foreground" size={20} />
                <Input placeholder="بحث عن شركة..." className="pr-12 rounded-2xl bg-white border-primary/5 h-14 text-md font-bold shadow-sm" />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {chats.map(chat => (
                <div key={chat.id} className={cn(
                  "p-6 flex items-start gap-5 cursor-pointer hover:bg-white transition-all border-b last:border-0 group",
                  chat.unread > 0 && "bg-secondary/5"
                )}>
                  <div className="relative shrink-0">
                    <Avatar className="w-16 h-16 border-4 border-white shadow-xl transition-transform group-hover:scale-105">
                      <AvatarImage src={`https://picsum.photos/seed/${chat.id}/100/100`} />
                      <AvatarFallback>C</AvatarFallback>
                    </Avatar>
                    {chat.online && <div className="absolute bottom-1 left-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>}
                  </div>
                  <div className="flex-1 min-w-0 py-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-black text-md text-primary truncate group-hover:text-secondary transition-colors">{chat.name}</h4>
                      <span className="text-xs font-black text-muted-foreground/50">{chat.time}</span>
                    </div>
                    <p className={cn(
                      "text-sm truncate font-medium",
                      chat.unread > 0 ? "text-primary font-black" : "text-muted-foreground"
                    )}>{chat.lastMsg}</p>
                  </div>
                  {chat.unread > 0 && (
                    <div className="w-6 h-6 bg-secondary text-white text-xs flex items-center justify-center rounded-full font-black mt-2 shadow-lg shadow-secondary/20">
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
            <div className="p-6 border-b bg-white/50 backdrop-blur-md flex items-center justify-between">
              <div className="flex items-center gap-5">
                <Avatar className="w-14 h-14 border-4 border-white shadow-lg">
                  <AvatarImage src="https://picsum.photos/seed/1/100/100" />
                  <AvatarFallback>B</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-black text-lg text-primary leading-tight">بنك الكريمي الإسلامي</h4>
                  <p className="text-xs font-black text-green-500 flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> متصل الآن
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="rounded-2xl h-12 w-12 hover:bg-primary/5 text-primary"><MoreVertical size={24} /></Button>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-10 overflow-y-auto space-y-8 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-fixed opacity-95">
              <div className="flex justify-center">
                <span className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full text-xs font-black text-muted-foreground uppercase tracking-widest shadow-sm border border-primary/5">اليوم</span>
              </div>
              
              <div className="flex items-start gap-5">
                <Avatar className="w-10 h-10 border-2 border-white shadow-md"><AvatarImage src="https://picsum.photos/seed/1/100/100" /></Avatar>
                <div className="bg-white p-6 rounded-[30px] rounded-tr-none shadow-xl shadow-primary/5 border border-primary/5 max-w-lg">
                  <p className="text-md font-bold leading-relaxed text-primary/80">أهلاً أحمد، قمنا بمراجعة ملفك الشخصي المحدث بالذكاء الاصطناعي ووجدنا مهاراتك في React و Node.js ممتازة جداً ومناسبة تماماً لمتطلباتنا.</p>
                  <span className="text-[10px] text-muted-foreground font-black mt-3 block text-left">10:25 ص</span>
                </div>
              </div>

              <div className="flex items-start gap-5 flex-row-reverse">
                <Avatar className="w-10 h-10 border-2 border-white shadow-md"><AvatarImage src="https://picsum.photos/seed/seeker/100/100" /></Avatar>
                <div className="bg-primary p-6 rounded-[30px] rounded-tl-none shadow-2xl shadow-primary/20 text-white max-w-lg">
                  <p className="text-md font-bold leading-relaxed">أهلاً بكم، شكراً جزيلاً لتقديركم. أنا متاح للمقابلة في أي وقت يناسبكم الأسبوع القادم، وأتطلع لمناقشة كيف يمكنني المساهمة في فريقكم.</p>
                  <div className="flex items-center justify-end gap-2 mt-3">
                    <span className="text-[10px] text-white/60 font-black">10:28 ص</span>
                    <CheckCheck size={16} className="text-secondary" />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <Avatar className="w-10 h-10 border-2 border-white shadow-md"><AvatarImage src="https://picsum.photos/seed/1/100/100" /></Avatar>
                <div className="bg-white p-6 rounded-[30px] rounded-tr-none shadow-xl shadow-primary/5 border border-primary/5 max-w-lg">
                  <p className="text-md font-bold leading-relaxed text-primary/80">رائع! هل أنت متاح يوم الأحد القادم الساعة 10 صباحاً لإجراء مقابلة تقنية عبر Zoom؟</p>
                  <span className="text-[10px] text-muted-foreground font-black mt-3 block text-left">10:30 ص</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-8 bg-white border-t border-primary/5 backdrop-blur-md">
              <div className="flex items-center gap-5">
                <Button variant="ghost" size="icon" className="rounded-2xl h-14 w-14 shrink-0 hover:bg-primary/5"><Paperclip size={28} className="text-muted-foreground" /></Button>
                <div className="flex-1 relative">
                  <Input placeholder="اكتب رسالتك هنا..." className="h-16 rounded-3xl bg-muted/20 border-none px-8 font-bold text-md shadow-inner focus-visible:ring-secondary/20" />
                </div>
                <Button className="h-16 w-16 rounded-3xl bg-primary shadow-2xl shadow-primary/20 hover:scale-105 transition-transform"><Send size={28} /></Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
