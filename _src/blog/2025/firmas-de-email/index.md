---
title: Firmas de email
featured_image: firmas-cover.jpg
featured_alt: Sobre un fondo azul oscuro con el código HTML de una de las firma de email se ve la parte superior de la ventana de correo nuevo de Apple Mail.
featured_color: '031625'
ya_image: send.png
ya_alt: Simulación del icono de Apple Mail con su fondo azul y el icono de sobre resuelto con líneas blancas.
reading_time: 5
date: 2025-09-07
draft: false
future: false
categories: [hobby, email signature]
tags: []
excerpt: Una de las cosas que más disfruto de lo que sé hacer es diseñar y maquetar firmas de mails.
clickbait: ¿Tienes firma de email?
cover_credits:
  link:
  author: Chuck!
  site: sidiostedalimones
---

{% import "components/post/macros.njk" as macros %}

Una de las cosas que más disfruto de lo que sé hacer es **diseñar y maquetar firmas de mails**.

{% set panelConfig = {
  type: 'info',
  content: [
    'Me gusta hacer la distinción entre «<strong>lo que sé hacer</strong>» y mi trabajo como front.',
    'Son dos cosas distintas que se hacen con las mismas herramientas.'
  ],
  custom_icon: {
    icon: '🤔',
    label: 'Carita de pensando...'
  }
} %}
{{ macros.panel(panelConfig) }}

Igual es mi <span lang="es">guilty pleasure</span> de esos porque maquetar para mail es una mireda indecible, **PERO**.

> Hacer estas pequeñas piezas es como ese espacio que puedo **disfrutar de otra manera**, sin prisa o presión.

Digo que son «pequeñas» porque la propia información de la firma ya manda lo suficiente sobre la estructura, y no tiene sentido que haya muchos elementos. Por eso creo que **son muy agradecidas de diseñar**.

Para web sería otra historia, pero en mail vamos muy limitades si quieres que se vea en todos los clientes de correo.

En 27 años creo que es el formato que más he disfrutado con diferencia. También **el que he hecho más por gusto y con más tiempo para dedicarle**.

Estas son algunas de las primeras que hice:

{% set galleryConfig = [
  {
    src: './img/sidiostedalimones.png',
    alt: 'Firma (en correo nuevo de la aplicación que usase en el momento) primera para mi proyecto sidiostedalimones.com. Aparece la parte de arriba de un exprimidor Braun pixelado con mi nombre, cargo, correo y url.',
    classes: '--col-2'
  },
  {
    src: './img/iahorro.png',
    alt: 'Firma (en correo nuevo de la aplicación que usase en el momento) para iAhorro tras el rediseño en el que participé. El motivo gráfico principal es una llave cerrada negra acompañando a la palabra «iAhorro». Esta firma tiene muchos datos, como las redes sociales, cardo, correo, teléfono particular y dirección, teléfono y fax de la oficina.',
    classes: '--col-2'
  },
  {
    src: './img/murdock.png',
    alt: 'Firma (en correo nuevo de la aplicación que usase en el momento) más simple para la empresa Murdock. Tiene nombre, cargo, logo de la empresa, teléfono y id de skype. Esta en grises y verdes turquesa.',
    classes: '--col-4'
  }
] %}
{{ macros.galleryGrid(galleryConfig) }}

Muy al principio se hicieron verdaderas fantasías que sólo se podían resolver como imágenes si querías que se viese medio parecido en los diferentes clientes de correo. A mi siempre me gustó invertir tiempo en algún detalle gráfico y resolver el resto con texto, pero en mail nada es gratis.

Ahora tenemos las pantallas con alta densidad de pixels y para que las imágenes salgan definidas necesitamos imágenes más grandes a las que les forzamos el tamaño, generalmente vale con **el doble del tamaño final**.

Para estas últimas, esto del tamaño de las imágenes ha sido un poco tricky porque uso Apple Mail, y Apple lo hace todo fácil, pero a su manera.

{% set panelConfig = {
  type: 'info',
  content: [
    'Por si a alguien le sirve <a href="https://apple.stackexchange.com/questions/250967/how-to-stop-images-in-apple-mail-signature-is-being-magnified#answer-251012">aquí cuentan cómo impedir que Apple Mail haga la imagen de la firma demasiado grande</a>.'
  ]
} %}
{{ macros.panel(panelConfig) }}

Y estas son las últimas que hice para Sidiostedalimones y para Spacenomads.

{% set galleryConfig = [
  {
    src: './img/sidiostedalimones-v1.png',
    alt: 'Firma (en correo nuevo de la aplicación que usase en el momento) muy básica con un limón pixelado apoyado en un «suelo» ya que se ve la sombra y, debajo, se ve el nombre, cargo y url.',
    classes: '--col-4'
  },
  {
    src: './img/spacenomads.png',
    alt: 'Diseño de la firma sin la interfaz del cliente de correo. El motivo gráfico es un círculo con fondo como del espacio con estrellas y puntos luminosos, en primer problema un «asteroide» cae. Aparece además, el nombre, cargo y url. Aquí el texto está desplazado a la derecha para que la curva de «Carl» coincida con la del círculo.',
    classes: '--col-4'
  },
  {
    src: './img/lemon-v2-light.png',
    alt: 'Firma (en correo nuevo de la aplicación Apple Mail) con el limón pixelado dentro de un cuadrado gris claro con esquinas redondeadas para que si se activa el modo oscuro no quede raro, debajo, se ve el nombre, cargo y url.',
    classes: '--col-4'
  },
  {
    src: './img/lemon-v2-dark.png',
    alt: 'Firma (en correo nuevo de la aplicación Apple Mail con modo oscuro activado) con el limón pixelado dentro de un cuadrado gris claro con esquinas redondeadas, debajo, se ve el nombre, cargo y url.',
    classes: '--col-4'
  },
  {
    src: './img/lemon-v2-txt.png',
    alt: 'Firma (en correo nuevo de la aplicación Apple Mail) pero solo usando texto en fuente monoespaciada. En lugar del limón pixelado está el emoji del limón, cargo, separador punteado «------», cargo y url.',
    classes: '--col-4'
  }
] %}
{{ macros.galleryGrid(galleryConfig) }}

## Generador de firmas

En paralelo me estoy haciendo un generador de firmas al que puedas alimentar con plantillas y campos, pero **eso es otra historia**.
