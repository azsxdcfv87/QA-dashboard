import React from 'react';
import data from '../data.json';

export default function UploadTable() {
  const { upload } = data;

  return (
    <div className="upload-table-container">
      <table>
        <tbody>
          <tr>
            <td>
              <div className="cell-title">檔案大小</div>
              <div className="cell-content">{upload.fileSize}</div>
            </td>
            <td>
              <div className="cell-title">上傳時間</div>
              <div className="cell-content">{upload.uploadTime}</div>
            </td>
            <td>
              <div className="cell-title">轉檔時間</div>
              <div className="cell-content">{upload.convertTime}</div>
            </td>
            <td>
              <div className="cell-title">顯示時間</div>
              <div className="cell-content">{upload.displayTime}</div>
            </td>
            <td>
              <div className="cell-title">總處理時間</div>
              <div className="cell-content">{upload.totalProcessTime}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
} 