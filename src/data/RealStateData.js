/**
 * The property info
 * @typedef {Object} Property
 * @property {string} id - indicates the unique identifier of the property.
 * @property {string} brokerId - indicates the broker identifier of the property.
 * @property {string} RKCode - indicates the property code on RK Imóveis website.
 * @property {string} title - indicates the title of the property.
 * @property {string} region - indicates the region of the property.
 * @property {string} description - indicates the description of the property.
 * @property {string} price - indicates the price of the property.
 * @property {Object} details - indicates the details of the property.
 * @property {string} details.square - The square meters of the property.
 * @property {string} details.rooms - The rooms of the property.
 * @property {string} details.bathrooms - The bathrooms of the property.
 * @property {string} details.garage - The garage of the property.
 * @property {Array<string>} pictures - indicates the URL of the pictures of the property.
 */

const BROKER_ID = crypto.randomUUID()

const properties = [
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '9193',
    title: 'Santinho',
    region: 'Canto do Costão',
    description:
      'IMÓVEL COM MATRÍCULA. Esta é uma oportunidade imperdível para quem busca viver em um local paradisíaco, com fácil acesso às duas das praias mais deslumbrantes da região. Características do apartamento: 1 dormitório espaçoso, sala de estar aconchegante, cozinha compacta, equipada com armários e eletrodomésticos, banheiro completo, varanda com vista agradável e área de serviço separada. O condomínio oferece diversas comodidades, como: piscina, áreas de lazer, churrasqueira e salão de festas. A localização é um dos grandes diferenciais deste apartamento, pois está estrategicamente posicionado próximo às praias dos Ingleses e Santinho. Aproveite o estilo de vida único que a região oferece!',
    price: 'R$ 450.000,00',
    details: {
      square: '51,30 m²',
      rooms: '1',
      bathrooms: '1',
      garage: '1',
    },
    pictures: [
      './properties/santinho-f05.jpg',
      './properties/santinho-f01.jpg',
      './properties/santinho-f02.jpg',
      './properties/santinho-f03.jpg',
      './properties/santinho-f04.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8843',
    title: 'Ingleses Norte',
    region: 'Cannes Club Residence',
    description:
      'OPORTUNIDADE!! POSSIBILIDADE DE FINANCIAMENTO DIRETO!! Imóvel em processo de individualização de matrícula!   Belíssimo apartamento de dois dormitórios com uma suite, banheiro social, varanda com churrasqueira, duas vagas paralelas de garagem e hobby box. CANNES CLUB RESIDENCE é um empreendimento localizado na região nobre da praia dos Ingleses, Norte da Ilha de Florianópolis. A 300m do mar, na Rua dos Canudos, com estrutura de lazer, piscina, salão de festas, brinquedoteca e academia.',
    price: 'R$ 620.000,00',
    details: {
      square: '79,64 m²',
      rooms: '2',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/cannes-f02.jpg',
      './properties/cannes-f01.jpg',
      './properties/cannes-f03.jpg',
      './properties/cannes-f04.jpg',
      './properties/cannes-f05.jpg',
    ],
  },
  {
    id: crypto.randomUUID(),
    brokerId: BROKER_ID,
    RKCode: '8430',
    title: 'Ingleses Norte',
    region: 'Costão dos Ingleses',
    description:
      'IMÓVEL COM MATRÍCULA! Imperdível! Trata-se de um apartamento em uma localização verdadeiramente privilegiada na deslumbrante Praia dos Ingleses. Com 3 dormitórios, incluindo uma suíte elegante, todos os cômodos estão equipados com móveis planejados, duas vagas de garagem e Hobbybox. Além disso, você encontrará um banheiro social e uma sacada com churrasqueira, proporcionando uma vista encantadora da rua. E o melhor de tudo: está a apenas 300 metros do mar. Esta é uma oportunidade incrível para você e sua família desfrutarem de um lar excepcional!',
    price: 'R$ 775.000,00',
    details: {
      square: '108 m²',
      rooms: '3',
      bathrooms: '2',
      garage: '2',
    },
    pictures: [
      './properties/ingleses-f04.jpg',
      './properties/ingleses-f01.jpg',
      './properties/ingleses-f02.jpg',
      './properties/ingleses-f03.jpg',
      './properties/ingleses-f05.jpg',
    ],
  },
]

/**
 * Retrieves the properties info.
 * @return {Array<Property>} returns an array of properties info.
 */
export function useProperties() {
  return properties
}
