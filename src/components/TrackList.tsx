const TrackList = () => {
  const tracks = [
    {
      id: 1,
      title: "All that Jazz",
      artist: "Various Artists",
      duration: "13:30",
      isPlaying: false,
    },
    {
      id: 2,
      title: "Splashed",
      artist: "Blue-Eyed D...",
      duration: "05:12",
      isPlaying: true,
    },
    {
      id: 3,
      title: "Prism",
      artist: "Gus Bot",
      duration: "03:22",
      isPlaying: false,
    },
    {
      id: 4,
      title: "Mind-blowing Beats",
      artist: "Various Artists",
      duration: "09:10",
      isPlaying: false,
    },
  ];

  return (
    <div className="space-y-2">
      {tracks.map((track) => (
        <div
          key={track.id}
          className="flex items-center p-2 hover:bg-gray-100 rounded-md group"
        >
          <div className="w-10 h-10 bg-gray-200 mr-4 flex items-center justify-center">
            {track.isPlaying ? (
              <div className="bg-gray-700 rounded-full p-1">
                <svg
                  className="w-4 h-4 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : null}
          </div>
          <div className="flex-1">
            <h3 className="font-medium">{track.title}</h3>
            <p className="text-sm text-gray-500">{track.artist}</p>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">{track.duration}</span>
            <button className="text-gray-400 hover:text-gray-600">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
            <button className="text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;
