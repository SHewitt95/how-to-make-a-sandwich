import React, { useContext, useEffect, useState } from 'react';
import { Context, Actions } from '../../context/GlobalState';
import { EMPLOYEE_BASE_SALARY } from '../_utils/constants';
import { useInterval, convertToFloat, convertToMoney, numberWithCommas } from '../_utils/helpers';
import PurchaseButton from '../PurchaseButton';

const calculatePayroll = employeeTypes => {
  const countAndPay = Object
    .keys(employeeTypes)
    .map(type => {
      return {
        count: employeeTypes[type].count,
        pay: EMPLOYEE_BASE_SALARY[type].salary,
      };
    });
  
  const reducer = (accumulator, currentValue) => accumulator + (currentValue.count * currentValue.pay);
  return countAndPay.reduce(reducer, 0);
}

const calculateSandwichesPerSecond = employeeTypes => {
  const countAndRate = Object
    .keys(employeeTypes)
    .map(type => {
      return {
        count: employeeTypes[type].count,
        sandwichesPerSecond: EMPLOYEE_BASE_SALARY[type].sandwichesPerSecond,
      };
    });

  const reducer = (accumulator, currentValue) => accumulator + (currentValue.count * currentValue.sandwichesPerSecond);
  return countAndRate.reduce(reducer, 0);
}

const EmployeeManager = () => {
  const [state, dispatch] = useContext(Context);
  const { employeeTypes } = state;

  const maxDays = 14;
  const [totalPayroll, setPayroll] = useState(0);
  const [daysUntilPayroll, setDaysUntilPayroll] = useState(0);
  const [totalSandwichProductionRate, setTotalSandwichProductionRate] = useState(0);
  const [accumulatedSandwich, setAccumulatedSandwich] = useState(0.0);

  useEffect(() => setPayroll(calculatePayroll(employeeTypes)), [employeeTypes]);

  useEffect(() => {
    if (state.employeeCount > 0) {
      setTotalSandwichProductionRate(calculateSandwichesPerSecond(employeeTypes));
    }
  }, [state.employeeCount, employeeTypes]);

  useInterval(() => {
    if (state.employeeCount > 0) {
      setAccumulatedSandwich(accumulatedSandwich + (totalSandwichProductionRate/100));
      if (accumulatedSandwich >= 1.0) {
        dispatch({ type: Actions.MAKE_SANDWICH, payload: Math.floor(accumulatedSandwich) });
        setAccumulatedSandwich(accumulatedSandwich - 1);
      }
    }
  }, 10);

  useInterval(() => {
    if (state.employeeCount > 0) {
      const tempValue = daysUntilPayroll - 1;
      const value = tempValue === -1 ? maxDays : tempValue;
      setDaysUntilPayroll(value);
      if (value === 0) {
        dispatch({ type: Actions.PAY_PAYROLL, payload: totalPayroll });
      }
    }
  }, 5000);


  return (
    <>
      <section>
        <h4>Employee Manager</h4>
        <p>Number of employees: {numberWithCommas(state.employeeCount)}</p>
        <p>Sandwiches made per second: {numberWithCommas(convertToFloat(totalSandwichProductionRate, 1))}</p>
        <p>Days until Payday: {daysUntilPayroll}</p>
        <p>Total Payroll: {convertToMoney(totalPayroll)}</p>
        <PurchaseButton onClick={() => dispatch({ type: Actions.HIRE_EMPLOYEE, payload: { price: 100, eType: 'Basic' } })} price={100}>Hire Employee</PurchaseButton>
      </section>
    </>
  );
}

export default EmployeeManager;