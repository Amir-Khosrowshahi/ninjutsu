import { FiArrowUpRight, FiArrowDownRight } from "react-icons/fi";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
  borderColor: string;
  trendIcon: React.ReactNode;
  description: string;
  isCurrency?: boolean;
}

export default function StatCard({
  title,
  value,
  change,
  icon,
  color,
  bgColor,
  borderColor,
  description,
  isCurrency = false,
}: StatCardProps) {
  const isPositive = change.startsWith("+");

  return (
    <div
      className={`bg-gradient-to-br from-gray-900/50 to-gray-900/30 backdrop-blur-xl rounded-2xl p-6 border ${borderColor} shadow-xl hover-lift transition-all duration-300 hover:shadow-2xl`}
    >
      <div className='flex justify-between items-start mb-6'>
        <div>
          <h3 className='text-gray-400 text-sm mb-2'>{title}</h3>
          <p className='text-3xl font-bold text-white'>
            {isCurrency ? `${value} تومان` : value}
          </p>
          <p className='text-xs text-gray-500 mt-2'>{description}</p>
        </div>
        <div className={`p-3 rounded-xl ${bgColor} border ${borderColor}`}>
          <div
            className={`text-white ${color.replace("from-", "text-").split(" ")[0]}`}
          >
            {icon}
          </div>
        </div>
      </div>

      <div className='flex items-center justify-between pt-4 border-t border-gray-800/50'>
        <div className='flex items-center'>
          {isPositive ? (
            <FiArrowUpRight className='w-4 h-4 text-green-500 ml-1' />
          ) : (
            <FiArrowDownRight className='w-4 h-4 text-red-500 ml-1' />
          )}
          <span
            className={`text-sm font-medium ${isPositive ? "text-green-400" : "text-red-400"}`}
          >
            {change}
          </span>
        </div>
        <span className='text-gray-500 text-sm'>نسبت به ماه گذشته</span>
      </div>
    </div>
  );
}
