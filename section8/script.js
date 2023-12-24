console.log('158. Statystyki tekstu')

let textArea = document.getElementsByTagName('textarea')[0];

textArea.addEventListener('input',onChange)
function onChange(e){
  const data = textArea.value;
  const numCharacters = data.length;

  document.getElementById('num-characters').innerHTML = numCharacters

}





//////////////////////////////////////////////////////
const SYGNATURE_LIST = ['KM', 'GKM', 'KMS', 'KMP'];
// Функция сравнения для сортировки
const sortData = (a, b) => {
  // Нормализация и извлечение частей данных
  const parseData = (data) => {
      const [signature, number] = data.toUpperCase().split(' ');
      console.log(signature,'number', number)
      return {
          signature: signature,
          numericValue: parseInt(number.split('/')[0], 10)
      };
  };
console.log('parseData',parseData(a))
  const parsedA = parseData(a);
  const parsedB = parseData(b);
  console.log(parsedA,parsedB)
  // Сначала сравниваем по сигнатурам
  const signatureOrderA = SYGNATURE_LIST.indexOf(parsedA.signature);
  const signatureOrderB = SYGNATURE_LIST.indexOf(parsedB.signature);

  // Если сигнатуры равны, сравниваем по числовому значен
  console.log(signatureOrderA)
  if (signatureOrderA === signatureOrderB) {
      return parsedA.numericValue - parsedB.numericValue;
  }

  return signatureOrderA - signatureOrderB;
};

// Тестовые данные
const backendData = ['Kms 10/23', 'Kms 3/33', 'Kmp 100/23', 'Kms 10/23', 'Gkm 10/23'];

// Сортировка данных
const sortedData = backendData.sort(sortData);

console.log(sortedData);