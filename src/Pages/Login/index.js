import Input from "../../Components/Input";
import Button from "../../Components/Button";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import atm from "../../Assets/Atm.png";
import bank from "../../Assets/bank.png";
import pay from "../../Assets/pay.png";
import { Link } from "react-router-dom";
import {
  Container,
  Container2,
  BgImgContainer,
  Form,
  FormContainer,
  CheckBox,
} from "./styles";
import Select from "../../Components/SelectInput";

const Index = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Container2>
        <Form>
          <FormContainer>
            <div className="formTitle">
              <span>Create an account</span>
              <p>Create an account to continue</p>
            </div>
            <form onSubmit={handleSubmit}>
              <Input
                label={"Email"}
                placeholder={"Topebanlosin@gmail.com"}
                name="Email"
              />
              <Input
                placeholder={"*****************"}
                name="password"
                type={"password"}
                label={"Password"}
              />
              <Input
                placeholder={"*****************"}
                icon
                name={"confirmPassword"}
                type={"password"}
                label={"Confirm password"}
              />
              <Select
                options={["United States Dollar (USD)", "Pounds Sterling"]}
              />
              <CheckBox>
                <input type={"checkbox"} />
                <label>I accept these terms and conditions</label>
              </CheckBox>
              <Link to={"/dashboard"}>
                <Button text={"Login"} />
              </Link>
            </form>
          </FormContainer>
        </Form>
      </Container2>
      <BgImgContainer>
        <div className="img-container">
          <div class="carousel-wrapper">
            <Carousel
              showThumbs={false}
              interval={3000}
              infiniteLoop
              useKeyboardArrows
              autoPlay
              showArrows={false}
              showStatus={false}
              thumbWidth={"300px"}
              width={"400px"}
            >
              <div>
                <img src={pay} alt="" />
                <div className="text-container">
                  <span>Pay with card</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo
                  </p>
                </div>
              </div>
              <div>
                <img src={bank} alt="" />
                <div className="text-container">
                  <span>Grow your funds</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo
                  </p>
                </div>
              </div>
              <div>
                <img className="crImg" src={atm} alt="" />
                <div className="text-container">
                  <span>Pay anywhere, anytime</span>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo
                  </p>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </BgImgContainer>
    </Container>
  );
};

export default Index;
