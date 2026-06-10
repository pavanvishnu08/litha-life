import { useEffect, useState } from 'react';

export function useDeferredBackground(url?: string, delayMs = 100) {
  const [backgroundUrl, setBackgroundUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!url) {
      setBackgroundUrl(undefined);
      return;
    }

    const handle = window.setTimeout(() => {
      setBackgroundUrl(url);
    }, delayMs);

    return () => {
      window.clearTimeout(handle);
    };
  }, [url, delayMs]);

  return backgroundUrl;
}
