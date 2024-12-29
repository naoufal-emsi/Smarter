import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to QuizMaster</h1>
      <p className="text-xl text-gray-600 mb-8">Test your knowledge and challenge your friends!</p>
      <div className="space-x-4">
        <Link to="/register">
          <Button>Get Started</Button>
        </Link>
        <Link to="/login">
          <Button variant="outline">I already have an account</Button>
        </Link>
      </div>
    </div>
  );
}