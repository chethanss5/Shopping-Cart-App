
import { Form, Button } from "react-bootstrap";
import Rating from './Rating';
import { Cartstate } from '../context/Context';

const Filters = () => {
  
  const { prodState:{ sort, byRating}
  , prodDispatch } = Cartstate()

  return (
    <div className='filters'>
        <span className='title' >Filter Products</span>
        <span>
        <Form.Check
            inline
            label="Ascending"
            name="group1"
            type="radio"
            id={`inline-1`}
            onChange={() => prodDispatch({
                type: 'SORT_BY_PRICE',
                payload: "LowToHigh",
            })}
            checked={sort === "LowToHigh"? true: false}
          />
          </span>
          <span>
          <Form.Check
            inline
            label="Descending"
            name="group1"
            type="radio"
            id={`inline-2`}
            onChange={() => prodDispatch({
                type: 'SORT_BY_PRICE',
                payload: "HighToLow",
            })}
            checked={sort === "HighToLow"? true: false}
          />
        </span>
        <span>
            <label style={{ paddingRight: 10 }}>Rating: </label>
            <Rating 
            rating={byRating} 
            onClick={(i) => prodDispatch({
                type: "FILTER_BY_RATING",
                payload: i+1,
            })}
            style={{ cursor: "Pointer"}}/>
        </span>
       <Button variant="light" onClick={() => prodDispatch({
                type: 'CLEAR_FILTERS',
            })} 
            >Clear Filters</Button>
    </div>
  )
}

export default Filters