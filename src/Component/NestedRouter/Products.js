import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const Products = () => {
    return (
      <>
            <div>
                <input type="search" placeholder='Search Products'></input>
            </div>
            <nav>
                <Link to='/products/featured'>Featured</Link>
                <Link to='/products/new'>New</Link>
            </nav>
            <Outlet />
        </>
  )
}
