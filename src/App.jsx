import { useState } from "react";
import "./App.css";

function App() {
  const [expense, setExpense] = useState([]);
  const [when, setWhen] = useState([]);
  const [what, setWhat] = useState([]);

  function handleData(e) {
    e.preventDefault();
    const { expense, when, what } = e.target;
    setExpense(expense.value);
    setWhen(when.value);
    setWhat(what.value);
  }

  return (
    <div className="App">
      <h1>Money time calculator</h1>
      <form onSubmit={handleData}>
        <label htmlFor="expense">Expense £ </label>
        <input type="number" name="expense" id="expense"></input>
        <br />
        <label htmlFor="when">When: </label>
        <input type="date" name="when" id="when"></input>
        <br />
        <label htmlFor="what">What: </label>
        <input type="text" name="what" id="what"></input>
        <br />
        <button type="submit">Submit</button>
      </form>
      {/* <div>
        {expense || when || what ? (
          <>
            <span>{when}</span>
            <span>{what}</span>
            <span>{expense}</span>
          </>
        ) : null}
      </div> */}
    </div>
  );
}

export default App;
