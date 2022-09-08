function LaTeX(code) {
    return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
  }
  
  function opnLaTeX(code) {
    return `<img src="${LaTeX(code)}" style="height:40px">`;
  }
  
  let baseDePreguntas = [
    {
        pregunta: "",
        imagen: "https://i.ibb.co/nkKwqqH/pregunta1.png",
        respuesta: "100",
        distractores: ["200", "300", "50"],
    },
    {
      pregunta: "",
      imagen: "https://i.ibb.co/xXPqFRz/pregunta2.png",
      respuesta: "8",
      distractores: ["5", "2", "0"],
    },
    {
        pregunta: "",
      ayuda: "Lee con atención la pista:",
      ayudaImg: "https://i.ibb.co/xS3dTy4/pista3.png",
      imagen: "https://i.ibb.co/Kzxbv16/pregunta3.png",
      respuesta: "$9500",
      distractores: ["$10.200", "$8.550", "$7.600"],
     
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "https://i.ibb.co/0FFw0Vv/pista4.png",
        imagen: "https://i.ibb.co/PwwmF78/pregunta4.png",
        respuesta: "19",
        distractores: ["6", "16", "27"],
    },
    {
        pregunta: "",
        ayuda: "",
        ayudaImg: "",
        imagen: "https://i.ibb.co/SNDXZwm/pregunta5.png",
        respuesta: "$23.000",
        distractores: ["$12.000", "$13.000", "$21.000"],
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "https://i.ibb.co/Zc6ckFv/pista6.png",
        imagen: "https://i.ibb.co/4K41rNr/pregunta6.png",
        respuesta: "900",
        distractores: ["600", "650", "800"],
    },
    {
        pregunta: "",
        ayuda: "",
        ayudaImg: "",
        imagen: "https://i.ibb.co/yyQzkR1/pregunta7.png",
        respuesta: "17",
        distractores: ["15", "16", "18"],
    },
    {
        pregunta: "",
        ayuda: "",
        ayudaImg: "",
        imagen: "https://i.ibb.co/FhgYh7N/pregunta8.png",
        respuesta: "16",
        distractores: ["4", "8", "12"],
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista::",
        ayudaImg: "https://i.ibb.co/ncVt44j/pista9.png",
        imagen: "https://i.ibb.co/CzGF2YC/pregunta9.png",
        respuesta: "12",
        distractores: ["6", "8", "10"],
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "https://i.ibb.co/x2jLCJ9/pista10.png",
        imagen: "https://i.ibb.co/t8kfS22/pregunta10.png",
        respuesta: "$74.000",
        distractores: ["$75.000", "$80.000", "$60.000"],
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "https://i.ibb.co/D8NhgmS/pista11.png",
        imagen: "https://i.ibb.co/s6dHR0t/preguntas-juego-leonardo.png",
        respuesta: "La opcion c es la correcta",
        distractores: ["La opcion a es la correcta", "La opción b es la correcta", "La opcion d es la correcta"],
    },
    {
        pregunta: "En una cafetería se venden alimentos y bebidas. El siguiente aviso muestra los precios de algunos productos:",
        ayuda: "",
        ayudaImg: "",
        imagen: "https://i.ibb.co/G571t05/pregunta12.png",
        respuesta: "Gaseosa y torta",
        distractores: ["Jugo y arepa", "Arepa y torta", "Gaseosa y arepa"],
    },
    {
        pregunta: "",
        ayuda: "",
        ayudaImg: "",
        imagen: "https://i.ibb.co/CsgjcBn/pregunta13.png",
        respuesta: "750 libras",
        distractores: ["150 libras", "155 libras", "755 libras"],
    },
    {
        pregunta: "La imagen muestra la cantidad de anotaciones que hicieron 4 estudiantes en un partido de baloncesto:",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "https://i.ibb.co/W3QZ6vm/pista14.png",
        imagen: "https://i.ibb.co/4KPzPK6/pregunta-14.png",
        respuesta: "La tabla B",
        distractores: ["La tabla C", "La tabla A", "La tabla D"],
    },
    {
        pregunta: "",
        ayuda: "Lee con atención la pista:",
        ayudaImg: "",
        imagen: "https://i.ibb.co/0ccjRZ8/pregunta15.png",
        respuesta: "5.035",
        distractores: ["3.946", "3.935", "1.965"],
    },
  ];