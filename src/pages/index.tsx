import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1>Welcome to Espinoza Tree Services</h1>
      {!session ? (
        <div>
          <button onClick={() => signIn()}>Log in</button>
        </div>
      ) : (
        <div>
          <p>Signed in as {session.user.email}</p>
          <button onClick={() => signOut()}>Log out</button>
          <div>
            <Link href="/admin/login">Admin Login</Link>
          </div>
          <div>
            <Link href="/customer/login">Customer Login</Link>
          </div>
        </div>
      )}
    </div>
  );
}
