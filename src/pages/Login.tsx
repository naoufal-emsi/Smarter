import React from 'react';
import { LoginForm } from '../components/auth/LoginForm';

export default function Login() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Login to Your Account</h1>
      <LoginForm />
    </div>
  );
}