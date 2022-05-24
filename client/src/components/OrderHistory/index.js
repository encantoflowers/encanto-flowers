// import React from 'react'
// import { useQuery } from '@apollo/client';
// import './style.css'
// import { Container, Row, Col, Button, Table } from 'react-bootstrap';
// import { QUERY_USER } from '../../utils/queries';
// import { Link } from 'react-router-dom';


// export default function OrderHistory() {

//     const { data } = useQuery(QUERY_USER);
//     let user;

//     if (data) {
//         user = data.user;
//     }

//     return (
//         <div>

//             {user ? (
//                 <Container className='order-history my-5'>
//                     <Link to="/">← Back to Products</Link>
//                     <h3>Hello, {userName}</h3>
//                     <h4>Order History</h4>
//                     <Table striped>
//                         <thead>
//                             <tr>
//                                 <th>Order</th>
//                                 <th>Date</th>
//                                 {/* <th>Product</th> */}
//                                 <th>Total</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {user.orders.map((order) => (
//                               <div> <tr key={order._id}>
//                                     <td>{order._id}</td>
//                                     <td>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</td>
//                                     {/* {order.products.map(({ _id, image, name, price }, index) => (
//                                     <td key={index}>{order.name} </td> */}
//                                     <td> ${order.total} </td>
//                                     {/* ))} */}
//                                 </tr></div> 
//                             ))}
//                         </tbody>
//                     </Table>
//                 </Container>
//             ) : null}

//         </div>
//     )
// }
