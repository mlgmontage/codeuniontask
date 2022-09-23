import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Input, PasswordInput } from "../components/formik";
import { ModalBox, ModalPanel, CloseBtn, ModalTitle, Button } from "../UI";
import axios from "../api/axios";

// NOTE: Design might not fully correspond to template, because there is required fields on API like "nickname" and "phone"
// so I had to include these too.

type RegisterFormT = {
  email: string;
  nickname: string;
  phone: string;
  password: string;
  confirmPassword: string;
};

const registerScheme = Yup.object().shape({
  email: Yup.string()
    .min(3, "Не меньше чем 3 символа")
    .email("Должно быть эл-почтой")
    .required("Обязательно"),

  nickname: Yup.string()
    .min(3, "Не меньше чем 3 символа")
    .required("Обязательно"),

  phone: Yup.number()
    .typeError("Должно быть числом")
    .min(11, "Минимум 11 символов")
    .required("Обязательно"),

  password: Yup.string()
    .min(8, "Не меньше чем 8 символов")
    .required("Обязательно"),

  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Пароль должно совпадать"),
});

const Register = () => {
  const navigate = useNavigate();
  const [consent, setConsent] = useState(true);

  const initial: RegisterFormT = {
    email: "",
    nickname: "",
    phone: "",
    password: "",
    confirmPassword: "",
  };

  return (
    <ModalBox>
      <ModalPanel>
        <CloseBtn onClick={() => navigate(-1)} />
        <ModalTitle>Зарегистрироваться</ModalTitle>
        <Formik
          initialValues={initial}
          onSubmit={(values, helpers) => {
            helpers.setSubmitting(true);

            axios
              .post("/auth/registration/customer/new", values)
              .then((res) => {
                console.warn("registration answer", res);
                helpers.setSubmitting(false);
              });
          }}
          validationSchema={registerScheme}
        >
          {(helpers) => {
            return (
              <Form>
                <Input name="email" placeholder="Email" />
                <Input name="nickname" placeholder="Псевдоним" />
                {/* TODO: Put input mask for "phone" input */}
                <Input name="phone" placeholder="Телефон" />
                <PasswordInput name="password" placeholder="Пароль" />
                <PasswordInput
                  name="confirmPassword"
                  placeholder="Повторите пароль"
                />
                <label className="flex gap-[9px] items-start mt-[100px] mb-9">
                  <input
                    type="checkbox"
                    className="block w-5 h-5"
                    onChange={() => setConsent(!consent)}
                  />
                  <div className="text-dark">
                    Я принимаю условия{" "}
                    <a href="#" className="underline">
                      Пользовательского соглашения, политики конфиденциальности,
                      Обработки и распространения персональных данных
                    </a>
                  </div>
                </label>
                <Button
                  disabled={consent || helpers.isSubmitting}
                  className="h-[60px] w-full rounded-sm"
                >
                  Войти
                </Button>
              </Form>
            );
          }}
        </Formik>
      </ModalPanel>
    </ModalBox>
  );
};

export default Register;
