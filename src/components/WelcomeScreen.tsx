import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import {
  Stethoscope,
  ArrowRight,
  BookOpen,
  Award,
  Users,
  Brain,
  Target,
  Clock,
  CheckCircle,
  Sparkles,
  GraduationCap,
} from 'lucide-react';

export default function WelcomeScreen() {
  const navigate = useNavigate();
  const { dispatch } = useForm();

  const handleStart = () => {
    dispatch({ type: 'RESET_FORM' });
    navigate('/questions');
  };

  const features = [
    {
      icon: <BookOpen className="w-6 h-6 text-primary" />,
      title: 'Kapsamlı Analiz',
      description: '40+ uzmanlık alanı detaylı olarak değerlendirilir',
    },
    {
      icon: <Brain className="w-6 h-6 text-primary" />,
      title: 'Kişilik Uyumu',
      description: 'MBTI ve kişilik özelliklerinize göre eşleştirme',
    },
    {
      icon: <Target className="w-6 h-6 text-primary" />,
      title: 'Doğru Yönlendirme',
      description: 'Yetenek ve ilgi alanlarınıza uygun branşlar',
    },
  ];

  const benefits = [
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: 'Kişiselleştirilmiş Sonuçlar',
      description: 'Size özel detaylı analiz raporu',
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Uzman Görüşleri',
      description: 'Deneyimli hekimlerin tavsiyeleri',
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: 'Hızlı ve Etkili',
      description: '15 dakikada sonuçlarınızı alın',
    },
  ];

  const highlights = [
    {
      icon: <CheckCircle className="w-5 h-5 text-primary" />,
      text: 'Bilimsel metodlarla hazırlanmış sorular',
    },
    {
      icon: <Sparkles className="w-5 h-5 text-primary" />,
      text: 'Güncel uzmanlık kriterleri',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-primary" />,
      text: 'Akademik araştırmalara dayalı',
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-br from-background to-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block p-4 bg-primary/10 rounded-full mb-8"
          >
            <Stethoscope size={48} className="text-primary" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent 
                     bg-gradient-to-r from-primary to-primary-dark"
          >
            Tıpta Uzmanlık Alanı Bulucu
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-text-light mb-6 max-w-2xl mx-auto"
          >
            Kapsamlı değerlendirme sistemimiz ile size en uygun tıp uzmanlık
            alanını keşfedin. Kişilik özellikleriniz ve tercihlerinize göre
            özelleştirilmiş öneriler alın.
          </motion.p>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm"
              >
                {highlight.icon}
                <span className="text-sm text-text-light">
                  {highlight.text}
                </span>
              </div>
            ))}
          </motion.div>

          <motion.button
            onClick={handleStart}
            className="btn btn-primary group text-lg px-8 py-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <span className="relative z-10">Yolculuğa Başla</span>
            <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
          </motion.button>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="grid md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-text-light">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">
            Neden Bizi Seçmelisiniz?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-text-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}