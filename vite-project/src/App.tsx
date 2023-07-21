import { useEffect } from "react";
import MakeRoutes from "./routes";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";

function App() {

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Usuário logado:", user.email);
      } else {
        console.log("Usuário desconectado");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <MakeRoutes />	
    </>
  );
}

export default App;
