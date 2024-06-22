import React, {useState} from 'react';


function ExpenseForm() {

    const [expenses, setExpense] = useState([]);          /* not correct yet */
    const [dateExpense, setDateExpense] = useState("");
    const [typeExpense, setTypeExpense] = useState("");
    const [numAmount, setNumAmount] = useState("");
    const [description, setDescription] = useState("");    
        

    function addExpense() {
        const expenses = {  date: dateExpense,
                            type: typeExpense,
                            amount: numAmount,
                            desc: description};

        setExpense(e => [...e, expenses]);
        
        setDateExpense("");
        setTypeExpense("");
        setNumAmount("");
        setDescription("");
    }

    function handleRemoveExpense(index) {                       
        setExpense(e => e.filter((_, i) => i!== index));
    }

    /* function handleRemoveAllExpenses() {                    /* button not working yet 
        let noExpenses = expenses;
        expenses = [];
        setExpense(noExpenses);

    } */

    function handleDateChange(event) {
        setDateExpense(event.target.value);
    }

    function handleTypeChange(event) {
        setTypeExpense(event.target.value);
    }

    function handleAmountChange(event) {
        setNumAmount(event.target.value);
    }

    function handleDescriptionChange(event) {
        setDescription(event.target.value);
    }

/* need sort function and show/hide function */

    return (
        <>
        <div className="card1">
            <div className="addExpenses">
                <h2>Add Expenses</h2>
                <form id="formContainer" className="formContainer">
                    <label for="dateExpense">Date of Expense:</label>
                    <input type="date" id="dateExpense" name="dateExpense" value={dateExpense} onChange={handleDateChange} required/><br/>

                    <label for="typeExpense">Type of Expense:</label>
                    <select id="typeExpense" name="typeExpense" size="4" value={typeExpense} onChange={handleTypeChange} multiple required>
                        <option id="rent" value = "Rent">Rent</option>
                        <option id="utilities" value = "Utilities">Utilities</option>
                        <option id="groceries" value = "Groceries">Groceries</option>
                        <option id="gas" value = "Gas">Gas</option>
                        <option id="phone" value = "Phone">Phone</option>                    
                        <option id="loans" value = "Loans">Loans</option>
                        <option id="insurance" value = "Insurance">Insurance</option>
                        <option id="entertainment" value = "Entertainment">Entertainment</option>
                        <option id="other" value = "Other">Other</option>
                    </select><br/>

                    <label for="numAmount">Amount ($):</label>
                    <input type="number" id="numAmount" name="numAmount" min="0" step="0.01" pattern="/^\d+(\.\d{1,2})?$/" 
                           value={numAmount} onChange={handleAmountChange} required/><br/>

                    <label>List a Description:</label>
                    <textarea id="description" name="description" placeholder="Write description here (optional)" 
                              rows="3" cols="35" maxlength="100" value={description} onChange={handleDescriptionChange}></textarea><br/>
                    <div className="subButton">
                        <button id="submit" type="submit" onClick={addExpense}>SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>

        <div className="card2">
            <div class="viewExpenses">          {/* need class of hidden later */}
                <div id="output" className="scrollable">    
                    <h2 className="viewExpensesHeader">View Expenses</h2> 
                        <div class="clearButton">
                            <button onClick={() => handleRemoveAllExpenses()}>CLEAR ALL EXPENSES</button>              {/* button need onclick event: onclick="clearAllExpenses()" */}
                        </div>
                        <table id="expenseTable">
                            <thead>
                                <tr>
                                    <th>DATE</th>
                                    <th>TYPE</th>
                                    <th>AMOUNT ($)</th>
                                    <th>DESCRIPTION</th>
                                    <th>DELETE</th>
                                </tr>
                            </thead>
                        </table>
                        <tbody>
                            {expenses.map((expense, index) =>
                                <tr key={index}>
                                    <td>{expense.dateExpense}</td><td>{expense.typeExpense}</td><td>{expense.numAmount}</td>
                                    <td>{expense.description}</td><td><button onClick={() => handleRemoveExpense(index)}>X</button></td>
                                </tr>
                            )}
                        </tbody>
                </div>
            </div>
        </div>
        </>
    );
};

export default ExpenseForm;