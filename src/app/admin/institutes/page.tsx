import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const applications = [
  { id: 1, name: "International University of Science", country: "Canada", date: "2024-07-20", status: "Pending" },
  { id: 2, name: "Art & Design College of Paris", country: "France", date: "2024-07-18", status: "Pending" },
  { id: 3, name: "Sydney Business School", country: "Australia", date: "2024-07-15", status: "Approved" },
  { id: 4, name: "Tokyo Institute of Animation", country: "Japan", date: "2024-07-12", status: "Denied" },
];

export default function AdminInstitutesPage() {
    return (
        <div>
            <div className="flex flex-col items-start gap-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
                <h1 className="text-2xl sm:text-3xl font-bold font-headline">Manage Institutes</h1>
                 <Button>Add New Institute</Button>
            </div>
            
            <Card>
                <CardHeader>
                    <CardTitle>Accreditation Applications</CardTitle>
                    <CardDescription>Review, approve, or deny applications from institutes.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Institute Name</TableHead>
                                <TableHead>Country</TableHead>
                                <TableHead>Application Date</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {applications.map((app) => (
                                <TableRow key={app.id}>
                                    <TableCell className="font-medium">{app.name}</TableCell>
                                    <TableCell>{app.country}</TableCell>
                                    <TableCell>{app.date}</TableCell>
                                    <TableCell>
                                        <Badge variant={app.status === 'Pending' ? 'secondary' : app.status === 'Approved' ? 'default' : 'destructive'}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        {app.status === 'Pending' && (
                                            <div className="space-x-2">
                                                <Button variant="outline" size="sm">View</Button>
                                                <Button variant="ghost" size="sm" className="text-green-600 hover:text-green-700">Approve</Button>
                                                <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">Deny</Button>
                                            </div>
                                        )}
                                        {app.status !== 'Pending' && (
                                             <Button variant="outline" size="sm">View Details</Button>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
