import React from 'react';
import { Routes, Route } from 'react-router-dom'
import { Home } from './Component/Configuring-routes/Home';
import { Navbar } from './Component/Navigating-routes-links/Navbar';
import { Activelinks } from './Component/Navigating-routes-activelinks/Activelinks';
import { OrderSummary } from './Component/Navigating-programmatically/OrderSummary';
import { NoMatch } from './Component/Navigating-programmatically/NoMatch';
import { Products } from './Component/NestedRouter/Products';
import { FeaturedProducts } from './Component/NestedRouter/FeaturedProducts';
import { NewProduct } from './Component/NestedRouter/NewProduct';
import { Users } from './Component/Dynamic-routes/Users';
import { UserDetails } from './Component/Dynamic-routes/UserDetails';
import { UrlParams } from './Component/Route-params/UrlParams'
import { SearchParams } from './Component/Route-params/SearchParams'
import { Profile } from './Component/Authentication-protectedroutes/Profile';
import { AuthProvider } from './Component/Authentication-protectedroutes/Auth';
import { Login } from './Component/Authentication-protectedroutes/Login';

const LazyAbout = React.lazy(()=> import('./Component/Configuring-routes/About'))

function App() {
  return (
    <AuthProvider>
      {/* <Navbar /> */}
      <Activelinks />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='about' element={<React.Suspense fallback='loading...'>
          <LazyAbout />
        </React.Suspense >}></Route>
        <Route path='order-summary' element={<OrderSummary />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
        <Route path='products' element={<Products />}>
            <Route index element={<FeaturedProducts />}></Route>
            <Route path='featured' element={<FeaturedProducts />}></Route>
            <Route path='new' element={<NewProduct />}></Route>
        </Route>
        <Route path='users' element={<Users />}></Route>
        <Route path='users/:userId' element={<UrlParams />}></Route>
        
        {/* <Route path='users/2' element={<UserDetails />}></Route>
        <Route path='users/3' element={<UserDetails />}></Route> */}

        <Route path='search' element={<SearchParams />}></Route>
       <Route path='profile' element={<Profile />}></Route> 
        <Route path='login' element={<Login />}></Route> 
        <Route path='auth' element={<AuthProvider />}></Route>
      </Routes> 
      
    </AuthProvider>

  );
}

export default App;
