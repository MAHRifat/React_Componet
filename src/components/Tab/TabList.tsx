// App.tsx
import React from "react";
import Tabs from "../Tab/Tabs";

function TabList() {
  const tabs = [
    {
      label: "Question Bank",
      content: <p>📘 Here is the Question Bank content...</p>,
    },
    {
      label: "Flashcard",
      content: <p>🎴 Flashcard content goes here...</p>,
    },
    {
      label: "Clinical Case",
      content: <p>🩺 Clinical Case details...</p>,
    },
    {
      label: "OSCE",
      content: <p>🧪 OSCE preparation materials...</p>,
    },
    {
      label: "Notes",
      content: <p>📝 Notes and summaries...</p>,
    },
    {
      label: "Career Resource",
      content: <p>💼 Career resources and guides...</p>,
    },
  ];

  return (
    <div className="p-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default TabList;
