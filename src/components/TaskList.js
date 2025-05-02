// 待辦事項列表元件
// @param {Array} tasks - 包含所有待辦事項的陣列
export default function TaskList({ tasks}) {
  return (
    // 使用 space-y-2 來設定列表項目間的間距
    <ul className="space-y-2">
      {/* 遍歷所有待辦事項並渲染成列表項目 */}
      {tasks.map((task, index) => (
        <li
          key={index} /* 使用索引作為 key 值 */
          className="border p-2 rounded" /* 設定列表項目的樣式 */
        >
          {task}
        </li>
      ))}
    </ul>
  )
}