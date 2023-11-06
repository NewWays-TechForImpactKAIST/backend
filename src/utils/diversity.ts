const count = (data: number[] | string[], stair = 0): {[key: string | number]:number} => {
    let count : {[key: string | number]:number} = {};
    data.forEach((d)=>{
        if (stair > 0) {
            if (typeof d === 'string'){
                console.log("stair is not defined for string data");
                return {};
            }
            else d = Math.floor(d / stair);
        }
        if (count[d] === undefined) count[d] = 0;
        count[d] += 1;
    });
    return count;
}

// opts := 0 -> no normalization
// otherwise -> normalize
export const gini_simpson = (data: number[] | string[], stair = 0, opts = 0): number => {
    const n = data.length;
    let cnt = count(data, stair);
    let sum = 0;
    sum = Object.values(cnt).reduce((a,b) => a+b*(b-1));
    sum = 1 - sum / (n*(n-1));
    if (opts > 0) sum = sum / (1 - 1/opts);
    return sum;
}

export const shannon = (data: number[] | string[], stair = 0): number => {
    const n = data.length;
    let cnt = count(data, stair);
    let sum = 0;
    sum = Object.values(cnt).reduce((a,b) => a+b*Math.log(b));
    sum = -sum / n;
    return sum;
}