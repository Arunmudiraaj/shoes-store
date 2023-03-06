import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useRef } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from "react-bootstrap";
import ProductsContext from "./Context/ProductsContext";
import { useContext } from "react";
import axios from 'axios'
const Input = () => {
  const productsCtx = useContext(ProductsContext)
  const name = useRef()
  const desc = useRef()
  const price = useRef()
  const l = useRef()
  const m = useRef()
  const s = useRef()
  const addItem = async()=>{
    const item = {
      name : name.current.value,
      desc : desc.current.value,
      price : price.current.value,
      l : l.current.value,
      m : m.current.value,
      s : s.current.value,
    }
    
    const serverItem = await axios.post(productsCtx.url, item)
      console.log("j")
      if (serverItem&& serverItem.data){
        productsCtx.addItem(serverItem.data)
        console.log(serverItem)
      }
    
    
  }
  return (
    <>
      <Table size="sm" className="my-2 m-1" striped bordered hover>
        <tbody>
          <tr>
            <td>
              <Form.Label htmlFor="name">Shoe Name</Form.Label>
              <Form.Control
                ref={name}
                type="text"
                id="name"
                aria-describedby="passwordHelpBlock"
              />
            </td>
            <td>
              <Form.Label htmlFor="description">Description</Form.Label>
              <Form.Control
                ref={desc}
                type="text"
                id="description"
                aria-describedby="passwordHelpBlock"
              />
            </td>
            <td className="">
              <Form.Label htmlFor="price">Price</Form.Label>
              <Form.Control
              ref={price}
                type="number"
                id="price"
                aria-describedby="passwordHelpBlock"
              />
            </td>

            <td className="text-center">
              <Form.Label>
                Quantity Available
              </Form.Label>
              <Container>
                <Row>
                  <Col>
                    <Form.Label htmlFor="L">
                        L
                    </Form.Label>
                    <Form.Control
                      ref={l}
                      type="number"
                      id="L"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col>
                  <Form.Label htmlFor="M">
                        M
                    </Form.Label>
                    <Form.Control
                      ref={m}
                      type="number"
                      id="M"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                  <Col>
                  <Form.Label className="" htmlFor="S">
                        S
                    </Form.Label>
                    <Form.Control
                      ref={s}
                      type="number"
                      id="S"
                      aria-describedby="passwordHelpBlock"
                    />
                  </Col>
                </Row>
              </Container>
            </td>
            <td className="align-middle">
                <Button onClick={addItem} className="" variant="success">Add</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default Input;
