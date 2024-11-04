interface SpecialtyCardProps {
  specialty: Specialty;
  rank: number;
}

export function SpecialtyCard({ specialty, rank }: SpecialtyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: rank * 0.2 }}
      className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden"
    >
      {rank <= 3 && (
        <div className="absolute top-0 right-0 w-24 h-24">
          <div className="absolute transform rotate-45 bg-primary text-white text-sm py-1 right-[-35px] top-[32px] w-[170px] text-center">
            {rank === 1 ? 'En İyi Eşleşme' : `${rank}. Eşleşme`}
          </div>
        </div>
      )}

      <h3 className="text-xl font-bold text-gray-900 mb-2">{specialty.name}</h3>
      <MatchPercentage percentage={specialty.matchPercentage} />
      <p className="text-gray-600">{specialty.description}</p>
    </motion.div>
  );
}