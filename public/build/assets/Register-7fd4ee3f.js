import{W as p,r as f,j as a,a as e,b as w,d as g}from"./app-8ddcd5b0.js";import{G as h}from"./GuestLayout-0bab405e.js";import{T as n,I as m}from"./TextInput-7e4d9b64.js";import{I as i}from"./InputLabel-d2b25c9d.js";import{P as N}from"./PrimaryButton-eeed4031.js";function k(){const{data:r,setData:d,post:l,processing:c,errors:t,reset:u}=p({name:"",password:"",password_confirmation:""});f.useEffect(()=>()=>{u("password","password_confirmation")},[]);const o=s=>{d(s.target.name,s.target.type==="checkbox"?s.target.checked:s.target.value)};return a(h,{children:[e(w,{title:"Register"}),a("form",{onSubmit:s=>{s.preventDefault(),l(route("register"))},children:[a("div",{children:[e(i,{htmlFor:"usernname",value:"Username"}),e(n,{id:"name",name:"name",value:r.name,className:"mt-1 block w-full",autoComplete:"name",isFocused:!0,onChange:o,required:!0}),e(m,{message:t.name,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{htmlFor:"password",value:"Password"}),e(n,{id:"password",type:"password",name:"password",value:r.password,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(m,{message:t.password,className:"mt-2"})]}),a("div",{className:"mt-4",children:[e(i,{htmlFor:"password_confirmation",value:"Confirm Password"}),e(n,{id:"password_confirmation",type:"password",name:"password_confirmation",value:r.password_confirmation,className:"mt-1 block w-full",autoComplete:"new-password",onChange:o,required:!0}),e(m,{message:t.password_confirmation,className:"mt-2"})]}),a("div",{className:"flex items-center justify-end mt-4",children:[e(g,{href:route("login"),className:"underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:"Already registered?"}),e(N,{className:"ml-4",disabled:c,children:"Register"})]})]})]})}export{k as default};