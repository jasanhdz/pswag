import React from "react"
import { graphql } from "gatsby"
import { Jumbo, SEO, Product } from "../components"

export const query = graphql`
  query GET_DATA {
    allSite {
      edges {
        node {
          siteMetadata {
            description
          }
        }
      }
    }
    allStripeSku {
      edges {
        node {
          id
          price
          product {
            name
            metadata {
              img
              description
              wear
            }
          }
        }
      }
    }
  }
`

// const Button = styled.button`
//   width: 80px;
//   background-color: #98ca3f;
//   border: none;
//   border-radius: 10px;
//   cursor: pointer;
//   padding: 5px;
//   color: ${props => props.color};
//   &:hover {
//     transform: scale(1.4);
//   }
// `

const IndexPage = ({ data }) => {
  console.log(data)
  return (
    <>
      <SEO title="Home" />
      <Jumbo
        description={data.allSite.edges[0].node.siteMetadata.description}
      />
      <Product products={data.allStripeSku.edges} />
    </>
  )
}

export default IndexPage
