import React, { useState } from "react";
import { Checkbox, Form, Input } from "antd";
import { useForm } from "antd/lib/form/Form";
import {
    EyeInvisibleOutlined,
    EyeOutlined,
    LockOutlined,
    MailOutlined,
} from "@ant-design/icons";

export default function Login(props:any) {
    const [loginForm] = useForm();
    const { setShowForgetPw, switchToSignUp, onLogin } = props;
    //login
    async function signIn() {
        await loginForm.validateFields();
        const { userNameLogin, passwordLogin } = loginForm.getFieldsValue();
        const result = await onLogin(userNameLogin, passwordLogin);
        console.log('result ', result)
    }

    return (
        <Form form={loginForm}>
            <Form.Item
                name="userNameLogin"
                validateTrigger={"onBlur"}
                rules={[
                    {
                        validator: () => {
                            const { userNameLogin } =
                                loginForm.getFieldsValue();
                            if (userNameLogin.trim() != "") {
                                return Promise.resolve();
                            } else {
                                return Promise.reject(
                                  ("email_empty")
                                );
                            }
                        },
                    },
                    {
                        type: "email",
                        message: ("email_correct"),
                    },
                ]}
            >
                <div className="formItem">
                    <Input
                        size="large"
                        bordered={false}
                        placeholder={"email-hint"}
                        type={"email"}
                        prefix={<MailOutlined />}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                signIn();
                            }
                        }}
                    />
                </div>
            </Form.Item>
            <Form.Item
                name="passwordLogin"
                validateTrigger={"onBlur"}
                rules={[
                    {
                        validator: () => {
                            const { passwordLogin } =
                                loginForm.getFieldsValue();
                            if (passwordLogin.trim() != "") {
                                return Promise.resolve();
                            } else {
                                return Promise.reject(
                                  ("pwd_empty")
                                );
                            }
                        },
                    },
                ]}
            >
                <div className="formItem">
                    <Input.Password
                        size="large"
                        bordered={false}
                        iconRender={(visible) =>
                            visible ? (
                                <EyeOutlined color="#722ed1" />
                            ) : (
                                <EyeInvisibleOutlined color="#722ed1" />
                            )
                        }
                        placeholder={"pwd-hint"}
                        type={"password"}
                        prefix={<LockOutlined />}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                signIn();
                            }
                        }}
                    />
                </div>
            </Form.Item>
            <div className="action-bar">
                <div
                    className="auth-btn"
                    onClick={() => signIn()}
                    style={{ width: "100%" }}
                >
                   login
                </div>
            </div>
        </Form>
    );
}
