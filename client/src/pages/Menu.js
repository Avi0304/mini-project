import React from "react";
// import axios from "axios";
import NavBar from "../components/NavBar";
import "../style/Menu.css";
// import ItemList from "../components/ItemList";
// import { Col, Row } from "antd";

const Menu = () => {
  // const [itemsData, setitemData] = useState([]);

  // useEffect(() => {
  //   const getallitems = async () => {
  //     try {
  //       const { data } = await axios.get("/api/items/get-item");
  //       setitemData(data);
  //       console.log(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   getallitems();
  // }, []);

  return (
    <>
      <NavBar />
      <div className="menu-page">
        <header className="mt-5">
          <div className="container h-100 d-flex align-items-center justify-content-center">
            <h1 className="text-light">Menu</h1>
          </div>
        </header>
      </div>

      <div><h2 className="mt-3 mb-3 fw-bold text-black text-center text-uppercase large-text">Our Menu</h2></div>

      {/* <div>
      <Row>
            {itemsData.map(item => (
              <Col xs={24} lg={6} md={12} sm={6} key={item.id}>
                <ItemList item={item}/>
              </Col>
            ))}
          </Row>
      </div> */}
    </>
  );
};

export default Menu;
