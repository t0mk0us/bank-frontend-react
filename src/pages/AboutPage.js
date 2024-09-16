import React from 'react';
// import { Routes, Route, useNavigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import visa from './images/visalogo.jpg'
import masterlogo from './images/masterlogow.jpg'

function AboutPage () {

    
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
  
    navigate('/employee');
  }
  
  const navigateToBranches = () => {
  
    navigate('/branches');
  }

    return (
        <>
        <table>
              <tr>
                  <td colSpan="2">
                      <h5>Hello!</h5>
                  </td>
              </tr>
              <tr>
                  <td align="left"  padding="5px">
                  Our Bank provides both 
                  <br />
                  retail and enterprise services.
                  </td>  
                  <td align="left" valign="top" padding="5px">
                  We offer to our clients 
                  <br />
                  the following Credit Cards:
                  <br />
                    <img src={visa} alt="visa_logo" width="60"/>
	                &nbsp; Visa
                    <br />
                    <img src={masterlogo} alt="mastercard_logo" width="60"/>
	                &nbsp; MasterCard
                  </td>  
              </tr>
              <tr>
                  <td colspan="2">
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
    </>
    )
} 

export default AboutPage;