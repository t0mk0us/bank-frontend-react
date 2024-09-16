import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccountsSearch from './pages/search/AccountsSearch';
import InvestmentsSearch from './pages/search/InvestmentsSearch';
import BranchesSearch from './pages/search/BranchesSearch';
import EmployeesSearch from './pages/search/EmployeesSearch';
import EnterpriseSearch from './pages/search/EnterpriseSearch';
import CurrencyPage from './pages/CurrencyPage';
import NerdGirl2 from './pages/images/NerdGirl2.jpg';
import NavBar from './NavBar';
import Footer from './Footer';


function App() {

  const navigate = useNavigate();

  const navigateHome = () => {
      navigate('/');
  }

  const navigateToAccounts = () => {

      navigate('/accounts');
  }

  const navigateToEnterprises = () => {

    navigate('/enterprises');
}

  const navigateToCurrencyList = () => {

      navigate('/currency');
  }

  const navigateToInvestment = () => {

      navigate('/investments');
  }

  const navigateToSearch = () => {

    navigate('/search');
}

const navigateToEmployee = () => {

  navigate('/employees');
}

const navigateToBranches = () => {

  navigate('/branches');
}

  return (

    // <BrowserRouter> (put in the index.js (hence on the top level which includes App.js) to apply to useNavigate as well)
    
    <div className="App">
      <table>
        <tr>
        <td rowspan="6" valign="top" width="250">
        <div>
        <br /><br /><br />
          {/* <Avatar /> */}
          
          <img src={NerdGirl2} alt="Nerd Girl" width="250" />
          </div>
          <h3>Hi! I am Tamara</h3>
      <h4>Welcome to my 
        <br />
        Super Bank !</h4>
          </td>
        </tr>
        <tr>
          <td>
      <div id="page-body">
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/about" element={< AboutPage />} />
          <Route path="/accounts" element={< AccountsSearch />} />
          <Route path="/investments" element={< InvestmentsSearch />} />
          <Route path="/branches" element={< BranchesSearch />} />     
          <Route path="/employees" element={< EmployeesSearch />} />  
          <Route path="/enterprises" element={< EnterpriseSearch/>} />     
          <Route path="/currency" element={< CurrencyPage />} />
        </Routes> 
      </div>
      </td>
        </tr>
        <tr>
          <td>
      <div id="buttons" align="center" valign="bottom">
       <button onClick={navigateHome}>Home</button>
        <Link to="/accounts">
          <button onClick={navigateToAccounts}>Client Accounts</button>  
        </Link>
        <button onClick={navigateToEnterprises}>Enterprise Accounts</button>
        <button onClick={navigateToInvestment}>Investments</button>
        <Link to="/currency">
          <button onClick={navigateToCurrencyList}>Currency</button>
        </Link>
        <button onClick={navigateToBranches}>Branches</button>
        <button onClick={navigateToEmployee}>Employees</button>
        <button onClick={navigateToSearch}>Search</button>
      </div>
</td>
          </tr>
      </table> 
      <div>
        <NavBar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    // </BrowserRouter>
  );

}

export default App;
