const businessIntroData = {
    // 협업로봇
    "collaboration": {
      theme: 'lightBlue',
      title: '사람과 함께 일하는 스마트 로봇',
      description:
        [
          '사람과 같은 작업 공간에서 #직접 협력하며 작업할 수 있도록 설계된 산업용 로봇# 입니다.',
          '기존 산업용 로봇과는 달리, #로봇과 인간이 동시에 하나의 작업을 수행할 수 있는 환경을# 목표로 하며, #안전성, 유연성, 사용성을# 중점으로 설계되었습니다.'
        ],
      images: [`default`],
      features: [
        {
          icon: 'icon_shield.png',
          title: '안전한 작업 환경',
          texts: [
            "충돌 감지 및 자동 정지",
            "펜스 없이도 운영가능",
            "ISO 안전기준 준수",
            "작업자 피로도 및 스트레스 감소"
          ]
        },
        {
          icon: 'icon_computer_gear.png',
          title: '쉬운 사용성과 빠른 투입',
          texts: [
            "간단한 드래그 앤 드롭 방식",
            "Teach by hand 기능 제공",
            "단시간 셋업으로 빠른 작업 전환",
            "비전문 인력도 조작 가능"
          ]
        },
        {
          icon: 'icon_install.png',
          title: '유연한 설치 & 공간 활용',
          texts: [
            "경량 컴팩트 구조",
            "기존 라인과 손쉽게 통합",
            "라인 재배치 시 유연성 확보",
            "산업 간 경계 없이 적용 가능"
          ]
        },
        {
          icon: 'icon_money.png',
          title: '비용 절감 & 고효율 투자',
          texts: [
            "단순 반복 작업 자동화",
            "하나의 로봇으로 다기능 수행",
            "빠른 ROI 실현",
            "생산성은 향상, 인건비는 감소"
          ]
        }
      ],
      applications: [
        {
          video: 'collaboration-application(1).mp4',
          poster: 'collaboration-application(1).jpg',
          title: '기어박스 정밀 조립',
        },
        {
          video: 'collaboration-application(2).mp4',
          poster: 'collaboration-application(2).jpg',
          title: '종양 생검 내비게이션 및 위치 지정 로봇',
        },
      ],
    },
    
    // 수직다관절
    "serial-robot": {
      theme: 'default',
      title: '모든 산업 현장에, 가장 유연한 파트너.',
      description:
        ['산업용 로봇의 매 순간과 모든 동작은 제조 전반에 걸쳐 중요하며, 다양한 작업 범위와 하중 용량, 그리고 고정밀과 고속의 완벽한 조합 덕분에 로딩 및 언로딩, 디버링, 테스트, 접착, 분류, 조립, 핸들링 등 모든 종류의 생산 공정에 널리 사용되어 왔으며 모든 산업 분야에서 탁월한 성능을 발휘 합니다.'],
      images: [`default`],
      applications: [
        {
          image: 'machine-vision-application(1).jpg',
          title: '',
        },
        {
          image: 'machine-vision-application(2).jpg',
          title: '',
        },
        {
          image: 'machine-vision-application(3).jpg',
          title: '',
        },
      ],
    },
    
    // 머신비전 카메라
    "machine-vision": {
      theme: 'default',
      title: '지능형 머신 비전',
      description:
        [
          '다양한 산업 환경에서 발생하는 시각 처리 문제를 해결하기 위해 설계된 AI 기반 머신 비전 시스템입니다.', 
          '딥러닝과 2D/3D 비전 알고리즘을 기반으로 다양한 작업을 정밀하고 안정적으로 수행하며, 사용자의 편의성과 확장성을 모두 고려한 시스템입니다.'
        ],
      images: [`default`],
      applications: [
        {
          image: 'machine-vision-application(1).jpg',
          title: '제조/포장 검수',
        },
        {
          image: 'machine-vision-application(2).jpg',
          title: '물류 식별·분류',
        },
        {
          image: 'machine-vision-application(3).jpg',
          title: '스마트 팩토리',
        },
      ],
    },
    
    // 열화상 카메라
    "thermal-camera": {
      theme: 'default',
      title: '온도 감지부터 이상 징후 예측까지',
      description:
        ['열화상카메라는 적외선 기반 비접촉식 온도 감지로 실시간 모니터링을 제공하며, AI 비전 기술과 결합해 자동화·안전·효율성을 높입니다.'],
      images: [`default`],
      extraText: '설비 과열, 누전, 체온 이상 등 온도 기반 이상 탐지 비접촉식 열 감지로 예방 진단 및 안전 모니터링 실현',
      applications: [
        {
          image: 'thermal-camera-application(1).jpg',
          title: '제조 라인 온도 이상감지',
        },
        {
          image: 'thermal-camera-application(2).jpg',
          title: '전기 설비 발열 점검',
        },
        {
          image: 'thermal-camera-application(3).jpg',
          title: '스마트 빌딩 화재 예방',
        },
      ],
    },
    
    "spectral-camera": {
      theme: 'default',
      title: '초분광 영상 기술',
      description:
        [
          '초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행하며, AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능합니다.', 
        ],
      images: [`small`, `small`],
      applications: [
        {
          image: 'spectral-camera-application(1).jpg',
          title: '전자소재 품질관리',
        },
        {
          image: 'spectral-camera-application(2).jpg',
          title: '의약품 측정·감별',
        },
        {
          image: 'spectral-camera-application(3).jpg',
          title: '재활용품/폐기물 선별·분류',
        },
      ],
    },
  
    // 조명
    "illumination": {
      theme: 'default',
      title: 'AI 정밀 분석을 위한, 고성능 조명',
      description: ['산업용 머신비전 검사용 고정밀 LED 조명 으로, 균일한 밝기와 다양한 파장 옵션을 제공하여 정밀 영상 획득을 지원합니다.'],
      images: ['default'],
      applications: [
        {
          image: 'illumination-application(1).jpg',
          title: '반도체전자 부품 검사', 
        },
        {
          image: 'illumination-application(2).jpg',
          title: '의약품 외관 검사',
        },
        {
          image: 'illumination-application(3).jpg',
          title: '물류 패키지 인식 및 코드 스캔 지원',
        },
      ],
    },
  
    // 비전 컨트롤러
    "vision-controller": {
      theme: 'default',
      title: '스마트 제조를 위한 핵심 비전 처리 장치',
      description: [
        '고성능 머신비전 솔루션을 위한 통합형 비전 컨트롤러로, 카메라, 조명, AI 분석, I/O 제어 기능을 하나의 장비에서 처리할 수 있는 올인원 플랫폼입니다.',
        '산업용 현장에서 고속 생산 라인의 정밀 검사, 분류, 제어 작업에 최적화되어 있습니다.'
      ],
      images: ['default'],
      extraText: '머신비전 시스템의 중앙 제어장치로, 영상 입력 → 처리 → 결과 출력까지 통합 관리',
      applications: [
        {
          image: 'vision-controller-application(1).jpg',
          title: '전자/반도체 공정',
        },
        {
          image: 'vision-controller-application(2).jpg',
          title: '자동차 부품 검사',
        },
        {
          image: 'vision-controller-application(3).jpg',
          title: '물류 패키징 검수',
        },
      ],
    },

    // GPU 서버
    "gpu-server": {
      theme: 'default',
      title: 'AI·HPC를 위한 고성능 GPU',
      description: [
        'AI 인프라 통합 구축, 고성능 연구·분석 환경, 또는 기업용 AI 서비스 플랫폼의 기반으로 매우 적합한 GPU 서버입니다.',
        '고성능 GPU와 멀티코어 CPU를 바탕으로 대규모 연산 및 딥러닝 학습을 빠르게 처리할 수 있으며, 고속 네트워킹과 확장형 I/O, 유연한 리소스 관리로 안정적인 운영이 가능합니다. AI 추론·분석부터 스토리지 모니터링까지 폭넓게 대응할 수 있어, 확장성과 통합성을 갖춘 차세대 인프라를 구현할 수 있습니다.'
      ],
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
          image: 'gpu-server-application(1).jpg',
          title: '지능형 비전 분석 시스템',
        },
        {
          image: 'gpu-server-application(1).jpg',
          title: '의료 영상 진단 보조 시스템',
        },
        {
          image: 'gpu-server-application(1).jpg',
          title: '제조 이상탐지 및 품질 분석',
        },
      ],
    },

    // 워크스테이션
    "workstations": {
      theme: 'default',
      title: '고성능 워크스테이션 & 서버',
      description: ['AI, HPC, CAD/CAE, 머신비전, 시뮬레이션을 위한 최적화된 성능을 제공하는 고성능 워크스테이션 및 서버. 다양한 폼팩터와 최신 프로세서, 고성능 GPU, 고속 인터페이스, 원격 관리 기능을 통해 뛰어난 처리 능력과 효율성을 구현합니다.'],
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
        },
        {
          image: 'workstations-application(2).jpg',
          title: '산업용 영상 분석 및 자동화 (Vision & Automation)',
        },
        {
          image: 'workstations-application(3).jpg',
          title: '설계 및 시뮬레이션 (Design & Simulation)',
        },
      ],
    },

    // 랙마운트
    "rack-mount": {
      theme: 'default',
      title: '산업 현장을 위한 컴퓨팅 솔루션',
      description: [
        'Rack Mount 서버는 산업 환경에서도 안정적인 성능과 확장성을 기반으로 다양한 분야에 적용되고 있습니다.',
        '공장 자동화, 스마트 팩토리, 머신비전, 품질검사, IoT 게이트웨이, 에지 컴퓨팅 등 고속 데이터 처리와 실시간 제어가 요구되는 환경에서 핵심 인프라로 활용됩니다.',
        '특히, 견고한 하드웨어 구성과 표준화된 폼팩터는 산업용 캐비닛이나 제어 랙에 쉽게 통합될 수 있어 유지보수 및 확장 또한 용이합니다. 또한 GPU나 고속 SSD, 고성능 네트워크 카드 등을 추가 장착하여 AI 분석, 예지 정비, 비전 시스템 등의 고부가가치 작업도 지원합니다.'
      ],
      images: ['default'],
      features: [
        {
          icon: 'icon_cpu',
          text: '고밀도 설계'
        },
        {
          icon: 'icon_data_center',
          text: '다양한 활용성'
        },
        {
          icon: 'icon_central_network',
          text: '중앙 집중 관리'
        },
        {
          icon: 'icon_puzzle',
          text: '유연한 확장성'
        },
        {
          icon: 'icon_symbol_ice',
          text: '효율적 냉각'
        },
        {
          icon: 'icon_auto_management',
          text: '관리 편의성'
        },
      ],
      extraText: "Rack Mount 서버는 데이터 센터와 서버실에서 효율적으로 공간을 활용할 수 있도록 설계된 서버로, 여러 대의 서버를 수직으로 쌓아 설치할 수 있는 구조를 가지고 있습니다. 이러한 서버는 높은 밀도의 컴퓨팅 파워를 제공하며, 관리 및 유지보수의 용이성 덕분에 많은 기업에서 선호되고 있습니다.",
      applications: [
        {
          image: 'rack-mount-application(1).jpg',
          title: '대규모 데이터 처리/저장',
        },
        {
          image: 'rack-mount-application(2).jpg',
          title: '기업용 서버 관리',
        },
        {
          image: 'rack-mount-application(3).jpg',
          title: '클라우드 서비스 인프라 구축',
        },
      ],
    },
  };
  
  export default businessIntroData;
  