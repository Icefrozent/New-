export interface CeremonyRow {
  t: string;
  pkm: string;
  pen: string;
  km: string;
  en: string;
  isHighlight?: boolean;
}

export interface CeremonyDay {
  km: string;
  en: string;
  rows: CeremonyRow[];
}

export interface WeddingData {
  couple: {
    groom: {
      km: string;
      en: string;
      shortKm: string;
      shortEn: string;
      initialKm: string;
      initialEn: string;
    };
    bride: {
      km: string;
      en: string;
      shortKm: string;
      shortEn: string;
      initialKm: string;
      initialEn: string;
    };
  };
  parents: {
    groom: {
      father: { km: string; en: string };
      mother: { km: string; en: string };
    };
    bride: {
      father: { km: string; en: string };
      mother: { km: string; en: string };
    };
  };
  date: {
    targetIso: string;
    solarDateKm: string;
    solarDateEn: string;
    lunarKm: string;
    lunarEn: string;
    weekdayKm: string;
    weekdayEn: string;
    timeKm: string;
    timeEn: string;
  };
  venue: {
    nameKm: string;
    nameEn: string;
    addressKm: string;
    addressEn: string;
    lat: number;
    lng: number;
    mapsEmbedUrl: string;
    googleMapsUrl: string;
    noteKm: string;
    noteEn: string;
  };
  contacts: {
    nameKm: string;
    nameEn: string;
    phone: string;
    role: string;
  }[];
  programme: CeremonyDay[];
  gifts: {
    bank: string;
    accountName: string;
    accountNumber: string;
    currency: string;
    qrType: 'aba' | 'wing' | 'acleda';
  }[];
  loveStory: {
    year: string;
    titleKm: string;
    titleEn: string;
    descKm: string;
    descEn: string;
    image: string;
  }[];
  gallery: {
    id: number;
    titleKm: string;
    titleEn: string;
    src: string;
    alt: string;
    aspect: string;
  }[];
}

