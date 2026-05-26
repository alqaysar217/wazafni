
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BarChart3, TrendingUp, Users, Briefcase, Building2, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from 'recharts';

export default function AdminStatsPage() {
  const data = [
    { month: "يناير", users: 400, jobs: 240 },
    { month: "فبراير", users: 300, jobs: 139 },
    { month: "مارس", users: 200, jobs: 980 },
    { month: "أبريل", users: 278, jobs: 390 },
    { month: "مايو", users: 189, jobs: 480 },
    { month: "يونيو", users: 239, jobs: 380 },
  ];

  const chartConfig = {
    users: { label: "المستخدمين", color: "hsl(var(--primary))" },
    jobs: { label: "الوظائف", color: "hsl(var(--secondary))" },
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-10 space-y-10">
        <header className="space-y-2">
          <h1 className="text-4xl font-black text-primary tracking-tighter">مركز الإحصائيات</h1>
          <p className="text-lg text-muted-foreground font-medium">تحليل نمو المنصة وتوزيع المستخدمين في اليمن.</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Card className="rounded-[40px] border-none shadow-sm p-8 bg-white">
            <CardHeader className="flex flex-row items-center justify-between pb-8">
              <CardTitle className="text-2xl font-black text-primary">نمو التسجيل والوظائف</CardTitle>
              <TrendingUp className="text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <Bar dataKey="users" fill="hsl(var(--primary))" radius={[10, 10, 0, 0]} />
                    <Bar dataKey="jobs" fill="hsl(var(--secondary))" radius={[10, 10, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div className="bg-primary rounded-[40px] p-10 text-white space-y-8 relative overflow-hidden group">
              <Users className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <h3 className="text-3xl font-black relative z-10">أكثر المدن نشاطاً</h3>
              <div className="space-y-6 relative z-10">
                {[
                  { city: "صنعاء", percentage: 45, color: "bg-secondary" },
                  { city: "عدن", percentage: 25, color: "bg-green-500" },
                  { city: "تعز", percentage: 15, color: "bg-blue-500" },
                  { city: "حضرموت", percentage: 15, color: "bg-orange-500" }
                ].map((c, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between font-bold text-sm">
                      <span>{c.city}</span>
                      <span>{c.percentage}%</span>
                    </div>
                    <div className="h-2 w-full bg-white/10 rounded-full">
                      <div className={`h-full ${c.color} rounded-full`} style={{ width: `${c.percentage}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-10 rounded-[40px] border border-primary/5 shadow-sm grid grid-cols-2 gap-8">
              <div className="space-y-2">
                <p className="text-muted-foreground font-black text-[10px] uppercase tracking-widest">معدل التوظيف</p>
                <p className="text-4xl font-black text-primary">68%</p>
              </div>
              <div className="space-y-2">
                <p className="text-muted-foreground font-black text-[10px] uppercase tracking-widest">رضا الشركات</p>
                <p className="text-4xl font-black text-secondary">4.8/5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
