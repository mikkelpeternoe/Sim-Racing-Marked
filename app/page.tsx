'use client';

import { useEffect, useState } from 'react';
import AdCard from '@/components/AdCard';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export default function Home() {
  const [ads, setAds] = useState<any[]>([]);

  useEffect(() => {
    fetch('/api/post')
      .then(res => res.json())
      .then(setAds);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <section className="px-6 mt-8 max-w-7xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Nyeste annoncer</h2>
        <div className="flex gap-4 overflow-x-auto pb-4">
          {ads.map((ad, i) => (
            <AdCard
              key={i}
              title={ad.title}
              price={ad.price}
              image={ad.image}
              brand={ad.brand || "Ukendt"}
              region={ad.region || "Danmark"}
            />
          ))}
        </div>
      </section>
    </>
  );
}
