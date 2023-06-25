import { HeaderInputStyle, HeaderStyle } from "./style";
import Select from 'react-select'

interface HeaderProps{
    handleValueChange:React.Dispatch<React.SetStateAction<string>>;
    genres:string[];
    setGenreValue:React.Dispatch<React.SetStateAction<string>>;
}
function Header({handleValueChange, genres, setGenreValue}: HeaderProps){
    
    const options: object[] = [{ value: "", label: "Any" }];

    genres.forEach((genre) => options.push({ value: genre, label: genre }))

    function handleChangeInput(e:React.ChangeEvent<HTMLInputElement>){
        handleValueChange(e.target.value);
    }
    
    function handleChangeSelect(e:any){
        setGenreValue(e.value);
    }

    return (
        <HeaderStyle>
              <Select onChange={handleChangeSelect} className="genre-select" options={options} placeholder="Genre"/>
              <HeaderInputStyle onChange={handleChangeInput} placeholder="Enter the name of a game, eg Dota 2"/>
              <div className="site-name">GamesMaster</div>
        </HeaderStyle>
    )
}

export default Header;