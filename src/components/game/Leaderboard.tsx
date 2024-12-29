import React from 'react';

interface Player {
  id: string;
  name: string;
  score: number;
  rank: number;
}

interface LeaderboardProps {
  players: Player[];
  currentUserId: string;
}

export const Leaderboard: React.FC<LeaderboardProps> = ({ players, currentUserId }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Leaderboard</h3>
      
      <div className="space-y-2">
        {players.map((player) => (
          <div
            key={player.id}
            className={cn(
              "flex items-center justify-between p-3 rounded-md",
              player.id === currentUserId ? "bg-blue-50" : "hover:bg-gray-50"
            )}
          >
            <div className="flex items-center space-x-3">
              <span className="font-semibold w-8">{player.rank}</span>
              <span>{player.name}</span>
            </div>
            <span className="font-semibold">{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};