import './budget.scss';
//elements
import ExpenseByShopCard from './cards/ExpenseByShopCard';
import ExpenseByYearCard from './cards/ExpenseByYearCard';
import ExpenseByMonthCard from './cards/ExpenseByMonthCard';

function Budget() {
  return (
    <div className="budget">
      <ExpenseByShopCard />
      <ExpenseByMonthCard />
      <ExpenseByYearCard />
    </div>
  );
}

export default Budget;
