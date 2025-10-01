import React, { useState } from "react";

interface Flashcard {
  subject: string;
  question: string;
  answer: string;
  explanation: string;
}

const AddFlashcard: React.FC = () => {
  const [form, setForm] = useState<Flashcard>({
    subject: "Cardiology",
    question: "",
    answer: "",
    explanation: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSave = () => {
    console.log("Flashcard Saved:", form);
  };

  const handleSaveAnother = () => {
    console.log("Flashcard Saved:", form);
    setForm({ ...form, question: "", answer: "", explanation: "" });
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto bg-white rounded-md shadow-sm p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Add Flashcard
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Basic concepts in cardiovascular medicine
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition">
            <span>📥</span> Bulk Upload
          </button>
        </div>

        {/* Form Fields */}
        <div className="space-y-6">
          {/* Subject */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Question */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Front Side (Question/Term)
            </label>
            <textarea
              name="question"
              value={form.question}
              onChange={handleChange}
              placeholder="Enter the question"
              className="w-full border border-gray-300 rounded px-3 py-2 h-24 bg-blue-50 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Answer */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Back Side (Answer/Definition)
            </label>
            <textarea
              name="answer"
              value={form.answer}
              onChange={handleChange}
              placeholder="Enter the Answer"
              className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Explanation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Explanation
            </label>
            <textarea
              name="explanation"
              value={form.explanation}
              onChange={handleChange}
              placeholder="Explain"
              className="w-full border border-gray-300 rounded px-3 py-2 h-24 focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-8">
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded hover:bg-blue-700 transition"
          >
            + Save Flashcard
          </button>
          <button
            onClick={handleSaveAnother}
            className="px-4 py-2 bg-gray-100 text-gray-800 text-sm font-medium rounded hover:bg-gray-200 transition"
          >
            Save & Add Another
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddFlashcard;
