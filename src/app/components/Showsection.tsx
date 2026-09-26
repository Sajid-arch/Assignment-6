'use client';

export default function Showsection() {
  const handleScroll = () => {
    const section = document.getElementById('workout');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' }); // Use 'auto' for an instant jump
    }
  };

  return (

    <button onClick={handleScroll} className="bg-[#C2F800] text-black text-xs font-bold px-4 py-2 rounded-lg hover:bg-[#A0B600] transition-colors duration-300 uppercase">Browse Workouts</button>
  );
}