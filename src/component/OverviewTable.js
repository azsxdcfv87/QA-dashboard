import React from 'react';

export default function OverviewTable() {
  return (
    <div className="overview-table-container">
      <table border="1" cellPadding="8" style={{ width: "100%", tableLayout: "fixed", marginBottom: 16 }}>
        <thead>
          <tr>
            <th>總測試數</th>
            <th>通過測試</th>
            <th>失敗測試</th>
            <th>執行環境</th>
            <th>執行時間</th>
            <th>測試網址</th>
            <th>瀏覽器</th>
            <th>網路 IP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>103</td>
            <td>101（98.1%）</td>
            <td>2</td>
            <td>
              <div>web手機版</div>
            </td>
            <td>
              <div>2025-06-17</div>
              <div>06:03</div>
            </td>
            <td>https://swag.live</td>
            <td>Chrome</td>
            <td>10.100.6.23</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 