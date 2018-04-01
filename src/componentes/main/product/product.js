import React, {Component} from 'react'

export default class Product extends Component{
    constructor(props){
        super(props)

        this.add = this.add.bind(this)
    }

    add(){
        const {dados} = this.props
        this.props.addProduct(dados)
    }

    render(){
        const {images, name, price} = this.props.dados.product

        return (

            <div className="col-xs-12 col-sm-4 col-md-3">

                <section className="content_product" id="">
                    <div className="content_galeria">
                        <img src={images[0]} alt="" className="content_img" />
                    </div>
                    <div className="content_inf">
                        <div className="">
                            <span className="inf_subtitle">{name}</span>
                            <span className="inf_subtitle">UN32J4300AG 32 polegadas</span>
                            <span className="inf_subtitle">LED Plana</span>
                        </div>
                        <div className="box_about_price">
                            <div className="">
                                <span className="indic_price">MELHOR PREÇO</span>
                                <span className="inf_subtitle price_parcel">{price.installments}x R$ <strong>{price.installmentValue}</strong></span>
                                <span className="inf_title price_vista">R$ {price.value} à vista</span>
                            </div>
                            <div className="">
                                <button className="add_cart" onClick={this.add}>Adicionar ao carrinho</button>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}