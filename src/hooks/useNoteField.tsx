import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getNote } from "../redux/noteField/selectors";
import { addNote } from "../redux/noteField/slice";

export const useNoteField = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();
  const addedNote = useSelector(getNote);

  const handleNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(event.target.value);
  };

  const handleAddNote = () => {
    dispatch(addNote(note));
    setNote("");
  };

  useEffect(() => {
    console.log(addedNote);
  }, [addedNote]);

  return {
    note,
    handleNoteChange,
    handleAddNote,
  };
};
