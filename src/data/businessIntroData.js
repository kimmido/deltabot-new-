const businessIntroData = {
    // 협업로봇
    "collaboration": {
      theme: 'sky-blue',
      title: '사람과 함께 일하는 스마트 로봇',
      description:
        [
          '사람과 같은 작업 공간에서 #직접 협력하며 작업할 수 있도록 설계된 산업용 로봇# 입니다. 기존 산업용 로봇과는 달리, #로봇과 인간이 동시에 하나의 작업을 수행할 수 있는 환경을# 목표로 하며, #안전성, 유연성, 사용성을# 중점으로 설계되었습니다.'
        ],
      images: [`card`],
      link: {
        label: "자동화 솔루션 자세히 보기",
        path: "/automation-solution",
        posId: false
      },
      featureType:"card",
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
          icon: 'icon_dashboard_ui.png',
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
      theme: 'vivid-cyan',
      title: '모든 산업 현장에, 가장 유연한 파트너.',
      description:
        ['산업용 로봇의 매 순간과 모든 동작은 제조 전반에 걸쳐 중요하며, 다양한 작업 범위와 하중 용량, 그리고 고정밀과 고속의 완벽한 조합 덕분에 #로로딩 및 언로딩, 디버링, 테스트, 접착, 분류, 조립, 핸들링 등 모든 종류의 생산 공정에 널리 사용#되어 왔으며 #모든 산업 분야에서 탁월한 성능을 발휘# 합니다.'],
      images: [`card`],
      link: {
        label: "자동화 솔루션 자세히 보기",
        path: "/automation-solution",
        posId: false
      },
      featureType:"card",
      features: [
        {
          icon: 'icon_chart_rocket.png',
          title: '고속 동작',
          texts: [
            "고속 서보 모터 탑재",
            "반복 동작을 빠르게 수행",
            "빠른 사이클 타임, 높은 생산성",
            "24시간 안정 운용 가능"
          ]
        },
        {
          icon: 'icon_aiming.png',
          title: '정밀 제어',
          texts: [
            "고해상도 제어 기술 적용",
            "±0.02mm의 미세한 움직임",
            "정밀 조립·검사에 최적",
            "불량률 최소화, 품질 향상"
          ]
        },
        {
          icon: 'icon_computer_programming.png',
          title: '쉬운 프로그래밍',
          texts: [
            "직관적인 티칭 펜던트 UI",
            "누구나 쉽게, 빠르게 제어",
            "드래그 앤 드롭 경로 설정",
            "오프라인 시뮬레이션 지원"
          ]
        },
        {
          icon: 'icon_robot_arm.png',
          title: '뛰어난 확장성',
          texts: [
            "다양한 장비와 완벽 호환",
            "표준 통신 프로토콜 지원",
            "기존 설비와의 손쉬운 연동",
            "맞춤형 자동화 시스템 구성"
          ]
        },
      ],
      applications: [
        {
          video: 'serial-robot-application(1).mp4',
          poster: 'serial-robot-application(1).jpg',
          title: '피스톤 연삭  및 디버링 생산 라인',
        },
        {
          video: 'serial-robot-application(2).mp4',
          poster: 'serial-robot-application(2).jpg',
          title: '배터리 냉각 플레이트 샌딩',
        },
      ],
    },

    // 팔레타이징로봇
    "palletizing": {
      theme: 'vivid-violet',
      title: '식품부터 물류까지, 코봇 팔레타이저로 완전 자동화',
      description:
        ['협동로봇(Cobot) 플랫폼을 기반으로,  #생산라인의 출하 공정에서 제품 또는 박스를 자동으로 적재(Palletizing) 하는 지능형 자동화 시스템#입니다. 반복적이고 고하중의 적재 작업을 #정밀 제어 기술과 고속 알고리즘#으로 자동화합니다.  AI 기반 제어와 충돌 감지 기술을 통해 작업자와 안전하게 협업하면서  공간 효율성 및 생산성을 극대화합니다.', '식품·음료·제약·물류 등 다양한 산업 환경에 유연하게 대응하며, 기존 생산 라인과의 #손쉬운 통합은 물론, 각 환경에 꼭 맞게 구성할 수 있는 유연한 설계 방식#으로 설비 투자 대비 높은 생산성 향상 효과를 제공합니다. 데이터 기반의 운영 분석을 통해 지속적인 공정 최적화가 가능한 #스마트 자동화 시스템의 핵심 솔루션#입니다.'],
      images: [`card`],
      link: {
        label: "자동화 솔루션 자세히 보기",
        path: "/automation-solution",
        posId: false
      },
      featureType:"card",
      features: [
        {
          icon: 'icon_shield.png',
          title: '고정밀·고안정 구조',
          texts: [
            "견고한 프레임으로 진동 최소화",
            "고하중 작업에서도 안정적 제어",
            "반복 작업 시 위치 정확도 유지",
            "일관된 적재 품질 확보",
          ]
        },
        {
          icon: 'icon_time_repeat.png',
          title: '장시간 안전운전',
          texts: [
            "산업용 구동계로 내구성 강화",
            "24시간 연속 운전에도 변형 최소",
            "정기 점검 외 별도 보정 불필요",
            "무인 자동화 환경에 최적",
          ]
        },
        {
          icon: 'icon_factory.png',
          title: '유연한 설정',
          texts: [
            "박스 크기·패턴 간편 설정",
            "노코드 방식으로 누구나 쉽게 조작",
            "제품 변경 시에도 셋업 시간 최소화",
            "다양한 라인에 쉽게 적용 가능",
          ]
        },
        {
          icon: 'icon_network_node.png',
          title: '라인통합 및 연동용이',
          texts: [
            "MES·ERP 등 상위 시스템 연동",
            "작업 이력·오류 로그 자동 기록",
            "PLC·센서 통합 제어 지원",
            "스마트 팩토리 구현에 적합",
          ]
        },
      ],
      applications: [
        {
          video: 'palletizing-application(1).mp4',
          poster: 'palletizing-application(1).jpg',
          title: '품목별 맞춤 적재 솔루션',
        },
        {
          video: 'palletizing-application(2).mp4',
          poster: 'palletizing-application(2).jpg',
          title: '박스 포장 적재 솔루션',
        },
      ],
    },

    // 델타로봇
    "deltarobot": {
      theme: 'royal-blue',
      title: '고속 조립·포장의 혁신, 델타 로봇',
      description:
        ['델타 로봇(Delta Robot)은 병렬 링크 메커니즘(Parallel Kinematic Mechanism)을 기반으로 설계된 고속 고정밀 산업용 로봇입니다. 3개의 경량 링크가 삼각형 형태의 상단 프레임에 연결되어 있으며, 각각 독립적인 서보 모터에 의해 구동됩니다. 이 링크들은 공통된 플랫폼(엔드 이펙터)을 지지하며, 로봇의 공간 좌표를 고정밀하게 제어할 수 있도록 해줍니다. 델타 구조는 일반적인 직렬 구조 로봇에 비해 훨씬 빠른 응답성과 낮은 관성을 제공하므로, #초당 수백 회의 픽앤플레이스 작업을 요구하는 고속 생산 라인#라인에 특히 적합합니다. 이러한 구조적 이점 덕분에 #델타 로봇은 식음료, 제약, 전자부품, 화장품, 포장 산업 등 다양한 분야에서 널리 활용#되고 있습니다.', '#클린룸 인증(IP65 이상) 제품도 지원 가능#하므로, 위생 기준이 엄격한 환경에서도 안정적으로 작동하며, 생산 품질 향상 및 생산성 극대화에 기여할 수 있는 핵심 자동화 장비로 자리매김하고 있습니다.',
        'DRF_ V 시리즈 차세대 플렉시블 워크스테이션은 #고성능 비전 카메라와  정밀 진동 바이브레이터를 통합#한 고정밀 델타 병렬 로봇을 탑재하고 있습니다. 이를 통해 #초소형 부품의 고정밀 트레이 배치, 신속한 검사 및 분류, 그리고 정밀 부착 작업을 자동으로 수행#합니다. 이 워크스테이션은 #다양한 첨단 산업 분야에서 핵심 공정 장비#로 널리 활용됩니다.'
        ],
      images: [`card`],
      link: {
        label: "자동화 솔루션 자세히 보기",
        path: "/automation-solution",
        posId: false
      },
      featureType:"card",
      features: [
        {
          icon: 'icon_chart_gear.png',
          title: '고속·고정밀 작업 성능',
          texts: [
            "병렬 구조 기반의 초고속 동작 성능",
            "가벼운 설계로 반응 속도 향상",
            "고속 생산 라인에 최적화된 퍼포먼스",
            "비전 연동으로 정밀 작업 자동화 강화",
          ]
        },
        {
          icon: 'icon_install.png',
          title: '컴팩트한 설치 구조',
          texts: [
            "상단 고정형으로 공간 절약",
            "경량 구조로 설비 부담 감소",
            "기존 설비 라인에 손쉬운 통합",
            "협소한 작업 환경에서도 최적의 효율",
          ]
        },
        {
          icon: 'icon_drop_gear.png',
          title: '위생 환경 대응력',
          texts: [
            "위생 환경에 최적화된 밀폐형 구조",
            "외부 노출이 적어 먼지·오염에 강함",
            "식품·제약 등 고위생 산업군에 이상적",
            "클린룸 인증(IP65 이상) 적용 가능",
          ]
        },
        {
          icon: 'icon_robot_arm.png',
          title: '유연한 커스터마이징',
          texts: [
            "다양한 작업 환경에  최적 설계 가능",
            "비전 , 회전축 등 옵션으로 기능 확장",
            "멀티 제품 처리에 유리한 다용도 로봇",
            "지능형 자동화 작업도 수행 가능",
          ]
        },
      ],
      applications: [
        {
          video: 'deltarobot-application(1).mp4',
          poster: 'deltarobot-application(1).jpg',
          title: '미용 패치',
        },
        {
          video: 'deltarobot-application(2).mp4',
          poster: 'deltarobot-application(2).jpg',
          title: '초코파이 자동 적재 솔루션',
        },
      ],
    },
    
    // amr
    "amr": {
      theme: 'teal-blue',
      title: 'AI 기반 자율주행 로봇, AMR로 스마트하게',
      description:
        ["#AMR 시리즈 모바일 매니퓰레이터는 '손, 눈, 발, 두뇌'가 유기적으로 협응하는 자율주행 이동 로봇 시스템으로, 인간의 작업 방식을 모사하며 생산 현장의 다양한 요구에 유연하게 대응합니다.#",
          '이러한 시스템은 단순 반복 작업부터 고정밀 조작까지 다양한 작업 환경에 적용할 수 있습니다. #자재의 흐름 관리, CNC 머신의 자동 적재 및 하역, 육안 검사(비전 검사), 장비 상태 감지 및 제어#와 같은 고도화된 작업도 무인으로 수행할 수 있습니다. 또한 다양한 작업장을 오가며 사람과 협업하거나 복잡한 공정을 하나의 로봇이 연속적으로 수행할 수 있기 때문에, #생산 효율 향상, 품질 안정화, 유연 생산 체계의 구현이 가능#합니다.',
          'AMR 시리즈는 기존 자동화 설비의 한계를 극복하고, #스마트 팩토리와 하이믹스(HI-MIX) 생산 환경에 최적화된 솔루션#으로 자리 잡고 있습니다.'
        ],
      images: [`card`],
      link: {
        label: "자동화 솔루션 자세히 보기",
        path: "/automation-solution",
        posId: false
      },
      featureType:"card",
      features: [
        {
          icon: 'icon_robot_iot.png',
          title: '유연한 자율 주행',
          texts: [
            "SLAM, LiDAR 기반의 정밀 맵핑",
            "별도 마커/라인 없는 유연한 주행",
            "장애물 회피 및 실시간 경로 변경",
            "복잡한 환경에서도 안정적 운용",
          ]
        },
        {
          icon: 'icon_robot_arm.png',
          title: '다기능 작업 수행',
          texts: [
            "자재 운송, 적재/하역, 비전 검사 가능",
            "로봇팔 + AMR + 센서 통합 시스템",
            "다양한 툴체인지 및 그리퍼 적용 가능",
            "현장 맞춤형 커스터마이징 지원",
          ]
        },
        {
          icon: 'icon_chart_good.png',
          title: '생산성 향상 & 비용 절감',
          texts: [
            "24시간 무인 자동 작업 가능",
            "반복 작업 자동화로 인건비 절감",
            "작업 정확도 향상으로 품질 안정화",
            "빠른 투자 회수(ROI) 실현",
          ]
        },
        {
          icon: 'icon_robot_hub.png',
          title: '스마트확장성과 협업',
          texts: [
            "Fleet 시스템으로 AMR 다중 제어",
            "실시간 데이터 수집 및 공정 최적화",
            "MES/ERP 등과의 연동 확장 가능",
            "충돌 감지 기반의 안전한 협업 가능",
          ]
        },
      ],
      applications: [
        {
          video: 'amr-application(1).mp4',
          poster: 'amr-application(1).jpg',
          title: '복합 로봇 3D 프린팅 스마트 팩토리 자동화',
        },
        {
          video: 'amr-application(2).mp4',
          poster: 'amr-application(2).jpg',
          title: '스마트하고 적응 가능한 생산을 위한 솔루션',
        },
      ],
    }, // amr
     

    // =========== 비전 시스템 =========== 
    // 머신비전 카메라
    "machine-vision": {
      theme: 'default',
      title: '지능형 머신 비전',
      description:
        [
          '다양한 산업 환경에서 발생하는 시각 처리 문제를 해결하기 위해 설계된 AI 기반 머신 비전 시스템입니다.', 
          '딥러닝과 2D/3D 비전 알고리즘을 기반으로 다양한 작업을 정밀하고 안정적으로 수행하며, 사용자의 편의성과 확장성을 모두 고려한 시스템입니다.'
        ],
      images: [`card`],
      link: {
        label: "머신비전 솔루션 자세히 보기",
        path: "/vision-solution",
        posId: "machine"
      },
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
        ['열화상카메라는 적외선 기반의 비접촉식 온도 감지 기술을 활용하여 사람이나 설비의 온도를 실시간으로 측정하고 모니터링할 수 있습니다. 특히 공항, 병원, 공장 등 다중 이용 시설에서 체온 이상 감지를 통해 감염병 확산을 사전에 차단하는 데 효과적으로 활용되고 있습니다. 최근에는 AI 비전 기술과 결합되어 자동으로 고온 이상 징후를 탐지하고, 위험 요인을 신속하게 경고함으로써 안전성과 효율성을 동시에 향상시키고 있습니다.', '설비 과열, 전기 누전, 기계 고장 등 산업 현장에서의 온도 기반 이상 징후도 사전에 감지하여 사고를 예방할 수 있습니다. 이러한 비접촉식 열 감지 기술은 예방 진단은 물론, 스마트 안전 관리 체계 구축에도 기여하며 다양한 분야에 폭넓게 활용되고 있습니다.'],
      images: [`card`],
      extraText: '설비 과열, 누전, 체온 이상 등 온도 기반 이상 탐지 비접촉식 열 감지로 예방 진단 및 안전 모니터링 실현',
      link: {
        label: "열화상 카메라 솔루션 자세히 보기",
        path: "/vision-solution#thermal",
        posId: "thermal"
      },
      applications: [
        {
          image: 'thermal-camera-application(1).jpg',
          title: '체온 이상 감지로 감염 예방',
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
    
    // 초분광 카메라
    "spectral-camera": {
      theme: 'default',
      title: '초분광 영상 기술',
      description:
        [
          '초분광카메라는 성분 분석, 이물질 검출, 품질 분류, 정량 분석 등을 비접촉 방식으로 수행하며, AI 기반 스펙트럼 분석을 통해 고정밀 자동 판단이 가능합니다.', 
        ],
      images: [`default`, `card`],
      link: {
        label: "초분광 카메라 솔루션 자세히 보기",
        path: "/vision-solution",
        posId: "spectral"
      },
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
      images: ['card'],
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
      images: ['card'],
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


    // =========== 로지스틱 =========== 
    // 아이로봇
    "i-robot": {
      theme: 'indigo-navy',
      title: '미래 물류의 기준, 자율지능형 물류 혁신',
      desc: [
        '#자율 주행, 적재·하역, 감압 케이지# 처리까지~ 인간의 반복 작업을 대체하는 #디지털 블루칼라 로봇 솔루션#',
        '#머신 비전, 레이더 내비게이션, 머신러닝# 기반의 지능형 제어 기술을 결합하여 물류, 제조, 식음료, 제약 등 다양한 산업 현장에서 #자율 주행·적재·하역·팔레타이징#을 완벽히 수행합니다. 사람 대신 복잡한 작업을 정밀하고 안전하게 수행하며, 데이터 기반의 학습을 통해 스스로 발전하는 “사용할수록 더 스마트한 로봇”을 구현합니다.',
        '#i-Robot#은 단순한 자동화를 넘어, #인간과 협력하는 차세대 산업 파트너#로서 #생산성과 효율성을 극대화#합니다.'
      ],
      cnt01: {
        title: '물류 로봇 시스템 구성 요소',
        desc: '스마트 물류 환경을 완성하는 핵심 기술이 하나로 연결됩니다.',
        img: '/images/business/i-robot(1).jpg'
      },
      slideData: {
        title: 'I-ROBOT 도입의 이점',
        desc: '첨단 AI와 로봇이 24시간 정확하게 물류를 처리하여, 기업의 생산성과 지속 가능한 성장을 동시에 실현합니다.',
        slides: 
        [
          '/images/business/i-robot-slide(1).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/i-robot-slide(2).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/i-robot-slide(3).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/i-robot-slide(4).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/i-robot-slide(5).svg', 
          '/images/business/logistics-slide-arrow.svg', 
        ],
      },
      app: {
        col: 'two',
        type: 'video',
        list: [
          {
            video: 'i-robot-application(1).mp4',
            poster: 'i-robot-application(1).jpg',
            title: '제품을 상자에 채워 팔레트 위에 정해진 순서대로 적재',
          },
          {
            video: 'i-robot-application(2).mp4',
            poster: 'i-robot-application(2).jpg',
            title: '로봇이 컨테이너의 물류를 하차하고 팔레트위에 순서대로 적재',
          },
        ],
        // link: {
        //   label: "i-Robot 솔루션 자세히 보기",
        //   path: "/eco-ai-solution",
        //   posId: "cleaning"
        // },
      } 
    },
    
    // 자동분류시스템
    "automated-sorting-system": {
      theme: 'indigo-navy',
      title: '효율성과 정확도를 극대화한 차세대 스마트 자동물류 시스템',
      desc: [
        '#물류 로봇# 시스템의 핵심 인 #자동화된 로봇 시스템의 가동률, 로봇 운영을 위해# 구현된 프로세스, 그리고 #AI 기반 제어 기술# 등 다양한 요인에 따라 좌우됩니다.',
        '자동 분류 및 검색 시스템은 유통 물류 프로세스를 획기적으로 간소화하는 핵심 솔루션입니다. 기업은 운영 #효율성#을 높이고, 처리량을 증대시키며, #오류를 최소화#하고, #관리의 정확성#을 최고 수준으로 향상할 수 있습니다.',
        '현대 유통 물류 시장에서 성공의 필수 요소는 #속도, 정확성, 유연성#입니다.  물류 관리자가 직면한 이 모든 중요한 과제를 해결할 수 있도록 지원합니다. 본 시스템은 지능적인 자재 흐름 #최적화#, 신속하고 정확한 주문 이행 간소화, 그리고 투명한 관리 #개선#을 통해 기업의 경쟁력을 높입니다.'
      ],
      video: {
        src:'/videos/page/automated-sorting-system.mp4',
        poster: '/images/video_poster/automated-sorting-system.jpg'
      },
      cnt01: {
        desc: '당사의 물류 자동화 장비 시리즈는 복잡한 물류 환경에서도 #빠른 처리·정확한 분류·지능형 제어#를 실현합니다.',
        img: '/images/business/automated-sorting-system(1).jpg'
      },
      slideData: {
        title: '기능 및 이점',
        slides: [
          '/images/business/sorting-slide(1).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/sorting-slide(2).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/sorting-slide(3).svg', 
          '/images/business/logistics-slide-arrow.svg', 
          '/images/business/sorting-slide(4).svg', 
          '/images/business/logistics-slide-arrow.svg', 
        ]
      },
      app: {
        col: 'two',
        type: 'video',
        list: [
          {
            video: 'sorting-application(1).mp4',
            poster: 'sorting-application(1).jpg',
            title: 'DWS 지능형  자동 분류 시스템',
          },
          {
            video: 'sorting-application(2).mp4',
            poster: 'sorting-application(2).jpg',
            title: '휠소타 분류',
          },
        ],
        // link: {
        //   label: "자동물류 시스템 솔루션 자세히 보기",
        //   path: "/eco-ai-solution",
        //   posId: "cleaning"
        // },
      } 
    },

    // =========== 에코 프렌들리 =========== 
    // 리싸이클링
    "recycling-robot": {
      theme: 'default',
      title: '자원순환형 재활용 로봇 시스템',
      description: [
        '#자원순환형 재활용 로봇 시스템은 로봇 자동화 기술과 인공지능(AI)을 융합하여, 폐기물의 자동 선별, 처리, 그리고 재자원화 과정을 지능적으로 수행하는 차세대 자원 순환 솔루션입니다.#',
        '이 시스템은 기존의 수작업에 의존하던 비효율적인 폐기물 분류 방식을 혁신적으로 대체함으로써, #정확도는 물론 속도와 운영 효율성까지 비약적으로 향상시키는 것이 핵심 장점#입니다. AI가 축적된 데이터를 분석하여 폐기물의 유입 패턴, 재질 비율, 처리 효율 등을 지속적으로 학습하고 최적화함으로써, 운영자가 보다 정밀하고 전략적인 자원순환 관리를 수행할 수 있습니다.',
        '자원순환형 재활용 로봇 시스템은 환경 보호를 넘어, #산업 전반의 지속가능성, 효율성, 그리고 첨단화를 동시에 추구하는 미래형 자원관리 솔루션#이라 할 수 있습니다.'
      ],
      images: ['card','spacing-l', 'spacing-l'],
      link: {
        label: "재활용 로봇 솔루션 자세히 보기",
        path: "/eco-ai-solution",
        posId: "recycling"
      },
      applications: [
        {
          image: 'recycling-robot-application(1).jpg',
          title: '플라스틱',
        },
        {
          image: 'recycling-robot-application(2).jpg',
          title: '종이',
        },
        {
          image: 'recycling-robot-application(3).jpg',
          title: '철/알루미늄',
        },
      ],
    },
    
    // 클리닝 로봇
    "cleaning-robot": {
      theme: 'default',
      title: '지속가능한 수면 환경을 위한 스마트 워터 로보틱스 솔루션',
      description: [
        '도심 하천, 저수지, 인공 수로, 공원 수변 공간 등 다양한 수상 환경에서의 수질 개선과 생태계 보호를 위한 차세대 수면 관리 로봇 솔루션을 제공합니다. 수면 위의 부유 쓰레기 수거와 수중 수초 제거를 위한 각기 다른 기능의 첨단 로봇들은, 작업 효율성과 운용 안전성을 극대화하도록 설계되어 있습니다.','인력 접근이 어려운 구역에서도 정밀한 작업이 가능하며, 24시간 무인 운영, 넓은 작업 반경, 자동화된 데이터 수집 및 모니터링 기능을 통해 환경 관리의 새로운 기준을 제시합니다. 각 제품의 특화된 임무 수행 능력으로, 지속 가능한 수자원 관리, 생태계 복원, 그리고 유지보수 비용 절감이라는 핵심 가치를 실현합니다'
      ],
      images: ['card', 'spacing-l'],
      link: {
        label: "수면 정화 로봇 솔루션 자세히 보기",
        path: "/eco-ai-solution",
        posId: "cleaning"
      },
      applications: [
        {
          video: 'solution-ecoai(1).mp4',
          poster: 'solution-ecoai(1).jpg',
          title: '잘라낸 수초를 모아두는 모습',
        },
        {
          video: 'solution-ecoai(4).mp4',
          poster: 'solution-ecoai(4).jpg',
          title: '복잡하고 변화하는 수로 정밀 청소',
        },
      ],
    },


    // =========== 메디컬 =========== 
    // pcr
    "pcr": {
      theme: 'default',
      title: 'Fast, Accurate, Compact.',
      description: [
        '빠르고 정밀한 차세대 Real-time PCR 플랫폼',
        '최신 자동화 분자진단 시스템은,  핵산 추출 → RT-PCR 검사 → 결과 분석까지 모든 단계를 자동화하여 정확하고 빠른 유전자 검출을 실현합니다.'
      ],
      images: ['default', 'card', 'default'],
      applications: [
        {
          image: 'pcr-application(1).jpg',
          title: '질병 진단',
        },
        {
          image: 'pcr-application(2).jpg',
          title: '중앙 유전자 분석',
        },
        {
          image: 'pcr-application(3).jpg',
          title: '식품 안전 및 환경 위생',
        },
      ],
    },
    // uv
    "uv": {
      theme: 'default',
      title: '눈에 보이지 않는 공기까지 살균합니다.',
      description: [
        '천장에 설치되는 광촉매 클린팬은 UV 365nm 자외선과 TiO₂ 광촉매 기술을 결합해 공기 중 세균, 곰팡이, 유해가스를 실시간으로 살균 및 탈취합니다.','별도 환기 없이도 CFU 수치를 99.9%까지 감소시켜, 알레르기·감염 위험을 줄이고 쾌적한 실내 공기 환경을 유지할 수 있는 병원, 요양시설, 교육기관, 공공기관 등 다중 이용시설에 최적화된 공기살균 솔루션입니다.'
      ],
      images: ['default', 'spacing-l', 'spacing-l', 'spacing-l'],
      extraText: '광촉매 클린팬은 밀폐된 실내에서도 상쾌한 공기를 유지할 수 있도록 도와줍니다. 음식이나 반려동물에서 발생하는 냄새는 물론, 공기 중 유해 세균과 곰팡이까지 강력하게 제거합니다. 외부 환기 없이도 언제나 깨끗하고 쾌적한 공간을 경험하세요',
      applications: [
        {
          image: 'uv-application(1).jpg',
          title: '산업 공간 (창고/공장)',
        },
        {
          image: 'uv-application(2).jpg',
          title: '스포츠 시설 (헬스장)',
        },
        {
          image: 'uv-application(3).jpg',
          title: '교육/놀이시설 (유치원) ',
        },
      ],
    },

    // =========== IT ==========
    // GPU 서버
    "gpu-server": {
      theme: 'default',
      title: 'AI·HPC를 위한 고성능 GPU',
      description: [
        'AI 인프라 통합 구축, 고성능 연구·분석 환경, 또는 기업용 AI 서비스 플랫폼의 기반으로 매우 적합한 GPU 서버입니다.',
        '고성능 GPU와 멀티코어 CPU를 바탕으로 대규모 연산 및 딥러닝 학습을 빠르게 처리할 수 있으며, 고속 네트워킹과 확장형 I/O, 유연한 리소스 관리로 안정적인 운영이 가능합니다. AI 추론·분석부터 스토리지 모니터링까지 폭넓게 대응할 수 있어, 확장성과 통합성을 갖춘 차세대 인프라를 구현할 수 있습니다.'
      ],
      images: ['card'],
      featureType:"circle",
      features: [
        {
          icon: 'icon_computer_graphics',
          text: '고성능 GPU 지원'
        },
        {
          icon: 'icon_cpu',
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
          image: 'gpu-server-application(2).jpg',
          title: '의료 영상 진단 보조 시스템',
        },
        {
          image: 'gpu-server-application(3).jpg',
          title: '제조 이상탐지 및 품질 분석',
        },
      ],
    },

    // 워크스테이션
    "workstations": {
      theme: 'default',
      title: '고성능 워크스테이션 & 서버',
      description: ['AI, HPC, CAD/CAE, 머신비전, 시뮬레이션을 위한 최적화된 성능을 제공하는 고성능 워크스테이션 및 서버. 다양한 폼팩터와 최신 프로세서, 고성능 GPU, 고속 인터페이스, 원격 관리 기능을 통해 뛰어난 처리 능력과 효율성을 구현합니다.'],
      images: ['card'],
      featureType:"circle",
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
          title: 'AI 및 고성능 연산',
        },
        {
          image: 'workstations-application(2).jpg',
          title: '산업용 영상 분석 및 자동화',
        },
        {
          image: 'workstations-application(3).jpg',
          title: '설계 및 시뮬레이션',
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
      images: ['card'],
      featureType:"circle",
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

    // 밀리터리
    "military": {
      theme: 'default',
      title: '고신뢰성 미션 컴퓨팅 서버',
      description: [
        '혹독한 환경에서도 흔들림 없이 작동하는 서버, 그것이 바로 밀리터리 서버입니다. ','고성능 프로세싱 파워는 물론, 열과 충격, 진동에 강한 산업용 등급의 내구성, 군사 수준의 보안 아키텍처까지 갖춘 이 서버는 군 통신망, 전장 상황실, 감시 시스템, 산업 자동화 설비 등 고신뢰 환경에서 최적의 성능을 발휘합니다.','전장처럼 예측 불가능한 상황에서도 데이터를 지키고, 시스템을 유지하는 것이 곧 경쟁력입니다. 무결점 작동을 위한 선택, 밀리터리 서버로 미래의 임무를 준비하십시오.'
      ],
      images: ['card'],
      featureType:"circle",
      features: [
        {
          icon: 'icon_cpu',
          text: '고성능 연산 처리'
        },
        {
          icon: 'icon_data_center',
          text: '실시간 데이터 수집'
        },
        {
          icon: 'icon_infinity',
          text: '24/7 연속 운용'
        },
        {
          icon: 'icon_certificate',
          text: '군용/항공 인증'
        },
        {
          icon: 'icon_shield',
          text: 'Rugged 설계'
        },
        {
          icon: 'icon_computer_security',
          text: '보안/신뢰성 강화'
        },
      ],
      extraText: "고신뢰성 미션 컴퓨팅 서버 솔루션은 차세대 항공전자 시스템과 방위산업 분야에서 요구되는 극한의 작전 환경에서도 안정적이고 지속 가능한 고성능 연산 및 실시간 데이터 처리 기능을 제공하는 임무 중심형(Server-class) 컴퓨팅 플랫폼입니다.",
      applications: [
        {
          image: 'military-application(1).jpg',
          title: '무인 항공기(UAV) 탑재',
        },
        {
          image: 'military-application(2).jpg',
          title: '전술 지상 차량(Tactical Ground Vehicle)',
        },
        {
          image: 'military-application(3).jpg',
          title: '항공기 탑재 임무 컴퓨터',
        },
      ],
    },

    // 비히클
    "vehicle": {
      theme: 'default',
      title: '차량의 두뇌를 진화시키다.',
      description: [
        '자율주행과 차량통신(V2X)을 위한 고신뢰 비히클 서버로, 미래 모빌리티 환경에 최적화된 솔루션을 제공합니다. 고성능 프로세싱, 뛰어난 안정성, 유연한 확장성을 바탕으로 한 차원 높은 인텔리전스를 구현하며, 스마트 모빌리티의 중심에서 핵심 역할을 수행합니다.',
        '‘비히클(Vehicle)’은 단순히 자동차만을 의미하지 않습니다. 사람이나 화물을 이동시키기 위해 설계된 모든 이동 수단(자전거, 기차, 비행기, 선박 등)을 포괄하며, 각기 다른 기능과 목적을 가지고 다양한 산업 및 사회적 맥락에서 사용됩니다.',
        '오늘날 비히클은 단순한 교통수단을 넘어 경제, 물류, 관광, 환경 등 여러 분야에서 필수적인 인프라로 자리 잡고 있으며, 특히 전기차(EV) 및 친환경 이동 수단의 부상과 함께 더욱 주목받고 있습니다. S1901 EvoTRAC는 이러한 흐름 속에서, 미래 지향적이고 지속 가능한 모빌리티 생태계를 위한 기술적 기반을 제공합니다.'
      ],
      images: ['card'],
      featureType:"circle",
      features: [
        {
          icon: 'icon_cpu',
          text: '고성능 CPU'
        },
        {
          icon: 'icon_data_center',
          text: '모듈형 구조 유연한 구성'
        },
        {
          icon: 'icon_network_transfer',
          text: '통신 호환성'
        },
        {
          icon: 'icon_car_autonomous',
          text: '미래 확장성 대응'
        },
        {
          icon: 'icon_symbol_ice',
          text: '산업환경 대응'
        },
        {
          icon: 'icon_computer_security',
          text: '보안 인증'
        },
      ],
      applications: [
        {
          image: 'vehicle-application(1).jpg',
          title: '자율주행차량 제어 서버',
        },
        {
          image: 'vehicle-application(2).jpg',
          title: 'V2X 기반 도로 인프라 연동 시스템',
        },
        {
          image: 'vehicle-application(3).jpg',
          title: '스마트 물류 및 차량 모니터링 시스템',
        },
      ],
    },

    // 엣지 AI
    "edge-ai": {
      theme: 'default',
      title: '실시간 AI로 움직이는 산업',
      description: [
        'NVIDIA® Jetson™ 기반의 고성능 엣지 서버로 스마트 팩토리부터 리테일까지, 실시간 추론과 안정성을 동시에 제공합니다. 저전력 팬리스 설계와 유연한 I/O 확장으로, 다양한 산업 환경에 맞춤형 솔루션을 제공합니다.'
      ],
      images: ['card', 'default', 'default', 'default'],
      applications: [
        {
          image: 'edge-ai-application(1).jpg',
          title: 'AI 비전',
        },
        {
          image: 'edge-ai-application(2).jpg',
          title: '스마트 제조/물류 자동화/엣지 제어',
        },
        {
          image: 'edge-ai-application(3).jpg',
          title: '스마트 시티',
        },
      ],
    },
  };
  
  export default businessIntroData;
  