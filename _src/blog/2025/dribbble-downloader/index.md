---
title: Dribbble downloader v1.0.0
post_id: dribbble
featured_image: post-dribbble-cover.jpg
featured_alt: Bola de baloncesto de Dribbble en sus rosas, con un fondo tb en rosa
featured_color: ea4b8b
ya_image: dribbble.png
ya_alt: Bola de baloncesto de Dribbble en gris.
reading_time: 5
date: 2025-04-20
draft: false
categories: [tools]
tags: [dribbble, downloader]
excerpt: Los jardines con cerca se tienen que acabar y cuento cómo me he hecho una aplicación para descargar mi contenido de Dribbble.
clickbait: ¿Lo has usado?
cover_credits:
  link: https://sidiostedalimones.com
  author: Chuck!
  site: sidiostedalimones
---
{% import "components/post/macros.njk" as macros %}

{{ macros.tldr(['Me he hecho una utilidad para descargarme las imágenes de la cuenta de Dribbble.']) }}

Hace poco Dribbble ha tomado la decisión de eliminar las formas de contacto públicas para que todas las transacciones pasen por ellos.

> A ver, es una decisión, como la mia de dejar de pagar y cerrar la cuenta.

El inconveniente es un poco lo de siempre: **¿y ahora qué pasa con el contenido?**

Esta gente tiene un sistema de exportación en la que solo te ofrecen un <attr title="JavaScript Object Notation" lang="en">JSON</attr> con todos tus datos. Bien, pero es que un JSON es un archivo de datos DE TEXTO, lo que quiere decir que tienes las <attr title="Uniform Resource Locator" lang="en">url</attr> de las imágenes que siguen en su plataforma. **Nada de descargarte un zip con todo**. Con todo tu contenido, que esta peña ponía la plataforma, pero sin el contenido de los usuarios no hubiese llegado ni a la semana dos.

Y es que siempre es la misma puat mireda:

1. Plataforma gratis para tal o pascual.
2. Conseguir base de usuarios que la rellene bien.
3. <em lang="en">Oops, we did it again!</em> Ahora nos olvidamos de los usuarios y jugamos como si todo esto fuese nuestro.

He probado varias herramientas y no funcionan como quiero, **así que me he hecho la mía**.

## La aplicación

Está alojada en un repo de [Codeberg](https://codeberg.org/oneeyedman/dribbble-image-downloader).

> El punto de partida es claro: **necesito una aplicación a la que le pase el JSON que me generan y se descargue todas las imágenes**.

Al principio pensé en hacer una aplicación web con la que me iba a sentir más cómodo, pero quería aprender y hacer algo divertido.

Esto en node es realmente facilico, parece una buena opción que se va a poder instalar en cualquier ordenador y, con unas instrucciones básicas, debería poder echarla a andar casi cualquiera.

Como hemos venido a jugar me puse algunas metas más:

- Tiene que poder funcionar con varios archivos. Yo tengo dos cuentas (personal y de equipo).
- Hay que renombrar los archivos que descarga para que sean fáciles de asociar al post correcto.
- Molaría generar un nuevo JSON con esta información añadida, para que sea aún más fácil asociar post e imagen.
- Quiero que descargue siempre la imagen a mayor calidad.
- La utilidad tiene que generar una nueva estructura de carpetas lista para meter en un <attr tile="Formato de compresión sin pérdida">ZIP</attr>.
- Ya que estamos, que haga todo lo anterior y genere el ZIP, listo para guardar en tu disco de backups (por ejemplo).
- Que añada al saco una pagina <attr title="HyperText Markup Language" lang="en">HTML</attr> que te permita ver desde local tus posts, e incluso que puedas subir esto a un servidor tuyo.

### Qué te da Dribbble

El archivo de exportación es tal que así:

```json
{
  "user": {
    "avatar_url": "",
    "bio": "",
    "created_at": "",
    "html_url": "",
    "links": {
      "web": "",
      "twitter": "",
      "github": ""
    },
    "location": "",
    "login": "",
    "name": ""
  },
  "shots": [
    {
      "id": 1,
      "title": "",
      "description": "",
      "images": {
        "hidpi": "",
        "normal": "",
        "one_x": "",
        "two_x": ""
      },
      "tags": [],
      "html_url": "",
      "published_at": ""
    }
  ]
}
```

De ahí me interesa descargar la imagen de avatar y la imagen a mayor calidad de cada elemento de "shots". Y todas estas imágenes están nombradas con un numeraco (id) con lo cual, si te las descargas todas a cholaquen va a costar saber cuál va con qué.

### La estructura

Como la idea de esto es tener una copia de mi contenido he querido hacer una estructura de carpetas para tenerlo ordenado, por lo que sea.

Esta es mi propuesta:

```txt
[usuario]
├── export.json
├── shots
│   └── [imágenes de los posts renombradas]
└── user
    └── [imagen de avatar]
```

Una carpeta por usuario que le pases a la aplicación donde tengas un JSON mejorado con las rutas de cada imagen descargada donde toca (posts y cuenta de usuario), y las imágenes en su carpetica correspondiente. **Como si no nos hubiésemos criado en una cueva de serpientes**.

Hasta aquí es dónde he llegado. Voy a ir cerrando una versión 1 y subiendo el repo por si le sirve a alguien.

## ¿Qué queda pendiente?

Pues alguna cosa:

- Todavía no genera el zip.
- Me gustaría hacer un diseñito de ese html y que lo incluyera.
- El código está con todas las vergüenzas en vivo. Quiero documentar el código con [JSDoc](https://jsdoc.app/), meterle un linter y distribuir mejor las funciones.
- Me molaría añadir tests.
- Yo he usado la cuenta de forma muy light y hay casos que no contemplo de características que han ido añadiendo con el tiempo como el uso de vídeos o múltiples imágenes.

Pero eso será otra historia.

***

A partir de ahora, al final de cada post, voy a contar un poco de qué va a ir el siguiente.

Voy a empezar una serie de diseño para web. No sé si voy a ir a cara perro llamándola "Puots diseñadores, me tenéis hasta los c..." o algo más moderado como "Como diseñar pensando en que luego viene un ser humano a maquetar". Posiblemente sea más tirando para la segunda.

Quiero plantear una serie de casos que se dan todos los días que no ayudan a poder maquetar mejor. Por lo que sea.
