
Day 1,
// Resfull api => quy chuẩn 
get post push delete

// SSR vs CSR
//import expost
//browser
//CRUD
// HTTP vs HTTPS
// status code ggg

npx express-generator => Tạo nhanh 1 dự án

cors => giống như cái danh bạ ta có thể chặn được
khái niệm : Cho các domain khác có thể gọi hoặc k đến domain của mình 
vd : localhost:321 bị chặn
=> 321 k thể truy cập vào web của ta


luồng middle ware => routing => hứng lỗi

Day 2
Tiêu chuẩn Reful api => th ở router => thbuoi2
get =>  Get dữ liệu từ server xuống 
posh => Tạo mới dữ liệu
put =>  thay đổi tất, cập nhật toàn bộ dữ liệu
patch 43:26 => Thay đổi 1 phần thôi, cập nhật 1 phần thôi
delete => Xóa 


54:37 Thực hành tách router

middle ware là 1 hàm callback
cors giống như danh bạ chặn vào blacklist từ tên miền gửi . Chỉ cho những request tên miền cho vào thì dc vào

Buổi 3:
Middle ware function( Req, res, next) 
restful api
mvc
authon vs authen (access Token vs refresh Token)
local storage, session, cookie (so sánh)
Jwt, token 
Solid (OOP)
ACID => transaction


--Note của em huy
-SSR vs CSR
-Router: bộ định tuyến

-import Expess
-Browser(GET)
-CRUD
-HTTP vs HTTPS

             HTTP
Client -----------------------> Server 
            call API


-restful API 


-các kiểu export

module.exports = Expess
module.exports = {a,b,c}

-status code


-HTTP Method:{
    GET: lấy data
    POST-PATCH: gửi data
    PUT: update
    DELETE: xóa
}

    sql           vs             nosql
    db            |               db
    table         |              collection 
    column        |               field
    row/record    |              document


-Bất đồng bộ:


-Cách xử lý: callback, promise, async/await


-LocalStorage, Session, Cookie

-MVC

-JWT, Token

-Middleware

-Authorization vs Authentication

==============
Buổi 4

-Authorization vs Authentication
Authorization: Xác thực người dùng đã truy cập vào chưa (đăng nhập)
authentication: Ủy quyền 
=> giống như lệnh bài của vua (token) 
đưa token cho server kiểm tra
-kiểm tra các quyền hạn phục vụ phân quyền

JWT => Token
Gồm 3 cái 
Header payload footer
có payload gửi lên thôi còn header và footer là do thư viện sử lý r

gửi userId và thời gian gửi lên 
private key sẽ đưa ra từ khóa định dạng chuẩn mã hóa 2 chiều
có thuật toán nma ta có thể config 
khi ta đăng nhập fb hoặc đt
1 token ở đt có thể dùng mt chỉ cần hợp lệ có tg


Local vs Cookie


buoi 5
Mongose 
find => Find by id
create
update 
delete

Database 
    tên (mảng) => collections;
        => hiểu dữ liệu nó là 1 danh sách
    danh sách => Documents
        => Từng bản ghi trong danh sách
            Hiểu về dữ liệu nó là 1 object
    dữ liệu => field
        Scima => Định nghĩa các trường của object(Document)


$math => thực hiện lọc tìm kiếm theo đk tương ứng
$lookup => hiểu kết nối conection với nhau như nào

mongo shell => cửa sổ dòng lệnh
mongoose
1: 36 mongo allas lưu trữ online

===buoi 5
3 cách truy nhập vào obj
obj.key => Truy nhập bt
obj['key'] => truy nhập nếu key là biến string
vd obj = { "address" : dddd}
obj[key] => Khi key là biên khác dc tạo ra từ vòng lặp


Nói về phân trang

buoi 6
AP wait list

mongo
database => collection => documents

CRUD 22:00
36:00 connect Database tu atlast

nhap số part sang string => k trặt trẽ
dùng joi dể validation 44

Update => findOneAndUpdate( điều kiện so sánh (id), {
    giá trị nào cần thay
    vd: name , price, quantity ,image
}, {new : true } lấy giá trị sau update)


MVC =>
Đầu tiên khai báo trong model Schema (Tạo sự chặt chẽ cho mongo)

Sau đó import vào Controller 
từ đó dùng cái schema đó tạo các hàm thêm (create), sửa(findOneAndUpdate), xóa

Sau đó ta import nó vào router 
để ứng với mỗi phương thức sẽ có hàm hợp lý
get post put delete

1:05 Cách khai báo mảng trong schema của model

validate với joi

Phân trang 1:31
Pagination
Phân trang ở bankend 
Vì có 1 lượng dữ liệu quá lớn ta phân trang fontend lấy lên 1 lần thì mất vài giây rất chậm => nghẽn băng thông 

Phân trang phía backend giải quyết được 2 vấn đề
Tốc độ truy vấn
Nghẽn băng thông

tối ưu hóa được không gian, tối ưu hóa được thời gian

1:46 rõ ct phân trang 

2:01 tổng kết lại bài
giải thích MVC hoạt động chi tiết

Đăng nhập , phân quyền
gửi mail 
Thống kê

chat với ng dùng

user product

sản phẩm đã xem watched theo user nó sẽ là mảng [ { date ...}] 
lọc theo 1 tiêu chí, lọc theo nhiều tiêu chí
quản lý số lượng
Trush data để quản lý số lượng 
Sale code

===================================
Buổi 7

bcryptjs => thư viện băm mật khẩu mã hóa


hashSync(mật khẩu của ta, salt)
const salt = bcrypjs.genSaltSync();
Hàm băm mật khẩu mã hóa
    => Hay dùng cho đăng kí

compareSync(mật khẩu cần kiểm tra, mật khẩu đã mã hóa);
nó dùng hàm của riêng nó để kiểm tra mật khẩu: 
    => Hay dùng cho đăng nhập


Luồng đăng kí
    Lấy username, password, name, age, role từ body
    kiểm tra đã có user này chưa => có r trả
    Băm mk
    Trả về 1 user mới với tất cả thông tin + mk ta vừa băm

Luồng đăng nhập
    Lấy username, password từ body
    kiểm tra đã có user này chưa => có chưa có trả
    kiểm tra mk với CompareSync
    phát hành 1 token
    return trả về 
