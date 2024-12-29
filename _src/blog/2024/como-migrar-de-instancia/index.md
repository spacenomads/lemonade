---
title: Cómo migrar de instancia
featured_image: cover.jpg
featured_alt: Portada de las mini guías. Hoy, cómo migrar de instancia.
ya_image: masto.svg
ya_alt: Logo simple de Mastodon en azul moradete.
reading_time: 8
date: 2024-12-29
draft: false
categories: [guía]
tags: [mastodon, migrar, instancia]
description: ¿Quieres migrar de instancia y no te aclaras? Yo te lo cuento.
clickbait: ¿Te ha servido esta guía?
---
{% import "components/post/macros.njk" as macros %}

{{ macros.tldr(['En Mastodon, y en el fediverso, puedes cambiar de instancia cuando quieras. <strong>El proceso es bastante automático</strong>.', 'Solo ten en cuenta que hashtags seguidos, filtros, bookmarks, bloqueos, muteos y las listas las tienes que pasar tú, y que <strong>los posts no se pasan a la nueva cuenta</strong>.']) }}

Hay un sistema para migrar de instancia que se ocupa casi de todo y que deja un mensaje en tu anterior perfil para que se sepa que te "mudaste".

## ¿Por qué querría mudarme?

Pues hay muchas razones. Puede que en tu instancia la moderación no vaya muy bien, o puede que quieras ir a otra donde están tus colegues, o puede que te guste el nombre de otra instancia más, o no cumplas los requisitos de tu instancia actual, o que vaya a cerrar, o algo totalmente diferente. En una red de instancias federadas esto es una opción.

## Vale, quiero mudarme/migrar, ¿cómo lo hago?

Vamos a ver en qué consiste, qué pasos se dan de forma automática y cuáles tienes que dar tú. Primero lo vemos por encima de manera que lo tengamos en la cabeza como idea y luego vamos al detalle.

Para migrar de instancia necesitas:

1. Hacer una copia de seguridad de tus datos y **no borrar la cuenta actual**.
2. Crear una cuenta en la instancia nueva.
3. En la instancia nueva tienes que marcar tu cuenta como que migras desde otro servidor.
4. En la instancia antigua tienes que marcar tu cuenta como que vas a migrar a otro sitio.
5. Dar un poco de tiempo porque el sistema es automático, pero no inmediato; puede tardar hasta unas horas.
6. En la instancia nueva hay que importar los datos que faltan.

Y ya estaría.

> **Tu cuenta antigua no necesitas borrarla**.<br>Los posts se quedan allí y el proceso de migración coloca un mensaje para que quien llegue, sepa que te has mudado.

## Vamos al turrón

Ya tenemos más o menos un esquema de lo que queremos hacer, ahora **hay que hacerlo**.

### 1. Copias de seguridad

En la cuenta actual/antigua (todavía no se ha migrado nada) vamos a ir a **preferencias**.

