// PetDetailsPage.tsx
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
    if (animals.length === 0) dispatch(getAnimals());
  }, [dispatch, animals.length]);

  const animal = useMemo(
    () => animals.find((a) => a.id === Number(id)),
    [animals, id],
  );

  if (!animal) return <div>Loading...</div>;

  return <PetDetails animal={animal} />;
};

export default PetDetailsPage;
