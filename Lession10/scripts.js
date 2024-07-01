// Khai báo 1 function với đầu vào là 3 số a, b, c (a khác 0). Hãy tìm nghiệm của phương trình a.x^2 + b.x + c = 0 và đưa ra kết quả dưới dạng 1 mảng gồm các nghiệm của phương trình.
function equation(a, b, c){
    if(a===0){
        alert('Nhap lai a');
    }
    const delta = b** - 4 * a * c;
    if(delta > 0){
        const x1 = (-b + Math.sqrt(delta)) / (2 * a);
        const x2 = (-b - Math.sqrt(delta)) / (2 * a);
        return [x1, x2];
    }else if(delta === 0){
        const x = -b / (2 * a);
        return [x];
    }else{
        return [];
    }
}


// Khai báo 1 function với đầu vào là 3 số a, b, c. Kiểm tra xem a, b, c có tạo thành 3 cạnh của tam giác không. Nếu tạo thành tam giác, đầu ra là true. Ngược lại, đầu ra là false.
function checkTriangle(a, b, c){
    if(a + b > c && a + c > b && b + c > a){
        return true;
    }else{
        return false;
    }
}


// Khai báo 1 function với đầu vào là day, month, year. Kiểm tra xem 3 giá trị đó có tạo thành 1 ngày, tháng năm hợp lệ không.
function checkDate(day, month, year){
    if(month < 1 || month >12){
        return false;
    }else if(day < 1 || day > 31){
        return false;
    }else if(year % 4 == 0 && day > 29){
        return false;
    }else if(month == 2 && year % 4 != 0 && day > 28){
        return false;
    }else{
        return true;
    }
}


// Cho bộ dữ liệu về users như sau: data.js
// -Nhập vào 1 số n. Hãy tìm 1 user có id bằng n
// -Nhập vào 1 chuỗi keyword. Hãy lấy ra email của các user có tên (first_name + last_name) chứa keyword.
// -Đếm số lượng user có age > 50.
// -Đếm số lượng user đã kết hôn và chưa kết hôn.
// -Đếm số lượng user theo từng ngành nghề tương ứng.
    // Output:
    // {
    //     "Dentist": 5,
    //     "Developer": 13,
    //     "Doctor": 6,
    //     "Farmer": 8,
    //     "Project Manager": 5,
    //     "Teacher": 9,
    //     "Worker" : 4
    // }
    const n = prompt(n);
    for(let user of users){
        if(user.id === Number(n)){
            console.log(user);
        }
    }
