import React from "react";
import { Trash2 } from "lucide-react"; // for delete icon

interface CardProps {
  category: string;
  title: string;
  description: string;
  pages: number;
  status: "draft" | "published";
  onPublish?: () => void;
  onDelete?: () => void;
}

const Card: React.FC<CardProps> = ({
  category,
  title,
  description,
  pages,
  status,
  onPublish,
  onDelete,
}) => {
  return (
    <div className="w-[300px] bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition">
      {/* Category + PDF icon */}
      <div className="flex justify-between items-center mb-2">
        <span className="bg-yellow-100 text-yellow-700 text-xs font-medium px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="text-blue-600 font-bold text-sm">PDF</span>
      </div>

      {/* Title */}
      <h2 className="font-semibold text-lg">{title}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm mt-1">{description}</p>

      {/* Pages */}
      <p className="mt-3 font-medium">
        Pages <span className="font-normal">{pages}</span>
      </p>

      {/* Action buttons */}
      <div className="flex justify-between items-center mt-4">
        {status === "draft" ? (
          <button
            onClick={onPublish}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-md"
          >
            Publish Notes
          </button>
        ) : (
          <button
            className="flex-1 bg-green-600 text-white text-sm py-2 rounded-md cursor-default"
            disabled
          >
            Published
          </button>
        )}

        {/* Delete */}
        <button
          onClick={onDelete}
          className="ml-3 p-2 bg-red-50 hover:bg-red-100 rounded-md"
        >
          <Trash2 className="w-5 h-5 text-red-500" />
        </button>
      </div>
    </div>
  );
};

export default Card;
