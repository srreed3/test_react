import ExpenseFormList from "./ExpenseFormList";
import Header from "./Header";
import ExpenseChart from "./ExpenseChart";
import Footer from "./Footer";
import './index.css';
import PageRefresh from "./PageRefresh";

function App() {


  return (
    <>
      <PageRefresh />
      <Header />
      <ExpenseFormList />
      <ExpenseChart />
      <Footer />
    </>
  )
}

export default App;