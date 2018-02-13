const upperRow = "qwertyuiop[]";
const middleRow = "asdfghjkl;''";
const lowRow = "zxcvbnm,./";
const lengthUp = upperRow.length;
const lengthMid = middleRow.length;
const lengthLow = lowRow.length;
const symbFirstUp = upperRow.charAt(0);
const symbLastUp = upperRow.charAt(11);
const symbFirstMid = middleRow.charAt(0);
const symbLastMid = middleRow.charAt(11);
const symbFirstLow= lowRow.charAt(0);
const symbLastLow = lowRow.charAt(9);
const symbPositionFirst = upperRow.indexOf('[');
const symbPositionSecond = upperRow.indexOf(']');
const message = `Верхний ряд "${upperRow}",
                \nсредний ряд "${middleRow}",
                \nнижний ряд "${lowRow}",
                \nдлина верхнего ряда "${lengthUp}",
                \nдлина среднего ряда "${lengthMid}",
                \nдлина нижнего ряда "${lengthLow}"
                \nПервые и последние символы:
                \nверхний ряд "${symbFirstUp}","${symbLastUp}",
                \nсередний ряд "${symbFirstMid}","${symbLastMid}",
                \nнижний ряд "${symbFirstLow}","${symbLastLow}",
                \nПоиск позиции для символов:
                \n"[" - "${symbPositionFirst}",
                \n "]" - "${symbPositionSecond}"`;
console.log(message);
