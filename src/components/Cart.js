import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Cartstate } from '../context/Context'
import Rating from './Rating';

const Cart = () => {
    const { state: {cart}, dispatch } = Cartstate()
  return <div className='home'>
          <div className='productContainer'>
       <ListGroup>
       {cart.map(prod=>(
        <ListGroup.Item key={prod.id}>
           <Row>
             <Col md={2}>
             <span>{prod.name}</span>  
             </Col>
             <Col md={2}> ${prod.price}  </Col>
             <Rating rating={prod.ratings} />             
           </Row>  
           </ListGroup.Item> 
             ))}
       </ListGroup>
       <div className='filters summary'>
        <span className='title'>Subtotal ({cart.length}) items</span>
       </div>


     </div>
 </div>
  
}

export default Cart