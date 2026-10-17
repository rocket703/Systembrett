import { withBase } from '../lib/paths';

export const site = {
  name: 'Vanessa',
  fullName: 'Vanessa Wöhner',
  tagline: 'Systembrett-Aufstellung in Magdeburg',
  role: 'Psychologische Beratung',
  email: '[E-Mail-Adresse]',
  phone: '[Telefonnummer]',
  phoneHref: 'tel:',
  /** Ziel für das Kontaktformular (POST, JSON). Leer = Formular zeigt einen Hinweis statt zu senden. */
  contactEndpoint: '',
  address: {
    street: 'Lindenplan 26',
    zip: '39120',
    city: 'Magdeburg',
    mapsUrl:
      'https://www.google.com/maps/search/?api=1&query=Lindenplan+26+39120+Magdeburg',
  },
  area: ['Magdeburg', 'Schönebeck', 'Burg', 'Wolmirstedt', 'Barleben', 'Haldensleben'],
  designer: {
    name: 'r³webdesign',
    url: 'https://r3webdesign.de/',
  },
  images: {
    hero: withBase('/images/hero.webp'),
    stones: {
      800: withBase('/images/stones-800.webp'),
      1280: withBase('/images/stones-1280.webp'),
      1920: withBase('/images/stones-1920.webp'),
    },
    board: withBase('/images/systembrett-kreis-mono.webp'), // Vorschau: entsättigt, bis ein echtes Foto von Vanessas Brett da ist
    turtle: withBase('/images/turtle.webp'),
    praxis: {
      800: withBase('/images/praxis-800.webp'),
      1100: withBase('/images/praxis-1100.webp'),
    },
    table: {
      800: withBase('/images/tisch-800.webp'),
      1400: withBase('/images/tisch-1400.webp'),
    },
    wood: withBase('/images/wood-texture.webp'),
  },
} as const;

export const nav = [
  { label: 'Über mich', href: '/#ueber' },
  { label: 'Methode & Ablauf', href: '/methode' },
  { label: 'Fragen', href: '/#faq' },
  { label: 'Kontakt', href: '/kontakt' },
] as const;
