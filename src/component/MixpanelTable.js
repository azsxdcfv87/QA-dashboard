import React from 'react';
import data from '../data.json';

export default function MixpanelTable() {
  const { mixpanel } = data;

  return (
    <div className="mixpanel-table-container">
      <table border="1" cellPadding="8" style={{ width: "100%", tableLayout: "fixed", marginBottom: 16 }}>
        <thead>
          <tr>
            <th>事件名稱</th>
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