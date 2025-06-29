# React 답변 게시판 프로젝트 구조 분석

## 📋 프로젝트 개요

### **프로젝트명**: `react_reply` (답변 게시판)
### **기술 스택**: React 18.2.0 + React Router DOM + Axios
### **백엔드**: Spring Boot API 연동 (`api_spring`)

---

## 📁 주요 디렉토리 구조

### **1. 루트 레벨**
```
api_react/
├── package.json              # React 프로젝트 설정 및 의존성 관리
├── package-lock.json         # 의존성 잠금 파일
├── yarn.lock                 # Yarn 의존성 잠금 파일
├── README.md                 # 프로젝트 설명
└── public/                   # 정적 파일들
    ├── css/
    │   ├── contents.css      # 컨텐츠 스타일
    │   └── reset.css         # CSS 리셋
    ├── img/                  # 이미지 리소스들
    │   ├── ico_*.png         # 아이콘들 (삭제, 페이징, 검색 등)
    │   └── loading.gif       # 로딩 애니메이션
    ├── index.html            # 메인 HTML 템플릿
    ├── favicon.ico           # 파비콘
    ├── manifest.json         # PWA 매니페스트
    └── robots.txt            # 검색엔진 크롤링 설정
```

### **2. 소스 코드 (`src/`)**
```
src/
├── App.js                    # 메인 라우팅 설정
├── App.css                   # 앱 스타일
├── App.test.js              # 앱 테스트 파일
├── index.js                 # React 앱 진입점
├── index.css                # 글로벌 스타일
├── logo.svg                 # React 로고
├── reportWebVitals.js       # 성능 측정
├── setupTests.js            # 테스트 설정
├── component/               # 컴포넌트 디렉토리
│   ├── Main.js              # 메인 페이지 (자동으로 게시판 목록으로 리다이렉트)
│   └── board/               # 게시판 관련 컴포넌트들
│       ├── BoardList.js     # 게시판 목록 페이지
│       ├── BoardTr.js       # 게시판 테이블 행 컴포넌트
│       ├── CommentTr.js     # 댓글 테이블 행 컴포넌트
│       ├── Regist.js        # 글 작성 페이지
│       ├── View.js          # 글 상세보기 페이지
│       ├── Edit.js          # 글 수정 페이지
│       └── Reply.js         # 답글 작성 페이지
└── util/                    # 유틸리티 디렉토리
    ├── axiosInstance.js     # Axios 인스턴스 (토큰 자동 추가)
    └── callToken.js         # 토큰 관리 유틸리티
```

---

## 🚀 주요 기능

### **1. 라우팅 구조**
| 경로 | 컴포넌트 | 설명 |
|------|----------|------|
| `/` | Main | 자동으로 `/board/list`로 리다이렉트 |
| `/board/list` | BoardList | 게시판 목록 |
| `/board/regist` | Regist | 글 작성 |
| `/board/view` | View | 글 상세보기 |
| `/board/edit` | Edit | 글 수정 |
| `/board/reply` | Reply | 답글 작성 |

### **2. API 연동**
- **Axios 인스턴스**를 사용하여 백엔드 API와 통신
- **토큰 기반 인증** 시스템 구현
- 자동 토큰 갱신 및 401 에러 처리
- 요청/응답 인터셉터를 통한 중앙화된 에러 처리

### **3. 게시판 기능**
- ✅ 게시글 목록 조회 (페이징 지원)
- ✅ 검색 기능 (제목, 내용, 전체)
- ✅ 게시글 CRUD (생성, 읽기, 수정, 삭제)
- ✅ 답글 기능
- ✅ 댓글 시스템
- ✅ 조회수 표시

### **4. UI/UX**
- ✅ 로딩 상태 표시
- ✅ 페이징 네비게이션
- ✅ 반응형 디자인
- ✅ 아이콘 및 이미지 리소스
- ✅ 사용자 친화적인 인터페이스

---

## 📦 사용된 주요 라이브러리

| 라이브러리 | 버전 | 용도 |
|------------|------|------|
| `react` | ^18.2.0 | React 코어 |
| `react-dom` | ^18.2.0 | React DOM 렌더링 |
| `react-router-dom` | ^6.21.3 | 클라이언트 사이드 라우팅 |
| `axios` | ^1.6.7 | HTTP 클라이언트 |
| `dompurify` | ^3.2.5 | XSS 방지를 위한 HTML 정제 |
| `react-scripts` | 5.0.1 | Create React App 개발 환경 |
| `@testing-library/*` | ^13.0.0 | 테스트 라이브러리 |
| `web-vitals` | ^2.1.0 | 성능 측정 |

---

## 🔧 개발 환경 설정

### **스크립트**
```json
{
  "start": "react-scripts start",    // 개발 서버 실행
  "build": "react-scripts build",    // 프로덕션 빌드
  "test": "react-scripts test",      // 테스트 실행
  "eject": "react-scripts eject"     // 설정 추출
}
```

### **환경 변수**
- `REACT_APP_API_BASE_URL`: API 기본 URL (axiosInstance에서 사용)

---

## 🏗️ 아키텍처 특징

### **1. 컴포넌트 구조**
- **함수형 컴포넌트** 사용
- **React Hooks** 활용 (useState, useEffect, useRef, useNavigate)
- **컴포넌트 분리**를 통한 재사용성 향상

### **2. 상태 관리**
- **로컬 상태** (useState) 사용
- **세션 스토리지**를 통한 토큰 관리
- **컴포넌트 간 데이터 전달** (props)

### **3. API 통신**
- **중앙화된 Axios 인스턴스**
- **인터셉터**를 통한 토큰 자동 추가
- **에러 핸들링** 및 토큰 만료 처리

### **4. 보안**
- **XSS 방지** (DOMPurify 사용)
- **토큰 기반 인증**
- **세션 관리**

---

## 📝 결론

이 프로젝트는 **Spring Boot 백엔드 API와 연동되는 완전한 게시판 시스템**으로, 다음과 같은 특징을 가지고 있습니다:

- ✅ **현대적인 React 개발 패턴** 적용
- ✅ **토큰 기반 인증** 시스템
- ✅ **완전한 CRUD 기능** 제공
- ✅ **사용자 친화적인 UI/UX**
- ✅ **확장 가능한 아키텍처**
- ✅ **보안 고려사항** 반영

이는 **실무에서 바로 사용할 수 있는 수준의 게시판 애플리케이션**입니다. 