import React from "react"
import { SEO } from "../components"
import { Button, Purchase } from "../styles/components"
import { Link } from "gatsby"
export default function gracias() {
  return (
    <>
      <SEO title="Compra éxitosa" />
      <Purchase>
        <h2>Compra Exitosa</h2>
        <p>Espero que disfrutes tu swag, lucelo con orgullo</p>
        <p>¡Te esperamos de vuelta, no pares de aprender!</p>
        <span role="img" arial-label="emojin">
          ❤
        </span>
        <Link to="/">
          <Button>Volver al catalogo</Button>
        </Link>
      </Purchase>
    </>
  )
}
