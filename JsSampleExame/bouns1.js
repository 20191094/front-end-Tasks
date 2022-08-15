

//08:15:22AM
function convertTime(time){
  let str = time.substring(8);
  let time24 = time.substring(0,8);
  let timearr= time24.split(':');
  if(str === 'AM'){
    if(timearr[0] === '12'){
         timearr[0] = '00';
    }
  }
  else if(str === 'PM'){
    if(timearr[0] !== '12'){
        timearr[0] = Number(timearr[0])+12;
    }
  }
  return timearr.join(':');
}
console.log(convertTime('08:15:22PM'));