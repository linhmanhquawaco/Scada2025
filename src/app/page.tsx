import { redirect } from 'next/navigation';

export default async function Page() {
  // return redirect('/dashboard/overview');
  return redirect('/map');

  // if (!userId) {
  //   return redirect('/auth/sign-in');
  // } else {
  //   redirect('/dashboard/overview');
  // }
}
