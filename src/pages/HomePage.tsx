import { Hero } from '../components/Hero';
import { FeaturedProducts } from '../components/FeaturedProducts';
import { Features } from '../components/Features';

export function HomePage() {
  return (
    <div className="flex flex-col">
      <Hero />
      <FeaturedProducts catNos={[
        'EXL-C-00039','EXL-C-00052','EXL-C-00055','EXL-C-00064','EXL-C-00072','EXL-C-00085','EXL-C-00098','EXL-C-00131','EXL-C-00137','EXL-C-00168','EXL-C-00181','EXL-C-00187','EXL-C-00207','EXL-C-00227','EXL-C-00246','EXL-C-00281','EXL-C-00284','EXL-C-00202','EXL-C-00322','EXL-C-00337','EXL-C-00364','EXL-C-00374','EXL-C-00397','EXL-C-00417','EXL-C-00007'
      ]} />
      <Features />
    </div>
  );
}
