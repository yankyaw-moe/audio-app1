interface FeatureCardProps {
  title: string;
  subtitle: string;
  bgColor: string;
}

const FeatureCard = ({ title, subtitle, bgColor }: FeatureCardProps) => {
  return (
    <div
      className={`${bgColor} rounded-lg p-4 text-white relative overflow-hidden h-48 flex items-center`}
    >
      <div className="absolute top-4">
        <h2 className="text-5xl font-black">{title}</h2>
        <p className="text-xl opacity-50">{subtitle}</p>
      </div>
      <button className="absolute bottom-2 left-3">
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default FeatureCard;
