// =====================================================================
// CONFIGURAÇÕES DA MARCA — edite aqui os dados de contato da Lory.
// Troque o número do WhatsApp pelo número real (formato internacional,
// somente dígitos: 55 + DDD + número). Ex.: 55 11 91234-5678 -> "5511912345678"
// =====================================================================
export const site = {
  name: 'Lory Bolsas Personalizadas',
  shortName: 'Lory Bolsas',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://lorybolsas.com.br',
  description:
    'Bolsas, necessaires, kits e lembrancinhas personalizadas feitas à mão para festas, presentes e momentos inesquecíveis.',
  whatsappNumber: '5586999305646',
  whatsappFormatted: '(86) 99930-5646',
  instagram: 'lorybolsas',
  instagramUrl: 'https://www.instagram.com/lorybolsas/',
  email: 'contato@lorybolsas.com.br',
  city: 'Teresina',
  region: 'PI',
  country: 'BR',
}

/** Monta um link do WhatsApp com mensagem pré-preenchida. */
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
