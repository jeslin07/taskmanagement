import { Task, TaskStatus } from "@/types/task";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CheckCircle2,
  CircleDashed,
  Clock,
  LayoutList,
} from "lucide-react";

interface StatConfig {
  label: string;
  status: TaskStatus | "All";
  icon: React.ReactNode;
  colorClass: string;
}

const STAT_CONFIGS: StatConfig[] = [
  {
    label: "Total Tasks",
    status: "All",
    icon: <LayoutList className="size-5" />,
    colorClass: "text-violet-500",
  },
  {
    label: "Todo",
    status: "Todo",
    icon: <CircleDashed className="size-5" />,
    colorClass: "text-amber-500",
  },
  {
    label: "In Progress",
    status: "In Progress",
    icon: <Clock className="size-5" />,
    colorClass: "text-blue-500",
  },
  {
    label: "Completed",
    status: "Completed",
    icon: <CheckCircle2 className="size-5" />,
    colorClass: "text-emerald-500",
  },
];

interface TaskStatsProps {
  tasks: Task[];
}

export default function TaskStats({ tasks }: TaskStatsProps) {
  const getCount = (status: TaskStatus | "All"): number =>
    status === "All"
      ? tasks.length
      : tasks.filter((t) => t.status === status).length;

  return (
    <div className="grid grid-cols-2 gap-3 mb-6 lg:grid-cols-4">
      {STAT_CONFIGS.map((cfg) => {
        const count = getCount(cfg.status);
        const pct =
          tasks.length > 0 && cfg.status !== "All"
            ? Math.round((count / tasks.length) * 100)
            : 100;

        return (
          <Card key={cfg.label} className="relative overflow-hidden">
            <CardHeader className="pb-0">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {cfg.label}
                </CardTitle>
                <span className={cfg.colorClass}>{cfg.icon}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold tracking-tight">{count}</p>
              {cfg.status !== "All" && (
                <div className="mt-2">
                  <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        cfg.status === "Completed"
                          ? "bg-emerald-500"
                          : cfg.status === "In Progress"
                          ? "bg-blue-500"
                          : "bg-amber-500"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {pct}% of total
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}