import { Hero } from '../components/Hero';
import { Stats } from '../components/Stats';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Features } from '../components/Features';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Stats />
      <FeaturedProducts />
      <Features />
    </div>
  );
}
