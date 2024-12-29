import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export default function AdminPanel() {
  const { user } = useAuth();

  if (!user || user.role !== 'admin') {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
      {/* Admin components will be added here */}
    </div>
  );
}