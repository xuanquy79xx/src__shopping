import React from 'react';
import Product from './Product';
import { connect } from 'react-redux';
const mapStateToPorps = state => {
    return {
        Products: state.Products
    }
}
function Products({ Products }) {
    let result = Products.map(item => {
        return (
            <Product key={item.id} Product={item} />
        )
    })
    return (
        <div className="--content">
            {result}
        </div>

    )
}
export default connect(mapStateToPorps, null)(Products);