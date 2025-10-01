// components/Tabs.tsx
import React, { useState } from "react";

type Tab = {
  label: string;
  content: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
};

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      {/* Tab Buttons */}
      <div className="flex gap-6 border rounded-full px-4 py-2 bg-white shadow-sm">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activeIndex === index
                ? "bg-blue-600 text-white"
                : "text-gray-800 hover:text-blue-600"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6 w-full max-w-2xl p-4 border rounded-lg shadow-sm bg-gray-50">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
