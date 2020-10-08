import React from 'react';
import Calculaterewards from '../api/RewardsCalculator';

function MonthlyRewards(props) {
    const months = [ '', "JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const { monthlyPurchaseData } = props;

    return (
        <div className="monthly-rewards">
            <h3>Monthly Wise Rewards </h3>
            <ul>

                {
                    Object.keys(monthlyPurchaseData).map(year =>
                        <li key={year}><h5>{year}</h5>
                            {
                                Object.keys(monthlyPurchaseData[year]).sort().map(month =>
                                    <div key={months[Number(month)]} ><h5> {months[Number(month)]}</h5>
                                        <ul key={month}> {monthlyPurchaseData[year][month].map(d =>
                                            <li key={d.customerId}>
                                                <div>  {d.customerName}</div>
                                                <div>  {Calculaterewards(d.amountSpend)}</div>
                                            </li>
                                        )}
                                        </ul>
                                    </div>
                                )
                            }

                        </li>
                    )
                }
            </ul>

        </div>
    );
}

export default MonthlyRewards;