"use client";

import Link from "next/link";

export default function Home() {
  return (
    <section
      className="flex justify-center items-center h-screen"
      data-aos="zoom-in"
    >
      <Link href="/m&f" passHref className="max-w-[80%] md:max-w-fit">
        <button className="text-center text-4xl font-bold border-1 border-gray-400 p-5 rounded-lg shadow-xl shadow-white cursor-pointer">
          <p>MOHAMED</p>
          <p>&&</p>
          <p>FAIRUZ</p>
        </button>
      </Link>
    </section>
  );
}
