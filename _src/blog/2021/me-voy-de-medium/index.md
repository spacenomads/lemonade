---
title: Me voy de Medium
featured_image: medium.png
featured_alt: Logo de la plataforma Medium en negro, sobre fondo gris clarito. Siguiendo sus guías de marca.
ya_image: adios.png
ya_alt: Emoji de la manita amarilla diciendo adios.
excerpt: Me gusta Medium, pero me voy. Quiero quedarme con lo bueno y tener margen de mejora por mi cuenta.
reading_time: 3
date: 2021-10-10
draft: false
tag: [blog]
clickbait: ¿A favor o en contra?
---
{% import "components/post/macros.njk" as macros %}

Me gusta Medium, pero me voy.

Al final no han sido los "tu controlas el contenido" tanto como querer poder hacer ciertas cosas a mi manera.

Siempre me ha dado un poco igual eso de que tú controlas tu contenido cuando al final ibas y te montabas la misma plataforma de publicación en tus servidores, que son tan tuyos como lo era la plataforma anterior.
En cualquier caso las diferentes opciones llevan años con una opción para exportar ese tu contenido, y con importadores para que lo muevas donde quieras.

Para mi esto nunca ha sido un problema, con el extra de que la parte más social (comentarios, likes/kudos, compartir) ya la tenían implementada. Y pensaba que me funcionaba bien.

Mirando un poco hacia atrás veo que he ido moviéndome a estructuras más simples, con menos cosas, y tras unos años con Médium (que ya es fácil de por sí) creo que necesito menos todavía.

En Médium me metí con muchas ganas (incluso he sido usuario de pago), aunque igual no he encontrado todo el contenido que quería. No lo he hecho porque está enterrado entre las 5 cosas que hace cada mañana la gente de éxito, los 20 tips para una relación sana o las 5 extensiones de VS Code que necesitas pero igual no lo sabes.

Quizás no he encontrado el contenido que quería, pero tampoco me he puesto yo a crear contenido en serio. El blog tiene sentido para mi en ciertos casos y no muy en serio, porque me canso.

Tengo parado Sidiostedalimones.com y he pensado en usar las cosas que he aprendido con generadores de estático para hacerme un blog con las cosas que me molaban de Médium, sin las cosas que no me molaban tanto o no uso, y con alguna (o la posibilidad) que quiero y no tengo ;)

De primeras voy a salir con una versión que funcione, y ya tengo cosas en el tintero que añadir por si veo que me aburro.

Me he hecho un esquema de cómo veo el proyecto.

{% set imgConfig = {
  src: './img/esquema.png',
  alt: 'Esquema del blog',
  mode: 'full'
} %}
{{ macros.img(imgConfig) }}

Y sobre este esquema voy a meter un [11ty](https://www.11ty.dev/markdown) que me convierta archivos [markdown](https://en.wikipedia.org/wiki/Markdown) en html. Además, puedo usar un poquito de [Nunjucks](https://mozilla.github.io/nunjucks/), que siempre mola.

Lo pensaba alojar en [GitHub](https://github.com) aunque esto no lo he acabado de decidir todavía. Puedo seguir donde estoy, ir a GitHub o incluso probar [Netlify](https://www.netlify.com/) que me permitiría editarlo desde el iPad en GitHub y que se publicase automáticamente. Tampoco lo tengo que decidir ahora.

## Qué pierdo?

Pues pierdo todo el tema social apoyado en la red de usuarios de Medium, los likes, las estadísticas y, de alguna manera, los comentarios. "De alguna manera" porque tampoco me acaban de convencer del todo. Puede que más adelante intente redirigirlo a twitter con un hashtag por post. Ya veremos.

Supongo que sortear lo que sí quiero es ya interesante de por sí como para justificar perderlo.

---

A ver qué tal va, o qué?
