import Lista from "../components/Lista";
const Home = ({ cualquierProp }) => {
  return (
    <>
      <h1>Home</h1>
      <p>{cualquierProp}</p>
      <Lista
        personas={[
          { nombre: "Pedro", edad: 20 },
          { nombre: "María", edad: 20 },
          { nombre: "Luis", edad: 20 },
          { nombre: "Francisco", edad: 20 },
        ]}
      />
    </>
  );
};

export default Home;
