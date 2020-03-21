## Primer proyecto en Gatsby

1. Inicializamos nuestro proyecto de javascript
   `npm init -y`
2. Instalamos las 3 dependencias básicas en un proyecto de gastby
   `npm i react gasby react-dom`
3. Agregamos un script a nuestro packages.json para poder correr el proyecto `"develop": "gastby develop"`
4. Generamos las carpetas que el proyecto de gastby requiere `"src/pages/index.js"`
5. Aquí vamos a crear un react function component el cual será nuestro index a nuestra apliación de gatsby
6. Arrancamos nuestro proyecto con el comando `gatsby develop`

Esto es todo lo que necesitamos para crear desde cero, pero muchas veces hacer esto es muy complicado y existe muchas herramientas que te ayudan a sacar un proyecto adelante, a hacer el bootstrap de una aplicación ya sea con react o con vue. En react tenemos create-react-app y en gastby también tenemos un **cli** y lo podemos instalar de la siguiente manera:
`npm install -g gatsby-cli` o `yarn global add gatsby--cli`

Una vez que mi proyecto esté listo me va ha entregar un proyecto con ciertas vistas y carpetas que mi proyecto requiere, con cierta configuración para que solamente nos dediquemos a cambiar el contenido y la lógica de esté proyecto nuevo.

Con el comando `gatsby develop` podemos ver nuestro hambiente de desarrollo y esperar a que gatsby ejecute los pasos que tiene que ejecutar, configurarlo y dejarlo visto para que puedamos visualizarlo.

## Starters

Gatsby tiene otras ventajas, gatsby tiene una comunidad increible y hay gente alrededor de gatsby generando proyectos que nos ayudan a nostros a generar proyectos muchos más rápido y mucho más fácil, para esto es que también existen los _starters_ los starters son proyectos que ya vienen configurados y ya los podemos encontrar en esté apartado donde no solo son proyectos configurados, si no que son proyectos que están hechos para que tu agregues el contenido y no te preocupes por nada más, un ejemplo es un blog.

El cual podemos empezar ejecutando el siguiente comando:
`gatsby new blog gatsbyjs/gatsby-starter-blog` que es el comando gastby + new + nombredelproyecto + authordestarter/starter

