import React, {Component} from "react";
import Aux from "../../../hoc/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
            .map(igKey => {
                return (
                    <li key={igKey}>
                        <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
                    </li>);
            });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious Burger with Following Ingredients</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
                <p>Continue to checkout?</p>

                <Button clicked={this.props.purchaseCanceled} btnType='Danger'>Cancel</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>Continue</Button>
            </Aux>
        )
    }

}

export default OrderSummary;