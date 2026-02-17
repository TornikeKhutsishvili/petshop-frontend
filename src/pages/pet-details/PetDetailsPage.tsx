import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { animalsListSelector } from "../../store/animals/animals.slice";
import { useEffect, useMemo } from "react";
import PetDetails from "../../components/PetDetails";
import type { AppDispatch } from "../../store";
import { getAnimals } from "../../store/animals/animals.thunks";

const PetDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const animals = useSelector(animalsListSelector);

  useEffect(() => {
    dispatch(getAnimals());
  }, [dispatch]);

  const animal = useMemo(() => {
    if (!id) return null;
    return animals.find((a) => String(a.id) === id);
  }, [animals, id]);

  if (!animal) return <div>Loading...</div>;

  return <PetDetails animal={animal} />;
};

export default PetDetailsPage;
