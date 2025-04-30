---
title: Descargar los capítulos de un vídeo en audios
featured_image: post-guia-descargar-audio.jpg
featured_alt: Portada de las mini guías. Hoy, cómo descargar los capítulos de un vídeo de youtube en archivos de audio separados.
featured_color: 91a7b4
ya_image: youtube.png
ya_alt: Logo de Youtube
reading_time: 2
date: 2025-04-30
draft: false
categories: [guía]
tags: [youtube, videos, capítulos, audio]
excerpt:
clickbait: ¿Conocías yt-dlp?
cover_credits:
  link: https://sidiostedalimones.com
  author: Chuck!
  site: sidiostedalimones
---
{% import "components/post/macros.njk" as macros %}

{{ macros.tldr(['¿No pasa que a veces te quieres descargar los capítulos de un vídeo de youtube por separado?', 'Pues se puede hacer con <a href="https://github.com/yt-dlp/yt-dlp">yt-dlp</a>.']) }}

Esta mini guía, fuera de la programación del blog, es porque siempre se me olvida cómo se hace y me lleva un rato buscar.

> Antes de seguir, **esto no es igual para todo el mundo**. Yo estoy usando [homebrew](https://brew.sh/) para instalarlo en un mac, y luego el comando se ejecuta desde la terminal.

Estoy un poco obsesionado con She-Ra And The Princesses Of Power. No me juguéis que es mi lugar feliz y lo necesito. El caso es que hay unas canciones, las de Sea Hawk, que no encuentro salvo en un [vídeo de Youtube por capítulos](https://www.youtube.com/watch?v=AmpJD5yTqPo). Y que me lo puedo descargar como audio y editarlo e ir sacando cada canción, pero ¿y no habrá alguien resuelto este "problema"? Pues sí, con [yt-dlp](https://github.com/yt-dlp/yt-dlp).

En la página de GitHub tienen descargables y tal, pero te lo puedes instalar con Homebrew:

```bash
$ brew install yt-dlp
```

Ahora, las instrucciones no me han parecido súper claras, ni me lo parecieron la vez anterior, así que esto es lo que yo lancé:

```bash
$ yt-dlp --split-chapters -x --audio-format MP3 --audio-quality 0 AmpJD5yTqPo
```

Lo más importante es que parece que no tienes que poner toda la url, **solo el id**. Ni tampoco hay que poner "URL" como parece indicar en el apartado de [uso y opciones](https://github.com/yt-dlp/yt-dlp?tab=readme-ov-file#usage-and-options).

Las otras opciones son muy directas:

| Opción | Para qué sirve |
|--|--|
| -x | Descarga solo el audio. |
| --split-chapters | Hace justo que nos separe el audio en archivos por capítulos. |
| --audio-quality 0 | Setea la calidad del audio al máximo disponible. |

Esto se descarga el audio completo del vídeo y luego extrae cada capítulo por separado nombrando cada archivo con el título del vídeo, el número del capítulo con 3 dígitos, el título del capítulo y, entre corchetes, el id del vídeo.

Por ejemplo:

**All She-Ra and the Princesses of Power Songs - 002 I'm Sea Hawk (Jordan Fisher) [AmpJD5yTqPo].mp3**

***

Ahora, Tuerto del futuro, cuando te encuentres otra vez con un vídeo por capítulos del que quieras rapiñear los audios, no tendrás que hacer todo el proceso de nuevo.

{% set config = {
  content: [
    'Gracias, chato.',
    'De na.'
  ]
} %}
{{ macros.dialog(config) }}
