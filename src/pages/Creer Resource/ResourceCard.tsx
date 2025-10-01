// components/ResourceCard.tsx
import React from "react";
import { FaDownload } from "react-icons/fa";

type ResourceCardProps = {
  title: string;
  description: string;
  tags: string[];
  downloads: number;
  published: boolean;
};

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  tags,
  downloads,
  published,
}) => {
  return (
    <div className="w-80 border rounded-lg shadow-sm bg-white p-4 flex flex-col gap-3">
      {/* Header */}
      <div className="flex justify-between items-start">
        <span className="text-red-500 text-xl">📄</span>
        <button className="text-gray-400 hover:text-gray-600">☆</button>
      </div>

      {/* Title & Description */}
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      {/* Tags */}
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="px-2 py-1 text-xs rounded bg-gray-100 text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Downloads */}
      <div className="flex items-center text-sm text-gray-500 gap-2">
        <FaDownload className="text-gray-400" />
        <span>{downloads.toLocaleString()} downloads</span>
      </div>

      {/* Action Button */}
      <button
        className={`mt-2 w-full py-2 rounded-lg text-sm font-medium ${
          published
            ? "bg-green-600 text-white"
            : "bg-blue-600 text-white hover:bg-blue-700"
        }`}
      >
        {published ? "Published Resource" : "Publish Resource"}
      </button>
    </div>
  );
};

export default ResourceCard;
