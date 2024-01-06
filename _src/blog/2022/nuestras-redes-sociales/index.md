---
title: Nuestras redes sociales
featured_image: ollie-v2.jpg
featured_alt: Plano cerrado de la cara de Ollie, el pajarito de Twitterrific, enfadado con los ojos rojos y echando humo por la nariz
ya_image: bye.png
ya_alt: Versión en pixel art de la mitad de la ilustración, en una rejilla de 6x6
reading_time: 5
date: 2022-05-16
draft: false
categories: [rrss, web0]
tags: [redes sociales, mastodon, pixelfed]
description: Resumen del problema actual con las redes sociales, y qué opciones tenemos.
clickbait: ¿Te vienes o qué?
---
{% import "components/post/macros.njk" as macros %}

Con internet vino una nueva forma de conectar entre nosotras. La misma de siempre pero nueva. Y nos hemos ido adaptando a cada paso.

Las comunidades de chats no han parado de crecer, evolucionar e integrarse, hasta el punto que muchísimas aplicaciones traen de serie un sistema más o menos maduro de "amigos". Gracias a esto hemos saltado de nuestro barrio/ciudad a relacionarnos en una escala mucho mayor, a conocer gentes y costumbres que de otra manera serían inalcanzables.

Este camino que se empezó en pequeños grupos con el gesto torcido de un mayoría que ha sido mayormente absorbida y que ahora vemos como parte de la fauna habitual.

Cuando una comunidad está creciendo todo es vino y alegrías, pero luego empieza a tener un tamaño y aquí estamos.

## Twitter, por ejemplo

Me apunté en 2007, poco después de su lanzamiento, y ha sido un viaje estupendo hasta el punto de que está totalmente integrada en mi día a día.
Puedo seguir a un montón de gente diferente, mantenerme más o menos informado, he conocido a gente estupenda e incluso proyectos en los que currar.

Ahora, desde ese 2007 (empezó en 2006) ha cambiado casi todo, sobre todo que somos más. Poner ese "somos más" en contexto es hablar de que ahora tienen cuenta gente que estaba más alejada de la tecnología: famosos, marcas y partidos políticos.

No es que antes fuese maravilloso, es que éramos pocos con más puntos en común y ahora se parece más a un reflejo de la realidad.

Este aumento de alcance nos trae nuevos problemas y soluciones, el primero es que el volumen de datos/contenido ya no es tan lateral y siempre sale alguien que quiere rentabilizarlo.

> Recordemos que aunque es cierto que mayormente nadie "paga" por Twitter, **el contenido lo generamos nosotros**, y sin ese contenido Twitter no puot vale nada.

## El algoritmo

En toda esta gestión se están haciendo usos de sistemas automatizados que realmente no nos aportan nada a los usuarios. Lejos de descubrir/recomendar hemos acabado teniendo timelines desordenados con posts que tienen más papeletas de generar una interacción y hemos perdido totalmente el componente humano en la red social.

Es súper normal escuchar en redes como Twitter o Instagram que  ya no ves los posts de alguien o que no ves ciertos posts.

> Descubrir gente que no te interesa es más fácil que nunca, a costa de perderte a los que activamente quieres seguir.

De repente nos hemos visto dentro de una dinámica para "contestar" a ese algoritmo que te hace publicar ciertas cosas y no otras.

Un caso muy claro se ve en instagram: si tu publicación no genera interacciones se verá menos y es más fácil interactuar con un reel que con un post. De esta manera, se fuerza a que generes contenido sin parar porque si no, caerás en la invisibilidad. **La calidad de esta interacción importa menos que el hecho en sí.**

Estamos inmersos en unas dinámicas de consumo y generación de contenido constante y no creo que esto sea lo queramos.

Para nada.

## Y qué podemos hacer?

Mucha gente se está apartando de las redes un poco para recuperar sus rutinas, sus rollos y alejarse de ese ambiente tan presionado. Y está guay.

También podemos un poco recuperar esos espacios nuestros. Esos espacios más humanos.

Tenemos otras redes donde ahora es todo campo, pero sí que nos tienen a nosotros como centro. No hay un algoritmo, ni intereses empresariales. **Y además vienen con una serie de ventajas**!

## Redes abiertas

Principalmente vengo con dos alternativas a Twitter e Instagram: **Mastodon** y **Pixelfed**.

De alguna manera son proyectos "nuevos" y a veces pueden parecer un solar, principalmente porque no hay un algoritmo que lo rellene.
Vas a poder elegir a quién sigues y cuánto contenido quieres aportar.

### Mastodon

No es exactamente igual que Twitter, que es un producto único, sino como una serie de comunidades independientes y autogestionadas hablando entre ellas.

Lo vas a poder usar igual, tiene aplicaciones y cosas que molarán más y otras menos.
Obviamente la principal pega no es la falta de gente sino la falta de tu gente. Poco a poco.

Desde que estoy usando Mastodon más activamente me he construido una buena lista de ilustradores y ya voy teniendo a más gente en el timeline. Siempre lo digo por twitter: **Solo nos faltas tú**.

[https://joinmastodon.org/](https://joinmastodon.org/)

{% set imgConfig = {
  src: './img/logo-mastodon.png',
  alt: '',
  title: 'Icono de Mastodon',
  mode: 'mini'
} %}
{{ macros.img(imgConfig) }}

### Pixelfed

Te imaginas un sitio donde poder compartir tus fotos y ya? Sin tener que meter stories ni reels, ni preocuparte porque quien te sigue no va a saber que has puesto algo nuevo? Pues eso es Pixelfed.

Igual que pasa con Mastodon no es un único lugar sino bloques conectados entre sí, y con los de Mastodon! Cómo te quedas? **Puedes seguir a alguien de Pixelfed desde tu cuenta de Mastodon**.

Por ahora creo que no hay aplicación, pero realmente es una webapp muy completa. Obviamente hay margen de mejora, entre otras cosas el almacenamiento, que ahora mismo está en 7GB [y planean aumentarlo](https://mstdn.io/@pixelfed/101294305537194829).

[https://pixelfed.org/](https://pixelfed.org/)

{% set imgConfig = {
  src: './img/logo-pixelfed.png',
  alt: '',
  title: 'Icono de Pixelfed',
  mode: 'mini'
} %}
{{ macros.img(imgConfig) }}

---

Esto no es un cambiar para volver a cambiar, ni un vámonos por Elon Musk o el enésimo comprador…  Yo lo veo como un replantear algo que no está funcionando.

**Podemos tener una redes sociales mejores, pero no si nos quedamos donde estamos**.
