import { wait } from '@/utils/wait';

export default async function LeftBottom() {
  await wait(3000);

  return (
    <>
      <div className="border border-amber-500 row-span-1 min-h-[360px] flex items-center justify-center">
        Left Bottom
      </div>
    </>
  );
}
