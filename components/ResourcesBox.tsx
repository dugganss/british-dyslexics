
import { useState } from "react";

export default function ResourcesBox() {
  const tabs = [
    {
      id: "learn",
      label: "Learn More",
      content:
        "Access materials discussing us and our mission.",
    },
    {
      id: "free",
      label: "Free Access",
      content:
        "Access free learning, training and advice materials all collated by Roy Fielding."
    },
    {
      id: "book",
      label: "Purchase Book",
      content:
        "Support the charity and learn more about Dyslexia by purchasing the book 'DYSLEXIA Recognising the condition and getting help' by Roy Fielding.",
    },
    {
      id: "community",
      label: "Make Requests",
      content:
        "Make requests for fundraising ideas or reach out for direct support.",
    },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="mt-6 h-80 sm:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg relative w-full max-w-[480px] mx-auto flex flex-col justify-between">
  {/* Title in top-right corner */}
  <h2 className="absolute top-4 left-6 text-2xl text-gray-700 font-bold">
    Resources.
  </h2>

  <div className="flex flex-col sm:flex-row h-full">
    {/* Left: Content area */}
    <div className="flex-1 flex flex-col justify-center pl-8 pr-6 sm:pr-12">
      <p className="text-gray-600 text-lg leading-relaxed max-w-md">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </p>
    </div>

    {/* Right: Tabs */}
    <div className="flex sm:flex-col justify-center items-end border-t sm:border-t-0 sm:border-l border-gray-300 bg-gray-100">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          className={`px-1 py-3 w-full sm:text-right text-sm sm:text-base font-medium transition-colors sm:px-6 ${
            activeTab === tab.id
              ? "bg-white text-black text-semi-bold"
              : "text-gray-700 hover:bg-gray-50"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  </div>
</div>

  );
}
