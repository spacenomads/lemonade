---
title: Vivaldi apuesta por una navegación más humana
post_id: vivaldi-human-navigation
featured_image: vivaldi-cover.jpg
featured_alt: Sobre un fondo difuminado entre azules, rosas y morados se ve el icono del navegador Vivaldi. Es un circulo blanco como con relieve, al que le falta una v redondeada en medio, y está sobre una pastilla plana roja, sobre la que arroja una sombra.
featured_color: 359be3
ya_image: vivaldi-end.png
ya_alt: Versión del logo de vivaldi con el círculo blando con la v redondeada recortada sobre una pastilla gris.
reading_time: 4
date: 2025-09-21
draft: false
future: false
categories: [ia, browsers]
tags: []
excerpt: Vivaldi se planta ante esta avalancha de meter ia en todo porque sí, y mola no escucharnos a los mismos de siempre con lo mismo.
clickbait: ¿Qué navegador usas?
cover_credits:
  label: Fuentes portada
  author: vivaldi.com/press
  link: https://vivaldi.com/press/
comments: true
---
{% import "components/post/macros.njk" as macros %}

Parece que el equipo de [Vivaldi](https://vivaldi.com) se ha plantado con el tema de meter las malditas ias generativas en todos sitios y **va a apostar por mantener un navegador para nosotres**.

Hoy compartían el post en el blog del proyecto, y me gusta ver que no todo el mundo está tomando las mismas decisiones. **Igual centrarse en lo que piden tus usuarios tampoco suena del todo mal**.

{% set metaCard = {
  url: 'https://vivaldi.com/es/blog/sigue-explorando/',
  title: 'Vivaldi se posiciona: sigue navegando como un humano',
  type: '',
  lang: 'es',
  mode: settings.mode,
  meta: {
    img: {
      url: 'https://vivaldi.com/wp-content/uploads/AI-statement.png',
      local_url: 'dev-ai-statement.png',
      alt: ''
    },
    description: 'La navegación es exploración, debería hacerte saltar entre ideas y tomar decisiones. Debería activar tu cerebro. Vivaldi se posiciona: elegimos a las personas por encima de las estrategias.',
    date: '28-08-2025',
    domain: 'vivaldi.com'
  },
  author: {
    name: 'Jon von Tetzchner',
    avatar: 'https://vivaldi.com/wp-content/uploads/2017/01/Jon-Portrait.jpg'
  }
} %}
{{ macros.previewCard(metaCard) }}

## ¿Por qué es importante esto?

Se junta el peligro de que **una herramienta filtre nuestro propio contenido** con esa necesidad creada de **tener una respuesta inmediata siempre**, anulando nuestra capacidad de aprendiza y de cuestionar las diferentes opciones.

Ahora mismo el navegador es **nuestra principal interfaz con todo un mundo de contenido de conocimiento acumulado, opiniones y experiencias personales**. Todes están metiendo herramientas de {{ macros.abbr({word: 'iag', title: 'inteligencia artificial generativa'}) }} como si fuesen lentejas, pero no lo son.

Que uno se plante es muestra de ello. Que se plante y que **nos recuerde que no somos consumidores pasivos**.

Igual el término «exploradores» se me hace un poco grande, pero va en esa dirección: al abrirnos a diferentes experiencias de diferente gente abandonamos esa pasividad y también crecemos por dentro. Solo el hecho de buscar, entender y valorar la información **ya no es un esfuerzo vacío, sino uno que nos permite mejorar y acceder a las miradas de otres**.

{% set config = {
  content: [
    'Hemos decido posicionarnos y poner a las personas por encima de las estrategias publicitarias. No vamos a permitir que los exploradores se conviertan en espectadores. Sin exploración, internet es mucho menos interesante. Nuestra curiosidad y la diversidad de internet se desvanecen.'
  ],
  author: 'Jon von Tetzchner, CEO, Vivaldi',
  cite: {
    work: 'Sigue explorando',
    url: 'https://vivaldi.com/es/blog/sigue-explorando/'
  }
} %}
{{ macros.quote(config) }}

## ¿En qué me afecta a mi?

**En tener opciones y una relación más sana sobre como consumimos y compartimos información**. No ser consumidores pasivos de lo que nos dicte una herramienta cambia nuestras perspectivas y también creo que **nos invita a compartir «nuestro mundo»** en esas mismas condiciones.

El contenido que hay publicado hasta ahora no se ha hecho solo ni se hizo ayer. Lo hemos hecho nosotros contando y comentando. **Preservar esa «navegación humana» es súper importante**, como lo es animarse a participar y que nuestras opiniones y experiencias tb sirvan al resto.

**No me parece poca cosa por la que plantarse**.

### En mi caso concreto

Aunque ahora mismo el navegador mayoritario es un Chromium (Chrome, Vivaldi, Opera, Edge) yo uso {{ macros.emoji({icon: '🦊', label: 'Cabeza de zorrito naranja'})}} [Firefox](https://firefox.com), porque **ya viví la época en la que un tipo de navegador tenía más del 95% de la cuota de mercado** y, como desarrollador, creo que **si lo que hacemos no es para todes, entonces no es para nadie**: no puede valga solo porque se vea en un Chromium.

Ahora, para varios casos específicos necesito un Chromium:

1. Cuando comparto pantalla por google meet desde Firefox a Chromium **a veces se comparte la pantalla en negro**. Esto es palo en las piedras de google, pero en el trabajo usamos la suite de google.
2. Soy desarrollador y **tengo que comprobar que lo que hago tb se ve en un Chromium**.
3. Para diseñar uso [Penpot](https://penpot.app) que es una herramienta de diseño y prototipado que funciona en el navegador y, por ahora, espero, **donde funciona bien es en un chromium**.

Hasta ahora tenía como segundo navegador Chrome, pero tal como leí el post de esta gente **lo he cambiado por Vivaldi**, que va más en la línea de lo que pienso.

---

**Tú también puedes hacerlo**, no necesitas usar lo que te dan sin más.

{% set chatConfig = {
  content: [
    'Pues yo no uso Chrome, uso brave.',
    'Brave es el navegador de un <a href="https://www.spacebar.news/stop-using-brave-browser/">homófobo despreciable</a>, no lo uses.'
  ],
  author: {
    id: 'chuck',
    name: 'Chuck'
  }
} %}
{{ macros.dialog(chatConfig) }}
