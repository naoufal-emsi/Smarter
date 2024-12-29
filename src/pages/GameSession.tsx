import React from 'react';
import { useParams } from 'react-router-dom';
import { useGame } from '@/hooks/useGame';
import { useAuth } from '@/hooks/useAuth';
import { QuestionCard } from '@/components/game/QuestionCard';
import { Leaderboard } from '@/components/game/Leaderboard';

export default function GameSession() {
  const { id } = useParams();
  const { user } = useAuth();
  const { gameState, players, currentQuestion, timeLeft, submitAnswer } = useGame(id);

  if (!gameState) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <p className="text-xl">Loading game session...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {currentQuestion ? (
            <QuestionCard
              question={currentQuestion}
              timeLeft={timeLeft}
              onAnswer={submitAnswer}
              disabled={gameState.status !== 'active'}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <p className="text-xl text-center">
                Waiting for the next question...
              </p>
            </div>
          )}
        </div>
        
        <div>
          <Leaderboard
            players={players}
            currentUserId={user?.id}
          />
        </div>
      </div>
    </div>
  );
}