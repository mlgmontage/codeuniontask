import React from "react";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

import { Input, PasswordInput } from "../hooks/formik";
import { ModalBox, ModalPanel, CloseBtn, ModalTitle, Button } from "../UI";

type LoginFormT = {
  login: string;
  password: string;
};

const loginScheme = Yup.object().shape({
  login: Yup.string().min(3, "Не меньше чем 3 символа").required("Обязательно"),
  password: Yup.string()
    .min(7, "Не меньше чес 7 символов")
    .required("Обязательно"),
});

const Login = () => {
  const navigate = useNavigate();

  const initial: LoginFormT = {
    login: "",
    password: "",
  };

  return (
    <ModalBox>
      <ModalPanel>
        <CloseBtn onClick={() => navigate(-1)} />
        <ModalTitle>Войти</ModalTitle>
        <Formik
          initialValues={initial}
          onSubmit={(values) => console.warn(values)}
          validationSchema={loginScheme}
        >
          {() => {
            return (
              <Form>
                <Input name="login" placeholder="E-mail" />
                <PasswordInput name="password" placeholder="Пароль" />
                <Button className="h-[60px] w-full rounded-sm">Войти</Button>
                <h3 className="text-center text-boldBase text-lightGray mt-[30px] mb-[50px] cursor-pointer">
                  Зарегистрироваться
                </h3>
                <h4 className="text-center text-xxs text-lightGray underline hover:no-underline cursor-pointer">
                  Забыли пароль?
                </h4>
              </Form>
            );
          }}
        </Formik>
      </ModalPanel>
    </ModalBox>
  );
};

export default Login;
