import { useEffect, useState } from 'react';

type Distance = {
  dx?: number | null;
  dy?: number | null;
  distance?: number | null;
};

function useDistance(
  ref1: React.RefObject<HTMLDivElement>,
  ref2: React.RefObject<HTMLDivElement>,
): Distance {
  const [distance, setDistance] = useState<Distance>({});

  useEffect(() => {
    if (ref1.current && ref2.current) {
      const rect1 = ref1.current.getBoundingClientRect();
      const rect2 = ref2.current.getBoundingClientRect();
      const dx = rect1.left - rect2.left;
      const dy = rect1.top - rect2.top;
      const distance = Math.sqrt(dx * dx + dy * dy);
      setDistance({ dx, dy, distance });
    }
    window.addEventListener('resize', () => {
      if (ref1.current && ref2.current) {
        const rect1 = ref1.current.getBoundingClientRect();
        const rect2 = ref2.current.getBoundingClientRect();
        const dx = rect1.left - rect2.left;
        const dy = rect1.top - rect2.top;
        const distance = Math.sqrt(dx * dx + dy * dy);
        console.log(dx);
        setDistance({ dx, dy, distance });
      }
    });
    return () => {
      window.removeEventListener('resize', () => {
        if (ref1.current && ref2.current) {
          const rect1 = ref1.current.getBoundingClientRect();
          const rect2 = ref2.current.getBoundingClientRect();
          const dx = rect1.left - rect2.left;
          const dy = rect1.top - rect2.top;
          const distance = Math.sqrt(dx * dx + dy * dy);
          setDistance({ dx, dy, distance });
        }
      });
    };
  }, [ref1, ref2]);

  return distance;
}

export default useDistance;
