function printAvatar(){

  let avatar = {
    name: 'Avatar',
    rating: 'PG-13'
  }
  console.log(avatar.name + ': ' + avatar.rating);
}

function printChappie(){
  let chappie = {
    name: 'Chappie',
    rating: '16'
  }
  console.log(chappie.name + ': ' + chappie.rating);
}

module.exports.avatar = printAvatar;
