import React from "react";

/*
    JSX => return block
    Fragment :  <> </>  => div ảo , ko hiện trên giao diện

*/

class MyComponent extends React.Component {
  // key:value
  // this đang dùng code bên trong class
  // state dùng để thay đổi trạng thái của component
  state = {
    name: "My Component",
    age: 18,
  };

  render() {
    return (
      // div đặc biểt ko hiện trên giao diện , ko có cái gì bộc ngoài
      <>
        <div className="first">
          Hello my component , my name is: {this.state.name}
        </div>

        <div className="second">My age is: {this.state.age}</div>
      </>
    );
  }
}
export default MyComponent;
