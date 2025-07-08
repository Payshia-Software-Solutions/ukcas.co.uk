'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserCircle, UserPlus, ArrowLeft } from "lucide-react";
import Link from 'next/link';
import { mockAdminUsers } from '@/lib/mock-data';
import type { AdminUser } from '@/lib/types';

export default function UserMaintenancePage() {
    const [currentDate, setCurrentDate] = useState('');
    const [users] = useState<AdminUser[]>(mockAdminUsers);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setCurrentDate(new Date().toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }));
    }, []);

    const filteredUsers = users.filter(user =>
        user.instituteName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="space-y-6">
            <Card className="shadow-none border-none bg-transparent">
                 <CardHeader className="flex flex-row items-center justify-between p-0">
                    <div>
                        <CardTitle className="text-2xl font-bold">Good Morning !</CardTitle>
                        <p className="text-muted-foreground">{currentDate}</p>
                    </div>
                    <div className="p-2 bg-card rounded-full border">
                        <UserCircle className="h-6 w-6" />
                    </div>
                 </CardHeader>
            </Card>

            <Link href="/admin" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" />
                User Dashboard
            </Link>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>User Dashboard</CardTitle>
                    <Button asChild>
                       <Link href="/admin/users/new">
                           <UserPlus className="mr-2 h-4 w-4" />
                           Add New User
                       </Link>
                    </Button>
                </CardHeader>
            </Card>

            <Card>
                <CardHeader>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <CardTitle>Users</CardTitle>
                        <div className="relative w-full sm:w-64">
                             <Input
                                placeholder="Search users..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                             />
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Institute Name</TableHead>
                                <TableHead>Institute Address</TableHead>
                                <TableHead>Registered Date</TableHead>
                                <TableHead>Email</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.instituteName}</TableCell>
                                    <TableCell>{user.instituteAddress}</TableCell>
                                    <TableCell>{new Date(user.registeredDate).toISOString()}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
