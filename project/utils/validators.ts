/**
 * Validate email address
 * @param email - Email to validate
 * @returns Boolean indicating if email is valid
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Vietnamese phone number
 * @param phone - Phone number to validate
 * @returns Boolean indicating if phone is valid
 */
export function isValidPhoneNumber(phone: string): boolean {
  const cleanedPhone = phone.replace(/\s+/g, "");
  // Vietnamese phone patterns: 0[3,5,7,8,9]xxxxxxxx or +84[3,5,7,8,9]xxxxxxxx
  const phoneRegex = /^(\+84|0)[3|5|7|8|9][0-9]{8}$/;
  return phoneRegex.test(cleanedPhone);
}

/**
 * Validate required field
 * @param value - Value to validate
 * @returns Boolean indicating if value is not empty
 */
export function isRequired(value: string): boolean {
  return value.trim().length > 0;
}

/**
 * Validate minimum length
 * @param value - Value to validate
 * @param minLength - Minimum required length
 * @returns Boolean indicating if value meets minimum length
 */
export function hasMinLength(value: string, minLength: number): boolean {
  return value.trim().length >= minLength;
}

/**
 * Validate maximum length
 * @param value - Value to validate
 * @param maxLength - Maximum allowed length
 * @returns Boolean indicating if value doesn't exceed maximum length
 */
export function hasMaxLength(value: string, maxLength: number): boolean {
  return value.length <= maxLength;
}

/**
 * Validate Vietnamese name (only letters, spaces, and Vietnamese characters)
 * @param name - Name to validate
 * @returns Boolean indicating if name is valid
 */
export function isValidVietnameseName(name: string): boolean {
  // Vietnamese name pattern: letters, spaces, and Vietnamese diacritics
  const nameRegex =
    /^[a-zA-ZàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđĐ\s]+$/;
  return nameRegex.test(name);
}

/**
 * Validate URL
 * @param url - URL to validate
 * @returns Boolean indicating if URL is valid
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validate age (must be a number between min and max)
 * @param age - Age to validate
 * @param minAge - Minimum age (default: 0)
 * @param maxAge - Maximum age (default: 120)
 * @returns Boolean indicating if age is valid
 */
export function isValidAge(
  age: number,
  minAge: number = 0,
  maxAge: number = 120,
): boolean {
  return Number.isInteger(age) && age >= minAge && age <= maxAge;
}
