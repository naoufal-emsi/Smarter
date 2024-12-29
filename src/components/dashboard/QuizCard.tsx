import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users } from 'lucide-react';

interface QuizCardProps {
  quiz: {
    id: string;
    title: string;
    category: string;
    duration: number;
    playerCount: number;
    thumbnail?: string;
  };
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz }) => {
  return (
    <Link to={`/quiz/${quiz.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        {quiz.thumbnail && (
          <img
            src={quiz.thumbnail}
            alt={quiz.title}
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{quiz.title}</h3>
          <p className="text-sm text-gray-600 mb-4">{quiz.category}</p>
          
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{quiz.duration} mins</span>
            </div>
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-1" />
              <span>{quiz.playerCount} players</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};