{% set imgConfig = {
  src: './img/00-preferences.png',
  alt: 'Localización de las preferencias desde el perfil de Mastodon',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Ahora nos vamos a **Importar y exportar > Exportar**. Y nos vamos a descargar todos esos archivos CSV.

Los [CSV](https://es.wikipedia.org/wiki/Valores_separados_por_comas) son archivos de texto con datos separados por algún carácter, no tiene que ser una coma, aunque el nombre sea **Comma-separated values**.

{% set imgConfig = {
  src: './img/01-export.png',
  alt: 'Listado de archivos CSV que nos queremos descargar.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Estos archivos **los vamos a usar más adelante para importarlos en la nueva cuenta**.

> El archivo de posts y media (imágenes, vídeos y audios) no es necesario, aunque siempre es buena idea.

Hay dos temas que son un poco más *trickies* porque ni se pasan automáticamente ni tampoco se importan o exportan. Son los hashtags que sigues y los filtros que tengas.

Pero no pasa nada porque vamos a ver cómo se hace.

#### Hashtags seguidos

Para los hashtags que seguimos nos vamos a nuestro perfil y buscamos **los tres punticos**, que despliegan una serie de opciones.

{% set imgConfig = {
  src: './img/02-hashtags.png',
  alt: 'Opción para ver los hashtags que seguimos.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Esta opción nos lleva a la pantalla con el listado de hashtag que seguimos y lamentablemente hay que apuntarlos uno a uno.

**Old school**, en una libretica, o en una nota digital, como los modernos.

{% set imgConfig = {
  src: './img/03-hashtags.png',
  alt: 'Listado de hashtags que seguimos.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

**¡No juzgarme por mis hashtags! Me ha dado pereza editarlo para que no se vean.**

#### Filtros

Los filtros es otro "lamentablemente". Vamos a **Preferencias > Filtros**:

{% set imgConfig = {
  src: './img/04-filters.png',
  alt: 'Filtros que tenemos configurados.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Y aquí iremos uno a uno, editando y apuntando cómo los tengamos ajustados. ¿Ves de dónde viene el "lamentablemente"?

**Igual que antes, me ha dado pereza editarlo, intentad no juzgarme. Intentadlo bien**.

#### ¿Nos hemos dejado algo?

Pues puede, el perfil no tengo claro si se rellena solo o no, pero es un buen momento para apuntar lo que necesites y rellenarlo en el siguiente punto, al crear la cuenta. Acuérdate de la imagen del avatar y la del banner ;)

### 2 y 3. Crear la cuenta nueva en la nueva instancia

Aquí hay poco que contar: crea la cuenta en la instancia que hayas elegido e inicia sesión.

Ahora es un buen momento para rellenar el perfil.

Ahora vamos a ir a **Preferencias > Cuenta > Ajustes** (no sé los nombres exactos en español).

{% set imgConfig = {
  src: './img/10-account.png',
  alt: 'Sección de cuenta.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Abajo del todo tenemos dos opciones, **Ir a una cuenta diferente** y **Moviéndose desde una cuenta diferente**.

Estas dos opciones están en el apartado de cuenta de tus dos perfiles.

* La segunda la usaremos en la cuenta nueva (este paso tiene que ser el primero)
* La primera la usaremos en la cuenta antigua.

Entonces, ya que estamos en la cuenta nueva, vamos a esa segunda opción para decirle a la cuenta nueva de dónde vamos a venir.

{% set imgConfig = {
  src: './img/11-moving-from-a-different-account.png',
  alt: 'Pantalla para configurar de qué cuenta venimos a la cuenta nueva.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Nos saldrá un campo donde poner nuestra cuenta antigua, tiene que ser algo del tipo `@username@domain.ext`.
Y le damos al botón de "Crear alias".

### 4. Iniciar la migración desde la cuenta antigua

Ahora nos vamos a la cuenta antigua, iniciamos sesión y nos vamos a **Preferencias > Cuenta > Ajustes** y buscamos esa primera opción "Ir a una cuenta diferente" y hacemos clic.

{% set imgConfig = {
  src: './img/12-move-to-a-different-account.png',
  alt: 'Pantalla para iniciar el proceso de migración de followers.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

Aquí vamos a decirle a la cuenta antigua que mueva los seguidores a la nueva. Para ello introduciremos el usuario nuevo (en formato `@username@domain.ext`) y **la contraseña de la cuenta actual**. Y clic al botón de mover seguidores.

### 5. ¿Qué va a pasar ahora?

Ahora se inicia el proceso de migración de followers. Esto, por lo visto, no se hace del tirón sino que poco a poco y según vayan de cargados los servidores. Lo normal es que en unas horas tengas a todos los seguidores y seguidos.

Además, aparecerá una nota en tu cuenta antigua indicando que te has mudado a la nueva.

La cuenta antigua quedará limitada y podrás entrar a exportar cosas (ya no lo necesitas porque lo hemos hecho lo primero) o reactivarla si cambias de opinión.

Puedes hacer lo que quieras, pero **no te recomiendo borrarla**.

### 6. Importar en la nueva cuenta lo que falta

Como dije al principio, hay una serie de rollis que no se pasan automáticamente y hay que hacerlo a maneto.

Pues ahora vamos a importar lo que hemos exportado en el paso 1. Quizás es e momento de poner ese podcast al que llevamos dando largas un tiempo. Por lo que sea.

Primero vamos a ir a por lo facilico y vamos a importar esos CSV que tenemos ahí esperando como agua de mayo.

Nos vamos, en la cuenta nueva, obvio, a **Preferencias > Importar y exportar > Importar**:

{% set imgConfig = {
  src: './img/20-import.png',
  alt: 'Pantalla para importar diferentes datos.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

El proceso es todo el rato lo mismo:

1. Seleccionamos del listado lo que queremos importar.
2. Si es una cuenta 100% nueva da igual, pero no duele dejar siempre la opción de "mezclar".
3. Adjuntamos el archivo CSV correspondiente
4. Clic al botón de subir.
5. Abajo irá apareciendo un reporte de lo que vas haciendo y el progreso, y si algo ha ido mal.

El el desplegable salen las siguientes opciones:

{% set imgConfig = {
  src: './img/21-import-dropdown.png',
  alt: 'Opciones del desplegable del tipo de dato que quieres importar.',
  mode: 'center'
} %}
{{ macros.img(imgConfig) }}

* **Seguidos y bookmarks**
  * Lista de seguidos
  * Bookmarks
  * Listas
* **Bloqueos y mutes**
  * Lista de muteados
  * Lista de bloqueados
  * Lista de dominios bloqueados

Lo normal es que la lista de gente a la que sigues se haya pasado, si eso, la dejaría para el final.

> Este proceso también depende de si son 4 o 4000 criaturas; puede llevar un tiempo.

Ahora quedan los hashtags que seguimos y los filtros. Igual esta no va a ser la parte más emocionante:

* Para los **hashtags** hay que ir buscándolos uno a uno, y dándole a seguir.
* Para los **filtros** hay que ir recreándolos uno a uno. No vamos a **Preferencias > Filtros**, y quizás es un buen momento para hacerse un tecito o algo.

***

Con esto ya debería estar todo más o menos en su sitio. Es mucho menos de lo que parece y recuerda que no es un trabajo, lo puedes ir haciendo con la calma.

Y si puedes, **dona al admin de tu instancia y entre todes mantenemos esto :)**

Por cierto, si algo no es correcto o no se entiende, dímelo sin problema y estaré encantado de corregirlo.
