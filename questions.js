const questions={
    examA:{
    id:"examA",
    stage:"고등학교",
    title:"고등학교 2학년 첫 중간고사를 치렀습니다.",
    text:"이런! 성적이 떨어졌습니다. 기말고사를 어떻게 대비할까요?",
    choices:[
    "동네 학원에 간다",
    "고액 과외를 받는다"
    ]
    },

    exam:{
    id:"exam",
    stage:"고등학교",
    title:"고등학교 2학년 첫 중간고사를 치렀습니다.",
    text:"이런! 성적이 떨어졌습니다. 기말고사를 어떻게 대비할까요?",
    choices:[
    "인터넷 강의를 듣는다",
    "동네 학원에 간다",
    "고액 과외를 받는다"
    ]
    },

    university:{
    id:"university",
    stage:"고등학교",
    title:"야호! 대학 두 곳에 합격했습니다!",
    text:"어떤 학교에 진학할까요?",
    choices:[
    "전액장학금이 보장된 대학교에 진학한다",
    "등록금 부담은 있지만 원하던 대학교에 진학한다"
    ]
    },

    license:{
    id:"license",
    stage:"대학교",
    title:"자격증을 취득하는 것이 도움이 된다고 합니다.",
    text:"어떤 자격증을 딸까요?",
    choices:[
    "졸업에 필요한 최소 조건만 만족시키자",
    "이것저것 다 따보자"
    ]
    },

    exchange:{
    id:"exchange",
    stage:"대학교",
    title:"교환학생을 떠나는 선배들이 많습니다.",
    text:"떠날까요?",
    choices:[
    "간다!",
    "가 볼까?",
    "아니야..."
    ]
    },

    vacation:{
    id:"vacation",
    stage:"대학교",
    title:"방학입니다!",
    text:"학기 중에는 느낄 수 없던 여유입니다. 무엇을 해볼까요?",
    choices:[
    "친구들과 여행을 가자!",
    "아르바이트를 하자!",
    "너무 힘들었어... 푹 쉰다"
    ]
    },

    graduateSchool:{
    id:"graduateSchool",
    stage:"대학교",
    title:"벌써 4학년이 되었습니다.",
    text:"교수님께서 대학원 진학 의사를 여쭤보십니다. 진학만 한다면 원하는 자리에 취직하기 쉬워질 것입니다.",
    choices:[
    "진학하고 싶습니다!",
    "학비가 걱정되어 힘들 것 같습니다..."
    ]
    },

    graduateCareer:{
    id:"graduateCareer",
    stage:"대학원",
    title:"대학원을 성공적으로 마쳤습니다.",
    text:"어떤 코스를 밟을까요?",
    choices:[
    "교수가 된다",
    "취업 준비를 한다"
    ]
    },

    graduation:{
    id:"graduation",
    stage:"대학교",
    title:"졸업 시기가 다가옵니다.",
    text:"슬슬 취업 걱정을 해야 할 것 같습니다.",
    choices:[
    "졸업을 미루고 스펙을 쌓는다",
    "유급 인턴과 학업을 병행한다",
    "돈 버는 게 우선... 졸업하고 일자리를 찾는다"
    ]
    },

    intern:{
    id:"intern",
    stage:"취업 준비",
    title:"지망하는 분야의 3개월 무급 인턴 자리가 생겼습니다!",
    text:"지원할까요?",
    choices:[
    "지원한다",
    "무급은 좀..."
    ]
    },

    interview:{
    id:"interview",
    stage:"취업 준비",
    title:"입사 전 최종 면접을 남겨두고 있습니다.",
    text:"어떻게 준비할까요?",
    choices:[
    "고액 컨설턴트에게 1대1 특강을 듣는다",
    "면접 학원을 등록한다",
    "면접 스터디를 구한다"
    ]
    }
};

const routeQuestions={
    A:[
    "examA",
    "license",
    "exchange",
    "graduateSchool",
    "graduateCareer"
    ],

    B:[
    "exam",
    "university",
    "license",
    "exchange",
    "vacation",
    "graduation",
    "intern",
    "interview"
    ],

    C:[
    "exam",
    "university",
    "license",
    "exchange",
    "vacation",
    "graduation",
    "intern",
    "interview"
    ]
    };

const autoEvents={
    A:{
    afterExam:{
    title:"대학 합격",
    text:"야호! 대학에 합격했습니다! 부모님은 원하는 대학에 합격한 저를 축하해 줍니다. 입학 선물로 노트북을 받았습니다. 정말 감사한 일입니다."
    },
    afterExchange:{
    title:"방학",
    text:"방학입니다! 친구들과 함께 해외여행을 떠났습니다. 여유를 마음껏 즐기며 다양한 경험을 쌓았습니다."
    }
    }
};