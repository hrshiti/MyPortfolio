
import Button from "../button/Button";
import Form1 from "../form/Form1";


import My_Info from "../MyInfo/My_Info";
import Navbar from "../navbar/Navbar";

import "./Contact_form.css";

const Contact_form =()=>{
  return(
    <>
      <section className="contact_section">
        <div className="more_btn">

  <Button btns="More"/>
        </div>
  <div className="main_div">
  <div>

       
<div className="form_info">
  <My_Info
   heading="Contact Me"
   paragrph="hritik45raghuwanshi@gmail.com" 
   paragrph2="6260491554"
   myInfo_css="myInfo_css"
   />
<Button btns = "Download CV"/>
</div>
 

<div>
</div>
</div>
<div className="contact_form">
 <Form1 />
</div>
  </div>
       
    </section>
   
    </>
  )
}
export default Contact_form;