import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Building2, BadgeCheck, FileText, BarChart3 } from "lucide-react";

const stats = [
    { title: "Pending Applications", value: "12", icon: <Building2 className="h-6 w-6 text-muted-foreground" />, description: "New institutes awaiting review" },
    { title: "Accredited Institutes", value: "147", icon: <BadgeCheck className="h-6 w-6 text-muted-foreground" />, description: "Total active partners" },
    { title: "Certificates Issued (Month)", value: "2,350", icon: <FileText className="h-6 w-6 text-muted-foreground" />, description: "+20.1% from last month" },
    { title: "Revenue (Month)", value: "$23,500", icon: <BarChart3 className="h-6 w-6 text-muted-foreground" />, description: "Based on $10 per certificate" },
]

export default function AdminDashboardPage() {
    return (
        <div>
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 font-headline">Admin Dashboard</h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>A log of recent platform events.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">Activity feed will be displayed here.</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
