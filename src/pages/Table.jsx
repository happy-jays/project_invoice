import React, { useState } from 'react'
import "./invoice.css";
function Table() {
    const [clients, setClients] = useState([
        {
          id: 1,
          name: 'Astu Technologies Private Limited',
          phone: '+918934834069',
          email: 'akshay.kota16@gmail.com',
          gstin: '-',
          pan: '-',
          country: 'INDIA',
        },
        {
          id: 2,
          name: 'XYZ Technologies Private Limited',
          phone: '+918934834069',
          email: 'akshay93jaiswal@gmail.com',
          gstin: 'ABCDEFGHIJKLMNO',
          pan: 'ABCDEFGHIJ',
          country: 'INDIA',
        },
        {
            id: 3,
            name: 'XYZ Technologies Private Limited',
            phone: '+918934834069',
            email: 'akshay93jaiswal@gmail.com',
            gstin: 'ABCDEFGHIJKLMNO',
            pan: 'ABCDEFGHIJ',
            country: 'INDIA',
          },
          {
            id: 4,
            name: 'XYZ Technologies Private Limited',
            phone: '+918934834069',
            email: 'akshay93jaiswal@gmail.com',
            gstin: 'ABCDEFGHIJKLMNO',
            pan: 'ABCDEFGHIJ',
            country: 'INDIA',
          },  

      ]);
      const [selectedClients, setSelectedClients] = useState([]);
    
      const handleClientSelection = (event, id) => {
        const isChecked = event.target.checked;
        if (isChecked) {
          setSelectedClients([...selectedClients, id]);
        } else {
          setSelectedClients(selectedClients.filter((clientId) => clientId !== id));
        }
      };
    
      const handleDelete = () => {
        setClients(clients.filter((client) => !selectedClients.includes(client.id)));
        setSelectedClients([]);
      };
  return (
    <div className='table'>
      <button className='table-btn-dlt'>Delete</button>
      <table className='table-table'>
        <thead className='table-thead'>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th className='th-cn'>Client Name</th>
            <th className='th-cn'>Phone</th>
            <th className='th-cn'>Email</th>
            <th>GSTIN/TaxID</th>
            <th>PAN</th>
            <th>Country</th>
            <th className='th-eid'></th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <td>
                <input type="checkbox" onChange={(event) => handleClientSelection(event, client.id)} />
              </td>
              <td className='td-cn'>{client.name}</td>
              <td className='td-cn'>{client.phone}</td>
              <td className='td-cn'>{client.email}</td>
              <td>{client.gstin}</td>
              <td>{client.pan}</td>
              <td>{client.country}</td>
              <td className='td-eid'>
                <button className='btn-edt'>Edit</button>
                <button className='btn-invc'>Invoice</button>
                <button className='btn-del'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table