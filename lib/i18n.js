export const locales = ['en', 'ar']
export const defaultLocale = 'en'
export const rtlLocales = new Set(['ar'])

export function isValidLocale(locale) {
  return locales.includes(locale)
}

export function getDir(locale) {
  return rtlLocales.has(locale) ? 'rtl' : 'ltr'
}

export function getPath(locale, path) {
  if (!path.startsWith('/')) return path
  if (locale === defaultLocale) return path
  return path === '/' ? `/${locale}` : `/${locale}${path}`
}

const dictionaries = {
  en: {
    nav: {
      about: 'About',
      pricing: 'Pricing',
      contact: 'Contact',
      menuLabel: 'Toggle menu',
    },
    hero: {
      chip: 'Beta released · Limited access',
      headline: ['Cold email', 'that actually', 'converts.'],
      description:
        'Stop spraying. Start converting. The AI outreach platform built for founders and closers who refuse to lose deals in the inbox.',
    },
    countdown: {
      days: 'Days',
      hours: 'Hours',
      mins: 'Mins',
      secs: 'Secs',
    },
    waitlist: {
      placeholder: 'your@company.com',
      button: 'Get beta access',
      loading: 'Requesting...',
      noteDefault: 'Beta is live · Request access with your work email',
      noteInvalid: 'Please enter a valid email address.',
      noteSuccess: "Request received. We'll send your beta access details soon.",
    },
    features: [
      { name: 'AI personalisation', desc: 'Every email tailored. At scale. Automatically.' },
      { name: 'Pipeline analytics', desc: "Know exactly what's converting and why." },
      { name: 'Smart sequencing', desc: 'Right message. Right moment. Always.' },
      { name: 'Instant deploy', desc: 'Live in minutes. Not days.' },
    ],
    bottom: {
      brand: 'moxsend.ai',
      terms: 'Terms',
      privacy: 'Privacy',
      contact: 'Contact',
      tagline: 'Stop spraying. Start converting.',
    },
    meshdex: {
      label: 'A product by',
      name: 'MeshDex',
      tagline: 'Enterprise · Ventures · Infrastructure',
      badge: 'Backed by MeshDex Group',
    },
    about: {
      chip: 'About Moxsend',
      title: 'Precision outreach, built to convert.',
      paragraphs: [
        "We've sent cold emails. We've received cold emails. And we've watched great products lose deals because their outreach read like everyone else's.",
        'That frustrated us enough to build something.',
        "Moxsend is what happens when you stop accepting that cold email has to feel cold. AI that personalises every message, researches every prospect, and gives your outreach the one thing it's been missing —",
        'The feeling that someone actually gave a damn.',
        'Built by Meshdex Developers & EaseHawk Technologies',
        'Launching soon. hello@moxsend.ai',
      ],
    },
    pricing: {
      chip: 'Pricing',
      title: 'Revealing soon.',
      body:
        "We're finalizing pricing for private beta. If you want early access, reach out at hello@moxsend.ai",
    },
    contact: {
      chip: 'Contact',
      title: "Let's talk.",
      body: 'Reach us at hello@moxsend.ai',
    },
    terms: {
      chip: 'Terms',
      title: 'Terms coming soon.',
      body: 'We’re drafting the full terms and conditions. Check back soon.',
    },
    privacy: {
      chip: 'Privacy',
      title: 'Privacy policy coming soon.',
      body: 'We’re finalizing our privacy policy. Check back soon.',
    },
  },
  ar: {
    nav: {
      about: 'حول',
      pricing: 'الأسعار',
      contact: 'تواصل',
      menuLabel: 'فتح القائمة',
    },
    hero: {
      chip: 'النسخة التجريبية متاحة · وصول محدود',
      headline: ['رسائل باردة', 'تُقنع', 'فعلاً.'],
      description:
        'توقّف عن الرش العشوائي. وابدأ بالتحويل. منصة Outreach بالذكاء الاصطناعي مصممة للمؤسسين وفرق المبيعات الذين يرفضون خسارة الصفقات في البريد الوارد.',
    },
    countdown: {
      days: 'أيام',
      hours: 'ساعات',
      mins: 'دقائق',
      secs: 'ثوانٍ',
    },
    waitlist: {
      placeholder: 'you@company.com',
      button: 'احصل على وصول تجريبي',
      loading: 'جارٍ الإرسال...',
      noteDefault: 'النسخة التجريبية متاحة · اطلب الوصول ببريد العمل',
      noteInvalid: 'يرجى إدخال بريد إلكتروني صحيح.',
      noteSuccess: 'تم استلام الطلب. سنرسل تفاصيل الوصول قريباً.',
    },
    features: [
      { name: 'تخصيص بالذكاء الاصطناعي', desc: 'كل رسالة مصممة خصيصاً. على نطاق واسع.' },
      { name: 'تحليلات خط المبيعات', desc: 'اعرف بدقة ما الذي يحوّل ولماذا.' },
      { name: 'تسلسل ذكي', desc: 'الرسالة الصحيحة في الوقت الصحيح.' },
      { name: 'إطلاق فوري', desc: 'جاهز خلال دقائق، لا أيام.' },
    ],
    bottom: {
      brand: 'moxsend.ai',
      terms: 'الشروط',
      privacy: 'الخصوصية',
      contact: 'تواصل',
      tagline: 'توقّف عن الرش العشوائي. وابدأ بالتحويل.',
    },
    meshdex: {
      label: 'منتج من',
      name: 'MeshDex',
      tagline: 'المؤسسات · الاستثمارات · البنية التحتية',
      badge: 'بدعم من MeshDex Group',
    },
    about: {
      chip: 'عن موكسسِند',
      title: 'تواصل دقيق، مبني للتحويل.',
      paragraphs: [
        'معظم أدوات البريد البارد تُعلّمك الإرسال العشوائي. نحن بنينا Moxsend للشركات التي ترفض ذلك.',
        'Moxsend منصة بريد بارد مدعومة بالذكاء الاصطناعي تحوّل الـ outreach إلى خط مبيعات. ليست حملات عشوائية، ولا تسلسلات عامة. رسائل شديدة الدقة، مخصصة بالذكاء الاصطناعي، تصل للأشخاص المناسبين — وعلى نطاق واسع.',
        'نؤمن أن البريد البارد من أقوى قنوات المبيعات في B2B، لكنه طُبّق بشكل خاطئ لفترة طويلة. الأسلوب الذي ينجح لا يشبه ما تفعله أغلب الفرق. إنه محدد، واثق، يحترم وقت المتلقي، ويحوّل.',
        'لهذا بُني Moxsend — للمؤسسين وفرق المبيعات والوكالات التي تمتلك الجرأة للقيام بالـ outreach بشكل صحيح.',
        'نحن في بيتا خاصة. إن أردت وصولاً مبكراً، تواصل عبر hello@moxsend.ai',
      ],
    },
    pricing: {
      chip: 'الأسعار',
      title: 'قريباً.',
      body:
        'نقوم حالياً بوضع التسعير للبيتا الخاصة. للوصول المبكر، راسلنا على hello@moxsend.ai',
    },
    contact: {
      chip: 'تواصل',
      title: 'لنتحدث.',
      body: 'تواصل معنا عبر hello@moxsend.ai',
    },
    terms: {
      chip: 'الشروط',
      title: 'الشروط قريباً.',
      body: 'نقوم بإعداد الشروط والأحكام. عُد قريباً.',
    },
    privacy: {
      chip: 'الخصوصية',
      title: 'سياسة الخصوصية قريباً.',
      body: 'نقوم بإعداد سياسة الخصوصية. عُد قريباً.',
    },
  },
}

export function getDictionary(locale = defaultLocale) {
  return dictionaries[locale] || dictionaries[defaultLocale]
}
