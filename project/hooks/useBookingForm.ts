import { useState, useCallback } from "react";

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  course: string;
  message?: string;
}

export interface UseBookingFormReturn {
  formData: BookingFormData;
  errors: Partial<BookingFormData>;
  isSubmitting: boolean;
  updateField: (field: keyof BookingFormData, value: string) => void;
  validateForm: () => boolean;
  submitForm: () => Promise<boolean>;
  resetForm: () => void;
}

const initialFormData: BookingFormData = {
  name: "",
  email: "",
  phone: "",
  course: "",
  message: "",
};

export function useBookingForm(): UseBookingFormReturn {
  const [formData, setFormData] = useState<BookingFormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<BookingFormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = useCallback(
    (field: keyof BookingFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [field]: value }));
      // Clear error when user starts typing
      if (errors[field]) {
        setErrors((prev) => ({ ...prev, [field]: undefined }));
      }
    },
    [errors],
  );

  const validateForm = useCallback(() => {
    const newErrors: Partial<BookingFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (
      !/^(\+84|0)[3|5|7|8|9][0-9]{8}$/.test(formData.phone.replace(/\s+/g, ""))
    ) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.course) {
      newErrors.course = "Vui lòng chọn khóa học";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const submitForm = useCallback(async () => {
    setIsSubmitting(true);

    try {
      if (!validateForm()) {
        return false;
      }

      // TODO: Implement actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call

      console.log("Form submitted:", formData);
      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateForm]);

  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setIsSubmitting(false);
  }, []);

  return {
    formData,
    errors,
    isSubmitting,
    updateField,
    validateForm,
    submitForm,
    resetForm,
  };
}
