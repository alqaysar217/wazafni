
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
  Share2,
  DollarSign
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function CompanyProfilePage() {
  const params = useParams();
  const id = params.id as string;

  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '/logo.png';

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
      about: "تُعد مجموعة هائل سعيد أنعم وشركاه أكبر تكتل تجاري وصناعي في اليمن، ولديها عمليات واسعة في الشرق الأوسط وأفريقيا وجنوب شرق آسيا.",
      values: ["النزاهة والشفافية", "الجودة والتميز", "المسؤولية الاجتماعية", "الابتكار المستمر"],
      logo: getImg("company-hsa-logo"),
      cover: getImg("company-hsa-cover"),
      openJobs: [
        { id: 2, title: "أخصائي تسويق رقمي", type: "دوام كامل", salary: "12,000 - 18,000 ر.س" }
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
      about: "بنك الكريمي الإسلامي للتمويل الأصغر هو رائد الخدمات المالية في اليمن.",
      values: ["الشمول المالي", "الابتكار الرقمي", "الثقة والأمان", "خدمة المجتمع"],
      logo: getImg("company-kuraimi-logo"),
      cover: getImg("company-kuraimi-cover"),
      openJobs: [
        { id: 11, title: "محلل بيانات مالية", type: "دوام كامل", salary: "8,000 - 12,000 ر.س" }
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
      about: "يمن تيك هي شركة برمجيات صاعدة تهدف إلى تحويل المشهد الرقمي في اليمن.",
      values: ["العمل بروح الفريق", "الإبداع التقني", "المرونة والسرعة", "التعلم المستمر"],
      logo: getImg("company-ytech-logo"),
      cover: getImg("company-ytech-cover"),
      openJobs: [
        { id: 1, title: "مطور برمجيات أول", type: "دوام كامل", salary: "5,600 - 9,400 ر.س" }
      ]
    }
  };

  const company = companiesData[id] || companiesData["1"];

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="relative h-[450px]">
          <Image src={company.cover} alt="Cover" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent"></div>
          <div className="container mx-auto px-4 absolute bottom-0 left-0 right-0 py-12">
            <div className="flex flex-col lg:flex-row items-end gap-10">
              <div className="w-40 h-40 rounded-[40px] overflow-hidden border-8 border-white bg-white shadow-2xl shrink-0 -mb-16 hidden lg:flex items-center justify-center p-4">
                <Image src={company.logo} alt={company.name} width={160} height={160} className="object-contain" />
              </div>
              <div className="flex-1 text-white space-y-4 pb-4">
                <Badge className="bg-secondary text-white font-bold rounded-lg px-4 border-none">موثوقة</Badge>
                <h1 className="text-4xl lg:text-6xl font-black font-headline leading-tight">{company.name}</h1>
                <div className="flex flex-wrap gap-6 text-white/80 font-medium">
                  <span className="flex items-center gap-2"><MapPin size={18} /> {company.location}</span>
                  <span className="flex items-center gap-2"><Users size={18} /> {company.employees}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-12">
              <div className="space-y-6">
                <h2 className="text-3xl font-black text-primary border-r-4 border-secondary pr-4 leading-none">عن المؤسسة</h2>
                <p className="text-xl text-muted-foreground leading-relaxed font-medium">{company.about}</p>
              </div>
              <div className="space-y-8">
                <h2 className="text-3xl font-black text-primary border-r-4 border-secondary pr-4 leading-none">الوظائف الشاغرة</h2>
                <div className="grid grid-cols-1 gap-6">
                  {company.openJobs.map((job: any) => (
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
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-[40px] p-8 border border-border/50 shadow-sm space-y-8">
                <h3 className="text-xl font-black text-primary border-b pb-4">معلومات التواصل</h3>
                <div className="space-y-6 font-bold">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary"><Globe size={20} /></div>
                    <div className="space-y-1">
                      <p className="text-[10px] font-black text-primary/40 uppercase tracking-widest">الموقع الإلكتروني</p>
                      <p className="block">{company.website}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
