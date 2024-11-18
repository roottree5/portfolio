# 포트폴리오 웹사이트

이 프로젝트는 Flutter 모바일 앱 개발자인 Rroot의 포트폴리오 웹사이트입니다. React를 사용하여 개발되었으며, 개발자의 소개, 기술 스택, 프로젝트 경험 등을 보여줍니다.

## 기능

- 홈 페이지: 개발자 소개와 주요 기술 스택 (Flutter, Dart, Firebase) 표시
- 프로젝트 페이지: Flutter 앱 프로젝트 경험 및 상세 정보 제공
- 기술 스택 페이지: 개발자가 사용 가능한 기술과 도구 (Flutter, Dart, Kotlin, Swift, Python, React, Firebase, MongoDB, MySQL, Slack, Notion) 아이콘으로 표시
- 연락처 페이지: 방문자가 개발자에게 이메일을 보낼 수 있는 연락처 폼과 소셜 미디어 링크 제공

## 사용 기술

- React
- HTML/CSS
- JavaScript
- SVG (아이콘)

## 설치 및 실행

1. 레파지토리 클론:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   ```

2. 프로젝트 디렉토리로 이동:
   ```
   cd portfolio-website
   ```

3. 의존성 패키지 설치:
   ```
   npm install
   ```

4. 개발 서버 실행:
   ```
   npm start
   ```

5. 브라우저에서 `http://localhost:3000`으로 접속하여 웹사이트 확인

## 디렉토리 구조

- `src/`: 소스 코드
  - `components/`: React 컴포넌트
    - `Home.js`: 홈 페이지 컴포넌트
    - `Projects.js`: 프로젝트 페이지 컴포넌트
    - `TechStack.js`: 기술 스택 페이지 컴포넌트
    - `Contact.js`: 연락처 페이지 컴포넌트
  - `styles/`: CSS 스타일 파일
    - `index.css`: 전역 스타일
    - `App.css`: App 컴포넌트 스타일
    - `Home.css`: 홈 페이지 스타일
    - `Projects.css`: 프로젝트 페이지 스타일
    - `TechStack.css`: 기술 스택 페이지 스타일
    - `Contact.css`: 연락처 페이지 스타일
  - `assets/`: 이미지 및 아이콘 파일 (SVG)
  - `App.js`: 메인 App 컴포넌트
  - `index.js`: 애플리케이션 엔트리 포인트
- `public/`: 정적 파일
  - `index.html`: 메인 HTML 파일
  - `favicon.ico`: 파비콘
- `package.json`: 프로젝트 의존성 및 스크립트 정의

## 커스터마이징

이 프로젝트는 개인 포트폴리오 웹사이트로 제작되었습니다. 필요에 따라 컴포넌트와 스타일을 수정하여 자신의 포트폴리오에 맞게 커스터마이징할 수 있습니다.