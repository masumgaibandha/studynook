"use client";

const Loading = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#F7F3EF] px-4">
      <div className="text-center">
        <div className="mx-auto mb-6 h-16 w-16 animate-spin rounded-full border-4 border-[#FFE2CF] border-t-[#FF6B1A]" />

        <h2 className="text-2xl font-bold text-[#111111]">
          Loading StudyNook...
        </h2>

        <p className="mt-2 text-sm text-[#6B7280]">
          Please wait while we prepare your study space.
        </p>
      </div>
    </section>
  );
};

export default Loading;