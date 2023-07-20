import  { useState } from 'react';
import { Star, StarContainer } from './style';
import { auth } from '../../../config/firebase';
import { toast } from 'react-toastify';

const Rating = () => {
  const [rating, setRating] = useState(0);

  function handleClick(){

    if(!auth.currentUser) 
        toast.error("To rate a game, you need to log in to your account.");
    else{
      // try{

      // } catch (error) {
      //   if (error instanceof FirebaseError) {
      //     const errorCode = error.code;
      //     toast.error(`Error: ${errorCode}`);
      //   }
      }
    }

  

  const handleHover = (index: number) => {
    setRating(index + 1);
  };

  return (
    <StarContainer>
      {[...Array(4)].map((_, index) => (
        <Star
          key={index}
          active={index < rating ? rating : undefined}
          onMouseOver={() => handleHover(index)}
          onClick={handleClick}
        />
      ))}
    </StarContainer>
  );
};

export default Rating;
