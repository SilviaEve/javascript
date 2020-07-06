function mostraPares(x, y) {
    for (var i = x; i <= y; i++) {
      if (i % 2 === 0) {
        console.log(i);
      }
    }
  }
  
  console.log(mostraPares(1, 500));