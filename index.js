// code your solution here

function saturdayFun(hobby="roller-skate") {
    return (`This Saturday, I want to ${hobby}!`);
}
saturdayFun();

function mondayWork(work="go to the office") {
    return (`This Monday, I will ${work}.`);
}
mondayWork();

function wrapAdjective(emphasis="*") {
    return function wrapAdjective(param="special") {
        return (`You are ${emphasis}${param}${emphasis}!`)
    }
}
wrapAdjective();