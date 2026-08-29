// =====================================================================
// CATÁLOGO DE PRODUTOS
// ---------------------------------------------------------------------
// Para adicionar um novo produto, copie um bloco { ... } dentro da lista
// "products" e edite os campos. Coloque a foto em /public/products/ e
// aponte o caminho em "image". Para não mostrar preço, deixe "price"
// como undefined — o site exibirá "Consulte pelo WhatsApp".
// As categorias disponíveis estão em "categories" abaixo.
// =====================================================================

export type CategoryId =
  | 'maletas'
  | 'bolsas'
  | 'mochilas'
  | 'necessaires'

export type Category = {
  id: CategoryId
  label: string
}

export type Product = {
  id: string
  name: string
  description: string
  category: CategoryId
  image: string
  imageAlt: string
  /** Deixe undefined para exibir "Consulte pelo WhatsApp". */
  price?: number
}

export const categories: Category[] = [
  { id: 'maletas', label: 'Maletas' },
  { id: 'bolsas', label: 'Bolsas' },
  { id: 'mochilas', label: 'Mochilas' },
  { id: 'necessaires', label: 'Nécessaires & Estojos' },
]

export const products: Product[] = [
  {
    id: 'mochila-3d',
    name: 'Mochila 3D',
    description: 'Mochila personalizada com relevo e efeito 3D em alta definição, alças confortáveis e acabamento impecável.',
    category: 'mochilas',
    image: '/optimized/products/mochila-3d.webp',
    imageAlt: 'Mochila infantil personalizada 3D com nome e arte colorida',
  },
  {
    id: 'bolsa-meia-lua',
    name: 'Bolsa Meia Lua',
    description: 'Design contemporâneo em formato meia lua, perfeita para passeios, presentes e eventos especiais.',
    category: 'bolsas',
    image: '/optimized/products/bolsa-meia-lua.webp',
    imageAlt: 'Bolsa personalizada em formato meia lua com acabamento artesanal',
  },
  {
    id: 'bolsa-redonda',
    name: 'Bolsa Redonda',
    description: 'Formato circular moderno e feminino, personalizada com o tema e nome que você escolher.',
    category: 'bolsas',
    image: '/optimized/products/bolsa-redonda.webp',
    imageAlt: 'Bolsa redonda personalizada com estampa e detalhes artesanais',
  },
  {
    id: 'maleta-luxo',
    name: 'Maleta Luxo',
    description: 'Modelo nobre com detalhes sofisticados, ideal para presentes inesquecíveis e kits comemorativos.',
    category: 'maletas',
    image: '/optimized/products/maleta-luxo.webp',
    imageAlt: 'Maleta luxo personalizada para presente ou kit comemorativo',
  },
  {
    id: 'maleta-20x15',
    name: 'Maleta 20 x 15',
    description: 'Tamanho clássico e prático, excelente para lembrancinhas de festas infantis e aniversários.',
    category: 'maletas',
    image: '/optimized/products/maleta-20x15.webp',
    imageAlt: 'Maleta personalizada 20 por 15 para lembrancinha infantil',
  },
  {
    id: 'maleta-20x17',
    name: 'Maleta 20 x 17',
    description: 'Espaço generoso com estrutura reforçada e estampa personalizada com cores vivas.',
    category: 'maletas',
    image: '/optimized/products/maleta-20x17.webp',
    imageAlt: 'Maleta personalizada 20 por 17 com estrutura reforçada',
  },
  {
    id: 'maleta-transparente-arte',
    name: 'Maleta Transparente com Arte',
    description: 'Confecção em PVC cristal transparente combinada com arte personalizada exclusiva.',
    category: 'maletas',
    image: '/optimized/products/maleta-transparente-arte.webp',
    imageAlt: 'Maleta transparente com arte personalizada exclusiva',
  },
  {
    id: 'maleta-plastico-fosco',
    name: 'Maleta Plástico Fosco',
    description: 'Visual moderno e translúcido em acabamento fosco, resistente e muito estilosa.',
    category: 'maletas',
    image: '/optimized/products/maleta-plastico-fosco.webp',
    imageAlt: 'Maleta de plástico fosco personalizada com visual translúcido',
  },
  {
    id: 'necessaire-box-g',
    name: 'Nécessaire Box G',
    description: 'Nécessaire ampla em formato box, perfeita para organização do dia a dia, maquiagem e viagens.',
    category: 'necessaires',
    image: '/optimized/products/necessaire-box-g.webp',
    imageAlt: 'Nécessaire box grande personalizada para organização e viagem',
  },
  {
    id: 'estojo-palito',
    name: 'Estojo Palito',
    description: 'Estojo compacto e prático em formato palito, ideal para lápis, canetas e lembrancinhas escolares.',
    category: 'necessaires',
    image: '/optimized/products/estojo-palito.webp',
    imageAlt: 'Estojo palito personalizado para lápis, canetas ou lembrancinha escolar',
  },
]
