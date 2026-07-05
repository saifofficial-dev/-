import { Product, Feature, Review } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '100ml',
    name: '100ml Traditional Amber Bottle',
    urduName: '۱۰۰ ملی لیٹر روایتی بوتل',
    size: '100ml',
    price: 350,
    description: 'Perfect for trial or travel. Cold-pressed to preserve vital nutrients for healthy hair growth.',
    urduDescription: 'آزمائشی یا سفری استعمال کے لیے بہترین۔ بالوں کی صحت بخش نشوونما کے لیے ضروری غذائی اجزاء سے بھرپور۔',
    benefits: [
      '100% Pure Kachi Ghani Sarson Oil',
      'Stops Hair Fall & Treats Dandruff',
      'Provides Deep Scalp Nourishment',
      'Comes in Premium Amber Glass'
    ],
    popular: false
  },
  {
    id: '150ml',
    name: '150ml Heritage Family Pack',
    urduName: '۱۵۰ ملی لیٹر فیملی پیک',
    size: '150ml',
    price: 500,
    description: 'Our most popular size, offering the best value for your family’s weekly traditional oiling.',
    urduDescription: 'ہماری سب سے زیادہ پسند کی جانے والی بوتل، جو آپ کی فیملی کی ہفتہ وار مالش کے لیے بہترین قیمت فراہم کرتی ہے۔',
    benefits: [
      'Great Value for Family Usage',
      'Rich in Natural Proteins & Fatty Acids',
      'Deeply Conditions & Adds Luster',
      'Guaranteed Chemical & Preservative Free'
    ],
    popular: true
  }
];

export const FEATURES: Feature[] = [
  {
    title: '100% Pure & Cold Pressed',
    urduTitle: '۱۰۰٪ خالص اور کچی گھانی',
    description: 'Sourced from selected high-grade mustard seeds and cold-pressed traditionally without heat to lock in natural vitamins.',
    urduDescription: 'اعلیٰ کوالٹی کے سرسوں کے بیجوں سے حاصل کردہ، اور بغیر کسی حرارت کے روایتی کچی گھانی سے نکالا گیا تیل۔',
    icon: 'droplet'
  },
  {
    title: 'No Chemicals or Mineral Oil',
    urduTitle: 'کیمیکل اور منرل آئل سے پاک',
    description: 'Absolutely zero paraffin, liquid paraffin, mineral oils, silicones, parabens, or synthetic fragrance. Just pure nature.',
    urduDescription: 'منرل آئل، مصنوعی رنگ، کیمیکلز اور خوشبو سے بالکل پاک۔ صرف اور صرف خالص قدرتی خصوصیات۔',
    icon: 'shield-check'
  },
  {
    title: 'Traditional Lahori Heritage',
    urduTitle: 'لاہور کا روایتی دیسی نسخہ',
    description: 'Crafted in Lahore, Pakistan, using a generational recipe that stays true to the warmth and care of our grandmothers (Dadis).',
    urduDescription: 'دادیوں کے آزمودہ دیسی نسخوں کے مطابق لاہور میں تیار کردہ، جو صدیوں پرانے بھروسے کی عکاسی کرتا ہے۔',
    icon: 'sparkles'
  },
  {
    title: 'Deep Conditioning & Growth',
    urduTitle: 'بالوں کی لمبائی اور چمکدار بناوٹ',
    description: 'Regular massage stimulates blood circulation, strengthens hair follicles from the root, and gives a deep, natural shine.',
    urduDescription: 'باقاعدگی سے مالش سر کی جلد میں خون کے بہاؤ کو بڑھاتی ہے، بالوں کی جڑوں کو مضبوط کرتی ہے اور قدرتی چمک دیتی ہے۔',
    icon: 'heart'
  }
];

export const REVIEWS: Review[] = [
  {
    name: 'Amina Sohail',
    city: 'Karachi',
    rating: 5,
    comment: 'My grandmother used to make her own sarson oil, but after moving to Karachi, I couldn’t find that texture. Dadi ka Nuskha feels exactly like home!',
    urduComment: 'میری دادی خود سرسوں کا تیل تیار کرتی تھیں، لیکن کراچی آنے کے بعد مجھے وہ معیار نہیں ملا۔ دادی کا نسخہ بالکل گھر کے تیل جیسا خالص ہے!'
  },
  {
    name: 'Zainab Bibi',
    city: 'Lahore',
    rating: 5,
    comment: 'Pure, thick, and authentic. The golden color and natural pungent aroma itself prove there is zero mineral oil. Truly Lahore’s finest!',
    urduComment: 'خالص، گاڑھا اور لاجواب۔ اس کا سنہرا رنگ اور تیز خوشبو خود ثابت کرتی ہے کہ اس میں کوئی منرل آئل نہیں ہے۔ واقعی لاہور کا بہترین تیل!'
  },
  {
    name: 'Kamran Mughal',
    city: 'Rawalpindi',
    rating: 5,
    comment: 'Extremely high quality. My scalp itchiness is gone, and hair fall has reduced significantly. Ordered the 150ml bottle for my whole family now.',
    urduComment: 'نہایت اعلیٰ کوالٹی۔ سر کی خشکی ختم ہو گئی اور بالوں کا گرنا بہت حد تک کم ہو گیا۔ اب پوری فیملی کے لیے ۱۵۰ ملی لیٹر کی بوتل منگوائی ہے۔'
  }
];

export const WHATSAPP_NUMBER = '923000000000';
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
