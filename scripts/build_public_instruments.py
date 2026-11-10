"""Prepare response-free diagnostic instruments for the public portfolio."""
from pathlib import Path
import fitz

root = Path(__file__).resolve().parents[1]
output = root / 'public/documentos/instrumentos-diagnostico'
output.mkdir(parents=True, exist_ok=True)
fontfile = 'C:/Windows/Fonts/arial.ttf'
boldfile = 'C:/Windows/Fonts/arialbd.ttf'
fonts = {'Arial': fitz.Font(fontfile=fontfile), 'Arial-Bold': fitz.Font(fontfile=boldfile)}

def wrap(text, font, size, width=510):
    rows, row = [], ''
    for word in text.split():
        trial = (row + ' ' + word).strip()
        if fonts[font].text_length(trial, fontsize=size) <= width:
            row = trial
        else:
            if row: rows.append(row)
            row = word
    if row: rows.append(row)
    return rows

def make(name, title, purpose, questions):
    doc, page, y = fitz.open(), None, 0
    def new_page():
        nonlocal page, y
        page = doc.new_page(width=595, height=842)
        page.insert_font(fontname='Arial', fontfile=fontfile)
        page.insert_font(fontname='Arial-Bold', fontfile=boldfile)
        page.draw_line((42, 55), (553, 55), color=(.83,.88,.95))
        page.insert_text((42, 814), 'Portafolio de Práctica Docente · DDP1109 · II-2026', fontname='Arial', fontsize=8)
        page.insert_text((515, 814), f'Pág. {len(doc)}', fontname='Arial', fontsize=8)
        y = 80
    def add(text, size=10, leading=15, gap=10, bold=False, color=(.18,.24,.32)):
        nonlocal y
        font = 'Arial-Bold' if bold else 'Arial'
        lines = wrap(text, font, size)
        if y + len(lines) * leading + gap > 790: new_page()
        for line in lines:
            page.insert_text((42, y), line, fontname=font, fontsize=size, color=color)
            y += leading
        y += gap
    new_page()
    add('INSTRUMENTO DEL DIAGNÓSTICO · VERSIÓN PÚBLICA', 9, 13, 10, True, (.08,.35,.75))
    add(title, 17, 23, 14, True, (.06,.14,.23))
    add(purpose)
    add('Presento las preguntas del instrumento aplicado por el equipo de práctica. Reservo las respuestas y los datos de las personas participantes; sintetizo los hallazgos en el diagnóstico.', gap=16)
    for i, question in enumerate(questions, 1): add(f'{i}. {question}', bold=True, gap=12, color=(.06,.14,.23))
    doc.set_metadata({'title': title, 'author': 'Mario Elmer Ramírez Grande'})
    doc.save(output / name, garbage=4, deflate=True)

make('cuestionario-estudiantado-sin-respuestas.pdf', 'Cuestionario al estudiantado de segundo año de bachillerato',
     'Preguntas sobre experiencia educativa, formas de aprendizaje, estudio autónomo, participación y acceso a tecnología.', [
    '¿En qué rango de edad se encuentra?',
    'Actualmente, además de estudiar, ¿realiza alguna de las siguientes actividades?',
    'Antes de estudiar en esta modalidad, ¿había dejado de estudiar durante algún tiempo?',
    '¿Qué actividades le ayudan más a comprender los temas?',
    'Cuando debe realizar una actividad de estudio por su cuenta durante la semana, ¿qué tan fácil le resulta hacerlo?',
    '¿Con qué frecuencia necesita ayuda adicional para comprender una explicación o realizar una actividad?',
    '¿Con qué frecuencia participa durante las clases?',
    'Cuando realiza actividades en clase, ¿cómo prefiere trabajar?',
    'Cuando no comprende un tema o una indicación, ¿con qué frecuencia solicita ayuda al docente?',
    '¿A cuáles de los siguientes dispositivos tiene acceso para realizar actividades de estudio?',
    'Cuando necesita Internet para estudiar, ¿cómo describiría su acceso?',
    '¿Con qué frecuencia utiliza algún dispositivo tecnológico para realizar actividades de estudio?',
    '¿Qué recursos digitales utiliza para estudiar?',
    '¿Qué dificultades tiene cuando utiliza tecnología para estudiar?',
    '¿Qué tipo de apoyo considera que le ayudaría más en sus clases?',
])

make('entrevista-docente-preguntas.pdf', 'Entrevista semiestructurada a la docente de Estudios Sociales',
     'Preguntas sobre el grupo, la enseñanza, la evaluación, los recursos y el apoyo tecnológico y pedagógico.', [
    '¿Cuáles son las principales características del grupo que considera importantes para el desarrollo de las clases?',
    '¿Qué estrategias o tipos de actividades utiliza con mayor frecuencia para desarrollar los contenidos con este grupo?',
    '¿Cómo describiría la participación del estudiantado y la interacción que se genera durante las clases?',
    '¿Cómo organiza el trabajo individual o colaborativo y qué tipo de acompañamiento suele brindar cuando algún estudiante presenta dificultades?',
    '¿Qué formas de evaluación utiliza para verificar el aprendizaje y de qué manera brinda retroalimentación al estudiantado?',
    '¿Qué ajustes o apoyos realiza cuando identifica diferentes ritmos, dificultades o necesidades de aprendizaje dentro del grupo?',
    '¿Qué recursos didácticos utiliza con mayor frecuencia y cuáles considera que le resultan más útiles para desarrollar sus clases?',
    '¿Qué recursos tecnológicos, aplicaciones o materiales digitales utiliza actualmente en sus clases y con qué propósito educativo los emplea?',
    '¿En qué actividades o momentos de sus clases considera que la tecnología podría apoyar o facilitar el aprendizaje del estudiantado?',
    '¿Qué recomendaciones considera importantes para orientar nuestro apoyo desde el área de Informática Educativa?',
])

make('entrevista-coordinacion-preguntas.pdf', 'Entrevista semiestructurada a la coordinación de Modalidad Flexible',
     'Preguntas sobre la modalidad, la población atendida, la institución, los recursos y las oportunidades de mejora.', [
    '¿Cómo se organiza y funciona la Modalidad Flexible en esta institución?',
    '¿Cuáles son las principales características de la población estudiantil que atiende la Modalidad Flexible en esta institución?',
    '¿Qué factores considera que favorecen o dificultan la asistencia y permanencia del estudiantado en la modalidad?',
    '¿Cómo describiría las condiciones de los espacios e infraestructura utilizados para el desarrollo de las actividades de la Modalidad Flexible?',
    '¿Qué servicios y apoyos institucionales se encuentran disponibles para el estudiantado de la Modalidad Flexible?',
    '¿Qué recursos tecnológicos se encuentran disponibles para apoyar las actividades educativas de la Modalidad Flexible y en qué condiciones se encuentran?',
    '¿Cómo describiría las condiciones de conectividad y acceso a los recursos tecnológicos para docentes y estudiantes?',
    '¿Cuáles considera que son las principales fortalezas de la institución para el desarrollo de la Modalidad Flexible?',
    '¿Cuáles considera que son las principales necesidades o aspectos que podrían fortalecerse en la Modalidad Flexible?',
    '¿Qué necesidades u oportunidades considera que podrían ser atendidas mediante nuestra práctica desde el área de Informática Educativa?',
])
print('\n'.join(str(p) for p in sorted(output.glob('*.pdf'))))
