---
title: v2.0.0
featured_image: cover.jpg
featured_alt: Sobre un fondo amarillísimo, un limón, también amarillo, sueña que es feliz (se ve un bocadillo de circulitos y dentro un smiley)
ya_image: lemon.png
ya_alt: Emoji del limón
reading_time: 2
date: 2024-01-04
draft: false
categories: [blog, front]
tags: [blog, desarrollo, limonada, cambio de estilo, 11ty, gulp, penpot]
excerpt: Tras mucho esfuerzo y 40 sesiones en vídeo, he sacado el rediseño de mi blog.
clickbait: ¿Te gusta el nuevo diseño?
cover_credits:
  link: https://unsplash.com/@francescocantinellifoto?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
  author: Francesco Cantinelli
  site: unsplash
---
{% import "components/post/macros.njk" as macros %}

Parecía que no, pero tras 40 sesiones (CUARENTAH) he sacado la versión dos (DOH) de mi blog.

{{ macros.tldr(['Hay una versión nueva con más cosicas y la limonada más fresquita.']) }}

**Y qué tiene de nuevo?** Pues varias cosas, chatiqui, varias cosas...

## Las cosas

- Rediseñado en [Penpot](https://penpot.app/).
- Grid de la home.
- HTML/CSS/JS en 40 sesiones de vídeo en directo.
- SASS Dart.
- Feed RSS.
- Métricas con [Librecounter](https://librecounter.org/).
- Mejor estructura de componentes.
Macros para elementos gráficos como las imágenes, el TL;DR y los - separadores.
- Página de About/[Now](https://nownownow.com/about).
- Página 404.
- Variables de colores desde Penpot a través de su API.
- Comentarios a través del email, como los modernos!

Reconozco que pensé que sería menos y me he ido encontrando con problemas que sortear durante todo el camino al ir pensando cosas sobre la marcha, pero un poco iba de esto la cosa, y de disfrutar del camino.

## Flujo de desarrollo

El proyecto usa [11ty](https://www.11ty.dev/) para generar los estáticos desde archivos Nunjucks y Markdown (para los posts) y [Gulp](https://gulpjs.com/) para procesar los estilos SCSS y el javascript. Una vez se sube el repo a [GitHub](https://github.com/spacenomads/lemonade) se vuelve a generar todo y se sirve a [sidiostedalimones.com](https://sidiostedalimones.com)

{% set imgConfig = {
  src: './img/flujo-desarrollo.png',
  alt: 'Esquema del flujo de desarrollo con todos los componentes: 11ty, Gulp, Penpot API y Github Pages',
  max_width: 598,
  mode: 'center',
  caption: 'Flujo de desarrollo de sidiostedalimones.com'
} %}
{{ macros.img(imgConfig) }}

Con una aplicación extra pido las variables de colores a la API de [Penpot](https://penpot.app/), y ya estaría.

## El proceso

Todo, o casi todo, lo he ido haciendo en directo, diseño incluído. Se puede encontrar en esta [playlist de mi canal de Youtube](https://www.youtube.com/watch?v=YFopuaVlsXQ&list=PLO-mtrYE0826dG8eph_-WKsLq6mLaVhDg), aunque los últimos vídeos están todavía en [Twitch](https://www.twitch.tv/chuck_as_usual/videos).

***
Ahora queda publicarlo, y que todo vaya bien. No he podido probar las RSS y aunque tienen buena pinta, cuando las vea funcionando...

Deseadme suerte o recordadme tuerto.
