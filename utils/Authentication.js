import { signOut } from "@firebase/auth";
import { auth } from "utils/firebase";

export const autenticacion = {
  SignOut: async () => {
    await signOut(auth);
    return null;
  },
};
