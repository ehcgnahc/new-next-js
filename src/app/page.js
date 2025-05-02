'use client';  // 啟用客戶端功能

// 引入所需的依賴
import Image from 'next/image';
import { useState } from 'react';
import TaskList from '@/components/TaskList';

// 待辦事項看板的主要元件
export default function Home() {
  // 狀態管理
  const [newTask, setNewTask] = useState('');  // 儲存當前輸入的待辦事項
  const [tasks, setTasks] = useState([]);      // 儲存所有待辦事項列表

  // 新增待辦事項的功能
  const addTask = () => {
    console.log('Before: ', tasks);
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    console.log('Adding task: ', newTask);
    console.log('After: ', updatedTasks);
    setNewTask('');
  }

  // 渲染待辦事項看板介面
  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold'>Task Board</h1>
      <div className='flex gap-2 mb-4'>
        {/* 待辦事項輸入欄位 */}
        <input
          className='border p-2 flex-1'
          placeholder='Enter a task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {/* 新增待辦事項按鈕 */}
        <button
          className='bg-blue-500 text-white px-4'
          onClick={() => {
            addTask();
          }}
        >
          Add
        </button>
        {/* 顯示待辦事項列表 */}
        <TaskList tasks={tasks} />
      </div>
    </main>
  );
}