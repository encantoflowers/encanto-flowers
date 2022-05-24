import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Table } from 'react-bootstrap';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';

function UserProfile() {
  const { data } = useQuery(QUERY_USER);
  let user;
  let orderHistoryTable = <div></div>

  if (data) {
    user = data.user;
    orderHistoryTable = user.orders.map((order) => (
        <tr key={order._id}>
              <td>{order._id}</td>
              <td>{new Date(parseInt(order.purchaseDate)).toLocaleDateString()}</td>
              <td> ${order.total} </td>
          </tr>));
  }

  return (
    <div>
        {user ? (
            <Container className='order-history my-5'>
                <Link to="/">← Back to Shopping</Link>
                <h3>Hello, {user.userName}</h3>
                <h4>Order History</h4>
                <Table striped>
                    <thead>
                        <tr>
                            <th>Order</th>
                            <th>Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderHistoryTable}
                    </tbody>
                </Table>
            </Container>
        ) : null}
    </div>
  );
}

export default UserProfile;
