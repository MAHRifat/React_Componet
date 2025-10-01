import Button from "../components/Button";

export default function ExamplePage() {
  return (
    <div className="p-6 space-x-4">
      <Button label="+ Add OSCE Station" variant="primary" onClick={() => alert("Add clicked")} />
      <Button label="Cancel" variant="secondary" onClick={() => alert("Cancel clicked")} />
      <Button label="Delete" variant="danger" onClick={() => alert("Delete clicked")} />
    </div>
  );
}
