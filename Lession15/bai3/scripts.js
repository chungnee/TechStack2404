function login() {
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;
  if (!email || !password) {
    alert("Hãy nhập đầy đủ thông tin");
    return;
  }

  const user = users.find(
    (user) => user.email === email && user.password === password
  );
  if (user) {
    alert(`Xin chào ${user.first_name} ${user.last_name}`);
  } else {
    alert("Thông tin tài khoản không chính xác");
  }
}

function register() {
  const first_name = document.getElementById("registerFirstName").value;
  const last_name = document.getElementById("registerLastName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  if (!first_name || !last_name || !email || !password) {
    alert("Hãy nhập đầy đủ thông tin");
    return;
  }

  const existingUser = users.find((user) => user.email === email);
  if (existingUser) {
    alert("Email này đã có tài khoản");
  } else {
    const newUser = {
      id: users.length + 1,
      first_name,
      last_name,
      email,
      password,
    };
    users.push(newUser);
    alert("Đăng ký thành công");
  }
}

function listUsers() {
  const keyword = document.getElementById("listUsersKeyword").value;
  let result = "";
  const filteredUsers = users.filter(
    (user) =>
      user.first_name.includes(keyword) ||
      user.last_name.includes(keyword) ||
      user.email.includes(keyword)
  );
  filteredUsers.forEach((user) => {
    result += `ID: ${user.id}, Họ và tên: ${user.first_name} ${user.last_name}, Email: ${user.email}\n`;
  });
  alert(result);
}

function listPosts() {
  let result = "";
  posts.forEach((post) => {
    const user = users.find((user) => user.id === post.user_id);
    result += `ID: ${post.id}, Title: ${post.title}, Ngày tạo: ${post.created_at}, Họ và tên người tạo: ${user.first_name} ${user.last_name}\n`;
  });
  alert(result);
}

function viewPost() {
  const postId = parseInt(document.getElementById("viewPostId").value);
  const post = posts.find((post) => post.id === postId);
  if (post) {
    const user = users.find((user) => user.id === post.user_id);
    alert(
      `ID: ${post.id}\nTiêu đề: ${post.title}\nNội dung: ${post.content}\nLink ảnh: ${post.image}\nTên người tạo: ${user.first_name} ${user.last_name}\nNgày tạo: ${post.created_at}\nNgày sửa đổi: ${post.updated_at}`
    );
  } else {
    alert("Post không tồn tại");
  }
}

function searchPostsByUser() {
  const email = document.getElementById("searchPostsEmail").value;
  const user = users.find((user) => user.email === email);
  let result = "";
  if (user) {
    const userPosts = posts.filter((post) => post.user_id === user.id);
    userPosts.forEach((post) => {
      result += `ID: ${post.id}, Title: ${post.title}, Ngày tạo: ${post.created_at}\n`;
    });
    alert(result);
  } else {
    alert("User không tồn tại");
  }
}