export const weddingData: WeddingData = {
  couple: {
    groom: {
      km: 'រិទ្ធី',
      en: 'Rithy',
      shortKm: 'រិទ្ធី',
      shortEn: 'Rithy',
      initialKm: 'រ',
      initialEn: 'R'
    },
    bride: {
      km: 'ធីដា',
      en: 'Thida',
      shortKm: 'ធីដា',
      shortEn: 'Thida',
      initialKm: 'ធ',
      initialEn: 'T'
    }
  },
  parents: {
    groom: {
      father: {
        km: 'លោក ស្រី',
        en: 'Mr. Srey'
      },
      mother: {
        km: 'លោកស្រី វី',
        en: 'Mrs. Vy'
      }
    },
    bride: {
      father: {
        km: 'លោក សុខ',
        en: 'Mr. Sok'
      },
      mother: {
        km: 'លោកស្រី ថា',
        en: 'Mrs. Tha'
      }
    }
  },
  date: {
    targetIso: '2026-11-15T06:30:00+07:00',
    solarDateKm: 'ថ្ងៃអាទិត្យ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
    solarDateEn: 'Sunday, 15 November 2026',
    lunarKm: 'ត្រូវនឹងថ្ងៃអាទិត្យ ៦កើត ខែកត្ដិក ឆ្នាំមមី អដ្ឋស័ក ព.ស.២៥៧០',
    lunarEn: '6th Waxing Day of Kattika, Year of the Horse, B.E. 2570',
    weekdayKm: 'ថ្ងៃអាទិត្យ',
    weekdayEn: 'Sunday',
    timeKm: 'វេលាម៉ោង ០៦:៣០ ព្រឹក',
    timeEn: 'From 6:30 AM onwards'
  },
  venue: {
    nameKm: 'គេហដ្ឋានខាងស្រី (មង្គលការកូនស្រី)',
    nameEn: "The Bride's Residence",
    addressKm: 'ភូមិព្រែកហូរលិច១ សង្កាត់ព្រែកហូរ ក្រុងតាខ្មៅ ខេត្តកណ្តាល',
    addressEn: 'Phum Prek Ho Lech 1, Sangkat Prek Ho, Krong Ta Khmau, Kandal Province',
    lat: 11.602481854017244,
    lng: 104.88494226547,
    mapsEmbedUrl: 'https://maps.google.com/maps?q=11.602481854017244,104.88494226547&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=11.602481854017244,104.88494226547',
    noteKm: 'សូមអញ្ជើញភ្ញៀវកិត្តិយសទាំងអស់ចូលរួមពិសាភោជនាហារ និងប្រសិទ្ធពរជ័យដោយមេត្រីភាព',
    noteEn: 'We look forward to celebrating this sacred day with your gracious presence'
  },
  contacts: [
    { nameKm: 'ខាងកូនកំលោះ (Groom)', nameEn: 'Groom Family', phone: '+85512888999', role: '012 888 999' },
    { nameKm: 'ខាងកូនក្រមុំ (Bride)', nameEn: 'Bride Family', phone: '+855967777888', role: '096 777 7888' }
  ],
  programme: [
    {
      km: 'កម្មវិធីទី១ ថ្ងៃសៅរ៍ ទី១៤ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      en: 'Day 1 · Saturday, 14 November 2026',
      rows: [
        {
          t: '០៣:០០',
          pkm: 'រសៀល',
          pen: '3:00 PM',
          km: 'ពិធីសែនក្រុងពាលី',
          en: 'Sen Krong Peali — Blessing offering to guardian spirits'
        },
        {
          t: '០៤:០០',
          pkm: 'រសៀល',
          pen: '4:00 PM',
          km: 'ពិធីសូត្រមន្តចម្រើនព្រះបរិត្ត',
          en: 'Monks chanting Buddhist blessing prayers'
        },
        {
          t: '០៥:០០',
          pkm: 'ល្ងាច',
          pen: '5:00 PM',
          km: 'ពិធីជុំពេលា និងជាវខាន់ស្លា',
          en: 'Chum Pelea and Chav Khan Sla sacred rites'
        },
        {
          t: '០៦:៣០',
          pkm: 'ល្ងាច',
          pen: '6:30 PM',
          km: 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារពេលល្ងាច',
          en: 'Dinner banquet for honored family and guests'
        }
      ]
    },
    {
      km: 'កម្មវិធីទី២ ថ្ងៃអាទិត្យ ទី១៥ ខែវិច្ឆិកា ឆ្នាំ២០២៦',
      en: 'Day 2 · Sunday, 15 November 2026',
      rows: [
        {
          t: '០៦:៣០',
          pkm: 'ព្រឹក',
          pen: '6:30 AM',
          km: 'ជួបជុំភ្ញៀវកិត្តិយសដើម្បីរៀបចំហែជំនូន',
          en: 'Guests gathering for the groom fruit gift procession'
        },
        {
          t: '០៧:០០',
          pkm: 'ព្រឹក',
          pen: '7:00 AM',
          km: 'ពិធីហែជំនូនកំណត់ចូលរោងជ័យ',
          en: 'Hae Chamnoun — Procession marching into the victory pavilion',
          isHighlight: true
        },
        {
          t: '០៧:៣០',
          pkm: 'ព្រឹក',
          pen: '7:30 AM',
          km: 'ពិធីចៅមហានិយាយជើងការ សែនព្រេន រៀបរាប់ផ្លែឈើនិងពិសាភោជនាហារពេលព្រឹក',
          en: 'Master of ceremonies negotiation, fruit presentation & breakfast'
        },
        {
          t: '០៨:០០',
          pkm: 'ព្រឹក',
          pen: '8:00 AM',
          km: 'ពិធីបំពាក់ចិញ្ចៀន',
          en: 'Wedding ring exchange ceremony'
        },
        {
          t: '០៩:០០',
          pkm: 'ព្រឹក',
          pen: '9:00 AM',
          km: 'ពិធីកាត់សក់បង្កក់សិរី កូនប្រុស-កូនស្រី',
          en: 'Kat Sok — Hair cleansing ritual for prosperity and luck',
          isHighlight: true
        },
        {
          t: '១១:០០',
          pkm: 'ព្រឹក',
          pen: '11:00 AM',
          km: 'ពិធីសំពះផ្ទឹមចងដៃ បង្វិលពពិល និងព្រះថោងតោងស្បៃ',
          en: 'Sompeah Phtem, wrist-thread tying, Popil candle circle & Preah Thong',
          isHighlight: true
        },
        {
          t: '១២:០០',
          pkm: 'ថ្ងៃត្រង់',
          pen: '12:00 PM',
          km: 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាអាហារថ្ងៃត្រង់ បញ្ចប់កិច្ចអាពាហ៍ពិពាហ៍',
          en: 'Celebratory wedding luncheon concluding morning ceremony'
        },
        {
          t: '០៤:០០',
          pkm: 'ល្ងាច',
          pen: '4:00 PM',
          km: 'អញ្ជើញភ្ញៀវកិត្តិយសពិសាភោជនាហារ នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព',
          en: 'Evening wedding reception & banquet at the bride’s home',
          isHighlight: true
        }
      ]
    }
  ],
  gifts: [
    {
      bank: 'ABA Bank (KHQR)',
      accountName: 'RITHY & THIDA',
      accountNumber: '001 888 666',
      currency: 'USD / KHR',
      qrType: 'aba'
    },
    {
      bank: 'Wing Bank / ACLEDA',
      accountName: 'THIDA SOK',
      accountNumber: '012 999 777',
      currency: 'KHR / USD',
      qrType: 'wing'
    }
  ],
  loveStory: [
    {
      year: '2021',
      titleKm: 'ការជួបគ្នាលើកដំបូង',
      titleEn: 'First Meeting',
      descKm: 'ពេលវេលាបាននាំឱ្យយើងបានស្គាល់គ្នាដោយក្តីញញឹម និងការយល់ចិត្តដែលមិនអាចបំភ្លេចបាន។',
      descEn: 'Time brought our hearts together with a simple smile and effortless understanding.',
      image: '/src/assets/images/couple_cozy_portrait_1792338261618.jpg'
    },
    {
      year: '2023',
      titleKm: 'ដំណើររួមគ្នា',
      titleEn: 'Growing Together',
      descKm: 'ឆ្លងកាត់រាល់អនុស្សាវរីយ៍ល្អៗ ភាពកក់ក្តៅ និងការគាំទ្រគ្នាទៅវិញទៅមកជានិច្ច។',
      descEn: 'Sharing milestones, laughter, and an unspoken promise to stand by each other.',
      image: '/src/assets/images/hero_wedding_couple_1792338260569.jpg'
    },
    {
      year: '2026',
      titleKm: 'សន្យាអស់មួយជីវិត',
      titleEn: 'A Lifetime Promise',
      descKm: 'ថ្ងៃមង្គលការជាការចាប់ផ្តើមទំព័រថ្មីនៃក្តីស្រលាញ់ដ៏រឹងមាំរវាងយើងទាំងពីរ។',
      descEn: 'Our wedding marks the sacred beginning of our shared journey as husband and wife.',
      image: '/src/assets/images/couple_ceremony_1792338260996.jpg'
    }
  ],
  gallery: [
    {
      id: 1,
      titleKm: 'សម្លៀកបំពាក់ប្រពៃណីខ្មែរ',
      titleEn: 'Royal Khmer Silk Attire',
      src: '/src/assets/images/hero_wedding_couple_1792338260569.jpg',
      alt: 'Rithy and Thida in royal gold Cambodian silk garments',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 2,
      titleKm: 'ស្នេហានិងភាពទន់ភ្លន់',
      titleEn: 'Botanical Garden Romance',
      src: '/src/assets/images/couple_cozy_portrait_1792338261618.jpg',
      alt: 'Romantic pre-wedding portrait in garden with lace gown and suit',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 3,
      titleKm: 'ស្រមោលប្រាសាទបុរាណពេលថ្ងៃលិច',
      titleEn: 'Angkor Temple Sunset',
      src: '/src/assets/images/couple_temple_sunset_1792339703938.jpg',
      alt: 'Rithy and Thida holding hands at ancient temple gateway at sunset',
      aspect: 'aspect-[3/4]'
    },
    {
      id: 4,
      titleKm: 'ស្នាមញញឹមក្រោមពន្លឺភ្លើងរាត្រី',
      titleEn: 'Fairy Lights Romance',
      src: '/src/assets/images/couple_fairylights_candid_1792339703772.jpg',
      alt: 'Candid joyful couple moment surrounded by warm fairy lights',
      aspect: 'aspect-[4/3]'
    },
    {
      id: 5,
      titleKm: 'ពន្លឺទៀននិងផ្កាឈូក',
      titleEn: 'Candlelight & Lotus Pond',
      src: '/src/assets/images/couple_lotus_pond_1792338261309.jpg',
      alt: 'Lotus pond with glowing lanterns and couple at dusk',
      aspect: 'aspect-[16/9]'
    },
    {
      id: 6,
      titleKm: 'សិរីមង្គលក្នុងពិធីមង្គលការ',
      titleEn: 'Traditional Blessing Ceremony',
      src: '/src/assets/images/couple_ceremony_1792338260996.jpg',
      alt: 'Khmer wedding ceremony offering and ritual blessing',
      aspect: 'aspect-[4/3]'
    }
  ]
};

export const toKhmerNum = (num: number | string): string => {
  const khmerDigits = ['០', '១', '២', '៣', '៤', '៥', '៦', '៧', '៨', '៩'];
  return String(num).replace(/[0-9]/g, (d) => khmerDigits[parseInt(d, 10)]);
};
