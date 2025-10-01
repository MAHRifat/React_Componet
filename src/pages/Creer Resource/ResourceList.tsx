// App.tsx
import React from "react";
import ResourceCard from "../Creer Resource/ResourceCard";

function ResourceList() {
  return (
    <div className="flex gap-6 p-6">
      <ResourceCard
        title="Medical Residency Application Guide - USA"
        description="Complete roadmap for applying to US residency programs including ERAS, USMLE, and visa requirements"
        tags={["USA", "Residency Disease"]}
        downloads={0}
        published={false}
      />

      <ResourceCard
        title="Medical Residency Application Guide - USA"
        description="Complete roadmap for applying to US residency programs including ERAS, USMLE, and visa requirements"
        tags={["USA", "Residency Disease"]}
        downloads={2847}
        published={true}
      />

      <ResourceCard
        title="Medical Residency Application Guide - USA"
        description="Complete roadmap for applying to US residency programs including ERAS, USMLE, and visa requirements"
        tags={["USA", "Residency Disease"]}
        downloads={2847}
        published={true}
      />
    </div>
  );
}

export default ResourceList;
