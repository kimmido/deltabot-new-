const businessIntroData = {
    // 머신비전 카메라
    "machine-vision": {
      title: '지능형 머신 비전',
      description:
        '다양한 산업 환경에서 발생하는 시각 처리 문제를 해결하기 위해 설계된 AI 기반 머신 비전 시스템입니다. 딥러닝과 2D/3D 비전 알고리즘을 기반으로 다양한 작업을 정밀하고 안정적으로 수행하며, 사용자의 편의성과 확장성을 모두 고려한 시스템입니다.',
      images: [`default`],
      applications: [
        {
          image: 'machine-vision-application(1).jpg',
          title: '제조/포장',
          description: '불량, 누락, 라벨 검사',
        },
        {
          image: 'machine-vision-application(2).jpg',
          title: '물류/유통',
          description: '코드 인식, 분류, 적재 확인',
        },
        {
          image: 'machine-vision-application(3).jpg',
          title: '스마트 팩토리',
          description: '이상 감지, 로봇 제어',
        },
      ],
    },
    
    // 열화상 카메라
    "thermal-camera": {
      title: '온도 감지부터 이상 징후 예측까지',
      description:
        '열화상카메라는 적외선 기반 비접촉식 온도 감지로 실시간 모니터링을 제공하며, AI 비전 기술과 결합해 자동화·안전·효율성을 높입니다. ',
      images: [`default`],
      extraText: '설비 과열, 누전, 체온 이상 등 온도 기반 이상 탐지 비접촉식 열 감지로 예방 진단 및 안전 모니터링 실현',
      applications: [
        {
          image: 'thermal-camera-application(1).jpg',
          title: '제조 라인 온도 이상감지',
          description: '불량, 누락, 라벨 검사',
        },
        {
          image: 'thermal-camera-application(2).jpg',
          title: '전기 설비 발열 점검',
          description: '코드 인식, 분류, 적재 확인',
        },
        {
          image: 'thermal-camera-application(3).jpg',
          title: '스마트 빌딩 화재 예방',
          description: '이상 감지, 로봇 제어',
        },
      ],
    },
    
    "spectral-camera": {
      title: '초분광 영상 기술',
      description:
        '초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행하며, AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능합니다. 초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행하며, AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능합니다.',
      images: [`small`, `small`],
      applications: [
        {
          image: 'spectral-camera-application(1).jpg',
          title: '반도체/전자재료',
          description: '미세 오염 물질 검출',
        },
        {
          image: 'spectral-camera-application(2).jpg',
          title: '의약/화학',
          description: '약품 정량 검사, 정품/가품 감별',
        },
        {
          image: 'spectral-camera-application(3).jpg',
          title: '리사이클링/환경',
          description: '플라스틱/섬유 분류, 폐기물 선별',
        },
      ],
    },
  
    // 조명
    "illumination": {
      title: 'AI 정밀 분석을 위한,고성능 머신비전 조명',
      description: '산업용 머신비전 검사용 고정밀 LED 조명 으로, 균일한 밝기와 다양한 파장 옵션을 제공하여 정밀 영상 획득을 지원합니다.',
      images: ['default'],
      applications: [
        {
          image: 'illumination-application(1).jpg',
          title: '반도체전자 부품 검사',
          description: '', 
        },
        {
          image: 'illumination-application(2).jpg',
          title: '의약품 외관 검사',
          description: '',
        },
        {
          image: 'illumination-application(3).jpg',
          title: '물류 패키지 인식 및 코드 스캔 지원',
          description: '',
        },
      ],
    },
  
    // 비전 컨트롤러
    "vision-controller": {
      title: '스마트 제조를 위한 핵심 비전 처리 장치',
      description: '고성능 머신비전 솔루션을 위한 통합형 비전 컨트롤러로, 카메라, 조명, AI 분석, I/O 제어 기능을 하나의 장비에서 처리할 수 있는 올인원 플랫폼입니다.산업용 현장에서 고속 생산 라인의 정밀 검사, 분류, 제어 작업에 최적화되어 있습니다.',
      images: ['default'],
      extraText: '머신비전 시스템의 중앙 제어장치로, 영상 입력 → 처리 → 결과 출력까지 통합 관리',
      applications: [
        {
          image: 'vision-application(1).jpg',
          title: '전자/반도체 공정',
          description: '',
        },
        {
          image: 'vision-application(1).jpg',
          title: '자동차 부품 검사',
          description: '',
        },
        {
          image: 'vision-application(1).jpg',
          title: '식음료 라벨 및 포장 검사',
          description: '',
        },
        {
          image: 'vision-application(1).jpg',
          title: '물류 패키징 검수',
          description: '',
        },
      ],
    },

    // GPU 서버
    "gpu-server": {
      title: '다양한 AI/HPC 고성능 GPU',
      description: 'AI 인프라 통합 구축, 고성능 연구/분석 환경, 또는 기업용 AI 서비스 플랫폼의 기반으로 매우 적합합니다.',
      images: ['default'],
      features: [
        {
          icon: 'icon_cpu',
          text: '고성능 GPU 지원'
        },
        {
          icon: 'icon_computer_graphics',
          text: '멀티코어 서버 CPU'
        },
        {
          icon: 'icon_io_interface',
          text: '고속·확장형 I/O'
        },
        {
          icon: 'icon_data_center',
          text: 'AI·HPC 통합 가속'
        },
        {
          icon: 'icon_puzzle',
          text: '확장성과 유연한 구성'
        },
        {
          icon: 'icon_network_transfer',
          text: '고속 네트워킹'
        },
      ],
      applications: [
        {
          image: 'vision-application(1).jpg',
          title: '지능형 비전 분석 시스템',
          description: '',
        },
        {
          image: 'vision-application(1).jpg',
          title: '의료 영상 진단 보조 시스템',
          description: '',
        },
        {
          image: 'vision-application(1).jpg',
          title: '제조 이상탐지 및 품질 분석',
          description: '',
        },
      ],
    },

    // 워크스테이션
    "workstations": {
      title: '고성능 워크스테이션 & 서버',
      description: 'AI, HPC, CAD/CAE, 머신비전, 시뮬레이션을 위한 최적화된 성능을 제공하는 고성능 워크스테이션 및 서버. 다양한 폼팩터와 최신 프로세서, 고성능 GPU, 고속 인터페이스, 원격 관리 기능을 통해 뛰어난 처리 능력과 효율성을 구현합니다.',
      images: ['default'],
      features: [
        {
          icon: 'icon_cpu',
          text: '고성능 연산처리'
        },
        {
          icon: 'icon_data_center',
          text: '서버급 안정성'
        },
        {
          icon: 'icon_io_interface',
          text: '고속 인터페이스'
        },
        {
          icon: 'icon_puzzle',
          text: '탁월한 확장성'
        },
        {
          icon: 'icon_symbol_ice',
          text: '고급 냉각 시스템'
        },
        {
          icon: 'icon_computer_security',
          text: '보안 & 원격 관리'
        },
      ],
      applications: [
        {
          image: 'workstations-application(1).jpg',
          title: 'AI 및 고성능 연산(AI & HPC)',
          description: '',
        },
        {
          image: 'workstations-application(2).jpg',
          title: '산업용 영상 분석 및 자동화 (Vision & Automation)',
          description: '',
        },
        {
          image: 'workstations-application(3).jpg',
          title: '설계 및 시뮬레이션 (Design & Simulation)',
          description: '',
        },
      ],
    },
  };
  
  export default businessIntroData;
  