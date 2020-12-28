import React, { Component } from "react";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormLabel
} from "@material-ui/core";
import ToDoList from "./ToDoList";
import db from "./firebase";
import firebase from "firebase";

class ToDo extends Component {
  state = {
    todos: [],
    input: "",
    order: "desc",
  };

  //when the app loads fatch data from database

  //   componentDidMount
  //   useEffect ((
  //       //code
  //   ) => {},[] if it is empty it will load once. )

  // component did mount and componen did update ( only for input )
  //   useEffect ((
  //       //code
  //   ) => {},[input] it will load for the first time and also whenver input is chaged. )

  componentDidMount() {
    db.collection("todos")
      .orderBy("timestamp", this.state.order)
      .onSnapshot((snapshot) => {
        this.setState({ todos: snapshot.docs.map((doc) => doc.data().text) });
      });
  }
  componentDidUpdate() {
    db.collection("todos")
      .orderBy("timestamp", this.state.order)
      .onSnapshot((snapshot) => {
        this.setState({ todos: snapshot.docs.map((doc) => doc.data().text) });
      });
  }

  addToDo = (event) => {
    event.preventDefault();
    var { todos, input } = this.state;

    db.collection("todos").add({
      text: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    this.setState({ todos: [...todos, input], input: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addToDo}>
          <FormControl>
            <InputLabel>✔ Write a Todo</InputLabel>
            <Input
              type="text"
              value={this.state.input}
              onChange={(event) => this.setState({ input: event.target.value })}
            ></Input>
          </FormControl>
          <Button
            disabled={!this.state.input}
            variant="contained"
            color="primary"
            type="submit"
          >
            Add Todo
          </Button>
          <br></br>

          <FormControl component="fieldset">
            <FormLabel component="legend">Sort By</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={this.state.order}
              onChange={(event) => this.setState({ order: event.target.value })}
            >
              <FormControlLabel value="desc" control={<Radio />} label="Desc" />
              <FormControlLabel value="asc" control={<Radio />} label="Asc" />
            </RadioGroup>
          </FormControl>
          <ul>
            {this.state.todos.map((todo) => (
              <ToDoList text={todo} />
            ))}
          </ul>
        </form>
      </div>
    );
  }
}

export default ToDo;
