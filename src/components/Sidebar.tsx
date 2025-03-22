import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-[206px] bg-gray-100 flex flex-col h-full">
      {/* User Profile */}
      <div className="p-4 flex items-center">
        <div className="w-10 h-10 rounded-full overflow-hidden mr-3">
          <Image
            src="/images/profile.jpg"
            alt="User avatar"
            width={40}
            height={40}
          />
        </div>
        <div>
          <h3 className="font-medium">Joshua</h3>
          <p className="text-xs text-gray-500">@joshua</p>
        </div>
      </div>

      {/* Main nagivation */}
      <div className="mt-4">
        <h3 className="px-4 text-xs font-semibold text-gray-500 mb-2">
          BROWSE
        </h3>
        <nav>
          <Link
            href="/"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
            </svg>
            Home
          </Link>
          <Link
            href="/songs"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
            </svg>
            Songs
          </Link>
          <Link
            href="/playlists"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Playlists
          </Link>
          <Link
            href="/for-you"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              />
            </svg>
            Just for You
          </Link>
          <Link
            href="/charts"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg>
            Top Charts
          </Link>
        </nav>
      </div>

      {/* User playlists */}
      <div className="mt-6">
        <div className="px-4 flex justify-between items-center">
          <h3 className="text-xs font-semibold text-gray-500">
            YOUR PLAYLISTS
          </h3>
          <button className="text-gray-500 hover:text-gray-700">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
            </svg>
          </button>
        </div>
        <nav className="mt-2">
          <Link
            href="/playlist/workout"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Workout Mix
          </Link>
          <Link
            href="/playlist/chill"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Chillin' at Home
          </Link>
          <Link
            href="/playlist/adobe"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            Booping at Adobe
          </Link>
          <Link
            href="/playlist/life"
            className="flex items-center px-4 py-2 hover:bg-gray-200"
          >
            <svg
              className="w-5 h-5 mr-3"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z" />
            </svg>
            XD 4 Life
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
