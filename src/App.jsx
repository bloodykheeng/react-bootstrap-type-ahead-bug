import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "react-bootstrap-typeahead/css/Typeahead.css";
import { Form, Card } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "./App.css";

var options = [
  { id: 1, name: "John" },
  { id: 2, name: "Miles" },
  { id: 3, name: "Charles" },
  { id: 4, name: "Herbie" },
];

function App() {
  const [multiSelections, setMultiSelections] = useState([]);

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <h1 style={{ color: "black" }}>Bloody kheeng</h1>
      <Card>
        <Card.Body>
          <Form.Group style={{ marginTop: "20px" }}>
            <Form.Label>Multiple Selections</Form.Label>
            <Typeahead
              id="basic-typeahead-multiple"
              labelKey="name"
              multiple={true}
              onChange={setMultiSelections}
              options={options}
              placeholder="Choose several states..."
              selected={multiSelections}
            />
          </Form.Group>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
