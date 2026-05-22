import { FaSearch, FaCalendarCheck, FaBookOpen } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="bg-[#F7F3EF] px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111]">
            How It Works
          </h2>

          <p className="mt-3 text-[#6B7280]">
            Find and book your study room in just three simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1E8] text-[#FF6B1A]">
              <FaSearch size={26} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">
              1. Explore Rooms
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Browse available study rooms and check capacity, price, floor, and
              amenities.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1E8] text-[#FF6B1A]">
              <FaCalendarCheck size={26} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">
              2. Choose Schedule
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Select your booking date, start time, end time, and see the total
              cost instantly.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 text-center shadow-xl">
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#FFF1E8] text-[#FF6B1A]">
              <FaBookOpen size={26} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">
              3. Start Studying
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Confirm your booking and enjoy a quiet, comfortable, and focused
              study environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