Los starters son los proyectos que vemos en [starters](https://gatsbyjs.org/starters/) Los cuales son proyectos ya generados con ciertas dependencias que resuelven cierta problematica en particular como puede ser una landing-pages o puede ser un blog o puede ser incluso un ecomerce, puede que ya halla una solución hecha para esto.

## Presentación y estructura de Archivos de nuestro proyecto: Platzisawag

En esté curso vamos a construir un e-comerce a lo largo de esté curso, pero no cualquiera va ha ser el e-comerce para el swag de platzi donde vamos a poder comprar playeras, stickers y sudaderas de platzi.

Lo que vamos a hacer es clonar un proyecto que josshz estilizo y dejo listo para comenzar el curso, que fue desarrollado con el comando gatsby new pero tiene agregados ciertos estilos, vamos a entrar a la carpeta del proyecto y vamos a instalar las dependencias.

Este proyecto tiene configurados ciertos componentes que nos van a ayudar como guía visual y de estilos para que nos enfoquemos únicamente y exclusivamente en el desarrollo del e-comerce, una vez que termine de instalar vamos a ver cual es la estructura de los archivos que tiene esté proyecto y todos los proyectos que se inician con gatsby new, para que entiendas como funciona el server-side-rendering y cada uno de los proyectos de gatsby a detalle.

Lo que no hemos visto es la estructura más a detalle de los archivos los cuales son:

- Packages.json: es el alma del proyecto es donde tenemos instaladas nuestras dependencias, el nombre del proyecto, scripts para iniciar nuestro servidor.
- gatsby-config.js: Esté archivo como su nombre lo dice tiene configuración importante del sitio de gastby entre ellas metadatos que pueden ser cualquier dato que yo desee, en esté caso tenemos 3 importantes:
  - Titulo del proyecto
  - Descripción
  - Author del proyecto
- También tenemos una serie de configuración de plugins esté es el principal rol de la configuración de gatsby, configurar todos los aditamentos que tenga nuestro proyecto en esté caso los plugins, hay varios y los vamos a ver a detalle

El siguiente archivo es el _gatsby-browser_: Ya dijimos que mucha de la magia de gatsby sucede en desarrollo y cuando construimos el sitio pero esto no lo es todo, mucho del código que escribimos sucede en el servidor y mucho sucede en el cliente, en esté caso esté archivo tiene una serie de APIs o métodos que me ayudan ha ejecutar cuando mi producto o proyecto esta en el cliente, en la máquina de mi usuario en esté caso puede ayudarme de el, para generar vistas o para añadir un stroe a mi proyecto como podría ser context-api o redux.

También podemos cargar una librería como pude ser google-maps, lo importante de esté archivo es que todo sucede despues del render de la aplicación.

_gastby-node_: es otra pieza importante del ciclo de construcción de gatsby, node viene de nodos es decir de piezas de construcción de nuestro sitio de gatsby por lo cuál en esté punto sucede todo lo que refiere a graphQL o todas las vistas o páginas de mi sitio, es esté archivo donde yo puede tomar piezas de graphQL y generar vistas en función de la información que yo tengo o incluso puedo consumir a una API y darsela a graphQL, generando así mis propios plugins de fuente de datos.

_gatsby-ssr_: muy similar al gatsby-browser a diferencia de que aquí se configura la lógica que sucede en buildTime o en tiempo de construcción, es decir cuando estamos preparando nuestro sitio y va ha entregarse al cliente, en esté caso son las cosas que sucede entre que el cliente ya tiene la página y ya puede ver el sitio y el sitio en construcción de está manera podemos inyectar alguna pieza de código o también poner aquí mi store de redux o de context-api, eso hará falta y lo haremos más adelante.

El resto son carpetas que nos van ha ayudar con el proyecto.

## Ecosistema de plugins

En el desarrollo de gatsby casi siempre nos vamos a ver apoyados por una serie de código que ya esta escrito y que nos ayuda con muchas cosas, estás piezas de código se llaman **plugins** y son herramientas o piezas de código como paquetes de npm que podemos agregar a nuestros proyectos y que nos van ha ayudar con múltiples cosas.

Existen 3 diferentes maneras en las que un plugin nos puede ayudar:

1. Como un componente: podemos instalar nuestro plugin y este plugin va ha venir como componente configurado para resolver una problematica.
2. Agregando una funcionalidad en concreto o agregando comportamiento, en esté caso podemos poner como ejemplo el plugin de helmet
3. Plugins de fuentes de datos: estos plugins se ayudan de graphQL y de nodejs para primero consumir la información del algún enpoint, llamese firebase, api-rest, graph-server, wordpress, o incluso nuestro sistema de archivos. En esté caso niestro proyecto tiene 1 en particular el cuál se llama `gatsby-source-filesystem` esté plugin de fuente de datos nos ayuda a tomar lo que esta en cierta carpeta y ponerlo disponible en graphQL.

La funcionalidad de helmet es ayudarnos con el SEO, nos entrega un componente con react-helmet que lo único que hace es darnos esté componente SEO al cuál le pasamos una serie de configuraciones como puede ser un titulo, metatagas. descripciones, etc.

También hay algo en particular con el segundo tipo de plugins los cuales son los que nos ayudan a llevar funcionalidad, este plugin en particular se ayuda de un plugin con funcionalidad que se llama `plugin de transformación` esté plugin nos va ha ayudar a tomar la imagen y ha darnos ciertas versiones de la imagen optimizadas lo cuál nos ayuda a hacer el lazy-loading que vimos en intro a gatsby, donde la imagen se ve un poco borrosa, pero terminamos con la imagen de mejor calidad y así nuestro sitio también tiene la oportunidad de cargar mucho más rápido y la optimización aumenta

## Edges

Cuando instalamos un Plugin de fuente de datos, muchas veces tenemos que pedirle al Plugin los Edges.

Edges: Son la conexión directa con este Plugin y el Servicio que trajo para nosotros.

También a esto necesitamos también tener acceso a los Nodos. Si ya tenemos la conexión, a algún servicio el que sea nos trae cierta información, está información no la trajo directamente como sí fuera a funcionar en un servidor tradicional de GraphQL que nosotros podríamos configurar.

Gatsby te exige que cuando configuras un plugin de fuente de datos, le pidas la conexión Edges y para pedirle la información a cada uno de los elementos que trae, necesitamos pedirle a Edges los Nodos o un Nodo.

Nodo: hace referencia a los elementos o elemento en particular que esta librería o esta fuente de datos trae para nosotros. En esté caso tenemos la fuente de datos de archivos, en esté caso todas la imagenes. Por aquí podrían venir los post de wordpress o todos los elementos que tengas en tu base de datos de Firebase.

## Consultas con graphql

Necesitamos traer graphql de gatsby, es lo que nos va ayudar a conectarnos con el servidor interno de gatsby.

```js
import { graphql } from "gatsby"
```

despues podremos definir una variable donde podremos nuestro query de graphql.

```js
export const query = graphql`
  query GET_DESCRIPTION {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
  }
`
```

También es buena idea que al query le asignemos un nombre para tener buenas prácticas.

El proceso de consumir este query es que gatsby va a traer el resultado y lo va a colocar como un prop en nuestro componente llamado data, que es tal cual el resultado que tenemos en graphiQL.

```js
// src/pages/NuestroPage.js
export default function NuestroPage({ data }) {
  console.log(data.allSite.edges[0].node.siteMetadata)

  return /* ... */
}
```

Recuerda que solo podemos hacer estas consultas en los componentes página de nuestra aplicación, es decir, solo desde los archivos dentro de src/pages/.

## Plugins

Los plugins no solo nos ayudan a acelerar el proceso de desarrollo si no también a hacerlo mucho más simple.

Para agregar un Plugin podemos ir a la página de gatsby donde encontraremos el apartado de Plugins, en esté apartado podemos buscar un Plugin, en esté caso el plugin que vamos a instalar se llama typography, también podemos encontrar plugins de firebase, si necesito consumir graphql también lo podemos encontrar acá.
