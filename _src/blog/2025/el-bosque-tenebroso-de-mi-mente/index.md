---
title: El bosque tenebroso de mi mente
post_id: gloomy
featured_image: bosque-tenebroso-cover.jpg
featured_alt: Área de bosque en sombras alrededor de un centro iluminado. Algunos árboles aparecen talados
featured_color: 3a3d14
ya_image: bosque-tenebroso-end.png
ya_alt: Círculo verdoso con un viejo árbol seco dentro
reading_time: 3
date: 2025-09-28
draft: false
categories: [stories]
tags: []
excerpt: En esta canción hay un mundo entero que está dentro de cada une
clickbait: ¿Cómo es tu bosque tenebroso?
cover_credits:
  link: https://unsplash.com/photos/a-forest-filled-with-lots-of-green-moss-covered-trees-wGy5QYJuLD8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash
  author: Jens Aber
  site: unsplash
comments: true
---
{% import "components/post/macros.njk" as macros %}

Descubrí la letra de esta canción de [Lorena Álvarez](https://lorenaesparati.com) leyendo [«El Miedo», de María Hesse](https://lectura.social/book/130611/s/el-miedo) **y me enamoré inmediatamente**.

En «El Miedo», que tb lo recomiendo, solo venían las dos primeras estrofas, la letra completa dice así:

{% set text = [
  [
    'Ven a darte un paseo',
    'por el bosque tenebroso de mi mente.',
    'A ver si lo soportas.',
    'A ver si no te asustas.',
    'A ver si eres capaz de ver lo que yo veo,',
    'no apartes la mirada.',
    'A ver si eres capaz de entender lo que yo sé.'
  ],
  [
    'Ven, asómate al abismo',
    'del bosque tenebroso de mi mente.',
    'Mira lo que hay abajo',
    'Restos de las batallas.',
    'He tenido que luchar hasta caer exhausta',
    'y a veces he perdido.',
    'Hoy te quiero enumerar',
    'las batallas que gané'
  ],
  [
    'Parece que al fin aquí hay un claro',
    'dentro del bosque tenebroso de mi mente',
    '¡Mira qué luminoso!',
    'Tan lejos del tormento.',
    'Ven, siéntate junto a mí',
    'aquí no tendrás miedo,',
    'verás como te encanta.',
    'Yo siempre vengo aquí',
    'aunque a veces me pierdo',
    'cuando ando despistada.',
    'Este es el lugar',
    'donde nace la belleza,',
    'donde puedo estar tranquila.',
    'No tengo otro lugar',
    'que sea más divino,',
    'saca unos bocadillos',
    'y disfrutemos desde aquí',
    'de la puesta de sol'
  ]
] %}
{{ macros.oda(text)}}

Me recuerda a mogollón de referencias con las que he crecido como **la zona fantasma** de Superman, **la bolsa** de Mary Poppins, **la T.A.R.D.I.S.** de Dr. Who, **la zona negativa** de los 4F o el **mundo virtual** de Inception.

Me gusta que es un espacio **no menos peligroso por poder ser hermoso**. Que no sea un lugar seguro me llama muchísimo la atención porque creo que **no hay ningún lugar seguro, especialmente la mente**.

En unas pocas palabras, Lorena crea la base de un universo entero que ya existe dentro de cada uno de nosotres. Y me gustaría **explorarlo con esa base, pero en mis términos**. ¿Cómo es mi bosque tenebroso? ¿Vive alguien más allí? ¿Ha habido batallas? ¿Cómo se entra?
¿Qué pasa si invitas a alguien y no le dejas salir?

Me recuerda a ese mundo oscuro sobre el que soñaba hace tiempo, negro, sin luz, al que podías abrir una puerta en cualquier momento. Me imaginaba unas primeras interacciones dejando cosas allí que quieras poder recuperar, a modo de bolsillo dimensional.

Con el tiempo alguien o algo de ese mundo vería la luz o se encontraría lo que hubieses dejado, y entonces **empezarías a descubrirlo de otra manera**.

Y querría descubrirlo, explorarlo e ir contando historias que solo suceden allí. O ir construyéndolo poco a poco. El mío, **mi bosque tenebroso de mi mente**.

---

Si no has escuchado la canción, está en casi todas las plataformas, por comodidad enlazo la de Youtube:

{% set videoConfig = {
  title: 'El Bosque Tenebroso De Mi Mente',
  width: '100%',
  src: 'https://www.youtube.com/embed/-hJuiYLS9yk?si=gX08ogAny-Sz9Y1p',
  aspect_ratio: '16 / 9'
} %}
{{ macros.video(videoConfig) }}
