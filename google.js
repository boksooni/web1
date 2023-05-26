const color = document.getElementById("colorBtn")

function changeBg() {
  console.log("Ss")
  // document.body.style.backgroundColor = 
  const colors = ['mistyrose', 'lightpink', 'salmon']
  const colorIndex = parseInt(Math.random()*colors.length); // 순서를 랜덤으로 만들기
  document.body.style.backgroundColor = colors[colorIndex]; // 랜덤으로 배열 안의 컬러를 선택한다.
}

color.addEventListener("click", changeBg)


const signIn = document.getElementById("logInBtn")
const signInCmt = document.getElementById("logInCmt")

function logIn() {
  console.log("login")
  // signIn.innerHTML = "로그아웃"
  // signInCmt.innerHTML = "누구님 반가워요"
  if (signIn.innerHTML === "로그인"){
    let a = prompt("로그인을 해주세요")
    console.log(a)
    signIn.innerHTML = "로그아웃"
    signInCmt.innerHTML = `${a}님 반가워요`
  } else if (signIn.innerHTML === "로그아웃") {
    signIn.innerHTML = "로그인"
    signInCmt.innerHTML = ""
  }

}

signIn.addEventListener("click", logIn)