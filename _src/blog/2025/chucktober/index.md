---
title: '#Chucktober'
post_id: chucktober
featured_image: chucktober-cover.jpg
featured_alt: Libreta de tapa dura y cinta de cierre elástica, también azul, con un bolígrafo transparente y negro. De fondo hay una superficie azul clarita y solo se ven los elementos como desde el centro hacia arriba.
featured_color: 65ace0
ya_image: pencil-end.jpg
ya_alt: Parte superior de un lápiz negro sobre un fondo como de papel
reading_time: 6
date: 2025-09-30
draft: false
future: false
categories: [projects]
tags: []
excerpt: Llega octubre y me he creado mi propio reto para hacer cada día del mes, el Chucktober.
clickbait: Entonces... ¿te animas?
cover_credits:
  link: https://unsplash.com/photos/a-blue-notebook-and-a-pen-on-a-blue-surface-ReYnnUhN0DA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash
  author: Cinthya González
  site: unsplash
comments: true
---
{% import "components/post/macros.njk" as macros %}

Llega octubre y vuelve a salir (en mi corazón) el tema del [**Inktober**](https://inktober.com/). ¿Será este el año que lo haga? ¿Cuál elegiré? **¿Y si me hago el mío?**

El **Inktober** es una historia que se hace en octubre de hacer 31 dibujos en base a una propuesta de temas, uno por día.

Del Inktober han salido infinidad de versiones, mis favoritas son el **Batober** y el **Uglytober**. El año pasado intenté el Uglytober y aguanté nada menos que 15 días. Record tuerto absoluto. Mi favorito fue el sexto: [Hard rock panda](https://pixelfed.social/p/oneeyedman/748616840739094536).

{% set imgConfig = {
  src: './img/hard-rock-panda.png',
  alt: 'Panda roquero con chaleco y muñequera de cuero negros, con los brazos cruzados y los deditos rockeros!!! Y cresta de pinchos de pelo en la cabeza!',
  mode: 'center',
  max_width: 400
} %}
{{ macros.img(imgConfig) }}

Igual no parece muy en la línea del Uglytober, pero está hecho en 6 minutos de reloj. O menos.

## Y este año, ¿qué?

Pues este año quiero intentar hacer algo más asequible y voy a hacerlo de escritura. Preguntando y buscando tengo el **Writober** y el **Writever**, pero ya que voy, me hago el mío propio: el **Chucktober**.

Me está costando volver a escribir y esta me parece una excusa perfecta, pero tiene que ser un formato a lo que le pueda dedicar tiempo y que si luego me gusta pueda evolucionar, como unos **microrrelatos**.

También me gustaría hilar las historias con ese [bosque tenebroso](/blog/2025/el-bosque-tenebroso-de-mi-mente) del último post. Ya que se trata de la misma mente, me imagino que al estilo [roguelike](https://es.wikipedia.org/wiki/Videojuego_de_mazmorras) **cada noche, al caer inconsciente, apareces en una zona de ese bosque**.

Este **«pues me hago yo uno»** es de lo mejor que me llevo de Bellas Artes. En segundo nos enseñaban a hacernos prácticamente todo, lienzos, pinturas, herramientas de modelado y eso me ha ayudado mogollón en general.

Así que vamos a darle un poco de forma a esto.

## Reglas del Chucktober

Voy a poner 3, como en [Gremlins](https://trakt.tv/movies/gremlins-1984):

1. La primera regla del Chucktober es que **esto tiene que ser por diversión** y se puede hacer a cualquier ritmo, y reinterpretando lo que se quiera.

2. Dicho esto, **hay 31 temas como 31 días tiene octubre**. Lo ideal es que haya solo un tema principal, pero se pueden mezclar si se prefiere o resolver varios días en uno.

3. **Se puede usar el medio que se quiera**. Yo voy a usar microrrelatos (o relatos cortos), pero si encarta ¿por qué no hacer una foto o un dibujo?

Ahora, si quiero hilar las historias con un conductor común, al menos debo saber algunas cosas de cómo funciona este mundo y me gustaría empezar **aterrizando un poco el punto de partida de cada historia**.

### El punto de partida

**Cada día amaneces en el bosque tenebroso de tu mente**. Unas veces más en el borde y otras más en el interior.

En mi bosque tenebroso los bordes son más inestables que el interior ya que limitan con la realidad. Conforme te adentras se va estabilizando el paisaje y los elementos pueden permanecer de una vez a la siguiente.

## ¿Y si quiero participar?

Pues sin problema. Enlaza este post y usa el hashtag **#chucktober25**. Resuelve los temas como quieras, lo importante es divertirte.

Ahora, **si te animas, dame un toque por mail que vea lo que vas haciendo :)**

## Los temas

Me han costado bastante porque mi fuerte no es tomar decisiones, al menos no de las buenas, pero esta es la primera vez, no tiene que salir todo estupendo.

He buscado temas que me gusten o que quiera explorar en este «bosque tenebroso». Los únicos puntos fijos son «La puerta» y «La visita» como inicio y fin, y «El mar» para el día de mi cumpleaños:

{% set configColList = {
  ordered: true,
  cols: 2,
  items: [
    'La puerta',
    'La llamada',
    'El cuerpo',
    'El árbol',
    'La llave',
    'La muralla',
    'La hoguera',
    'Las huellas',
    'El dragón',
    'La risa',
    'El hambre',
    'La verja',
    'El mar',
    'La brújula',
    'La mano',
    'El martillo',
    'La cruz',
    'La figura',
    'La noche',
    'La carta',
    'El túnel',
    'La lluvia',
    'La guerrera',
    'El libro',
    'La isla',
    'La celda',
    'El anillo',
    'El intercambio',
    'El robot',
    'Los piratas',
    'La visita'
    ]
} %}

{{ macros.colList(configColList) }}


### ¿Y si quiero compartirlo en redes?

Pues me he hecho una imagen solo para eso. ¿Cómo te quedas?

{% set imgConfig = {
  src: './img/chucktober-2025.jpg',
  alt: 'Formato cuadrado con fondo de hoja de papel rayado para el Chucktober. De título aparece «#Chucktober» como si fuesen botones de un teclado, algunos girados. Se ve la lista de 31 temas para octubre, los hashtags para usar (#Chucktober y #Chucktober2025) y la url donde se detalla el proyecto (http://sidiostedalimones.com/blog/2025/chucktober). La lista es la siguiente: la puerta, la llamada, el cuerpo, el árbol, la llave, la muralla, la hoguera, las huellas, el dragón, la risa, el hambre, la verja, el mar, la brújula, la mano, el martillo, la cruz, la figura, la noche, la carta, el túnel, la lluvia, la guerrera, el libro, la isla, la celda, el anillo, el intercambio, el robot, los piratas y la visita.',
  mode: 'center',
  max_width: 500
} %}
{{ macros.img(imgConfig) }}

Además dejo un texto alternativo porque compartir está bien, pero que estamos en el maldito 2025.

{% set panelConfig = {
  type: '',
  content: [
    'Formato cuadrado con fondo de hoja de papel rayado para el Chucktober. De título aparece «#Chucktober» como si fuesen botones de un teclado, algunos girados. Se ve la lista de 31 temas para octubre, los hashtags para usar (#Chucktober y #Chucktober2025) y la url donde se detalla el proyecto. La lista es la siguiente: la puerta, la llamada, el cuerpo, el árbol, la llave, la muralla, la hoguera, las huellas, el dragón, la risa, el hambre, la verja, el mar, la brújula, la mano, el martillo, la cruz, la figura, la noche, la carta, el túnel, la lluvia, la guerrera, el libro, la isla, la celda, el anillo, el intercambio, el robot, los piratas y la visita'
  ],
  custom_icon: {
    icon: '👉',
    label: 'Mano con dedo señalando hacia la derecha'
  }
} %}
{{ macros.panel(panelConfig) }}

---

Pues este es mi proyecto para octubre. De verdad espero ser capaz de llevarlo y disfrutarlo.

Deseadme suerte o recordadme **tuerto**.

---

Voy a ir añadiendo los relatos también aquí.

{{ macros.chucktober(chucktober, 2025) }}


