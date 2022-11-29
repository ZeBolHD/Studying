let arr_main = document.getElementById("arr_main");
let arr = [];
for (let i = 0; i < 10; i++) {
  if (Math.random() > 0.5) {
    arr.push(Math.round(Math.random() * 10));
  } else {
    arr.push(-Math.round(Math.random() * 10));
  }
}
arr_main.innerHTML = `Массив: ${arr.join(", ")}`;

let arr_sum_hmtl = document.getElementById("arr_sum");
let arr_sum = 0;
arr.forEach((item) => {
  arr_sum += item;
});
arr_sum_hmtl.innerHTML = `Сумма элементов: ${arr_sum}`;

let arr_min = document.getElementById("arr_min");
arr_min.innerHTML = `Минимальный элемент: ${Math.min(...arr)}`;

let arr_min_second = arr;
let arr_min_second_html = document.getElementById("arr_min_second");
arr_min_second_html.innerHTML = `Второй по величине в массиве: ${
  arr_min_second.sort((a, b) => a - b)[1]
}`;

let arr_min_second_times = 0;
arr_min_second.forEach(
  (item) => item == arr_min_second[1] && arr_min_second_times++
);
let arr_min_second_times_html = document.getElementById("arr_min_second_times");
arr_min_second_times_html.innerHTML = `Это число встречается ${arr_min_second_times}`;

let arr_resistance = 0;
let arr_resistance_mul = 1;
let arr_resistance_div = 0;
arr.forEach((item) => {
  arr_resistance_mul *= item;
  arr_resistance_div += item;
});
arr_resistance = Math.round(arr_resistance_mul / arr_resistance_div);
let arr_resistance_html = document.getElementById("arr_resistance");
arr_resistance_html.innerHTML = `Сопротивление: ${arr_resistance}`;

let arr_mul_html = document.getElementById("arr_mul");
arr_mul_html.innerHTML = `Произведение элементов: ${arr.reduce(
  (a, b) => a * b
)}`;

let arr_sum_abs = document.getElementById("arr_sum_abs");
arr_sum_abs.innerHTML = `Сумма модулей: ${arr.reduce(
  (a, b) => Math.abs(a) + Math.abs(b)
)}`;
