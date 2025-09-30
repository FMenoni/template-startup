"use client";

import { useState } from "react";
import Image from "next/image";
import { IconArrowRight, IconCheck, IconStar } from "@intentui/icons";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { instrumentSans } from "@/lib/primitive";
import { Button } from "@/components/ui/button";
import Footer from "@/components/blocks/footer";
import { getMessages } from "@/lib/translations";
import { useParams } from "next/navigation";

export default function ProductsPage() {
  const { locale } = useParams() as { locale: string }
  const messages = getMessages(locale as 'fr' | 'en');
  useScrollPosition();
  const [activeProduct, setActiveProduct] = useState(0);

  const productsMessages = messages?.products as {
    hero?: {
      badge?: string;
      title?: string;
      description?: string;
      cta1?: string;
      cta2?: string;
    };
    stats?: {
      users?: { label?: string };
      uptime?: { label?: string };
      countries?: { label?: string };
    };
    products?: {
      title?: string;
      description?: string;
      cta?: string;
      learnMore?: string;
    };
    product1?: {
      name?: string;
      description?: string;
      feature1?: string;
      feature2?: string;
      feature3?: string;
    };
    product2?: {
      name?: string;
      description?: string;
      feature1?: string;
      feature2?: string;
      feature3?: string;
    };
    product3?: {
      name?: string;
      description?: string;
      feature1?: string;
      feature2?: string;
      feature3?: string;
    };
    features?: {
      title?: string;
      description?: string;
      feature1?: {
        title?: string;
        description?: string;
      };
      feature2?: {
        title?: string;
        description?: string;
      };
      feature3?: {
        title?: string;
        description?: string;
      };
      feature4?: {
        title?: string;
        description?: string;
      };
    };
    cta?: {
      title?: string;
      description?: string;
      primary?: string;
      secondary?: string;
    };
  };
  
  const products = [
    {
      id: 1,
      name: productsMessages?.product1?.name || "Application Mobile",
      description: productsMessages?.product1?.description || "Une application mobile révolutionnaire qui transforme votre façon de travailler.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop",
      price: "Gratuit",
      features: [
        productsMessages?.product1?.feature1 || "Interface intuitive",
        productsMessages?.product1?.feature2 || "Synchronisation cloud",
        productsMessages?.product1?.feature3 || "Support 24/7"
      ],
      category: "Mobile"
    },
    {
      id: 2,
      name: productsMessages?.product2?.name || "Plateforme Web",
      description: productsMessages?.product2?.description || "Une plateforme web complète pour gérer tous vos projets en un seul endroit.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      price: "29€/mois",
      features: [
        productsMessages?.product2?.feature1 || "Tableau de bord avancé",
        productsMessages?.product2?.feature2 || "API complète",
        productsMessages?.product2?.feature3 || "Analytics détaillées"
      ],
      category: "Web"
    },
    {
      id: 3,
      name: productsMessages?.product3?.name || "Solution Entreprise",
      description: productsMessages?.product3?.description || "Une solution complète pour les grandes entreprises avec toutes les fonctionnalités avancées.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
      price: "Sur devis",
      features: [
        productsMessages?.product3?.feature1 || "Support dédié",
        productsMessages?.product3?.feature2 || "Intégrations personnalisées",
        productsMessages?.product3?.feature3 || "Formation incluse"
      ],
      category: "Entreprise"
    }
  ];

  const features = [
    {
      title: productsMessages?.features?.feature1?.title || "Performance",
      description: productsMessages?.features?.feature1?.description || "Des performances exceptionnelles pour une expérience utilisateur optimale.",
      icon: <IconStar className="text-neutral-700 dark:text-neutral-200 size-6" />
    },
    {
      title: productsMessages?.features?.feature2?.title || "Sécurité",
      description: productsMessages?.features?.feature2?.description || "Protection maximale de vos données avec les dernières technologies de sécurité.",
      icon: <IconStar className="text-neutral-700 dark:text-neutral-200 size-6" />
    },
    {
      title: productsMessages?.features?.feature3?.title || "Évolutivité",
      description: productsMessages?.features?.feature3?.description || "Une architecture évolutive qui s'adapte à la croissance de votre entreprise.",
      icon: <IconStar className="text-neutral-700 dark:text-neutral-200 size-6" />
    },
    {
      title: productsMessages?.features?.feature4?.title || "Support",
      description: productsMessages?.features?.feature4?.description || "Un support client exceptionnel disponible 24h/24, 7j/7.",
      icon: <IconStar className="text-neutral-700 dark:text-neutral-200 size-6" />
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-x-hidden">
      {/* Hero minimaliste */}
      <section className="min-h-[80vh] flex items-center bg-white dark:bg-neutral-950 py-48">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-full px-4 py-2 mb-8">
                <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {productsMessages?.hero?.badge || "Nouveaux produits disponibles"}
                </span>
              </div>
              
              <h1 className={`text-5xl lg:text-6xl text-neutral-950 dark:text-neutral-100 font-bold leading-tight ${instrumentSans.className} mb-8`}>
                {productsMessages?.hero?.title || "Découvrez Nos Solutions"}
              </h1>
              
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl">
                {productsMessages?.hero?.description || "Des produits innovants conçus pour transformer votre entreprise et accélérer votre croissance."}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950 rounded-2xl">
                  {productsMessages?.hero?.cta1 || "Explorer les produits"}
                  <IconArrowRight className="ml-2 size-4" />
                </Button>
                <Button size="lg" intent="outline" className="border-neutral-300 dark:border-neutral-700 rounded-2xl">
                  {productsMessages?.hero?.cta2 || "Voir la démo"}
                </Button>
              </div>

              {/* Bandeau de stats minimal sous le hero */}
              <div className="mt-10 grid grid-cols-3 gap-3 max-w-xl">
                {[
                  { n: "10K+", l: productsMessages?.stats?.users?.label || "Utilisateurs" },
                  { n: "99.9%", l: productsMessages?.stats?.uptime?.label || "Disponibilité" },
                  { n: "50+", l: productsMessages?.stats?.countries?.label || "Pays" },
                ].map((s, i) => (
                  <div key={i} className="rounded-[16px] bg-neutral-50 dark:bg-neutral-900 px-4 py-3 text-center">
                    <div className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{s.n}</div>
                    <div className="text-xs text-neutral-600 dark:text-neutral-400">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="relative bg-white dark:bg-neutral-900 rounded-[32px] p-6">
                <Image
                  src={products[0].image}
                  alt={products[0].name}
                  width={900}
                  height={600}
                  className="w-full h-[360px] object-cover rounded-[24px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Selector en premier */}
      <section className="py-32 bg-white dark:bg-neutral-950">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-neutral-950 dark:text-neutral-100 mb-4">
              {productsMessages?.products?.title || "Nos Produits"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {productsMessages?.products?.description || "Découvrez notre gamme complète de solutions technologiques."}
            </p>
          </div>

          {/* Product Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-full p-2">
              {products.map((product, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProduct(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeProduct === index
                      ? 'bg-white dark:bg-neutral-800 text-neutral-950 dark:text-neutral-100'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-200'
                  }`}
                >
                  {product.name}
                </button>
              ))}
            </div>
          </div>

          {/* Active Product Display */}
          <div className="bg-white dark:bg-neutral-900 rounded-[32px] border p-12 lg:p-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-neutral-100 dark:bg-neutral-800 rounded-[12px] flex items-center justify-center">
                    <IconStar className="text-neutral-700 dark:text-neutral-200 size-5" />
                  </div>
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 px-3 py-1 rounded-full">
                    {products[activeProduct].category}
                  </span>
                </div>
                
                <h3 className="text-3xl font-bold text-neutral-950 dark:text-neutral-100 mb-4">
                  {products[activeProduct].name}
                </h3>
                
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl">
                  {products[activeProduct].description}
                </p>
                
                <div className="flex items-center gap-4 mb-10">
                  <div className="text-3xl font-bold text-neutral-950 dark:text-neutral-100">
                    {products[activeProduct].price}
                  </div>
                  {products[activeProduct].price !== "Sur devis" && (
                    <span className="text-neutral-500 dark:text-neutral-400">/mois</span>
                  )}
                </div>
                
                <div className="space-y-3 mb-10">
                  {products[activeProduct].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center">
                        <IconCheck className="text-neutral-700 dark:text-neutral-200 size-4" />
                      </div>
                      <span className="text-neutral-700 dark:text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <Button size="lg" className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950">
                    {productsMessages?.products?.cta || "Essayer maintenant"}
                  </Button>
                  <Button size="lg" intent="outline">
                    {productsMessages?.products?.learnMore || "En savoir plus"}
                  </Button>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative rounded-[24px] overflow-hidden">
                  <Image
                    src={products[activeProduct].image}
                    alt={products[activeProduct].name}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparatif simple */}
      <section className="pt-48 pb-64 bg-white dark:bg-neutral-950">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-950 dark:text-neutral-100 mb-3">Comparatif rapide</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Choisissez le produit qui correspond à vos besoins.</p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[720px] bg-white dark:bg-neutral-900 rounded-[24px] border border-neutral-200 dark:border-neutral-800">
              <div className="grid grid-cols-4 divide-x divide-neutral-200 dark:divide-neutral-800">
                <div className="p-5"></div>
                {products.map((p, i) => (
                  <div key={i} className="p-5 text-center">
                    <div className="text-sm text-neutral-500 dark:text-neutral-400">{p.category}</div>
                    <div className="text-neutral-900 dark:text-neutral-100 font-semibold">{p.name}</div>
                  </div>
                ))}
              </div>
              {[
                "Interface intuitive",
                "Intégrations",
                "Analytics",
                "Support 24/7",
              ].map((row, r) => (
                <div key={r} className="grid grid-cols-4 border-t border-neutral-200 dark:border-neutral-800">
                  <div className="p-5 text-neutral-700 dark:text-neutral-300">{row}</div>
                  {products.map((p, i) => (
                    <div key={i} className="p-5 text-center">
                      {(() => {
                        const val = [
                          p.features.some(f => f.toLowerCase().includes("interface")),
                          p.features.some(f => f.toLowerCase().includes("intégration") || f.toLowerCase().includes("api")),
                          p.features.some(f => f.toLowerCase().includes("analytic")),
                          p.features.some(f => f.toLowerCase().includes("24/7") || f.toLowerCase().includes("support")),
                        ][r];
                        return val ? (
                          <div className="inline-flex w-6 h-6 items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                            <IconCheck className="size-4 text-neutral-800 dark:text-neutral-100" />
                          </div>
                        ) : (
                          <div className="inline-block w-2 h-2 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                        );
                      })()}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ minimal */}
      <section className="py-28 bg-neutral-50 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-neutral-950 dark:text-neutral-100 mb-3">FAQ</h2>
            <p className="text-neutral-600 dark:text-neutral-400">Questions fréquentes sur nos produits.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { q: "Comment démarrer ?", a: "Créez un compte, choisissez un produit et suivez l'onboarding." },
              { q: "Puis-je annuler ?", a: "Oui, à tout moment depuis votre espace de facturation." },
              { q: "Offrez-vous un support ?", a: "Un support par email est inclus, le support prioritaire est proposé en option." },
              { q: "Les données sont-elles sécurisées ?", a: "Nous appliquons les meilleures pratiques de sécurité et conformité." },
            ].map((item, i) => (
              <details key={i} className="rounded-[16px] border border-neutral-200 dark:border-neutral-800 p-5">
                <summary className="cursor-pointer list-none flex items-center justify-between">
                  <span className="font-medium text-neutral-900 dark:text-neutral-100">{item.q}</span>
                  <span className="text-neutral-500 dark:text-neutral-400">+</span>
                </summary>
                <div className="mt-3 text-neutral-600 dark:text-neutral-400">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Features minimal */}
      <section className="py-32 bg-neutral-50 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-neutral-950 dark:text-neutral-100 mb-4">
              {productsMessages?.features?.title || "Pourquoi Nous Choisir"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {productsMessages?.features?.description || "Des fonctionnalités exceptionnelles qui font la différence."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-[20px] p-8 dark:border-neutral-800"
              >
                <div className="w-14 h-14 bg-neutral-100 dark:bg-neutral-800 rounded-[12px] flex items-center justify-center mb-6 border border-neutral-200 dark:border-neutral-700">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-neutral-950 dark:text-neutral-100 mb-3">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA minimal */}
      <section className="py-40">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 rounded-[32px] p-14 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {productsMessages?.cta?.title || "Prêt à Transformer Votre Entreprise ?"}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8 max-w-2xl mx-auto">
              {productsMessages?.cta?.description || "Rejoignez des milliers d'entreprises qui font confiance à nos solutions."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-neutral-950 dark:bg-neutral-100 text-white dark:text-neutral-950">
                {productsMessages?.cta?.primary || "Commencer gratuitement"}
                <IconArrowRight className="ml-2 size-4" />
              </Button>
              <Button size="lg" intent="outline" className="border-neutral-300 dark:border-neutral-700">
                {productsMessages?.cta?.secondary || "Planifier une démo"}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer messages={messages} />
    </div>
  );
}
