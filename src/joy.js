import * as yup from "yup";


const BasicSchema = yup.object().shape({
  email: yup.string().email().required(),
  name: yup.string().required(),
  number: yup.string().min(6).max(10).required(),
  message: yup.string().min(30).required(),
});

export default BasicSchema;
