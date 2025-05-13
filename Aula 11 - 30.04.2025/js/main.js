window.addEventListener("load", () => {
    const elVideo = document.getElementById("elVideo");
    const elErro = document.getElementById("elErros");
    const btnCapturar = document.getElementById("btnCapturar");
    const btnDownload = document.getElementById("btnDownload");
    const canvas = document.getElementById("canvas")

    navigator.mediaDevices
        .getUserMedia({video:true, audio:false})
        .then((stream) => {
            elVideo.srcObject = stream;
            elVideo.play();
        })
        .catch((err) => {
            elErro.innerText = err;
        });
    
    btnCapturar.addEventListener('click',() => {
        const contexto = canvas.getContext('2d');
        canvas.width = elVideo.videoWidth;
        canvas.height = elVideo.videoHeight;
        contexto.drawImage(elVideo,0,0,canvas.width,canvas.height);

        imagemURL = canvas.toDataURL('image/png')

    })
    
    btnDownload.addEventListener('click', () => {
        const linkIMG = document.createElement("a");
        linkIMG.href = imagemURL;
        linkIMG.download = 'captura.png';
        linkIMG.click();
    })
})


