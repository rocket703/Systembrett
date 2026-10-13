import { site } from './site';
import { withBase } from '../lib/paths';

export const defaultOgImage = withBase('/images/hero.webp');

export const seoPages = {
  home: {
    title: 'Systembrett-Aufstellung Magdeburg | Vanessa Wöhner',
    description:
      'Systembrett-Aufstellung in Magdeburg im geschützten Einzelsetting. Psychologische Beratung: Anliegen klären, Figuren aufstellen, neue Blickwinkel finden.',
    ogTitle: `${site.name} – Systembrett in Magdeburg`,
  },
  methode: {
    title: `Methode & Ablauf der Systembrett-Aufstellung | ${site.fullName}`,
    description:
      'Wie eine Aufstellung am Systembrett funktioniert: für welche Anliegen sie passt und wie ein Termin in vier Schritten abläuft. Einzelsetting in Magdeburg.',
  },
  kontakt: {
    title: `Kontakt & Erstgespräch | ${site.fullName}`,
    description:
      'Erstgespräch für eine Systembrett-Aufstellung in Magdeburg anfragen. Schreiben Sie kurz, worum es geht – ich melde mich mit einem Terminvorschlag.',
  },
  impressum: {
    title: `Impressum | ${site.name}`,
    description: 'Impressum der Praxis für Systembrett-Aufstellung in Magdeburg.',
  },
  datenschutz: {
    title: `Datenschutz | ${site.name}`,
    description: 'Datenschutzerklärung der Praxis für Systembrett-Aufstellung in Magdeburg.',
  },
} as const;
