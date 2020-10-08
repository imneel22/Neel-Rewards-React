import React, { useEffect, useState } from 'react';
import fetchPurchaseData from './api/purchaseData';
import CustomerRewards from './components/CustomerReward';
import MonthlyRewards from './components/MonthlyRewards';
import './App.css';

function App() {
  const [purchaseData, SetPurchaseData] = useState(null);
  const [monthlyPurchaseData, SetMonthlyPurchaseData] = useState(null);
  const [customerPurchaseData, SetCustomerPurchaseData] = useState(null);

  const retrieveCustomerPurchase = (data) => {
    const customerPurchaseData = data.reduce((groups, item) => {
      const group = (groups[item.customerName] || []);
      group.push(item);
      groups[item.customerName] = group;
      return groups;
    }, {});
    SetCustomerPurchaseData(customerPurchaseData);
  }

  const retrieveMonthlyPurchase = (data) => {
    let monthlyData = data.reduce((list, value) => {
      const date = value.purchaseDate.split('-');
      let temp = list;
      var key = date[2];
      if (!temp.hasOwnProperty(key)) temp[key] = {};
      temp = temp[key];
      key = date[1];
      if (!temp.hasOwnProperty(key)) temp[key] = [];
      temp = temp[key];
      temp.push(value);
      return list;
    }, {});
    SetMonthlyPurchaseData(monthlyData);
  }

  const loadPurchaseData = () => {
    fetchPurchaseData().then((res) => {
      SetPurchaseData(res);
      retrieveMonthlyPurchase(res);
      retrieveCustomerPurchase(res);
    });
  }

  useEffect(() => {
    loadPurchaseData();
  }, []);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        {
          customerPurchaseData && <div className="rewards">
            <CustomerRewards customerPurchaseData={customerPurchaseData} />
          </div>
        }
        {
          monthlyPurchaseData && <div className="rewards">
            <MonthlyRewards monthlyPurchaseData={monthlyPurchaseData} />
          </div>
        }


      </main>
    </div>
  );
}

export default App;
