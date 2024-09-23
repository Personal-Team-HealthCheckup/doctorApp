import React from 'react'
interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
lableName?:string,
checked?:boolean,
toggle?:()=>void;
}

const TextInput:React.FC<InputProps> = (props) => {
  return ( props.type === 'checkbox' ? <label className="inline-flex items-center me-5 cursor-pointer gap-4">
    <input type="checkbox" value="" className="sr-only peer" checked={props.checked} onChange={props.toggle} />
    <span className="text-xl font-DM_Sans font-normal text-black dark:text-black ">{props.lableName}</span>
    <div className="relative w-11 h-6 bg-white rounded-full border peer-focus: border-primary border-solid  peer-focus:ring-4 peer-focus:ring-primary dark:peer-focus:ring-primary
     dark:bg-primary peer-checked:after:translate-x-full 
     rtl:peer-checked:after:-translate-x-full peer-checked:after:border-primary 
     after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white
      after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 
      after:transition-all dark:border-gray-600 peer-checked:bg-white peer-checked:border-primary"></div>
  </label>
  :
    <div className="textIputView">
    <input 
    type="text" 
    id="input" 
    className="textInput"
    {...props}
     />
    </div>
  )
}

export default TextInput