import React from 'react';
import data from '../data.json';

export default function OverviewTable() {
  const { overview } = data;

  return (
    <div className="overview-table-container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="cell-title">總測試數</div>
              <div className="cell-content">{overview.totalTests}</div>
            </td>
            <td>
              <div className="cell-title">通過測試</div>
              <div className="cell-content">{overview.passedTests}（{overview.successRate}）</div>
            </td>
            <td>
              <div className="cell-title">失敗測試</div>
              <div className="cell-content">{overview.failedTests}</div>
            </td>
            <td>
              <div className="cell-title">執行環境</div>
              <div className="cell-content">{overview.environment}</div>
            </td>
            <td>
              <div className="cell-title">執行時間</div>
              <div className="cell-content">{overview.executionTime.date}</div>
              <div className="cell-content">{overview.executionTime.time}</div>
            </td>
            <td>
              <div className="cell-title">測試網址</div>
              <div className="cell-content">{overview.testUrl}</div>
            </td>
            <td>
              <div className="cell-title">瀏覽器</div>
              <div className="cell-content">{overview.browser}</div>
            </td>
            <td>
              <div className="cell-title">網路 IP</div>
              <div className="cell-content">{overview.networkIP}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 