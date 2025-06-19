import React from 'react';

export default function MixpanelTable() {
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
          <tr>
            <td>v2.view.opened</td>
            <td>13534 個</td>
          </tr>
          <tr>
            <td>v2.user.clicked</td>
            <td>14120 個</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 