import React from 'react';
import { motion } from 'framer-motion';
import { Download, Share2, RefreshCcw, Loader2 } from 'lucide-react';

interface ActionButtonsProps {
  onDownload: () => Promise<void>;
  onShare: () => Promise<void>;
  onRestart: () => void;
  downloadingPdf: boolean;
  sharing: boolean;
}

export function ActionButtons({
  onDownload,
  onShare,
  onRestart,
  downloadingPdf,
  sharing,
}: ActionButtonsProps) {
  return (
    <div className="flex justify-center gap-4">
      <motion.button
        onClick={onDownload}
        disabled={downloadingPdf}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-primary"
      >
        {downloadingPdf ? (
          <Loader2 className="animate-spin mr-2" size={20} />
        ) : (
          <Download size={20} className="mr-2" />
        )}
        Raporu İndir
      </motion.button>

      <motion.button
        onClick={onShare}
        disabled={sharing}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-outline"
      >
        {sharing ? (
          <Loader2 className="animate-spin mr-2" size={20} />
        ) : (
          <Share2 size={20} className="mr-2" />
        )}
        Sonuçları Paylaş
      </motion.button>

      <motion.button
        onClick={onRestart}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="btn btn-outline"
      >
        <RefreshCcw size={20} className="mr-2" />
        Yeniden Başla
      </motion.button>
    </div>
  );
}