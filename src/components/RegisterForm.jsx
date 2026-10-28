import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object({
  firstName: yup.string().required("სახელი სავალდებულოა"),
  email: yup
    .string()
    .email("ელფოსტა არასწორია")
    .required("ელფოსტა სავალდებულოა"),

  password: yup
    .string()
    .min(6, "პაროლი უნდა შეიცავდეს მინიმუმ 6 სიმბოლოს")
    .required("პაროლი სავალდებულოა"),
});

import React from "react";

function RegisterForm() {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data) => {
    console.log('ფორმის მონაცემები:', data);
    // აქ ვიღებთ შევსებულ პასუხებს
  };


  return <>
  <form onSubmit={handleSubmit(onSubmit)}>
        {/* სახელის ველი */}
        <div style={{ marginBottom: '15px' }}>
          <label>სახელი:</label>
          <br />
          <input
            {...register('firstName',)}
            style={{ padding: '8px', width: '250px' }}
          />
          {/* ერორ ჰენდლინგი (შეცდომის ჩვენება) */}
          {errors.firstName && <p style={{ color: 'red', margin: '5px 0' }}>{errors.firstName.message}</p>}
        </div>

        
        <div style={{ marginBottom: '15px' }}>
          <label>პაროლი:</label>
          <br />
          <input
            {...register('password', )}
            style={{ padding: '8px', width: '250px' }}
          />
          {errors.password && <p style={{ color: 'red', margin: '5px 0' }}>{errors.password.message}</p>}
        </div>


        {/* ელ-ფოსტის ველი */}
        <div style={{ marginBottom: '15px' }}>
          <label>ელ-ფოსტა:</label>
          <br />
          <input
            {...register('email', )}
            style={{ padding: '8px', width: '250px' }}
          />
          {errors.email && <p style={{ color: 'red', margin: '5px 0' }}>{errors.email.message}</p>}
        </div>
        




        {/* გაგზავნის ღილაკი */}
        <button type="submit"  style={{ padding: '10px 20px' }}>
          { 'გაგზავნა'}
        </button>
      </form>

  </>;
}

export default RegisterForm;
