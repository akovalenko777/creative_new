//input: +38 (012) 345-67-89
//output: +380123456789
//'+38 (012) 345-67-89'.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', '')
export default function(phone){
  // return phone.replaceAll(' ', '').replaceAll('-', '').replace('(', '').replace(')', '')
  return phone.replace(/[ ()-]/g, '')
}