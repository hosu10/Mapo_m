const data = [
    { name: "강갑석", engName: "Kang Kap Suk", phone: "010-9048-1013", email: "kangkapsuk@naver.com", address: "", other: "" },
    { name: "정장환", engName: "Jung Jang Hwan", phone: "010-3249-5953", email: "pleomax2580@naver.com", address: "", other: "" },
    { name: "김군자", engName: "Kim Gunja", phone: "010-4214-6219", email: "", address: "부산 수영구 망미동 805-8 3층", other: "" },
    // 나머지 데이터를 여기 추가
];

const cardList = document.getElementById('card-list');
const editForm = document.getElementById('edit-form');
let currentEditIndex = null;

function renderCards() {
    cardList.innerHTML = data.map((item, index) => `
        <div class="card" data-index="${index}">
            <p>이름: ${item.name}</p>
            <p>영문 이름: ${item.engName}</p>
            <p>전화번호: ${item.phone}</p>
            <p>이메일: ${item.email}</p>
            <p>주소: ${item.address}</p>
            <p>기타: ${item.other}</p>
            <button onclick="editCard(${index})">수정</button>
        </div>
    `).join('');
}

function editCard(index) {
    currentEditIndex = index;
    const item = data[index];
    editForm.name.value = item.name;
    editForm.phone.value = item.phone;
    editForm.email.value = item.email;
    editForm.address.value = item.address;
    editForm.other.value = item.other;
}

editForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (currentEditIndex !== null) {
        data[currentEditIndex] = {
            name: editForm.name.value,
            engName: data[currentEditIndex].engName,  // 영문 이름은 수정하지 않도록 고정
            phone: editForm.phone.value,
            email: editForm.email.value,
            address: editForm.address.value,
            other: editForm.other.value
        };
        renderCards();
        editForm.reset();
        currentEditIndex = null;
    }
});

renderCards();
