import React from "react";
import { useState } from "react";
import axios from "axios";

function form() {
  const [name, setName] = useState("");


  const postData = {
    name,
  };

  const handleSubmit = (e) => {
    console.log("hiii");
    e.preventDefault();
      let formData = new FormData();
      formData.append("data", JSON.stringify(postData));
      console.log(postData, "postData");

      try {
        axios({
          method: "POST",
          url: "http://localhost:1337/api/showcases",
          data: formData,
        }).then((res) => {
          console.log(res, " res");
          alert("Done...");
        });
        setName('')
      } catch (error) {
        console.log(error);
      }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"  value={name}
              onChange={(e) => {
                setName(e.target.value);
              }} />
              <button>Submit</button>
      </form>
    </div>
  );
}

export default form;
