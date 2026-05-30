import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { BackToTop } from "@/components/ui/back-to-top";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <p className="mt-4 text-muted-foreground">Page not found.</p>
        <a href="/" className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-6 py-2 text-sm font-medium text-white">Go home</a>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Something went wrong</h1>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-6 inline-flex rounded-full bg-[var(--brand)] px-6 py-2 text-sm font-medium text-white"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "author", content: "Akshar Health & Wellness Clinic" },
      { property: "og:site_name", content: "Akshar Health & Wellness Clinic" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      { name: "twitter:card", content: "summary_large_image" },
      { title: "Lovable App" },
      { property: "og:title", content: "Lovable App" },
      { name: "twitter:title", content: "Lovable App" },
      { name: "description", content: "MediCare Health Hub is a premium medical clinic website showcasing expert care and services." },
      { property: "og:description", content: "MediCare Health Hub is a premium medical clinic website showcasing expert care and services." },
      { name: "twitter:description", content: "MediCare Health Hub is a premium medical clinic website showcasing expert care and services." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8310daa-e79f-4317-bded-a74127a31733/id-preview-df381160--82f813c4-8721-4822-a563-f295114c99f1.lovable.app-1780057323812.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/e8310daa-e79f-4317-bded-a74127a31733/id-preview-df381160--82f813c4-8721-4822-a563-f295114c99f1.lovable.app-1780057323812.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "MedicalClinic",
          name: "Akshar Health & Wellness Clinic",
          telephone: "+91-98765-43210",
          address: {
            "@type": "PostalAddress",
            streetAddress: "123 Medical Street, Health District",
            addressLocality: "Mumbai",
            postalCode: "400001",
            addressCountry: "IN",
          },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollProgress />
      <Outlet />
      <FloatingWhatsApp />
      <BackToTop />
    </QueryClientProvider>
  );
}
