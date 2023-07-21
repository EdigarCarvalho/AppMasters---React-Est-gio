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
        const userFavorites: Favorito[] = userDoc.data()?.favoritos || [];
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
        // Step 1: Get the current user's UID.
        const uid = auth.currentUser.uid;

        // Step 2: Use the current user's UID to find their document in the "users" collection.
        const usersCollectionRef = collection(db, 'users');
        const userDocRef = doc(usersCollectionRef, uid);
        const userDoc = await getDoc(userDocRef);

        // Step 3: Update the "favoritos" array in the user's document.
        if (userDoc.exists()) {
          const userFavorites: Favorito[] = userDoc.data()?.favoritos || [];

          // Check if the title already exists in the favorites array
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
              // If it's already favorited, just keep the existing favorites
              updatedFavorites = userFavorites;
            }
          }

          await updateDoc(userDocRef, { favoritos: updatedFavorites });
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
      <HeartStyle active={filled} onClick={handleClick} />
    </>
  );
}

export default Heart;
