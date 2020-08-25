// Membuat element secara sintaksis jika element tidak terdapat pada DOM
if (!document.querySelector("logo-figure")) {
  const logoElement = document.createElement("logo-figure");

  logoElement.setAttribute("src", "./src/img/logo.jpg");
  logoElement.setAttribute("alt", "Profile Developer");

  document.body.appendChild(logoElement);
}
