const Lista = ({ personas }) => {
  return (
    <ul>
      {personas.map((persona, index) => {
        return (
          <li key={index}>
            {persona.nombre} - {persona.edad}
          </li>
        );
      })}
    </ul>
  );
};

export default Lista;
