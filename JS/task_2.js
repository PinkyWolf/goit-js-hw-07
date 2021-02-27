// Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, 
// после чего вставит все li за одну операцию в список ul.ingredients. 
// Для создания DOM - узлов используй document.createElement().
const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ulList = document.querySelector('#ingredients')

const foodIngredients = ingredients.forEach(elem => {
  let items = document.createElement("li");
  items.innerHTML = elem;
  ulList.append(items); 
}); 



