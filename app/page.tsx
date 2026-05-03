"use client";

import { SetStateAction, useEffect, useState } from "react";
import StoryList from "@/components/StoryList";
import StoryViewer from "@/components/StoryViewer";

type Story = {
  id: number;
  image: string;
}

type User = {
  id: number;
  username: string;
  avatar: string;
  stories: Story[];
}

export default function Home() {
  const [stories, setStories] = useState<User[]>([]);
  const [activeUser, setActiveUser] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/stories.json")
      .then((res) => res.json())
      .then((data) => setStories(data));
  }, []);

  return (
    <div className="flex justify-center bg-black min-h-screen">

      <div className="w-full max-w-md bg-gray-50 min-h-screen">

        <StoryList stories={stories} onOpen={(index) => setActiveUser(index)} />

        <div className="px-5 py-6 text-center text-gray-600">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Instagram Stories Clone
          </h2>

          <p className="text-sm leading-relaxed">
            This is a mobile-first implementation of the Instagram Stories feature.
            Users can view stories, navigate by tapping left or right, and stories
            automatically advance after 5 seconds. Loading states and smooth
            transitions are handled to ensure a seamless user experience.
          </p>
        </div>

        {activeUser !== null && (
          <StoryViewer
            key={activeUser}
            user={stories[activeUser]}
            onClose={() => setActiveUser(null)}
          />
        )}

      </div>

    </div>
  );
}

