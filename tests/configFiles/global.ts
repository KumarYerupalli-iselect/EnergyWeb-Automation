let pe = require('pretty-error').start();
pe.skipNodeFiles();
pe.appendStyle({
   
   'pretty-error > header > title > kind': {
      display: 'none'
   },

   'pretty-error > header > colon': {
      display: 'none'
   },

   'pretty-error > header > message': {    
      color: 'bright-white',
      background: 'cyan',
      padding: '0 1' 
   },

   'pretty-error > trace > item': {
      marginLeft: 2,
      bullet: '"<grey>o</grey>"'
   },

   'pretty-error > trace > item > header > pointer > file': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > pointer > colon': {
      color: 'cyan'
   },

   'pretty-error > trace > item > header > pointer > line': {
      color: 'bright-cyan'
   },

   'pretty-error > trace > item > header > what': {
      color: 'bright-white'
   },

   'pretty-error > trace > item > footer > addr': {
      display: 'none'
   }
});

export const inputDatas = {
  shortWaits: 3000,
  mediumWaits: 5000,
  longwaits: 8000,
  extendedwaits: 10000,
  password: 'Testing@LL',
  userName: 'test@yopmail.com',
  testSearchData: 'Elon Musk',
  uName: 'xxxxxxxxxxx@gmail.com',
  pwd: 'xxxxxxxx',
}
