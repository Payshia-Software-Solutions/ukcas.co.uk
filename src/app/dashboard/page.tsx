import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";


const stats = [
    { title: "Total Students", value: "4,521", icon: <Users className="h-6 w-6 text-muted-foreground" />, description: "Total registered students" },
    { title: "Certificates Issued", value: "1,234", icon: <GraduationCap className="h-6 w-6 text-muted-foreground" />, description: "Lifetime total" },
    { title: "Pending Fees", value: "$1,340", icon: <DollarSign className="h-6 w-6 text-muted-foreground" />, description: "From 134 certificates this cycle" },
]

export default function InstituteDashboardPage() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <h1 className="text-3xl font-bold font-headline">Institute Dashboard</h1>
                 <Button asChild><Link href="/dashboard/certificates">Issue New Certificate</Link></Button>
            </div>
           
            <div className="grid gap-6 md:grid-cols-3">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                            {stat.icon}
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <p className="text-xs text-muted-foreground">{stat.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="mt-8">
                 <Card>
                    <CardHeader>
                        <CardTitle>Recently Issued Certificates</CardTitle>
                        <CardDescription>A list of the last 5 certificates issued.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead>Course</TableHead>
                                    <TableHead>Issue Date</TableHead>
                                    <TableHead>Certificate ID</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableCell>Alice Johnson</TableCell>
                                    <TableCell>Data Analytics</TableCell>
                                    <TableCell>2024-07-21</TableCell>
                                    <TableCell>UKCAS-84629471</TableCell>
                                </TableRow>
                                 <TableRow>
                                    <TableCell>Bob Williams</TableCell>
                                    <TableCell>Computer Science</TableCell>
                                    <TableCell>2024-07-20</TableCell>
                                    <TableCell>UKCAS-37195420</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
