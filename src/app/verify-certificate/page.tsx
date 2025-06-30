import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FileSearch } from "lucide-react";

export default function VerifyCertificatePage() {
  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6 flex justify-center">
        <Card className="w-full max-w-lg shadow-lg">
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mb-4">
              <FileSearch className="h-8 w-8" />
            </div>
            <CardTitle className="text-2xl font-headline">Verify a Certificate</CardTitle>
            <CardDescription>
              Enter the unique certificate ID to verify its authenticity.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <label htmlFor="certificateId" className="sr-only">Certificate ID</label>
                <Input id="certificateId" placeholder="Enter Certificate ID (e.g., UKCAS-12345678)" className="h-12 text-base" />
              </div>
              <Button type="submit" className="w-full h-12 text-base" size="lg">
                Verify
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
