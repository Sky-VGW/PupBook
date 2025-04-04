import { dogs, type Dog } from '../data/dogs';

export function useDogs() {
  const getAllDogs = (): Dog[] => dogs;
  
  const getDogById = (id: number): Dog | undefined => {
    return dogs.find(dog => dog.id === id);
  };

  return {
    getAllDogs,
    getDogById,
  };
} 