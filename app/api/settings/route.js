import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = cookies();
  cookieStore.set('theme', 'dark');
  const theme = cookieStore.get('theme');
  console.log(theme);
  return new Response('Cookie store retrieved successfully');
}
