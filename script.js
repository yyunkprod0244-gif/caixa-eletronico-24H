let hiddenBalance = false;

function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  const navItems = document.querySelectorAll(".nav-item");

  pages.forEach(page => {
    page.classList.remove("active-page");
  });

  navItems.forEach(item => {
    item.classList.remove("active");
  });

  const selectedPage = document.getElementById(pageId);
  const selectedButton = document.querySelector(
    `.nav-item[data-page="${pageId}"]`
  );

  if (selectedPage) {
    selectedPage.classList.add("active-page");
  }

  if (selectedButton) {
    selectedButton.classList.add("active");
  }

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    const pageId = item.dataset.page;
    showPage(pageId);
  });
});

function toggleBalance() {
  const balance = document.getElementById("balanceValue");

  if (!hiddenBalance) {
    balance.textContent = "R$ ••••••";
    hiddenBalance = true;
  } else {
    balance.textContent = "R$ 24.680,90";
    hiddenBalance = false;
  }
}

function makeTransfer(event) {
  event.preventDefault();

  const recipient = document.getElementById("recipient").value;
  const amount = document.getElementById("transferAmount").value;

  if (!recipient || !amount) {
    showToast("Preencha todos os campos.");
    return;
  }

  event.target.reset();

  showToast("Transferência simulada com sucesso.");
}

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

document.querySelectorAll(".language-selector button").forEach(button => {
  button.addEventListener("click", () => {
    document
      .querySelectorAll(".language-selector button")
      .forEach(item => item.classList.remove("active"));

    button.classList.add("active");

    if (button.textContent === "EN") {
      showToast("English version selected.");
    } else {
      showToast("Versão em português selecionada.");
    }
  });
});
