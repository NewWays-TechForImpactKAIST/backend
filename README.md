# 다양성 평가 리포트 웹사이트 백엔드

## 프로젝트 소개
- 사용 기술: Node.js(TypeScript + Express.js), MongoDB

## 프로젝트 구조
```
src
├── index.ts               # 서버 시작 코드
├── config.ts              # 환경변수 설정
├── controllers            # 서비스 로직
│   ├── scrapResult.ts
│   ├── (...)
├── db                     # Mongoose 모델
│   ├── model.ts           # 모델 정의, MongoDB 연결
│   └── schema.ts          # 스키마 정의
├── middlewares            # 각종 미들웨어
│   ├── index.ts
│   ├── (...)
├── routes                 # 라우팅 로직
│   ├── index.ts
│   ├── scrapResult.ts
│   ├── (...)
└── utils                  # 각종 헬퍼 함수
    └── diversity.ts       # 다양성 지표 계산
```

## 개발환경 설정

### 1. 의존성 설치 (Node.js >= 18.0.0 사용)
```bash
pnpm install
```

### 2. 환경변수 설정

.env.development 파일을 만들고, MongoDB URI를 입력합니다.
```bash
cp .env.example .env.development
code .env.development
```

### 3. 실행

```bash
pnpm start
```

