import React from 'react';
import data from '../data.json';

export default function FailTable() {
  const { failedTests } = data;

  return (
    <table>
      <thead>
        <tr>
          <th>編號</th>
          <th>失敗 testcase 描述</th>
        </tr>
      </thead>
      <tbody>
        {failedTests.map((test, index) => (
          <tr key={index}>
            <td>{test.id}</td>
            <td className='fail'>{test.description}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
} 