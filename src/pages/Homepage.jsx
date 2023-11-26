import Sidebar from "../components/Sidebar.jsx";

import React from 'react';

const Homepage = () => {
  return (
    <div>
      <Sidebar/>
      <h1>Welcome to the Homepage</h1>
      <p>This is a simple homepage for authenticated users.</p>
    </div>
  );
};
export default Homepage;
