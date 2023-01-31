
import { ru } from "./Ru";
import { uz } from "./Uz";
import { LANGUAGE } from "../tools/constants";

export const getLanguage = () => {
  return localStorage.getItem(LANGUAGE);
};

export const getText = (word) => {
  return getLanguage() === "uz" ? uz[word] : ru[word];
};