import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0/client";
import Image from "next/image";

export default function Home() {
  const { user } = useUser();
  console.log(user);
  return (
    <div>
      <h1>Hello this is the home page</h1>
      {!!user ? (
        <div>
          <Image src={user.picture} alt={user.name} height={50} width={50} />
          <h2>{user.email}</h2>
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      ) : (
        <div>
          <Link href="/api/auth/login">Login</Link>
        </div>
      )}
    </div>
  );
}
