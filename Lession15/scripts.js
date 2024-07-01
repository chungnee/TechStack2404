let dowload = new Promise((resolve, reject) => {
  console.log("bat dau tai xuong");
  setTimeout(function () {
    let status = "success";
    if (status === "success") {
      resolve("file da duoc tai xuong thanh cong");
    } else {
      reject("loi khi tai xuong file");
    }
  }, 5000);
});
dowload
  .then(function (message) {
    console.log(message);
  })
  .catch(function (error) {
    console.log(error);
  });
