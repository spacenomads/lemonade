---
title: Mazmorreo diario con Rogule
featured_image: post-rogule.jpg
featured_alt: Sobre un fondo de un prado se ve una ventana de navegador de Safari (con las tres bolitas de colores, rojo, amarillo y verde) con la web del juego rogule abierta. Aparece el emoji del elfo, una breve introducción y el botón verde de iniciar partida.
ya_image: mage.png
ya_alt: Emoji del mago con su sombrero de pico, barba y báculo. Además tiene un parche en el ojo izquierdo.
reading_time: 6
date: 2024-05-19
draft: false
tags: [game, roguelike, tutorial]
categories: [blog, tutorial]
clickbait: ¿Has salido hoy de la mazmorra?
---
{% import "components/post/macros.njk" as macros %}

**[Rogule](https://rogule.com)** es uno de estos juegos diarios que inunda las mañanas en las redes sociales.

{{ macros.tldr(['En esencia es un <strong>roguelike</strong> y trata de salir de una mazmorra con sus monstruos, sus laberintos y, claro, sus tesoros.']) }}

Un roguelike es un tipo de <abbr title="role-playing game">rpg</abbr> de arrastrarse por una mazmorra, con niveles generados aleatoriamente, combate por turnos y en los que igual se muere todo el rato. Igual.

En Rogule aparecemos en una mazmorra diferente cada vez y, claro, nadie quiere quedarse allí; hay que salir.

{% set config = {
  alt: 'Vista inicial de una mazmorra, usando emojis y cuadrados se crea el espacio con sus pasillos y recovecos. Nuestro personaje es un elfo (o elfa o elfe), en la imagen hay rocas, plantas y troncos, además de monstruos como el zombie y el murciélago.',
  caption: 'Ejemplo de mazmorra.',
  mode: 'full',
  src: 'img/rogule-map.png'
} %}
{{ macros.img(config) }}

## Las reglas

El juego nos procura una reglas básicas, pero vamos a ver alguna mecánica más que igual nos ayuda para que no nos muerdan demasiado o la liemos parda.

{% set config = {
  alt: 'Listado de instrucciones básicas',
  caption: 'Reglas del juego.',
  mode: 'full',
  src: 'img/rogule-rules.png'
} %}
{{ macros.img(config) }}

Se trata de un rpg por turnos, esto es importante tenerlo en cuenta porque mientras no avancemos el juego no sigue, vamos, que no hay prisa ninguna ni necesidad de tomar decisiones locas.

El juego nos indica que el **.** se usa para descansar; en realidad es más un pasar turno, pero lo veremos más adelante.

### Combates y objetos

Los combates se resuelven con tiradas aleatorias. comenzamos con unos valores de ataque y defensa que se pueden ir mejorando derrotando monstruos o recogiendo **escudos** (defensa) y/o **armas** (ataque). Sólo hay un tipo de icono de defensa y dos que mejoran el ataque, una daga y un hacha.

El nivel de cada monstruo viene indicado con **un número sobre la criatura**, y es el máximo daño que puede hacer en un ataque.

{% set config = {
  alt: 'Barra de estado del porta, sale el emoji del personaje, el nivel actual (en este caso 3) y diez cuadrados verdes de vida.',
  caption: 'Nuestra barra de estado',
  max_width: 400,
  mode: 'center',
  src: 'img/rogule-status-bar.png'
} %}
{{ macros.img(config) }}

Nosotres empezamos con **nivel 3** y **10 puntos de vida**, y podemos subir hasta **nivel 5**.

No conozco la mecánica exacta, pero escudos y armas nos **aumentan la posibilidad de éxito en nuestras tiradas**. Todes, podemos acertar o fallar, recordemos que al final son tiradas, incluso con modificadores a nuestro favor, nadie le asegura nada a nadie.

Las plantas, troncos, piedras que nos encontramos por el camino, al igual que los monstruos, pueden soltar objetos o equipo.

* **Castañas, diamantes y setas** no parecen tener impacto en el juego más allá de llevárnoslos a casa si salimos.
* **Escudos, dagas y hachas** mejoran nuestras probabilidades de éxito en el combate.
* Las **pociones de vida** (vasos) nos recuperan la salud hasta 3 puntos.

> No hay que perder de vista que el objetivo no es limpiar la mazmorra, sino **encontrar la puerta roja y salir**.

## Las otras reglas

Juego tras juego se van viendo, o sospechando, más en detalle las diferentes mecánicas o tácticas.

### Los monstruos

Dentro de la mazmorra nos podemos encontrar varias criaturas:

* Animales: rata, murciélago, jabalí, lobo y T-Rex.
* Monstruos: fantasma, ogro, vampiro, genio, zombie y dragón.

menos la rata, todas las criaturas te persiguen e intentan rodearte para atacarte a la vez. Suele ser mega buena idea planificar bien lo que vas a hacer y buscar combates 1 a 1 o en pasillos de manera que no le demos una ventaja a quien viene con los colmillos afilados.

#### La consola

Cada criatura te detecta a una distancia diferente, esto se puede ver en **la consola** del navegador si se tiene curiosidad. Durante el juego se va ofreciendo información sobre lo que está pasando.

Nada más empezar pinta información de la mazmorra generada así como de los monstruos y objetos.

{% set config = {
  alt: 'Objeto resumen de los objetos y criaturas de nuestra mazmorra',
  caption: 'Objeto resumen de los objetos y criaturas de nuestra mazmorra',
  mode: 'full',
  src: 'img/rogule-console.png'
} %}
{{ macros.img(config) }}

Cada criatura tiene una propiedad de **activación** en la que indica desde cuán lejos te ve.

En el ejemplo se puede ver que el zombie tiene una activación de 5 mientras que el lobo tiene una de 20, esto quiere decir que el lobo te detecta desde lejos mientras que el pobre zombie tiene que estar bien cerca para saber que existes y que tu cerebro puede saber bien rico.

### Huir

Intentar correr hacia la salida es, desde luego, una opción, pero suele ser una mala opción y que acabes en una esquina con más dientes encima de los deseados.

### Los "dados"

Vamos a hacer un breve inciso para recordad que los combates se resuelven por tiradas aleatorias, y estas pueden salir muy bien o muy mal. Morir, vas a morir, igual es más evidente frente a un dragón, pero una buena tirada la puede tener cualquiera, hasta nosotres.

### Curarse

También te puedes curar sin las pociones, solo necesitas algo de tiempo: cada 100 acciones recuperas hasta 1 punto de vida.

Lo normal, tras un enfrentamiento que ha ido un poco de aquella manera, es buscar un sitio seguro dónde nadie te aceche y spammear el **.** hasta que recuperes el aliento, intentando conservar las pociones que encuentres para momentos más apurados.

{% set config = {
  alt: 'Cruceta de control del personaje, aparecen las flechas en las 4 direcciones y en el centro, el punto.',
  caption: 'Controles.',
  max_width: 200,
  mode: 'center',
  src: 'img/rogule-controls.png'
} %}
{{ macros.img(config) }}

Si tienes una pantalla táctil puedes usar la botonera que aparece abajo a la derecha, o las teclas de tu teclado.

### Circuitos

A veces en la mazmorra te encuentras peque˜nos circuitos que puedes usar para hacer correr a quien te persigue colocándote delante, apartándoles de la zona que guardan o simplemente para ir recuperando vida.

Si los usas para recuperar vida, recuerda que no es ideal y que las criaturas a veces se te dan la vuelta y toman otro camino.

### Choques contra los muros

Hay un raro, quizás un bug, en el que si estando junto a un muro, te mueves de nuevo en su dirección, de repente el pasar turno con el **.** sigue funcionando, pero no cuenta como acción para curarte, y tendrías que separarte de muro para que pueda volver a contar para esas 100 acciones.

### Progreso y estadísticas

Tanto el progreso como tus estadísticas, partida tras partida se almacenan en el navegador (nerd alert: en el localStorage), por tanto, si borras los datos almacenados, empezarás de cero.

Si cambias de navegador los nuevos datos se guardarán en ese navegador y no tendrás acceso a los anteriores.

Esto no es muy relevante, pero se van guardando los éxitos, derrotas así como las rachas actual y máxima.

***

Y esto es un poco el juego hasta ahora. Si te resulta más cómoda esta información en vídeo, aquí tienes uno ;)

{% set config = {
  title: 'Tutorial de Rogule! 🧝🏼 + 🐀🦇👻🐗🐺👹🧛🧞🧟🐉🦖',
  width: '100%',
  aspect_ratio: '16 / 9',
  src: 'https://veedeo.org/videos/embed/fbc6fd73-01da-4d99-bc07-f03fdecbbac5'
} %}
{{ macros.video(config) }}
