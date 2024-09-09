export function generateRandomPassword(): string {
  const length = 12;
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const specialChars = '!@#$%^&*()-_=+[]{}|;:,.<>?'; //по идее, можно добавлять просто цифру/цифры

  let password = '';
  const allChars = upperCaseChars + lowerCaseChars + digits + specialChars;

  password += upperCaseChars[Math.floor(Math.random() * upperCaseChars.length)];

  password += digits[Math.floor(Math.random() * digits.length)];
  password += specialChars[Math.floor(Math.random() * specialChars.length)];

  for (let i = password.length; i < length; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  password = password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');

  return password;
}
