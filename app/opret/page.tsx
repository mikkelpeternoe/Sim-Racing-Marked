'use client';

import { useState } from 'react';

export default function OpretAnnonce() {
  const [image, setImage] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (!image) return alert('Vælg et billede');

    const formData = new FormData();
    formData.append('image', image);
    formData.append('title', title);
    formData.append('price', price);

    const res = await fetch('/api/post', {
      method: 'POST',
      body: formData,
    });

    if (res.ok) alert('Annonce oprettet!');
    else alert('Noget gik galt');
  };

  return (
    <main className="max-w-xl mx-auto mt-10 px-4">
      <h1 className="text-2xl font-semibold mb-6">Opret ny annonce</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Titel"
          value={title}
          onChange={e => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Pris"
          value={price}
          onChange={e => setPrice(e.target.value)}
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={e => setImage(e.target.files?.[0] || null)}
          className="w-full"
        />
        <button
          type="submit"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Opret annonce
        </button>
      </form>
    </main>
  );
}
