import { DefaultSession, DefaultUser } from "next-auth";

declare module "next-auth" {
  interface User {
    id: string;
    name: string;
    email: string;
    role: string; // Add role to the User type
  }

  interface Session {
    user: {
      id: string;
      name: string;
      email: string;
      role: string; // Add role to the Session type
    } & DefaultSession["user"];
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string; // Add role to the JWT type
  }
}
