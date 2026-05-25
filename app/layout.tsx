import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://portifolio-programacao-web.vercel.app"),
  title: "Lucas Amorim | Engenharia de Software, CTI e IA",
  description:
    "Portfólio de Lucas dos Santos Amorim Rêgo, engenheiro de software, pesquisador em Cyber Threat Intelligence e mestrando em Engenharia de Software.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Lucas Amorim | Engenharia de Software, CTI e IA",
    description:
      "Projetos, experiência, stack e contatos de Lucas dos Santos Amorim Rêgo.",
    images: ["/images/lucas-profile.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script id="theme-init" strategy="beforeInteractive">
          {`
            try {
              var theme = localStorage.getItem("portfolio-theme");
              document.documentElement.dataset.theme = theme === "light" ? "light" : "dark";
            } catch (_) {
              document.documentElement.dataset.theme = "dark";
            }
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
