"use client";

import Image from "next/image";
import { IconArrowDown, IconCheck, IconHeart, IconStar, IconColorPalette, IconCube, IconDevices, IconGallery, IconMail, IconMap, IconDevicePhone } from "@intentui/icons";
import { useScrollPosition } from "@/lib/useScrollPosition";
import { instrumentSans } from "@/lib/primitive";
import { Button } from "@/components/ui/button";
import { TextField } from "@/components/ui/text-field";
import Footer from "@/components/blocks/footer";
import Link from "next/link";

interface AboutProps {
  messages?: any;
}

export default function About({ messages }: AboutProps) {
  useScrollPosition();

  const team = [
    {
      name: messages?.about?.team?.member1?.name || "Alexandre Dubois",
      role: messages?.about?.team?.member1?.role || "CEO & Fondateur",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      description: messages?.about?.team?.member1?.description || "Passionné par l'innovation et l'expérience utilisateur.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: messages?.about?.team?.member2?.name || "Sophie Martin",
      role: messages?.about?.team?.member2?.role || "Directrice Design",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      description: messages?.about?.team?.member2?.description || "Créatrice de designs qui inspirent et transforment.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: messages?.about?.team?.member3?.name || "Thomas Leroy",
      role: messages?.about?.team?.member3?.role || "CTO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      description: messages?.about?.team?.member3?.description || "Expert en technologies de pointe et architecture logicielle.",
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  const values = [
    {
      title: messages?.about?.values?.value1?.title || "Innovation",
      description: messages?.about?.values?.value1?.description || "Nous repoussons constamment les limites de la créativité et de la technologie.",
      icon: <IconColorPalette className="text-neutral-950 dark:text-neutral-100 size-8" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      title: messages?.about?.values?.value2?.title || "Qualité",
      description: messages?.about?.values?.value2?.description || "Chaque détail compte dans notre quête d'excellence.",
      icon: <IconCube className="text-neutral-950 dark:text-neutral-100 size-8" />,
      color: "from-green-500 to-blue-600"
    },
    {
      title: messages?.about?.values?.value3?.title || "Collaboration",
      description: messages?.about?.values?.value3?.description || "Nous croyons en la puissance du travail d'équipe et de la diversité.",
      icon: <IconDevices className="text-neutral-950 dark:text-neutral-100 size-8" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      title: messages?.about?.values?.value4?.title || "Impact",
      description: messages?.about?.values?.value4?.description || "Nous créons des solutions qui changent le monde.",
      icon: <IconGallery className="text-neutral-950 dark:text-neutral-100 size-8" />,
      color: "from-purple-500 to-pink-600"
    }
  ];

  const stats = [
    {
      number: "50+",
      key: "clients",
      label: "Clients Satisfaits"
    },
    {
      number: "100+",
      key: "projects",
      label: "Projets Réalisés"
    },
    {
      number: "5+",
      key: "years",
      label: "Années d'Expérience"
    },
    {
      number: "24/7",
      key: "support",
      label: "Support Client"
    }
  ];

  return (
    <div className="bg-white dark:bg-neutral-950 overflow-x-hidden">
      {/* Hero Section */}
      <section className="h-screen flex items-center bg-white dark:bg-neutral-950" id="hero">
        <div className="max-w-[1440px] mx-auto w-full px-8" id="hero-content">
          <div className="relative w-full flex justify-between items-center">
            <div className="flex-1">
              <h1 className={`text-[4rem] text-neutral-950 dark:text-neutral-100 font-bold flex flex-col leading-none ${instrumentSans.className}`}>
                <span>{messages?.about?.hero?.title?.line1 || "Notre"}</span>
                <span>{messages?.about?.hero?.title?.line2 || "Histoire"}</span>
                <span>{messages?.about?.hero?.title?.line3 || "Commença Ici."}</span>
              </h1>
              <p className="text-xl text-neutral-600 dark:text-neutral-400 mt-6 max-w-2xl">
                {messages?.about?.hero?.description || "Découvrez l'équipe passionnée derrière notre vision et les valeurs qui nous animent chaque jour."}
              </p>
              <div className="flex gap-4 mt-8">
                <Button size="lg" className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200">
                  {messages?.about?.hero?.cta1 || "En savoir plus"}
                </Button>
                <Button size="lg" intent="outline" className="border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900">
                  {messages?.about?.hero?.cta2 || "Nous contacter"}
                </Button>
              </div>
            </div>

            <div className="flex-1 flex justify-end">
              <div className="relative">
                <Image
                  src="/images/hero1.jpg"
                  alt="Notre équipe"
                  width={600}
                  height={600}
                  className="rounded-[32px] object-cover h-[500px] w-[400px]"
                />
                <div className="absolute -bottom-6 -left-6 bg-white dark:bg-neutral-900 rounded-[20px] p-6 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <IconStar className="text-white size-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">{messages?.about?.hero?.excellence?.title || "Excellence"}</p>
                      <p className="text-sm text-neutral-500 dark:text-neutral-400">{messages?.about?.hero?.excellence?.description || "Reconnue"}</p>
                    </div>
                  </div>
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

      {/* Stats Section */}
      <section className="py-16 bg-neutral-50 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {stat.number}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm md:text-base">
                  {messages?.about?.stats?.[stat.key]?.label || stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-neutral-100 mb-4">
              {messages?.about?.team?.title || "Notre Équipe"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {messages?.about?.team?.description || "Des experts passionnés qui partagent une vision commune : créer des expériences exceptionnelles."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white dark:bg-neutral-900 rounded-[20px] p-6 text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-[16px] mx-auto"
                  />
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {member.name}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  {member.role}
                </p>
                <p className="text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                  {member.description}
                </p>

                <div className="flex gap-3 justify-center">
                  <Link href={member.social.linkedin} className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                    <IconColorPalette className="text-neutral-600 dark:text-neutral-400 size-4" />
                  </Link>
                  <Link href={member.social.twitter} className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors">
                    <IconCube className="text-neutral-600 dark:text-neutral-400 size-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-neutral-100 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-neutral-100 mb-4">
              {messages?.about?.values?.title || "Nos Valeurs"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {messages?.about?.values?.description || "Les principes qui guident nos décisions et façonnent notre culture d'entreprise."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-[20px] p-6"
              >
                <div className={`w-16 h-16 bg-neutral-200 dark:bg-neutral-800 rounded-[16px] flex items-center justify-center mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100 mb-2">
                  {value.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-4xl font-bold dark:text-neutral-100 mb-6">
                {messages?.about?.mission?.title || "Notre Mission"}
              </h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                {messages?.about?.mission?.description || "Nous nous engageons à créer des solutions innovantes qui transforment la façon dont les gens interagissent avec la technologie. Notre objectif est de rendre le digital plus accessible, plus intuitif et plus humain."}
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <IconCheck className="text-green-500 size-5 mt-1 flex-shrink-0" />
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.mission?.point1 || "Innovation continue et recherche de nouvelles solutions"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="text-green-500 size-5 mt-1 flex-shrink-0" />
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.mission?.point2 || "Excellence dans l'expérience utilisateur"}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <IconCheck className="text-green-500 size-5 mt-1 flex-shrink-0" />
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.mission?.point3 || "Impact positif sur la société et l'environnement"}
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/images/hero2.jpg"
                alt="Notre mission"
                width={600}
                height={600}
                className="rounded-[32px] object-cover h-[500px] w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-neutral-900 rounded-[20px] p-6 shadow-xl">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-3">
                    <IconHeart className="text-white size-6" />
                  </div>
                  <p className="font-semibold text-neutral-900 dark:text-neutral-100">{messages?.about?.mission?.point4 || "Passion"}</p>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">{messages?.about?.mission?.point5 || "Sans limites"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-neutral-50 dark:bg-neutral-925">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold dark:text-neutral-100 mb-4">
              {messages?.about?.contact?.title || "Parlons de Votre Projet"}
            </h2>
            <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              {messages?.about?.contact?.description || "Prêt à transformer vos idées en réalité ? Contactez-nous pour discuter de votre projet."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconMail className="text-neutral-600 dark:text-neutral-400 size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {messages?.about?.contact?.email?.title || "Email"}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.contact?.email?.value || "contact@templatestartup.com"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconDevicePhone className="text-neutral-600 dark:text-neutral-400 size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {messages?.about?.contact?.phone?.title || "Téléphone"}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.contact?.phone?.value || "+33 1 23 45 67 89"}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-neutral-200 dark:bg-neutral-800 rounded-full flex items-center justify-center flex-shrink-0">
                  <IconMap className="text-neutral-600 dark:text-neutral-400 size-5" />
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 dark:text-neutral-100 mb-1">
                    {messages?.about?.contact?.address?.title || "Adresse"}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    {messages?.about?.contact?.address?.value || "123 Rue de l'Innovation, 75001 Paris, France"}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-neutral-900 rounded-[20px] p-6">
              <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 mb-6 text-center">
                {messages?.about?.contact?.form?.title || "Envoyez-nous un message"}
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      {messages?.about?.contact?.form?.firstName || "Prénom"}
                    </label>
                    <TextField
                      placeholder={messages?.about?.contact?.form?.firstName || "Prénom"}
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      {messages?.about?.contact?.form?.lastName || "Nom"}
                    </label>
                    <TextField
                      placeholder={messages?.about?.contact?.form?.lastName || "Nom"}
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {messages?.about?.contact?.form?.email || "Email"}
                  </label>
                  <TextField
                    type="email"
                    placeholder={messages?.about?.contact?.form?.email || "Email"}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                    {messages?.about?.contact?.form?.message || "Votre message"}
                  </label>
                  <TextField
                    placeholder={messages?.about?.contact?.form?.message || "Votre message"}
                    className="w-full"
                  />
                </div>

                <Button size="lg" className="w-full bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200">
                  {messages?.about?.contact?.form?.submit || "Envoyer le message"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-[1440px] mx-auto w-full px-8">
          <div className="border border-neutral-100 dark:border-neutral-900 bg-neutral-25 dark:bg-neutral-850 rounded-[20px] p-8 text-center">
            <h2 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
              {messages?.about?.cta?.title || "Prêt à Commencer ?"}
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6 max-w-xl mx-auto">
              {messages?.about?.cta?.description || "Rejoignez-nous dans cette aventure et créons ensemble quelque chose d'extraordinaire."}
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-200">
                {messages?.about?.cta?.primary || "Commencer Maintenant"}
              </Button>
              <Button size="lg" intent="outline" className="border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-800">
                {messages?.about?.cta?.secondary || "En savoir plus"}
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