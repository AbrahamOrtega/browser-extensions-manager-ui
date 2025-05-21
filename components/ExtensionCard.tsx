import Image from "next/image";
import { useState } from "react";
import ExtensionModel from "@/models/ExtensionModel";

interface Props {
  removeExtension: (name: string) => void;
}
export default function ExtensionCard({
  logo,
  name,
  description,
  isActive,
  removeExtension,
}: Props & ExtensionModel) {
  const [isChecked, setIsChecked] = useState(isActive);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="flex flex-col min-h-[180px] justify-between rounded-2xl border-2 border-neutral-200 bg-neutral-0 dark:border-neutral-700 dark:bg-neutral-800 p-3">
      <div className="flex items-start gap-4">
        <Image src={logo} alt={name} width={48} height={48} />
        <div className="flex flex-col">
          <h3 className="text-[16px] font-[700]">{name}</h3>
          <span className="text-neutral-500 text-[14px] font-[400] mt-1">
            {description}
          </span>
        </div>
      </div>

      <div className="flex w-full justify-between items-center mt-6">
        <button
          className="flex items-center px-3 py-2 cursor-pointer rounded-full border-2 border-neutral-200 dark:border-neutral-700 text-[14px] font-[500]
          hover:bg-red-400 hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => removeExtension(name)}
        >
          Remove
        </button>
        <label className="flex cursor-pointer select-none items-center">
          <div className="relative">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="sr-only"
            />
            <button
              className={`box block h-6 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-red-400 ${
                isChecked ? "bg-red-400" : "bg-neutral-600"
              }`}
            ></button>
            <div
              className={`absolute left-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-white transition ${
                isChecked ? "translate-x-full" : ""
              }`}
            ></div>
          </div>
        </label>
      </div>
    </div>
  );
}
