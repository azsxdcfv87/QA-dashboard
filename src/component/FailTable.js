import React from 'react';
import data from '../data.json';

export default function FailTable() {
  const { failedTests } = data;

  return (
    <table border="1" cellPadding="8" style={{ width: "100%", tableLayout: "fixed", marginBottom: 16 }}>
      <thead>
        <tr>
          <th>編號</th>
          <th>描述</th>
          <th>狀態</th>
        </tr>
      </thead>
      <tbody>
        {failedTests.map((test, index) => (
          <tr key={index}>
            <td>{test.id}</td>
            <td>{test.description}</td>
            <td>{test.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 