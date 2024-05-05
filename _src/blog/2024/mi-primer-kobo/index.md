---
title: Mi primer Kobo y mi primer día
featured_image: kobo-cover.jpg
featured_alt: Kobo Clara Colour sujetado con la mano izquierda
ya_image: mini-kobo.jpg
ya_alt: Kobo Clara Colour en chiquitico
reading_time: 3
date: 2024-05-05
draft: false
tags: [e-reader, kobo]
categories: [blog, review]
clickbait: Y tú, ¿Qué estás leyendo?
---
{% import "components/post/macros.njk" as macros %}

Me he pillado un lector de ebooks y este ha sido mi aterrizaje en el mundo de la tinta electrónica y **el color**.

## Por qué ahora?

Aprovechando que ahora leo más y he encontrado un sitio bien chulo en Alcorcón, [Out Of The Cup](https://x-madrid.com/taste/out-of-the-cup/), he jubilado mi iPad Mini 1 que ha aguantado mucho, pero ya no le daba más la vida ni la batería, y me he buscado un lector de libros electrónicos.

¿Cuál? Un [Kobo Cara Colour](https://es.kobobooks.com/products/kobo-clara-colour).

## Por qué este modelo?

Pues me he estado mirando medio Youtube de reviews y comparaciones. Al final lo que ha pesado más ha sido:

* Al final no quiero un kindle por que estoy un poco saturado de amazon y me gustaría depender menos de esta gente.
* De las alternativas, el Kobo es del que he leído mejores comentarios.
* Quiero que sea bonico, y los asimétricos más ergonómicos no van conmigo.
* Quiero que sea compatible con eBiblio (aunque 21 días de préstamo me parece poco).
* Mi mochila de la bici es chiquita, y tiene que caber (cabe).
* Quiero poder leer de noche :)

El extra del color **ERA NECESARIO**, lo sabes tú y ahora lo sé yo. o al revés.

> Este modelo es chiquito, de 6", a 300 ppp para blanco y negro, y 150 ppp para color, resistente al agua y con USB-C.

## Experiencia

La experiencia de lectura, siendo el primer día, me ha molado bastante. Aún siendo una pantalla pequeña y no habiendo dedicado tiempo suficiente para aprenderme los controles y gestos.

Sobre lo que es la lectura, pensaba que iba a haber menos diferencia entre la pantalla del iPad y la de tinta electrónica, **y me alegra ver que LA HAY**.

El tema colores... son suavitos, **más un primer paso**, aún así agradezco ver las portadas e imágenes a color.

Que el dispositivo sea pequeño también lo cuento como una ventaja siendo además, cómodo de sostener en el tiempo.

---

## Cosas que me han molado menos

Alguna cosa no me ha gustado o molado menos, pero tiene que ver más con problemas del formato ebook o decisiones de marca.

### Los ebooks son un mundo aparte

Me da la sensación de que más que un estándar hay espacios en los formatos para que cada uno tenga unos ajustes diferentes, de manera que los propios ajustes del dispositivo no sirvan igual para todos los documentos.

### Kobo by fnac (publicidad)

El dispositivo tiene una personalización para que cuando se veda por terceros, en este caso la fnac, puedan incluir una pantalla al inicio. Esto es indecente, pero fácil de solucionar conectándolo al ordenador y tocando un archivo de texto.

Yo lo compré en la fnac y al arrancar el dispositivo me aparecía una pantalla de "Kobo by fnac"... **¡Sobre mi cadáver tuerto!**

Es un poco tricky si no estás acostumbrado, pero nada imposible.

1. Se conecta el dispositivo al ordenador.
2. Se abre con un explorador de archivos asegurándose de que se muestran los archivos ocultos.
3. En la carpeta oculta **.kobo/** hay un archivo **affiliate.conf**.
4. Dentro cambiamos el valor de affiliate a «**Kobo**».
5. Desconectamos, apagamos, encendemos y **¡a tomar por uclo la pantalla de publicidad del vendedor!**

En mi caso cambié la personalización de la fnac por el valor por defecto, que es que me cago en Crom, hay que ser rata para colarte publicidad así.

<div class="line-numbers">

```text
[General]
affiliate=FNACSpain
```

Y sustituirlo por

```text
[General]
affiliate=Kobo
```

</div>

---

El balance sale a devolver, estoy muy contento con la compra aunque intentaré o volver a la fnac en otros 10/15 años. O más.

Por cierto, estoy leyendo [**La compañía amable** de Rocío Vega](https://lectura.social/book/34989/s/la-compania-amable), y me está gustando mucho.
