import React from 'react';
import { motion } from 'framer-motion';
import {
  GraduationCap,
  Building,
  BrainCircuit,
  Brain,
  BarChart3,
  Stethoscope,
} from 'lucide-react';
import { Specialty } from '../../types';

interface SpecialtyDetailsProps {
  specialty: Specialty;
}

export function SpecialtyDetails({ specialty }: SpecialtyDetailsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="card p-6 mb-8"
    >
      <h2 className="text-2xl font-bold text-text mb-6 flex items-center gap-3">
        <Stethoscope className="text-primary" />
        {specialty.name}
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
            <Brain className="text-primary" size={20} />
            Uzmanlık Hakkında
          </h3>
          <p className="text-text-light mb-4">{specialty.description}</p>

          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-text mb-2">Çalışma Ortamı</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <Building className="text-primary mb-2" size={20} />
                  <p className="text-sm text-text-light">
                    {specialty.workEnvironment.teamSize === 'large'
                      ? 'Büyük ekip'
                      : specialty.workEnvironment.teamSize === 'medium'
                      ? 'Orta boy ekip'
                      : 'Küçük ekip'}
                  </p>
                </div>
                <div className="card p-4">
                  <BrainCircuit className="text-primary mb-2" size={20} />
                  <p className="text-sm text-text-light">
                    {specialty.workEnvironment.technologyUse === 'high'
                      ? 'Yüksek teknoloji'
                      : specialty.workEnvironment.technologyUse === 'moderate'
                      ? 'Orta düzey teknoloji'
                      : 'Düşük teknoloji'}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium text-text mb-2">Kariyer Yolu</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="card p-4">
                  <GraduationCap className="text-primary mb-2" size={20} />
                  <p className="text-sm text-text-light">
                    {specialty.careerPath.duration.residency} yıl uzmanlık eğitimi
                  </p>
                </div>
                <div className="card p-4">
                  <BarChart3 className="text-primary mb-2" size={20} />
                  <p className="text-sm text-text-light">
                    {specialty.financialAspects.privatePracticeOpportunity
                      ? 'Özel pratik imkanı var'
                      : 'Özel pratik imkanı kısıtlı'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-text mb-4 flex items-center gap-2">
            <Brain className="text-primary" size={20} />
            Gerekli Özellikler
          </h3>
          <div className="space-y-4">
            {Object.entries(specialty.traits).map(([key, trait]) => (
              <div key={key} className="card p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-text">
                    {trait.description}
                  </span>
                  <span
                    className={`text-sm ${
                      trait.importance === 'critical'
                        ? 'text-error'
                        : trait.importance === 'major'
                        ? 'text-warning'
                        : 'text-primary'
                    }`}
                  >
                    {trait.importance === 'critical'
                      ? 'Kritik'
                      : trait.importance === 'major'
                      ? 'Önemli'
                      : 'Destekleyici'}
                  </span>
                </div>
                <div className="progress-bar">
                  <div
                    className="progress-bar-fill"
                    style={{ width: `${trait.weight * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}