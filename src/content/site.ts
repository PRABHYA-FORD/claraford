// Single source of truth for marketing copy. Sections render from this data,
// so copy edits never touch layout code.
//
// Honesty rule: ClaraFord is pre-launch. Only state what is true today —
// no usage numbers, customer names, testimonials or certifications until they exist.

export const site = {
  name: 'ClaraFord',
  tagline: 'One inbox for every customer conversation',
  description:
    'ClaraFord is building an omnichannel inbox for WhatsApp, email, SMS, social and live chat, with AI-assisted replies and automation. Early access is open.',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000',
  // Shown on the site only when set; leave empty until the mailbox exists.
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? '',
} as const;

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'channels', label: 'Channels' },
  { id: 'platform', label: 'Platform' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'contact', label: 'Early access' },
] as const;

export type SectionId = (typeof navItems)[number]['id'];

export const heroHighlights = [
  { value: '1', label: 'Inbox for every channel' },
  { value: '8', label: 'Channels on the roadmap' },
  { value: '2', label: 'First up: WhatsApp & Email' },
  { value: 'Free', label: 'During early access' },
];

export type ChannelKey = 'whatsapp' | 'sms' | 'email' | 'voice' | 'instagram' | 'messenger' | 'chat' | 'telegram';
export type ChannelStatus = 'early-access' | 'roadmap';

export const channels: { key: ChannelKey; name: string; color: string; status: ChannelStatus; description: string }[] = [
  { key: 'whatsapp', name: 'WhatsApp Business', color: '#25D366', status: 'early-access', description: 'Two-way conversations, message templates and rich media through the WhatsApp Business Platform.' },
  { key: 'email', name: 'Email', color: '#3355FF', status: 'early-access', description: 'Send and receive email in the same customer timeline as every other channel.' },
  { key: 'sms', name: 'SMS', color: '#F59E0B', status: 'roadmap', description: 'Two-way SMS with delivery tracking and fallback to other channels.' },
  { key: 'instagram', name: 'Instagram', color: '#E1306C', status: 'roadmap', description: 'DMs and story replies routed to the right teammate.' },
  { key: 'messenger', name: 'Messenger', color: '#0084FF', status: 'roadmap', description: 'Facebook Messenger conversations with quick replies.' },
  { key: 'chat', name: 'Live Chat', color: '#12B5A6', status: 'roadmap', description: 'An embeddable chat widget for your website and app.' },
  { key: 'voice', name: 'Voice', color: '#8B5CF6', status: 'roadmap', description: 'Calls alongside your messaging, with transcripts in the timeline.' },
  { key: 'telegram', name: 'Telegram', color: '#229ED9', status: 'roadmap', description: 'Telegram bot conversations in the same shared inbox.' },
];

export type FeatureKey = 'inbox' | 'ai' | 'automation' | 'analytics' | 'security' | 'api';

export const features: { key: FeatureKey; title: string; description: string }[] = [
  { key: 'inbox', title: 'Unified inbox', description: 'Every channel threaded into one customer timeline, so your team never loses context.' },
  { key: 'ai', title: 'AI-assisted replies', description: 'Intent detection, sentiment and suggested replies that help agents answer faster.' },
  { key: 'automation', title: 'No-code automation', description: 'Simple flows for reminders, follow-ups, routing and after-hours replies.' },
  { key: 'analytics', title: 'Team analytics', description: 'Response times, workload and resolution, broken down by channel and teammate.' },
  { key: 'security', title: 'Privacy first', description: 'Encryption, role-based access and audit logs are part of the core design, not add-ons.' },
  { key: 'api', title: 'APIs & webhooks', description: 'Connect ClaraFord to your CRM, online store or internal tools.' },
];

export const steps = [
  { title: 'Connect', description: 'Link your WhatsApp Business number and support mailbox.' },
  { title: 'Organise', description: 'Set up your team, routing rules and saved replies.' },
  { title: 'Engage', description: 'Reply from one workspace with the full customer history in view.' },
  { title: 'Improve', description: 'See where response times slip and fix the bottlenecks.' },
];

export const integrations = ['CRM', 'Helpdesk', 'E-commerce', 'Team chat', 'Data warehouse', 'Webhooks'];

export type BenefitKey = 'free' | 'roadmap' | 'team';

export const earlyAccessBenefits: { key: BenefitKey; title: string; description: string }[] = [
  { key: 'free', title: 'Free during the beta', description: 'Use ClaraFord at no cost while we are in early access. No credit card needed.' },
  { key: 'roadmap', title: 'Shape the roadmap', description: 'Your feedback decides which channels and features we build next.' },
  { key: 'team', title: 'Direct line to the team', description: 'Talk to the people building the product, not a ticket queue.' },
];

export type Plan = {
  name: string;
  description: string;
  price: string;
  priceNote: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
};

export const plans: Plan[] = [
  {
    name: 'Early access',
    description: 'For teams who want to start now and help shape the product.',
    price: 'Free',
    priceNote: 'During the beta',
    features: ['WhatsApp & email inbox', 'Shared inbox for your team', 'AI-suggested replies', 'Direct feedback channel', 'Onboarding help'],
    cta: 'Join early access',
    highlighted: true,
  },
  {
    name: 'Growth',
    description: 'For growing teams once ClaraFord launches publicly.',
    price: 'At launch',
    priceNote: 'Pricing announced before launch',
    features: ['All channels as they launch', 'Automation flows', 'Team analytics', 'APIs & webhooks', 'Priority support'],
    cta: 'Get notified',
  },
  {
    name: 'Enterprise',
    description: 'For larger organisations with custom requirements.',
    price: 'Custom',
    priceNote: 'Tailored to your needs',
    features: ['Custom integrations', 'Security review support', 'Dedicated onboarding', 'Volume pricing'],
    cta: 'Talk to us',
  },
];

export const faqs = [
  { q: 'What is ClaraFord?', a: 'ClaraFord is an omnichannel inbox we are building so teams can handle WhatsApp, email, SMS, social and live chat conversations in one place.' },
  { q: 'When can I start using it?', a: 'We are onboarding early-access teams in small groups. Join the list and we will contact you when your spot opens.' },
  { q: 'Which channels come first?', a: 'WhatsApp and email. SMS, Instagram, Messenger, Live Chat, Voice and Telegram follow, prioritised by what early-access teams need most.' },
  { q: 'Is early access free?', a: 'Yes. Early access is free during the beta. We will announce pricing before public launch, well before anything is charged.' },
  { q: 'What do you do with my details?', a: 'We only use what you submit to contact you about early access. See our Privacy Policy for details.' },
];

export const footerLinks = [
  {
    title: 'Product',
    links: [
      { label: 'Channels', href: '/#channels' },
      { label: 'Platform', href: '/#platform' },
      { label: 'Pricing', href: '/#pricing' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'Early access', href: '/#contact' },
      { label: 'FAQ', href: '/#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use', href: '/terms' },
    ],
  },
];
