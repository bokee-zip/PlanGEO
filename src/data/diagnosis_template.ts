import { Slide } from '../types';

/**
 * [TEMPLATE] 진단 결과 슬라이드 데이터
 * 이 파일은 데이터 구조(Structure)만 남기고 내용은 비워둔 템플릿입니다.
 * 
 * 💡 불렛(bullets) 내의 특수 접두어(Prefix) 규격:
 * - SCORE:항목|결과(Pass/Fail/Warning)|설명
 * - ISSUE:제목|상세 내용 (종합 진단 점수 포함 가능)
 * - HYPO:가설명|실행 가설 내용
 * - CROSS:내용(주로 두 가지 요소의 교차점)
 * - VERIFY:조건|대상|지표|우선순위|순위
 */

export const DIAGNOSIS_SLIDES: Slide[] = [
  {
    id: 1,
    title: "섹션 제목 (예: 2. 테크니컬 GEO 진단 결과)",
    oneLiner: "이 섹션을 한 줄로 요약하는 문구",
    bullets: [],
    visualGuide: "이 슬라이드에 들어갈 시각화 요소(차트, 이미지 등)에 대한 가이드"
  },
  {
    id: 2,
    title: "세부 항목 제목 (예: 2-1. 메인 홈페이지 진단)",
    oneLiner: "항목별 요약 문구",
    bullets: [
      "SCORE:항목명|Pass/Fail|미정의 내용",
      "SCORE:항목명|Warning|주의사항 내용",
      "ISSUE:핵심 문제점|종합 평가 및 상세 분석 내용"
    ],
    visualGuide: "스코어 카드, 스택 차트 등의 시각화 가이드"
  },
  {
    id: 3,
    title: "가설 수립 및 우선순위",
    oneLiner: "진단 기반 실행 계획 요약",
    bullets: [
      "HYPO:가설 A|실행 시 기대 효과 및 구체적 가설",
      "HYPO:가설 B|실행 시 기대 효과 및 구체적 가설",
      "VERIFY:사전 조건|도메인|핵심 지표|우선순위|0",
      "VERIFY:가설 A|대상|핵심 지표|높음|1"
    ],
    visualGuide: "가설 수립 플로우차트 또는 우선순위 매트릭스"
  }
];
