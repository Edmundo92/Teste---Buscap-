import React, { Component } from 'react';

import Product from './product/product'

import API from './product/db'


export default class Main extends Component {

  render() {
    return (
        <main className="main">
          <div className="container">
            <div className="row">
                {
                  API.items.map((data, i) => <Product dados={data} key={i} addProduct={this.props.addProduct} /> )
                }
            </div>
          </div>
        </main>
    );
  }
}