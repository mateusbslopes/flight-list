import i18next from "i18next";
import ptBr from "./pt-BR";

export default () => {
  return i18next.init({
    lng: "pt",
    debug: true,
    resources: {
      pt: {
        translation: ptBr
      }
    }
  });
};
