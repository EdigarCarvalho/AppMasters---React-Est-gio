import { useEffect, useState } from 'react';
import { HeartStyle } from './style';
import { toast } from 'react-toastify';
import { FirebaseError } from '@firebase/util';
import { auth, db } from '../../../config/firebase';
import { TitleInterface } from '..';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

interface Favorito {
  title: string;
}

function Heart(title: TitleInterface) {

  const [filled, setFilled] = useState(false);

  useEffect(() => {
    checkIfFavorited();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  async function checkIfFavorited() {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      const usersCollectionRef = collection(db, 'users');
      const userDocRef = doc(usersCollectionRef, uid);
      const userDoc = await getDoc(userDocRef);
      
      if (userDoc.exists()) {
        const userFavorites: Favorito[] = userDoc.data()?.favorites || [];
        const isGameAlreadyFavorited = userFavorites.some(
          (jogo: Favorito) => jogo.title === title.title
        );
        setFilled(isGameAlreadyFavorited);
      }
    }
  }


  async function handleClick() {
    if (!auth.currentUser) {
      toast.error('To favorite a game, you need to log in to your account.');
    } else {
      try {
        const uid = auth.currentUser.uid;

        const usersCollectionRef = collection(db, 'users');
        const userDocRef = doc(usersCollectionRef, uid);
        const userDoc = await getDoc(userDocRef);


        if (userDoc.exists()) {
          const userFavorites: Favorito[] = userDoc.data()?.favorites || [];


          const isGameAlreadyFavorited = userFavorites.some(
            (jogo: Favorito) => jogo.title === title.title
          );

          let updatedFavorites: Favorito[] = [];

          if (filled) {
            
            updatedFavorites = userFavorites.filter(
              (jogo: Favorito) => jogo.title !== title.title
            );
            toast.success(`You remove ${title.title} to favorites.`);
          } else {
            toast.success(`You added ${title.title} to favorites.`);
            if (!isGameAlreadyFavorited) {
              updatedFavorites = [...userFavorites, { title: title.title }];
            } else {

              updatedFavorites = userFavorites;
            }
          }

          await updateDoc(userDocRef, { favorites: updatedFavorites });
          setFilled(!filled);
        }
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
        active={filled ? "true" : "false"}     
        onClick={handleClick} />
    </>
  );
}

export default Heart;
