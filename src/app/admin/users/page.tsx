'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserCircle, UserPlus, ArrowLeft, MoreHorizontal, UserCog, Trash2 } from "lucide-react";
import Link from 'next/link';
import { mockAdminUsers } from '@/lib/mock-data';
import type { AdminUser } from '@/lib/types';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from '@/components/ui/dropdown-menu';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { useToast } from '@/hooks/use-toast';


export default function UserMaintenancePage() {
    const router = useRouter();
    const { toast } = useToast();
    const [currentDate, setCurrentDate] = useState('');
    const [users, setUsers] = useState<AdminUser[]>(mockAdminUsers);
    const [searchTerm, setSearchTerm] = useState('');
    const [userToDelete, setUserToDelete] = useState<AdminUser | null>(null);

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

    const handleDeleteClick = (user: AdminUser) => {
        setUserToDelete(user);
    };

    const handleDeleteConfirm = () => {
        if (userToDelete) {
            setUsers(users.filter(user => user.id !== userToDelete.id));
            toast({
                title: "User Deleted",
                description: `The user for ${userToDelete.instituteName} has been successfully deleted.`,
            });
            setUserToDelete(null);
        }
    };

    const handleEditClick = (userId: string) => {
        router.push(`/admin/users/edit/${userId}`);
    };

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
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredUsers.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.instituteName}</TableCell>
                                    <TableCell>{user.instituteAddress}</TableCell>
                                    <TableCell>{new Date(user.registeredDate).toLocaleDateString()}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    <TableCell className="text-right">
                                        <DropdownMenu>
                                            <DropdownMenuTrigger asChild>
                                                <Button variant="ghost" className="h-8 w-8 p-0">
                                                    <span className="sr-only">Open menu</span>
                                                    <MoreHorizontal className="h-4 w-4" />
                                                </Button>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent align="end">
                                                <DropdownMenuItem onClick={() => handleEditClick(user.id)}>
                                                    <UserCog className="mr-2 h-4 w-4" />
                                                    <span>Edit</span>
                                                </DropdownMenuItem>
                                                <DropdownMenuSeparator />
                                                <DropdownMenuItem
                                                    className="text-red-500 focus:text-red-500"
                                                    onClick={() => handleDeleteClick(user)}
                                                >
                                                    <Trash2 className="mr-2 h-4 w-4" />
                                                    <span>Delete</span>
                                                </DropdownMenuItem>
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>

            <AlertDialog open={!!userToDelete} onOpenChange={() => setUserToDelete(null)}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete the user account for <span className="font-semibold">{userToDelete?.instituteName}</span>.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setUserToDelete(null)}>Cancel</AlertDialogCancel>
                        <AlertDialogAction
                            onClick={handleDeleteConfirm}
                            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                        >
                            Yes, delete user
                        </AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        </div>
    );
}