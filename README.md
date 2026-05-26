
# منصة وظفني - Wazafni 🚀

المنصة الذكية الأولى للتوظيف في اليمن باستخدام الذكاء الاصطناعي.

## 🛠 خطوات التشغيل والرفع على Vercel

### 1. الرفع على GitHub
- قم بإنشاء مستودع (Repository) جديد على GitHub.
- ارفع الكود باستخدام الأوامر التالية في الـ Terminal الخاص بك:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin [رابط_المستودع_الخاص_بك]
git push -u origin main
```

### 2. الربط مع Vercel
- اذهب إلى [Vercel Dashboard](https://vercel.com/dashboard).
- اضغط على **Add New** ثم **Project**.
- اختر المستودع الخاص بك من GitHub.
- **هام جداً**: في قسم **Environment Variables**، قم بإضافة المتغير التالي:
  - `GOOGLE_GENAI_API_KEY`: ضع هنا مفتاح Gemini الخاص بك.
- اضغط على **Deploy**.

## 🏗 التقنيات المستخدمة
- **Next.js 15** (App Router)
- **Firebase** (Auth & Firestore)
- **Genkit** (AI Integration)
- **Tailwind CSS & Shadcn UI**

---
© 2024 وظفني - جميع الحقوق محفوظة.
