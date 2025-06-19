import { wait } from '@/utils/wait';

export default async function Right() {
  await wait(4000);
  return (
    <>
      <div className="border border-amber-500 row-span-2 min-h-[745px] flex items-center justify-center">
        Right
      </div>
    </>
  );
}
