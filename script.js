//Task 1
let str = 'abcde';
console.log(str[0]);
console.log(str[3]);
console.log(str[2]);
console.log(str[1]);
console.log(str[4]);
console.log(str[5]);

// Task 2
let sec = 60;
let min = 60;
let hour = sec * min;
console.log(hour);
let day = 24;
day *= hour;
console.log(day);

// Task 3
var num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
++num;
--num;
console.log(num);

// Task 4
let num1 = 3;
/*alert(num1);*/
console.log(num1);

// Task 5
let a = 10;
let b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// Task 6
let c = 15;
let d = 2;
let result = c + d;
console.log(result);

// Task 7 Создайте переменные a=17 и b=10. Отнимите от a переменную b и результат присвойте переменной c. Затем создайте переменную d, присвойте ей значение 7. Сложите переменные c и d, а результат запишите в переменную result. Выведите на экран значение переменной result.//
let a1 = 17;
let b1 = 10;
let c1 = a1 - b1;
let d1 = 7;
let result1 = d1 + c1;
console.log(result1);

// Task 8
let str1 = "Привет, мир!!!";
console.log(str1);

// Task 9
let str2 = 'Привет';
let str3 = 'мир !';
let str4 = (`${str2} ${str3}`);
console.log(str4);
/*let str4 = str2 + " " + str3;
console.log(str4);*/

// Task 10
/*let name = prompt("Введите Ваше имя");
alert("Ваше имя: " +name); работает*/

// Task 11
/*let age = prompt('Сколько Вам лет?');
alert("Мне: " +age); работает*/

// Task 12
/*let number = prompt("Введите число");
alert("Ваше число: " +number**2); работает*/

// Task 13  Создайте переменную str и присвойте ей значение 'abcde'. Обращаясь к отдельным символам этой строки выведите на экран символ 'a', символ 'c', символ 'e'.
let  str10 = 'abcde';
console.log(str10[0]);
console.log(str10[2]);
console.log(str10[4]);
console.log(str10.length);

// Task 14 Создайте переменную num и присвойте ей значение '12345'. Найдите произведение (умножение) цифр этого числа.
let num5 = '12345';
console.log(num5[0] * num5[1] * num5[2] * num5[3] * num5[4]);

// Task 15 Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.
let secHour1 = 60 * 60;
let secDay1 = 24;
secDay1 *= secHour1;
let secMonth1 = 30;
secMonth1 *= secDay1;
console.log(secHour1);
console.log(secDay1);
console.log(secMonth1);

// Task 16 Создайте три переменные - час, минута, секунда. С их помощью выведите текущее время в формате 'час:минута:секунда'.
/*let h = prompt('Введите, который час');
let m = prompt('Введите, сколько минут');
let s = prompt('Введите, сколько секунд');
alert("Время: " +h + ":" + +m + ":" + +s);*/

// Task 17 Создайте переменную, присвойте ей число. Возведите это число в квадрат. Выведите его на экран.
/*let n = prompt('Введите Ваше число');
console.log(n**2);*/

// Task 18
var num23 = 47;
num23 += 7;
num23 -= 18;
num23 *= 10;
num23 /= 15;
console.log(num23);

// Task 19
var num33 = 10;
++num33;
++num33;
--num33;
console.log(num33);

// Task 20 Дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо вывести на экран фразу 'Привет, мир!'. 
let arr = ['Привет, ', 'мир', '!'];
console.log(`${arr[0]} ${arr[1]} ${arr[2]}`);
console.log(arr[0] + arr[1] + arr[2]);

// Task 21 Решим немного другую задачу: дан массив с элементами 'Привет, ', 'мир' и '!'. Необходимо записать в переменную text фразу 'Привет, мир!', а затем вывести на экран содержимое этой переменной. 
let arr1 = ['Привет, ', 'мир', '!'];
arr1[1] = 'Даша';
let text = (`${arr1[0]} ${arr1[1]} ${arr1[2]}`);
console.log(text);

// Task 22 Дан массив ['Привет, ', 'мир', '!']. Необходимо записать в нулевой элемент этого массива слово 'Пока, ' (то есть вместо слова 'Привет, ' будет 'Пока, '). 
let arr2 = ['Привет, ', 'мир', '!'];
arr2[0] = 'Пока,';
console.log(`${arr2[0]} ${arr2[1]} ${arr2[2]}`);

// Task 23 
let obj = {'Коля': 1000, 'Вася': 500, 'Петя': 200};
console.log(obj['Коля']);

// Task 24
let arr3 = [];
arr3[0] = 1;
arr3[1] = 2;
arr3[2] = 3;
arr3[3] = 4;
arr3[4] = 5;
console.log(arr3);

