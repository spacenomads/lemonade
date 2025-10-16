---
title: Hecho por un tuerto, no por ia
post_id: not-by-ai
featured_image: not-by-ai-cover.jpg
featured_alt: Cabeza amarilla de lego con un parche pirata en el ojo izquierdo, pero tipo Metal Gear Solid en la que hay 3 cintas negras.
featured_color: f3f4f7
ya_image: not-by-ai-end.png
ya_alt: Cabeza amarilla de lego con un parche pirata en el ojo izquierdo, pero tipo Metal Gear Solid en la que hay 3 cintas negras.
reading_time: 2
date: 2025-10-16
draft: false
future: false
categories: [ia]
tags: []
excerpt: El proceso de creación es un sistema complejo, que se enriquece de la experiencia y es un camino que hay que recorrer, cada vez. Este post, va de eso.
clickbait: ¿Usarías las insignias?
cover_credits:
  author: Chuck!
  site: sidiostedalimones
comments: true
---
{% import "components/post/macros.njk" as macros %}

El proceso de creación es un sistema complejo, que se enriquece de la experiencia y es un camino que hay que recorrer, cada vez. **No te sientas y pasan las cosas**.

**Poner en valor esta experiencia y el propio camino es cada vez más importante** en un mundo lleno de atajos y gente que desconoce los procesos, no le importan o no tiene ninguna intención de recorrerlos.

Como forma para indicar que el contenido se ha hecho por personas salió el proyecto [ {{macros.emoji({label: 'Cara sonriente', icon: '☺︎'})}} not by AI](https://notbyai.fyi/) con una serie de insignias para marcar diferentes tipos de contenido por áreas.

## {{ macros.abbr({title: 'Inteligencia artificial generativa', word: 'IAG'}) }} y contenido humano

Ese proyecto mola, pero es su proyecto, yo quiero el mío. **Así que he empezado a hacerme mis propias insignias**.

Por ahora tengo la de escrito por un tuerto:

{% set imgConfig = {
  src: '/assets/images/not-by-ai/not-by-ai-light.png',
  alt: 'Escrito por un tuerto, no por ia (versión clara)',
  max_width: 200,
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

{% set imgConfig = {
  src: '/assets/images/not-by-ai/not-by-ai-dark.png',
  alt: 'Escrito por un tuerto, no por ia (versión oscura)',
  max_width: 200,
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Me gustaría hacer algunas más, al menos **para código e ilustración**, pero sobre todo me gustaría armar y liberar un pequeño proyecto donde **puedas personalizar tu insignia y descargarla**.

Aunque eso será otro día.


