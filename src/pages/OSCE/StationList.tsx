import React from "react";
import StationCard from "./StationCard";

const StationList: React.FC = () => {
  const handleView = () => alert("View station clicked!");
  const handleDelete = () => alert("Delete clicked!");
  const handlePublish = () => alert("Publish clicked!");

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Render 3 cards */}
        <StationCard
          title="Cardiovascular Examination"
          steps={12}
          videos={1}
          duration="~15 min"
          description="Complete cardiovascular system examination including inspection, palpation, and auscultation"
          category="Cardiovascular"
          onView={handleView}
          onDelete={handleDelete}
          onPublish={handlePublish}
        />
        <StationCard
          title="Cardiovascular Examination"
          steps={12}
          videos={1}
          duration="~15 min"
          description="Complete cardiovascular system examination including inspection, palpation, and auscultation"
          category="Cardiovascular"
          onView={handleView}
          onDelete={handleDelete}
          onPublish={handlePublish}
        />
        <StationCard
          title="Cardiovascular"
          steps={12}
          videos={1}
          duration="~15 min"
          description="Complete cardiovascular system examination including inspection, palpation, and auscultation"
          category="Cardiovascular"
          onView={handleView}
          onDelete={handleDelete}
          onPublish={handlePublish}
        />
      </div>
    </div>
  );
};

export default StationList;
