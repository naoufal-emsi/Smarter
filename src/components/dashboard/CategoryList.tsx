import React from 'react';
import { Book, Code, Globe, Brain, Music, Palette } from 'lucide-react';

const categories = [
  { id: 1, name: 'Literature', icon: Book },
  { id: 2, name: 'Programming', icon: Code },
  { id: 3, name: 'Geography', icon: Globe },
  { id: 4, name: 'Science', icon: Brain },
  { id: 5, name: 'Music', icon: Music },
  { id: 6, name: 'Art', icon: Palette },
];

export const CategoryList = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
      {categories.map((category) => {
        const Icon = category.icon;
        return (
          <button
            key={category.id}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
          >
            <Icon className="h-8 w-8 mb-2 text-blue-600" />
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        );
      })}
    </div>
  );
};