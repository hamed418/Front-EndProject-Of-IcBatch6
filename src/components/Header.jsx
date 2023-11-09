import './Header.css'
import {Link} from 'react-router-dom'
function Header() {
  return (
   <header>
    <div className='header'>
        <div className='container'>
         <div className='header__navbar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/signup'>Signup</Link></li>
                <li><Link to='/login'>Log In</Link></li>
                <li><Link to='/admin/products'>Products</Link></li>
                <li><Link to='/admin/users'>Users</Link></li>
                <li><Link to='/cart'>Cart</Link></li>
                <li><Link to='/my-orders'>My Orders</Link></li>
                <li><Link to='/order-list'>Order List</Link></li>
                <li><Link to='/admin/product-add-form'>Add Products</Link></li>
                <li><Link to='/order-placing-form'>AddressForm</Link></li>
                <li><Link to='//admin/product-edit-form/:id'>ProductEditForm</Link></li>
                <button className='btn-white'>LogOut</button>
            </ul>
         </div>
        </div>
    </div>
   </header>
  )
}

export default Header