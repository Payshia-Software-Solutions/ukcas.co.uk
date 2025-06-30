import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogIn } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const LoginForm = ({ userType }: { userType: 'Admin' | 'Institute' }) => (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor={`${userType}-email`}>Email</Label>
        <Input id={`${userType}-email`} type="email" placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor={`${userType}-password`}>Password</Label>
        <Input id={`${userType}-password`} type="password" />
      </div>
      <Button type="submit" className="w-full" asChild>
        <Link href={userType === 'Admin' ? '/admin' : '/dashboard'}>Login to {userType} Panel</Link>
      </Button>
    </form>
  );

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="mx-auto bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <LogIn className="h-8 w-8" />
            </div>
            <h1 className="text-3xl font-bold font-headline">Portal Login</h1>
            <p className="text-muted-foreground">Access your dashboard.</p>
          </div>
          <Tabs defaultValue="institute" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="institute">Institute</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            <TabsContent value="institute">
              <Card>
                <CardHeader>
                  <CardTitle>Institute Login</CardTitle>
                  <CardDescription>Access your institute's dashboard to manage students and certificates.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm userType="Institute" />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Admin Login</CardTitle>
                  <CardDescription>Access the UKCAS administration panel.</CardDescription>
                </CardHeader>
                <CardContent>
                  <LoginForm userType="Admin" />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
