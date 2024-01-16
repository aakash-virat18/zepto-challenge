import { PropstypeMenu } from "./Types";

const Menu = ({ data, selectedHandler }: PropstypeMenu) => {
  const renderedList = data.map((person) => {
    return (
      <div
        className="flex gap-6 items-center h-8 w-[100%] hover:bg-[#E8E8E8] hover:cursor-pointer pl-2"
        onClick={() => {
          console.log(person);
          selectedHandler(person);
        }}
        key={person.email}
      >
        <img src={person.photo} className="h-7 w-7 rounded-full" />
        <p>{person.name}</p>
        <p className="text-[#7C7C7C] text-sm">{person.email}</p>
      </div>
    );
  });

  return (
    <div className="absolute shadow-xl border w-[350px] mt-5 max-h-32 overflow-scroll">
      {renderedList}
    </div>
  );
};

export default Menu;
