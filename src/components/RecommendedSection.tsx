const RecommendedSection = () => {
  const recommendations = [
    {
      id: 1,
      title: "Best of Blues",
      artist: "Jazzmaster Bill",
      coverImage: "/placeholder-blues.jpg",
    },
    {
      id: 2,
      title: "Out of This World",
      artist: "Lily Wonders",
      coverImage: "/placeholder-world.jpg",
    },
    {
      id: 3,
      title: "Acoustics",
      artist: "The Spaceman",
      coverImage: "/placeholder-acoustics.jpg",
    },
  ];
  return (
    <div className="grid grid-cols-3 gap-4">
      {recommendations.map((album) => (
        <div key={album.id} className="cursor-pointer">
          <div className="bg-gray-200 aspect-square mb-2 rounded-md overflow-hidden">
            <div className="w-full h-full bg-gray-300"></div>
          </div>
          <h3 className="font-medium text-sm">{album.title}</h3>
          <p className="text-xs text-gray-500">{album.artist}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendedSection;
