import React from 'react';
import data from '../data.json';

export default function MixpanelTable() {
  const { mixpanel } = data;

  return (
    <div className="mixpanel-table-container">
      <table>
        <thead>
          <tr>
            <th>Mixpanel Event Name</th>
            <th>數量</th>
          </tr>
        </thead>
        <tbody>
          {mixpanel.map((item, index) => (
            <tr key={index}>
              <td>{item.event}</td>
              <td>{item.count} 個</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 