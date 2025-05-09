import Link from 'next/link'
// 待辦事項列表元件
// @param {Array} tasks - 包含所有待辦事項的陣列
export default function TaskList({ tasks, onDelete }) {
  return (
    // 使用 space-y-2 來設定列表項目間的間距
    <ul className="space-y-2">
      {/* 遍歷所有待辦事項並渲染成列表項目 */}
      {tasks.map((task, index) => (
        <li
          key={index} /* 使用索引作為 key 值 */
          className="border p-2 rounded flex justify-between items-center" /* 設定列表項目的樣式 */
        >
          <Link
            href={`/task/${task.id}`} /* 點擊待辦事項時跳轉到詳細頁面 */
            className="text-blue-600 hover:underline" /* 讓連結佔據剩餘空間 */
          >
            {task.title}
          </Link>

          <button
            className="text-red-500"
            onClick={() => onDelete(task.id)} /* 點擊按鈕時刪除對應的待辦事項 */
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}