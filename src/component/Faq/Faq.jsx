import React from "react";
import { Accordion, Table } from "react-bootstrap";

const Faq = () => {
  return (
    <div className="container my-5">
      <h2 className="text-center mt-5 mb-3">
        Web Development Interview Questions:
      </h2>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>How does React Work?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>What is difference between props & state?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h4>React Props</h4>
            <p>
              Props are arguments which pass by react component. We can say that
              props are the data passed from a parent component into a child
              component.
            </p>
            <h4>React State</h4>
            <p>
              State is also Objects, But it is plain JavaScript Objects. where
              we store property values that belongs to the component.
            </p>
            <h4>Some difference between props & state is given bellow:</h4>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Props</th>
                  <th>State</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Props is Immutable.</td>
                  <td>State is Owned by its component.</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Props Has better performance</td>
                  <td>Its create Local scoped.</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Its can be passed to child components</td>
                  <td>Its can only be passed as props</td>
                </tr>
              </tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>Explain how useStae work?</h3>
          </Accordion.Header>
          <Accordion.Body>
            <h4>React useState()</h4>
            <p>
              React have many Hooks. oneof them is useState() The useState() is
              a built-in React Hook that allows you for having state variables
              in functional components. It should be used when the DOM has
              something that is dynamically manipulating/controlling.
            </p>
            <p>useState() return two thing,</p>
            <ol>
              <li>array</li>
              <li>function</li>
            </ol>
            <p>
              If you pass the initial state to this function, it returns a
              variable with the current state value. its should be used only
              inside functional components. useState is the way if we need an
              internal state and don't need to implement more complex logic such
              as lifecycle methods.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faq;
