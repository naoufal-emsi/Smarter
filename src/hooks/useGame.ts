import { useState, useEffect } from 'react';
import { socket } from '@/lib/socket';
import { useAuth } from './useAuth';

export const useGame = (gameId: string) => {
  const [gameState, setGameState] = useState(null);
  const [players, setPlayers] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (!gameId) return;

    socket.emit('joinGame', { gameId, userId: user?.id });

    socket.on('gameState', (state) => {
      setGameState(state);
    });

    socket.on('playerList', (playerList) => {
      setPlayers(playerList);
    });

    socket.on('question', (question) => {
      setCurrentQuestion(question);
      setTimeLeft(question.timeLimit);
    });

    socket.on('timeUpdate', (time) => {
      setTimeLeft(time);
    });

    return () => {
      socket.emit('leaveGame', { gameId, userId: user?.id });
      socket.off('gameState');
      socket.off('playerList');
      socket.off('question');
      socket.off('timeUpdate');
    };
  }, [gameId, user]);

  const submitAnswer = (answer: string) => {
    socket.emit('submitAnswer', {
      gameId,
      userId: user?.id,
      answer,
      timeSpent: currentQuestion.timeLimit - timeLeft
    });
  };

  return {
    gameState,
    players,
    currentQuestion,
    timeLeft,
    submitAnswer
  };
};