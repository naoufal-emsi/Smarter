import React from 'react';
import { Button } from '../ui/Button';
import { formatTime } from '@/lib/utils';

interface QuestionCardProps {
  question: {
    text: string;
    options: { text: string; id: string }[];
  };
  timeLeft: number;
  onAnswer: (answerId: string) => void;
  disabled?: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  timeLeft,
  onAnswer,
  disabled
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Question</h3>
        <span className="text-xl font-bold text-blue-600">
          {formatTime(timeLeft)}
        </span>
      </div>
      
      <p className="text-xl mb-8">{question.text}</p>
      
      <div className="grid grid-cols-1 gap-4">
        {question.options.map((option) => (
          <Button
            key={option.id}
            variant="outline"
            className="justify-start h-auto py-4 text-left"
            onClick={() => onAnswer(option.id)}
            disabled={disabled}
          >
            {option.text}
          </Button>
        ))}
      </div>
    </div>
  );
};