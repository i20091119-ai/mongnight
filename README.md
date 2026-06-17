# 뭉클한 밤 · 강의계획서

교원 디지털 야학 "뭉클한 밤"의 강의계획서 작성·인쇄(PDF 저장) 도구입니다.
GitHub Pages 정적 사이트로 배포됩니다.

## 구조

- `index.html` — 페이지 골격(스타일, 로딩 화면) + 로컬 스크립트 로드
- `src/app.jsx` — **편집용 원본** (React/JSX)
- `app.js` — `src/app.jsx`를 컴파일한 결과물 (자동 생성, 직접 수정 금지)
- `vendor/` — 저장소에 포함된 React/ReactDOM (외부 CDN 미사용)

> 이전에는 브라우저에서 unpkg.com CDN으로 React와 Babel을 매번 내려받아
> 실시간 변환했습니다. 학교/사내망에서 CDN이 느리거나 차단되면 빈 화면이
> 떠 "접속이 안 되는" 것처럼 보였습니다. 지금은 모든 자원을 저장소에 포함해
> **외부 네트워크 없이도** 즉시 로드됩니다.

## 수정 방법

1. `src/app.jsx`를 수정합니다.
2. 빌드합니다.

   ```bash
   npm install   # 최초 1회
   npm run build # app.js 재생성 + vendor 파일 갱신
   ```

3. 변경된 `app.js`(및 필요 시 `vendor/`)를 함께 커밋·푸시합니다.

브라우저에서 직접 확인하려면 저장소 루트에서 정적 서버를 띄웁니다.

```bash
npx serve .    # 또는: python3 -m http.server
```
