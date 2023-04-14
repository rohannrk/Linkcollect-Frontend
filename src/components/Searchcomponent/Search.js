import React, { useState } from 'react'
import './styles.css'



const Search = () => {

const [display, setDisplay] = useState(false)

const clickhandler =()=>{
  console.log("The button was cliked")
  if(display==false){
let show = document.querySelector(".filterList")
show.style.display="block"
setDisplay(true)
}
else{
  let show = document.querySelector(".filterList")
  show.style.display="none"
  setDisplay(false)
}
}

return (
<div className='mx-auto mt-2 mr-10 ml-10'>
<h1 className='flex heading ml-2 mt-8 mb-3'  >Ohayo, Harsh</h1>
<form className="flex items-center">   

    <label htmlFor="voice-search" className="sr-only">Search</label>
    <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none bg-transparent">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
<path d="M10.3203 11.4562C9.03451 12.455 7.41632 12.9262 5.79525 12.7739C4.17418 12.6215 2.67213 11.857 1.59494 10.6361C0.517747 9.4151 -0.0535881 7.82948 -0.00273401 6.20206C0.04812 4.57465 0.717339 3.02779 1.86866 1.87647C3.01998 0.725152 4.56683 0.0559325 6.19425 0.00507849C7.82167 -0.0457756 9.40729 0.525559 10.6282 1.60275C11.8492 2.67994 12.6137 4.18199 12.7661 5.80306C12.9184 7.42413 12.4472 9.04233 11.4483 10.3282L15.7283 14.5922L14.5923 15.7282L10.3283 11.4562H10.3203ZM6.40034 11.2002C7.03069 11.2002 7.65486 11.076 8.23723 10.8348C8.81959 10.5936 9.34874 10.24 9.79446 9.79427C10.2402 9.34855 10.5937 8.8194 10.835 8.23704C11.0762 7.65468 11.2003 7.0305 11.2003 6.40016C11.2003 5.76981 11.0762 5.14564 10.835 4.56328C10.5937 3.98091 10.2402 3.45177 9.79446 3.00604C9.34874 2.56032 8.81959 2.20676 8.23723 1.96554C7.65486 1.72431 7.03069 1.60016 6.40034 1.60016C5.12731 1.60016 3.90641 2.10587 3.00623 3.00604C2.10606 3.90622 1.60034 5.12712 1.60034 6.40016C1.60034 7.6732 2.10606 8.8941 3.00623 9.79427C3.90641 10.6944 5.12731 11.2002 6.40034 11.2002Z" fill="#A9A9B8"/>
</svg>

                   </div>
        <input type="text" id="voice-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-white-700  dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for collection or links" required/>
        <button type="submit" className="absolute inset-y-0 right-0 flex items-center pr-3">
        <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
<path d="M12.2555 13.6042C10.7286 14.7903 8.807 15.3499 6.88198 15.169C4.95696 14.988 3.17328 14.0802 1.89411 12.6303C0.614947 11.1804 -0.0635137 9.29751 -0.00312456 7.36495C0.0572646 5.43239 0.851962 3.5955 2.21916 2.22831C3.58635 0.861118 5.42324 0.0664199 7.3558 0.00603071C9.28836 -0.0543585 11.1713 0.624102 12.6212 1.90327C14.0711 3.18243 14.9789 4.96612 15.1598 6.89114C15.3407 8.81615 14.7812 10.7378 13.595 12.2647L18.6775 17.3282L17.3285 18.6772L12.265 13.6042H12.2555ZM7.60053 13.3002C8.34907 13.3002 9.09027 13.1528 9.78183 12.8663C10.4734 12.5798 11.1017 12.16 11.631 11.6307C12.1603 11.1014 12.5802 10.473 12.8666 9.78148C13.1531 9.08993 13.3005 8.34872 13.3005 7.60019C13.3005 6.85165 13.1531 6.11045 12.8666 5.41889C12.5802 4.72733 12.1603 4.09897 11.631 3.56968C11.1017 3.04038 10.4734 2.62052 9.78183 2.33407C9.09027 2.04762 8.34907 1.90019 7.60053 1.90019C6.0888 1.90019 4.63898 2.50072 3.57002 3.56968C2.50106 4.63863 1.90053 6.08845 1.90053 7.60019C1.90053 9.11192 2.50106 10.5617 3.57002 11.6307C4.63898 12.6997 6.0888 13.3002 7.60053 13.3002Z" fill="#6166F1"/>
</svg>
                   </button>
    </div>
    <button onClick={clickhandler}  className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium  bg-white-700 bg-white  rounded-lg border-gray-700 hover:bg-white-800 focus:ring-4 focus:outline-none  dark:bg-white-600 ">
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='bg-transparent'>
<path fillRule="evenodd" clipRule="evenodd" d="M23.8377 3.54075H22.224C21.6564 1.93468 20.1246 0.783997 18.3242 0.783997C16.5238 0.783997 14.992 1.93468 14.4243 3.54075H1.78365C1.0224 3.54075 0.405273 4.15788 0.405273 4.91913C0.405273 5.68038 1.0224 6.29751 1.78365 6.29751H14.4243C14.992 7.90358 16.5238 9.05427 18.3242 9.05427C20.1246 9.05427 21.6564 7.90358 22.224 6.29751H23.8377C24.599 6.29751 25.2161 5.68038 25.2161 4.91913C25.2161 4.15788 24.599 3.54075 23.8377 3.54075ZM18.3242 6.29751C19.0855 6.29751 19.7026 5.68038 19.7026 4.91913C19.7026 4.15788 19.0855 3.54075 18.3242 3.54075C17.5629 3.54075 16.9458 4.15788 16.9458 4.91913C16.9458 5.68038 17.5629 6.29751 18.3242 6.29751ZM0.405273 13.1894C0.405273 12.4281 1.0224 11.811 1.78365 11.811H3.39733C3.96499 10.205 5.4967 9.05427 7.29717 9.05427C9.09763 9.05427 10.6294 10.205 11.197 11.811H23.8377C24.599 11.811 25.2161 12.4281 25.2161 13.1894C25.2161 13.9507 24.599 14.5678 23.8377 14.5678H11.197C10.6294 16.1739 9.09763 17.3245 7.29717 17.3245C5.4967 17.3245 3.96499 16.1739 3.39733 14.5678H1.78365C1.0224 14.5678 0.405273 13.9507 0.405273 13.1894ZM7.29717 14.5678C8.05843 14.5678 8.67554 13.9507 8.67554 13.1894C8.67554 12.4281 8.05843 11.811 7.29717 11.811C6.53591 11.811 5.91879 12.4281 5.91879 13.1894C5.91879 13.9507 6.53591 14.5678 7.29717 14.5678ZM1.78365 20.0813C1.0224 20.0813 0.405273 20.6984 0.405273 21.4597C0.405273 22.221 1.0224 22.8381 1.78365 22.8381H14.4243C14.992 24.4441 16.5238 25.5948 18.3242 25.5948C20.1246 25.5948 21.6564 24.4441 22.224 22.8381H23.8377C24.599 22.8381 25.2161 22.221 25.2161 21.4597C25.2161 20.6984 24.599 20.0813 23.8377 20.0813H22.224C21.6564 18.4752 20.1246 17.3245 18.3242 17.3245C16.5238 17.3245 14.992 18.4752 14.4243 20.0813H1.78365ZM19.7026 21.4597C19.7026 22.221 19.0855 22.8381 18.3242 22.8381C17.5629 22.8381 16.9458 22.221 16.9458 21.4597C16.9458 20.6984 17.5629 20.0813 18.3242 20.0813C19.0855 20.0813 19.7026 20.6984 19.7026 21.4597Z" fill="#6166F1"/>
</svg>
    </button>

</form>
<div className='filterList hidden'>
    <div className='flex flex-col items-end '  >
      <div className=' absolute  mr-2 border-gray-400 cursor-pointer bg-white p-2 mt-2 rounded-xl onlyFont leading-6' style={{borderRadius:'40px 0px 32px 24px',border:'3px #E4E4F2 solid'}} >
        <p className='bg-white hover:text-blue-700 ' >Recently Updated</p>
        <p className='bg-white hover:text-blue-700 '>Newest To Oldest </p>
        <p className='bg-white hover:text-blue-700  '>Oldest To Newest</p>
      </div>
    </div>
</div>
</div>

  )
}

export default Search