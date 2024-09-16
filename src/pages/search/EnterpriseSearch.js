import React from 'react';

  function EnterpriseSearch() {
  
  const [name, setName] = React.useState('Make a Choice');
  const [industry, setIndustry] = React.useState('');

  const handleNameChange = (event) => {

    setName(event.target.value);
  
  };

  const handleIndustryChange = (event) => {

    setIndustry(event.target.value);
  
  };

  const handleSubmit = (event) => {
    alert('Company Name is: ' + name);
    alert('Company Industry is: ' + industry);
    event.preventDefault();
  };

      return (
        <form action="/find_company" id="form2" onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td colspan="2">
                        <h5>Find a Company</h5>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <h6>Search by Name</h6>
                    </td>
                    <td align="left">
                        <h6>Search by Industry</h6>
                    </td>
                </tr>
                <tr>
                    <td>
                        <label for="name">Company Name:</label>
                        <input type="text" id="name" name="name"  value={name} onChange={handleNameChange} /> 
                    </td>
                    <td>
                    <label for="industry">Company Industry:</label>
                        <input type="text" id="industry" name="industry"  value={industry} onChange={handleIndustryChange} />            
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

  export default EnterpriseSearch;