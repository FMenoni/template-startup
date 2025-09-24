import Link from "next/link";

export default function Footer({ messages }: { messages: any }) {
  return (
    <footer className="py-20 dark:bg-neutral-900">
      <div className="max-w-[1440px] mx-auto w-full px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">{messages?.footer?.title || "Template Startup"}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-md">
              {messages?.footer?.description || "Une collection de composants modernes pour votre startup ou projet personnel."}
            </p>
          </div>

          <div className="text-end">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">{messages?.footer?.product?.title || "Produit"}</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.features || "Fonctionnalités"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.pricing || "Tarifs & Abonnements"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.documentation || "Documentation"}</Link></li>
            </ul>
          </div>

          <div className="text-end">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">{messages?.footer?.support?.title || "Support"}</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.help || "Aide"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.contact || "Contact"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.product?.status || "Statut"}</Link></li>
            </ul>
          </div>

          <div className="text-end">
            <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-4">{messages?.footer?.social?.title || "Social"}</h3>
            <ul className="space-y-2 text-sm text-neutral-500 dark:text-neutral-400">
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.social?.facebook || "Facebook"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.social?.instagram || "Instagram"}</Link></li>
              <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.social?.linkedin || "LinkedIn"}</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 dark:border-neutral-800 mt-8 pt-8 text-center text-sm text-neutral-500 dark:text-neutral-400">
          <p>{messages?.footer?.copyright || "© 2024 Template Startup. Tous droits réservés."}</p>
          <div className="mt-16">
            <img
              src="/images/giant-text.png"
              alt="Shadcn Blocks"
              className="w-full h-auto max-w-screen transition-opacity dark:hidden"
            />
            <img
              src="/images/giant-text-dark.png"
              alt="Shadcn Blocks"
              className="w-full h-auto max-w-screen transition-opacity hidden dark:block"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}