// Task 25
let arr4 = {
	'ru':['голубой', 'красный', 'зеленый'],
	'en':['blue', 'red', 'green'],
}
console.log(arr4['ru'][0]);

// Task 26
/*Создайте массив arr = ['a', 'b', 'c']. Выведите его на экран с помощью функции alert.*/
 let arr6 = ['a', 'b', 'c'];
 console.log(arr6[1]);
 console.log(arr6);

 // Task 27
 /*С помощью массива arr из предыдущего номера выведите на экран содержимое первого, второго и третьего элементов.*/
 let arr7 = arr6;
 console.log(arr7[0]);
 console.log(arr7[1]);
 console.log(arr7[2]);

 // Task 28
 /*Создайте массив arr = ['a', 'b', 'c', 'd'] и с его помощью выведите на экран строку 'a+b, c+d'*/
let arr8 = ['a', 'b', 'c', 'd'];
console.log(`"${arr8[0]} + ${arr8[1]}, ${arr8[2]} + ${arr8[3]}"`);

// Task 29
//Создайте массив arr с элементами 2, 5, 3, 9. Умножьте первый элемент массива на второй, а третий элемент на четвертый. Результаты сложите, присвойте переменной result. Выведите на экран значение этой переменной.
let arr9 = [2, 5, 3, 9];
let arr91 = arr9[0] * arr9[1];
let arr92 = arr9[2] * arr9[3];
let result93 = arr91 + arr92;
console.log(result93);

// Task 30
//Создайте объект obj. Выведите на экран элемент с ключом 'c' двумя способами: через квадратные скобки и как свойство объекта:
let obj28 = {a: 1, b: 2, c: 3};
console.log(obj28['c']);
console.log(obj28.c);

// Task 31
//Создайте массив заработных плат obj. Выведите на экран зарплату Пети и Коли
let obj29 = {Коля: '1000', Вася: '500', Петя: '200'};
obj29["Коля"] = Number('1000');
obj29["Вася"] = Number('500');
let obj30 = obj29['Коля'] + obj29['Вася'];
console.log(obj30);
console.log(`${obj29['Коля']} ${obj29['Петя']}`);

// Task 32
// Создайте объект с днями недели. Ключами в нем должны служить номера дней от начала недели (понедельник - первый и т.д.). Выведите на экран текущий день недели. 
let objectNew = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};
console.log(objectNew[1]);

// Task 33
// Пусть теперь номер дня недели хранится в переменной day, например там лежит число 3. Выведите день недели, соответствующий значению переменной day. 
let day3 = objectNew[3];
console.log(day3);

// Task 34
// Дан массив [ [1, 2, 3], [4, 5, 6], [7,8,9] ]. Выведите на экран цифру 4 из этого массива. 
let arr100 = [ [1, 2, 3], [4, 5, 6], [7,8,9] ];
console.log(arr100[1][0]);

// Task 35
// 	Дан объект {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}. Выведите с его помощью слово 'jQuery'. 
let obj25 =  {js:['jQuery', 'Angular'], php: 'hello', css: 'world'};
console.log(obj25['js'][0]);

// Task 36
// Создайте двухмерный массив. Первые два ключа - это 'ru' и 'en'. Пусть первый ключ содержит элемент, являющийся массивом названий дней недели по-русски, а второй - по-английски. Выведите с помощью этого массива понедельник по-русски и среду по английски (пусть понедельник - это нулевой день).
let obj26 = {'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восресенье'],
'en': ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']};
console.log(`${obj26['ru'][0]} ${obj26['en'][2]}`);
// Task 37
// Пусть теперь в переменной lang хранится язык (она принимает одно из значений или 'ru', или 'en' - либо то, либо то), а в переменной day - номер дня. Выведите словом день недели, соответствующий переменным lang и day. То есть: если, к примеру, lang = 'ru' и day = 3 - то выведем 'среда'. 
let lang = obj26['en'];
let days = lang;
console.log(days[0]);

 //
let a5 = -3;
if (a5>0) {
	console.log('True');
}
else {
	console.log('False');
}

// 
let a6 = 0;
if (a6 = 1) {
	console.log('True');
}
else {
	console.log('False');
}

// Task 38 Если переменная a равна 10, то выведите 'Верно', иначе выведите 'Неверно'. 
let v = 8;
if (v == 10) {
	console.log(true);
}
else {
	console.log(false);
}
// Task 39 	В переменной min лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую). 
let min1 = 25;
if (min1 > 0 && min1 == 15) {
	console.log('One quarter');
}
else if (min1 > 15 && min1 < 30) {
	console.log('Two quarter');
}
else if (min1 > 30 && min1 > 45) {
	console.log('Three quarter');
}
else {
	console.log('Four quarter');
}

