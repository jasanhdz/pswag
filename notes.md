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
