import React from 'react';
import data from '../data.json';

export default function UploadTable() {
  const { upload } = data;

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
            <td>{upload.fileSize}</td>
            <td>{upload.uploadTime}</td>
            <td>{upload.convertTime}</td>
            <td>{upload.displayTime}</td>
            <td>{upload.totalProcessTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 