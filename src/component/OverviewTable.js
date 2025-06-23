import React from 'react';
import data from '../data.json';

export default function OverviewTable() {
  const { overview } = data;

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
            <td>{overview.totalTests}</td>
            <td>{overview.passedTests}（{overview.successRate}）</td>
            <td>{overview.failedTests}</td>
            <td>
              <div>{overview.environment}</div>
            </td>
            <td>
              <div>{overview.executionTime.date}</div>
              <div>{overview.executionTime.time}</div>
            </td>
            <td>{overview.testUrl}</td>
            <td>{overview.browser}</td>
            <td>{overview.networkIP}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 