interface Props {}

const Greeting = (props: Props) => {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();

  let greeting = "";

  if (currentHour >= 5 && currentHour < 12) {
    greeting = "Buenos días";
  } else if (currentHour >= 13 && currentHour < 19) {
    greeting = "Buenas tardes";
  } else {
    greeting = "Buenas noches";
  }

  return <h1 className="text-3xl font-bold">{greeting}</h1>;
};

export default Greeting;
