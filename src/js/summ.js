const obj = {
    a:5,
    b:5
}
const add = (a,b) => {
    
    return a + b;
}

const addObj = () => {
    const {a , b} = obj;
    return a + b;
}
const promOne = () => {
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
            resolve({...{a:33},...{b:66}});
       }, 500);
    })
}
// async function asyncOne() {
//      const data = await promOne();
//      return data;
// }

const asyncOne = async () => {
    const data = await promOne();
    return data;
}

export { add,addObj, asyncOne, promOne};