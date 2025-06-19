import React from 'react';

export default function UploadTable() {
  return (
    <div className="upload-table-container">
      <table border="1" cellPadding="8" style={{ width: "100%", tableLayout: "fixed", marginBottom: 16 }}>
        <thead>
          <tr>
            <th>檔案大小</th>
            <th>上傳時間</th>
            <th>轉檔時間</th>
            <th>顯示時間</th>
            <th>總處理時間</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>0.77 MB</td>
            <td>10 秒</td>
            <td>6.1 秒</td>
            <td>7.5 秒</td>
            <td>13.6 秒</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 