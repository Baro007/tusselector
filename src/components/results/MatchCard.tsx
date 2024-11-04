import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users, Briefcase, Heart } from 'lucide-react';
import { Specialty } from '../../types';

interface MatchCardProps {
  specialty: Specialty;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

export function MatchCard({ specialty, index, isSelected, onClick }: MatchCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={`specialty-card cursor-pointer ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      {index < 3 && (
        <div className="specialty-badge">
          <div className="specialty-badge-text">
            {index === 0 ? 'En İyi Eşleşme' : `${index + 1}. Eşleşme`}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-text mb-4">{specialty.name}</h3>

      <div className="mb-4">
        <div className="progress-bar">
          <motion.div
            className="progress-bar-fill"
            initial={{ width: 0 }}
            animate={{ width: `${specialty.matchPercentage}%` }}
            transition={{ duration: 1, delay: index * 0.2 }}
          />
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-sm text-text-light">Uyum Oranı</span>
          <span className="text-sm font-semibold text-primary">
            %{specialty.matchPercentage}
          </span>
        </div>
      </div>

      <div className="space-y-2 text-sm text-text-light">
        <div className="flex items-center gap-2">
          <Clock size={16} />
          <span>{specialty.workLifeBalance.averageHoursPerWeek} saat/hafta</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={16} />
          <span>{specialty.careerPath.duration.residency} yıl uzmanlık</span>
        </div>
        <div className="flex items-center gap-2">
          <Users size={16} />
          <span>
            {specialty.workEnvironment.patientInteraction === 'extensive'
              ? 'Yoğun hasta teması'
              : specialty.workEnvironment.patientInteraction === 'moderate'
              ? 'Orta düzey hasta teması'
              : 'Minimal hasta teması'}
          </span>
        </div>
      </div>
    </motion.div>
  );
}