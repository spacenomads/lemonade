---
title: Prueba enero
featured_image: false
featured_alt:
ya_image: false
ya_alt:
reading_time: 4
date: 2023-01-09
draft: true
tags:
clickbait: ¿Cómo nos llevamos con el JS?
permalink: blog/prueba-enero/
cover_credits:
  link: https://unsplash.com/@owlonduty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText
  author: Huseyin Cakir
  site: Unsplash
---
{% import "components/post/macros.njk" as macros %}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure vero accusantium temporibus eum doloribus, consequatur, laboriosam dolor doloremque nobis laudantium.

 {{ macros.tldr(['Vaya tela', 'Vaya toalla']) }}

Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam iure vero accusantium temporibus eum doloribus, consequatur, laboriosam dolor doloremque nobis laudantium. Assumenda laboriosam corrupti debitis excepturi laborum explicabo, est atque aspernatur dolore iure ducimus non ipsum quis inventore vel blanditiis distinctio maxime tempore error quae, impedit ratione asperiores reiciendis. Rerum ad, excepturi voluptatum deleniti debitis accusamus maiores quo nihil blanditiis laboriosam nobis recusandae fugiat sed corrupti veritatis amet commodi dignissimos molestias! Nisi veniam eos eius, minima fugit consequuntur aperiam temporibus sapiente cumque eum iure quibusdam illum veritatis ab ipsum dolor inventore sit vel eveniet neque odio eligendi non odit! Eum!




  {% set config = {
    content: [
      'May the forces of evil become confused on the way to your house.',
      'Otra frase'
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
