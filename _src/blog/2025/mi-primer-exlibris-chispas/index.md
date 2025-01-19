---
title: Mi primer Exlibris, ¡Chispas!
featured_image: cover.jpg
featured_alt: Simulación de cómo quedará el exlibris sobre una textura de papel. Dibujo a línea. En un marco rectangular de bordes redondeados, estamos mi gato y yo abajo, yo con un libro y él (dormido) con un eReader sin batería. sobre nosotros hay una bombilla feliz colgando y, en el centro, el texto del Exlibris con nuestros nombres y el año en números romanos.
featured_color: d4d4d4
ya_image: stamp.png
ya_alt: Icono blanco de silueta de sello de madera, con la parte de caucho en negro, sobre círculo amarillo.
reading_time: 5
date: 2025-01-19
draft: false
categories: [bookcrossing, design, hobbies]
tags: [exlibris, grabado, linóleo, sello, diseño, trazado, ilustración, boceto]
excerpt: Como ya estoy leyendo de forma habitual y me siento un poco más seguro y menos impostor, me he propuesto hacerme mi primer Exlibris, a mis 51.
clickbait: ¿Tienes un Exlibris?
cover_credits:
  link:
  author: Chuck!
  site: sidiostedalimones
---
{% import "components/post/macros.njk" as macros %}

Como ya estoy leyendo de forma habitual y me siento un poco más seguro y menos impostor, **me he propuesto hacerme mi primer Exlibris**, a mis 51.



{% set quoteConfig = {
  word: 'Exlibris',
  note: 'Del lat. exlibris; literalmente \'de entre los libros\'.',
  content: [
      {
        gender: 'm',
        def: 'Etiqueta o sello grabado que se estampa en el reverso de la tapa de los libros, en la cual consta el nombre del dueño o el de la biblioteca a que pertenece el libro.'
      }
    ],
  synonyms: ['ex libris']
} %}
{{ macros.word(quoteConfig) }}

Empecé buscando ejemplos y hay desde simplezas hasta maravillas barrocas. Leí también que había medidas máximas y mínimas a tener en cuenta, pero que eran más unas guías.

Luego **encontré a mogollón de gente que se hacía los grabados** y tiene que molar, pero eso para el siguiente.

## El boceto

Este primero decidí que lo iba a hacer menos artesanalmente. Y empecé con un boceto de esos **de papel y lápiz**.

{% set imgConfig = {
  src: './img/sketch.jpg',
  alt: 'Boceto sobre papel de la idea para el Exlibris',
  mode: 'center',
  caption: 'Boceto a lápiz: aparecemos mi gato y yo leyendo en papel y eReader, y una bombilla por encima nuestro.'
} %}
{{ macros.img(imgConfig) }}

De primeras quería hacer algo totalmente diferente, algo con más diseño y con líneas más finas. Algo que tuviese más pinta de **sello serio**.

¿Cómo es la mente, eh? Tras varios días viendo Exlibris de todas las formas sigo como catalogando lo que he hecho de "**dibujo**" y no como algo "**serio**". Le he estado dando bastantes vueltas y lo hago independientemente de la cantidad de horas que haya invertido. Y cuando lo enseño **intento verlo a través de los ojos de la otra persona**, de verdad que lo intento, pero.

Bueno, el caso es que te pones a garabatear y probar y sucede una mezcla de "**la cabra tira al monte**" y "**la vida te lleva por donde te lleva**": me gustó la idea de los dos leyendo y que la biblioteca fuese compartida.

El detalle que más hizo que el dibujo tomase forma fueron **los bocadillos de diálogo**. Intentaba hacer unos bocadillos muy concretos que no conseguí recordar y luego los espacios no me cuadraban del todo, y la bombilla colgando que quería centrada, no podía estarlo y que cupiese todo, así que probando opciones acabé con la forma recuadrando la escena y eliminando los bocadillos.

## Primera versión

El sello iba a ser de 7x7 <abbr title="Centímetros">cm</abbr>. y lo acabé dibujando un poco más pequeño de 6 cm. En donde van a hacer el sello revisaron la imagen y algunos detalles eran demasiado chicos y se iban a perder, como el icono de la batería baja del eReader.

Ellos lo podían hacer más grande al trazarlo porque, aunque la imagen les valía, al final del día se necesita un archivo vectorial. **De ninguna manera quiero que se trace automáticamente**.

## Trazado en vectorial

A ver, que los sistemas de trazado han cambiado muchísimo desde que lo hacía con Corel, creo que 7, pero que hemos venido a jugar, y de alguna manera me sentí un poco mal por no haberlo pensado en un primer momento, así que **lo he re-dibujado en vectorial**.

Y tengo un pequeño vídeo del proceso:

<div style="position: relative; padding-top: 56.25%;" class="post__media"><iframe title="Exlibris: trazado-vectorial" width="100%" height="100%" src="https://veedeo.org/videos/embed/ea1cd078-64d2-4b35-b7f1-7e81136256f9" frameborder="0" allowfullscreen="" sandbox="allow-same-origin allow-scripts allow-popups" style="position: absolute; inset: 0px;"></iframe></div>

**Me ha costado sangre y lágrimas**. Durante unos años he estado como "cultivando" un estilo y luego he estado año y pico, o dos, sin dibujar y la mano se resiente. Vaya si se resiente.

Creo que lo que más me ha costado del dibujo ha sido **controlar la presión** para que la línea vaya "engordando" y luego cierre con cierta gracia, pero es que no entiendo la gestión de la presión como antes o no es mi mano. Me ha costado, lo que decía sangre y lágrimas.

Tras varias pruebas, conseguí hacer las líneas con un pincel más chico y varios trazos. Y esta es otra tara que llevo porque siento que esa línea la tengo que hacer de un solo trazo aunque **haya visto miles de vídeos de entintadores trabajando la línea pues como han ido necesitando**.

## Ajustes finales

Una vez que tengo los vectores queda tocar un poco la línea y trabajar el archivo.

Hay algunas curvas que tenía que **refinar** para que la curva quedase suave. Y también quería **agrupar** bien los elementos y **colocar** mejor algunos, y asegurarme que no quedaban formas a medio cerrar o con huecos. No es un trabajo muy emocionante, pero es lo suficientemente mecánico para poder concentrarme bien, **que no es poca cosa**.

{% set imgConfig = {
  src: './img/ex-libris-v0-3-0.jpg',
  alt: 'Diseño final a línea. En un marco rectangular de bordes redondeados, estamos mi gato y yo abajo, yo con un libro y él (dormido) con un eReader sin batería. sobre nosotros hay una bombilla feliz colgando y, en el centro, el texto del Exlibris con nuestros nombres y el año en números romanos.',
  mode: 'center',
  max_width: 400
} %}
{{ macros.img(imgConfig) }}

El viernes pasado envié el archivo final y estoy deseando ir a recogerlo y plasmarlo en ese primer libro. ¡**Que todavía no he elegido**!

***

En mi ciudad hay unas **casetillas y estanterías públicas** para dejar libros y que otra persona los pueda disfrutar. El **bookcrossing** de toda la vida, pero en oficial, y quiero participar con algunos libros que me han gustado. **Y ahora los tendré sellados**.
