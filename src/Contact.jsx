import React,{useState} from "react";

const Contact = () => {

const [data,setData] = useState({
    fullname:'',
    email:'',
    number:'',
    message:''
    
});
const InputEvent = (event) =>{
    const {name, value} = event.target;
    setData((preVal) =>{
        return{
            ...preVal, //spreadOperator
            [name]:value,
        };
    });
    }

const formSubmit = () =>{
    
    alert(`My name is ${data.fullname}. My number is ${data.number}. & email is ${data.email}. Here is I want to say ${data.message} `)
    
}; 
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
              <form onSubmit={formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Full Name
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                name="fullname"
                value={data.fullname}
                onChange={InputEvent}
                placeholder="Enter Your Name"
                required="true"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Email Email
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                name="email"
                value={data.email}
                onChange={InputEvent}
                placeholder="Enter Your Email"
                required="true"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Contact
              </label>
              <input
                type="number"
                class="form-control"
                id="exampleFormControlInput1"
                name="number"
                value={data.number}
                onChange={InputEvent}
                placeholder="Enter Phone Number"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Message
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={data.message}
                onChange={InputEvent}
                placeholder="Want to say Something?"
                
              ></textarea>
            </div>
            <button type="submit" class="btn btn-outline-primary">Submit Form
            </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
