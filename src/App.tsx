import styles from "./App.module.css";
import { useState } from "react";
import myData from "./data.json";
import Menu from "./Menu";
import Selected from "./Selected";
import { PersonType } from "./Types";

function App() {
  const [data, setData] = useState<PersonType[]>(myData);
  const [selectedData, setSelectedData] = useState<PersonType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [inputFocus, setInputFocus] = useState(false);
  const [highlightedUser, setHighlightedUser] = useState<PersonType | null>(
    null
  );

  const selectedHandler = (person: PersonType) => {
    console.log(person);
    setSelectedData((prev) => [...prev, person]);
    const newData = data.filter((p) => {
      return p.name !== person.name;
    });
    setData(newData);
  };

  const removeSelected = (person: PersonType) => {
    setData((prev) => [...prev, person]);
    const newData = selectedData.filter((p) => {
      return p.name !== person.name;
    });
    setSelectedData(newData);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const intersection = myData.filter((x) => !selectedData.includes(x));
    const newSelectedData = intersection.filter((person) => {
      return (
        person.name.toLowerCase().includes(e.target.value) ||
        person.email.includes(e.target.value)
      );
    });
    setData(newSelectedData);
    console.log(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && searchTerm === "") {
      if (selectedData.length > 0) {
        if (!highlightedUser) {
          setHighlightedUser(selectedData[selectedData.length - 1]);
          setInputFocus(false);
        } else {
          const newSelected = selectedData.filter((person) => {
            return person != highlightedUser;
          });
          setData((prev) => [...prev, highlightedUser]);
          setSelectedData(newSelected);
          setHighlightedUser(null);
          setInputFocus(true);
        }
      }
    }
  };

  return (
    <div>
      <div className="border-b-2 border-blue-900 min-h-10 w-1/2 mx-auto mt-2 flex gap-2 flex-wrap rounded-lg">
        {selectedData?.map((person) => (
          <Selected
            key={person.email}
            data={person}
            removeSelected={removeSelected}
            highlightedUser={
              highlightedUser !== null && highlightedUser === person
            }
          />
        ))}
        <div>
          <input
            type="text"
            className="outline-none border-none"
            value={searchTerm}
            onChange={handleSearch}
            name="search"
            onFocus={() => setInputFocus(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search User"
          />
          {inputFocus && data.length > 0 && (
            <Menu data={data} selectedHandler={selectedHandler} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
