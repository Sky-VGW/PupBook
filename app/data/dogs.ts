export interface Dog {
  id: number;
  name: string;
  breed: string[];
  activityLevel: number;
  neuteredStatus: boolean;
}

export const dogs: Dog[] = [
  {
    id: 1,
    name: 'Ollie',
    breed: ['collie', 'border collie'],
    activityLevel: 10,
    neuteredStatus: true,
  },
  {
    id: 2,
    name: 'Spot',
    breed: ['irish wolfhound', 'chihuahua', 'lab'],
    activityLevel: 7,
    neuteredStatus: false,
  },
  {
    id: 3,
    name: 'Max',
    breed: ['german shepherd', 'rottweiler'],
    activityLevel: 8,
    neuteredStatus: true,
  },
  {
    id: 4,
    name: 'Napoleon',
    breed: ['pug', 'french bulldog'],
    activityLevel: 2,
    neuteredStatus: false,
  }
]; 