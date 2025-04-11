
var array = [1, 2, 3, 4, 5];
function  getRandomItem(params) {
    var randomNumber = Math.random() * array.length;
    var random = Math.floor(randomNumber);
    return params[random];
}
console.log(getRandomItem(array));

//-----------------------
function getTotal(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Number.isFinite(arr[i])) {
            sum += arr[i];
        }
    }
    return sum;
}

// Expected results
// getTotal([1, 2, 3]) // Output: 6
// getTotal([4, 5, -3]) // Output: 6
// getTotal([4, 5, 3, 5]) // Output: 17

//NOTE: đặt sum = 0 -> for(i bắt đầu từ 0; điều kiện lặp là i < độ dài của mảng; đúng thì i mới = i+1) -> trong vòng lặp nếu number đúng đkien của arr[i] (số nằm trong mảng có stt là i) -> sum + số nằm trong mảng có stt là i -> trả về sum mới -> lặp lại cho đến kết quả cuối cùng , dừng lại khi i >= độ dài mảng

function run(object) {
    var arr = [];
    for (var key in object) {
        arr.push('Thuộc tính ' + key + ' có giá trị ' + object[key]);
    }
    return arr;
}

// Expected results:
console.log(run({ name: 'Nguyen Van A', age: 16 }));
// Output:
// [
//     "Thuộc tính name có giá trị Nguyen Van A",
//     "Thuộc tính age có giá trị 16"
// ]