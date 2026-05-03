"use client";

import { useEffect, useState } from "react";

type StoryItem = {
  image: string;
};

type User = {
  id: number;
  username: string;
  avatar: string;
  stories: StoryItem[];
};

export default function StoryViewer({
  user,
  onClose,
}: {
  user: User;
  onClose: () => void;
}) {
  const [current, setCurrent] = useState(0); // 🔥 always start from first story
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [nextImageLoaded, setNextImageLoaded] = useState(false);

  useEffect(() => {
    setNextImageLoaded(false);
    setProgress(0);

    const img = new Image();
    img.src = user.stories[current].image;
    img.onload = () => {
      setNextImageLoaded(true);
      setLoading(false);
    };

    let progressValue = 0;

    const interval = setInterval(() => {
      progressValue += 1;
      setProgress(progressValue);

      if (progressValue >= 100) {
        clearInterval(interval);
        handleNext();
      }
    }, 50);

    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    if (current < user.stories.length - 1) {
      setCurrent((prev) => prev + 1);
    } else {
      onClose();
    }
  };

  const handlePrev = () => {
    if (current > 0) {
      setCurrent((prev) => prev - 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-50">
      <div className="w-full max-w-md h-full relative">
        

        {!loading && (
          <>
            {/* Progress bars */}
            <div className="absolute top-2 left-2 right-2 flex gap-1 z-10">
              {user.stories.map((_, i) => (
                <div key={i} className="flex-1 bg-gray-500 h-1 overflow-hidden">
                  <div
                    className="bg-white h-full"
                    style={{
                      width:
                        i < current
                          ? "100%"
                          : i === current
                          ? `${progress}%`
                          : "0%",
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Image */}
            <img
              key={current}
              src={user.stories[current].image}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
                nextImageLoaded ? "opacity-100" : "opacity-0"
              }`}
            />

                
            {/* User info */}
            <div className="absolute top-6 left-4 flex items-center gap-2 z-20">
              <img
                src={user.avatar}
                className="w-8 h-8 rounded-full border border-white"
              />
              <p className="text-white text-sm font-semibold">
                {user.username}
              </p>
            </div>

            {/* LEFT */}
            <div
              className="absolute left-0 top-0 w-1/2 h-full"
              onClick={handlePrev}
            />

            {/* RIGHT */}
            <div
              className="absolute right-0 top-0 w-1/2 h-full"
              onClick={handleNext}
            />

            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-white text-xl bg-black/40 rounded-full px-2 py-1"
            >
              ✕
            </button>
          </>
        )}
      </div>
    </div>
  );
}