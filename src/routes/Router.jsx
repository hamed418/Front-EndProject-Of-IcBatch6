import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Cart from './../pages/Cart';
import Home from '../pages/Home';
import Login from './../pages/Login';
import Signup from './../pages/Signup';
import AddressForm from '../pages/AddressForm';
import MyOrders from './../pages/MyOrders';
import OrderList from './../pages/OrderList';
import ProductAddForm from './../pages/ProductAddForm';
import Users from './../pages/Users';
import ProductEditForm from '../pages/ProductEditForm';
import Products from './../pages/Products';
import ProductDetails from './../pages/ProductDetails';

function Router() {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/order-placing-form' element={<AddressForm/>}/>
        <Route path='/my-orders' element={<MyOrders/>}/>
        <Route path='/order-list' element={<OrderList/>}/>
        <Route path='/admin/product-add-form' element={<ProductAddForm/>}/>
        <Route path='/admin/users' element={<Users/>}/>
        <Route path='/admin/product-edit-form/:id' element={<ProductEditForm/>}/>
        <Route path='/admin/products' element={<Products/>}/>
        <Route path='/products/:id' element={<ProductDetails/>}/>
    </Routes>
   </BrowserRouter>
  )
}

export default Router