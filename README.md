📱Instagram Stories Feature (Frontend Assignment)

A mobile-first implementation of the Instagram Stories feature built using Next.js and React.
This project focuses on smooth UI interactions, clean state management, and a seamless user experience without relying on external libraries for core functionality.

🚀 Live Demo

👉 https://cactro-insta-stories-sepia.vercel.app/

------------

🎯 Features

📲 Mobile-first design
📜 Horizontally scrollable story list
👤 Multiple users with multiple stories
▶️ Tap to open stories
👉 Navigate forward (right tap)
👈 Navigate backward (left tap)
⏱️ Auto-advance stories after 5 seconds
📊 Animated progress bar
⏳ Image preloading with loading spinner
✨ Smooth fade transitions (no flicker)
🧠 Safe state handling (no runtime crashes)
🎨 Clean UI with gradients and overlays
📁 Data fetched from external JSON file
🧠 Key Implementation Details
🔹 Grouped Stories (Instagram-like)

----------------

Each user contains multiple stories:

{
  "username": "nature",
  "stories": [
    { "image": "..." },
    { "image": "..." }
  ]
}

🔹 Image Preloading + UX Sync
Story only starts when image is fully loaded
Progress bar is synced with loading
Spinner shown during loading


🔹 Smooth Transitions
Fade-in effect between stories
No black flicker or UI jump


🔹 State Management
Controlled story index per user
Safe rendering to avoid undefined access
Clean separation of user and story logic


🛠️ Tech Stack
Next.js (App Router)
React (Hooks)
TypeScript
Tailwind CSS


📂 Project Structure
/app
  page.tsx
/components
  StoryList.tsx
  StoryViewer.tsx
/public/data
  stories.json


⚙️ Setup Instructions
# Clone repo
git clone <your-repo-link>

# Install dependencies
npm install

# Run development server
npm run dev

Open:

http://localhost:3000


📌 Assumptions
Stories do not expire (as per assignment requirement)
No backend or persistence layer
Images are fetched from public URLs
💡 Improvements (Future Scope)
Swipe gesture support
Story seen/unseen indicators
Pause on long press
Backend integration
------------

🙌 Conclusion

This project focuses on replicating the core interaction and experience of Instagram Stories with:

smooth UX
clean architecture
no external libraries for core logic


📬 Author
Uzra Khan
Frontend Developer