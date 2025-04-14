import { Personnage } from "./Personnage";

export interface ModaleProps {
  personnage: Personnage;
  onClose: () => void;
}
