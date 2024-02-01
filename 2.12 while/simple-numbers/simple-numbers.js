let intervalEnd = prompt("Введите конец интервала", "0");
let buf = 0;

for (let i = 2; i < intervalEnd; i++){
    for (let j = 2; j < intervalEnd; j++){
        if (i % j == 0 && i != j){
            buf++;
            break
        }
    }
    if (buf == 0){
        alert(i);
    }
    buf = 0;
}

// nextIter:
//     for (let i = 2; i < intervalEnd; i++){
//         for (let j = 2; j < i; j++){
//             if (i % j == 0){
//                 continue nextIter;
//             }
//         }
//         alert(i);
//     }