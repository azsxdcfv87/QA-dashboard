import React from 'react';
import data from '../data.json';

export default function MixpanelTable() {
  const { mixpanel } = data;

  // 將事件分組，每組最多4個
  const chunkedEvents = [];
  for (let i = 0; i < mixpanel.length; i += 4) {
    chunkedEvents.push(mixpanel.slice(i, i + 4));
  }

  return (
    <table>
      <tbody>
        {chunkedEvents.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((item, index) => {
              const isPass = item.success === item.total;
              return (
                <td 
                  key={index} 
                  className={isPass ? 'pass' : 'fail'}
                  style={{ textAlign: 'center' }}
                >
                  {item.event} &nbsp;&nbsp;&nbsp; {item.success}/{item.total}
                </td>
              );
            })}
            {/* 如果這行不滿4個，用空的td填滿 */}
            {Array.from({ length: 4 - row.length }, (_, index) => (
              <td key={`empty-${index}`}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
} 