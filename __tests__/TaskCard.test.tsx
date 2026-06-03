import { render, screen } from "@testing-library/react";
import TaskCard from "@/components/TaskCard";
import { Task } from "@/types/task";

const mockTask: Task = {
  id: "1",
  title: "Build Login Page",
  description: "Create authentication page",
  status: "Todo",
  dueDate: "2026-06-08",
  priority: "Medium",
  createdAt: "2026-06-01",
};

describe("TaskCard", () => {
  test("renders task title", () => {
    render(
      <TaskCard
        task={mockTask}
        onEdit={() => {}}
        onDelete={() => {}}
      />
    );

    expect(
      screen.getByText("Build Login Page")
    ).toBeInTheDocument();
  });
});