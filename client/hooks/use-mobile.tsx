import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Kode ini hanya berjalan di sisi klien
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div>Lebar layar: {width}px</div>;
};
