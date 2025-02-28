console.clear();
// const x = 5;
// const y = 'labas';
// const o = true;
// const users = ['a', 'b'];
// function sum(a, b){
//     return a + b;
// }

// console.log(sum(7,5));
/** Tiesiog skaicius... */
const a: number = 5;
const b: string = 'ABC';
const c: boolean = true;

/**
 * Dvieju skaiciu sumavimas
 * 
 * @param a Pirmas skaicius.
 * @param b Antras skaicius.
 * @returns Suma.
 */
function sum(a: number, b: number) {
    return a + b;
}

const marks = [10, 2, 8, 4, 6];
marks.push(5);
marks.push(7, 9, 1, 3);

console.log(marks);

const words: string[] = [];
// const words = [] as string[];
// words.push(1);
words.push('1');
//words.push = (true);

console.log(words);

const jonas = {
    name: 'Jonas',
    age: 99,
    isMaried: true,
    favoriteColor: '',
};

console.log(jonas);

jonas.favoriteColor = 'red';
console.log(jonas);

type HouseDetails = {
    city: string;
    street: string;
    footage?: number;
    floors?: number;
    rooms?: number;
};

type Food = {
    name: string;
    size: 'small' | 'medium' | 'large';
};

type User = {
    name: string;
    age: number;
    isMarried: boolean;
    houseInfo: HouseDetails;
    favoriteFood: Food[];
};

const allUsers: User[] = [
    {
        name: 'Jonas',
        age: 99,
        isMarried: true,
        houseInfo: {
            city: 'Baisogala',
            street: 'Gedemino str.',
            footage: 500,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
            { name: 'Food-4', size: 'large' },
        ],
    },
    {
        name: 'Maryte',
        age: 88,
        isMarried: true,
        houseInfo: {
            city: 'Baisogala',
            street: 'Gedemino str.',
            footage: 500,
            floors: 3,
            rooms: 7,
        },
        favoriteFood: [
            { name: 'Food-1', size: 'small' },
            { name: 'Food-2', size: 'medium' },
            { name: 'Food-3', size: 'large' },
        ],
    },
];

const inactiveUser: User[] = [
    allUsers[0],
];

const activeUser: User[] = [
    allUsers[1],
];



