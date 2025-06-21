'use client';
import Button from '@/components/Button';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef } from 'react';

export default function Modal({ children }) {
  const router = useRouter();
  const overlay = useRef(null);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  const onClose = useCallback(
    (e) => {
      if (e.target === overlay.current) {
        onDismiss();
      }
    },
    [onDismiss]
  );

  const handleEsc = useCallback(
    (e) => {
      if (e.key === 'Escape') onDismiss();
    },
    [onDismiss]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [handleEsc]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={onClose}
        ref={overlay}
        className="fixed inset-0 bg-black/90"
      />

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
            onClick={onDismiss}
          >
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}
