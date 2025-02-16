---
title: Salir de Google II
featured_image: cover.png
featured_alt: Sobre fondo gris claro se ve el logo de Google transparente con línea punteada, como si faltase. Abajo hay cuatro recuadros con los colores azul, verde, amarillo y rojo corporativos.
featured_color: f4f5f6
ya_image: fy.png
ya_alt: En un círculo gris, aparece el emoji que hace la peseta
reading_time: 3
date: 2025-02-16
draft: false
categories: [google]
tags: []
excerpt: Me lo estoy tomando con calma, pero salir del ecosistema de Google no es cosa chica.
clickbait: ¿Te animas?
cover_credits:
  link:
  author: Chuck!
  site: sidiostedalimones
---
{% import "components/post/macros.njk" as macros %}

Migrar el mail es la parte fácil, aún quedan más: Calendar, Drive, Maps y **YouTube**.

{% set config = {
  content: [
    'Pero Chuck, con youtube no habíamos terminado?',
    'Ya te gustaría, solo pasamos los vídeos.'
  ]
} %}
{{ macros.dialog(config) }}

## Mail

El correo es quizás la parte más sencilla técnicamente. **Apuntas los registros al nuevo proveedor y ya estaría**.

Bueno, molaría **hacer una copia de seguridad**, eso siempre está bien.

Bueno, y pasar correos a la nueva cuenta es relativamente fácil, pero al final no lo es. Han sido **casi 20 años de cuenta "corporativa"** y me gustaría dejar cosas apartadas y limpiar morralla que he ido acumulado, y **esa es la parte que cuesta**.

Por ahora la voy a mover a **iCloud+** con la de Space Nomads. Por lo que pago, puedo hacerlo y realmente el paso duro es este. Si luego quiero sacarlo de mundo USA, pues ya irá rodado.

> Al final todo esto es por salir del agujero que es, y era, Google y que no vi en su momento. Por lo que sea.

Supongo que si no estuviese dentro del ecosistema de Apple haría otras cosas seguro, pero **vamos a ir a por un pozo cada vez**.

## Calendar

Este es relativamente simple porque de normal va a ir junto con el mail. Y pasar los eventos de un calendario a otro es medio trivial, pero igual no es súper necesario.

## Drive

Buah, con este la cagué muy fuerte con el paso de Space Nomads porque se quedó algún archivo y Google me dejaba cancelar el pago, pero no borrar la cuenta. Y supongo que en algún momento la terminarán de borrar ellos, pero se me quedó esa espina.

Espero esta vez hacerlo mejor.

## Maps y Youtube

Estos son las piedras en el camino, porque los otros rollos los mueves un poco donde quieras, pero l**a cantidad de esfuerzo colectivo que hemos invertido en estas dos plataformas es poca broma**. Y **la posición** que le hemos dado con tantísimo contenido.

Los mapas de funcionan bastante mejor si no te sales de ciertas ciudades y si estás buscando un vídeo, bueno...

### Maps

Por volumen, hay mogollón de información en la plataforma. Iba a escribir que "**tenemos**", pero este es el principal problema, que **la información la subimos nosotros, pero no la "tenemos", la tiene Google**.

Google Maps funciona muy decente en un sitio como Madrid, pero te mueves levemente, a Alcorcón, y de repente está todo bastante desactualizado. **Y si te mueves en bici, olvídate, que no te puedes ni fiar**.

Aquí la opción es [OpenStreetMaps](https://www.openstreetmap.org), lo que pasa es que es tirando a feote, aunque si tengo que invertir tiempo en añadir contenido, **prefiero hacerlo aquí** que en los perros del _"Don't be evil"_.

Tengo por ahí algún enlace para importar tus sitios de Google Maps en OpenStreetMaps, y espero que de poca guerra.

### YouTube

El mover los vídeo a una instancia (federada) de Peertube, [ya está hecho](/blog/2025/adios-google-hola-peertube/). El problema son **los canales que sigo en YouTube**. Esta gente no va a salir de la plataforma en un futuro cercano, aunque se va haciendo.

De primeras **el objetivo es dejar de pagar el Google Workspace**, así que limpiaré/mudaré suscripciones y lista a la cuenta gratuita de GMail.

En un segundo paso, **pasaré estas suscripciones a mi lector de RSS**, y eso mejorará algo.

Por cierto, **YouTube está a reventar de vídeos hechos por ia**, pero es una cosa abrumadora.

***

Espero que con estos movimientos vayamos recuperando un poco esa internet que ya no es nuestra.
