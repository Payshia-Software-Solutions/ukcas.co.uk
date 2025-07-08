import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { mockInstitutes } from "@/lib/mock-data";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function FeaturedInstitutes() {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">Our Accredited Partners</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We are proud to partner with leading institutions that meet our rigorous standards for quality and excellence.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {mockInstitutes.map((institute) => (
              <CarouselItem key={institute.id} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden bg-card">
                    <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                       <Image src={institute.logoUrl} alt={`${institute.name} logo`} width={80} height={80} className="rounded-full mb-4" data-ai-hint="university logo"/>
                       <h3 className="text-lg font-semibold">{institute.name}</h3>
                       <p className="text-sm text-muted-foreground">{institute.country}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 md:-left-12" />
          <CarouselNext className="right-2 md:-right-12" />
        </Carousel>
        <div className="text-center mt-12">
            <Button asChild>
                <Link href="/institutes">View All Institutes</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
