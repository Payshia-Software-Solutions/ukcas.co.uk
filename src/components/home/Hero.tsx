import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight font-headline">
            The Global Standard in Educational Accreditation
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80">
            The United Kingdom College of Advanced Studies (UKCAS) provides prestigious accreditation to educational institutions worldwide, ensuring the highest standards of quality and integrity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild variant="secondary">
              <Link href="/registration">Become Accredited</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/50 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link href="/institutes">Find an Institute</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-full w-full">
           <Image 
             src="https://placehold.co/600x400.png"
             alt="University campus"
             fill
             className="object-cover rounded-lg shadow-2xl"
             data-ai-hint="university campus building"
           />
        </div>
      </div>
    </section>
  );
}
