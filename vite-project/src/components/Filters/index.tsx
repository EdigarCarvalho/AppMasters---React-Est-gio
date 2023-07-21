import React from "react";
import Select from "react-select";
import { FiltersStyle, InputStyle, FavoriteStyle, RatingStyle } from "./style";

interface FiltersProps {
  handleValueChange: React.Dispatch<React.SetStateAction<string>>;
  genres: string[];
  setGenreValue: React.Dispatch<React.SetStateAction<string>>;
  setFavoriteValue: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteValue: boolean;
  setRatingValue:React.Dispatch<React.SetStateAction<number>>;
  ratingValue: number;
}

function Filters({ handleValueChange, genres, setGenreValue, setFavoriteValue, favoriteValue , setRatingValue , ratingValue }: FiltersProps) {
  const options: object[] = [{ value: "", label: "Any" }];

  genres.forEach((genre) => options.push({ value: genre, label: genre }));

  const handleRatingChange = (value: number) => {
    setRatingValue(value);
  };

  return (
    <FiltersStyle>
      <Select
        menuPortalTarget={document.body}
        styles={{ menuPortal: (base) => ({ ...base, zIndex: 9999 }) }}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any) => setGenreValue(e.value)}
        className="genre-select"
        options={options}
        placeholder="Genre"
      />
      <InputStyle
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleValueChange(e.target.value)}
        placeholder="Enter a game name, eg Dota 2"
      />
      <FavoriteStyle onClick={() => setFavoriteValue((prevState) => !prevState)} className={favoriteValue ? "active" : ""}>
        Favorites
      </FavoriteStyle>
      <RatingStyle onClick={() => handleRatingChange((ratingValue + 1) % 3)} ratingValue={ratingValue}>
        Rating
      </RatingStyle>
    </FiltersStyle>
  );
}

export default Filters;
