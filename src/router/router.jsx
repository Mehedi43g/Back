import { createBrowserRouter } from "react-router-dom"
import Layout from "../layout/Layout"
import HomePage from "../Pages/HomePage"
import BlogPage from "../Pages/BlogPage"
import CartPage from "../Pages/CartPage"
import ContactPage from "../Pages/ContactPage"
import ProductPage from "../Pages/ProductPage"
import ShopPage from "../Pages/ShopPage"
import UpdatePage from "../Pages/UpdatePage"


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/blog",
        element: <BlogPage />
      },
      {
        path: "/cart",
        element: <CartPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/product",
        element: <ProductPage />
      },
      {
        path: "/shop",
        element: <ShopPage />
      },
      {
        path: "/update",
        element: <UpdatePage />
      }
    ]
  }
])