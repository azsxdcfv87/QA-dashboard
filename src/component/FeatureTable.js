import React from 'react';

export default function FeatureTable() {
  const features = [
    { name: 'Login', total: 15, fail: 1 },
    { name: 'Chatroom', total: 22, fail: 2 },
    { name: 'Livestream', total: 18, fail: 0 },
    { name: 'Shop-1', total: 42, fail: 0 },
    { name: 'Shop-2', total: 32, fail: 14 },
    { name: 'Shop-3', total: 81, fail: 23 },
    { name: 'Shop-4', total: 74, fail: 0 },
    { name: 'Shop-5', total: 11, fail: 2 },
    { name: 'Shop-6', total: 45, fail: 5 },
  ];

  // 將功能分組，每組最多6個
  const chunkedFeatures = [];
  for (let i = 0; i < features.length; i += 6) {
    chunkedFeatures.push(features.slice(i, i + 6));
  }

  return (
    <table border="1" cellPadding="8" style={{ width: "100%", tableLayout: "fixed", marginBottom: 16 }}>
      <tbody>
        {chunkedFeatures.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map(feature => {
              const passCount = feature.total - feature.fail;
              const isPass = feature.fail === 0;
              return (
                <td 
                  key={feature.name} 
                  className={isPass ? 'pass' : 'fail'}
                  style={{ textAlign: 'center' }}
                >
                  {feature.name} {passCount}/{feature.total}
                </td>
              );
            })}
            {/* 如果這行不滿6個，用空的td填滿 */}
            {Array.from({ length: 6 - row.length }, (_, index) => (
              <td key={`empty-${index}`}></td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
} 