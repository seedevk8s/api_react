import axios from "axios";

const callToken = async () => {
  const accessToken = sessionStorage.getItem("accessToken");

  if (accessToken) {
    console.log("✅ 기존 토큰 사용:", accessToken);
    return accessToken;
  }

  try {
    console.log("🔄 토큰이 없으므로 새로 발급 요청...");
    const response = await axios.post("/auth", {
      client_id: "client_id",
      client_secret: "client_secret",
    });

    if (response.status === 200) {
      const newToken = response.data.accessToken;
      sessionStorage.setItem("accessToken", newToken);
      console.log("✅ 새 토큰 발급 완료:", newToken);
      return newToken;
    } else {
      console.error("❌ 인증 실패");
      return null;
    }
  } catch (error) {
    console.error("❌ 토큰 요청 중 오류 발생:", error);
    return null;
  }
};

export default callToken;
