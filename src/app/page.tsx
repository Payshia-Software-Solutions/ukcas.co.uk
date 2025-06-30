import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import FeaturedInstitutes from '@/components/home/FeaturedInstitutes';
import Cta from '@/components/home/Cta';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Features />
      <FeaturedInstitutes />
      <Cta />
    </div>
  );
}
