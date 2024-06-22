

function ExpenseChart() {

    return (
        <>
        <div class="wrapper">
            <div class="chartContainer">
                <div class="expenseTitle">
                    <h2>Expenses</h2>
                </div>
                <div class="chart-wrapper">
                    <canvas id="myChart"></canvas> 
                </div>
            </div>
        </div>
        </>
    )
}

export default ExpenseChart;