import { HeaderInputStyle, HeaderStyle } from "./style";

interface HeaderProps{
    handleValueChange:React.Dispatch<React.SetStateAction<string>>;
}
function Header({handleValueChange}: HeaderProps){
    
    function handleChange(e:React.ChangeEvent<HTMLInputElement>){
        handleValueChange(e.target.value);
    }
    
    return (
        <HeaderStyle>
              <HeaderInputStyle onChange={handleChange} placeholder="Enter the name of a game, eg Dota 2"/>
        </HeaderStyle>
    )
}

export default Header;