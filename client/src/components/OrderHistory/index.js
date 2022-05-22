import React from 'react'
import './style.css'
import { Container, Table } from 'react-bootstrap';


export default function OrderHistoryTable() {
    return (
        <div>
            <Container className='order-history my-5'>
                <h3>Hello, NAME</h3>
                <h4>Order History</h4>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Product</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>May 20, 2022</td>
                            <td>Congratulations Flowers </td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>May 20, 2022</td>
                            <td>Congratulations Flowers </td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>May 20, 2022</td>
                            <td>Congratulations Flowers </td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>May 20, 2022</td>
                            <td>Congratulations Flowers </td>
                            <td>$40.00</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>May 20, 2022</td>
                            <td>Congratulations Flowers </td>
                            <td>$40.00</td>
                        </tr>
                        
                    </tbody>
                </Table>

            </Container>
        </div>
    )
}
