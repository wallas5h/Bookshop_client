import { createContext } from "react";


export interface AppContextType {
  isUserLogged: boolean | string;
  changeUserLogged: (value: boolean) => void;
  userName: string;
  changeUserName: (value: string) => void;
  userId: string;
  changeUserId: (value: string) => void;
}

export const defaultObject = {
  isUserLogged: '',
  changeUserLogged: () => { },

  userName: '',
  changeUserName: () => { },

  userId: '',
  changeUserId: () => { },
}

export const AppContext = createContext<AppContextType>(defaultObject)