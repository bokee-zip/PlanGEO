import { Slide } from '../types';

export const PLAN_SLIDES: Slide[] = [
  {
    id: 12,
    title: "3. PoC 수행방안",
    oneLiner: "기술적 개선과 성과 입증을 위한 <strong>단계별 실행 로드맵</strong> 상세 전략",
    bullets: [],
    visualGuide: "마지막 섹션 브레이크. 실행력과 성과 중심의 다이나믹한 디자인."
  },
  {
    id: 13,
    title: "3-0. 고도몰 플랫폼 특성을 고려한 개선 전략",
    oneLiner: "",
    bullets: [
      "ACTION:<span class='text-[#FF4040]'>robots.txt AI봇 허용</span>|FTP 직접 수정 또는 NHN커머스 고객센터 요청|A사 개발팀|업데이트 시 덮어쓰기 가능 &rarr; 주 1회 모니터링",
      "ACTION:Sitemap.xml 확인/생성|고도몰 관리자 확인 &rarr; 미존재 시 수동 생성 + Search Console 제출|이트라이브|페이지 수 변동 시 갱신 필요",
      "ALERT:⚠ 위 2가지 미완료 시 &rarr; 아래 3-1/3-2 최적화 효과를 정상 측정할 수 없음",
      "CONSTR:SSR 한계 &rarr; 서버 사이드 렌더링 제어 불가|HTML 내 직접 텍스트/데이터 삽입 방식으로 구현",
      "CONSTR:템플릿 구조 제약|변경 가능 영역(상품 상세 설명, 머리말/꼬리말) vs 불가 영역 구분",
      "CONSTR:치환코드 활용 범위 한정|자유 입력 가능 영역(상품 설명, 추가 HTML)을 최대한 활용"
    ],
    visualGuide: "플랫폼 제약사항과 필수 조치를 테이블로 대비한 형태"
  },
  {
    id: 17,
    title: "3-2. 제품 상세페이지 — As-Is & To-Be",
    oneLiner: "테크니컬 GEO 개선 및 <strong>텍스트 레이어 확보</strong> 전략",
    bullets: [
      "ASIDE_TITLE:본 PoC 범위에서는 상세페이지 이미지 ‘순서 재배치’는 제외하고, GEO 개선에 집중합니다.",
      "ASIDE_BULLET:<strong>AI 인용/정확도 개선의 핵심 레버</strong>는 이미지 위치보다 ‘텍스트로 읽히는 구조’(alt, hidden text, H1~H3)입니다.",
      "ASIDE_BULLET:<strong>alt 텍스트 품질이 확보</strong>되면 이미지 위치와 상관없이 크롤러의 정보 인식률이 대폭 상승합니다.",
      "ASIDE_BULLET:순서 재배치는 검증보다 <strong>UX/CRO 성격이 강해</strong> 이번 PoC 기술 검증 항목과는 분리합니다.",
      "ASIDE_BULLET:PoC 우선순위는 <strong>① 이미지 Alt 텍스트 전면 적용 → ② 섹션별 헤딩 구조 정비 및 데이터 구조화</strong> 순입니다.",
      "COMPARE:① 메타 태그|(점검 필요)|Meta Title·Desc·OG·Canonical 정규화",
      "COMPARE:② Alt 텍스트|없음 / '.' 등 비규격|\"A사 제품 [기능명] — [설명]\" 규격",
      "COMPARE:② 시맨틱 텍스트|없음|이미지 아래 H2/H3/p 텍스트 블록 삽입<br/>(시각적 노출 또는 sr-only, 클로킹 금지 준수)"
    ],
    visualGuide: "상세 페이지의 테크니컬 개선 핵심 포인트(Aside)와 4대 실행 항목(Grid)을 결합한 정보 중심 레이아웃."
  },
  {
    id: 18,
    title: "3-3. 검증 계획 — 프로토콜 · KPI",
    oneLiner: "성과 측정을 위한 <strong>정밀 검증 프로토콜</strong> 및 목표 지표 설정",
    bullets: [
      "PROTO:방법|1-1과 동일 프롬프트 세트(5개 질문)로 전/후 비교",
      "PROTO:모델|Gemini, Claude, ChatGPT, Perplexity (4개)",
      "PROTO:반복|개선 적용 후 2주 대기(크롤러 반영) &rarr; 10일 매일 1회 = 모델당 50건, 총 200건",
      "KPI:Q5 인용률|0% &rarr; 30%+ (가설 A)|text-[#F43F5E]",
      "KPI:Q1 인용률|29% &rarr; 50%+ (가설 B)|text-[#3C76F1]",
      "KPI:공식 URL 비율|15% &rarr; 40%+|text-[#10B981]",
      "KPI:Q2·Q3 노출|최소 1개 모델 (가설 C)|text-[#059669]",
      "KPI:사실 오류|오류 건수 50%+ 감소|text-[#F59E0B]"
    ],
    visualGuide: "검증 프로토콜과 KPI 지표를 대조표 형태로 배치한 성과 중심 레이아웃."
  }
];
