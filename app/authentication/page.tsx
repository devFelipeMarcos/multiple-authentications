"use client";

import { signIn } from "next-auth/react";
import {
  FaGithub,
  FaGoogle,
  FaMicrosoft,
  FaDiscord,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa6";

export default function LoginPage() {
  const handleLogin = async (provider: string) => {
    await signIn(provider, { redirectTo: "/" });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 px-4">
      <div className="w-full max-w-md bg-gray-900 text-white rounded-xl shadow-lg p-8">
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-bold">Bem-vindo</h1>
          <p className="text-gray-400 mt-2">Faça login para continuar</p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleLogin("github")}
            className="w-full flex items-center justify-center gap-2 bg-white text-gray-900 font-medium px-4 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            <FaGithub className="text-xl" />
            Entrar com GitHub
          </button>

          <button
            onClick={() => handleLogin("google")}
            className="w-full flex items-center justify-center gap-2 bg-red-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-red-600 transition"
          >
            <FaGoogle className="text-xl" />
            Entrar com Google
          </button>

          <button
            onClick={() => handleLogin("microsoft-entra-id")}
            className="w-full flex items-center justify-center gap-2 bg-blue-700 text-white font-medium px-4 py-3 rounded-lg hover:bg-blue-800 transition"
          >
            <FaMicrosoft className="text-xl" />
            Entrar com Microsoft
          </button>

          <button
            onClick={() => handleLogin("discord")}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 text-white font-medium px-4 py-3 rounded-lg hover:bg-indigo-700 transition"
          >
            <FaDiscord className="text-xl" />
            Entrar com Discord
          </button>

          <button
            onClick={() => handleLogin("twitter")}
            className="w-full flex items-center justify-center gap-2 bg-sky-500 text-white font-medium px-4 py-3 rounded-lg hover:bg-sky-600 transition"
          >
            <FaTwitter className="text-xl" />
            Entrar com Twitter
          </button>
        </div>

        <p className="text-sm text-gray-500 text-center mt-6">
          Não compartilhamos nenhuma informação sem sua permissão.
        </p>
      </div>
    </div>
  );
}
