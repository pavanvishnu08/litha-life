import { About } from '../components/About';
import { Manufacturing } from '../components/Manufacturing';

export function AboutPage() {
  return (
    <div className="flex flex-col">
      <About />
      <Manufacturing />
    </div>
  );
}
