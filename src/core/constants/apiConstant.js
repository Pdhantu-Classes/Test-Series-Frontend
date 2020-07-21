//  let base_url = 'https://pdhnatu.herokuapp.com'
let base_url = "http://3.17.56.99:5000"; //production
// let base_url = "http://52.14.8.163:5000" //devlopment
// let base_url = "http://localhost:5000"

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
    USER_QUERY: `${base_url}/query`,
    IS_USER_PAID: `${base_url}/checkValidUser`,


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
    UPLOAD_IMAGE:`${base_url}/upload-question-image`,
    UPLOAD_BULK_QUESTION_PDF:`${base_url}/upload-image-bulk-question`,
    UPLOAD_ANSWER_PDF:`${base_url}/upload-image-answer`,
    DUMPED_QUESTION_PDF:`${base_url}/dump-question-images`,
    DUMPED_ANSWER_PDF:`${base_url}/dump-images-answer`,
    GET_MOCK_PAPER_QUESTION:`${base_url}/getMockPaperForQuestion`,
    GET_MOCK_PAPER_ANSWER:`${base_url}/getMockPaperForAnswer`,
    GET_USER_LIST_MOCK: `${base_url}/getUserListMock`

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
    CHECK_TEST_ATTEMPTED: `${base_url}/checkTestAttempted`,
    DEMO_TEST:`${base_url}/demoTest`,
    GET_QUESTION_PAPER_PDF: `${base_url}/getMockPaperPdfImages`,
    GET_ANSWER_KEY_PDF: `${base_url}/getMockAnswerKeyImages`,
  }
};
