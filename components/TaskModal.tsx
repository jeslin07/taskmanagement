"use client";

import { useState } from "react";
import { Task } from "@/types/task";

interface TaskModalProps {
  onAddTask: (task: Task) => void;
}

export default function TaskModal({
  onAddTask,
}: TaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title,
      description,
      status: "Todo",
      dueDate: new Date().toISOString().split("T")[0],
      priority: "Medium",
      createdAt: new Date().toISOString(),
    };

    onAddTask(newTask);

    setTitle("");
    setDescription("");
  };
  return (
    <div className="border p-4 rounded mb-4">
      <input
        className="border p-2 w-full mb-2"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="border p-2 w-full mb-2"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={handleAdd}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Add Task
      </button>
    </div>
  );
}