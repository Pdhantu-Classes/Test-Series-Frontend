import React,{useState} from 'react'
import http from 'axios'
import { Link } from 'react-router-dom'
import { useAlert, types } from 'react-alert'
import { getUserId } from "../../core/utility/authHeader";
// import {useHistory} from 'react-router-dom'
import { API_ENDPOINTS } from '../../core/constants/apiConstant'

const CHECK_TEST_ATTEMPTED = API_ENDPOINTS.TEST_SERIES.CHECK_TEST_ATTEMPTED

export default function TestInstruction() {
    // const history = useHistory()
    const alert = useAlert()

    const [ loading , setLoading ] = useState(false)
    
    const startTest =() =>{
        setLoading(true)
        const mockPaperId = window.localStorage.getItem('mock_paper_id')
        http
            .get(CHECK_TEST_ATTEMPTED,{
                headers:{
                    user_id:getUserId(),
                    mock_paper_id: mockPaperId
                }
            })
            .then(res=>{
                setLoading(false)
                if(res.data.isValid){
                    window.open('http://www.thepdhantu.com/user/testscreen','_blank','toolbar=0,fullscreen=1')
                    // window.open('http://localhost:3000/user/testscreen','_blank','resizable=yes,top=500,left=500,width=4000,height=4000')
                }
                else{
                    alert.show('You Already Attempted the Test ,To see Your Response Go To Home', { type: types.SUCCESS })
                }
            })

       
    }
    return (
        <div>
            {
                loading?            
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <   span className="sr-only">Loading...</span>
                    </div>
                </div>
                :
                    null
            }
            <div className="container">
      <div className="info-header text-center mb-5">
        <h1 className="pb-3"><div>General Instructions:</div><div>(सामान्य निर्देश:)</div></h1>
      </div>
      <div className="ml-5 mt-4">
        <ul>
          <li>
          <div>The total duration of the examination is 30 minutes</div>
          <div> परीक्षा की कुल अवधि 30 मिनट है।</div>
          </li>
          <li>
          <div>The total number of question is 100</div>
          <div> प्रश्न की कुल संख्या 20 है।</div>
          </li>
          <li>
          <div>Total marks = 40. Candidates will get two marks for each correct answer.</div>
          <div> कुल अंक = 40. प्रत्येक सही उत्तर के लिए उम्मीदवारों को दो अंक मिलेंगे।</div>
          </li>
          <li>
          <div>For each incorrect answer there will be negative marking of 2/3 in this examination.</div>
          <div> प्रत्येक गलत उत्तर के लिए इस परीक्षा में 2/3 की नकारात्मक अंकन होगी।</div>
          </li>
          <li> <div>Both Hindi and English language is available</div>
          <div> हिंदी और अंग्रेजी दोनों भाषाएं उपलब्ध हैं।</div></li>
          <li> <div>Type of Questions: The question paper will contain objective type questions with 4 multiple choice answers.</div>
          <div> प्रश्नों के प्रकार: प्रश्न पत्र में 4 बहुविकल्पीय उत्तरों के साथ वस्तुनिष्ठ प्रकार के प्रश्न होंगे।</div></li>
          <li>
              <div>The clock will be set at the server. The countdown timer will display the remaining time available to you for completing the examination. When the timer reaches zero, the examination will end by itself. You can end or submit your examination by clicking on the submit button any time.</div>
              <div>घड़ी सर्वर पर सेट की जाएगी। काउंटडाउन टाइमर परीक्षा को पूरा करने के लिए आपके पास उपलब्ध शेष समय को प्रदर्शित करेगा। जब टाइमर शून्य तक पहुंच जाएगा, तो परीक्षा अपने आप समाप्त हो जाएगी। आप किसी भी समय सबमिट बटन पर क्लिक करके अपनी परीक्षा समाप्त या जमा कर सकते हैं।</div>
          </li>
          <li>
              <div>The Question Palette displayed on the right side of screen will show the status of each question using one of the following symbols:
                
              </div>
              <div>
              स्क्रीन के दाईं ओर प्रदर्शित प्रश्न पैलेट निम्नलिखित प्रतीकों में से किसी एक का उपयोग करके प्रत्येक प्रश्न की स्थिति दिखाएगा:
              </div>
              <div className="ml-5 mt-4">
                  <ol>
                      <li>
                
                          <div>Answered questions in green colour.</div>
                          <div> हरे रंग में उत्तर दिए गए प्रश्न।</div>
                      </li>
                      <li>
                          <div>Unanswered questions in Gray colour.</div>
                          <div> ग्रे रंग में अनुत्तरित प्रश्न।</div>
                      </li>
                      <li>
                          <div>Current active questions in pink colour</div>
                          <div>गुलाबी रंग में वर्तमान सक्रिय प्रश्न</div>
                      </li>
                  </ol>
              </div>
          </li>
          <li>
              <div>
              You can click on the question palette to navigate faster across questions.
              </div>
              <div>
              आप प्रश्नों पर तेजी से नेविगेट करने के लिए प्रश्न पैलेट पर क्लिक कर सकते हैं।
              </div>
          </li>
          <li>
              <div>The student may not use his or her textbook, course notes, or receive help from a proctor or any other outside source.</div>
              <div>छात्र अपनी पाठ्यपुस्तक, पाठ्यक्रम के नोट्स या प्रॉक्टर या किसी अन्य बाहरी स्रोत से सहायता प्राप्त नहीं कर सकता है।</div>
          </li>
        </ul>
      </div>
      <div className="mt-4">
        <div><b>Answering a Question:</b></div>
        <div>प्रश्न का उत्तर देना:</div>
        <ul>
            <li>
                <div>Procedure for answering multiple-choice type questions:</div>
                <div>बहुविकल्पीय प्रकार के प्रश्नों के उत्तर देने की प्रक्रिया:</div>
                <div className="ml-5 mt-4">
                    <ol>
                    <li>
                        <div>To select your answer, click on the button of one of the options.</div>
                        <div>अपना उत्तर चुनने के लिए, किसी एक विकल्प के बटन पर क्लिक करें।</div>
                        </li>
                        <li>
                        <div>To deselect your chosen answer, click again on the button of the chosen option again.</div>
                        <div>अपने चुने हुए उत्तर को रद्द करने के लिए, फिर से चुने गए विकल्प के बटन पर फिर से क्लिक करें।</div>
                        </li>
                        <li>
                        <div>To change your chosen answer, click on the button of another option.</div>
                        <div>अपना चुना हुआ उत्तर बदलने के लिए, दूसरे विकल्प के बटन पर क्लिक करें।</div>
                        </li>
                        <li>
                        <div>Once you click on the option, it will saved by itself.</div>
                        <div>एक बार जब आप विकल्प पर क्लिक करते हैं, तो यह अपने आप सेव हो जाएगा।</div>
                        </li>
                    </ol>

                </div>
            </li>
            <li>
                <div>To change answer to a question that has already been answered, select that question from the Question Palette and then follow the procedure for answering that type of question.</div>
                <div>पहले से दिए गए प्रश्न के उत्तर को बदलने के लिए, प्रश्न पैलेट से उस प्रश्न का चयन करें और फिर उस प्रकार के प्रश्न का उत्तर देने के लिए प्रक्रिया का पालन करें।</div>
            </li>
        </ul>
      </div>
     
      </div>
      <div className="d-flex row justify-content-center mb-3">
      <button className="btn btn-success btn-lg" onClick={startTest}>Start Test</button>
      <div><Link to="/user/home"><button className="btn btn-primary ml-5 ">Go to Home</button></Link> </div>
      </div>
            
        </div>
    )
}
