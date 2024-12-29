import React from 'react';
import { RegisterForm } from '../components/auth/RegisterForm';

export default function Register() {
  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create Your Account</h1>
      <RegisterForm />
    </div>
  );
}