const AccountsPage = () => {

    return (
        <>
            <table>
                <tr>
                    <td colSpan="3">
                        <h5>Available Individual Accounts</h5>
                    </td>
                </tr>
                <tr>
                    <td align="left">
                        <h6>
                            Deposit
                            <br />
                            &nbsp;
                        </h6>
                        Checking    
                        <br />
                        Saving
                        <br />
                        High Interest Saving
                        <br />                       
                    </td>  
                    <td align="left">
                        <h6>
                            Loans
                            <br />
                            &nbsp;
                        </h6>
                        Personal Loan
                        <br />
                        Garanteed Line of Credit
                        <br />
                        Mortgage
                        <br />
                    </td>  
                    <td align="left">
                        <h6>
                            Investments
                            <br />
                            &nbsp;
                        </h6>
                        RSP
                        <br />
                        GIC                      
                        <br />
                    </td> 
                </tr>
            </table>  
        </>
        
    )
} 

export default AccountsPage;