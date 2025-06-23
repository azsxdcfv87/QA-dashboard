import React from 'react';
import data from '../data.json';

export default function FeatureTable() {
  const { features } = data;

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