import { Task, TaskStatus, TaskPriority } from "@/types/task";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertTriangle,
  CalendarDays,
  Clock,
  Pencil,
  Trash2,
} from "lucide-react";

interface TaskCardProps {
  task: Task;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
}

const STATUS_STYLES: Record<TaskStatus, string> = {
  Todo: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  "In Progress":
    "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  Completed:
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300",
};

const PRIORITY_STYLES: Record<TaskPriority, string> = {
  Low: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  Medium:
    "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  High: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300",
};

export default function TaskCard({ task, onEdit, onDelete }: TaskCardProps) {
  const isOverdue =
    task.status !== "Completed" &&
    task.dueDate &&
    new Date(task.dueDate) < new Date();

  return (
    <Card className="group transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg">
      <CardHeader className="border-b pb-3">
        <div className="flex items-start justify-between gap-2">
          <CardTitle className="text-base font-semibold leading-snug line-clamp-1">
            {task.title}
          </CardTitle>
          <div className="flex shrink-0 items-center gap-1.5">
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${STATUS_STYLES[task.status]}`}
            >
              {task.status}
            </span>
            <span
              className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${PRIORITY_STYLES[task.priority]}`}
            >
              {task.priority}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="pt-3">
        {task.description && (
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {task.description}
          </p>
        )}

        <div
          className={`flex items-center gap-1.5 text-xs font-medium ${
            isOverdue
              ? "text-red-500"
              : "text-muted-foreground"
          }`}
        >
          {isOverdue ? (
            <AlertTriangle className="size-3.5" />
          ) : (
            <CalendarDays className="size-3.5" />
          )}
          <span>
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })
              : "No due date"}
          </span>
          {isOverdue && <span className="ml-1">(Overdue)</span>}
        </div>

        {/* ── Timestamps ─────────────────────────────────── */}
        <div className="mt-3 space-y-0.5 border-t pt-2.5">
          <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
            <Clock className="size-3 shrink-0" />
            <span className="font-medium">Created:</span>
            {new Date(task.createdAt).toLocaleString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
          {task.updatedAt && (
            <p className="flex items-center gap-1 text-[11px] text-muted-foreground">
              <Pencil className="size-3 shrink-0" />
              <span className="font-medium">Edited:</span>
              {new Date(task.updatedAt).toLocaleString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          )}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        <Button
          size="sm"
          variant="outline"
          onClick={() => onEdit(task)}
          className="gap-1.5"
        >
          <Pencil className="size-3.5" />
          Edit
        </Button>
        <Button
          size="sm"
          variant="destructive"
          onClick={() => onDelete(task.id)}
          className="gap-1.5"
        >
          <Trash2 className="size-3.5" />
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}