import ptBR from "./pt-BR";
import enUS from "./en-US";

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
