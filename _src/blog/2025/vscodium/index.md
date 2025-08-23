---
title: VSCodium
featured_image: vscodium-cover.jpg
featured_alt: Imagen a base de formas cuadradas giradas 45 grados y de colores que se van superponiendo. Hay como un rombo principal central en blanco, una especie de borde grueso en azul y el resto es verde. Por las 4 puntas del rombo central asoman unos rombos grises oscureciendo los colores anteriores. En el centro tb aparece un icono como de una cornamenta de ciervo con trazos anchos y redondeados, que es el icono de la aplicación. y todo tiene una textura como de lienzo.
featured_color: 0ab4a1
ya_image: ya.png
ya_alt: Sobre un círculo azul se ve el icono de VS Codium en blanco
reading_time: 14
date: 2025-08-24
draft: false
future: false
categories: [tutorial]
tags: [VS Codium, VS Code, ia, GitHub]
excerpt: Vamos a ver por qué y cómo migrar de VS Code a VS Codium manteniendo la sincronización entre equipos y todo lo que se pueda.
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

Llevaba tiempo dando pasos atrás de otros sitios y **ahora toca a GitHub**. Como alternativa estoy usando [Codeberg](https://codeberg.org) que no es 100% lo mismo, pero eso está bien. No hay la misma comunidad, pero eso también está bien porque **nunca la vamos a conseguir si nos quedamos en los jardines cerrados** de esta gente.

El editor que uso, VS Code, está 100% integrado con GitHub, y **por eso tb es un problema**.

En front hay como dos «tareas»: maquetar y programar. Si me dedico a más javascript o frameworks, un editor como Webstorm es una solución más recia que VS Code, pero si lo que busco es más HTML y CSS, entonces encuentro mejor opción en un editor menos exigente y con una base de desarrolladores que hacen mayor variedad de extensiones. Igual no está súper bien dicho, pero esta es un poco la idea. **A mi me gusta maquetar y entre los editores, el que se adapta mejor a cómo trabajo, por ahora, es VS Code**.

Esto no quiere decir que sea mejor ni que esté mejor hecho.

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

Salir de ms es más complicado porque el jardín es más grande. **Para el trabajo voy vendido**. Todavía puedo usar el editor que quiero, sí, pero aquí entran **decisiones corporativas o con compañeres**, ya que si la mayoría usa VS Code, es una ventaja seguir usándolo.

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

Además, hay una serie de extensiones propias de ms que ya no están incluidas, como la sincronización de configuración o eso de clonarse un repo de GitHub desde el propio editor.

## Requerimientos

Después de 27 años en el sector ya tengo una forma de usar las herramientas que me gustaría mantener.

### Sincronización remota

Esto me parece una **ventaja imprescindible**, bien porque tengas dos equipos y lo que mejores en el editor en uno no lo quieras perder en el otro, o simplemente porque no lo quieras perder. Mañana tienes que trabajar en otro equipo y yo no puedo depender de recordar lo que tenía instalado y lo que no como en los 2000, no: **me conecto a donde esté la configuración, me la descargo y sigo por dónde lo dejé**.

### Conservar la configuración de VS Code

Toda esa personalización cuidada, más o menos, no se puede perder. **Necesito encontrar un sistema para migrarlo todo o la mayoría**. Si se tratase de otro editor diferente, pues tira que te va, pero siendo la misma base quiero conservarlo todo. O casi todo.

### No GitHub

GitHub para su ceo y para su puat<strong>*SE LO LLEVAN*</strong>.

No, en serio. Salir de GitHub no va a ser fácil, pero **quiero hacerlo**. De primeras pierdo la **sincronización transparente de la configuración** del editor y el poder **compartir sesiones de trabajo** con mis compañeres.

Hay alguna cosa más: al ser un viejales yo trabajo a veces con tema blanco, y **el tema de GitHub no lo voy a volver a instalar**. Tengo algunos parecidos, pero no el mismo.

## Pasos

Dando bandazos de prueba y error he sacado en claro un orden de pasos para conseguir la mayor parte de las cosas que quería. El orden es medio importante porque **si configuras Sync Settings antes de cambiar el marketplace, vas a tener que configurarlo dos veces**.

### 1. Repo settings (Codeberg)

Lo primero es tener un sitio donde guardar la configuración ya sea como backup o para sincronizarla entre equipos. **Yo he elegido Codeberg**, que es a donde voy a ir moviendo mis proyectos de GitHub.

He creado **un repo público al que puedo acceder por ssh** desde la terminal, como los frontenders mayores. El punto de la terminal es importante para luego.

### 2. Instalar VSCodium

Esta parte **viene perfectamente explicada en la web del proyecto**: [vscodium.com - instalación](https://vscodium.com/#install).

Yo me lo instalé con brew:

```shell
brew install --cask vscodium
```

### 3. Cambiar al Marketplace malo

Igual primero habría que **valorar si tiene sentido hacer este cambio**. Por una parte ya que te mueves a un entorno más abierto tiene todo el sentido que el repertorio de extensiones disponibles vaya en ese sentido. Por el otro lado hay dos tipos de extensiones que no vas a encontrar: las propietarias de ms/GitHub y las que no se hayan dado de alta.

Con las propietarias no hay mucho que hacer, pero **a quienes mantienen las otras se les puede escribir y pedirles que las den de alta en [este otro marketplace](https://open-vsx.org/)** (la comunidad va un poco de esto). No es algo a coste cero ni nadie te garantiza que lo vayan a hacer.

Hay una tercera opción, que es descargarte las extensiones (se puede hacer desde VS Code) e instalarlas manualmente. Aunque, ojo, que pierdes la actualización automática.

Yo, por ahora, **he decidido cambiar al marketplace malo**, el de ms, por lo menos durante el periodo de transición.

#### El turrón

El proceso es irse a la carpeta de VS Codium y crear un archivo **product.json** con el siguiente contenido, y **reiniciar VS Codium**.

```json
 {
   "nameShort": "Visual Studio Code",
   "nameLong": "Visual Studio Code",
   "extensionsGallery": {
     "serviceUrl": "https://marketplace.visualstudio.com/_apis/public/gallery",
     "cacheUrl": "https://vscode.blob.core.windows.net/gallery/index",
     "itemUrl": "https://marketplace.visualstudio.com/items"
   }
 }
```

<a id="system-folder"></a>Las carpetas para cada sistema están en:

| OS      | localización                                                        |
| ------- | ------------------------------------------------------------------- |
| Linux   | **$XDG_CONFIG_HOME/VSCodium** or **~/.config/VSCodium**             |
| macOS   | **~/Library/Application\ Support/VSCodium**                         |
| Windows | **%APPDATA%\VSCodium** o **%USERPROFILE%\AppData\Roaming\VSCodium** |

Esto lo he sacado de este [tutorial de Anxkhn](https://gist.github.com/anxkhn/9ae7b2248999168b73f303dec5851460).

{% set panelConfig = {
  type: 'warning',
  content: [
    'Una vez hecho el cambio se pueden buscar e instalar extensiones desde el panel lateral de VS Codium, pero <strong>seguía sin encontrar las «propietarias» si las instalaba desde la terminal</strong>.'
  ],
  custom_icon: {
    icon: '🤓',
    label: 'Señor gafotas con cara de listillo'
  }
} %}
{{ macros.panel(panelConfig) }}

### 4. Sync Settings

Esta es la parte más importante para mi. No es solo que el editor de código sea mi herramienta de trabajo o que sea uno de mis hobbies y no quiera mantener configuraciones diferentes, es que me voy a olvidar, o un día la voy a perder y me va a costar un quintal recuperarla.

Al no tener la integración con GitHub se pierde el que tal como cambies algo, se guarde la configuración: **cambias algo en un equipo y para cuando pasas a otro, ya lo tienes**.

Para esto hay una extensión muy molona que se llama Sync Settings.

#### Instalar

Se puede encontrar en cualquiera de los marketplaces:

- [Sync Settings en el marketplace abierto](https://open-vsx.org/extension/zokugun/sync-settings).
- [Sync Settings en el marketplace de ms](https://marketplace.visualstudio.com/items?itemName=zokugun.sync-settings).

#### Configurar

Instalarlo no tiene mucho rollo, solo hay que tener en cuenta que esta extensión se puede configurar igual para todos los dispositivos desde el archivo **settings.json**, o puedes tener una configuración local para poder tener particularidades dependiendo del equipo. Esta última es la que yo he elegido. En la página del plugin lo explican casi bien para mi gusto. Desde el lanzador de VS Codium buscamos **Sync Settings: Open the repository settings** y esto abre el archivo **settings.yml**:

- Hay que recordar que arriba del todo hay una configuración de prueba que hay que comentar: la parte de "repository" bajo "profile"
- En mi caso fui a la sección "# sync on remote git" puse la url completa de mi repo de Codeberg (ssh://...) y la rama. Y ya.
- Por lo visto no se guarda ninguna identificación y tienes que poder acceder (escritura/lectura) al repo desde la terminal.

Una vez hecho esto, cuando quieras, puedes tirar de los comandos para subir o descargar las configuraciones:

- **Sync Settings: Upload (user -> repository)**
- **Sync Settings: Download (repository -> user)**

### 5. Migrar lo que falta

Esto se puede hacer en el orden que sea. Dentro de [la carpeta de VS Codium](#system-folder) hay una carpeta **user/** donde iremos dejando los atajos, las settings y la carpeta de snippets.

Desde VS Code me fui a las settings, busqué cualquier enlace al archivo, click derecho en la pestaña cuando se abra y lo mostramos en el explorador de archivos del sistema, y ya tenemos los archivos settings.json, keybindings.json y la carpeta de snippets para moverla a la carpeta user de VS Codium de la que hablábamos antes.

{% set panelConfig = {
  type: 'warning',
  content: [
    'Si no tenemos <strong>snippets</strong> puede que no esté ni la carpeta.'
  ]
} %}
{{ macros.panel(panelConfig) }}

#### Extensiones

Esta parte es un poco tricky y vamos a tirar de la terminal un poco, así que vamos a necesitar instalados 'code' y 'codium'en el PATH para usarlos desde la terminal.

Si no se tienen se hace desde la paleta de comandos con:

```text
shell Command: Install 'code' command in PATH
shell Command: Install 'codium' command in PATH
```

Uno desde VS Code y el otro desde VS Codium.

Ahora vamos a sacar la lista de extensiones. Abrimos la terminal en una carpeta conocida y sacamos el listado a un archivo de texto:

```shell
code --list-extensions > vscode-extensions.txt
```

{% set panelConfig = {
  type: 'info',
  content: [
    'El sacarlo primero a un archivo de texto nos da la oportunidad de abrirlo y revisar lo que hay porque seguro que a simple vista hay algunas que nos sobran.'
  ]
} %}
{{ macros.panel(panelConfig) }}

Una vez revisado las vamos a ir instalando, desde la terminal:

```shell
xargs -n1 codium --install-extension < vscode-extensions.txt
```

Esto las va a ir instalando una a una. A mi no me funcionaron todas y luego tuve que ir buscándolas en el panel de extensiones de VS Codium, y por eso las exporto primero a un archivo.

### 6. Algunas cosas no son “iguales”

A estas alturas ya está todo. ¿No? Pues casi, pero he visto que todavía quedan detallicos que afinar. No parece mucho y va a depender de las extensiones que se tuviesen instaladas. Esto ya se va viendo con el día a día {{ macros.emoji({icon: '🙂', label: 'Carilla sonriente'}) }}.

---

Por ahora el cambio me está pareciendo bien, incluso juraría que Codium va un poco más suelto, pero **igual es solo en mi corazón**.

Como nota, un par de compañeres lo instalaron y avisaban de que iba súper mal de rendimiento. A mi me va bastante decente, aunque esto es un [electron](https://www.electronjs.org/) por debajo y va como va.

Los siguientes pasos me cuesta verlos. Me gustaría darle una vuelta a [Sublime Text](https://www.sublimetext.com/) a ver cómo ha avanzado, tb he visto que [TextMate](https://macromates.com/) sigue vivo y quizás hasta pruebe [Nova](https://nova.app/) o me líe la manta a la cabeza con [Emacs](https://www.gnu.org/software/emacs/) o [NeoVim](https://neovim.io/). Pero con esto ya me entra la risa floja...
