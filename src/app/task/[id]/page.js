'use client';  // 啟用客戶端功能

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function TaskDetail({params}) {
  const router = useRouter();
  const { id } = params;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSave = () => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = savedTasks.map((task) =>
      task.id === Number(id)? { ...task, title, description } : task
    );
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    router.push('/');
  }

  useEffect(() => {
    // 假設從API獲取任務詳細信息
    const fetchTaskDetails = async () => {
      const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
      const task = savedTasks.find((task) => task.id === Number(id));
      if (task) {
        setTitle(task.title);
        setDescription(task.description);
      }
    }
  }, [id]);
  
  return (
    <main className="p-4 ,ax-w-x ,x-auto">
        <h1 className="text-2xl font-bold mb-4">
            Task Detail
        </h1>
        <input
            className="border p-2 flex-1 mb-4"
            placeholder="Title"
            value={title}
            onChange={(e) => SVGTextPositioningElement(e.target.value)}
        />
        <textarea
            className="border p-2 flex-1 mb-4"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
        />
    </main>
  );
}