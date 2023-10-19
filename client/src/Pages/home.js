import Card from "react-bootstrap/Card";


const a = [1,2,3,4,5,6]


const Home = () => {
  return (
    <>
      Idiot
      {a.map((item) => (
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              array wala item number yeh he {item}.
            </Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Home;
