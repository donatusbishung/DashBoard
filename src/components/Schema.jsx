import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  name: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  password: yup
    .string()
    .min(8)
    .matches(passwordRules, { message: "8+ characters" })
    .required(""),
  countryCode: yup.string().required("Country code is required"),
  phone: yup.string().required("Phone number is required"),
  birthday: yup.string().required("Birthday is required"),
  gender: yup.string().required("Gender is required"),
});
