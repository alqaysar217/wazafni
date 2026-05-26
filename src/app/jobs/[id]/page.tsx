
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
  CheckCircle2
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function JobDetailsPage() {
  const params = useParams();
  const getImg = (id: string) => PlaceHolderImages.find(img => img.id === id)?.imageUrl || '/logo.png';
  
  const job = {
    id: params.id,
    title: "مطور برمجيات أول (React & Node.js)",
    company: "شركة يمن تيك للحلول الرقمية",
    location: "صنعاء - ريموت",
    salary: "5,600 - 9,400 ر.س",
    type: "دوام كامل",
    posted: "منذ يومين",
    match: 95,
    description: "نحن نبحث عن مطور برمجيات خبير للانضمام إلى فريقنا التقني والمساهمة في بناء منصات رقمية مبتكرة.",
    responsibilities: ["تطوير واجهات مستخدم متجاوبة", "بناء خدمات خلفية قوية"],
    requirements: ["خبرة لا تقل عن 5 سنوات", "إتقان Next.js"],
    companyLogo: getImg('company-ytech-logo'),
    jobVisual: getImg('job-tech')
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="bg-primary pt-20 pb-32 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-10 items-start lg:items-center">
              <div className="w-24 h-24 rounded-3xl overflow-hidden border-4 border-white/10 bg-white flex items-center justify-center p-3 shrink-0">
                <Image src={job.companyLogo} alt={job.company} width={96} height={96} className="object-contain" />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex flex-wrap gap-3">
                  <Badge className="bg-secondary text-white border-none rounded-lg px-4 py-1 font-bold">{job.type}</Badge>
                  <div className="flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1 rounded-lg text-sm font-black border border-green-500/30">
                    <Sparkles size={14} /> توافق {job.match}% بالذكاء الاصطناعي
                  </div>
                </div>
                <h1 className="text-4xl lg:text-5xl font-black font-headline">{job.title}</h1>
                <div className="flex flex-wrap gap-6 text-white/70 font-medium">
                  <span className="flex items-center gap-2"><Building2 size={18} /> {job.company}</span>
                  <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto px-4 -mt-16 pb-24 relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[40px] p-10 border border-border/50 shadow-sm space-y-10">
                <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
                  <Image src={job.jobVisual} alt="Job Visual" fill className="object-cover" />
                </div>
                <div className="space-y-6">
                  <h2 className="text-2xl font-black text-primary border-r-4 border-secondary pr-4">وصف الوظيفة</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed font-medium">{job.description}</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-primary rounded-[40px] p-8 text-white space-y-6">
                <h3 className="text-xl font-bold">ملخص الوظيفة</h3>
                <div className="space-y-5">
                  {[
                    { icon: <Calendar size={18} />, label: "تاريخ النشر", value: job.posted },
                    { icon: <Users size={18} />, label: "عدد المتقدمين", value: "48 متقدم" }
                  ].map((stat, i) => (
                    <div key={i} className="flex items-center justify-between border-b border-white/10 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-2 text-white/60 text-sm">{stat.icon} <span>{stat.label}</span></div>
                      <span className="font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full h-14 bg-secondary text-white font-bold rounded-xl shadow-lg">قدم الآن</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
