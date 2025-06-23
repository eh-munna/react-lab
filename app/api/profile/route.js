import { headers } from 'next/headers';

export async function GET() {
  const headerList = await headers();

  const referer = headerList.get('referer');

  return new Response(
    JSON.stringify({
      message: 'Headers retrieved successfully',
      data: { referer },
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}
