---
title: VSCodium
featured_image: vscodium-cover.jpg
featured_alt:
featured_color: 0ab4a1
ya_image: ya.png
ya_alt:
reading_time: 5
date: 2025-08-24
draft: true
future: true
categories: []
tags: []
excerpt:
clickbait: ¿Qué editor usas?
cover_credits:
  link:
  author: Chuck! (inspirada en las de The Verge)
  site: sidiostedalimones
---

{% import "components/post/macros.njk" as macros %}

Cada vez es más difícil tener cosas bonitas, a veces parece que ya es imposible.

Siempre he pensado que microsoft (me niego a ponerlo en mayúsculas) eran **las rémoras de internet**. Yo empecé a trabajar para una parte de ellos en septiembre de 2001, sí, ese día, por aquel entonces **ms no daba un paso sin que alguien lo hubiese dado antes**, y ya luego contaban que lo suyo era más seguro; no podían decir que eran los primeros.

No recuerdo el año, pero nos pasaron por lo bajini **una propuesta que tenían para hotmail**, con un **rediseño nuevo y novedoso**, y no se atrevieron. Años más tarde sacaron el Zune con una interfaz de tipografía que sí que me pareció valiente, lo suficiente para descolocarme un poco.

Más tarde salió GitHub, *creció con una comunidad importante* y un editor, Atom,  con la interfaz que más voy a echar de menos (**las de ms son terribles**). Y esta gente compra GitHub y cuenta que va a aportar a la comunidad con proyectos de código abierto e incluso liberando algunos propios. Y sacaron VS Code, y **más tarde fagocitaron Atom**, y **más tarde fagocitaron la comunidad entera** y esto es lo que tenemos hoy, **copilot con calzador y acceso hasta a los proyectos privados**. El otro día salía el CEO, o ex-CEO, diciendo que **o entrabas por el aro de la ia o fuera del sector**.

> Hay varias formas de echarte de un sitio, una de ellas es hacerlo inhabitable y que seas tú el que dices de irte.

Llevaba tiempo dando pasos atrás de otros sitios y **ahora toca a GitHub**. Como alternativa estoy usando Codeberg que no es 100% lo mismo, pero eso está bien. No hay la misma comunidad, pero **nunca la vamos a conseguir si nos quedamos en los jardines cerrados** de esta gente.

El editor que uso, VS Code, está 100% integrado con GitHub, y **por eso tb es un problema**.

En front hay como dos «tareas»: maquetar y programar. Si me dedico a más javascript o frameworks un editor como Webstorm es una solución más recia que VS Code, pero si lo que busco es más HTML y CSS, entonces encuentro mejor opción un editor menos exigente y con una base de desarrolladores que hacen mayor variedad de extensiones. Igual no está súper bien dicho, pero esta es un poco la idea. **A mi me gusta maquetar y encuentro que de los editores, el que se adapta mejor a cómo trabajo, por ahora, es VS Code**.

Pues hace poco me enteré de que hay una alternativa: **VS Codium**

## Qué es

