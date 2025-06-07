let ads: any[] = []; // simuler database
export async function GET() {
  // midlertidige dummy-data til test
  const dummyAds = [
    {
      title: "Fanatec CSL DD Wheelbase",
      price: "3200",
      image: "/wheelbase.png",
    },
    {
      title: "Heusinkveld Sprint Pedaler",
      price: "4500",
      image: "/pedals.png",
    },
  ];

  return Response.json(dummyAds);
}
