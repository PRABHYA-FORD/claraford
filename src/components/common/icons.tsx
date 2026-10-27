import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import ForumOutlinedIcon from '@mui/icons-material/ForumOutlined';
import TelegramIcon from '@mui/icons-material/Telegram';
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import AccountTreeOutlinedIcon from '@mui/icons-material/AccountTreeOutlined';
import InsightsOutlinedIcon from '@mui/icons-material/InsightsOutlined';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import type { SvgIconComponent } from '@mui/icons-material';
import type { ChannelKey, FeatureKey } from '@/content/site';

export const channelIcons: Record<ChannelKey, SvgIconComponent> = {
  whatsapp: WhatsAppIcon,
  sms: SmsOutlinedIcon,
  email: MailOutlineIcon,
  voice: PhoneInTalkOutlinedIcon,
  instagram: InstagramIcon,
  messenger: FacebookIcon,
  chat: ForumOutlinedIcon,
  telegram: TelegramIcon,
};

export const featureIcons: Record<FeatureKey, SvgIconComponent> = {
  inbox: InboxOutlinedIcon,
  ai: AutoAwesomeOutlinedIcon,
  automation: AccountTreeOutlinedIcon,
  analytics: InsightsOutlinedIcon,
  security: VerifiedUserOutlinedIcon,
  api: CodeOutlinedIcon,
};
