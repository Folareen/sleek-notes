import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

const getAllDocuments = async (currentUser) => {
  try {
    const querySnapshot = await getDocs(collection(db, currentUser.uid));
    const allDocuments = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      allDocuments.push({ id: doc.id, data });
    });
    console.log("done fetching documents");

    return allDocuments;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export default getAllDocuments;
