document.getElementById("indice-select").addEventListener("change", function() {
    const indice = this.value;
    const image = document.getElementById("map-image");
    const legendTitle = document.getElementById("legend-title");
    const description = document.getElementById("description");

    // Dicionário com imagens para cada índice
    const imagens = {
        "NDVI": "img/Mapas - 02.01.2025.png",
        "NDWI": "img/Mapas - 02.01.2025_2.png",
        "GNDVI": "img/Mapas - 02.01.2025_3.png",
        "NDRE": "img/Mapas - 02.01.2025_4.png"
    };

    // Dicionário com descrições para cada índice
    const descricoes = {
        "NDVI": "Os pontos com NDVI baixos indicam grande chance de pragas. Baseado na quantidade baixa, descarta-se a possibilidade de desnutrição da safra.",
        "NDWI": "O NDWI é usado para analisar a umidade do solo e da vegetação, auxiliando no monitoramento de estresse hídrico.",
        "GNDVI": "O GNDVI é útil para avaliar a atividade fotossintética das plantas e seu estado de vigor.",
        "NDRE": "O NDRE é um índice voltado para a detecção precoce da saúde da vegetação e deficiência de nutrientes."
    };

    // Alterar imagem e descrição conforme o índice selecionado
    image.src = imagens[indice];
    legendTitle.textContent = indice;
    description.textContent = descricoes[indice];
});
