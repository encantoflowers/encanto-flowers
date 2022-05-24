import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function UserProfile() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <div>

    {user ? (
        <Container className='order-history my-5'>
            <Link to="/">← Back to Products</Link>
            <h3>Hello, {user.userName}</h3>
            <h4>Order History</h4>
            <Table striped>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Date</th>
                        {/* <th>Product</th> */}
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {user.orders.map((order) => (
                      <div> <tr key={order._id}>
                            <td>{order._id}</td>
                            <td>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</td>
                            {/* {order.products.map(({ _id, image, name, price }, index) => (
                            <td key={index}>{order.name} </td> */}
                            <td> ${order.total} </td>
                            {/* ))} */}
                        </tr></div> 
                    ))}
                </tbody>
            </Table>
        </Container>
    ) : null}

</div>
    // <>
    //   <div className="container my-1">
    //     <Link to="/">← Back to Products</Link>

    //     {user ? (
    //       <>
    //         <h2>
    //           Order History for {user.userName}
    //         </h2>
    //         {user.orders.map((order) => (
    //           <div key={order._id} className="my-2">
    //             <h3>
    //               {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
    //             </h3>
    //             <div className="flex-row">
    //               {order.products.map(({ _id, image, name, price }, index) => (
    //                 <div key={index} className="card px-1 py-1">
    //                   <Link to={`/products/${_id}`}>
    //                     <img alt={name} src={image[0].img} />
    //                     <p>{name}</p>
    //                   </Link>
    //                   <div>
    //                     <span>${price}</span>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         ))}
    //       </>
    //     ) : null}
    //   </div>
    // </>
  );
}

export default UserProfile;
