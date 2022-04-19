import { DevItem } from "./DevItem";

export const DevList = ({ devs }) => {
  return (
    <div className="users">
      {devs.map((dev) => (
        <DevItem key={dev.id} dev={dev} />
      ))}
    </div>
  );
};
