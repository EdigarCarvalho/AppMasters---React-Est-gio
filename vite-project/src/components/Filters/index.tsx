import Select from "react-select";
import { FiltersStyle, InputStyle } from "./style";

interface FiltersProps {
  handleValueChange: React.Dispatch<React.SetStateAction<string>>;
  genres: string[];
  setGenreValue: React.Dispatch<React.SetStateAction<string>>;
}

function Filters({ handleValueChange, genres, setGenreValue }: FiltersProps) {
  const options: object[] = [{ value: "", label: "Any" }];

  genres.forEach((genre) => options.push({ value: genre, label: genre }));

  function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
    handleValueChange(e.target.value);
  }

  function handleChangeSelect(e: any) {
    setGenreValue(e.value);
  }

  return (
    <FiltersStyle>
      <InputStyle
        onChange={handleChangeInput}
        placeholder="Enter a game name, eg Dota 2"
      />
      <Select
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        onChange={handleChangeSelect}
        className="genre-select"
        options={options}
        placeholder="Genre"
      />
    </FiltersStyle>
  );
}

export default Filters;
