export function formatPhoneNumber(phone: string): string {
  const digits = phone.replace(/\D/g, '');

  if (digits.length !== 13) return phone;

  const ddi = digits.slice(0, 2);
  const ddd = digits.slice(2, 4);
  const prefixo = digits.slice(4, 9);
  const sufixo = digits.slice(9);

  return `+${ddi} (${ddd}) ${prefixo}-${sufixo}`;
}
