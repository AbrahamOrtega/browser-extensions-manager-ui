import Image from "next/image";
import Filter from "@/components/Filter";
import ExtensionCard from "@/components/ExtensionCard";
import getData from "@/services/getData";
import { useEffect } from "react";
import { useState } from "react";
import ExtensionModel from "@/models/ExtensionModel";

export default function Home() {
  const [extensions, setExtensions] = useState<ExtensionModel[]>([]);
  const [extensionsFiltered, setExtensionsFiltered] = useState<
    ExtensionModel[]
  >([]);
  const [filter, setFilter] = useState("all");
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const systemPerfersDark = window.matchMedia(
      "(prefers-color-schema: dark)"
    ).matches;
    if (savedTheme) {
      setTheme(savedTheme);
    } else if (systemPerfersDark) {
      setTheme("dark");
    }
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setExtensions(data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (filter === "all") {
      setExtensionsFiltered(extensions);
    } else if (filter === "active") {
      setExtensionsFiltered(extensions.filter((ext) => ext.isActive));
    } else if (filter === "inactive") {
      setExtensionsFiltered(extensions.filter((ext) => !ext.isActive));
    }
  }, [filter, extensions]);

  const removeExtension = (name: string) => {
    setExtensions((prevExtensions) =>
      prevExtensions.filter((extension) => extension.name !== name)
    );
  };

  return (
    <div className="w-full min-h-screen px-24 py-12 flex flex-col gap-16">
      <div className="flex w-full justify-between p-3 shadow-lg dark:bg-neutral-800 bg-neutral-0 rounded-2xl">
        <div className="flex gap-3">
          <Image
            src="images/logo.svg"
            alt="Logo"
            width={40}
            height={32}
            className="object-cover object-left overflow-hidden"
          />
          <h1 className="text-[24px] font-[700]">Extensions</h1>
        </div>

        <button
          className="bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 p-2 rounded-lg cursor-pointer dark:hover:bg-neutral-600
        focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={toggleTheme}
        >
          <Image
            src={
              theme === "light" ? "images/icon-moon.svg" : "images/icon-sun.svg"
            }
            alt="icon"
            width={24}
            height={24}
          />
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <Filter filter={filter} setFilter={setFilter} />

        <div className="grid grid-flow-row grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-3">
          {extensionsFiltered.map((extension) => (
            <ExtensionCard
              key={extension.name}
              logo={extension.logo}
              name={extension.name}
              description={extension.description}
              isActive={extension.isActive}
              removeExtension={removeExtension}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
