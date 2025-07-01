import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Users, GraduationCap, DollarSign, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockCertificates, mockInstitutes } from "@/lib/mock-data";


const stats = [
    { title: "Total Students", value: "4,521", icon: <Users className="h-6 w-6 text-muted-foreground" />, description: "Total registered students" },
    { title: "Certificates Issued", value: "1,234", icon: <GraduationCap className="h-6 w-6 text-muted-foreground" />, description: "Lifetime approved total" },
    { title: "Account Balance", value: `$${mockInstitutes[0].balance.toFixed(2)}`, icon: <Wallet className="h-6 w-6 text-muted-foreground" />, description: "Available funds for issuance" },
]

export default function InstituteDashboardPage() {
    return (
        <div>
            <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
                 <h1 className="text-2xl sm:text-3xl font-bold font-headline">Institute Dashboard</h1>
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
                        <CardDescription>A list of the last 5 certificates issued by your institute.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Student Name</TableHead>
                                    <TableHead>Course</TableHead>
                                    <TableHead>Issue Date</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Certificate ID</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {mockCertificates.filter(c => c.instituteId === '1').slice(0, 5).map(cert => (
                                    <TableRow key={cert.id}>
                                        <TableCell>{cert.studentName}</TableCell>
                                        <TableCell>{cert.courseName}</TableCell>
                                        <TableCell>{cert.issueDate}</TableCell>
                                        <TableCell>
                                            <Badge variant={cert.status === 'Pending' ? 'secondary' : cert.status === 'Approved' ? 'default' : 'destructive'}>
                                                {cert.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="font-mono">{cert.id}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
