import  { useState } from 'react';
import { HeartStyle } from './style';
import { toast } from 'react-toastify';
import { FirebaseError } from '@firebase/util';
import { auth } from '../../../config/firebase';

function Heart(){
  const[ filled , setFilled] = useState(false);

  function handleClick(){

    if(!auth.currentUser) 
        toast.error("To favorite a game, you need to log in to your account.");
    else{
      try{
        setFilled(!filled)
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorCode = error.code;
          toast.error(`Error: ${errorCode}`);
        }
      }
    }

  }

  return (
    <>
        <HeartStyle
        active={filled}
        onClick={handleClick}
        />
    </>
  );
}

export default Heart;
