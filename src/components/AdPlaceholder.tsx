interface AdPlaceholderProps {
  size?: 'banner' | 'rectangle' | 'leaderboard';
  label?: string;
}

export default function AdPlaceholder({ size = 'rectangle', label = 'Advertisement' }: AdPlaceholderProps) {
  const sizeClasses = {
    banner: 'h-[90px]',
    rectangle: 'h-[250px]',
    leaderboard: 'h-[90px]',
  };

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-xl p-3 text-center my-8">
      <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">{label}</p>
      <div className={`bg-gray-200 border-2 border-dashed border-gray-300 rounded-lg ${sizeClasses[size]} flex items-center justify-center`}>
        <div className="text-center">
          <p className="text-sm text-gray-500 font-medium">Google AdSense</p>
          <p className="text-xs text-gray-400 mt-1">{size === 'leaderboard' ? '728x90' : size === 'banner' ? '468x60' : '300x250'}</p>
        </div>
      </div>
    </div>
  );
}
