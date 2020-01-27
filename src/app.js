import React from 'react';
import AppMinMax from './inputs/minmax/minmax';
import { Button } from 'react-bootstrap';

export default class extends React.Component {
    state = {
        products: getProducts(),
        formDone: false
    };
    changeCnt(i, cnt) {
       // let newProducts = [...this.state.products];
       // let newProduct = {...newProducts[i]};
       //  newProduct.current = cnt;
       //  newProducts[i] = newProduct;
        let products = [...this.state.products];
        products[i] = {...products[i], current: cnt};
        this.setState({
           products: products
        });
    }
    remove(i) {
        let products = [...this.state.products].filter((pr, j) => j !== i);
        // let products = [...this.state.products];
        // products.splice(i,1);
        this.setState({products});
    }
    sendForm = () => {
        this.setState({ formDone: true });
    };
    render() {
        let total = this.state.products.reduce((t, pr) => {
            return t + (pr.current * pr.price);
        }, 0);

        let getProductsRows = this.state.products.map((product, i) => {
            return (
                <tr key={product.id} >
                    <td>{product.title}</td>
                    <td>{product.price}</td>
                    <td>
                        <AppMinMax
                            min={1} max={product.rest}
                            cnt={product.current}
                            onChange={(cnt) => this.changeCnt(i, cnt)}
                        />
                    </td>
                    <td>{product.price * product.current}</td>
                    <td>
                        <button onClick={() => this.remove(i)}>X</button>
                    </td>
                </tr>
            );
        });

        let page = this.state.formDone ? showCongrats() : showForm(getProductsRows, total, this.sendForm);

        return (
            <div>
                {page}
                <hr/>
                <button onClick={() => this.changeCnt(1, 4)}>Unreal change cnt</button>
            </div>
        );
    }
}

function showForm(getProductsRows, total, onSend) {
    return (
        <div>
            <h2>Cart</h2>
            <table className='table table-bordered'>
                <thead>
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Count</td>
                    <td>Total</td>
                    <td>Action</td>
                </tr>
                {getProductsRows}
                </thead>
            </table>
            <h3>Total: {total}</h3>
            <hr/>
            <Button variant='primary' onClick={onSend}>Send</Button>
        </div>
    );
}

function showCongrats() {
    return (
        <div>
            <h2>Congratulations! Your order in process!</h2>
            <p>111</p>
        </div>
    );
}

function getProducts() {
    return [
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
        },
        {
            id: 102,
            title: 'Nokia 3310',
            price: 5000,
            rest: 2,
            current: 1
        },
        {
            id: 103,
            title: 'Sony A4',
            price: 6000,
            rest: 20,
            current: 1
        }
    ]
}