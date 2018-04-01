import React, {Component} from 'react'

import ShowCard from '../show-card/showCard'
import If from '../utilits/if'

export default class Header extends Component{

    handleClickCard(){
        document.querySelector('.show_products').classList.toggle('hide');
    }

    render(){
        const {numProducts, remove} = this.props

        return (

            <div className="content-header">

                <header className="header">
                    <div className="">
                        <h1 className="logo">
                            <img src="" alt="" className="img_logo" />
                        </h1>
                        <span className="menuH" onClick={this.handleClickCard}>
                        <If tamanho={numProducts.length}>
                            <span className="num_products">{numProducts.length}</span>
                        </If>
                        </span>
                    </div>
                    <div className="clearfix"></div>
                    <div className="box_search">
                        <input type="search" className="search" placeholder="Digite o produto, marca ou ..."/>
                    </div>
                </header>
                <ShowCard  total={this.props.total} parcela={this.props.parcela} products={numProducts} remove={remove} 
                            clickCard={this.handleClickCard}/>
            </div>
        )
    }
}