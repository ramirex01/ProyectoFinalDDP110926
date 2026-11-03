const base = import.meta.env.BASE_URL + 'imagenes/jornadas/';

export const visitMedia = {
  1: [
    { file: 'j1-1.png', alt: 'Equipo de práctica durante una reunión en el centro escolar', caption: 'Encuentro del equipo en el centro escolar.' },
    { file: 'j1-2.png', alt: 'Fotografía grupal del equipo de práctica en el centro escolar', caption: 'Registro grupal del equipo de práctica.' },
    { file: 'j1-3.png', alt: 'Equipo de práctica junto a una docente que revisa documentos', caption: 'Revisión de documentos durante la visita.' },
  ],
  2: [{ file: 'j2-1.png', alt: 'Equipo de práctica junto a una docente en el centro escolar', caption: 'Registro del equipo durante la segunda visita.' }],
  3: [
    { file: 'j3-1.png', alt: 'Fotografía grupal del equipo de práctica', caption: 'Registro grupal de la tercera visita.' },
    { file: 'j3-2.png', alt: 'Collage del equipo trabajando con materiales en el centro escolar', caption: 'Preparación de materiales y trabajo en equipo.' },
  ],
  4: [{ file: 'j4-1.png', alt: 'Fotografía grupal del equipo de práctica en un aula', caption: 'Registro del equipo durante la cuarta visita.' }],
  5: [{ file: 'j5-1.png', alt: 'Fotografía del equipo de práctica en el centro escolar', caption: 'Registro del equipo durante la quinta visita.' }],
  6: [{ file: 'j6-1.png', alt: 'Fotografía grupal del equipo de práctica durante la sexta visita', caption: 'Registro del equipo durante la sexta visita. [Video de la clase pendiente].' }],
};

export function visitImageUrl(file) {
  return base + file;
}
