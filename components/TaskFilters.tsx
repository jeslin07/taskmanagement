import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TaskStatus } from "@/types/task";
import { CalendarDays, Search } from "lucide-react";

type FilterStatus = "All" | TaskStatus;

interface TaskFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  filterStatus: FilterStatus;
  setFilterStatus: (value: FilterStatus) => void;
  selectedDate: string;
  setSelectedDate: (value: string) => void;
}

const STATUS_OPTIONS: FilterStatus[] = [
  "All",
  "Todo",
  "In Progress",
  "Completed",
];

export default function TaskFilters({
  search,
  setSearch,
  filterStatus,
  setFilterStatus,
  selectedDate,
  setSelectedDate,
}: TaskFiltersProps) {
  return (
    <div className="flex flex-col gap-3 mb-6 sm:flex-row sm:items-center">
      {/* Search */}
      <div className="relative flex-1">
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          className="pl-8"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Status filter */}
      <Select
        value={filterStatus}
        onValueChange={(val) => setFilterStatus(val as FilterStatus)}
      >
        <SelectTrigger className="w-full sm:w-40">
          <SelectValue placeholder="Filter by status" />
        </SelectTrigger>
        <SelectContent>
          {STATUS_OPTIONS.map((s) => (
            <SelectItem key={s} value={s}>
              {s}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Date filter */}
      <div className="relative w-full sm:w-48">
        <CalendarDays className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground pointer-events-none" />
        <Input
          type="date"
          className="pl-8"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
        />
      </div>
    </div>
  );
}