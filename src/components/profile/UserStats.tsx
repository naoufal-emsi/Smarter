import React from 'react';
import { Trophy, Target, Clock, Award } from 'lucide-react';

interface Stats {
  gamesPlayed: number;
  winRate: number;
  averageScore: number;
  achievements: number;
}

export const UserStats: React.FC<{ stats: Stats }> = ({ stats }) => {
  const statItems = [
    {
      icon: Trophy,
      label: 'Games Played',
      value: stats.gamesPlayed
    },
    {
      icon: Target,
      label: 'Win Rate',
      value: `${stats.winRate}%`
    },
    {
      icon: Clock,
      label: 'Avg Score',
      value: stats.averageScore
    },
    {
      icon: Award,
      label: 'Achievements',
      value: stats.achievements
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {statItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="flex items-center space-x-3">
              <Icon className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-sm text-gray-600">{item.label}</p>
                <p className="text-xl font-semibold">{item.value}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};