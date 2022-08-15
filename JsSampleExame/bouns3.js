  
function checkUser(username) {
  return arr.some(function(user) {
    return user.username === username;
  }); 
}
let arr = [
    { id: 1, username: 'john' }, 
    { id: 2, username: 'mark'}, 
    { id: 3, username: 'jessy' }];
    
console.log(checkUser('john'));