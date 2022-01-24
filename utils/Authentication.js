import { signOut } from "@firebase/auth";
import { auth } from "utils/firebase";

export const authentication = {
  SignOut: async () => {
    await signOut(auth);
    return null;
  },
};
