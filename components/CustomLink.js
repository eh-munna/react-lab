'use client';
import cn from '@/utils/cn';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function CustomLink({ href, children, ...props }) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <>
      <Link
        {...props}
        className={cn('', {
          'text-blue-500 underline': isActive,
        })}
        href={href}
      >
        {children}
      </Link>
    </>
  );
}