**[VS Codium](https://vscodium.com/) es el proyecto open source sobre el que se construye VS Code**. Dicho de otra manera, VS Code es un VS Codium con toda la telemetría y miredas de ms y una licencia menos abierta.

## Por qué cambiar si es lo mismo

Porque no es lo mismo. **Solo con que sea de código abierto, que no tenga la telemetría y el tracking de la gente esta ya suena mejor**, por lo menos para unos primeros pasos.

Esto no es un paso final, esto es un paso intermedio. Salir de un entorno cerrado requiere salir, pero tb hay que empezar a moverse para eso.

### Github

VS Codium **no tiene integrada de base la capa GitHub**, y ya lo siento como que puedes respirar algo más. Es una aberración, precisamente en nuestro sector, que haya un jardín central y no **infinidad de jardines vecinales conectados**. ms se compró el jardín de una comunidad muy tocha y no la está cuidando, la está exprimiendo.

Es verdad que hay mogollón de proyectos en GitHub. Y es verdad que no seguir la rueda es difícil. Al final parece que te echas a un lado y simplemente te apartas de «la luz». Pues **fuera hay mucha más gente**, y a los que estamos dentro **tb nos hace bien mirar por las ventanas y ver que la vida no solo sucede dentro de los muros que nos han colocado**.

**GitHub no es git**. Y tu comunidad puede cambiar y ampliarse y trasladarse y aún así ser comunidad.

Salir del todo tampoco es fácil, tus compañeres lo siguen usando y eso de alguna manera te ata. Vale, **y aún así creo que este es el camino** (THISISTHEWAY.GIF).

### VS Code y microsoft

Atom sí que tenía extensiones guapas que me hacían la vida MUCHO más fácil, pero ya no hay Atom. Algunas las encontré para VS Code y otras no he aprendido a hacerlas, aunque **me pregunto si realmente quiero aprender a hacer extensiones para un producto de esta gente**. Lo decía antes: es un paso intermedio, no final.

Salir de ms es más complicado porque el jardín es más grande. **Para el trabajo voy vendido**. Todavía puedo usar el editor que quiero, sí, pero aquí entran d**ecisiones corporativas o con compañeres**, ya que si la mayoría usa VS Code, es una ventaja seguir usándolo.

En el día a día se trabaja en grupo y **es más fácil compartir con las mismas reglas**.

Para mis proyectos hobby puedo usar lo que me de la gana. Reconozco que ahora mismo no veo súper opciones; ya vendrán.

VS Codium es ese paso intermedio que me va a permitir **no saltar directamente a los márgenes**, sino ir teniendo poco y poco de lo bueno y de lo no tan bueno.

**La integración con su copilot es desesperante** hasta el punto que cada x tiempo tengo que volver a desinstalarlo/desactivarlo. Con VS Codium lo voy a tener más sencillo.

Como decía: **pasos intermedios, pero es el camino**.

## Problemas

Aquí nada es un camino de rosas y nadie te da nada gratis, al menos esta gente no. Te quitas la capa de GitHub y la de ms, y alguna cosa se complica.

### Marketplace propio

Al ser un proyecto de código abierto tiene todo el sentido del mundo que tire de un **marketplace de extensiones que sigan esa misma filosofía**. Aquí hay muchas y otras tantas tienen la puerta abierta, pero de primeras no están todas las que tienes.

### Dependencia de GitHub

Además, hay una serie de extensiones propias de ms que ya no están incluídas, como la sincronización de configuración o eso de clonarse un repo de GitHub desde el propio editor.

## Requerimientos

Después de 27 años en el sector ya tengo una forma de usar las herramientas que me gustaría mantener.

### Sincronización remota

Esto me parece una **ventaja imprescindible**, bien porque tengas dos equipos y lo que mejores en el editor en uno no lo quieras perder en el otro, o simplemente porque no lo quieras perder. Mañana tienes que trabajar en otro equipo y yo no puedo depender de recordar lo que tenía instalado y lo que no como en los 2000, no: **me conecto a donde esté la configuración, me la descargo y sigo por dónde lo dejé**.

### Conservar la configuración de VS Code

Toda esa personalización cuidada, más o menos, no se puede perder. **Necesito encontrar un sistema para migrarlo todo o la mayoría**. Si se tratase de otro editor diferente, pues tira que te va, pero siendo la misma base quiero consevarlo todo. O casi todo.

### No GitHub

GitHub para su ceo y para su puat<strong>* SE LO LLEVAN *</strong>.

No, en serio. Salir de GitHub no va a ser fácil, pero **quiero hacerlo**. De primeras pierdo la **sincronización transparente de la configuración** del editor y el poder **compartir sesiones de trabajo** con mis compañeres.

Hay alguna cosa más: al ser un viejales yo trabajo a veces con tema blanco, y **el tema de GitHub no lo voy a volver a instalar**. Tengo algunos parecidos, pero no el mismo.

## Pasos

Dando bandazos de prueba y error he sacado en claro un orden de pasos para conseguir la mayor parte de las cosas que quería.

### 1. Repo settings (Codeberg)

Lo primero es tener un sitio donde guardar la configuración ya sea como backup o para sincronizarla entre equipos. **Yo he elegido [Codeberg](https://codeberg.org/)**, que es a donde voy a ir moviendo mis proyectos de GitHub.

He creado **un repo público al que puedo acceder por ssh** desde la terminal, como los frontenders mayores. El punto de la terminal es importante para luego.

### 2. Instalar VSCodium



### 3. Cambiar al Marketplace malo

### 4. Sync Settings

#### Instalar

#### Configurar

### 5. Migrar

#### Atajos

#### Settings

#### Extensiones

#### Snippets

### 6. Algunas cosas no son “iguales”
