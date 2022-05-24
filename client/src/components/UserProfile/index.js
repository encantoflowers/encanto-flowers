import React from "react";
import AuthService from "../../utils/auth";
import { Link } from "react-router-dom";

function OrderHistory() {
  const { data } = useQuery(QUERY_USER);
  let user;

  if (data) {
    user = data.user;
  }

  return (
    <>
      <div className="container my-1">
        <Link to="/">← Back to Products</Link>

        {user ? (
          <>
            <h2>
              Order History for {user.firstName} {user.lastName}
            </h2>
            {user.orders.map((order) => (
              <div key={order._id} className="my-2">
                <h3>
                  {new Date(parseInt(order.purchaseDate)).toLocaleDateString()}
                </h3>
                <div className="flex-row">
                  {order.products.map(({ _id, image, name, price }, index) => (
                    <div key={index} className="card px-1 py-1">
                      <Link to={`/products/${_id}`}>
                        <img alt={name} src={`/images/${image}`} />
                        <p>{name}</p>
                      </Link>
                      <div>
                        <span>${price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </>
  );
}

function adminNav() {
  if (AuthService.loggedIn()) {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/order/history">
            Order History
          </Link>
        </li>
        <li className="mx-1">
          <a href="/" onClick={() => AuthService.logout()}>
            Logout
          </a>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1">
      <h1>What would you like to do today?</h1>
      {OrderHistory()}
      
    <nav>
      {adminNav()}
    </nav>
    </header>
  );
}

export default adminNav;