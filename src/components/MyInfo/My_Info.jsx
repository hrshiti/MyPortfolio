import "./My_Info.css";

 
  
const My_Info =({heading,paragrph,small_heading,paragrph2,paragrph3,myInfo_css})=>{
  return(
    <>
      <h1 className={myInfo_css}>{heading}</h1>
       <h4 >{small_heading}</h4>
         <p>{paragrph} </p>
         <p>{paragrph2} </p>
         <p>{paragrph3} </p>
       
    </>
  )
}
export default My_Info;
