import React from 'react';

export default function FailTable() {
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
        <tr>
          <td>[FW-01-003]</td>
          <td>登入追蹤主播有發文的帳號，確認限時動態元件已顯示</td>
          <td>失敗</td>
        </tr>
        <tr>
          <td>[CH-02-001]</td>
          <td>上傳影片貼文(mov)</td>
          <td>失敗</td>
        </tr>
      </tbody>
    </table>
  );
} 