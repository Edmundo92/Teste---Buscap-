import React, { Component } from 'react';

class ItemCaed extends Component {
    constructor(props){
        super(props)

        this.removeCard = this.removeCard.bind(this)
    }

    removeCard(){
        const {product} = this.props
        this.props.remove(product.product.id)
    }

    render() {
        const {product} = this.props

        return (
            <div className="box_show-prod">
                <div className="product">
                    <img className="product_img" src={product.product.images[0]} alt="" />
                    <div className="box_product_inf">
                        <div className="product_inf">
                            <span className="inf_title">{product.product.name}</span>
                            <span className="inf_subtitle">UN32J4300AG 32 polegadas LED Plana</span>
                        </div>
                        <div className="product_price">
                            <span className="inf_title">{product.product.price.installments}x R$ {product.product.price.installmentValue}</span>
                            <span className="inf_subtitle">ou R$ {product.product.price.value} à vista</span>
                        </div>
                    </div>
                    <div className="remove_product" onClick={this.removeCard}>X</div>
                </div>
            </div>
        );
    }
}
export default ItemCaed;