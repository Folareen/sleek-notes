import { createContext, useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const DocumentsContext = createContext();

const DocumentsContextProvider = ({ children }) => {
  const [documents, setDocuments] = useState();

  useEffect(() => {
    (async function () {
      // setLoading(true)
      const querySnapshot = await getDocs(collection(db, user.uid));
      console.log(querySnapshot);
      // console.log(typeof querySnapshot)
      // setDocuments(querySnapshot.docs)
      const collectionOfDocuments = [];

      querySnapshot.forEach((doc) => {
        const data = doc.data();
        collectionOfDocuments.push({ id: doc.id, data });
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
      });
      console.log("here?");
      console.log(collectionOfDocuments);
      setDocuments(collectionOfDocuments);
      // setLoading(false)
    })();
  }, []);

  return (
    <DocumentsContext.Provider value={{ documents, setDocuments }}>
      {children}
    </DocumentsContext.Provider>
  );
};

export default DocumentsContextProvider;
