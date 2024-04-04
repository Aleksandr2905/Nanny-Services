import * as yup from "yup";

const emailRegexp = /^[a-z0-9._-]+@[a-z0-9.-]+.[a-z]{2,4}$/;
const phoneRegexp = /^\+380\d{9}$/;

export const registrationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  password: yup
    .string()
    .required("Field is required")
    .min(8, "Minimum 8 characters")
    .max(64, "Maximum 64 characters"),
});

export const appointmentSchema = yup.object().shape({
  address: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  phone: yup
    .string()
    .required("Field is required")
    .matches(phoneRegexp, "Enter a correct phone"),
  age: yup
    .string()
    .required("Field is required")
    .min(1, "Minimum 1 characters")
    .max(2, "Maximum 2 characters"),
  time: yup.string().required("Field is required"),
  email: yup
    .string()
    .required("Field is required")
    .matches(emailRegexp, "Enter a correct email"),
  parents: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(64, "Maximum 64 characters"),
  comment: yup
    .string()
    .required("Field is required")
    .min(3, "Minimum 3 characters")
    .max(500, "Maximum 500 characters"),
});
