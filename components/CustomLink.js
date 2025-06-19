'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomLink({ path, children, ...props }) {
  const pathname = usePathname();

  const isActive = pathname === path;

  return (
    <>
      <Link
        {...props}
        className={cn('', {
          'text-blue-500 underline': isActive,
        })}
        href={path}
      >
        {children}
      </Link>
    </>
  );
}
