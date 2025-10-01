import Card from "../Notes/Card";

export default function CardList() {
  return (
    <div className="flex gap-6 p-6">
      <Card
        category="Heart Sounds"
        title="Types of Shock"
        description="Shock is a life-threatening condition where tissue perfusion is inadequate to meet cellular demands..."
        pages={20}
        status="draft"
        onPublish={() => alert("Published Notes")}
        onDelete={() => alert("Deleted Note")}
      />

      <Card
        category="Heart Sounds"
        title="Types of Shock"
        description="Shock is a life-threatening condition where tissue perfusion is inadequate to meet cellular demands..."
        pages={20}
        status="draft"
        onPublish={() => alert("Published Notes")}
        onDelete={() => alert("Deleted Note")}
      />

      <Card
        category="Heart Sounds"
        title="Types of Shock"
        description="Shock is a life-threatening condition where tissue perfusion is inadequate to meet cellular demands..."
        pages={20}
        status="published"
        onDelete={() => alert("Deleted Note")}
      />
    </div>
  );
}
