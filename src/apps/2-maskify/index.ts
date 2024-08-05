/**
 * Ex: 9876532411234567
 * Accept 16 digits number only
 * apart from 1st and last 4 digits, replace every digit with #
 */

export function maskfy({ input }: { input?: string }) {
  const stringInput = String(input); // 9876532411234567
  const firstDigit = stringInput.slice(0); // 9
  const lastFourDigits = stringInput.slice(-4); // 4567
  const remainingDigits = stringInput.slice(1, 11); // 87653241123
  const maskedData = remainingDigits.replace("/^d+$/", "#");

  if (input === "") {
    return "";
  }

  return `${firstDigit}${maskedData}${lastFourDigits}`;
}
