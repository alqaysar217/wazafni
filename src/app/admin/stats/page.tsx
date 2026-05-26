
'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Briefcase, 
  Building2, 
  MapPin, 
  PieChart as PieChartIcon, 
  Activity,
  ArrowUpRight,
  ShieldCheck,
  Calendar
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Bar, 
  BarChart, 
  CartesianGrid, 
  XAxis, 
  ResponsiveContainer, 
  Area, 
  AreaChart, 
  Tooltip,
  PieChart,
  Pie,
  Cell,
  YAxis
} from 'recharts';
import { cn } from '@/lib/utils';

export default function AdminStatsPage() {
  const growthData = [
    { month: "يناير", users: 400, jobs: 240, companies: 40 },
    { month: "فبراير", users: 800, jobs: 450, companies: 65 },
    { month: "مارس", users: 1200, jobs: 980, companies: 110 },
    { month: "أبريل", users: 2100, jobs: 1390, companies: 180 },
    { month: "مايو", users: 3800, jobs: 1880, companies: 290 },
    { month: "يونيو", users: 5400, jobs: 2400, companies: 450 },
  ];

  const cityData = [
    { name: "صنعاء", value: 45, color: "#0F172A" },
    { name: "عدن", value: 25, color: "#3B82F6" },
    { name: "تعز", value: 15, color: "#6366F1" },
    { name: "حضرموت", value: 10, color: "#F59E0B" },
    { name: "أخرى", value: 5, color: "#94A3B8" }
  ];

  const COLORS = cityData.map(c => c.color);

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col" dir="rtl">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12 max-w-7xl space-y-12 text-right">
        <header className="space-y-2">
          <div className="flex items-center gap-3 text-secondary mb-2">
            <BarChart3 size={24} />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary/60">تحليل البيانات الضخمة</span>
          </div>
          <h1 className="text-4xl font-black text-primary tracking-tighter font-headline">مركز الإحصائيات</h1>
          <p className="text-lg text-muted-foreground font-medium">نحلل نمو المنصة، سلوك المستخدمين، وتوزع الفرص المهنية في اليمن.</p>
        </header>

        {/* Top Insights Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: "معدل نمو المستخدمين", val: "35%+", icon: <Users size={20} />, color: "text-blue-600", bg: "bg-blue-50" },
            { label: "معدل اكتمال التوظيف", val: "68%", icon: <ShieldCheck size={20} />, color: "text-green-600", bg: "bg-green-50" },
            { label: "متوسط الرواتب", val: "$1,250", icon: <TrendingUp size={20} />, color: "text-orange-600", bg: "bg-orange-50" },
            { label: "نشاط الشركات", val: "نشر يومي", icon: <Activity size={20} />, color: "text-purple-600", bg: "bg-purple-50" }
          ].map((s, i) => (
            <Card key={i} className="rounded-[40px] border-none shadow-sm p-8 bg-white border border-primary/5 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-5 mb-4">
                <div className={cn("w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner", s.bg, s.color)}>{s.icon}</div>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
              <p className="text-4xl font-black text-primary">{s.val}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Main Growth Chart */}
          <Card className="rounded-[50px] border-none shadow-sm p-10 bg-white border border-primary/5">
            <CardHeader className="flex flex-row items-center justify-between pb-10 px-0">
              <div className="space-y-1">
                <CardTitle className="text-3xl font-black text-primary font-headline tracking-tight">نمو التسجيل والوظائف</CardTitle>
                <CardDescription className="text-sm font-medium">البيانات الإحصائية للنصف الأول من عام 2024</CardDescription>
              </div>
              <div className="flex gap-2">
                <Badge className="bg-primary text-white rounded-lg px-3">مستخدمين</Badge>
                <Badge className="bg-secondary text-white rounded-lg px-3">وظائف</Badge>
              </div>
            </CardHeader>
            <CardContent className="px-0">
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={growthData}>
                    <defs>
                      <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorJobs" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="hsl(var(--secondary))" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="hsl(var(--secondary))" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="hsl(var(--muted))" />
                    <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" fontSize={12} tickLine={false} axisLine={false} />
                    <YAxis stroke="hsl(var(--muted-foreground))" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip 
                      contentStyle={{ borderRadius: '20px', border: 'none', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                      itemStyle={{ fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="users" stroke="hsl(var(--primary))" fillOpacity={1} fill="url(#colorUsers)" strokeWidth={3} />
                    <Area type="monotone" dataKey="jobs" stroke="hsl(var(--secondary))" fillOpacity={1} fill="url(#colorJobs)" strokeWidth={3} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* City Distribution & Insights */}
          <div className="grid grid-cols-1 gap-10">
            <Card className="rounded-[50px] border-none shadow-sm p-10 bg-white border border-primary/5">
              <div className="flex flex-col lg:flex-row items-center gap-10">
                <div className="w-full lg:w-1/2 h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cityData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={100}
                        paddingAngle={10}
                        dataKey="value"
                      >
                        {cityData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-2xl font-black text-primary font-headline">أكثر المدن نشاطاً</h3>
                  <div className="space-y-4">
                    {cityData.map((c, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between font-bold text-sm">
                          <span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: c.color }}></div> {c.name}</span>
                          <span>{c.value}%</span>
                        </div>
                        <div className="h-2 w-full bg-muted/30 rounded-full overflow-hidden">
                          <div className="h-full rounded-full transition-all duration-1000" style={{ width: `${c.value}%`, backgroundColor: c.color }}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="rounded-[50px] border-none shadow-sm p-10 bg-primary text-white relative overflow-hidden group">
              <Calendar className="absolute -top-10 -left-10 w-48 h-48 text-white/5 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
              <div className="relative z-10 grid grid-cols-2 gap-8">
                <div className="space-y-2">
                  <p className="text-white/40 font-black text-[10px] uppercase tracking-widest">متوسط الوقت للتوظيف</p>
                  <p className="text-5xl font-black text-secondary">14 يوم</p>
                </div>
                <div className="space-y-2 text-left">
                  <p className="text-white/40 font-black text-[10px] uppercase tracking-widest text-left">نسبة رضا الشركات</p>
                  <p className="text-5xl font-black text-secondary text-left">4.9/5</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
