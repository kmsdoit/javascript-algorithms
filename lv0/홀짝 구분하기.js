function solution(num_list, n){
    let answer = 0

    if (num_list.indexOf(n) !== -1) {
        return 1
    }else {
        return 0
    }
}

console.log(solution([1, 2, 3, 4, 5], 6))
