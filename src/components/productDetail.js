import React from "react"
import priceFormat from "../utils/priceFormat"
import {
  Tag,
  SizeButton,
  SizeSelect,
  StyledProductDetail,
  QtySelect,
  Button,
} from "../styles/components"
import { SEO, Starts } from "./"

class productDetail extends React.Component {
  constructor({ sku, price, product: { name, metadata } }) {
    super()
    this.id = sku
    this.price = price
    this.name = name
    this.metadata = metadata
    this.wear = metadata.wear
    this.state = {
      size: 2,
      qty: 1,
    }
    this.formatePrice = priceFormat(price)
  }

  render() {
    return (
      <StyledProductDetail>
        <SEO title={this.name} />
        <img src={this.metadata.img} alt={this.name} />
        <div>
          <Tag>Popular</Tag>
          <h2>{this.name}</h2>
          <b>USD {this.formatePrice}</b>
          <Starts />
          {this.wear && <h3>Color: Azul</h3>}
          <small>{this.metadata.description}</small>
          {this.metadata.wear && (
            <SizeSelect selected={this.state.size}>
              <SizeButton onClick={() => this.setState({ size: 1 })}>
                XS
              </SizeButton>
              <SizeButton onClick={() => this.setState({ size: 2 })}>
                S
              </SizeButton>
              <SizeButton onClick={() => this.setState({ size: 3 })}>
                M
              </SizeButton>
              <SizeButton onClick={() => this.setState({ size: 4 })}>
                L
              </SizeButton>
            </SizeSelect>
          )}
          <p>Cantidad:</p>
          <QtySelect>
            <button
              onClick={() =>
                this.state.qty > 1
                  ? this.setState({ qty: this.state.qty - 1 })
                  : null
              }
            >
              -
            </button>
            <input type="text" disabled value={this.state.qty}></input>
            <button onClick={() => this.setState({ qty: this.state.qty + 1 })}>
              +
            </button>
          </QtySelect>
          <Button>Agregar al carrito</Button>
        </div>
      </StyledProductDetail>
    )
  }
}

export default productDetail
