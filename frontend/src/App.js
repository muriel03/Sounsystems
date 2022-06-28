import './assets/css/app.css';
import { ContentWrapper } from './components/ContentWrapper';
import SideBar from './components/SideBar';
import {Route, Routes} from 'react-router-dom';
import React from 'react';
import {DetailProduct} from "./components/products/DetailProduct"
import {UserList} from "./components/users/UserList";

function App() {
  return (   
      
      <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Routes>
                <Route path="/" element={ <ContentWrapper />}/>
                <Route path="/products/:id" element={<DetailProduct/>}/>
                <Route path="/users" element={<UserList/>}/>
                {/*<Route path="/products" element={<Product/>}/>
                <Route path="/users/:id" element={<DetailUser/>}/>
                <Route path="*" element={<NotFound/>} />*/}
            </Routes>
        </div>
    </React.Fragment>
      

  );
}

export default App;
