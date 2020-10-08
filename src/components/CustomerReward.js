import React from 'react';
import Calculaterewards from '../api/RewardsCalculator';

function CustomerRewards(props) {
    const { customerPurchaseData } = props;

    return (
        <div className="customer-rewards">
             <h3>Customer Rewards </h3>
            <ul>
                {
                    Object.keys(customerPurchaseData).map(customer =>
                        <li key={customer}>{customer}
                            <h5>Total: {customerPurchaseData[customer].reduce((total, obj) => {
                                total += Calculaterewards(obj.amountSpend);
                                return total;
                            }, 0)}</h5>
                        </li>
                    )
                }
            </ul>

        </div>
    );
}

export default CustomerRewards;