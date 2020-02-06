class StringUtils {
  static removeAccents(str) {
    return (
      str
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        // Gambs to bypass the fixed text that came from backend
        .replace("Todos", "")
    );
  }

  static removeDangerousCharacters(str) {
    return str.replace("\\", "");
  }

  static prepareToCompare(str) {
    return this.removeAccents(str).toLowerCase();
  }
}

export default StringUtils;
