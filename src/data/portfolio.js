export const projects = [
  {
    num: '01',
    featured: true,
    name: 'Connect Research — Escrow Consultancy Platform',
    desc: 'Full escrow marketplace with Stripe PaymentIntents, milestone dispute resolution, real-time SignalR chat, and AI matching via OpenAI embeddings.',
    code: [
      { type: 'comment', text: '// Stripe escrow flow' },
      { type: 'line', parts: [{ c: 'kw', t: 'const' }, { c: 'plain', t: ' intent = ' }, { c: 'g', t: 'await' }, { c: 'plain', t: ' stripe' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  .paymentIntents.' }, { c: 'cs', t: 'create' }, { c: 'plain', t: '({' }] },
      { type: 'line', parts: [{ c: 'plain', t: '    ' }, { c: 'kw', t: 'amount' }, { c: 'plain', t: ': ' }, { c: 'cv', t: 'milestone.amount' }, { c: 'plain', t: ',' }] },
      { type: 'line', parts: [{ c: 'plain', t: '    ' }, { c: 'kw', t: 'capture_method' }, { c: 'plain', t: ': ' }, { c: 'cs', t: "'manual'" }] },
      { type: 'line', parts: [{ c: 'plain', t: '  });' }] },
    ],
    chips: ['.NET 7/8', 'Stripe', 'SignalR', 'OpenAI', 'React', 'Docker'],
    hiChips: ['.NET 7/8', 'Stripe', 'SignalR', 'OpenAI'],
    year: '2025–2026',
    role: 'Tech Lead',
  },
  {
    num: '02',
    name: 'IntelliBooks — HMRC Finance Platform',
    desc: 'Production accounting platform with HMRC MTD: VAT, Self Assessment, National Insurance, Customs. OAuth2/OIDC authenticated, GDPR-compliant.',
    code: [
      { type: 'comment', text: '// HMRC OAuth2 flow' },
      { type: 'line', parts: [{ c: 'kw', t: 'var' }, { c: 'plain', t: ' token = ' }, { c: 'g', t: 'await' }, { c: 'plain', t: ' ' }, { c: 'cs', t: 'GetHmrcToken' }, { c: 'plain', t: '(' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  ' }, { c: 'cv', t: 'scope' }, { c: 'plain', t: ': ' }, { c: 'cs', t: '"write:vat"' }, { c: 'plain', t: ',' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  ' }, { c: 'cv', t: 'grantType' }, { c: 'plain', t: ': ' }, { c: 'cs', t: '"authorization_code"' }] },
      { type: 'line', parts: [{ c: 'plain', t: ');' }] },
    ],
    chips: ['.NET 7/8', 'HMRC MTD', 'OAuth2', 'React', 'Azure'],
    hiChips: ['.NET 7/8', 'HMRC MTD', 'OAuth2'],
    year: '2025–2026',
    role: 'Lead Architect',
  },
  {
    num: '03',
    name: 'Booking & Availability System',
    desc: 'Real-time booking platform: availability calendar, status workflows (Pending/Confirmed/Paid/Cancelled), Stripe deposits, WordPress widget, OTA webhooks.',
    code: [
      { type: 'comment', text: '// Real-time availability' },
      { type: 'line', parts: [{ c: 'g', t: 'await' }, { c: 'plain', t: ' Clients.Group(' }, { c: 'cv', t: 'tourId' }, { c: 'plain', t: ')' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  .' }, { c: 'cs', t: 'SendAsync' }, { c: 'plain', t: '(' }, { c: 'cs', t: '"SlotUpdated"' }, { c: 'plain', t: ', ' }, { c: 'kw', t: 'new' }, { c: 'plain', t: ' {' }] },
      { type: 'line', parts: [{ c: 'plain', t: '    ' }, { c: 'cv', t: 'date' }, { c: 'plain', t: ', ' }, { c: 'cv', t: 'available' }, { c: 'plain', t: ': ' }, { c: 'cs', t: 'false' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  });' }] },
    ],
    chips: ['.NET 7/8', 'Stripe', 'SignalR', 'React', 'OTA'],
    hiChips: ['.NET 7/8', 'Stripe', 'SignalR'],
    year: '2026',
    role: 'Full Stack',
  },
  {
    num: '04',
    name: 'UK Government API Integrations',
    desc: 'Production integrations: DVLA vehicle verification, DVSA MOT History, TrueLayer Open Banking. All OAuth2 authenticated, deployed to Azure App Service.',
    code: [
      { type: 'comment', text: '// DVLA lookup' },
      { type: 'line', parts: [{ c: 'kw', t: 'var' }, { c: 'plain', t: ' vehicle = ' }, { c: 'g', t: 'await' }, { c: 'plain', t: ' _dvla' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  .' }, { c: 'cs', t: 'GetVehicleAsync' }, { c: 'plain', t: '(' }] },
      { type: 'line', parts: [{ c: 'plain', t: '    registration: ' }, { c: 'cv', t: 'req.Plate' }] },
      { type: 'line', parts: [{ c: 'plain', t: '  );' }] },
    ],
    chips: ['DVLA API', 'DVSA API', 'TrueLayer', '.NET Core', 'Azure'],
    hiChips: ['DVLA API', 'DVSA API', 'TrueLayer'],
    year: '2022–2025',
    role: 'Backend Dev',
  },
]

export const experience = [
  {
    date: 'Aug 2022 → Present',
    company: 'Datascope Systems Ltd',
    location: 'Chester, UK · Remote',
    current: true,
    role: 'Senior Software Developer & Team Lead',
    desc: 'Leading full-stack development and 5 developers. .NET 7/8 and React/TypeScript. Hands-on across Azure, CI/CD, architecture, and team mentoring. Delivered AI-powered features using OpenAI and Claude Code in production.',
    stack: ['.NET 7/8', 'React', 'TypeScript', 'Azure Service Bus', 'Docker', 'Terraform', 'OpenAI'],
  },
  {
    date: 'Feb 2022 → Aug 2022',
    company: 'Mondaq Ltd',
    location: 'Colchester, UK · Hybrid',
    role: 'Full Stack .NET Developer',
    desc: 'Large-scale content platform serving 800,000+ legal and financial professionals. Backend enhancements and React frontend integrations in fast-paced Agile environment.',
    stack: ['C# / .NET', 'React', 'TypeScript', 'SQL Server', 'Material UI'],
  },
  {
    date: 'Oct 2019 → Jan 2022',
    company: 'Goodmaysys Software Technologies',
    location: 'London, UK',
    role: 'Software Developer (.NET)',
    desc: 'Backend and full-stack on regulated financial and insurance workflows. .NET Core, Azure Blob Storage, Cosmos DB, and React frontends in production.',
    stack: ['.NET Core', 'C#', 'SQL Server', 'Azure Blob', 'Cosmos DB', 'React'],
  },
]

export const skills = [
  {
    category: 'Backend',
    items: ['C# / .NET 7/8', 'ASP.NET Core Web API', 'Entity Framework Core', 'Background Services', 'SignalR (Real-time)', 'Clean Architecture'],
  },
  {
    category: 'Frontend & Payments',
    items: ['React.js / TypeScript', 'Stripe PaymentIntents', 'Stripe Elements / Connect', 'Webhook Handling', 'Deposit & Escrow Flows', 'OpenAI / Claude Code'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['Azure (PaaS, DevOps)', 'Docker / Compose', 'GitHub Actions / Terraform', 'HMRC / DVLA APIs', 'OAuth2 / OIDC', 'SQL Server / PostgreSQL'],
  },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Building a Stripe Escrow System in .NET 7',
    excerpt: 'How I implemented milestone-based payments with manual capture, dispute resolution, and automated tax calculations for a consultancy marketplace.',
    date: 'Apr 2026',
    readTime: '8 min read',
    tags: ['.NET', 'Stripe', 'C#'],
    url: '#',
  },
  {
    id: 2,
    title: 'HMRC Making Tax Digital: A Complete .NET Integration Guide',
    excerpt: 'Step-by-step walkthrough of integrating HMRC VAT MTD, Self Assessment, and National Insurance APIs with OAuth2/OIDC authentication in ASP.NET Core.',
    date: 'Mar 2026',
    readTime: '12 min read',
    tags: ['HMRC', '.NET', 'OAuth2'],
    url: '#',
  },
  {
    id: 3,
    title: 'Real-time Booking Systems with SignalR and .NET 7',
    excerpt: 'Architecture decisions behind building an availability management system with live updates, status workflows, and embeddable WordPress widgets.',
    date: 'Feb 2026',
    readTime: '7 min read',
    tags: ['SignalR', '.NET', 'React'],
    url: '#',
  },
]

export const techStack = [
  '.NET 7/8', 'React', 'Stripe', 'SignalR', 'Azure', 'Docker',
  'PostgreSQL', 'OpenAI', 'HMRC APIs', 'OAuth2', 'Entity Framework',
  'TypeScript', 'Team Lead', 'GitHub Actions',
]
