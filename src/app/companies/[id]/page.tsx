'use client';

import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Building2, 
  Users, 
  Globe, 
  Mail, 
  Phone, 
  Star, 
  Briefcase, 
  CheckCircle2,
  Linkedin,
  Twitter,
  ExternalLink,
  ArrowUpRight,
  Share2,
  DollarSign
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function CompanyProfilePage() {
  const params = useParams();
  const id = params.id as string;

  // بيانات الشركات المختلفة
  const companiesData: Record<string, any> = {
    "1": {
      name: "مجموعة هائل سعيد أنعم (HSA)",
      category: "مجموعة شركات متنوعة",
      location: "تعز، اليمن (المقر الرئيسي)",
      employees: "20,000+ موظف",
      website: "www.hsa-group.com",
      email: "hr@hsa-group.com",
      phone: "+967 4 211 000",
      rating: 4.9,
      reviews: 1240,
      about: "تُعد مجموعة هائل سعيد أنعم وشركاه أكبر تكتل تجاري وصناعي في اليمن، ولديها عمليات واسعة في الشرق الأوسط وأفريقيا وجنوب شرق آسيا. منذ تأسيسها في عام 1938، التزمت المجموعة بتقديم منتجات وخدمات عالية الجودة والمساهمة في التنمية الاقتصادية والاجتماعية.",
      values: ["النزاهة والشفافية", "الجودة والتميز", "المسؤولية الاجتماعية", "الابتكار المستمر"],
      logo: "https://picsum.photos/seed/hsa/200/200",
      cover: "https://picsum.photos/seed/corp/1920/600",
      openJobs: [
        { id: 2, title: "أخصائي تسويق رقمي", type: "دوام كامل", salary: "12,000 - 18,000 ر.س" },
        { id: 10, title: "مدير علاقات عامة", type: "دوام كامل", salary: "قابل للتفاوض" }
      ]
    },
    "2": {
      name: "بنك الكريمي الإسلامي",
      category: "خدمات مالية وبنكية",
      location: "صنعاء، اليمن",
      employees: "2,500+ موظف",
      website: "www.kuraimibank.com",
      email: "jobs@kuraimibank.com",
      phone: "+967 1 435 000",
      rating: 4.7,
      reviews: 850,
      about: "بنك الكريمي الإسلامي للتمويل الأصغر هو رائد الخدمات المالية في اليمن. نسعى لتقديم خدمات مالية متميزة لكل يمني في أي مكان، مع التركيز على الابتكار التقني والشمول المالي لدعم الاقتصاد الوطني.",
      values: ["الشمول المالي", "الابتكار الرقمي", "الثقة والأمان", "خدمة المجتمع"],
      logo: "https://picsum.photos/seed/kuraimi/200/200",
      cover: "https://picsum.photos/seed/bank-cover/1920/600",
      openJobs: [
        { id: 11, title: "محلل بيانات مالية", type: "دوام كامل", salary: "8,000 - 12,000 ر.س" },
        { id: 12, title: "مطوّر تطبيقات بنكية", type: "دوام كامل", salary: "15,000 - 22,000 ر.س" }
      ]
    },
    "3": {
      name: "يمن تيك للحلول الرقمية",
      category: "تقنية معلومات",
      location: "ريموت / صنعاء",
      employees: "50-100 موظف",
      website: "www.ytech-solutions.com",
      email: "career@ytech.com",
      phone: "+967 770 000 000",
      rating: 4.8,
      reviews: 120,
      about: "يمن تيك هي شركة برمجيات صاعدة تهدف إلى تحويل المشهد الرقمي في اليمن. نحن متخصصون في بناء الحلول السحابية المتقدمة، وتطبيقات الهاتف المحمول، وأنظمة إدارة المؤسسات للشركات الطموحة.",
      values: ["العمل بروح الفريق", "الإبداع التقني", "المرونة والسرعة", "التعلم المستمر"],
      logo: "https://picsum.photos/seed/ytech/200/200",
      cover: "https://picsum.photos/seed/tech-cover/1920/600",
      openJobs: [
        { id: 1, title: "مطور برمجيات أول (React & Node.js)", type: "دوام كامل", salary: "5,600 - 9,400 ر.س" },
        { id: 4, title: "مصمم تجربة مستخدم UI/UX", type: "دوام كامل", salary: "4,500 - 6,800 ر.س" }
      ]
    }
  };

  // الحصول على بيانات الشركة الحالية أو العودة للشركة الأولى افتراضياً
  const company = companiesData[id] || companiesData["1"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Cover & Profile Header */}
        <section className="relative h-[450px]">
          <Image src={company.cover} alt="Cover" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          
          <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 py-12">
            <div className="flex flex-col lg:flex-row items-end gap-10">
              <div className="w-40 h-40 rounded-[40px] overflow-hidden border-8 border-white bg-white shadow-2xl shrink-0 -mb-16 hidden lg:block">
                <Image src={company.logo} alt={company.name} width={160} height={160} className="object-cover" />
              </div>
              
              <div className="flex-1 text-white space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <Badge className="bg-secondary text-white font-bold rounded-lg px-4 border-none">موثوقة</Badge>
                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star fill="currentColor" size={16} />
                    <span className="font-bold text-white">{company.rating}</span>
                    <span className="text-white/60 text-sm">({company.reviews} تقييم)</span>
                  </div>
                </div>
                <h1 className="text-4xl lg:text-6xl font-black font-headline leading-tight">{company.name}</h1>
                <div className="flex flex-wrap gap-6 text-white/80 font-medium">
                  <span className="flex items-center gap-2"><MapPin size={18} /> {company.location}</span>
                  <span className="flex items-center gap-2"><Users size={18} /> {company.employees}</span>
                  <span className="flex items-center gap-2"><Building2 size={18} /> {company.category}</span>
                </div>
              </div>

              <div className="flex gap-4 pb-4 w-full lg:w-auto">
                <Button className="flex-1 lg:flex-none h-14 px-10 rounded-2xl bg-white text-primary hover:bg-white/90 font-black text-lg">
                  متابعة الشركة
                </Button>
                <Button variant="outline" className="h-14 px-6 rounded-2xl border-white/20 bg-white/10 text-white hover:bg-white/20">
                  <Share2 size={24} />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Nav Section */}
        <section className="bg-white border-b py-6 mt-16 lg:mt-0">
          <div className="container mx-auto px-4 lg:pr-60 flex gap-10 overflow-x-auto no-scrollbar">
            <button className="text-primary font-black border-b-4 border-secondary pb-6 whitespace-nowrap">حول الشركة</button>
            <button className="text-muted-foreground font-bold hover:text-primary transition-colors pb-6 whitespace-nowrap">الوظائف ({company.openJobs.length})</button>
            <button className="text-muted-foreground font-bold hover:text-primary transition-colors pb-6 whitespace-nowrap">صور المكتب</button>
            <button className="text-muted-foreground font-bold hover:text-primary transition-colors pb-6 whitespace-nowrap">المراجعات</button>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-primary border-r-4 border-secondary pr-4 leading-none">عن المؤسسة</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                  {company.about}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-10 rounded-[40px] border border-border/50 shadow-sm space-y-6">
                  <h3 className="text-2xl font-black text-primary">قيمنا الجوهرية</h3>
                  <div className="space-y-4">
                    {company.values.map((val: string, i: number) => (
                      <div key={i} className="flex items-center gap-4 font-bold text-muted-foreground">
                        <CheckCircle2 className="text-secondary" size={20} />
                        {val}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary p-10 rounded-[40px] text-white space-y-6 relative overflow-hidden">
                  <Building2 className="absolute -top-10 -left-10 w-48 h-48 text-white/5" />
                  <h3 className="text-2xl font-black">لماذا تنضم إلينا؟</h3>
                  <p className="text-white/70 font-medium leading-relaxed">
                    نحن لا نقدم مجرد وظائف، بل نبني مسارات مهنية طويلة الأمد ونستثمر في كفاءاتنا ليكونوا قادة المستقبل في قطاع {company.category}.
                  </p>
                </div>
              </div>

              {/* Open Jobs Section */}
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-primary border-r-4 border-secondary pr-4 leading-none">الوظائف الشاغرة حالياً</h2>
                <div className="grid grid-cols-1 gap-6">
                  {company.openJobs.length > 0 ? company.openJobs.map((job: any) => (
                    <div key={job.id} className="bg-white p-8 rounded-[35px] border border-border/50 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6 group hover:border-secondary transition-all">
                      <div className="space-y-2">
                        <h4 className="text-xl font-black text-primary group-hover:text-secondary transition-colors">{job.title}</h4>
                        <div className="flex flex-wrap gap-4 text-sm font-bold text-muted-foreground">
                          <span className="flex items-center gap-1"><Briefcase size={14} /> {job.type}</span>
                          <span className="flex items-center gap-1 text-green-600"><DollarSign size={14} /> {job.salary}</span>
                        </div>
                      </div>
                      <Button asChild className="rounded-xl h-12 px-8 bg-primary font-bold w-full md:w-auto text-white">
                        <Link href={`/jobs/${job.id}`}>تقدم الآن</Link>
                      </Button>
                    </div>
                  )) : (
                    <div className="p-10 bg-muted/50 rounded-[40px] text-center border border-dashed border-border font-bold text-muted-foreground">
                      لا توجد وظائف شاغرة حالياً في هذه الشركة.
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-[40px] p-8 border border-border/50 shadow-sm space-y-8">
                <h3 className="text-xl font-black text-primary border-b pb-4">معلومات التواصل</h3>
                <div className="space-y-6 font-bold">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Globe size={20} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">الموقع الإلكتروني</p>
                      <Link href="#" className="hover:text-secondary transition-colors block">{company.website}</Link>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Mail size={20} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">البريد الإلكتروني</p>
                      <p className="block">{company.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Phone size={20} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">الهاتف</p>
                      <p dir="ltr" className="block text-right">{company.phone}</p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t flex gap-4">
                  <Button variant="outline" size="icon" className="w-full h-12 rounded-xl border-border hover:bg-primary hover:text-white transition-all"><Linkedin size={20} /></Button>
                  <Button variant="outline" size="icon" className="w-full h-12 rounded-xl border-border hover:bg-primary hover:text-white transition-all"><Twitter size={20} /></Button>
                  <Button variant="outline" size="icon" className="w-full h-12 rounded-xl border-border hover:bg-primary hover:text-white transition-all"><ExternalLink size={20} /></Button>
                </div>
              </div>

              {/* Recruitment Advice */}
              <div className="bg-secondary/5 rounded-[40px] p-8 border border-secondary/10 space-y-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center text-white shadow-lg shadow-secondary/20"><Star size={24} /></div>
                <h3 className="text-xl font-black text-primary">نصيحة للمتقدمين</h3>
                <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                  هذه الشركة تهتم كثيراً بـ "الرسالة التعريفية" وشرح كيف تتماشى مهاراتك مع قيم {company.name}. تأكد من إبراز ذلك في طلبك لزيادة فرص قبولك.
                </p>
              </div>
            </div>

          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
