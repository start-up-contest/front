import React, {useState} from "react";
import {useParams} from "react-router-dom";
import styles from "./LoginPage.module.css";
import logo from "../assets/images/big_logo.png";
import {postLogin} from "../libs/api/user";

function LoginPage() {
  const {} = useParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const requestData = {
        userId: email,
        password: password,
      };

      const response = await postLogin(requestData);
      const token = response.data.token;

      localStorage.setItem("jwtToken", token);
      console.log("로그인 성공, JWT 토큰:", token);
      alert("로그인 성공");
    } catch (error) {
      alert("로그인 실패," + error);
      console.error("로그인 오류:", error);
    }
  };

  return (
    <div className={styles.container}>
      <img src={logo} className={styles.logo} alt="Logo" />
      <div className={styles.loginBox}>
        <div className={styles.titleText} style={{marginBottom: "50px"}}>
          다양한 서비스를 위해 로그인해주세요
        </div>
        <input
          className={styles.inputStyle}
          placeholder="이메일 주소 입력"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={styles.inputStyle}
          placeholder="비밀번호 입력"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className={styles.loginButton} onClick={handleLogin}>
          로그인
        </button>
        <div className={styles.bottomButton}>
          <button className={styles.textButton}>계정 찾기</button>{" "}
          <button className={styles.textButton}>비밀번호 찾기</button>
          <div style={{flexGrow: "1"}} />
          <button className={styles.textButton}>회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
