import Image from 'next/image';

type Props = {
  title: string;
  price: string;
  image: string;
  brand: string;
  region: string;
};

export default function AdCard({ title, price, image, brand, region }: Props) {
  return (
    <div className="bg-white rounded shadow w-60 shrink-0">
      <div className="w-full h-40 relative">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t"
        />
      </div>
      <div className="p-3">
        <h3 className="font-semibold text-sm">{title}</h3>
        <p className="text-red-600 font-bold">{price} kr</p>
        <p className="text-xs text-gray-500">{brand} – {region}</p>
        <button className="mt-2 bg-red-600 text-white w-full py-1 rounded hover:bg-red-700">
          Se annonce
        </button>
      </div>
    </div>
  );
}
