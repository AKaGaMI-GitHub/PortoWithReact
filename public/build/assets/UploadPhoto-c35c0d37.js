import{a as r,j as o}from"./app-8a0227f4.js";const i=({category:e})=>n(e),n=e=>e.map((t,s)=>r("option",{value:t.id,children:t.name_category})),l=i;function c({className:e="",...t}){return o("div",{className:"py-4",children:[r("input",{...t,className:"block text-sm text-gray-900 border border-black cursor-pointer bg-gray-50 focus:outline-none"+e,"aria-describedby":"file_input_help",id:"img",type:"file"}),r("p",{className:"mt-1 text-sm text-gray-500",id:"file_input_help",children:"PNG, JPG Only."})]})}export{l as D,c as U};