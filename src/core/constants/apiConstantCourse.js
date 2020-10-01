let base_url = "https://thephdantu.in/course"; //production

// let base_url = "http://18.217.125.150:5000/course"   //devlopment

// let base_url = "http://localhost:5000/course"   //Local


export const API_ENDPOINTS = {
  USERS: {
    SIGNUP: `${base_url}/signup`,
    LOGIN: `${base_url}/login`,
    FORGOT_PASSWORD: `${base_url}/forgetPassword`,
    CHANGE_PASSWORD: `${base_url}/changePassword`,
    IS_USER_REGISTER: `${base_url}/isUserRegister/<USER_ID>`,
    UPLOAD_IMAGE: `${base_url}/upload-image`,
    GET_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    POST_USER_DETAILS: `${base_url}/userDetails/<USER_ID>`,
    CREATE_ORDER: `${base_url}/createOrder`,
    VERIFY_ORDER: `${base_url}/verifyRazorpaySucces`,
    ORDER_DETAILS: `${base_url}/myOrders/<USER_ID>`,
    IS_PACKAGE_BUY: `${base_url}/isPackageBuy/<USER_ID>`,
    GET_SUBJECTS: `${base_url}/getSubjects`,
    GET_TOPICS: `${base_url}/getTopicsUsers`,
    GET_MEDIUM: `${base_url}/checkMedium`,
    GET_CLASS_TEST_TOPIC_PRELIMS: `${base_url}/getAllClassTestPrelims`,
    GET_QUESTIONS_TEST_PRELIMS: `${base_url}/getQuestionsClassTest/<PAPER_ID>`,
    POST_RESPONSE_TEST_PRELIMS: `${base_url}/postResponseClassTestPrelims`,
    GET_RESPONSE_TEST_PRELIMS: `${base_url}/getResponsesClassTestPrelims`,
    GET_RANK_LIST:  `${base_url}/getRankMockPaper`,
    CHECK_CLASS_TEST_ATTEMPTED: `${base_url}/checkClassTestAttempted`,
    GET_BATCH: `${base_url}/getStudentBatch`,
    GET_CURRENT_AFFAIRS: `${base_url}/getCurrentAffairs`,
    GET_CLASS_SCHEDULE: `${base_url}/getClassSchedule`
  },
  ADMIN: {
    ADMIN_LOGIN: `${base_url}/adminLogin`,
    ALL_USERS: `${base_url}/allUsers`,
    PAID_USERS: `${base_url}/paidUsers`,
    ADMIN_DASHBOARD: `${base_url}/adminDashboard`,
    DISPUTE_ORDERS: `${base_url}/disputeOrders`,
    DISPUTE_ORDER_ID: `${base_url}/disputeOrdersById`,
    RESOLVE_ORDERS: `${base_url}/resolveOrder`,
    DELETE_ORDERS: `${base_url}/deleteDisputeOrder`,
    USER_DETAILS: `${base_url}/userDetails`,
    GET_SUBJECTS: `${base_url}/getSubjects`,
    GET_TOPICS: `${base_url}/getTopics`,
    UPLOAD_TOPIC: `${base_url}/addTopicVideos`,
    PAID_USER_LIST: `${base_url}/paidUserLists`,
    UPLOAD_PDF: `${base_url}/uploadTopicPdf`,
    ADD_CLASS_TEST_PRELIMS: `${base_url}/addClassTestPrelims`,
    GET_CLASS_TEST_PRELIMS: `${base_url}/getClassTestPrelimsAdmin`,
    GO_LIVE_CLASS_TEST_PRELIMS: `${base_url}/goLiveClassTestPrelims`,
    STOP_CLASS_TEST_PRELIMS: `${base_url}/stopClassTestPrelims`,
    DUMP_CLASS_TEST_PRELIMS: `${base_url}/dumpQuestionClassTestPrelims`,
    GET_QUESTIONS_TEST_PRELIMS: `${base_url}/getQuestionsByTestIdPrelims`,
    GET_QUESTION_BY_ID: `${base_url}/getQuestionsByIdPrelims`,
    EDIT_QUESTION_BY_ID:  `${base_url}/editQuestionsByIdPrelims`,
    ALL_USERS_LIST: `${base_url}/allUsersList`,
    GET_CURRENT_AFFAIRS: `${base_url}/getCurrentAffairs`,
    ADD_CURRENT_AFFAIRS: `${base_url}/addCurrentAffairs`,
    GET_USER_DETAILS: `${base_url}/getUserbyEmail`,
    EDIT_USER_DETAILS: `${base_url}/editUserDetails`,
    UPLOAD_CLASS_SCHEDULE: `${base_url}/uploadClassSchedule`,
    VIEW_CLASS_SCHEDULE: `${base_url}/getClassSchedule`
  }
}