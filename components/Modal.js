'use client';
import Button from '@/components/Button';
import { useEffect } from 'react';

export default function Modal({ children, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose?.();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black bg-opacity-40" />

      <div
        className="relative bg-indigo-300 p-6 rounded shadow-lg z-10"
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-2xl font-semibold mb-4">Modal Content</h1>
        {children}
        <div className="mt-6">
          <Button
            className="rounded-md bg-blue-600 p-2 text-white"
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
