// 빌드: src/app.jsx → app.js (JSX를 평범한 JS로 사전 컴파일)
//       node_modules의 React UMD 파일을 vendor/로 복사
// 목적: 브라우저에서 Babel 실시간 변환과 외부 CDN 의존성을 제거한다.
const fs = require("fs");
const path = require("path");
const babel = require("@babel/core");

const root = path.resolve(__dirname, "..");

// 1) JSX 컴파일
const srcPath = path.join(root, "src", "app.jsx");
const src = fs.readFileSync(srcPath, "utf8");
const { code } = babel.transformSync(src, {
  filename: srcPath,
  presets: [[require("@babel/preset-react"), { runtime: "classic" }]],
  comments: false,
  compact: false,
});
const banner = "/* 이 파일은 자동 생성됩니다. 직접 수정하지 마세요.\n" +
               "   원본: src/app.jsx · 재생성: npm run build */\n";
fs.writeFileSync(path.join(root, "app.js"), banner + code + "\n");
console.log("✓ app.js 생성 (" + code.length + " bytes)");

// 2) React UMD 파일 vendoring
const copies = [
  ["react/umd/react.production.min.js", "vendor/react.production.min.js"],
  ["react-dom/umd/react-dom.production.min.js", "vendor/react-dom.production.min.js"],
];
for (const [from, to] of copies) {
  fs.copyFileSync(path.join(root, "node_modules", from), path.join(root, to));
  console.log("✓ " + to);
}
