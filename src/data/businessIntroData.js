const businessIntroData = {
    "spectral-camera": {
      title: '“초분광 영상 기술”',
      description:
        '초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행하며, AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능합니다.',
      images: [`small`, `default`],
      applications: [
        {
          image: 'spectral-camera-application(3).jpg',
          title: '식품',
          description: '신선도 평가, 이물 검출, 성분 분석 ',
        },
        {
          image: 'spectral-camera-application(4).jpg',
          title: '의약/화학',
          description: '약품 정량 검사, 정품/가품 감별',
        },
        {
          image: 'spectral-camera-application(5).jpg',
          title: '농업',
          description: '생육 상태, 병해 감지',
        },
        {
          image: 'spectral-camera-application(1).jpg',
          title: '리사이클링/환경',
          description: '플라스틱/섬유 분류, 폐기물 선별',
        },
        {
          image: 'spectral-camera-application(2).jpg',
          title: '반도체/전자재료',
          description: '미세 오염 물질 검출',
        },
      ],
    },
  
    // 다른 탭도 추가
    illumination: {
      title: '“비전 검사 기술”',
      description: '여기에 해당 설명 작성...',
      images: ['vision(1).jpg', 'vision(2).jpg'],
      extraText: '여기에 해당 설명 작성...22.',
      applications: [
        {
          image: 'vision-application(1).jpg',
          title: '식음료 산업',
          description: '이물 검사, 라벨 확인 등',
        },
      ],
    },
  };
  
  export default businessIntroData;
  