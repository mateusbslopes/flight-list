import enUS from "./en-US";
import ptBR from "./pt-BR";

export default locale => {
  switch (locale) {
    case "pt-BR":
      return ptBR;
    case "en-US":
      return enUS;
    default:
      return ptBR;
  }
};
