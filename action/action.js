const mediaSets = {
    1: [
      { type: "video", src: "videos/Advocacia Barreto -  gancho 1.1.mp4" },
      { type: "video", src: "videos/ads 39.mp4" },
      { type: "video", src: "videos/ice cube.mp4" },
      { type: "video", src: "videos/Diferencial do gordon.mp4" },
      { type: "video", src: "videos/purple burrn - 2.mp4" },
      { type: "video", src: "videos/the who.mp4" },
      { type: "video", src: "videos/video teste - 2.mp4" },
      { type: "video", src: "videos/COMPRAS -  reflexo mascarado.mp4" }
    ],
    2: [
        { type: "video", src: "videos/Aplicativo gerador de conselhos (3).mp4" },
        { type: "video", src: "videos/Aplicativo gerador de conselhos (2).mp4" },
        { type: "video", src: "videos/Aplicativo gerador de conselhos (1).mp4" }
        
    ],
    3: [
      { type: "image", src: "images/Hertical Smooth.png" },
    ]
  };
/*=============== CARREGAR IMAGES E VIDEOS ===============*/
function carregaMedia(setNumber) {
    console.log("to entrandpo");
    const mediaGrid = document.getElementById("mediaGrid");
    mediaGrid.innerHTML = "";
    const mediaItems = mediaSets[setNumber];
  
    // Divide os itens em 4 colunas
    const columns = [[], [], [], []];
    mediaItems.forEach((media, index) => {
      columns[index % 4].push(media);
    });
  
    // Cria o layout das colunas
    columns.forEach((colItems) => {
      const column = document.createElement("div");
      column.className = "column";
      colItems.forEach((media) => {
        if (media.type === "image") {
          const img = document.createElement("img");
          img.src = media.src;
  
          // Adiciona evento de clique
          img.addEventListener("click", () => {
            if (img.classList.contains("expanded")) {
              img.classList.remove("expanded");
            } else {
              // Fecha qualquer imagem expandida
              document
                .querySelectorAll(".expanded")
                .forEach((el) => el.classList.remove("expanded"));
              img.classList.add("expanded");
            }
          });
  
          column.appendChild(img);
        } else if (media.type === "video") {
          const video = document.createElement("video");
          video.src = media.src;
          video.controls = true;
          column.appendChild(video);
        }
      });
      mediaGrid.appendChild(column);
    });
  }


  document.getElementById('exampleModal').addEventListener('hidden.bs.modal', function () {
    // Seleciona todos os vídeos dentro do modal
    const videos = document.querySelectorAll('#exampleModal video');
    videos.forEach(video => {
      video.pause(); // Pausa o vídeo
      video.currentTime = 0; // Reseta o tempo do vídeo para o início
    });
  });