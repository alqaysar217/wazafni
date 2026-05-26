'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Building2, 
  Clock, 
  DollarSign, 
  Briefcase, 
  Calendar, 
  Users, 
  Sparkles, 
  Bookmark, 
  Share2, 
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function JobDetailsPage() {
  const params = useParams();
  
  // بيانات تجريبية تحاكي الواقع
  const job = {
    id: params.id,
    title: "مطور برمجيات أول (React & Node.js)",
    company: "شركة يمن تيك للحلول الرقمية",
    location: "صنعاء - ريموت",
    salary: "5,600 - 9,400 ر.س",
    type: "دوام كامل",
    posted: "منذ يومين",
    match: 95,
    description: "نحن نبحث عن مطور برمجيات خبير للانضمام إلى فريقنا التقني والمساهمة في بناء منصات رقمية مبتكرة تخدم السوق المحلي والدولي. ستكون مسؤولاً عن تطوير واجهات المستخدم وتكامل الأنظمة الخلفية.",
    responsibilities: [
      "تطوير واجهات مستخدم متجاوبة باستخدام React.js",
      "بناء خدمات خلفية قوية وقابلة للتوسع باستخدام Node.js",
      "التعاون مع فريق التصميم لتحويل ملفات Figma إلى أكواد برمجية",
      "تحسين أداء التطبيقات وضمان أمان البيانات",
      "المشاركة في مراجعة الأكواد (Code Review) لضمان الجودة"
    ],
    requirements: [
      "خبرة لا تقل عن 5 سنوات في تطوير الويب",
      "إتقان تام لـ TypeScript و Next.js",
      "خبرة قوية في التعامل مع قواعد بيانات PostgreSQL و MongoDB",
      "مهارات ممتازة في حل المشكلات والعمل الجماعي",
      "إجادة اللغة الإنجليزية (قراءة وكتابة)"
    ],
    companyLogo: "https://picsum.photos/seed/tech1/120/120",
    companyDesc: "شركة رائدة في مجال الحلول التقنية في اليمن، نهدف إلى التحول الرقمي الشامل."
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Job Header Section */}
        <section className="bg-primary pt-20 pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/10 bg-white/5 backdrop-blur-md shrink-0">
                <Image src={job.companyLogo} alt={job.company} width={96} height={96} className="object-cover" />
              </div>
              
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-secondary text-white border-none rounded-lg px-4 py-1 font-bold">
                    {job.type}
                  </Badge>
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1 rounded-lg text-sm font-black border border-green-500/30">
                    <Sparkles size={14} /> توافق {job.match}% بالذكاء الاصطناعي
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black font-headline">{job.title}</h1>
                <div className="flex flex-wrap gap-6 text-white/70 font-medium">
                  <span className="flex items-center gap-2"><Building2 size={18} /> {job.company}</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                  <span className="flex items-center gap-2"><DollarSign size={18} /> {job.salary}</span>
                  <span className="flex items-center gap-2"><Clock size={18} /> نُشر {job.posted}</span>
                </div>
              </div>

              <div className="flex gap-4 w-full lg:w-auto">
                <Button className="flex-1 lg:flex-none h-14 px-10 rounded-2xl bg-secondary hover:bg-secondary/90 text-white font-black text-lg shadow-xl shadow-secondary/20">
                  تقدم الآن
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Bookmark size={24} />
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 rounded-2xl border-white/20 bg-white/5 text-white hover:bg-white/10">
                  <Share2 size={24} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 -mt-16 pb-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[40px] p-10 border border-border/50 shadow-sm space-y-10">
                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-primary border-r-4 border-secondary pr-4">وصف الوظيفة</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                    {job.description}
                  </p>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-primary border-r-4 border-secondary pr-4">المسؤوليات الرئيسية</h2>
                  <ul className="grid grid-cols-1 gap-4">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-muted-foreground font-medium">
                        <CheckCircle2 className="text-secondary shrink-0 mt-1" size={20} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-primary border-r-4 border-secondary pr-4">المؤهلات والخبرات</h2>
                  <ul className="grid grid-cols-1 gap-4">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-4 text-lg text-muted-foreground font-medium">
                        <div className="w-2 h-2 rounded-full bg-secondary shrink-0 mt-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Sidebar Information */}
            <div className="space-y-8">
              {/* About Company Card */}
              <div className="bg-white rounded-[40px] p-8 border border-border/50 shadow-sm space-y-6">
                <h3 className="text-xl font-black text-primary">حول الشركة</h3>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-muted">
                    <Image src={job.companyLogo} alt={job.company} width={64} height={64} className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">{job.company}</h4>
                    <p className="text-xs text-muted-foreground">شركة تقنية</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed font-medium">
                  {job.companyDesc}
                </p>
                <Button asChild variant="outline" className="w-full h-12 rounded-xl border-primary text-primary font-bold hover:bg-primary hover:text-white">
                  <Link href={`/companies/1`}>عرض ملف الشركة</Link>
                </Button>
              </div>

              {/* Job Stats Card */}
              <div className="bg-primary rounded-[40px] p-8 text-white space-y-6">
                <h3 className="text-xl font-bold">ملخص الوظيفة</h3>
                <div className="space-y-5">
                  {[
                    { icon: <Calendar size={18} />, label: "تاريخ النشر", value: job.posted },
                    { icon: <Users size={18} />, label: "عدد المتقدمين", value: "48 متقدم" },
                    { icon: <Briefcase size={18} />, label: "سنوات الخبرة", value: "5+ سنوات" },
                    { icon: <Briefcase size={18} />, label: "المستوى المهني", value: "أول / خبير" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 text-white/60 text-sm">
                        {stat.icon} <span>{stat.label}</span>
                      </div>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Similarity Ad */}
              <div className="bg-secondary rounded-[40px] p-8 text-white relative overflow-hidden group">
                <Sparkles className="absolute -top-4 -left-4 w-24 h-24 text-white/10 rotate-12 group-hover:rotate-0 transition-transform duration-700" />
                <h3 className="text-xl font-black mb-4 relative z-10">وظائف مشابهة؟</h3>
                <p className="text-white/80 text-sm mb-6 relative z-10">اشترك في التنبيهات الذكية ليصلك كل جديد في مجالك فور نشره.</p>
                <Button className="w-full bg-white text-secondary hover:bg-white/90 font-black rounded-xl h-12">اشترك الآن</Button>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
