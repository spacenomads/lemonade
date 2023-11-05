---
title: Prueba enero
featured_image: false
featured_alt:
featured_color: fabada
ya_image: false
ya_alt:
reading_time: 4
date: 2023-01-09
draft: true
tags:
clickbait: ¿Cómo nos llevamos con el JS?
cover_credits:
  link: https://unsplash.com/@owlonduty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
  author: Huseyin Cakir
  site: Unsplash
---
{% import "components/post/macros.njk" as macros %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure vero accusantium temporibus eum doloribus, consequatur, laboriosam dolor doloremque nobis laudantium.

 {{ macros.tldr(['Hay varias generaciones repitiendo una frase que nunca  tuvo sentido.']) }}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure vero accusantium temporibus eum doloribus, consequatur, laboriosam dolor doloremque nobis laudantium. Assumenda laboriosam corrupti debitis excepturi laborum explicabo, est atque aspernatur dolore iure ducimus non ipsum quis inventore vel blanditiis distinctio maxime tempore error quae, impedit ratione asperiores reiciendis. Rerum ad, excepturi voluptatum deleniti debitis accusamus maiores quo nihil blanditiis laboriosam nobis recusandae fugiat sed corrupti veritatis amet commodi dignissimos molestias!

## Título 2

Deleniti [debitis accusamus](#2) maiores quo nihil *blanditiis laboriosam* ~~nobis recusandae~~ fugiat sed corrupti veritatis amet commodi dignissimos molestias!

![Gatico en taza roja](https://www.catster.com/wp-content/uploads/2015/06/tiny-persian-kitten-in-teacup1.jpg "Title de la imagen")

{% set imgConfig = {
  src: 'https://www.catster.com/wp-content/uploads/2015/06/tiny-persian-kitten-in-teacup1.jpg',
  alt: 'Gatico en taza roja',
  caption: 'Foto encontrada por <a href="https://duckduckgo.com/?t=ffab&q=cats&iax=images&ia=images&iaf=size%3ASmall&iai=https%3A%2F%2Fwww.catster.com%2Fwp-content%2Fuploads%2F2015%2F06%2Ftiny-persian-kitten-in-teacup1.jpg">ahí</a>.',
  mode: 'full'
} %}
{{ macros.img(imgConfig) }}

{% set imgConfig = {
  src: 'https://www.catster.com/wp-content/uploads/2015/06/tiny-persian-kitten-in-teacup1.jpg',
  alt: 'Gatico en taza roja',
  caption: 'Texto de pie de foto más largo que el comer, y que un día sin pan',
  max_width: 193,
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

{% set imgConfig = {
  src: 'https://www.catster.com/wp-content/uploads/2015/06/tiny-persian-kitten-in-teacup1.jpg',
  alt: 'Gatico en taza roja',
  caption: 'Pie de foto chiquitiqui :)',
  max_width: 50,
  mode: 'mini'
} %}
{{ macros.img(imgConfig) }}

***

Nisi veniam eos eius, minima fugit consequuntur aperiam temporibus sapiente cumque eum iure quibusdam illum veritatis ab ipsum dolor inventore sit vel eveniet neque odio eligendi non odit! Eum!




  {% set config = {
    content: [
      'May the forces of evil become confused on the way to your house.'
    ],
    author: 'George Carlin',
    cite: {
      work: 'Brave New World',
      url: 'https://www.huxley.net/bnw/four.html'
    }
  } %}

  {{ macros.quote(config) }}





Assumenda laboriosam corrupti debitis excepturi laborum explicabo, est atque aspernatur dolore iure ducimus non ipsum quis inventore vel blanditiis distinctio maxime tempore error quae, impedit ratione asperiores reiciendis. Rerum ad, excepturi voluptatum deleniti debitis accusamus maiores quo nihil blanditiis laboriosam nobis recusandae fugiat sed corrupti veritatis amet commodi dignissimos molestias! Nisi veniam eos eius, minima fugit consequuntur aperiam temporibus sapiente cumque eum iure quibusdam illum veritatis ab ipsum dolor inventore sit vel eveniet neque odio eligendi non odit! Eum!

{% set img = {
  filename: 'plantilla.png',
  alt: 'Lo que sea',
  caption: {
    label: 'Algo, algo'
  },
  type: 'full'
} %}

{% include "components/post/img.njk" %}
