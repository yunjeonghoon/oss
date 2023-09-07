const checkAll = document.querySelector("#checkall"); // 모두 동의 체크박스
const checkBox = document.querySelectorAll(".checkbox");
const agreeButton = document.querySelector("#checkbtn");// 모두 동의 제외 체크박스
 // 확인 버튼

// 체크박스의 체크 여부 임시 저장 공간
const agreements = {
    first: false,// 첫번째 체크박스
    second: false, // 두번째 체크박스
    third: false,
	fourth: false,// 세번째 체크박스
};

// '모두 동의' 체크박스가 체크가 되면 모든 체크박스의  체크를 하고, '모두 동의'
// 체크박스가 해제되면 모든 체크 박스의 체크상태를 해제
checkAll.addEventListener('click', (e) => {
    // checkbox의 체크 상태를 확인하기 위함, true or false 값 반환
    const { checked } = e.target; // const checked = e.target.checked 와 같다.
    if (checked) {
        checkBox.forEach((item) => {
            item.checked = true;
            agreements[item.id] = true;
            item.parentNode.classList.add('active');
        });
    } else {
        checkBox.forEach((item) => {
            item.checked = false;
            agreements[item.id] = false;
            item.parentNode.classList.remove('active');
        });
    }
    toggleSubmitButoon();
});

// 필수동의 체크 여부를 확인한 뒤 버튼을 활성화 , 비활성화 동작 함수
function toggleSubmitButoon() {
    const {first, second, third, fourth} = agreements;
    if (first && second && third && fourth) {
        agreeButton.disabled = false; // 버튼 활성화
    } else {
        agreeButton.disabled = true; // 버튼 비활성화
    };
};

checkBox.forEach((item) => item.addEventListener('input', toggleCheckbox));

function toggleCheckbox(e) {
    const { checked , id } = e.target;
    agreements[id] = checked;
    this.parentNode.classList.toggle('active');
    checkAllStatus();
    toggleSubmitButoon();
}

function checkAllStatus() {
    const {first, second, third, fourth} = agreements;
    if (first && second && third && fourth) {
      checkAll.checked = true;
    } else {
      checkAll.checked = false;
    }
}
 document.addEventListener('DOMContentLoaded', function() {
  const agree = document.getElementById("checkbtn");
	 
	 agree.addEventListener('click', function() {
		 alert("회원가입을 완료했습니다!");
    window.open('startup.html', '_self');
  });
});