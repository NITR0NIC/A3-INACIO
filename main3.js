function saveProject(n) {
  const title = document.getElementById(`title${n}`).value.trim();
  const desc = document.getElementById(`desc${n}`).value.trim();
  const img = document.getElementById(`img${n}`).value.trim();

  localStorage.setItem(`project${n}-title`, title);
  localStorage.setItem(`project${n}-desc`, desc);
  localStorage.setItem(`project${n}-img`, img);

  alert(`Projeto ${n} salvo com sucesso!`);
}

function resetProject(n) {
  localStorage.removeItem(`project${n}-title`);
  localStorage.removeItem(`project${n}-desc`);
  localStorage.removeItem(`project${n}-img`);

  alert(`Projeto ${n} resetado!`);
}

  