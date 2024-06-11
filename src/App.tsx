import { RadioSelectionButtons } from "./components/RadioSelectionButtons/RadioSelectionButtons";
import { Section } from "./components/Section/Section";
import { DiscountTextBox } from "./components/DiscountTextBox/DiscountTextBox";
import { NoteField } from "./components/NoteField/NoteField";

import "./App.css";

function App() {
  return (
    <>
      <Section title="Radio Selection Buttons">
        <RadioSelectionButtons />
      </Section>
      <Section title="Discount Text Box">
        <DiscountTextBox />
      </Section>
      <Section title="Basic Note Field">
        <NoteField />
      </Section>
    </>
  );
}

export default App;
