import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../searchBar/SearchBar'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('users'))
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear('users');
    navigate('/login');
  }

  const cartItems = useSelector((state) => state.cart)
  const navList = (
    <ul className='flex space-x-3 text-white font-medium text-md px-5'>
      <li>
        <Link to={'/'}>HOME</Link>
      </li>
      <li>
        <Link to={'/allproduct'}>All Product</Link>
      </li>

      {!user ? <li>
        <Link to={'/signup'}>Signup</Link>
      </li> : ""}

      {!user ? <li>
        <Link to={'/login'}>Login</Link>
      </li> : ""}

      {user?.role === 'user' && <li>
        <Link to={'/user-dashboard'}>{user?.name}</Link>
      </li>}

       {/* Admin */}

       {user?.role === 'admin' && <li>
        <Link to={'/admindashboard'}>{user?.name}</Link>
      </li>}

      {/* logout */}

      {user && <li className='cursor-pointer' onClick={logout}>
        Logout
      </li>}

      {/* cart */}
      <li>
        <Link to={'/cart'}>Cart({cartItems.length})</Link>
      </li>
    </ul>
  )
  return (
    <nav className='bg-blue-gray-800 sticky top-0'>
      <div className='lg:flex lg:justify-between items-center py-3 lg:px-3'>
        <div className='left py-3 lg:py-0'>
          <Link to='/'>
           <h2 className='font-bold text-white text-2xl text-center'>NisH Store</h2>
          </Link>
        </div>

        <div className='right flex justify-center mb-4 lg:mb-0'>
          {navList}
        </div>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar
