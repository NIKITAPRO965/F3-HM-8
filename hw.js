// 1. Напиши скрипт, який об'єднує всі елементи массива в один рядок. Елементів може бути довільна кількість. Нехай елементи массива в рядку будут розділені комою.
// 👉 Спочатку через for
// 👉 Потім через join()

const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];
let string = '';
for (let i = 0; i < friends.length; i += 1) {
  string += friends[i];
  if (i < friends.length - 1) {
    string += ', ';
  }
}
console.log(string);


const string2 = friends.join(', ');
console.log(string2);





//Працюємо з колекцією карток в trello. Метод splice() (можна використати інші методи)

const cards = [
  'Карточка-1',
  'Карточка-2',
  'Карточка-3',
  'Карточка-4',
  'Карточка-5',
];
cards.splice(2, 1, `965`);
console.log(cards);





//Видалити
const findCards = 'Карточка-3';
const index = cards.indexOf(findCards);
cards.splice(index, 1, "234567890")
console.log(cards);



//Додати
cards.splice(cards.length, 0, 'Карточка-6');
console.log(cards);




//Оновити
const findCards2 = 'Карточка-4';
const index2 = cards.indexOf(findCards2);
cards.splice(index2, 1, 'Оновлена-Карточка')
console.log(cards);







































