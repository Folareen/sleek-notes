import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const getAllNotes = async (currentUser) => {
  try {
    const querySnapshot = await getDocs(collection(db, currentUser.uid));
    const allNotes = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      allNotes.push({ id: doc.id, data });
    });
    allNotes.reverse();

    return allNotes;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllNotes;
