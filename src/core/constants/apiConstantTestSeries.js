let base_url = "https://thephdantu.in/testseries"; //production

// let base_url = "http://18.217.125.150:5000" //development

// let base_url = "http://localhost:5000/testseries"   //Local

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
    ORDER_DETAILS: `${base_url}/orderDetails/<USER_ID>`,
    IS_PACKAGE_BUY: `${base_url}/isPackageBuy/<USER_ID>`,
    MY_TEST_SERIES: `${base_url}/myTestSeries/<USER_ID>`,
    IS_USER_PAID: `${base_url}/checkValidUser`,
    MY_TEST_SERIES_PACKAGE:`${base_url}/myTestSeriesPackage`
  },
  ADMIN: {
    ADMIN_LOGIN: `${base_url}/adminLogin`,
    ALL_USERS: `${base_url}/allUsers`,
    PAID_USERS: `${base_url}/paidUsers`,
    UNPAID_USERS: `${base_url}/unpaidUsers`,
    ADMIN_DASHBOARD: `${base_url}/adminDashboard`,
    GET_ALL_MOCK:  `${base_url}/getAllMockAdmin`,
    GO_LIVE:  `${base_url}/goMockLive`,
    STOP_TEST:  `${base_url}/finishPaper`,
    RELEASE_RESULT:  `${base_url}/releaseResult`,
    TEST_DETAILS: `${base_url}/getMockPaperDetails`,
    LIVE_MOCK_STATUS:`${base_url}/getLiveMockStatus`,
    CHECK_PAYMENT :`${base_url}/checkPayment`,
    ADD_PAYMENT_DATA:`${base_url}/addUserToPaymentList`,
    GET_MOCK_PAPER_QUESTION:`${base_url}/getMockPaperForQuestion`,
    GET_MOCK_PAPER_ANSWER:`${base_url}/getMockPaperForAnswer`,
    GET_USER_LIST_MOCK: `${base_url}/getUserListMock`,
    GET_QUESTIONS :`${base_url}/getQuestionsByPaperId`,
    DELETE_QUESTION:`${base_url}/deleteQuestionById`,
    DUMP_EXCEL_FILE:`${base_url}/dumpQuestionsExcelfile`,
    DELETE_ALL_QUESTION:`${base_url}/deleteQuestionsByPaperId`,
    GET_QUESTION_BY_ID:`${base_url}/getQuestionsById`,
    EDIT_QUESTION_BY_ID:`${base_url}/editQuestionsById`,
    ALL_USERS_LIST: `${base_url}/allUsersList`,
    ADD_QUESTION_PAPER_PDF: `${base_url}/uploadPaperPdf`
  },
  TEST_SERIES:{
    GET_ALL_MOCK:`${base_url}/getAllMockPaper`,
    GET_MOCK_DETAILS:`${base_url}/getAllMockPaper`,
    GET_MOCK_LIVE: `${base_url}/getOnlyLiveTest`,
    GET_MOCK_TIME: `${base_url}/getMockPaperTime`,
    GET_MOCK_QUESTIONS: `${base_url}/getQuestions/<MOCK_ID>`,
    POST_RESPONSE: `${base_url}/postResponse`,
    GET_RESPONSE: `${base_url}/getResponses`,
    GET_RANK_CARD: `${base_url}/getRankMockPaper`,
    CHECK_TEST_ATTEMPTED: `${base_url}/checkTestAttempted`
  }
};
