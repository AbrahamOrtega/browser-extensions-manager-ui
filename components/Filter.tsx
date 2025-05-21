import { useState } from "react";

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

export default function Filter({ filter, setFilter }: FilterProps) {
  const FilterButton = ({ text }: { text: string }) => {
    return (
      <button
        className={`flex px-4 py-1 cursor-pointer rounded-full border-2 focus:outline-none focus:ring-2 focus:ring-red-400 ${
          filter === text.toLowerCase()
            ? " border-red-400 bg-red-400 text-neutral-800"
            : "border-neutral-100 bg-neutral-0 hover:bg-neutral-100 dark:border-neutral-600 dark:bg-neutral-700 dark:hover:bg-neutral-600"
        }`}
        onClick={() => setFilter(text.toLowerCase())}
      >
        {text}
      </button>
    );
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-between gap-3">
      <h1 className="text-[24px] font-[700]">Extension List</h1>
      <div className="flex items-center gap-2">
        <FilterButton text="All" />
        <FilterButton text="Active" />
        <FilterButton text="Inactive" />
      </div>
    </div>
  );
}
