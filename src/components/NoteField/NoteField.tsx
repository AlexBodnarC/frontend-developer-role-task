import { useNoteField } from "../../hooks/useNoteField";
import { Button } from "../Button/Button";

export const NoteField = () => {
  const { note, handleNoteChange, handleAddNote } = useNoteField();

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={note}
        onChange={handleNoteChange}
        className="block p-2.5 max-w-[400px] h-[200px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
      />
      <Button onClick={handleAddNote} text="Add Note" />
    </div>
  );
};
