function redirectIfShorts() {
  const path = window.location.pathname;
  if (path.startsWith("/shorts/")) {
    const videoId = path.split("/shorts/")[1];
    const newUrl = `https://www.youtube.com/watch?v=${videoId}`;
    if (window.location.href !== newUrl) {
      console.log("Redirecionando de Shorts para Watch...");
      window.location.replace(newUrl);
    }
  }
}

// Executa na primeira carga
redirectIfShorts();

// Verifica o pathname a cada 500ms
let lastPath = window.location.pathname;

setInterval(() => {
  const currentPath = window.location.pathname;
  if (currentPath !== lastPath) {
    lastPath = currentPath;
    redirectIfShorts();
  }
}, 100);
