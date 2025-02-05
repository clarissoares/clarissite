document.getElementById('calculate').addEventListener('click', function() {
    const setA = document.getElementById('setA').value.split(',').map(item => parseInt(item.trim()));
    const setB = document.getElementById('setB').value.split(',').map(item => parseInt(item.trim()));
    const operation = document.getElementById('operation').value;
  
    let result;
  
    switch (operation) {
      case 'union':
        result = union(setA, setB);
        break;
      case 'intersection':
        result = intersection(setA, setB);
        break;
      case 'difference':
        result = difference(setA, setB);
        break;
      case 'symmetricDifference':
        result = symmetricDifference(setA, setB);
        break;
    }
  
    document.getElementById('result').innerText = `Resultado: {${result.join(', ')}}`;
  });
  
  // Funções de operações com conjuntos
  function union(A, B) {
    return [...new Set([...A, ...B])];
  }
  
  function intersection(A, B) {
    return A.filter(element => B.includes(element));
  }
  
  function difference(A, B) {
    return A.filter(element => !B.includes(element));
  }
  
  function symmetricDifference(A, B) {
    return [...new Set([...A.filter(x => !B.includes(x)), ...B.filter(x => !A.includes(x))])];
  }
  