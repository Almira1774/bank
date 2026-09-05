export const formatCardNumber = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(\d{4})(?=\d)/g, "$1 ").trim();
};

export const formatExpiryDate = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 4);
  if (digits.length >= 2) {
    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  }
  return digits;
};

export const formatCVV = (value: string): string => {
  return value.replace(/\D/g, "").slice(0, 4);
};

/* Превращает серверную дату в строку вида "1 сентября 2026"
 */
export const formatDate = (value: string, language: string): string => {
  if (!value) return "";

  const dateObj = new Date(value);
  return new Intl.DateTimeFormat(language, {
    day: "numeric",
    month: "long",
    year: "numeric"
  }).format(dateObj);
};

/**
 * Превращает серверную дату в чистое время вида "09:03"
 */
export const formatTime = (value: string, language: string): string => {
  if (!value) return "";

  const dateObj = new Date(value);
  return new Intl.DateTimeFormat(language, {
    hour: "2-digit",
    minute: "2-digit"
  }).format(dateObj);
};

/**
 *  Форматирует число в  строку с символом валюты (например: $5.99 или 5 000 ₽)
 */
export const formatCurrency = (amount: number, currency: string, lang: string): string => {
  if (amount === undefined || amount === null) return "";

  return new Intl.NumberFormat(lang, {
    style: "currency",
    currency: currency,
  }).format(amount);
};