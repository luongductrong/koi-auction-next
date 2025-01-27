'use client';

import { useState, useEffect } from 'react';

export function SafeHydrate({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return <>{isClient ? children : null}</>;
}

// Nếu bạn gặp vấn đề về hydration mismatch, bạn có thể sử dụng kỹ thuật "two-pass rendering" bằng cách sử dụng một state để kiểm soát việc render
// Two-pass rendering là kỹ thuật render 2 lần, lần đầu render ra một cái gì đó để xác định việc render lần 2
// Cách dùng: <SafeHydrate>{/* children */}</SafeHydrate>

// If you encounter hydration mismatch issues, you can use the "two-pass rendering" technique by using a state to control the rendering
// Two-pass rendering is a technique to render twice, the first time to render something to determine the second rendering
// Usage: <SafeHydrate>{/* children */}</SafeHydrate>
