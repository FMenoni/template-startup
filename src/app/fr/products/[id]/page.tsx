import { getMessages } from "@/lib/translations"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function FrProductPage({ params }: ProductPageProps) {
  const messages = getMessages("fr")
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-neutral-950 dark:text-neutral-100 mb-4">
          {messages?.product?.title || "Produit"} #{params.id}
        </h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          {messages?.product?.description || "Ceci est la page produit en français."}
        </p>
      </div>
    </div>
  )
}
