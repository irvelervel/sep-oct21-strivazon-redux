import Button from "react-bootstrap/Button";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
// connect creates a HOC from CartIndicator
// a HIGHER ORDER COMPONENT, with the same capabilities as before and more...
// tipically a HIGHER ORDER COMPONENT has MORE PROPS than before!

const CartIndicator = () => {
  const navigate = useNavigate()

  return (
    <div className="ml-auto mt-2">
      <Button color="primary" onClick={() => navigate("/cart")}>
        <FaShoppingCart />
        <span className="ml-2">0</span>
      </Button>
    </div>
  )
}

export default connect()(CartIndicator)
// connect can take up to 2 arguments:
// at least it should receive mapStateToProps
// if we provide mapStateToProps, CartIndicator will be able to READ
// from the redux store!
// if you also want to DISPATCH ACTIONS from this component, in order
// to CHANGE the redux store, you'll need also mapDispatchToProps

// in CartIndicator we just need to READ the cart length...
// ...so we'll just need mapStateToProps

// for reading a value from the redux store or interacting with it (dispatching
// an action) we need to CONNECT the component to it