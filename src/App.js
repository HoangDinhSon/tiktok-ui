import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Component } from "react";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "nhập tên đăng nhập",
      userPassword: "",
      userTextArea: "",
      gentleList: 1,
      rdLang:"vn",
      checkBoxStatus:true
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);

  }

  //lấy giá trị the3 input và update cho state 
  onHandleChange(event) {
    let target = event.target;
    let name = target.name
    let value = target.type==="checkbox"?target.checked : target.value;
    this.setState({
      [name]: value
    })

  }
  // lấy cái state ra xử lí 
  onHandleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-30">
        <div className="row">
          <div className="col-lg-8 ">
            <div className="panel panel-primary">
              <div className="panel-heading">
                <div className="panel-title">
                  Form
                </div>
              </div>
              <div className="panel-body">


                <form onSubmit={this.onHandleSubmit}>
                  <div className="form-group">
                    <label>Username: </label>
                    <input onChange={this.onHandleChange} type="text" placeholder="nhập giá trị vào " name="userName" /><br />
                    <label>Password: </label>
                    <input onChange={this.onHandleChange} type="password" placeholder="Nhập password " name="userPassword" />
                  </div>
                  <div className="form-group">
                    <textarea name="userTextArea" onChange={this.onHandleChange}>

                    </textarea>
                  </div>
                  <div>
                    <label htmfor="gentleList">giới tính </label>
                    <select
                      value={this.state.gentleList}
                      id="gentleList" name="gentleList"
                      onChange={this.onHandleChange}
                    >
                      <option value={1} >Nam</option>
                      <option value={0} >Nữ</option>
                    </select>
                  </div>
                  <label>ngôn ngữ </label>
                  <div className="radio" >
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="en"
                        onChange={this.onHandleChange}
                        checked ={this.state.rdLang==="en"}
                      />
                      Tiếng Anh
                    </label><br />
                    
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="vn"
                        onChange={this.onHandleChange}
                        checked ={this.state.rdLang==="vn"}
                      />

                      tiếng việt
                    </label><br />
                   
                    <label>
                      <input
                        type="radio"
                        name="rdLang"
                        value="fran"
                        onChange={this.onHandleChange}
                        checked ={this.state.rdLang==="fran"}
                      />

                      tiếng pháp
                    </label><br />
                    <div className="checkbox">
                    <label>
                    <input 
                    name="checkBoxStatus"
                    value={true}
                     type="checkbox"
                      onChange={this.onHandleChange}
                      checked={this.state.checkBoxStatus===true}
                     />
                    Trang thái
                    </label><br/>
                    <label>
                    <input type="checkbox"/>
                    son
                    </label><br/>
                    <label>
                    <input type="checkbox"/>
                    son
                    </label><br/>

                    </div>

                  </div>
                  <button type="submit" className="btn btn-primary">submit</button>&nbsp;
                  <button type="reset" className="btn btn-default">xóa trắng </button>
                </form>


              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;
