import React from 'react';

 function AccountsSearch() {

  const [firstname, setFirstName] = React.useState('');
  const [lastname, setLastName] = React.useState('');
  const [accountnumber, setAccountNumber] = React.useState('');

  const handleFirstNameChange = (event) => {

    setFirstName(event.target.value);
  
  };

  const handleLastNameChange = (event) => {

    setLastName(event.target.value);
  
  };

  const handleAccountNumberChange = (event) => {

    setAccountNumber(event.target.value);
  
  };
  
  const handleSubmit = (event) => {
    alert('First Name is: ' + firstname);
    alert('Last Name is: ' + lastname);
    alert('Account Number is: ' + accountnumber);
    event.preventDefault();
  };

      return (
        <form action="/find_account" id="form1" onSubmit={handleSubmit}>
            <table>
              <tr>
                    <td colspan="2">
                        <h5>Find an Account(s)</h5>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <h6>Search by name</h6>
                    </td>
                    <td align="left">
                        <h6>Search by Account #</h6>
                    </td>
                </tr>
                <tr>
                  <td>
                      <label for="firstname">First name:</label>
                      <input type="text" id="firstname" name="firstname"  value={firstname} onChange={handleFirstNameChange} />
                          <br />
                      <label for="lastname">Last name:</label>
                      <input type="text" id="lastname" name="lastname" value={lastname} onChange={handleLastNameChange} />                   
                  </td>
                  <td>
                  <label for="accountnumber">Account Number:</label>
                      <input type="text" id="accountnumber" name="accountnumber"  value={accountnumber} onChange={handleAccountNumberChange} />            
                  </td>
              </tr>
              <tr>
                    <td colspan ="2" align="right">
                    <button class="searchbutton" onClick={handleSubmit}>
                        Search
                    </button>
                    </td>
                </tr>
            </table>
    </form> 
      );
    }

  export default AccountsSearch;