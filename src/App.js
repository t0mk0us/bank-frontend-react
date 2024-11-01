import './App.css';
import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import AccountsPage from './pages/AccountsPage';
import EnterprisePage from './pages/EnterprisePage';
import InvestmentPage from './pages/InvestmentPage';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AccountsSearch from './pages/search/AccountsSearch';
import InvestmentsSearch from './pages/search/InvestmentsSearch';
import BranchesSearch from './pages/search/BranchesSearch';
import EmployeesSearch from './pages/search/EmployeesSearch';
import EnterpriseSearch from './pages/search/EnterpriseSearch';
import CurrencyPage from './pages/CurrencyPage';
import NerdGirl2 from './pages/images/NerdGirl2.jpg';
import D4LogicLogo from './pages/images/D4LogicLogo.jpg';
import NavBar from './NavBar';
import Footer from './Footer';


function App() {

  const navigate = useNavigate();

/*   const navigateHome = () => {
      navigate('/');
  } */

  const navigateToAccountsSearch= () => {

      navigate('/search/accounts');
  }

  const navigateToEnterprisesSearch = () => {

    navigate('/search/enterprises');
}

  const navigateToInvestmentSearch = () => {

      navigate('/search/investments');
  }

const navigateToEmployeeSearch = () => {

  navigate('/search/employees');
}

const navigateToBranchesSearch = () => {

  navigate('/search/branches');
}

  return (

    // <BrowserRouter> (put in the index.js (hence on the top level which includes App.js) to apply to useNavigate as well)
    
    <div className="App">
     
      <table cellPadding="0px" cellSpacing="0px">
      <tr>
        <td class="logo">
          &nbsp;&nbsp;
          <img src={D4LogicLogo} alt="Design4Logic logo" width="200" /> 
        </td>
        <td class="topimage" colspan="3" valign="top" width="100%" height="100">
          <br />
        </td>
      </tr>
      <tr>
        <td colspan="4" valign="top">
          <div>
            <NavBar />
          </div>
        </td>
      </tr>
      <tr>
        <td rowspan="6" valign="top" width="250">
        {/* <div> */}
        <br />
          {/* <Avatar /> */}
          <img src={NerdGirl2} alt="Nerd Girl" width="250" />
          {/* </div> */}
          <h4>Hi!
            <br />
            I am Tamara!
            <br />
            Welcome to my
            <br />
          <b>Super Bank !</b>
          </h4> 
          </td>
        </tr>
        <tr>
          <td>
      <div id="page-body">
        <Routes>
          <Route path="/" element={< HomePage />} />
          <Route path="/about" element={< AboutPage />} />
          <Route path="/search/accounts" element={< AccountsSearch />} />
          <Route path="/search/investments" element={< InvestmentsSearch />} />
          <Route path="/search/branches" element={< BranchesSearch />} />     
          <Route path="/search/employees" element={< EmployeesSearch />} />  
          <Route path="/search/enterprises" element={< EnterpriseSearch/>} />     
          <Route path="/currency" element={< CurrencyPage />} />
          <Route path="/accounts" element={< AccountsPage />} />
          <Route path="/enterprises" element={< EnterprisePage />} />
          <Route path="/investments" element={< InvestmentPage />} />
          <Route path="/services" element={< ServicesPage />} />
          <Route path="/contact" element={< ContactPage />} />
        </Routes> 
      </div>
      </td>
        </tr>
        <tr>
          <td>
      <div id="buttons" align="left" valign="top">
         <m class="insidetitle">SEARCH</m>
       &nbsp;&nbsp;
        <Link to="/search/accounts">
          <button onClick={navigateToAccountsSearch}>Client Accounts</button>  
        </Link>
        <Link to="/search/enterprises">
          <button onClick={navigateToEnterprisesSearch}>Enterprise Accounts</button>
        </Link>
        <Link to="/search/investments">
          <button onClick={navigateToInvestmentSearch}>Investments</button>
        </Link>
        <Link to="/search/branches">
          <button onClick={navigateToBranchesSearch}>Branches</button>
        </Link>
        <Link to="/search/employees">
          <button onClick={navigateToEmployeeSearch}>Employees</button>
        </Link>
      </div>
    </td>
  </tr>
  <tr>
    <br />
  </tr>
</table> 
      <div>
        <Footer />
      </div>
    </div>
    // </BrowserRouter>
  );

}

export default App;
