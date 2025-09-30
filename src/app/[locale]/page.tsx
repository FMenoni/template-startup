"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { IconArrowDown, IconArrowLeft, IconArrowRight, IconCheck, IconColorPalette, IconCube, IconCursorClick, IconDevices, IconGallery, IconIceCream } from "@intentui/icons";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { instrumentSans } from "@/lib/primitive";
import { Button } from "@/components/ui/button";
import Footer from "@/components/blocks/footer";
import { getMessages } from "@/lib/translations";
import { useParams } from "next/navigation";

export default function HomePage() {
  const { locale } = useParams() as { locale: string }
  const messages = getMessages(locale as 'fr' | 'en');
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
    <div className="bg-white dark:bg-neutral-950 overflow-x-hidden">
      <section className="h-screen flex items-center bg-white dark:bg-neutral-950 relative" id="hero">
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
        </div>
      </section>
      
      {/* Flèche qui bounce - maintenant en position relative au conteneur principal */}
      <div className="relative -mt-20 mb-20 flex justify-center">
        <div className="animate-bounce">
          <IconArrowDown className="text-neutral-400 dark:text-neutral-100 size-5" />
        </div>
      </div>

      <section id="iphone" className="relative bg-white dark:bg-neutral-950 py-16 sm:py-24 lg:py-32">
        <img
          src="/images/iphone.png"
          alt="iPhone"
          className="absolute left-0 top-1/2 -translate-y-1/2 h-[300px] sm:h-[400px] lg:h-[600px] rounded-r-[20px] sm:rounded-r-[40px] lg:rounded-r-[70px] object-cover"
        />
        <div className="max-w-screen mx-auto w-full min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] px-4 sm:px-6 lg:px-8 lg:-mr-[450px] flex items-center">
          <div className="ml-0 sm:ml-[200px] lg:ml-[600px] flex flex-col gap-4 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-neutral-100">{messages?.iphone?.title || "iPhone"}</h2>
            <p className="text-neutral-500 dark:text-neutral-400 max-w-full sm:max-w-[400px] lg:max-w-[520px] text-sm sm:text-base lg:text-lg">{messages?.iphone?.description || "iPhone"}</p>
          </div>
        </div>
      </section>

      <section id="specs" className="py-16 sm:py-24 lg:py-32 mt-10 sm:mt-16 lg:mt-20 bg-neutral-100 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold dark:text-neutral-100 text-center lg:text-left">{messages?.specs?.title || "Specs"}</h2>
          </div>

          <div ref={scrollRef} className="mt-8 sm:mt-12 lg:mt-16 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex gap-4 sm:gap-6 w-max">
              {specs.map((spec, index) => (
                <div key={index} className="shrink-0 w-[280px] sm:w-[300px] lg:w-[320px] bg-white dark:bg-neutral-900 rounded-[20px] sm:rounded-[24px] lg:rounded-[28px] p-6 sm:p-7 lg:p-8">
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
            <div className="flex-1"></div>
            <button onClick={handleScrollLeft} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
              <IconArrowLeft className="text-neutral-800 dark:text-neutral-100 size-5" />
            </button>
            <button onClick={handleScrollRight} className="p-2 rounded-full bg-neutral-200 dark:bg-neutral-800 hover:bg-neutral-300 dark:hover:bg-neutral-700 transition-colors cursor-pointer">
              <IconArrowRight className="text-neutral-800 dark:text-neutral-100 size-5" />
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
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer messages={messages} />
    </div>
  )
}

