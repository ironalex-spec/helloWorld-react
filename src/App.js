import logo from './logo.svg';
import './App.css';
import { Header } from './header';
import { BestSellers } from './BestSellers';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import { Product } from './Product';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <BestSellers />,
    },
    {
        path: "product/:productId",
        element: <Product/>,
    },
  ]);

  return (
    <div className="appContainer">
      <Header />
      <hr className="divider" />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
