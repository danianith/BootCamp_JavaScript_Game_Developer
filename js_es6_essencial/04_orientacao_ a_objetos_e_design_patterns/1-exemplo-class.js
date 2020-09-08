 'use strict';

 class Animal{
     constructor(){
         this.qtdePatas = 0;
     }
     movimentar(){}
 }

 class Cachorro extends Animal {
     constructor(morde){
         super();
         this.qtdePatas = 4;
         this.morde = morde;
     }
     latir(){
         console.log('Au! au!');
     }
 }

 const frise = new Cachorro('não');
 const terrier = new Cachorro('sim');

 console.log('Cachorro frise:',frise);
 console.log('Cachorro terrier:', terrier);



