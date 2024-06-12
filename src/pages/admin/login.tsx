import { useSession } from "next-auth/react";

const LoginPage = () => {
  const { data: session } = useSession();

  return (
    <div>
      {session?.user ? (
        <>
          <p>Welcome, {session.user.name}</p>
          <p>Your email is: {session.user.email}</p>
          <p>Your role is: {session.user.role}</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
};

export default LoginPage;
