import { cookies } from 'next/headers';

export async function verifyAdmin() {
  const cookieStore = await cookies();
  const token = cookieStore.get('refresh_token')?.value;

  if (!token) return false;

  return token === process.env.SECRET_KEY;
}