import { useState } from "react";
import { useAdminLogin } from "@workspace/api-client-react";
import { useLocation } from "wouter";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const login = useAdminLogin();
  const [, setLocation] = useLocation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { data: { username, password } },
      {
        onSuccess: () => setLocation("/secure-admin-portal/dashboard"),
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background dark text-foreground">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="relative z-10 w-full max-w-md p-8 bg-card/80 backdrop-blur border border-border rounded-xl shadow-2xl neon-card">
        <div className="text-center mb-8">
          <h1 className="font-headline text-4xl text-primary mb-2">VICE CMS</h1>
          <p className="text-sm text-muted-foreground">Secure Portal Authentication</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username">Username</Label>
            <Input 
              id="username" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              className="bg-background"
              required 
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input 
              id="password" 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="bg-background"
              required 
            />
          </div>

          {login.isError && (
            <div className="p-3 rounded-md bg-destructive/10 border border-destructive/30 text-destructive text-sm text-center">
              Invalid credentials or authentication failed.
            </div>
          )}

          <Button 
            type="submit" 
            className="w-full font-bold tracking-wider" 
            disabled={login.isPending}
          >
            {login.isPending ? "AUTHENTICATING..." : "LOGIN"}
          </Button>
        </form>
      </div>
    </div>
  );
}