// Task 40
let lang1 = 'en';
if (lang1 = 'ru') {
	arr25 = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восресенье'];
	
}
if (lang1 = 'en') {
	arr25 = ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
}
console.log(arr25);
// 
let lang2 = 'ru';
let arr26 = {'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Восресенье'], 
'en': ['Monday','Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']};
console.log(arr26[lang2]);

// Task 41 
//Если переменная a равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 
let ab = 1;
if (ab == 0) {
	console.log(true);
}
else{
	console.log(false);
}
let ab1 = 0;
if (ab1 == 0) {
	console.log(true);
}
else{
	console.log(false);
}
let ab2 = -3;
if (ab2 == 0) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 42
// Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 
let abc = 1;
if (abc > 0) {
	console.log(true);
}
else{
	console.log(false);
}
let abc1 = 0;
if (abc1 > 0) {
	console.log(true);
}
else{
	console.log(false);
}
abc2 = -3;
if (abc2 > 0) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 43
// Если переменная a меньше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.
let abcd = 1;
if (abcd < 0) {
	console.log(true);
}
else{
	console.log(false);
}
let abcd1 = 0;
if (abcd1 < 0) {
	console.log(true);
}
else{
	console.log(false);
}
let abcd2 = -3;
if (abcd2 < 0) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 44
// Если переменная a больше или равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 
let a22 = 1;
if (a22 >= 0) {
	console.log(true);
}
else{
	console.log(false);
}
let a23 = 0;
if (a23 >= 0) {
	console.log(true);
}
else{
	console.log(false);
}
let a24 = -3;
if (a24 >= 0) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 45
let bc = 1;
if (bc <= 0) {
	console.log(true);
}
else{
	console.log(false);
}
let cd = 0;
if (cd <= 0) {
	console.log(true);
}
else{
	console.log(false);
}
let df = 0;
if (df <= 0) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 46 Если переменная a не равна нулю, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3. 
let f = 1;
if (f != 0) {
	console.log(true);
}
else{
	console.log(false);
}
let p = 0;
if (p != 0) {
	console.log(true);
}
else{
	console.log(false);
}
let g = -3;
if (g != 0) {
	console.log(true);
}
else{
	console.log(false);
}

// Task 47
//Если переменная a равна 'test', то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 'test', 'тест', 3. 
let r = 'test';
if (r == 'test') {
	console.log(true);
}
else{
	console.log(false);
}
let r1 = 'test';
if (r == 'тест') {
	console.log(true);
}
else{
	console.log(false);
}
let r2 = 'test';
if (r == 3) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 48
// Если переменная a равна '1' и по значению и по типу, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном '1', 1, 3.
let t = '1';
if (t === '1') {
	console.log(true);
}
else{
	console.log(false);
}
let t1 = '1';
if (t1 === 1) {
	console.log(true);
}
else{
	console.log(false);
}
let t2 = '1';
if (t2 === 3) {
	console.log(true);
}
else{
	console.log(false);
}
// Task 49
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной. 
let test1 = true;
if(test1 = true) {
	console.log(true);
}
else {
	console.log(false);
}
let test2 = true;
if (test2) 
console.log(true);
else
console.log(false);

let test3 = false;
if(test3 == true) {
	console.log(true);
}
else {
	console.log(false);
}
let test4 = false;
if(test4)
console.log(true);
else{
console.log(false);
}
// Task 50
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при test, равном true, false. Напишите два варианта скрипта - с короткой записью и с длинной.
let tel = true;
if (tel != true) {
	console.log(true);
}
else {
	console.log(false);
}
let tel1 = false;
if (tel1 != true) {
	console.log(true);
}
else {
	console.log(false);
}

let tel2 = true;
if(!tel2)
console.log(true);
else 
console.log(false);

let tel3 = false;
if(!tel3)
console.log(true);
else
console.log(false);

// Task 51 Если переменная a больше нуля и меньше 5-ти, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 5, 0, -3, 2
let net = 5;
if (net > 0 && net < 5) {
	console.log(true);
}
else {
	console.log(false);
}
let net2 = 0;
if (net2 > 0 && net2 < 5) {
	console.log(true);
}
else {
	console.log(false);
}
let net3 = -3;
if (net3 > 0 && net3 < 5) {
	console.log(true);
}
else {
	console.log(false);
}
let net4 = 2;
if (net4 > 0 && net4 < 5) {
	console.log(true);
}
else {
	console.log(false);
}
// Task 52 Если переменная a равна нулю или равна двум, то прибавьте к ней 7, иначе поделите ее на 10. Выведите новое значение переменной на экран. Проверьте работу скрипта при a, равном 5, 0, -3, 2.
let dog = 5;
if (dog == 0 || dog == 2) {
	dog += 7;
}
else {
	dog /= 10;
}
console.log(dog);

