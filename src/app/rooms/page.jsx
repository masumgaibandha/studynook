import RoomsCard from "@/components/RoomsCard";

const RoomsPage = async () => {
  const res = await fetch("http://localhost:5000/rooms", {
    cache: "no-store",
  });

  const rooms = await res.json();

  return (
    <section className="bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-black text-[#111111]">
            Explore Study Rooms
          </h1>

          <p className="mt-3 text-[#6B7280]">
            Discover modern and comfortable study spaces for focused learning.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {rooms.map((room) => (
                      <RoomsCard key={room._id} room={room} />
                    ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsPage;
