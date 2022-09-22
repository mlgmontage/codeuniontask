import React, { useState } from "react";
import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Input, PasswordInput } from "../hooks/formik";
import { ModalBox, ModalPanel, CloseBtn, ModalTitle, Button } from "../UI";

type RegisterFormT = {
  login: string;
  password: string;
  confirmPassword: string;
};

const registerScheme = Yup.object().shape({
  login: Yup.string()
    .min(3, "Не меньше чем 3 символа")
    .email("Должно быть эл-почтой")
    .required("Обязательно"),
  password: Yup.string()
    .min(7, "Не меньше чес 7 символов")
    .required("Обязательно"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Пароль должно совпадать"),
});

const Register = () => {
  const navigate = useNavigate();
  const [consent, setConsent] = useState(true);

  const initial: RegisterFormT = {
    login: "",
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
          onSubmit={(values) => console.warn(values)}
          validationSchema={registerScheme}
        >
          {() => {
            return (
              <Form>
                <Input name="login" placeholder="Email" />
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
                  disabled={consent}
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
