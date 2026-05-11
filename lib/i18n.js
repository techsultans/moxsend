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
      title: 'Terms of Service',
      updated: 'Last updated: May 12, 2026',
      intro:
        'These Terms govern your access to and use of Moxsend, a SaaS-based email marketing and outreach platform operated by Moxsend.',
      sections: [
        {
          title: 'Beta service',
          body:
            'Moxsend is currently available as a beta product. Features may change, improve, pause, or be removed as we develop the platform. We may limit access, usage, sending volume, or specific integrations during beta.',
        },
        {
          title: 'Accounts and authorized access',
          body:
            'You are responsible for keeping your account secure and for ensuring that anyone using your account is authorized to do so. When you connect Gmail or another email provider, you confirm that you have the right to authorize Moxsend to access and use that mailbox for the services you request.',
        },
        {
          title: 'Email marketing responsibilities',
          body:
            'You are responsible for the contacts, campaigns, templates, sending behavior, and compliance choices you make in Moxsend. You must use the platform only for lawful business outreach and must comply with applicable email, privacy, anti-spam, consumer protection, and data protection laws, including consent, identification, opt-out, and suppression-list obligations where applicable.',
        },
        {
          title: 'Gmail access and sending features',
          body:
            'If you connect Gmail, you authorize Moxsend to use the Google permissions you approve to provide user-facing features such as mailbox connection, campaign sending, reply tracking, inbox analysis, message drafting, sequence management, and email deliverability workflows. Moxsend will not use Gmail access for unrelated advertising or for selling Google user data.',
        },
        {
          title: 'Acceptable use',
          items: [
            'Do not use Moxsend to send spam, phishing, malware, deceptive messages, illegal content, or abusive outreach.',
            'Do not harvest personal data unlawfully or upload contact lists that you are not permitted to use.',
            'Do not bypass platform limits, damage the service, interfere with other users, or misuse connected email providers.',
            'Do not represent Moxsend as endorsing your campaigns or business unless we have agreed in writing.',
          ],
        },
        {
          title: 'Suspension and termination',
          body:
            'We may suspend or terminate access if we believe your use violates these Terms, creates legal or security risk, harms deliverability or platform integrity, or breaches connected-provider policies. You may stop using Moxsend at any time and may request deletion of your account data.',
        },
        {
          title: 'Intellectual property',
          body:
            'Moxsend and its software, design, workflows, brand, and platform content belong to Moxsend or its licensors. You retain ownership of your customer data, contacts, campaign content, and email content, subject to the rights you grant us to operate and improve the service.',
        },
        {
          title: 'Disclaimers and liability',
          body:
            'The service is provided on an as-is and as-available basis during beta. We do not guarantee campaign performance, inbox placement, revenue outcomes, uninterrupted service, or error-free operation. To the maximum extent permitted by law, Moxsend is not liable for indirect, incidental, special, consequential, or punitive damages.',
        },
        {
          title: 'Contact',
          body:
            'Questions about these Terms can be sent to hello@moxsend.ai.',
        },
      ],
    },
    privacy: {
      chip: 'Privacy',
      title: 'Privacy Policy',
      updated: 'Last updated: May 12, 2026',
      intro:
        'This Privacy Policy explains how Moxsend collects, uses, stores, shares, and protects data when you use our SaaS email marketing and outreach platform.',
      sections: [
        {
          title: 'Information we collect',
          items: [
            'Account information such as your name, business email address, company details, login information, and support messages.',
            'Campaign and workspace data such as contacts, prospect lists, templates, sequences, analytics, sender settings, and campaign performance data.',
            'Connected mailbox data when you authorize an integration, including email messages, metadata, labels, threads, drafts, sent messages, settings, and related mailbox information needed to provide Moxsend features.',
            'Technical data such as device, browser, IP address, log data, security events, cookies, and usage analytics.',
          ],
        },
        {
          title: 'Google and Gmail data',
          body:
            'If you connect a Gmail account, Moxsend may request Google OAuth permissions including https://mail.google.com/ and https://www.googleapis.com/auth/gmail.readonly. These permissions may allow Moxsend to read email messages and settings, compose drafts, send email, manage campaign-related mailbox actions, and, where a user explicitly initiates or configures that action in the product, delete Gmail messages. We request these permissions to provide visible product features such as sending campaigns from your mailbox, preparing drafts, tracking replies, syncing conversations, analyzing campaign performance, managing sequences, and showing inbox-related insights in Moxsend.',
        },
        {
          title: 'How we use information',
          items: [
            'To provide, operate, secure, support, and improve Moxsend.',
            'To connect email accounts, send authorized campaigns, generate and manage drafts, detect replies, update campaign status, and show analytics.',
            'To personalize user-facing product features, troubleshoot issues, prevent abuse, enforce limits, and maintain deliverability and security.',
            'To communicate with you about beta access, product updates, support, security, billing, and administrative matters.',
          ],
        },
        {
          title: 'Google API Limited Use disclosure',
          body:
            'Moxsend use and transfer of information received from Google APIs will adhere to the Google API Services User Data Policy, including the Limited Use requirements. We use Google user data only to provide or improve user-facing features that are visible in Moxsend. We do not sell Google user data, use it for advertising, or use it to build unrelated profiles. Humans do not read Gmail content unless you give explicit consent for support, it is necessary for security or abuse investigation, or it is required by law.',
        },
        {
          title: 'Sharing and processors',
          body:
            'We do not sell your personal data or Google user data. We may share data with service providers that help us host, secure, monitor, deliver, support, or operate Moxsend, but only as needed for those services and under confidentiality and security obligations. We may also disclose information if required by law, to protect rights and security, or as part of a business transaction with appropriate notice or consent where required.',
        },
        {
          title: 'Storage, retention, and deletion',
          body:
            'We retain data for as long as needed to provide Moxsend, comply with legal obligations, resolve disputes, enforce agreements, and maintain security. You can disconnect Gmail access through your Google Account permissions or inside Moxsend where available. You may request deletion of your account or workspace data by contacting hello@moxsend.ai. After deletion, residual copies may remain in backups for a limited period before being overwritten.',
        },
        {
          title: 'Security',
          body:
            'We use administrative, technical, and organizational safeguards designed to protect data, including access controls, encryption in transit where supported, monitoring, and restricted internal access. No online service can guarantee absolute security, but we work to protect user data and respond responsibly to security issues.',
        },
        {
          title: 'Your choices',
          body:
            'You may update account information, manage campaign data, unsubscribe from non-essential communications, disconnect integrations, revoke Google OAuth access, or request access, correction, export, or deletion of personal data by contacting us.',
        },
        {
          title: 'Contact',
          body:
            'Privacy questions and data requests can be sent to hello@moxsend.ai.',
        },
      ],
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
      title: 'شروط الخدمة',
      updated: 'آخر تحديث: 12 مايو 2026',
      intro:
        'تنظم هذه الشروط وصولك إلى Moxsend واستخدامك له، وهو منصة SaaS للتسويق عبر البريد الإلكتروني والتواصل البيعي.',
      sections: [
        {
          title: 'خدمة تجريبية',
          body:
            'يتوفر Moxsend حالياً كمنتج تجريبي. قد تتغير الميزات أو تتحسن أو تتوقف أو تزال أثناء تطوير المنصة. قد نحد من الوصول أو الاستخدام أو حجم الإرسال أو بعض التكاملات خلال فترة التجربة.',
        },
        {
          title: 'الحسابات والوصول المصرح به',
          body:
            'أنت مسؤول عن أمان حسابك وعن التأكد من أن كل من يستخدم حسابك مصرح له بذلك. عند ربط Gmail أو مزود بريد آخر، فإنك تؤكد أن لديك الحق في تفويض Moxsend للوصول إلى صندوق البريد واستخدامه للخدمات التي تطلبها.',
        },
        {
          title: 'مسؤوليات التسويق عبر البريد',
          body:
            'أنت مسؤول عن جهات الاتصال والحملات والقوالب وسلوك الإرسال وخيارات الامتثال التي تجريها في Moxsend. يجب استخدام المنصة فقط للتواصل التجاري القانوني والامتثال لقوانين البريد والخصوصية ومكافحة الرسائل غير المرغوب فيها وحماية البيانات، بما في ذلك متطلبات الموافقة والتعريف وإلغاء الاشتراك وقوائم الحظر عند انطباقها.',
        },
        {
          title: 'وصول Gmail وميزات الإرسال',
          body:
            'إذا ربطت Gmail، فإنك تفوض Moxsend باستخدام أذونات Google التي توافق عليها لتقديم ميزات ظاهرة للمستخدم مثل ربط صندوق البريد وإرسال الحملات وتتبع الردود وتحليل البريد وإعداد المسودات وإدارة التسلسلات وسير عمل قابلية التسليم. لا يستخدم Moxsend وصول Gmail للإعلانات غير المرتبطة أو لبيع بيانات مستخدمي Google.',
        },
        {
          title: 'الاستخدام المقبول',
          items: [
            'لا تستخدم Moxsend لإرسال رسائل عشوائية أو تصيد أو برمجيات ضارة أو رسائل مخادعة أو محتوى غير قانوني أو تواصل مسيء.',
            'لا تجمع بيانات شخصية بطريقة غير قانونية ولا ترفع قوائم جهات اتصال لا تملك حق استخدامها.',
            'لا تتجاوز حدود المنصة أو تضر بالخدمة أو تتدخل مع مستخدمين آخرين أو تسيء استخدام مزودي البريد المرتبطين.',
            'لا تعرض Moxsend كأنه يؤيد حملاتك أو نشاطك التجاري إلا إذا وافقنا كتابياً.',
          ],
        },
        {
          title: 'الإيقاف والإنهاء',
          body:
            'قد نعلق أو ننهي الوصول إذا اعتقدنا أن استخدامك يخالف هذه الشروط أو يخلق مخاطر قانونية أو أمنية أو يضر بقابلية التسليم أو سلامة المنصة أو يخالف سياسات المزودين المرتبطين. يمكنك التوقف عن استخدام Moxsend في أي وقت وطلب حذف بيانات حسابك.',
        },
        {
          title: 'الملكية الفكرية',
          body:
            'تعود ملكية Moxsend وبرمجياته وتصميمه وسير العمل والعلامة التجارية ومحتوى المنصة إلى Moxsend أو المرخصين له. تحتفظ بملكية بيانات العملاء وجهات الاتصال ومحتوى الحملات والبريد الإلكتروني، مع منحنا الحقوق اللازمة لتشغيل الخدمة وتحسينها.',
        },
        {
          title: 'إخلاء المسؤولية وحدودها',
          body:
            'تقدم الخدمة كما هي وحسب توفرها خلال المرحلة التجريبية. لا نضمن أداء الحملات أو الوصول إلى صندوق الوارد أو نتائج الإيرادات أو انقطاع الخدمة أو خلوها من الأخطاء. إلى أقصى حد يسمح به القانون، لا يكون Moxsend مسؤولاً عن الأضرار غير المباشرة أو العرضية أو الخاصة أو التبعية أو العقابية.',
        },
        {
          title: 'التواصل',
          body:
            'يمكن إرسال الأسئلة المتعلقة بهذه الشروط إلى hello@moxsend.ai.',
        },
      ],
    },
    privacy: {
      chip: 'الخصوصية',
      title: 'سياسة الخصوصية',
      updated: 'آخر تحديث: 12 مايو 2026',
      intro:
        'تشرح سياسة الخصوصية هذه كيف يجمع Moxsend البيانات ويستخدمها ويخزنها ويشاركها ويحميها عند استخدام منصة SaaS للتسويق عبر البريد الإلكتروني والتواصل البيعي.',
      sections: [
        {
          title: 'المعلومات التي نجمعها',
          items: [
            'معلومات الحساب مثل الاسم وبريد العمل وتفاصيل الشركة ومعلومات تسجيل الدخول ورسائل الدعم.',
            'بيانات الحملات ومساحات العمل مثل جهات الاتصال وقوائم العملاء المحتملين والقوالب والتسلسلات والتحليلات وإعدادات المرسل وأداء الحملات.',
            'بيانات صندوق البريد المرتبط عند تفويض التكامل، بما في ذلك رسائل البريد والبيانات الوصفية والتسميات والمحادثات والمسودات والرسائل المرسلة والإعدادات ومعلومات البريد اللازمة لتقديم ميزات Moxsend.',
            'بيانات تقنية مثل الجهاز والمتصفح وعنوان IP والسجلات وأحداث الأمان وملفات تعريف الارتباط وتحليلات الاستخدام.',
          ],
        },
        {
          title: 'بيانات Google وGmail',
          body:
            'إذا ربطت حساب Gmail، قد يطلب Moxsend أذونات Google OAuth بما في ذلك https://mail.google.com/ و https://www.googleapis.com/auth/gmail.readonly. قد تسمح هذه الأذونات لـ Moxsend بقراءة رسائل البريد وإعداداته، وإنشاء المسودات، وإرسال البريد، وإدارة إجراءات صندوق البريد المرتبطة بالحملات، وحذف رسائل Gmail عندما يبدأ المستخدم هذا الإجراء أو يضبطه صراحة داخل المنتج. نطلب هذه الأذونات لتقديم ميزات واضحة مثل إرسال الحملات من صندوق بريدك، وإعداد المسودات، وتتبع الردود، ومزامنة المحادثات، وتحليل أداء الحملات، وإدارة التسلسلات، وعرض رؤى البريد داخل Moxsend.',
        },
        {
          title: 'كيف نستخدم المعلومات',
          items: [
            'لتقديم Moxsend وتشغيله وتأمينه ودعمه وتحسينه.',
            'لربط حسابات البريد وإرسال الحملات المصرح بها وإنشاء المسودات وإدارتها واكتشاف الردود وتحديث حالة الحملات وعرض التحليلات.',
            'لتخصيص ميزات المنتج الظاهرة للمستخدم، ومعالجة المشكلات، ومنع إساءة الاستخدام، وتطبيق الحدود، والحفاظ على قابلية التسليم والأمان.',
            'للتواصل معك بشأن الوصول التجريبي وتحديثات المنتج والدعم والأمان والفوترة والمسائل الإدارية.',
          ],
        },
        {
          title: 'إفصاح الاستخدام المحدود لواجهات Google API',
          body:
            'يلتزم استخدام Moxsend ونقله للمعلومات المستلمة من Google APIs بسياسة بيانات مستخدمي خدمات Google API، بما في ذلك متطلبات الاستخدام المحدود. نستخدم بيانات مستخدمي Google فقط لتقديم أو تحسين ميزات ظاهرة للمستخدم داخل Moxsend. لا نبيع بيانات مستخدمي Google ولا نستخدمها للإعلانات أو لإنشاء ملفات تعريف غير مرتبطة. لا يقرأ البشر محتوى Gmail إلا إذا منحت موافقة صريحة للدعم، أو كان ذلك ضرورياً للتحقيق في الأمان أو إساءة الاستخدام، أو كان مطلوباً بموجب القانون.',
        },
        {
          title: 'المشاركة ومعالجو البيانات',
          body:
            'لا نبيع بياناتك الشخصية أو بيانات مستخدمي Google. قد نشارك البيانات مع مزودي خدمات يساعدوننا في الاستضافة أو الأمان أو المراقبة أو التسليم أو الدعم أو تشغيل Moxsend، وذلك فقط بالقدر اللازم وتحت التزامات السرية والأمان. قد نكشف المعلومات أيضاً إذا كان ذلك مطلوباً قانونياً أو لحماية الحقوق والأمان أو كجزء من معاملة تجارية مع إشعار أو موافقة مناسبة عند الحاجة.',
        },
        {
          title: 'التخزين والاحتفاظ والحذف',
          body:
            'نحتفظ بالبيانات طالما كان ذلك ضرورياً لتقديم Moxsend والامتثال للالتزامات القانونية وحل النزاعات وإنفاذ الاتفاقيات والحفاظ على الأمان. يمكنك فصل وصول Gmail من أذونات حساب Google أو داخل Moxsend عندما يكون ذلك متاحاً. يمكنك طلب حذف حسابك أو بيانات مساحة العمل عبر hello@moxsend.ai. بعد الحذف، قد تبقى نسخ احتياطية لفترة محدودة قبل استبدالها.',
        },
        {
          title: 'الأمان',
          body:
            'نستخدم ضوابط إدارية وتقنية وتنظيمية مصممة لحماية البيانات، بما في ذلك ضوابط الوصول والتشفير أثناء النقل حيثما كان مدعوماً والمراقبة وتقييد الوصول الداخلي. لا يمكن لأي خدمة عبر الإنترنت ضمان الأمان المطلق، لكننا نعمل على حماية بيانات المستخدمين والاستجابة بشكل مسؤول للمشكلات الأمنية.',
        },
        {
          title: 'اختياراتك',
          body:
            'يمكنك تحديث معلومات الحساب وإدارة بيانات الحملات وإلغاء الاشتراك في الرسائل غير الأساسية وفصل التكاملات وإلغاء وصول Google OAuth أو طلب الوصول إلى البيانات الشخصية أو تصحيحها أو تصديرها أو حذفها عبر التواصل معنا.',
        },
        {
          title: 'التواصل',
          body:
            'يمكن إرسال أسئلة الخصوصية وطلبات البيانات إلى hello@moxsend.ai.',
        },
      ],
    },
  },
}

export function getDictionary(locale = defaultLocale) {
  return dictionaries[locale] || dictionaries[defaultLocale]
}
