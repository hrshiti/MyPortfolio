import Button from "../button/Button";
import "./Form1.css";

const Form1 =()=>{
  return(
    <>
     <section className="form_section">
      <form>

      
      <div >
        <input className="input1"
        type="text"
        placeholder="Name"
       
        />
      </div>
        
      <div className="input2_css" >
      <input className="input2"
        type="text"
        placeholder="email"
       
        />
      </div>
      <div >
      <input className="input3"
        type="text"
        placeholder="Your message"
       
        />
      </div>
      <div className="input_btn">
        <Button  btns="Submit" className="inputBtn"/>
      </div>
      </form>
     </section>
    </>
  )
}
export default Form1;