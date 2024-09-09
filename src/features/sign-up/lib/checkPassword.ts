export const checkPassword = (password: string, email: string) => {
  const hasEmail = () => {
    if (!password.includes(email) || !email) {
      return true;
    } else return false;
  };

  const hasSymbols = () => {
    if (password.match(/[\d\W]/)) {
      return true;
    } else return false;
  };

  const hasCapitals = () => {
    if (password.match(/[A-Z]/)) {
      return true;
    } else return false;
  };

  const isLong = () => {
    if (password.length < 8) {
      return false;
    } else return true;
  };

  return { email: hasEmail(), length: isLong(), contain: hasSymbols(), capitalize: hasCapitals() };
};
