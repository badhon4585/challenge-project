alert("Welcome my second page");
   
let ag = [
    {
        id:33,
        mane:"badhon",
        age:2.62
    },
    {
        id:33,
        mane:"bapon",
        age:3.00
    },
    {
        id:33,
        mane:"ma",
        age:4.62
    }
];

function mass(){
  return ag.filter(function(x){
      return x.age > 3
   })
   
}

console.log(mass());