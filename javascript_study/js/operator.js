/**
 * 연산자
 * 
 * 산술 연산자
 * +, -, *, /, %, ***(제곱)
 * */ 
console.log(5**2); //25

/**
 * 증감 연산자
 * ++, --
 * 
 * 비교 연산자
 * <, <=, >, >=, ==, !=, ===,!==
 * javascript의 특징은 기본적으로 변수의 타입이 정해지지 않음
 */

console.log(1 == 1); //true
console.log(1 == "1"); // true 타입이 달라도 값이 같으면 true
console.log(1 === "1"); // false 타입까지 같이 검사
console.log(1 != "1"); // false
console.log(1 !== "2"); // true

/**
 * 논리 연산자
 * &&, ||
 * 
 * 단축 평가
 * 
 * 논리 자료 값 || anything 
 * 논리 자료 값 == true     => true;
 * 논리 자료 값 == false    => anthing;
 * 논리 자료 값 && anything
 * 논리 자료 값 === true   => anything
 * 논리 자료 값 === false    => false
 * 
 * null 병합 연산 - (왼쪽 값이 없으면 오른쪽 값을 사용하라.)
 * 논리 자료 값 ?? anthing2
 * 좌항 (anthing1) === null || 좌항(anything1) === undefined => 우항(anthing2)
 * 좌항 (anthing1) !== null || 좌항(anything1) !== undefined => 좌항(anthing2)
 *  */
console.log(1 === 1 || "이주원") // true
console.log(1 !== 1 || "이주원") // 이주원
console.log(1 === 1 && "이주원") // 이주원 
console.log(1 !== 1 && "이주원") // false

console.log(null ?? "이주워");
console.log("이주원" ?? "이주워");

/**
 * Not 연산
 * !, !!
 */
console.log("---------Not 연산 ----------");
console.log(!""); // true 비어있는 문자열은 false로 봄
console.log(!0); // true
console.log(!null); // true
console.log(!undefined); // true
console.log(![]); // 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 기본 true  
console.log(typeof []);
console.log(![].length); // 배열이 비었다.

var name = "";
if(!name) {
    console.log("이름이 비었습니다.")
}
if(!!name) {
    console.log("이름이 비어있지 않습니다.")
}