import React from 'react'
import {Container, Navbar, Button, FormControl, Nav, Dropdown, Badge} from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import {FaShoppingCart} from 'react-icons/fa'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import { Cartstate } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom'


const Header = () => {
    const { state: {cart}, dispatch, prodDispatch } = Cartstate()
  return (
     <Navbar bg="dark" variant = "dark" style={{height: 80}}>
      <Container>
        <Navbar.Brand>
            <Link to="/">Shopping Cart</Link>
        </Navbar.Brand>
       <Navbar.Text className = 'search'>
           <FormControl style={{ width: 500}} placeholder='Search' onChange={(e) => prodDispatch({
            type: 'FILTER_BY_SEARCH',
            payload: 'e.target.value',
        })}/>
       </Navbar.Text>
       <Nav>
        <Dropdown alignRight>
          <DropdownToggle variant="success">
           <FaShoppingCart color='white' fontsize="25px" />
           <Badge>{cart.length}</Badge>
          </DropdownToggle>
          <DropdownMenu style={{minWidth: 370}}>
            {cart.length>0?(
             <>
             {cart.map(prod=>(
                <span className='cartitem' key={prod.id}>
               <div className='cartItemDetail'>
                <span>{prod.name}</span>
                <span>${prod.price.split(".")[0]}</span>
               </div>
               <AiFillDelete
               fontSize="20px" style={{cursor: "pointer"}}
               onClick={() =>
                dispatch({
                    type:"REMOVE_FROM_CART",
                        payload: prod,
                })}
               />
               </span>
             ))}  
             <Link to="/cart">
                <Button style={{ width:"50%", margin: "0 5px"}}>Go to Cart</Button>
             </Link>  
             </>
            ):(<span style={{padding:10}}>Cart is Empty</span>)}

          </DropdownMenu>
        </Dropdown>
       </Nav>
      </Container>
     </Navbar>
  )
}

export default Header