import FeatureCard from "@/components/FeatureCard";
import RecommendedSection from "@/components/RecommendedSection";
import SearchBar from "@/components/SearchBar";
import Sidebar from "@/components/Sidebar";
import TrackList from "@/components/TrackList";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <SearchBar />
        <div className="relative">
          <button className="relative">
            <svg
              className="w-6 h-6 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
              2
            </span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mb-8">
        <FeatureCard
          title="GET LOST"
          subtitle="in your music."
          bgColor="bg-gradient-to-b from-pink-300 to-pink-500"
        />
        <FeatureCard
          title="MELLOW"
          subtitle="beats."
          bgColor="bg-gradient-to-b from-blue-300 to-blue-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Recently Played</h2>
          <TrackList />
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Recommended For You</h2>
          <RecommendedSection />
        </div>
      </div>
    </div>
  );
}
