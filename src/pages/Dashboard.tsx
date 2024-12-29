import React from 'react';
import { CategoryList } from '../components/dashboard/CategoryList';
import { QuizCard } from '../components/dashboard/QuizCard';

export default function Dashboard() {
  const recentQuizzes = [
    {
      id: '1',
      title: 'Programming Basics',
      category: 'Programming',
      duration: 30,
      playerCount: 150,
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800&h=600'
    },
    // Add more quizzes as needed
  ];

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-2xl font-bold mb-4">Categories</h2>
        <CategoryList />
      </section>
      
      <section>
        <h2 className="text-2xl font-bold mb-4">Recent Quizzes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentQuizzes.map(quiz => (
            <QuizCard key={quiz.id} quiz={quiz} />
          ))}
        </div>
      </section>
    </div>
  );
}