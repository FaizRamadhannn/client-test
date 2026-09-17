export interface Service {
  name: string;
  description: string;
  benefit?: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  text: string;
  date?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  description?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BusinessLanguageContent {
  services?: Service[];
  hero: {
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta?: string;
  };
  about: {
    title: string;
    shortDescription: string;
    description: string;
  };
  whyChooseUs: {
    title: string;
    description: string;
  }[];
  process: {
    title: string;
    description: string;
  }[];
  cta: {
    title: string;
    description: string;
    buttonText: string;
    whatsappMessage: string;
  };
  faq: FAQ[];
}

export interface Business {
  identity: {
    name: string;
    category: string;
    type: string;
    description: string;
  };
  contact: {
    phone: string;
    whatsapp: string;
    email?: string;
    website?: string;
    instagram?: string;
    facebook?: string;
  };
  location: {
    address: string;
    city: string;
    province: string;
    country: string;
    googleMapsUrl: string;
  };
  hours: Record<string, string>;
  positioning: {
    primaryTargetCustomer: string;
    secondaryTargetCustomer?: string;
    customerProblem: string;
    solution: string;
    valueProposition: string;
    uniqueSellingPoints: string[];
  };
  services: Service[];
  testimonials: Testimonial[];
  gallery: GalleryImage[];
  content: {
    id: BusinessLanguageContent;
    en: BusinessLanguageContent;
  };
  seo: {
    title: string;
    description: string;
    ogImage?: string;
    primaryKeyword: string;
    secondaryKeywords: string[];
    localKeywords: string[];
    slug: string;
  };
  design: {
    style: string;
    visualPersonality: string;
    colorDirection: string;
    typographyDirection: string;
    imageStyle: string;
    layoutStyle: string;
    uiStyle: string;
  };
  google: {
    rating?: number;
    reviewCount?: number;
  };
}

export const business: Business = {
  identity: {
    name: "SAHAJA CATERING",
    category: "Catering Service",
    type: "Local Business",
    description:
      "Layanan catering terpercaya di Kota Malang yang menyediakan berbagai kebutuhan kuliner dan acara.",
  },
  contact: {
    phone: "0853-8585-5035",
    whatsapp: "085385855035",
    email: "",
    website: "https://sahajacatering.carrd.co/",
    instagram: "",
    facebook: "",
  },
  location: {
    address:
      "No.5 2 No, Jl. Simpang Borobudur Utara No.5 2 No, Mojolangu, Kec. Lowokwaru",
    city: "Malang",
    province: "Jawa Timur",
    country: "Indonesia",
    googleMapsUrl:
      "https://www.google.com/maps/place//data=!4m2!3m1!19sChIJSf4b_uop1i0RYVeeAoMRV2I",
  },
  hours: {
    monday: "08:00 - 19:00",
    tuesday: "08:00 - 19:00",
    wednesday: "08:00 - 19:00",
    thursday: "08:00 - 19:00",
    friday: "08:00 - 19:00",
    saturday: "08:00 - 19:00",
    sunday: "08:00 - 19:00",
  },
  positioning: {
    primaryTargetCustomer:
      "Individu dan keluarga yang membutuhkan layanan konsumsi atau catering untuk acara di Malang",
    secondaryTargetCustomer:
      "Penyelenggara acara, instansi, atau perusahaan yang memerlukan pesanan makanan berkualitas",
    customerProblem:
      "Kesulitan menyiapkan konsumsi yang lezat, higienis, dan tepat waktu untuk berbagai acara maupun kebutuhan harian",
    solution:
      "Menyediakan layanan catering profesional dengan menu berkualitas dan pelayanan prima di Kota Malang",
    valueProposition:
      "Layanan catering berkualitas untuk kebutuhan acara dan konsumsi harian di Malang",
    uniqueSellingPoints: [
      "Berlokasi di Mojolangu, Lowokwaru, Kota Malang",
      "Melayani kebutuhan catering acara dan konsumsi harian atau kotak",
      "Beroperasi setiap hari pukul 08.00 - 19.00 WIB",
    ],
  },
  services: [
    {
      name: "Catering Acara & Pesta",
      description:
        "Penyediaan menu makanan lezat dan higienis untuk berbagai jenis acara spesial.",
      benefit:
        "Memastikan tamu undangan menikmati hidangan berkualitas tinggi tanpa repot",
    },
    {
      name: "Pemesanan Konsumsi Harian / Kotak",
      description:
        "Solusi praktis pemesanan makanan porsi atau kotak untuk berbagai keperluan.",
      benefit: "Praktis, higienis, dan menghemat waktu persiapan makanan",
    },
  ],
  testimonials: [],
  gallery: [],
  content: {
    id: {
      hero: {
        headline: "Layanan Catering Berkualitas dan Terpercaya di Kota Malang",
        subheadline:
          "Nikmati kelezatan hidangan istimewa untuk setiap momen spesial Anda bersama Sahaja Catering.",
        primaryCta: "Hubungi via WhatsApp",
        secondaryCta: "Lihat Layanan",
      },
      about: {
        title: "Tentang Sahaja Catering",
        shortDescription:
          "Penyedia layanan catering pilihan dengan komitmen menjaga kualitas rasa dan kepuasan pelanggan.",
        description:
          "Sahaja Catering berlokasi di kawasan Lowokwaru, Kota Malang. Kami hadir untuk memenuhi kebutuhan kuliner Anda mulai dari acara keluarga hingga berbagai perayaan penting lainnya dengan standar pelayanan yang profesional.",
      },
      services: [
        {
          name: "Catering Acara & Pesta",
          description:
            "Penyediaan menu makanan lezat dan higienis untuk berbagai jenis acara spesial.",
        },
        {
          name: "Pemesanan Konsumsi Harian / Kotak",
          description:
            "Solusi praktis pemesanan makanan porsi atau kotak untuk berbagai keperluan.",
        },
      ],
      whyChooseUs: [
        {
          title: "Lokasi di Malang",
          description:
            "Sahaja Catering berlokasi di area Mojolangu, Lowokwaru, Kota Malang.",
        },
        {
          title: "Pilihan untuk Berbagai Kebutuhan",
          description:
            "Melayani catering acara, pesta, konsumsi harian, dan pesanan makanan kotak.",
        },
        {
          title: "Buka Setiap Hari",
          description:
            "Informasi dan pemesanan tersedia setiap hari pukul 08.00 - 19.00 WIB.",
        },
      ],
      process: [
        {
          title: "Konsultasi Kebutuhan",
          description:
            "Hubungi kami melalui WhatsApp untuk mendiskusikan jenis acara dan menu.",
        },
        {
          title: "Konfirmasi Pesanan",
          description:
            "Tentukan detail pesanan, jumlah porsi, serta jadwal pengiriman.",
        },
        {
          title: "Proses Pengolahan",
          description:
            "Tim juru masak kami menyiapkan hidangan dengan bahan pilihan.",
        },
        {
          title: "Pengiriman",
          description:
            "Pesanan diantar ke lokasi acara sesuai detail yang disepakati.",
        },
      ],
      cta: {
        title: "Wujudkan Acara Sempurna Bersama Kami",
        description:
          "Konsultasikan kebutuhan catering Anda sekarang juga dengan tim Sahaja Catering.",
        buttonText: "Hubungi Kami via WhatsApp",
        whatsappMessage:
          "Halo, saya ingin mendapatkan informasi mengenai pemesanan catering.",
      },
      faq: [
        {
          question: "Di mana lokasi Sahaja Catering?",
          answer:
            "Sahaja Catering berlokasi di No.5 2 No, Jl. Simpang Borobudur Utara No.5 2 No, Mojolangu, Kec. Lowokwaru, Kota Malang, Jawa Timur.",
        },
        {
          question: "Bagaimana cara melakukan pemesanan?",
          answer:
            "Anda dapat menghubungi nomor WhatsApp kami di 0853-8585-5035 untuk konsultasi dan pemesanan.",
        },
        {
          question: "Jam berapa operasional Sahaja Catering?",
          answer:
            "Kami buka setiap hari Senin sampai Minggu mulai pukul 08.00 hingga 19.00 WIB.",
        },
        {
          question: "Acara apa saja yang dapat dilayani?",
          answer:
            "Kami melayani berbagai kebutuhan konsumsi untuk acara keluarga, syukuran, pesta, maupun pesanan harian.",
        },
        {
          question: "Bagaimana memastikan ketersediaan menu dan jadwal?",
          answer: "Hubungi kami melalui WhatsApp untuk informasi lebih lanjut.",
        },
      ],
    },
    en: {
      hero: {
        headline: "Trusted and Quality Catering Services in Malang",
        subheadline:
          "Enjoy special culinary delights for every important moment with Sahaja Catering.",
        primaryCta: "Contact via WhatsApp",
        secondaryCta: "View Services",
      },
      about: {
        title: "About Sahaja Catering",
        shortDescription:
          "Your preferred catering service provider committed to food quality and customer satisfaction.",
        description:
          "Sahaja Catering is located in the Lowokwaru district, Malang City. We are dedicated to fulfilling your culinary needs, from family gatherings to special celebrations, with professional service standards.",
      },
      services: [
        {
          name: "Event & Party Catering",
          description:
            "Provision of delicious and hygienic food menus for various special occasions.",
        },
        {
          name: "Daily / Box Meal Orders",
          description:
            "Practical food portion or box order solutions for various needs.",
        },
      ],
      whyChooseUs: [
        {
          title: "Located in Malang",
          description:
            "Sahaja Catering is located in the Mojolangu area of Lowokwaru, Malang City.",
        },
        {
          title: "Options for Different Needs",
          description:
            "Serving event catering, parties, daily meals, and boxed food orders.",
        },
        {
          title: "Open Every Day",
          description:
            "Information and ordering are available daily from 08:00 AM to 07:00 PM.",
        },
      ],
      process: [
        {
          title: "Discuss Your Needs",
          description:
            "Contact us via WhatsApp to discuss your event and menu requirements.",
        },
        {
          title: "Confirm Your Order",
          description:
            "Finalize your order details, portion counts, and delivery schedule.",
        },
        {
          title: "Preparation",
          description: "Our kitchen team prepares the dishes for your order.",
        },
        {
          title: "Delivery",
          description: "Your order is delivered according to the agreed details.",
        },
      ],
      cta: {
        title: "Create the Perfect Event With Us",
        description:
          "Discuss your catering needs with the Sahaja Catering team today.",
        buttonText: "Contact Us via WhatsApp",
        whatsappMessage:
          "Hello, I would like to get information regarding catering orders.",
      },
      faq: [
        {
          question: "Where is Sahaja Catering located?",
          answer:
            "Sahaja Catering is located at No.5 2 No, Jl. Simpang Borobudur Utara No.5 2 No, Mojolangu, Kec. Lowokwaru, Malang City, East Java.",
        },
        {
          question: "How can I place an order?",
          answer:
            "You can contact our WhatsApp number at 0853-8585-5035 for consultation and orders.",
        },
        {
          question: "What are your operating hours?",
          answer:
            "We are open every day from Monday to Sunday, 08:00 AM to 07:00 PM.",
        },
        {
          question: "What types of events do you cater?",
          answer:
            "We provide catering for family gatherings, celebrations, parties, and daily meal orders.",
        },
        {
          question: "How can I check menu availability and scheduling?",
          answer: "Please contact us via WhatsApp for further information.",
        },
      ],
    },
  },
  seo: {
    title: "Sahaja Catering | Catering di Malang",
    description:
      "Sahaja Catering menyediakan layanan catering acara, pesta, konsumsi harian, dan makanan kotak di Malang.",
    primaryKeyword: "catering Malang",
    secondaryKeywords: ["catering acara", "nasi kotak Malang"],
    localKeywords: ["catering Lowokwaru", "catering Mojolangu"],
    slug: "",
  },
  design: {
    style: "",
    visualPersonality: "",
    colorDirection: "",
    typographyDirection: "",
    imageStyle: "",
    layoutStyle: "",
    uiStyle: "",
  },
  google: {
    rating: undefined,
    reviewCount: undefined,
  },
};