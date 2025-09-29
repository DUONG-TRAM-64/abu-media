/**
 * Format số tiền VNĐ
 * @param amount - Số tiền
 * @param showCurrency - Hiển thị ký hiệu tiền tệ
 * @returns Formatted string
 */
export function formatCurrency(
  amount: number,
  showCurrency: boolean = true,
): string {
  const formatted = new Intl.NumberFormat("vi-VN").format(amount);
  return showCurrency ? `${formatted} VNĐ` : formatted;
}

/**
 * Format số điện thoại Việt Nam
 * @param phone - Số điện thoại
 * @returns Formatted phone number
 */
export function formatPhoneNumber(phone: string): string {
  // Remove all non-digit characters
  const cleaned = phone.replace(/\D/g, "");

  // Check if it's a Vietnamese phone number
  if (cleaned.length === 10 && cleaned.startsWith("0")) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  } else if (cleaned.length === 11 && cleaned.startsWith("84")) {
    return `+84 ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(
      8,
    )}`;
  }

  return phone; // Return original if doesn't match pattern
}

/**
 * Format tên người (capitalize first letter of each word)
 * @param name - Tên
 * @returns Formatted name
 */
export function formatName(name: string): string {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Format email (lowercase)
 * @param email - Email
 * @returns Formatted email
 */
export function formatEmail(email: string): string {
  return email.toLowerCase().trim();
}

/**
 * Truncate text với ellipsis
 * @param text - Text cần truncate
 * @param maxLength - Độ dài tối đa
 * @returns Truncated text
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + "...";
}

/**
 * Format duration (minutes to hours:minutes)
 * @param minutes - Số phút
 * @returns Formatted duration
 */
export function formatDuration(minutes: number): string {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;

  if (hours === 0) {
    return `${remainingMinutes} phút`;
  } else if (remainingMinutes === 0) {
    return `${hours} giờ`;
  } else {
    return `${hours} giờ ${remainingMinutes} phút`;
  }
}
