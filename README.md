# 🔐 Auth Starter - Next.js + Auth.js + Prisma

Este projeto serve como **guia base para desenvolvedores** que desejam implementar autenticação com múltiplos providers usando o [Auth.js](https://authjs.dev/) (antigo NextAuth) no framework [Next.js](https://nextjs.org/).

Foi criado para facilitar a criação de novos sistemas com autenticação pronta, integrada com banco de dados via Prisma e suporte a múltiplos provedores OAuth.

## 🚀 Tecnologias utilizadas

- [Next.js 14](https://nextjs.org/)
- [Auth.js (NextAuth)](https://authjs.dev/)
- [Prisma ORM](https://www.prisma.io/)
- [SQLite (ou PostgreSQL/MySQL)] para persistência
- Tailwind CSS (opcional no frontend)
- Providers de autenticação:
  - Google
  - GitHub
  - Discord
  - Twitter (X)
  - Microsoft Entra ID

## 🧠 Objetivo

Este repositório foi desenvolvido para ser um **template inicial reutilizável**, com a configuração de autenticação completa, adaptável para sistemas que exigem login via redes sociais, corporativas ou pessoais.

## ✅ Funcionalidades

- Login social com múltiplos providers
- Integração com banco de dados via Prisma (adapter)
- Sessão persistente
- Redirecionamento automático de login
- Avatar com fallback para iniciais (via ui-avatars)
- Suporte ao Microsoft Entra ID com controle de tenant

## 📁 Estrutura de pastas

```
/app
  /api/auth                # Rotas do Auth.js
  /authentication          # Tela de login
  /dashboard               # Página protegida após login
  layout.tsx
  page.tsx

/lib
  prisma.ts                # Conexão com o banco via Prisma

/auth
  auth.ts                  # Configuração do Auth.js (providers, adapter, callbacks, etc)
```

## 🔧 Como usar

### 1. Clone o projeto

```bash
git clone https://github.com/devFelipeMarcos/multiple-authenticationst
cd multiple-authenticationst
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env` com base no `.env.example`:

```bash
cp .env.example .env
```

Preencha com as credenciais dos providers:

```env
DATABASE_URL="file:./dev.db" # Ou PostgreSQL

NEXTAUTH_SECRET=suasecretsegura

AUTH_GOOGLE_ID=xxx
AUTH_GOOGLE_SECRET=xxx

AUTH_GITHUB_ID=xxx
AUTH_GITHUB_SECRET=xxx

AUTH_DISCORD_ID=xxx
AUTH_DISCORD_SECRET=xxx

AUTH_TWITTER_ID=xxx
AUTH_TWITTER_SECRET=xxx

AUTH_MICROSOFT_ENTRA_ID_ID=xxx
AUTH_MICROSOFT_ENTRA_ID_SECRET=xxx
```

### 4. Configure o banco de dados

```bash
npx prisma migrate dev --name init
```

### 5. Rode o projeto

```bash
npm run dev
```

## 🔐 Telas protegidas

As páginas internas (como `/dashboard`) são protegidas por `useSession`. Se o usuário não estiver autenticado, será redirecionado para `/authentication`.

## 📷 Fallback de avatar

Caso o provider não forneça uma imagem de perfil (ex: Microsoft), o sistema gera automaticamente um avatar com iniciais do nome:

```tsx
<img
  src={
    user?.image ||
    `https://ui-avatars.com/api/?name=\${encodeURIComponent(user?.name || "U S")}&background=0D8ABC&color=fff&size=128`
  }
/>
```

## ✍️ Autor

Desenvolvido por **Felipe Marcos** — [LinkedIn](https://www.linkedin.com/in/felipemarcosbits/)  
Profissional com +10 anos de experiência em tecnologia e desenvolvimento de sistemas.

## 📄 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar, modificar e contribuir!
