import React from 'react'

import "./Table.css"

const Table = () => {
  return (
    <table>
        <tr>
          <th>App Name</th>
          <th>Region</th>
          <th>Energy Saved in hrs</th>
        </tr>
        <tr>
          <td>1</td>
          <td>india</td>
          <td>123 </td>
        </tr>
        <tr>
          <td>2</td>
          <td>europe</td>
          <td>24</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Thailand</td>
          <td>256</td>
        </tr>
      </table>
  )
}

export default Table