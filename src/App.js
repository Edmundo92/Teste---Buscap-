import React, { Component } from 'react';
import './App.css';

import Header from './componentes/header/header'
import Slide from './componentes/slide/slide'
import Main from './componentes/main/main'
import Footer from './componentes/footer/footer'

class App extends Component {
  constructor(props){
    super(props)

    this.state = ({
      total: 0, 
      parcela: 10,
      numProduct: []
    })

    this.addProduct = this.addProduct.bind(this)
    this.removeProduct = this.removeProduct.bind(this)
    this.showProductAdd = this.showProductAdd.bind(this)
  }

  //add prod no card
  addProduct(e){
    this.setState({
      numProduct: [...this.state.numProduct, e]
    }) 
    

    setTimeout(()=> this.countTotal(), 1)
    this.showProductAdd(e)
  }

  showProductAdd(e){
    this.setState({showProductAdd: e.product.name})

    setTimeout( () => this.setState({showProductAdd: ''}), 1500)
  }

  //remove element of card
  removeProduct(e){
    let indexArray

    this.state.numProduct.map( (product, i) => {
      if(product.product.id === e){
        indexArray = i
        return indexArray
      }
    })

    this.state.numProduct.splice(indexArray, 1)
    setTimeout(()=> this.countTotal(), 1)
  }

  //total dos products do card
  countTotal(){
    let total = 0
    this.state.numProduct.forEach((product) => total += product.product.price.value )

    this.setState({
        total: total
    })
  }

  //muda o estado e renderiza na tela os dados vindo do localStorage
  componentWillMount() {
    localStorage.getItem('product') && this.setState({
        numProduct: JSON.parse(localStorage.getItem('product'))
    })
    setTimeout(()=> this.countTotal(), 1)
  }

  //armazena os dados no localStorage
  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem('product', JSON.stringify(nextState.numProduct))
  }



  render() {
    const {total, parcela, numProduct} = this.state

    return (
      <div className="App">
        <Header total={total} parcela={parcela} numProducts={numProduct} remove={this.removeProduct}/>
        <Slide />
        <Main addProduct={this.addProduct}/>
        <div className="clearfix"></div>
        <Footer />
      </div>
    );
  }
}

export default App;
