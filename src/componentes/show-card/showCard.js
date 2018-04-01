import React, {Component} from 'react'

import ItemCard from './itemCard'

export default class ShowCard extends Component{
    

    render(){
        //console.log(this.props.products)
        return (

            <div>

                <div className="show_products hide">
                
                    {
                        this.props.products.map( (product, i) =>
                            <ItemCard  key={i} product={product} remove={this.props.remove}/>
                        )
                    }
                    <div className="box_total-price">
                        <span className="align_right inf_title">subtotal</span>
                        <hr />
                        <span className="align_right inf_subtitle">{this.props.parcela}x R$ {(this.props.total / this.props.parcela).toFixed(2)}</span>
                        <span className="align_right inf_subtitle">ou R$ {(this.props.total).toFixed(2)} à vista</span>
                    </div>
                </div>

            </div>
        )
    }
}