interface Employee {
  name: string;
  age: number;
  salaryday: number;
}

const employees: Employee[] = [
  { name: 'Иван Петров', age: 30, salaryday: 15 },
  { name: 'Мария Иванова', age: 25, salaryday: 20 },
  { name: 'Алексей Смирнов', age: 35, salaryday: 10 },
];

interface Time {
  hour: number;
  minute: number;
  second: number;
}

const times: Time[] = [
  { hour: 10, minute: 30, second: 45 },
  { hour: 14, minute: 15, second: 20 },
  { hour: 23, minute: 59, second: 59 },
];

const country = {
  name: 'Россия',
  cities: ['Москва', 'Санкт-Петербург', 'Екатеринбург'],
};

interface Event {
  name: string;
  time: {
    start: string;
    finish: string;
  };
}

interface Position {
  name: string;
  salary: number;
}

interface Address {
  country: string;
  city: string;
}

interface EmployeeI {
  name: string;
  position: Position;
  addr: Address;
}

const regexArray: RegExp[] = [];
const promises: Promise<unknown>[] = [];

interface Worker {
  name: string;
  age: number;
  salary: number;
}

const team: Worker[] = [];
