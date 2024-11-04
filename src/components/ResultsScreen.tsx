import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useForm } from '../context/FormContext';
import { calculateSpecialtyMatches } from '../utils/matching';
import { Award, Loader2, AlertCircle } from 'lucide-react';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Specialty } from '../types';
import { MatchCard } from './results/MatchCard';
import { SpecialtyDetails } from './results/SpecialtyDetails';
import { ActionButtons } from './results/ActionButtons';

export default function ResultsScreen() {
  const navigate = useNavigate();
  const { state } = useForm();
  const [matches, setMatches] = useState<Specialty[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [downloadingPdf, setDownloadingPdf] = useState(false);
  const [sharing, setSharing] = useState(false);

  useEffect(() => {
    if (!state.responses || Object.keys(state.responses).length === 0) {
      navigate('/');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const calculatedMatches = calculateSpecialtyMatches(state);
      
      if (!calculatedMatches || calculatedMatches.length === 0) {
        throw new Error('No matches could be calculated');
      }

      setMatches(calculatedMatches);
      if (calculatedMatches.length > 0) {
        setSelectedSpecialty(calculatedMatches[0].id);
      }
    } catch (err) {
      console.error('Error calculating matches:', err);
      setError('Sonuçlar hesaplanırken bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  }, [state, navigate]);

  const handleDownload = async () => {
    try {
      setDownloadingPdf(true);
      const content = document.getElementById('results-content');
      if (!content) return;

      const canvas = await html2canvas(content);
      const pdf = new jsPDF();
      const imgData = canvas.toDataURL('image/png');
      pdf.addImage(imgData, 'PNG', 10, 10, 190, 0);
      pdf.save(`uzmanlik-onerileri-${state.name || 'sonuclar'}.pdf`);
    } catch (err) {
      console.error('PDF oluşturma hatası:', err);
    } finally {
      setDownloadingPdf(false);
    }
  };

  const handleShare = async () => {
    try {
      setSharing(true);
      const shareText = `Tıpta Uzmanlık Alanı Önerilerim:\n\n${matches
        .slice(0, 3)
        .map((s, i) => `${i + 1}. ${s.name} (%${s.matchPercentage} uyum)`)
        .join('\n')}`;

      if (navigator.share) {
        await navigator.share({
          title: 'Tıpta Uzmanlık Alanı Önerileri',
          text: shareText,
        });
      } else {
        await navigator.clipboard.writeText(shareText);
        alert('Sonuçlar panoya kopyalandı!');
      }
    } catch (err) {
      console.error('Paylaşım hatası:', err);
    } finally {
      setSharing(false);
    }
  };

  const handleRestart = () => {
    if (window.confirm('Testi yeniden başlatmak istediğinizden emin misiniz?')) {
      navigate('/');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
          <p className="text-text-light">Sonuçlarınız hesaplanıyor...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-12 h-12 text-error mx-auto mb-4" />
          <p className="text-error mb-4">{error}</p>
          <button onClick={handleRestart} className="btn btn-primary">
            Tekrar Dene
          </button>
        </div>
      </div>
    );
  }

  const displayedMatches = showAllSpecialties ? matches : matches.slice(0, 3);
  const selectedSpecialtyDetails = matches.find(s => s.id === selectedSpecialty);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-background to-gray-100 py-12 px-6"
    >
      <div className="max-w-6xl mx-auto" id="results-content">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4"
          >
            <Award size={64} className="text-primary" />
          </motion.div>
          <h1 className="text-4xl font-bold text-text mb-4">
            {state.name ? `${state.name}, ` : ''}Sonuçlarınız Hazır!
          </h1>
          <p className="text-xl text-text-light">
            Yanıtlarınıza göre size en uygun uzmanlık alanları
          </p>
        </div>

        {/* Match Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {displayedMatches.map((specialty, index) => (
            <MatchCard
              key={specialty.id}
              specialty={specialty}
              index={index}
              isSelected={selectedSpecialty === specialty.id}
              onClick={() => setSelectedSpecialty(specialty.id)}
            />
          ))}
        </div>

        {/* Show More/Less Button */}
        <div className="text-center mb-8">
          <button
            onClick={() => setShowAllSpecialties(!showAllSpecialties)}
            className="btn btn-outline"
          >
            {showAllSpecialties ? 'Daha Az Göster' : 'Tüm Uzmanlıkları Göster'}
          </button>
        </div>

        {/* Selected Specialty Details */}
        {selectedSpecialtyDetails && (
          <SpecialtyDetails specialty={selectedSpecialtyDetails} />
        )}

        {/* Action Buttons */}
        <ActionButtons
          onDownload={handleDownload}
          onShare={handleShare}
          onRestart={handleRestart}
          downloadingPdf={downloadingPdf}
          sharing={sharing}
        />
      </div>
    </motion.div>
  );
}