export const metadata = {
  title: "StudyNook | Rooms",
};
import RoomsCard from "@/components/RoomsCard";

const RoomsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const amenity = params?.amenity || "";

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${search}&amenity=${amenity}`,
    {
      cache: "no-store",
    },
  );

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

        {/* Search + Filter */}
        <form className="mx-auto mb-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-[1fr_220px_auto]">
          <input
            type="text"
            name="search"
            defaultValue={search}
            placeholder="Search room by name..."
            className="h-12 w-full rounded-full border border-[#E5E7EB] bg-white px-5 outline-none focus:border-[#FF6B1A]"
          />

          <select
            name="amenity"
            defaultValue={amenity}
            className="h-12 rounded-full border border-[#E5E7EB] bg-white px-5 outline-none focus:border-[#FF6B1A]"
          >
            <option value="">All Amenities</option>
            <option value="Wi-Fi">Wi-Fi</option>
            <option value="Whiteboard">Whiteboard</option>
            <option value="Projector">Projector</option>
            <option value="Quiet Zone">Quiet Zone</option>
            <option value="Air Conditioning">Air Conditioning</option>
            <option value="Power Outlets">Power Outlets</option>
          </select>

          <button
            type="submit"
            className="h-12 rounded-full bg-[#FF6B1A] px-8 font-semibold text-white hover:bg-[#FF8A3D]"
          >
            Search
          </button>
        </form>

        {/* Empty State */}
        {rooms.length === 0 && (
          <div className="rounded-3xl border border-[#E5E7EB] bg-white p-10 text-center shadow-lg">
            <h2 className="text-2xl font-bold text-[#111111]">
              No Rooms Found
            </h2>

            <p className="mt-3 text-[#6B7280]">
              Try searching with another room name.
            </p>
          </div>
        )}

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
