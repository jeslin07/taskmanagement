"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Task, TaskStatus, TaskPriority } from "@/types/task";
import TaskCard from "@/components/TaskCard";
import TaskStats from "@/components/TaskStats";
import TaskFilters from "@/components/TaskFilters";
import TaskDialog from "@/components/TaskDialog";
import Pagination from "@/components/Pagination";
import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { LogOut, ClipboardList } from "lucide-react";

type FilterStatus = "All" | TaskStatus;

const TASKS_PER_PAGE = 6;

export default function DashboardPage() {
  const router = useRouter();

  // ─── Auth guard ──────────────────────────────────────────────────
  useEffect(() => {
    if (!localStorage.getItem("loggedIn")) {
      router.push("/login");
    }
  }, [router]);

  // ─── Task state ──────────────────────────────────────────────────
  const [tasks, setTasks] = useState<Task[]>([]);

  // ─── Dialog / form state ─────────────────────────────────────────
  const [open, setOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState<TaskStatus>("Todo");
  const [priority, setPriority] = useState<TaskPriority>("Medium");
  const [dueDate, setDueDate] = useState("");

  // ─── Filter / pagination state ───────────────────────────────────
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState<FilterStatus>("All");
  const [selectedDate, setSelectedDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filterStatus, selectedDate]);

  // ─── CRUD handlers ────────────────────────────────────────────────
  const resetForm = () => {
    setTitle("");
    setDescription("");
    setStatus("Todo");
    setPriority("Medium");
    setDueDate("");
    setEditingTaskId(null);
  };

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (editingTaskId) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === editingTaskId
            ? { ...t, title, description, status, priority, dueDate, updatedAt: new Date().toISOString() }
            : t
        )
      );
    } else {
      const newTask: Task = {
        id: Date.now().toString(),
        title,
        description,
        status,
        priority,
        dueDate,
        createdAt: new Date().toISOString(),
      };
      setTasks((prev) => [newTask, ...prev]);
    }

    resetForm();
    setOpen(false);
  };

  const handleEdit = (task: Task) => {
    setEditingTaskId(task.id);
    setTitle(task.title);
    setDescription(task.description);
    setStatus(task.status);
    setPriority(task.priority);
    setDueDate(task.dueDate);
    setOpen(true);
  };

  const handleDelete = (id: string) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    router.push("/login");
  };

  // ─── Derived data ─────────────────────────────────────────────────
  const filteredTasks = tasks
    .filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter((t) => (filterStatus === "All" ? true : t.status === filterStatus))
    .filter((t) => (selectedDate ? t.dueDate === selectedDate : true))
    .sort(
      (a, b) =>
        new Date(a.dueDate).getTime() - new Date(b.dueDate).getTime()
    );

  const totalPages = Math.max(
    1,
    Math.ceil(filteredTasks.length / TASKS_PER_PAGE)
  );
  const paginatedTasks = filteredTasks.slice(
    (currentPage - 1) * TASKS_PER_PAGE,
    currentPage * TASKS_PER_PAGE
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ── Top navbar ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-20 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ClipboardList className="size-4" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-none">
                Task Dashboard
              </h1>
              <p className="text-xs text-muted-foreground">
                Manage your tasks efficiently
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <TaskDialog
              open={open}
              setOpen={(val) => {
                if (!val) resetForm();
                setOpen(val);
              }}
              title={title}
              setTitle={setTitle}
              description={description}
              setDescription={setDescription}
              status={status}
              setStatus={setStatus}
              priority={priority}
              setPriority={setPriority}
              dueDate={dueDate}
              setDueDate={setDueDate}
              editingTaskId={editingTaskId}
              onSubmit={handleSubmit}
            />
            <Button
              variant="destructive"
              size="sm"
              onClick={handleLogout}
              className="gap-1.5"
            >
              <LogOut className="size-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </Button>
          </div>
        </div>
      </header>

      {/* ── Main content ────────────────────────────────────────────── */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
        {/* Stats row */}
        <TaskStats tasks={tasks} />

        {/* Filters row */}
        <TaskFilters
          search={search}
          setSearch={setSearch}
          filterStatus={filterStatus}
          setFilterStatus={setFilterStatus}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />

        {/* Task grid or empty state */}
        {paginatedTasks.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <ClipboardList className="mb-4 size-12 text-muted-foreground/40" />
            <h2 className="text-lg font-semibold">No tasks found</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {tasks.length === 0
                ? 'Click "Create Task" to add your first task.'
                : "Try adjusting your filters."}
            </p>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginatedTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={handleEdit}
                onDelete={handleDelete}
              />
            ))}
          </div>
        )}

        {/* Pagination */}
        {filteredTasks.length > TASKS_PER_PAGE && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        )}
      </main>
    </div>
  );
}