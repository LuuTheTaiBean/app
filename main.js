window.addEventListener("DOMContentLoaded", () => {
  const row = document.querySelector(".row");
  const appIcons = Array.from(document.querySelectorAll(".app-icon"));

  const sortedIcons = appIcons.sort((a, b) => {
    const nameA = a.querySelector(".app-label").innerText.toLowerCase();
    const nameB = b.querySelector(".app-label").innerText.toLowerCase();
    return nameA.localeCompare(nameB);
  });

  // Xóa các khối cũ
  row.innerHTML = "";

  // Thêm lại theo thứ tự đã sắp xếp
  sortedIcons.forEach((icon) => row.appendChild(icon));
});
