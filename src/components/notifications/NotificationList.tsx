import React from 'react';
import { formatDate } from '@/lib/utils';

interface Notification {
  id: string;
  type: 'game_invite' | 'session_start' | 'achievement' | 'system';
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
}

export const NotificationList: React.FC<{
  notifications: Notification[];
  onMarkAsRead: (id: string) => void;
}> = ({ notifications, onMarkAsRead }) => {
  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg ${
            notification.read ? 'bg-white' : 'bg-blue-50'
          }`}
        >
          <div className="flex justify-between items-start">
            <div>
              <h4 className="font-semibold">{notification.title}</h4>
              <p className="text-gray-600 mt-1">{notification.message}</p>
              <p className="text-sm text-gray-500 mt-2">
                {formatDate(notification.createdAt)}
              </p>
            </div>
            {!notification.read && (
              <button
                onClick={() => onMarkAsRead(notification.id)}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Mark as read
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};