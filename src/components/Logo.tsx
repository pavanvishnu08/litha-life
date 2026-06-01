import { cn } from '../lib/utils';

export function Logo({
  className,
  variant = 'dark',
}: {
  className?: string;
  variant?: 'dark' | 'light';
}) {
  const textColor = variant === 'dark' ? 'text-slate-900' : 'text-white';

  return (
      <div className={cn('flex items-center gap-3', className)} style={{ gap: '1rem' }}>
      <div className="relative flex items-center justify-center w-50 h-50 shrink-0">
        <img
          src="/litha%20version%202%20.png"
          alt="Litha Life Sciences logo"
          className="w-full h-full object-contain"
          loading="eager"
        />
      </div>
      <div className="flex flex-col">
        <span className={cn('font-heading font-black text-xl leading-none tracking-tight', textColor)} />
      </div>
    </div>
  );
}

