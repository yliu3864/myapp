import React, { useEffect, useState } from "react";
import { message, Tabs } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import { useTranslation } from "react-i18next";

const { TabPane } = Tabs;
export default function Auth() {
    const location = useLocation();
    const navigate = useNavigate();
    const [tabIndex, setTabIndex] = useState(
        location.pathname.includes("login") ? "0" : "1"
    );
    const t_auth_ui = useTranslation("translation", {
        keyPrefix: "auth_page",
    }).t;

    const t_auth_policy = useTranslation("translation", {
        keyPrefix: "auth_policy",
    }).t;

    const onTabClick = (index:any) => {
        setTabIndex(index);
        index === "0"
            ? navigate("/auths/login", { replace: true })
            : navigate("/auths/signup", { replace: true });
    };

    const switchToLogin = () => {
        setTabIndex("0");
        navigate("/auths/login", { replace: true });
    };

    const switchToSignUp = () => {
        setTabIndex("1");
        navigate("/auths/signup", { replace: true });
    };


//  const onLogin = async (userNameLogin, passwordLogin) => {
//         setEmailConfirm(userNameLogin);
//         setLoginPwd(passwordLogin);
//         try {
//             const user = await Auth.signIn(userNameLogin, passwordLogin);
//             if (user["challengeName"] == "NEW_PASSWORD_REQUIRED") {
//                 setShowChangePassword(true);
//                 setCognitoUser(user);
//                 return -1;
//             } else {
//                 localStorage.setItem(
//                     ACCESS_TOKEN,
//                     user.signInUserSession.accessToken.jwtToken
//                 );
//                 localStorage.setItem(
//                     ID_TOKEN,
//                     user.signInUserSession.idToken.jwtToken
//                 );
//                 localStorage.setItem(IS_LOGIN, "true");
//                 if (localStorage.getItem(KEEP_LOGIN) == "true") {
//                     localStorage.setItem(USER_NAME, userNameLogin);
//                     localStorage.setItem(PASSWORD, passwordLogin);
//                 } else {
//                     localStorage.removeItem(USER_NAME);
//                     localStorage.removeItem(PASSWORD);
//                 }

//                 dispatch(userActions.setUsername(user.attributes.email));

//                 // Record User Token to Local Server

//                 // set custom attribute to cognito user
//                 // API_Auth.Register().then(res => GET_MERCHANT_BASIC()).then(async res => {
//                 //     const user = await Auth.currentAuthenticatedUser();
//                 //     const result = await Auth.updateUserAttributes(user, {
//                 //         'custom:merchant_id': res.data.merchant_id
//                 //     });
//                 //     console.log(result);
//                 // });

//                 API_Auth.Register(userNameLogin)
//                     .then((res) => {
//                         const userRoles = [];
//                         if (res.data) {
//                             res.data?.data.forEach((element) =>
//                                 userRoles.push(element?.role_name)
//                             );
//                         }
//                         const userRolesStr = userRoles.join(",");
//                         if (
//                             userRolesStr?.indexOf("ADMIN") == -1 &&
//                             userRolesStr?.indexOf("READONLY") == -1
//                         ) {
//                             window.openMessageBox(
//                                 "You do not have permission to use preka",
//                                 "error"
//                             );
//                             localStorage.setItem(IS_LOGIN, "false");
//                         } else {
//                             localStorage.setItem(USER_ROLE, userRolesStr);
//                             navigate("/", { replace: true });
//                             window.location.reload();
//                         }
//                     })
//                     .catch((err) => {
//                         console.log("err ", err);
//                     });
//                 return 1;
//             }
//         } catch (error) {
//             console.log(error);
//             let errorInfo = "";
//             if (
//                 error["message"]
//                     .toString()
//                     .indexOf("Incorrect username or password.") != -1
//             ) {
//                 errorInfo = t_auth_policy("auth_fail");
//             } else if (
//                 error.toString().indexOf("UserNotConfirmedException") != -1
//             ) {
//                 // errorInfo = t_auth_policy("not_confirmed")
//                 setShowConfirmEmail(true);
//                 return;
//             } else if (
//                 error["message"].toString().indexOf("User is disabled") != -1
//             ) {
//                 errorInfo = t_auth_policy("disabled_user");
//             } else {
//                 errorInfo = t_auth_policy("validate_hint_login");
//             }
//             window.openMessageBox(errorInfo, "error");
//         }
//     };
    return (
            <div className="auth-form">
                    <Tabs
                        tabBarStyle={{
                            fontWeight: 700,
                            backgroundColor: "#f6fbff",
                        }}
                        onTabClick={onTabClick}
                        activeKey={tabIndex}
                    >
                        {/* <TabPane tab={t_auth_ui("login")} key={"0"}> */}
                              <TabPane tab="login" key={"0"}>
                            <Login
                                // onLogin={onLogin}
                                switchToSignUp={switchToSignUp}
                            />
                        </TabPane>

                        <TabPane tab="Signup" key={"1"}>
                            <Signup
                                // onLogin={onLogin}
                                switchToLogin={switchToLogin}
                            />
                        </TabPane>
                    </Tabs>
                </div>
    )
}