let dog1 = 0;
if (dog1 == 0 || dog1 == 2) {
	dog1 += 7;
}
else {
	dog1 /= 10;
}
console.log(dog1);

let dog2 = -3;
if (dog2 == 0 || dog2 == 2) {
	dog2 += 7;
}
else {
	dog2 /= 10;
}
console.log(dog2);

let dog3 = 2;
if (dog3 == 0 || dog3 == 2) {
	dog3 += 7;
}
else {
	dog3 /= 10;
}
console.log(dog3);
// Task 53 Если переменная a равна или меньше 1, а переменная b больше или равна 3, то выведите сумму этих переменных, иначе выведите их разность (результат вычитания). Проверьте работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5. 
let cat1 = 1;
let cat2 = 3;
let cat3;
if (cat1 <= 1 && cat2 >= 3) {
	cat3 = cat1 + cat2;
}
else {
	cat3 = cat1 - cat2;
}
console.log(cat3);

let cat4 = 0;
let cat5 = 6;
let cat6;
if (cat4 <= 1 && cat5 >= 3) {
	cat6 = cat4 + cat5;
}
else {
	cat6 = cat4 - cat5;
}
console.log(cat6);

let cat7 = 3;
let cat8 = 5;
let cat9;
if (cat7 <=1 && cat8 >=3) {
	cat9 = cat7 + cat8;
}
else {
	cat9 = cat7 - cat8;
}
console.log(cat9);
// Если переменная a больше 2-х и меньше 11-ти, или переменная b больше или равна 6-ти и меньше 14-ти, то выведите 'Верно', в противном случае выведите 'Неверно'. 
let cow = 12;
let cow1 = 15;
if (cow > 2 && cow < 11 || cow1 >= 6 && cow1 < 14) {
	console.log(true);
}
else {
	console.log(false);
}
/*Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. 
let num28;
switch (num28) {
	case '1': 
	alert('Winter');
break;
	case '2': 
	alert('Spring');
break;
	case '3': 
	alert('Summer');
break;
	case '4': 
	alert('Autumn');
break;
}
// Task 6
let yourNumber = prompt("Введите Ваше число");
if (yourNumber == 1) {
	alert("Вы выиграли Авто");
}
else if (yourNumber == 2) {
	alert("Вы выиграли мотоцикл");
}
else if (yourNumber == 3) {
	alert("Вы выиграли велосипед");
}
else {
	alert("Вы ввели неверное число");
}*/
//  В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число (в первую, вторую или третью). 
let day1 = 30;
if (day1 > 1 && day1 < 10) {
	console.log("Первая декада");
}
else if (day1 > 11 && day1 < 20) {
	console.log("Вторая декада");
}
else if (day1 > 21 && day1 < 31) {
	console.log("Третья декада");
}
else {
	console.log("Вы ввели некорректное число");
}
// OR

let day2 = 25;
switch(day2) {
	case 10: 
	console.log("Первая декада");
	break;
	case 15: 
	console.log("Вторая декада");
	break;
	case 25: 
	console.log("Третья декада");
	break;
	default:
	console.log("Вы ввели некорректное число");
	break;
}

// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень). 
let month = 6;
if (month >= 1 && month < 2 && month == 12) {
	console.log("Зима");
}
else if (month >= 3 && month < 5) {
	console.log("Весна");
}
else if (month >= 6 && month < 8) {
	console.log("Лето");
}
else if (month >= 7 && month < 9) {
	console.log("Осень");
}
else {
	console.log("Некорректное число");
}
// 	Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'. 
let str25 = 'abcde';
if (str25[0] == b) {
	console.log(true);
}
else {
	console.log(false);
}
//  Дана строка с цифрами, например, '12345'. Проверьте, что первым символом этой строки является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'. 
let str75 = '12345';
if (str75[0] == 1) {
	console.log(true);
}
else {
	console.log(false);
}
let str76 = '12345';
if (str76[0] == 2) {
	console.log(true);
}
else {
	console.log('Вы ввели некорректное число');
}
let str77 = '12345';
if (str77[0] == 3) {
	console.log(true);
}
else {
	console.log('Вы ввели некорректное число');
}
// 	Дана строка из 3-х цифр. Найдите сумму этих цифр. То есть сложите как числа первый символ строки, второй и третий. 
let str69 = '595';
console.log(str69[0] + str69[1] + str69[2]);
// 	Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. 
let str85 = '125126';
let newStr = str85[0] + str85[1] + str85[2];
let newStr1 = str85[3] + str85[4] + str85[5];
if (newStr === newStr1) {
	console.log(true);
}
else {
	console.log(false);
}

