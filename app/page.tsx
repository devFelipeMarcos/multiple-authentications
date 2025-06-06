"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function HomePage() {
  const { data: session, status } = useSession();
  const sessao = useSession();
  console.log("Sessão:", sessao);
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/authentication");
    }
  }, [status, router]);

  if (status === "loading") return <div>Carregando...</div>;
  if (!session) return null;

  const { user } = session;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <div className="bg-gray-900 p-8 rounded-xl max-w-md w-full text-center shadow-lg">
        <img
          src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
            user?.name || "U S"
          )}&background=0D8ABC&color=fff&size=128`}
          alt="Avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold mb-2">{user?.name}</h1>
        <p className="text-gray-400">{user?.email}</p>

        <button
          onClick={() => signOut()}
          className="mt-6 bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
