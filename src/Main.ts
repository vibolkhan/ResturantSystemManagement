import { Customer } from "./HumanManager/Customer";
import { Gender } from "./HumanManager/Person";
import { Staff, StaffCetegory } from "./HumanManager/Staff/Staff";
import { Waiter } from "./HumanManager/Staff/Waiter";
import { Drink } from "./OrderMnager/Food/Drink";
import { DRINK, MEAL, DESSERT, VEGETARIAN, Category} from "./OrderMnager/Food/FoodItem";
import { Meal } from "./OrderMnager/Food/Meal";
import { Dessert } from "./OrderMnager/Food/Dessert";
import { Vegetarain } from "./OrderMnager/Food/Vegetarain";
import { FoodOrder } from "./OrderMnager/FoodOrder";
import { Order } from "./OrderMnager/Order";
import { Resturant } from "./Resturant";
import { Room } from "./RoomManager/Room";
import { Table } from "./RoomManager/Table";

let resturant = new Resturant('PNC Resturant','Phnom Penh');

// customers
let dana = new Customer(1);
let dyna = new Customer(2);
let dada = new Customer(3);
let dophy = new Customer(4);

// staffs
let casher1 = new Staff(3,"casher1",'0312253996',Gender.MALE,StaffCetegory.CASHER);
let cleaner1 = new Staff(4,"cleaner1",'07778881',Gender.FEMALE,StaffCetegory.CLEANER);
let waiter1 = new Waiter(5,"waiter1",'07778881',Gender.FEMALE);
let waiter2 = new Waiter(6,"waiter2",'07778881',Gender.FEMALE);
let chef = new Staff(7, "chef", '07778881',Gender.FEMALE,StaffCetegory.CHEF);

// add staff
resturant.hr.addStaff(cleaner1, waiter1, casher1, chef, waiter2);
resturant.hr.addCustomer(dyna, dada, dophy, dana);

// meal
let meal1 = new Meal(7, 2, MEAL.BROHERTREY);
let meal2 = new Meal(7, 2, MEAL.FISHAMOK);

// Vegetarain
let vegetarain1 = new Vegetarain(7, 2, VEGETARIAN.EGGSOUP);
let vegetarain2 = new Vegetarain(7, 2, VEGETARIAN.VEGGIESSOUP);

// sweet
let sweet1 = new Dessert(7, 6, DESSERT.BANANACAKE);
let sweet2 = new Dessert(7, 6, DESSERT.CAKE);

// drink
let drink1 = new Drink(7, 6, DRINK.COFFEE);
let drink2 = new Drink(7, 6, DRINK.GREENTEA);

resturant.order.menu.addFood(meal1, meal2, vegetarain1, vegetarain2, sweet1, sweet2, drink1, drink2);

// rooms
let room1 = new Room(1);
// tables
let table1 = new Table(1);
let table2 = new Table(2);
// add customer to table
table1.addCustomer(dada,dana);
table2.addCustomer(dyna,dophy);
table1.removeCustomers();
// add table to room
room1.addTable(table1,table2);
// add room to resturant
resturant.room.addRoom(room1);

// create orders and add food to order
let foodOrder1 = new FoodOrder(6, meal1);
let foodOrder2 = new FoodOrder(2, drink1);
let foodOrder3 = new FoodOrder(2, meal2);

// console.log(foodOrder1);
let order1 = new Order(1, table1, waiter1, new Date());
let order2 = new Order(2, table2, waiter1, new Date());
let order3 = new Order(3, table1, waiter2, new Date());

order1.addFood(foodOrder1, foodOrder2);
order2.addFood(foodOrder1, foodOrder3);
order3.addFood(foodOrder3, foodOrder1);



// add order to resturant
resturant.order.addOrder(order1);
resturant.order.addOrder(order2);
resturant.order.addOrder(order3);


// console.log(resturant.order.getOrder());
resturant.order.cancelOrder(order3)


// resturant.order.addOrder(order3);


// get food by cetegory

// console.log(resturant.order.getOrder());
// 