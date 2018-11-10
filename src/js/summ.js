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

export { add,addObj };