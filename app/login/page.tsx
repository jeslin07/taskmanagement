"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/theme-toggle";
import { ClipboardList, LogIn } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      setError("Please enter both username and password.");
      return;
    }
    localStorage.setItem("loggedIn", "true");
    router.push("/dashboard");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleLogin();
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center px-4">
      {/* Theme toggle – top right, matching dashboard position */}
      <div className="fixed top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-sm">
        {/* Brand mark – same icon + name as the dashboard header */}
        <div className="flex flex-col items-center mb-8 gap-3">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <ClipboardList className="size-6" />
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">Task Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Sign in to manage your tasks
            </p>
          </div>
        </div>

        <Card>
          <CardHeader className="border-b pb-4">
            <CardTitle className="text-base">Sign in</CardTitle>
            <CardDescription>
              Enter your credentials to continue
            </CardDescription>
          </CardHeader>

          <CardContent className="pt-5 space-y-4">
            {error && (
              <p className="text-sm text-destructive bg-destructive/10 rounded-md px-3 py-2">
                {error}
              </p>
            )}

            <div className="space-y-1.5">
              <label htmlFor="username" className="text-sm font-medium">
                Username
              </label>
              <Input
                id="username"
                placeholder="Enter username"
                value={username}
                autoComplete="username"
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="password" className="text-sm font-medium">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                autoComplete="current-password"
                onKeyDown={handleKeyDown}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
              />
            </div>

            <Button
              type="button"
              className="w-full gap-1.5 mt-1"
              onClick={handleLogin}
            >
              <LogIn className="size-4" />
              Sign in
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}