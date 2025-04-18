
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

//--------------------------------------------------------------------
function countDown(number) {
    if(number > 0) {
        console.log(number);           // In ra số hiện tại
        return countDown(number - 1); // Gọi lại chính nó với số '-1'
    }
    return number;  //Khi number <= 0 thì dừng và return vì điều kiện chạy là number > 0
}

countDown(10); //Điểm bắt đầu //console.log(countDown(10));

//-------------------------------------
function giaiThua(number) {
    if (number > 0) {
        return number * giaiThua(number - 1); // so sánh với điều kiện if, nếu k thoả mãn sẽ chạy 'return 1' ở ngoài if
    }
    return 1; //Điều kiện dừng lặp
}

console.log(giaiThua(5));
// -----------------------------------------------
function calculateRating(arr){
    return arr
      .filter(function(movie){
        return movie.Director === "Christopher Nolan";
      })
      .reduce(function(sum, movie, _, list){
        return sum + parseFloat(movie.imdbRating) / list.length;
      }, 0);
  }
  //parseFloat: chuyển chuỗi thành số
  //list: mảng gốc khi được lọc ra

//-------------------------------------------------
//Tạo hàm map2 clone hàm map

Array.prototype.map2 = function(callback) {
    var output = [];
    //---------
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        output.push(result);
    }
    //---------
    return result;

}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

var htmls =courses.map2(function(course, index) {
    return `<h2>${course}</h2>`;
})

//-------------------------------------------------
//Tạo hàm forEach2 clone  forEach

Array.prototype.forEach2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            callback(this[i], i, this);
        }
    }
}

var courses = [
    'Javascript',
    'PHP',
    'Ruby'
];

courses.forEach2(function(course, index, array) {

});

//-------------------------------------------------
//Tạo hàm filter2 clone filter

Array.prototype.filter2 = function(callback) {
    var output = [];
    //------------
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (result) {
                output.push(this[i]);
            }
        }
    }
    //------------
    return output;
}


var courses = [
    {
        name: 'Javascript',
        coin: 680
    },
    {
        name: 'PHP',
        coin: 860
    },
    {
        name: 'Ruby',
        coin: 980
    }
];

var filterCourses = courses.filter2(function(course, index, array) {
    return course.coin > 700;
})
//-------------------------------------------------
//Tạo hàm some2 clone some

Array.prototype.some2 = function(callback) {
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            if (callback(this[i], i, this)) {
                return true;
            }
        }
    }
    return false;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];

courses.some2(function(course, index, array) {
    return course.isFinish;
})
//-------------------------------------------------
//Tạo hàm every2 clone every
Array.prototype.every2 = function(callback) {
    var output = true;
    //------------
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
            var result = callback(this[i], i, this);
            if (!result) {
                output = false;
                break;
            }
        }
    }
    //------------
    return output;
}

var courses = [
    {
        name: 'Javascript',
        coin: 680,
        isFinish: true
    },
    {
        name: 'PHP',
        coin: 860,
        isFinish: false
    },
    {
        name: 'Ruby',
        coin: 980,
        isFinish: false
    }
];

courses.every2(function(course, index, array) {
    return course.isFinish;
})
//---------------------------------------------------
//VD về Promise
var users = [
    {
        id: 1,
        name: 'Kien Dam'
    }
    ,
    {
        id: 2,
        name: 'Son Dang'
    },
    {
        id: 3,
        name: 'Hung Dam'
    }
];
var comments = [
    {
        id: 1,
        user_id: 1,
        content: 'Anh Son chua ra video :('
    },
    {
        id: 2,
        user_id: 2,
        content: 'Vua ra xong em oi'
    }
];

//1. Lấy comments
//2. Từ comments lấy ra user_id
//3. Từ user_id lấy ra user tương ứng

//Fake API
function getComments() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve(comments);
        }, 1000);
    });
}


function getUsersByIds(userIds) {
    return new Promise(function(resolve) {
        var result = users.filter(function(user) {
            return userIds.includes(user.id);
        });
        setTimeout(function() {
            resolve(result);
        }, 1000);
    });
}


getComments()
    .then(function(comments) {
        var userIds = comments.map(function(comment) {
            return comment.user_id;
        });

        return getUsersByIds(userIds)
            .then(function(users) {
               return {
                   users: users,
                   comments: comments,
               };
            })
            .catch(function(err) {
                console.log(err);
            });
    })
    .then(function(data) {
        var commentBlock = document.getElementById('comment-block');

        var html = '';

        data.comments.forEach(function(comment) {
            var user = data.users.find(function(user) {
                return user.id === comment.user_id;
            });
            html += `<li>${user.name}: ${comment.content}</li>`;
        });
        commentBlock.innerHTML = html;

    });

//------------------------------------------------------
//------------------------------------------------------
var listCoursesBlock =
    document.querySelector('#list-courses');

var courseAPI = 'http://localhost:3000/courses';


function start() {
    getCourses(renderCourses);
};

start();


//function
function getCourses(callback) {
    fetch(courseAPI)
        .then(function(response) {
            return response.json();
        })
        .then(callback);
}

function renderCourses(courses) {
    var listCoursesBlock = document.querySelector('#list-courses');
    var htmls = courses.map(function(course) {
        return `<li>
                    <h4>${course.name}</h4>
                    <p>${course.description}</p>
                </li>`;
    });
    listCoursesBlock.innerHTML = htmls.join('');
}