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
      title: '초정밀 AI 눈으로 구현하는 완벽한 공정',
      desc: [
        '#딥러닝 기반의 2D/3D 알고리즘#을 통해 사물의 깊이와 형태, 질감을 입체적으로 정밀하게 분석',
        '사람이 육안으로 확인하기 어려운 미세한 결함이나 비정형 오류까지 실시간으로 식별하여 공정의 품질 안정성을 극대화',
        '#로봇 및 컨베이어 시스템과 즉각적으로 연동#되어 최적화된 통합 솔루션'
      ],
      cnt01: {
        title: '머신비전 시스템 구성요소',
        img: `/images/business/vision/machine-vision(1).jpg`
      },
      cnt02 : {
        title: '머신비전 시스템 흐름도',
        stepFlowData: [
          {
            iconName: "icon_lightbulb_solid",
            title: "조명",
            text: "제품 인식 정확도 향상을 위한 광원",
          },
          {
            iconName: "icon_camera_solid",
            title: "카메라 + 렌즈",
            text: "제품 이미지 촬영 및 초점 조정",
          },
          {
            iconName: "icon_microchip_solid",
            title: "영상처리기",
            text: "이미지 분석 및 특징 인식",
          },
          {
            iconName: "icon_brain_solid",
            title: "판단 결과",
            text: "OK/NG 판정 또는 정보 추출",
          },
          {
            iconName: "icon_robot_face",
            title: "로봇 / PLC 제어",
            text: "로봇이 피킹, 리젝트 등 수행",
          },
        ],
        img: `/images/business/vision/machine-vision(2).jpg`
      },
      cnt03: {
        title: '완벽한 형상 판독',
        img: `/images/business/vision/machine-vision(3).jpg`
      },
      cnt04: {
        title: '머신 비전 시스템의 응용',
        img: `/images/business/vision/machine-vision(4).jpg`
      },
      slideData: [
        {
          img: `/images/business/vision/machine-vision-slide(1).jpg`,
          title: "외곽선 (아웃라인)",
          text: "제품의 형태 및 테두리 인식 기술",
        },
        {
          img: `/images/business/vision/machine-vision-slide(2).jpg`,
          title: "유무 검사",
          text: "부품의 누락이나 요소 존재 여부 판별",
        },
        {
          img: `/images/business/vision/machine-vision-slide(3).jpg`,
          title: "그레이스케일 면적",
          text: "명암 차를 이용한 결함 면적 분석",
        },
        {
          img: `/images/business/vision/machine-vision-slide(4).jpg`,
          title: "컬러 면적",
          text: "특정 색상의 분포 및 면적 측정",
        },
        {
          img: `/images/business/vision/machine-vision-slide(5).jpg`,
          title: "문자 인식 (OCR)",
          text: "각인된 문자 및 숫자의 자동 판독",
        },
        {
          img: `/images/business/vision/machine-vision-slide(6).jpg`,
          title: "피치 (간격)",
          text: "요소 간의 일정 거리/간격 측정",
        },
      ],
      app: {
        col: 'two',
        media: 'video',
        type: 'bullet',
        list: [
          {
            video: 'machine-app(1).mp4',
            poster: 'machine-app(1).jpg',
            title: '이종혼입방지시스템',
            texts: [
              '부품 표면에 각인된 레이저 마킹 ID를 실시간으로 스캔하여 고유 정보를 식별',
              '외형이 같은 부품의 오삽입을 실시간으로 판별해 제품 혼입을 완벽히 방지',
              '원형 제품의 식별과 회전 각도 측정으로 더욱 정밀한 공정 제어를 지원',
            ]
          },
          {
            video: 'machine-app(2).mp4',
            poster: 'machine-app(2).jpg',
            title: '외관표면검사시스템',
            texts: [
              '프레스 압력을 받는 툴의 파손 유무를 실시간 판정하여 공정 사고를 미연에 방지.',
              '소모된 툴의 교체 주기를 자동으로 파악하고 통보하여 최적의 작업 조건을 유지',
              '단일 시스템으로 최대 4대의 설비를 동시에 관리할 수 있어 운영 효율을 극대화',
            ]
          },
          {
            video: 'machine-app(3).mp4',
            poster: 'machine-app(3).jpg',
            title: '가공 검사시스템',
            texts: [
              '작업 환경에 맞춰 100개소 이상의 검사 포인트를 자유롭게 구성하고 실시간으로 편집',
              '직육면체 알루미늄 블록의 홀, 탭, 단차 등 표면 가공 상태를 빈틈없이 정밀하게 검사',
              '딥러닝 기반 검사로 홀 내부 이물질을 판별하고 표면 마킹 및 문자까지 정확히 구분',
            ]
          },
          {
            video: 'machine-app(4).mp4',
            poster: 'machine-app(4).jpg',
            title: '다관절 로봇 부착 시스템',
            texts: [
              '다관절 로봇에 비전을 탑재해 체결 상태, 컬러, 각도 등 복합적인 항목을 정밀하게 측정',
              '단순 반복 검사 포인트가 많은 공정에 유용하며, 로봇의 유연한 움직임으로 검사 효율을 높입',
              '0.5초당 1개소씩 검사하는 압도적인 속도로 다량의 검사 포인트를 신속하고 정밀하게 완료',
            ]
          }
        ]
      } 
    },

    // 열화상 카메라
    "thermal-camera": {
      theme: 'crimson-red',
      title: '보이지 않는 온도로 미래를 진단하는 스마트 열화상 시스템',
      desc: [
        '#실시간 적외선# 열 에너지 감지로 #온도 분포와 이상 징후#를 즉각 파악하여 산업 현장의 #안전성#과 #생산성#을 동시에 혁신합니다.',
        '#MWIR·SWIR# 다파장 기술과 #AI 분석#을 결합하여 #고온 공정 모니터링#부터 #미세 결함 검출# 및 #가스 누출#까지 정밀하게 응용됩니다.',
        '자동화 시스템과 연동된 #열화상 데이터#는 제조, 에너지, 플랜트 등 다양한 분야에서 #예측 유지보수#와 #신뢰성 높은 의사결정#을 지원합니다.'
      ],
      cnt01: {
        title: '열화상 비전 시스템 구성요소',
        img: `/images/business/vision/thermal(1).jpg`
      },
      cnt02 : {
        title: '열화상 비전 시스템 흐름도',
        stepFlowData: [
          {
            iconName: "icon_camera_solid",
            title: "카메라 + 렌즈",
            text: "제품 이미지 촬영 및 초점 조정",
          },
          {
            iconName: "icon_microchip_solid",
            title: "영상처리기",
            text: "이미지 분석 및 특징 인식",
          },
          {
            iconName: "icon_brain_solid",
            title: "판단 결과",
            text: "OK/NG 판정 또는 정보 추출",
          },
          {
            iconName: "icon_robot_face",
            title: "로봇 / PLC 제어",
            text: "로봇이 피킹, 리젝트 등 수행",
          },
        ],
        img: `/images/business/vision/thermal(2).png`
      },
      cnt03: {
        title: '산업 현장의 안전과 효율을 극대화 하는 3대 핵심 비전 기술',
        img: `/images/business/vision/thermal(3).jpg`
      },
      cnt04: {
        title: '적외선 감지를 통한 가스 감지기술',
        img: `/images/business/vision/thermal(4).jpg`
      },
      slideData: [
        {
          img: `/images/business/vision/thermal-slide(1).jpg`,
          title: "제철소 소결기 모니터링",
          text: "소결공정은 1000~1300도 이며, 고온열화상 카메라는 재료의 표면 온도를 모니터링 할수 있고, 소격의 연소과정을 모니터링 하여다양한 품질을 확인할수 있다.",
        },
        {
          img: `/images/business/vision/thermal-slide(2).jpg`,
          title: "코크스화로 모니터링",
          text: "코크스를 만드는 화로(코크스화로)의 벽 온도는 보통 600~800℃ 정도입니다. 특수 열화상 카메라를 사용하면 화로 안의 배관과 벽 온도를 실시간으로 볼 수 있어, 코크스가 얼마나 잘 만들어지고 있는지, 열이 잘 전달되고 있는지를 알 수 있습니다. 이를 통해 화로가 제대로 작동하고 있는지 쉽게 확인할 수 있습니다.",
        },
        {
          img: `/images/business/vision/thermal-slide(3).jpg`,
          title: "듀얼 라이트 자동 검사",
          text: "주 변압기 회로 본체, 전압변압기, 부싱, 와이어클램프 등 핵심 부품에 대해 고해상도 열화상 카메라로 자동검사. 실시간으로 모니터링을 하며 구성요소의 온도를 감시하여 위험발생시 알람을 발생.",
        },
        {
          img: `/images/business/vision/thermal-slide(4).jpg`,
          title: "증기 파이프라인 및 용관로 단열츨 상태 관찰",
          text: "석유화학 생산공정에서는 많은 수의 파이프라인과 열장비를 단열해야함. 단열효과는 운영비용과 직접적 연관이 있고, 사용기간이 길수록 노후화 되고 단열효과는 감소됨.",
        },
        {
          img: `/images/business/vision/thermal-slide(5).jpg`,
          title: "엔진 작동 온도 및 탱크 내 유체 수준",
          text: "열화상 카메라로 관찰하면 단열츨의 상태와 효과를 정확하게 파악할수 있어 적절한 시기에 수리작업이 용이함. 또한 저장탱크의 액체 수위를 관찰하는 돗에도 사용되어 생산작업에 중요한 시점을 제공",
        },
        {
          img: `/images/business/vision/thermal-slide(6).jpg`,
          title: "가축 체온 측정 및 전염병 예방",
          text: "가축의 의 체표면 온도 분포를 활용하여 질병을 미리 확인 할수 있는 지표를 만들수 있다. 이상행동식별과 발달상태를 평가, 염증을 감지하고, 돼지열병, 광견병, 청색귀병,돼지 패스트, 구제역등 발영증상을 동반한 주요 전염병를 미리 감지를 할수 있다. 또한, 젖소에게 흔한 질병인 유방염을 유방의 온도를 확인하여 조기에 진단할수 있다",
        },
      ],
      app: {
        col: 'three',
        media: 'image',
        type: 'title',
        list: [
          {
            image: 'vision/thermal-app(1).jpg',
            title: "전기 | 새로운 에너지",
          },
          {
            image: 'vision/thermal-app(2).jpg',
            title: "광석 | 야금학 | 가마",
          },
          {
            image: 'vision/thermal-app(3).jpg',
            title: "섬유 | 석유화학 | 환경 보호",
          },
          {
            image: 'vision/thermal-app(4).jpg',
            title: "레이저 | 반도체",
          },
          {
            image: 'vision/thermal-app(5).jpg',
            title: "곡물과 기름 | 의학 | 번식",
          },
          {
            image: 'vision/thermal-app(6).jpg',
            title: "철도 교통 | 자동차",
          }
        ]
      } 
    },

    // 초분광 카메라
    "spectral-camera": {
      theme: 'vivid-violet',
      title: '눈에 보이지 않는 데이터까지 완벽하게, AI 초분광 토탈 시스템',
      desc: [
        '#초분광 카메라#로 빛의 파장을 분석해 육안으로 힘든 #성분 판별#과 #미세 이물질#을 완벽하게 검출합니다.',
        '#AI 딥러닝# 기반 알고리즘이 방대한 데이터를 분석하여 제품의 #품질 등급#을 #실시간으로 분류#하여 최적화합니다.',
        '#데이터 기반#의 객관적 판독으로 #수동 검사 오차#를 줄이고 #품질 관리 표준화#와 #공정 효율#을 획기적으로 높입니다.'
      ],
      cnt01: {
        title: '초분광 비전 시스템 구성요소',
        img: `/images/business/vision/spectral(1).jpg`
      },
      cnt02 : {
        title: '초분광 비전 시스템 흐름도',
        stepFlowData: [
          {
            iconName: "icon_lightbulb_solid",
            title: "조명",
            text: "제품 인식 정확도 향상을 위한 광원",
          },
          {
            iconName: "icon_camera_solid",
            title: "카메라 + 렌즈",
            text: "제품 이미지 촬영 및 초점 조정",
          },
          {
            iconName: "icon_microchip_solid",
            title: "영상처리기",
            text: "이미지 분석 및 특징 인식",
          },
          {
            iconName: "icon_brain_solid",
            title: "판단 결과",
            text: "OK/NG 판정 또는 정보 추출",
          },
          {
            iconName: "icon_robot_face",
            title: "로봇 / PLC 제어",
            text: "로봇이 피킹, 리젝트 등 수행",
          },
        ],
        img: `/images/business/vision/spectral(2).jpg`
      },
      cnt03: {
        title: '성분의 투명한 분석',
        img: `/images/business/vision/spectral(3).jpg`
      },
      cnt04: {
        title: '초분광 이미징 시스템',
        img: `/images/business/vision/spectral(4).jpg`
      },
      slideData: [
        {
          img: `/images/business/vision/spectral-slide(1).jpg`,
          title: "스마트 농업",
          text: "감자와 찰흙의 다른 스펙트럼을 이용하여 분리하는 자동화공정 적용",
        },
        {
          img: `/images/business/vision/spectral-slide(2).jpg`,
          title: "제약",
          text: "포장 캡슐안에 빈 공간이 있거나 , 결함 혹은 다른약이 포함되었는지 여부 확인가능!",
        },
        {
          img: `/images/business/vision/spectral-slide(3).jpg`,
          title: "건축 인프라",
          text: "제지 공정에서 종이의 수분함량 확인 및 모니터링!",
        },
        {
          img: `/images/business/vision/spectral-slide(4).jpg`,
          title: "식품",
          text: "아몬드와 아몬드 껍질의 다른 Spectra를 이용하여 자동화 분리과정 적용",
        },
        {
          img: `/images/business/vision/spectral-slide(5).jpg`,
          title: "녹조",
          text: "유해조류 분석 및 구별, 녹조 발생 모니터링 및 중국발 외래종 ‘괭생이 모자반‘ 모니터링등!",
        },
        {
          img: `/images/business/vision/spectral-slide(6).jpg`,
          title: "환경",
          text: "초분광카메라로 흰색 스펙트럼이 나타난 부분을 통해 기름이 유출된 위치 확인",
        },
        {
          img: `/images/business/vision/spectral-slide(7).jpg`,
          title: "국방",
          text: "항공에서의 적의 정확한 위치 확인, 군용차량, 지뢰탐지, 급조폭발물, 표적 추적·지시용 사용",
        },
      ],
      app: {
        col: 'three',
        media: 'image',
        type: 'bullet',
        list: [
          {
            image: 'vision/spectral-app(1).jpg',
            title: "전자소재 품질관리",
            texts: [
              '초분광 카메라로 납땜 파장을 분석해 품질 성분을 정밀 판정',
              'AI 알고리즘이 분광 데이터를 분석하여 납땜 등급을 자동 분류',
              '미세 결함을 정밀 검출하여 납땜 공정의 품질과 효율을 극대화'
            ]
          },
          {
            image: 'vision/spectral-app(2).jpg',
            title: "의약품 측정·감별",
            texts: [
              '간암 절제술의 효과를 정량화하여 치료 정밀도를 입증',
              '간 조직 절제술의 정량적 데이터를 분석하여 치료 효과를 증명',
              '간암 치료에 필수적인 절제술을 정량화하여 기술력을 입증'
            ]
          },
          {
            image: 'vision/spectral-app(3).jpg',
            title: "재활용품/폐기물 선별·분류",
            texts: [
              '해안가 플라스틱 폐기물을 자율적으로 추적하고 실시간 식별',
              '해안 환경에서 폐기물을 스스로 탐색하여 정확하게 식별 및 관리',
              '자율 탐사로 해안의 플라스틱 쓰레기를 찾아내고 정밀하게 판별'
            ]
          },
        ]
      } 
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
        media: 'video',
        type: 'title',
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
        link: {
          label: "i-Robot 솔루션 자세히 보기",
          path: "/logistics-solution",
          posId: false
        },
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
        media: 'video',
        type: 'title',
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
         link: {
          label: "자동분류시스템 솔루션 자세히 보기",
          path: "/logistics-solution",
          posId: false
        },
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
  