"use client";

type User = {
  id: number;
  username: string;
  avatar: string;
  stories: { image: string }[];
};

export default function StoryList({
  stories,
  onOpen,
}: {
  stories: User[];
  onOpen: (index: number) => void;
}) {
  return (
    <div className="flex overflow-x-auto p-4 w-full scroll-smooth">
        <div className="flex gap-4 min-w-max">
            {stories.map((user, index) => (
                <div
                    key={user.id}
                    className="flex flex-col items-center cursor-pointer flex-shrink-0"
                    onClick={() => onOpen(index)}
                >
                    <div className="p-[2px] rounded-full bg-gradient-to-tr from-yellow-400 to-pink-500">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                        <img
                            src={user.avatar}
                            className="w-full h-full object-cover"
                        />
                        </div>
                    </div>
                    <p className="text-sm mt-1 text-black">{user.username}</p>
                </div>
            ))}
        </div>
    </div>
  );
}