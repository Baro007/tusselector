import { Question } from '../types';

export const questions: Question[] = [
  // Kişisel Değerler ve Tercihler
  {
    id: 'values_1',
    text: 'İş-yaşam dengesi sizin için ne kadar önemli?',
    type: 'rating',
    category: 'Kişisel Değerler',
    importance: 'critical',
    relatedQuestions: ['lifestyle_1', 'lifestyle_2']
  },
  {
    id: 'values_2',
    text: 'Kariyerinizde akademik başarı sizin için ne kadar önemli?',
    type: 'rating',
    category: 'Kişisel Değerler',
    importance: 'major'
  },
  {
    id: 'values_3',
    text: 'Hangi çalışma ortamını tercih edersiniz?',
    type: 'multiChoice',
    options: [
      'Hastane temelli',
      'Özel klinik',
      'Akademik ortam',
      'Araştırma merkezi',
      'Toplum sağlığı merkezi'
    ],
    category: 'Kişisel Değerler',
    importance: 'major'
  },

  // Klinik Beceriler ve Tercihler
  {
    id: 'skills_1',
    text: 'Acil durumlarda karar verme becerinizi nasıl değerlendirirsiniz?',
    type: 'rating',
    category: 'Klinik Beceriler',
    importance: 'critical',
    relatedQuestions: ['skills_7']
  },
  {
    id: 'skills_2',
    text: 'Hangi tür prosedürleri yapmaktan hoşlanırsınız?',
    type: 'multiChoice',
    options: [
      'Minimal invaziv işlemler',
      'Majör cerrahi prosedürler',
      'Diagnostik prosedürler',
      'Görüntüleme rehberliğinde işlemler',
      'Hasta başı ultrason'
    ],
    category: 'Klinik Beceriler',
    importance: 'major'
  },

  // Hasta Etkileşimi
  {
    id: 'patient_1',
    text: 'Tercih ettiğiniz hasta etkileşimi türü nedir?',
    type: 'choice',
    options: [
      'Uzun süreli hasta takibi',
      'Kısa süreli akut bakım',
      'Konsültasyon bazlı',
      'Minimal hasta teması'
    ],
    category: 'Hasta Etkileşimi',
    importance: 'critical'
  },
  {
    id: 'patient_2',
    text: 'Hangi yaş grubu hastalarla çalışmayı tercih edersiniz?',
    type: 'multiChoice',
    options: [
      'Pediatrik hastalar',
      'Adolesanlar',
      'Yetişkinler',
      'Geriatrik hastalar',
      'Tüm yaş grupları'
    ],
    category: 'Hasta Etkileşimi',
    importance: 'major'
  },

  // Teknoloji ve İnovasyon
  {
    id: 'tech_1',
    text: 'Yeni teknolojileri kullanma ve öğrenme konusundaki ilginiz nedir?',
    type: 'rating',
    category: 'Teknoloji ve İnovasyon',
    importance: 'major'
  },
  {
    id: 'tech_2',
    text: 'Hangi teknolojik araçları kullanmakta kendinizi rahat hissediyorsunuz?',
    type: 'multiChoice',
    options: [
      'Görüntüleme sistemleri',
      'Robotik cerrahi sistemler',
      'Elektronik sağlık kayıtları',
      'Telemedicine platformları',
      'Yapay zeka destekli tanı araçları'
    ],
    category: 'Teknoloji ve İnovasyon',
    importance: 'minor'
  },

  // Araştırma ve Akademik İlgi
  {
    id: 'research_1',
    text: 'Klinik araştırmalara katılma konusundaki ilginiz nedir?',
    type: 'rating',
    category: 'Araştırma ve Akademik',
    importance: 'major'
  },
  {
    id: 'research_2',
    text: 'Hangi tür araştırma aktiviteleri sizi çeker?',
    type: 'multiChoice',
    options: [
      'Klinik araştırmalar',
      'Temel bilim araştırmaları',
      'Epidemiyolojik çalışmalar',
      'Sağlık hizmetleri araştırması',
      'Tıp eğitimi araştırması'
    ],
    category: 'Araştırma ve Akademik',
    importance: 'minor',
    prerequisite: {
      questionId: 'research_1',
      expectedAnswer: 4
    }
  }
];