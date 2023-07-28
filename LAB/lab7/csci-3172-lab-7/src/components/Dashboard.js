import React from 'react';
import {Link} from 'react-router-dom';



const Dashboard = () => {
    return (
        <div style={{padding:"20px", backgroundColor:"pink"}}>
        <h1 style={{padding:"20px"}}>Dummy Page</h1>

        <br />
        
          <h2 style={{padding:"20px"}}>
            {/* Endpoint to route to Home component */}
            <Link to="/form">Click Here to fill out form</Link>
          </h2>
        
        
      </div>
      
    )

}

export default Dashboard;