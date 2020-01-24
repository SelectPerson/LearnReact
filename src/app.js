import React from 'react';
import Cart from './hw/lazyNorm'

export default class extends React.Component {
    state = {
        products: [
            {
                id: 100,
                title: 'Iphone 200',
                price: 12000,
                rest: 10,
                current: 1
            },
            {
                id: 101,
                title: 'Samsung AAZ8',
                price: 22000,
                rest: 5,
                current: 1
            }
        ]
    };
    changeCnt(i, cnt) {
       let newProducts = [...this.state.products];
       let newProduct = {...newProducts[i]};
        newProduct.current = cnt;
        newProducts[i] = newProduct;
        this.setState({
           products: newProducts
        });
        console.log(newProduct);
    }
    render() {
        let getProductsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id}>
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <Cart
                            min={1} max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                </tr>
            );
        });
        return (
            <div>
                <h2>Cart</h2>
                <table>
                    <tbody>
                        <tr>
                            <td>Title</td>
                            <td>Price</td>
                            <td>Count</td>
                            <td>Total</td>
                        </tr>
                        {getProductsRows}
                    </tbody>

                </table>

            </div>
        );
    }

}