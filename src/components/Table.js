import React, { useState } from 'react';
import '../css/Table.css';
import jsonData from '../data.json';

function Table() {
  const tableData = useState(jsonData.data);
  const [searchedVal, setSearchedVal] = useState('');

  const tableRows = tableData[0].subgraphs
  .filter((row) =>
    row.displayName
    .toString()
    .toLowerCase()
    .includes(searchedVal.toString().toLowerCase()) 
  ) 
  .map((subgraph) => {
    return (
      <tr className='table-rows'>
        <td>{subgraph.id}</td>
        <td>{subgraph.displayName}</td>
      </tr>
    );
  });
  
  const handleSearch = (event) => {
    setSearchedVal(event.target.value);
  };

  return (
    <div className="table">
      <header className="table-header">
        <p>
          SUBGRAPHS
        </p>
        <input className="search-container" type="text" placeholder='Search' onChange={handleSearch}/>
      </header>
      <body>
        <table>
          <thead className='table-heads'>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </body>
    </div>
  );
}

export default Table;
