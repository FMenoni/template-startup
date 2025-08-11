"use client";

import Navigation from "@/components/blocks/navigation";
import Language from "@/components/blocks/language";
import Theme from "@/components/blocks/theme";
import Image from "next/image";
import { Instrument_Sans } from "next/font/google";
import { useRef, useState } from "react";
import { IconArrowDown, IconArrowLeft, IconArrowRight, IconCheck, IconColorPalette, IconCube, IconCursorClick, IconDevices, IconGallery, IconIceCream } from "@intentui/icons";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollPosition } from "@/lib/useScrollPosition";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

interface HomeProps {
  messages?: any
}

export default function Home({ messages }: HomeProps) {
  const [imageHover, setImageHover] = useState(1);
  useScrollPosition(); 

  const specs = [
    {
      title: messages?.specs?.specs1title || "Color Palette",
      description: messages?.specs?.specs1description || "This is the specs page in English.",
      icon: <IconColorPalette className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs2title || "Typography",
      description: messages?.specs?.specs2description || "This is the specs page in English.",
      icon: <IconCube className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs3title || "Layout",
      description: messages?.specs?.specs3description || "This is the specs page in English.",
      icon: <IconDevices className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs4title || "Components",
      description: messages?.specs?.specs4description || "This is the specs page in English.",
      icon: <IconCube className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs5title || "Icons",
      description: messages?.specs?.specs5description || "This is the specs page in English.",
      icon: <IconIceCream className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs6title || "Animations",
      description: messages?.specs?.specs6description || "This is the specs page in English.",
      icon: <IconCursorClick className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
    {
      title: messages?.specs?.specs7title || "Design System",
      description: messages?.specs?.specs7description || "This is the specs page in English.",
      icon: <IconGallery className="text-neutral-950 dark:text-neutral-100 size-8" />
    },
  ]

  const prices = [
    {
      title: messages?.prices?.price1title || "Price 1",
      description: messages?.prices?.price1description || "Price 1",
      price: 20,
      button: messages?.prices?.price1button || "Get Started",
      features: messages?.prices?.price1features || ["Feature 1", "Feature 2", "Feature 3"]
    },
    {
      title: messages?.prices?.price2title || "Price 2",
      description: messages?.prices?.price2description || "Price 2",
      price: 100,
      button: messages?.prices?.price2button || "Get a free trial",
      features: messages?.prices?.price2features || ["Feature 1", "Feature 2", "Feature 3"]
    }
  ]

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollByAmount = 400
  const handleScrollLeft = () => scrollRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" })
  const handleScrollRight = () => scrollRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" })

  return (
    <>
      <Navigation />
      <Language />
      <Theme />

      <div className="bg-white dark:bg-neutral-950 overflow-x-hidden">
        <section className="h-screen flex items-center bg-white dark:bg-neutral-950" id="hero">
          <div className="max-w-[1440px] mx-auto w-full px-8" id="hero-content">
            <div className="relative w-full flex justify-between items-end">
              <h1 className={`text-[4rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none ${instrumentSans.className}`}>
                <span>{messages?.hero?.title?.line1 || "Black,"}</span>
                <span>{messages?.hero?.title?.line2 || "Modern,"}</span>
                <span>{messages?.hero?.title?.line3 || "Simple."}</span>
              </h1>

              <div className="flex gap-12 items-center">
                <div className="relative group">
                  <Image
                    src="/images/hero1.jpg"
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className={`rounded-[32px] object-cover h-[500px] transition-all duration-300 cursor-pointer ${imageHover === 1 || imageHover === 0 ? "w-[500px]" : "w-[200px]"}`}
                    onMouseEnter={() => setImageHover(1)}
                    onMouseLeave={() => setImageHover(0)}
                  />
                  <div className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent rounded-bl-[32px] rounded-br-[32px] transition-opacity duration-300 flex items-end p-6 pointer-events-none ${imageHover === 1 || imageHover === 0 ? "opacity-100" : "opacity-0"}`}>
                    <h3 className="text-black font-medium text-xl">{messages?.hero?.images?.image1 || "Design Urbain"}</h3>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/images/hero2.jpg"
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className={`rounded-[32px] object-cover w-[200px] h-[500px] transition-all duration-300 cursor-pointer ${imageHover === 2 ? "w-[500px]" : "w-[200px]"}`}
                    onMouseEnter={() => setImageHover(2)}
                    onMouseLeave={() => setImageHover(0)}
                  />
                  <div className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent rounded-bl-[32px] rounded-br-[32px] transition-opacity duration-300 flex items-end p-6 pointer-events-none ${imageHover === 2 ? "opacity-100" : "opacity-0"}`}>
                    <h3 className="text-black font-medium text-xl">{messages?.hero?.images?.image2 || "Architecture Moderne"}</h3>
                  </div>
                </div>
                <div className="relative group">
                  <Image
                    src="/images/hero3.jpg"
                    alt="Hero"
                    width={1000}
                    height={1000}
                    className={`rounded-[32px] object-cover w-[200px] h-[500px] transition-all duration-300 cursor-pointer ${imageHover === 3 ? "w-[500px]" : "w-[200px]"}`}
                    onMouseEnter={() => setImageHover(3)}
                    onMouseLeave={() => setImageHover(0)}
                  />
                  <div className={`absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white/80 to-transparent rounded-bl-[32px] rounded-br-[32px] transition-opacity duration-300 flex items-end p-6 pointer-events-none ${imageHover === 3 ? "opacity-100" : "opacity-0"}`}>
                    <h3 className="text-black font-medium text-xl">{messages?.hero?.images?.image3 || "Nature Sauvage"}</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
              <IconArrowDown className="text-neutral-400 dark:text-neutral-100 size-5" />
            </div>
          </div>
        </section>

        <section id="iphone" className="relative bg-white dark:bg-neutral-950 py-32">
          <img
            src="/images/iphone.png"
            alt="iPhone"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[600px] rounded-r-[70px] object-cover"
          />
          <div className="max-w-screen mx-auto w-full min-h-[80vh] px-8 -mr-[450px] flex items-center">
            <div className="ml-[640px] flex flex-col gap-4">
              <h2 className="text-5xl font-bold dark:text-neutral-100">{messages?.iphone?.title || "iPhone"}</h2>
              <p className="text-neutral-500 dark:text-neutral-400 max-w-[520px]">{messages?.iphone?.description || "iPhone"}</p>
            </div>
          </div>
        </section>

        <section id="specs" className="py-32 mt-20 bg-neutral-100 dark:bg-neutral-925">
          <div className="max-w-[1440px] mx-auto w-full px-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold dark:text-neutral-100">{messages?.specs?.title || "Specs"}</h2>
            </div>

            <div ref={scrollRef} className="mt-16 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex gap-6 w-max">
                {specs.map((spec, index) => (
                  <div key={index} className="shrink-0 w-[320px] bg-white dark:bg-neutral-900 rounded-[28px] p-8">
                    <div className="items-center gap-2">
                      {spec.icon}
                      <p className="text-lg font-bold text-neutral-700 dark:text-neutral-200 mt-4">{spec.title}</p>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-2">{spec.description}</p>
                    </div>

                    <div className="flex items-end justify-end gap-2 mt-8">
                      <IconArrowRight className="text-neutral-800 dark:text-neutral-100 size-10 rounded-full bg-neutral-100 dark:bg-neutral-800 p-2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <div className="flex-1" />
              <button onClick={handleScrollLeft} className="size-10 rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-100 flex items-center justify-center cursor-pointer">
                <IconArrowLeft className="size-5" />
              </button>
              <button onClick={handleScrollRight} className="size-10 rounded-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 flex items-center justify-center cursor-pointer">
                <IconArrowRight className="size-5" />
              </button>
            </div>
          </div>
        </section>

        <section id="prices" className="py-48">
          <div className="max-w-[1440px] mx-auto w-full px-8">
            <div className="flex flex-col gap-4">
              <h2 className="text-4xl font-bold dark:text-neutral-100 text-end">{messages?.prices?.title || "Prices"}</h2>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-16">
              {prices.map((price, index) => ( 
                <div key={index} className={`bg-neutral-50 dark:bg-neutral-900 rounded-[32px] p-12 ${index === 1 ? "col-span-2" : "bg-white dark:bg-neutral-925 border border-neutral-100 dark:border-neutral-850"}`}>
                  {index === 1 ? (
                    <div className="grid grid-cols-2 gap-8">
                      <div className="flex flex-col h-full">
                        <div>
                          <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">{price.title}</h3>
                          <p className="text-neutral-500 dark:text-neutral-400 mt-2">{price.description}</p>

                          <div className="mt-8 leading-none">
                            <h4 className="text-base font-bold text-neutral-800 dark:text-neutral-200">Starting at</h4>
                            <div className="flex items-end gap-2">
                              <p className="text-neutral-900 dark:text-neutral-400 text-4xl font-semibold">${price.price}</p>
                              <p className="text-neutral-500 dark:text-neutral-400 text-base">/ month</p>
                            </div>
                            <Button size="lg" className="mt-6 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200" isCircle>{price.button}</Button>
                          </div>

                          <div className="mt-8">
                            <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Features</h4>
                            <ol className="list-none list-inside text-neutral-500 dark:text-neutral-400 mt-2">
                              {price.features.map((feature: string, index: number) => (
                                <li key={index} className="flex items-center gap-2 my-1"><IconCheck className="text-neutral-500 dark:text-neutral-400 size-4" /> {feature}</li>
                              ))} 
                            </ol>
                          </div>
                        </div>

                        <Link href="#" className="text-neutral-950 dark:text-neutral-100 mt-8 font-semibold">Learn More</Link>
                      </div>

                      <div className="flex items-center justify-center">
                        <Image
                          src="https://library.shadcnblocks.com/images/block/placeholder-1.svg"
                          alt="Prices"
                          width={400}
                          height={400}
                          className="w-full h-full object-cover rounded-[32px]"
                        />
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">{price.title}</h3>
                      <p className="text-neutral-500 dark:text-neutral-400 mt-2">{price.description}</p>

                      <div className="mt-8 leading-none">
                        <h4 className="text-base font-bold text-neutral-800 dark:text-neutral-200">Starting at</h4>
                        <div className="flex items-end gap-2">
                          <p className="text-neutral-900 dark:text-neutral-400 text-4xl font-semibold">${price.price}</p>
                          <p className="text-neutral-500 dark:text-neutral-400 text-base">/ month</p>
                        </div>
                        <Button size="lg" className="mt-6 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200" isCircle>{price.button}</Button>
                      </div>

                      <div className="mt-8">
                        <h4 className="text-lg font-bold text-neutral-800 dark:text-neutral-200">Features</h4>
                        <ol className="list-none list-inside text-neutral-500 dark:text-neutral-400 mt-2">
                          {price.features.map((feature: string, index: number) => (
                            <li key={index} className="flex items-center gap-2 my-1"><IconCheck className="text-neutral-500 dark:text-neutral-400 size-4" /> {feature}</li>
                          ))} 
                        </ol>
                      </div>

                      <Link href="#" className="text-neutral-950 dark:text-neutral-100 mt-8 font-semibold">Learn More</Link>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

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
                  <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.support?.help || "Aide"}</Link></li>
                  <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.support?.contact || "Contact"}</Link></li>
                  <li><Link href="#" className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">{messages?.footer?.support?.status || "Statut"}</Link></li>
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
      </div>
    </>
  );
}
