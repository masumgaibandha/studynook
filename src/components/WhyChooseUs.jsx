import { FaClock, FaWifi, FaShieldAlt } from "react-icons/fa";

const WhyChooseUs = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 text-center">
          <h2 className="[font-family:var(--font-poppins)] text-4xl font-black text-[#111111]">
            Why Choose StudyNook?
          </h2>

          <p className="mt-3 text-[#6B7280]">
            Everything you need for a focused and productive study session.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F7F3EF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B1A] text-white">
              <FaClock size={24} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">Easy Booking</h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Book your preferred study room quickly with simple date and time
              selection.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F7F3EF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B1A] text-white">
              <FaWifi size={24} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">
              Modern Amenities
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Find rooms with Wi-Fi, whiteboards, projectors, power outlets,
              quiet zones, and more.
            </p>
          </div>

          <div className="rounded-3xl border border-[#E5E7EB] bg-[#F7F3EF] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#FF6B1A] text-white">
              <FaShieldAlt size={24} />
            </div>

            <h3 className="text-xl font-bold text-[#111111]">
              Reliable Spaces
            </h3>

            <p className="mt-3 text-sm leading-7 text-[#6B7280]">
              Each room listing includes useful details so users can confidently
              choose the right space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
