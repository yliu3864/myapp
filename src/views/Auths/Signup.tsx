import { Button, Form, Input, message, Tabs } from "antd";
import { useForm } from "antd/lib/form/Form";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
    EyeInvisibleOutlined,
    EyeOutlined,
    LockFilled,
    LockOutlined,
    MailOutlined,
} from "@ant-design/icons";

export default function Signup(props:any) {
    const [signUpForm] = useForm();
   const t_auth_ui = useTranslation("translation", {
        keyPrefix: "auth_page",
    }).t;
    const t_auth_policy = useTranslation("translation", {
        keyPrefix: "auth_policy",
    }).t;

    const [validateCode, setValidateCode] = useState("");
    const [timerClickable, setTimerClickable] = useState(true);
    const [confirmSignUpAvailable, setConfirmSignUpAvailable] = useState(false);

    const { switchToLogin, onLogin } = props;
        //判定注册按钮是否可用
    function recordValidationCode(e:any) {
        if (e.target.value.length >= 6) {
            e.target.value = e.target.value.slice(0, 6);
            setValidateCode(e.target.value);
            setConfirmSignUpAvailable(true);
        } else if (e.target.value.length < 6) {
            setConfirmSignUpAvailable(false);
        }
    }
        //认证注册
    async function confirmSignUp() {
        try {
            const { username, password } = signUpForm.getFieldsValue();
            // await Auth.confirmSignUp(username, validateCode);
            window.openDialog(
                t_auth_policy("signup_confirm_success"),
                t_auth_policy("signup_confirm_success_message")
            );
            /** 手动登录
            navigate("/auths/login", { replace: true });
            /*/
            //** 自动登录
            // await onLogin(username, password);
            //*/
        } catch (error) {
            window.openMessageBox(
                t_auth_policy("validate_code_error"),
                "error"
            );
        }
    }

        //user registration without validation
    // async function signUp() {
        // try {
        //     const { username, password } = signUpForm.getFieldsValue();
        //     await signUpForm.validateFields();

        //     // await Auth.signUp({
        //     //     username,
        //     //     password,
        //     //     attributes: {
        //     //         email: username,
        //     //     },
        //     // });
        //     window.openDialog(
        //         t_auth_policy("signup_success"),
        //         t_auth_policy("signup_success_message")
        //     );
        // } catch (error) {
        //     setTimerClickable(!setTimerClickable);
        //     console.log("error send signup", error);
        //     let errorInfo = "";
        //     if (error.toString().indexOf("UsernameExistsException") != -1) {
        //         errorInfo = t_auth_policy("error_user_exists");
        //         window.openMessageBox(errorInfo, "error");
        //         // resendConfirmationCode();
        //     } else if (
        //         error.toString().indexOf("LimitExceededException") != -1
        //     ) {
        //         errorInfo = t_auth_policy("request_frequent_error");
        //         window.openMessageBox(errorInfo, "error");
        //     } else {
        //         errorInfo = t_auth_policy("validate_hint");
        //         window.openMessageBox(errorInfo, "error");
        //     }
        // }
    // }
    return (
        <Form form={signUpForm}>
            <Form.Item
                name="username"
                validateTrigger={"onBlur"}
                rules={[
                    {
                        required: true,
                        message: t_auth_policy("email_empty"),
                    },
                    {
                        type: "email",
                        message: t_auth_policy("email_correct"),
                    },
                ]}
            >
                <div className="formItem">
                    <Input
                        size="large"
                        bordered={false}
                        placeholder={t_auth_policy("email-hint")}
                        type={"email"}
                        prefix={<MailOutlined />}
                    />
                </div>
            </Form.Item>

            <Form.Item
                name="password"
                validateTrigger={"onBlur"}
                rules={[
                    {
                        required: true,
                        message: t_auth_policy("pwd_empty"),
                    },
                    {
                        validator: () => {
                            const { password } = signUpForm.getFieldsValue();
                            // if (!RegExp.password.test(password)) {
                            //     return Promise.reject(
                            //         t_auth_policy("pwd_format_rule")
                            //     );
                            // } else {
                            //     return Promise.resolve();
                            // }
                        },
                    },
                ]}
            >
                <div className="formItem">
                    <Input.Password
                        size="large"
                        bordered={false}
                        placeholder={t_auth_policy("pwd-hint")}
                        type={"password"}
                        iconRender={(visible) =>
                            visible ? (
                                <EyeOutlined color="#722ed1" />
                            ) : (
                                <EyeInvisibleOutlined color="#722ed1" />
                            )
                        }
                        prefix={<LockOutlined />}
                    />
                </div>
            </Form.Item>
            <Form.Item
                name="password_confirm"
                validateTrigger={"onBlur"}
                rules={[
                    {
                        required: true,
                        message: t_auth_policy("pwd_empty"),
                    },
                    {
                        validator: () => {
                            const { password, password_confirm } =
                                signUpForm.getFieldsValue();
                            if (password !== password_confirm) {
                                return Promise.reject(
                                    t_auth_policy("pwd_correspond")
                                );
                            } else {
                                return Promise.resolve();
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
                            visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                        }
                        placeholder={t_auth_policy("confirm-pwd-hint")}
                        type={"password"}
                        prefix={<LockFilled />}
                    />
                </div>
            </Form.Item>
            <div
                style={{
                    display: "flex",
                    marginTop: "0.8rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <div
                    className="formItem"
                    style={{ width: "70%", marginTop: "0" }}
                >
                    <Input
                        size="large"
                        bordered={false}
                        placeholder={t_auth_ui("code")}
                        type={"number"}
                        onInput={(e) => recordValidationCode(e)}
                    />
                </div>
                <div className="getCodebtn">
                    <Button
                        // onClick={() => signUp()}
                        htmlType="submit"
                        style={{
                            border: "none",
                            fontWeight: 600,
                        }}
                    >
                       getCode
                    </Button>
                </div>
            </div>
            <div className="action-bar">
                <div
                    onClick={() => {
                        confirmSignUpAvailable ? confirmSignUp() : {};
                    }}
                    className={`auth-btn  ${confirmSignUpAvailable ? "" : "auth-btn-disabled"
                        }`}
                >
                   register
                </div>
                <div className="auth-action" onClick={() => switchToLogin()}>
                   signin
                </div>
            </div>
        </Form>
    );
}
