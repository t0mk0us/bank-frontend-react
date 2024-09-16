import React from 'react';
import Dropdown from '../lists/Dropdown';

 //class BranchesSearch extends React.Component {
  function BranchesSearch() {

    const [province, setProvince] = React.useState('Make a Choice');
    const [transit, setTransit] = React.useState('');

    const handleProvinceChange = (event) => {

      setProvince(event.target.value);
   
    };

    const handleTransitChange = (event) => {

      setTransit(event.target.value);
   
    };
  
    const handleSubmit = (event) => {
      alert('Province is: ' + province);
      alert('Transit is: ' + transit);
      event.preventDefault();
    };
  
      return (
        <form action="/find_branch" id="form2" onSubmit={handleSubmit}>
            <table>
                    <tr>
                        <td colspan="2">
                            <h5>Find a Branch(es)</h5>
                        </td>
                    </tr>
                    <tr>
                        <td align="left">
                            <h6>Search by Province</h6>
                        </td>
                        <td align="left">
                            <h6>Search by Transit #</h6>
                        </td>
                    </tr>
                    <tr>
                        <td>
                       
                            <Dropdown

                                label="Province: &nbsp;"
                                                               
                                options={[
                                    { label: 'Choose a Province', value: 'Unknown'},
                                    { label: 'Alberta', value: 'Alberta' },
                                    { label: 'British Columbia', value: 'British Columbia' },
                                    { label: 'Manitoba', value: 'Manitoba' },
                                    { label: 'New Brunswick', value: 'New Brunswick' },
                                    { label: 'Newfoundland and Labrador', value: 'Newfoundland and Labrador' },
                                    { label: 'Nova Scotia', value: 'Nova Scotia' },
                                    { label: 'Ontario', value: 'Ontario' },
                                    { label: 'Prince Edward Island', value: 'Prince Edward Island' },
                                    { label: 'Quebec', value: 'Quebec' },
                                    { label: 'Saskatchewan', value: 'Saskatchewan' }
                                ]}
                                
                                value={province}

                                onChange={handleProvinceChange}
                                
                                />
                        </td>
                        <td>
                        <label for="transit">Transit Number:</label>
                        &nbsp;&nbsp;
                        <input type="text" id="transit" name="transit" value={transit} onChange={handleTransitChange} />            
                        </td>
                    </tr>
                  <tr>
                    <td colspan ="2" align="right">
                    <button class="searchbutton" onClick={handleSubmit}>
                        Search
                    </button>
                    </td>
                </tr>
                <tr>
                  <td colspan="2">
                  </td>
                </tr>
            </table>
    </form> 
    
      );
    }

  export default BranchesSearch;