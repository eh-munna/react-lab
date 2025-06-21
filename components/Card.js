import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Card({ id, title, subtitle, children }) {
  return (
    <div className="max-w-sm container flex justify-center items-center flex-col mx-auto bg-slate-100 rounded-xl shadow-md overflow-hidden p-6 ring-1 ring-slate-200 hover:ring-slate-300 transition-all duration-300">
      <div className="mb-4">
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-sm text-slate-600 mt-1">{subtitle}</p>}
      </div>
      <div className="text-slate-700 flex flex-col justify-center items-center">
        {children}
      </div>

      <div className="">
        <Link
          href={`/gallery/${id}`}
          className="flex items-center gap-1 mt-6 text-indigo-600"
        >
          {id}
          <span>
            <ArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
}
