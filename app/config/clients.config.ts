/**
 * Client logos configuration
 *
 * To add a new logo:
 * 1. Place the image in public/clients/ (e.g. public/clients/new-client.png)
 * 2. Add an entry below with name, path, and display dimensions (w, h)
 * 3. The logo will appear in the ClientLogos marquee automatically
 */

export interface ClientLogo {
  name: string
  logo: string
  w: number
  h: number
}

export const clients: ClientLogo[] = [
  { name: 'Africa Vibe Coders', logo: '/clients/africa-vibe-coders.png', w: 150, h: 100 },
  { name: 'Alignment Press', logo: '/clients/alignment-press.jpeg', w: 160, h: 88 },
  { name: 'Amahindura', logo: '/clients/amahindura.png', w: 160, h: 70 },
  { name: 'CNRD', logo: '/clients/cnrd.png', w: 100, h: 100 },
  { name: 'Chosen Arrow Foundation', logo: '/clients/chosen-arrow-foundation.jpg', w: 110, h: 110 },
  { name: 'DeineWeb', logo: '/clients/deineweb.png', w: 200, h: 36 },
  { name: 'Fremo Medical & Birth Center', logo: '/clients/fremo-medical.jpg', w: 110, h: 110 },
  { name: 'GS Laricharde Sarl', logo: '/clients/laricharde-sarl.png', w: 110, h: 110 },
  { name: 'Pepea', logo: '/clients/pepea.jpeg', w: 110, h: 105 },
  { name: 'Precision', logo: '/clients/precision.png', w: 200, h: 52 },
  { name: 'Rural Digital', logo: '/clients/rural-digital.jpeg', w: 110, h: 110 },
  { name: 'Scorpion Control Project', logo: '/clients/scorpion-control-project.jpeg', w: 110, h: 110 },
  { name: 'Shep Engineering', logo: '/clients/shep-engineering.jpg', w: 110, h: 110 },
  { name: 'Smart Football Academy', logo: '/clients/smart-football-academy.png', w: 130, h: 105 },
  { name: 'Turi Furniture', logo: '/clients/turi-furniture.png', w: 170, h: 75 },
  { name: 'Yeda', logo: '/clients/yeda.jpeg', w: 110, h: 110 },
  { name: 'GlamSquad Kenya', logo: '/clients/glamsquad-kenya.jpeg', w: 110, h: 110 },
  { name: 'FRM', logo: '/clients/frm.png', w: 140, h: 90 },
  { name: 'The Owner Agency', logo: '/clients/the-owner-agency.jpeg', w: 140, h: 112 },
  { name: 'Artistic', logo: '/clients/artistic.webp', w: 65, h: 120 },
]
