## Why **HttpOnly Cookies** are safer than `localStorage`

### and **how to implement them (React + Node/NestJS)**

![Image](https://cdn.prod.website-files.com/651c6d0a39a8a5ec04e121e1/6542b24518960214b2881356_632dbe1915a5d270eb9f1fcb_gThtFPb5lvu-CSGSqFX3zBJFLWsev6ODeCENPBrjoQRdwZhBNzzEn3WQvZbxffhOhm67tAEXHN1NaDlRPkFqF82ApWL5cbiM_qIvrRpD-pravM5U7o6N7B54qiskQNH35clb-WV9.png)

![Image](https://assets.bytebytego.com/diagrams/0152-cookies-session-jwt.png)

![Image](https://developer.mozilla.org/shared-assets/images/diagrams/http/cookies/cookie-basic-example.png)

![Image](https://substackcdn.com/image/fetch/f_auto%2Cq_auto%3Agood%2Cfl_progressive%3Asteep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fced6562d-3be6-4dd4-a141-fed9e6b02182_1600x1226.png)

---

## 🔐 WHY HttpOnly Cookies are SAFE

### 1️⃣ JavaScript **cannot access** HttpOnly cookies

```http
Set-Cookie: accessToken=xyz; HttpOnly;
```

✔ `document.cookie` ❌

✔ `localStorage.getItem()` ❌

👉 Even if **XSS happens**, the attacker **cannot steal tokens**.

---

### 2️⃣ Cookies are sent **automatically** by the browser

* No manual token handling in React
* Backend reads cookie directly

```text
Browser → Cookie → Backend → Auth OK
```

✔ Less surface area for mistakes
✔ No token exposure in JS memory

---

### 3️⃣ Secure + SameSite flags block common attacks

```http
Set-Cookie: accessToken=xyz;
HttpOnly; Secure; SameSite=Strict;
```

| Flag     | Protects From     |
| -------- | ----------------- |
| HttpOnly | XSS               |
| Secure   | MITM (HTTPS only) |
| SameSite | CSRF              |

---

### 4️⃣ Refresh token rotation becomes safe

* Refresh token **never leaves cookies**
* Even if access token expires, session stays secure

---

## ⚠️ What HttpOnly Cookies do **NOT** solve

| Threat                   | Status                        |
| ------------------------ | ----------------------------- |
| XSS                      | ✅ Protected                   |
| CSRF                     | ⚠ Needs SameSite / CSRF token |
| Session hijack via HTTPS | ❌ (use Secure)                |

---

# 🛠 HOW TO IMPLEMENT (STEP-BY-STEP)

---

## 🔹 1. Backend (Node / NestJS / Express)

### 🔐 Login API (sets cookies)

```ts
// auth.controller.ts
@Post("login")
login(@Res({ passthrough: true }) res: Response) {
  res.cookie("accessToken", "ACCESS_JWT", {
    httpOnly: true,
    secure: true,        // HTTPS only
    sameSite: "strict",
    maxAge: 15 * 60 * 1000 // 15 min
  });

  res.cookie("refreshToken", "REFRESH_JWT", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });

  return { success: true };
}
```

---

## 🔹 2. Enable CORS (IMPORTANT)

```ts
app.enableCors({
  origin: "https://frontend.com",
  credentials: true
});
```

👉 Required so cookies are sent across domains.

---

## 🔹 3. Protect APIs using cookie-based auth

```ts
// jwt.strategy.ts
const token = req.cookies.accessToken;
```

✔ No Authorization header needed
✔ Token stays server-side

---

## 🔹 4. React frontend – API calls

### ✅ Axios setup

```ts
axios.create({
  baseURL: "https://api.backend.com",
  withCredentials: true // 🔴 REQUIRED
});
```

No token handling
No interceptors needed
No `localStorage`

---

## 🔹 5. Refresh token flow

### Backend refresh endpoint

```ts
@Post("refresh")
refresh(@Req() req, @Res({ passthrough: true }) res: Response) {
  const refreshToken = req.cookies.refreshToken;

  // validate refresh token...

  res.cookie("accessToken", "NEW_ACCESS_TOKEN", {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 15 * 60 * 1000
  });

  return { refreshed: true };
}
```

---

### React auto-retry on 401

```ts
axios.interceptors.response.use(
  res => res,
  async err => {
    if (err.response.status === 401) {
      await axios.post("/auth/refresh", {}, { withCredentials: true });
      return axios(err.config);
    }
    return Promise.reject(err);
  }
);
```

---

## 🔹 6. Logout (clear cookies)

```ts
@Post("logout")
logout(@Res({ passthrough: true }) res: Response) {
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");
  return { loggedOut: true };
}
```

---

## 🔒 SECURITY CHECKLIST (Production)

✔ HttpOnly cookies

✔ Secure flag

✔ SameSite=Strict or Lax

✔ HTTPS only

✔ CSP headers

✔ Token rotation

✔ Short-lived access tokens

---

## 🎯 Interview-Ready Answer (Perfect)

> **HttpOnly cookies are safer because JavaScript cannot access them. Even if an attacker injects malicious JavaScript through XSS, the authentication tokens cannot be stolen. The browser automatically sends cookies with requests, reducing client-side token handling. With Secure and SameSite flags, HttpOnly cookies also mitigate CSRF attacks, making them the recommended approach for authentication in modern React applications.**

---

## ❗ Common Interview Follow-ups

**Q: Why not store refresh token in localStorage?**
➡ Still vulnerable to XSS

**Q: Does HttpOnly cookie fully prevent CSRF?**
➡ No, needs SameSite or CSRF token

**Q: Why access token short-lived?**
➡ Limits damage if compromised

---

If you want next:

* 🔥 **NestJS complete auth module**
* 🔥 **Next.js App Router + cookies**
* 🔥 **Diagram for interviews**
* 🔥 **CSRF protection deep dive**

Just tell me 👌
