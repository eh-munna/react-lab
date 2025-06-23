import CustomLink from '@/components/CustomLink';
import { GithubIcon, SquareArrowOutUpRight } from 'lucide-react';

export default function Feature({ children }) {
  return (
    <section className="flex flex-col gap-3 text-center items-center">
      <h3 className="text-2xl text-indigo-400 my-3">{children}</h3>

      <div className="flex items-center gap-2">
        <CustomLink
          className=""
          href="https://github.com/eh-munna/react-lab/tree/8.6"
          target="_blank"
        >
          <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            Visit the <GithubIcon className="underline inline-flex" />
          </span>
        </CustomLink>
        <CustomLink
          className="flex items-center gap-2 underline"
          href="https://nextjs.org/docs/app/api-reference/file-conventions/route"
          target="_blank"
        >
          Documentation{' '}
          <span className="text-blue-500 hover:text-blue-700 transition-colors duration-300">
            <SquareArrowOutUpRight className="inline-flex" />
          </span>
        </CustomLink>
      </div>
    </section>
  );
}
