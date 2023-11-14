
function solution(num_list) {
    let answer = 0
    let odd = []
    let even = []
    for(let i = 0; i < num_list.length; i ++) {
        if(num_list[i] % 2 != 0) {
            odd.push(num_list[i])
        }else{
            even.push(num_list[i])
        }
    }

    answer = parseInt(odd.join('')) + parseInt(even.join(''))

    return answer
}

console.log(solution([5, 7, 8, 3]))
