import React from "react";
import { Eye, Trash2, PlayCircle, Clock, List } from "lucide-react";

interface StationCardProps {
  title: string;
  steps: number;
  videos: number;
  duration: string;
  description: string;
  category: string;
  onView: () => void;
  onDelete: () => void;
  onPublish: () => void;
}

const StationCard: React.FC<StationCardProps> = ({
  title,
  steps,
  videos,
  duration,
  description,
  category,
  onView,
  onDelete,
  onPublish,
}) => {
  return (
    <div className="border rounded-md p-5 bg-white shadow-sm flex justify-between items-start mb-4">
      <div>
        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Meta info */}
        <div className="flex text-sm text-gray-500 mt-1 gap-5">
          <span className="flex items-center gap-1">
            <List size={16} /> {steps} steps
          </span>
          <span className="flex items-center gap-1">
            <PlayCircle size={16} /> {videos.toString().padStart(2, "0")} videos
          </span>
          <span className="flex items-center gap-1">
            <Clock size={16} /> {duration}
          </span>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mt-2">{description}</p>

        {/* Category + Buttons */}
        <div className="mt-3 flex items-center gap-3">
          <span className="text-xs bg-gray-100 px-2 py-1 rounded">
            {category}
          </span>
          <button
            onClick={onView}
            className="flex items-center gap-1 px-3 py-1 border rounded text-sm text-gray-700 hover:bg-gray-100 transition"
          >
            <Eye size={16} /> View Station
          </button>
          <button
            onClick={onDelete}
            className="p-2 border rounded text-red-500 hover:bg-red-50 transition"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {/* Publish button */}
      <button
        onClick={onPublish}
        className="bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700 transition"
      >
        Publish
      </button>
    </div>
  );
};

export default StationCard;
