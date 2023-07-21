import { useState, useEffect } from 'react';
import { Star, StarContainer } from './style';
import { auth, db } from '../../../config/firebase';
import { toast } from 'react-toastify';
import { TitleInterface } from '..';
import { collection, query, where, getDocs, addDoc, updateDoc } from 'firebase/firestore';
import { FirebaseError } from '@firebase/util';

interface RatingData {
  uid: string;
  title: string;
  stars: number;
}

const Rating = (title: TitleInterface) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    loadRating();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title]);

  const loadRating = async () => {
    if (auth.currentUser) {
      const uid = auth.currentUser.uid;
      const ratingsCollectionRef = collection(db, 'ratings');
      const q = query(ratingsCollectionRef, where('uid', '==', uid), where('title', '==', title.title));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        const ratingData = querySnapshot.docs[0].data() as RatingData;
        setRating(ratingData.stars);
      } else {
        setRating(0);
      }
    }
  };

  const handleClick = async () => {
    if (!auth.currentUser) {
      toast.error('To rate a game, you need to log in to your account.');
    } else {
      try {
        const uid = auth.currentUser.uid;
        const ratingsCollectionRef = collection(db, 'ratings');
        const q = query(ratingsCollectionRef, where('uid', '==', uid), where('title', '==', title.title));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const ratingDocRef = querySnapshot.docs[0].ref;
          await updateDoc(ratingDocRef, { stars: rating });
        } else {
          const ratingData: RatingData = {
            uid: uid,
            title: title.title,
            stars: rating,
          };
          await addDoc(ratingsCollectionRef, ratingData);
        }

        // Display a success message to the user.
        toast.success(`You rated ${title.title} with ${rating} star(s).`);
      } catch (error) {
        if (error instanceof FirebaseError) {
          const errorCode = error.code;
          toast.error(`Error: ${errorCode}`);
        }
      }
    }
  };

  const handleHover = (index: number) => {
    setRating(index);
  };

  return (
    <StarContainer>
      {[...Array(4)].map((_, index) => (
        <Star
          key={index}
          active={index < rating}
          onMouseOver={() => handleHover(index + 1)}
          onClick={handleClick}
        />
      ))}
    </StarContainer>
  );
};

export default Rating;
