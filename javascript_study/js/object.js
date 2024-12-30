/**
 * 객체
 */

const obj = {
    name: "이주원",
    age: 31,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

obj.print();

const obj2 = {
    name: "이주원",
    age: 31,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),
}

console.log(obj === obj2); //주소 비교
console.log(JSON.stringify(obj) === JSON.stringify(obj2)); //주소를 JSON= 문자열로 변환, 비교
console.log(typeof JSON.stringify(obj));

/**
 * object -> Json JSON.stringify(object)
 * Json -> object JSON.parse(json문자열)
 * User 객체 생성
 * username, password, name, email
 * 만들어서 json으로 바꿔서 출력
 * object로 바꿔서 출력
 */
const user = {
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    adress: {
        si: "부산시",
        gungo: "부산진구",
    },
    printUserInfo: () => console.log("사용자 정보 출력"), 
}
user.username = "juwon";
user.password = 1234;
user.name = "이주원";
user.email = "abc@naver.com";

const userJson = JSON.stringify(user); //JSON변환시 함수는 제외됨
console.log(user);
/**
 * {
  username: 'juwon',
  password: 1234,
  name: '이주원',
  email: 'abc@naver.com',
  hobby: [ '축구', '농구', '배구' ],
  adress: { si: '부산시', gungo: '부산진구' }
}
 */
console.log(userJson); // {"username":"juwon","password":1234,"name":"이주원","email":"abc@naver.com","hobby":["축구","농구","배구"],"adress":{"si":"부산시","gungo":"부산진구"}}
const convertUser = JSON.parse(userJson); //juwon
console.log(convertUser.username);

const student = {
    name: "이주원",
    age: 27,
    address: "부산 해운대구",
}

const key = "age";
const value = 32;

const student2 = {
    ...student,
    [key]: value,
}

console.log(student2);

