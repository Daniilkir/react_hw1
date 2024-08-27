import React from 'react';

const App = () => {
  const myName = "Даня";
  const welcomeText = "Welcome";
  const imageUrl = "https://blog.ferplast.com/wp-content/uploads/2015/08/tardar-sauce-grumpy-cat-gatto-pi%C3%B9-ricco-del-mondo-ferplast-979x652.jpg";
  const imageAlt = "Котик";
  const favSite = { name: "Wikipedia", url: "https://uk.wikipedia.org/wiki" };
  const number1 = 52;
  const number2 = 27;
  const sum = number1 + number2;
  const colors = ["Фіолетовий", "Синій", "Жовтий"];

  return (
    <div>
      <h1>{myName}</h1>
      <p>{welcomeText}</p>
      <img src={imageUrl} alt={imageAlt} />
      <p>Мій улюблений сайт: <a href={favSite.url}>{favSite.name}</a></p>
      <p>Сума: {sum}</p>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
