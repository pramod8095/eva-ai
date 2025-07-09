import React, { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import NET from "vanta/dist/vanta.clouds.min"; // you can use birds, waves, etc.
import "./index.css";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

const Details = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const techRef = useRef();
  const totalExpRef = useRef();

    const vantaRef = useRef(null);
    const [vantaEffect, setVantaEffect] = useState(null);
    useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        NET({
          el: vantaRef.current,
          THREE,
          color: 0xffffff,
          backgroundColor: 0x0d1117,
          points: 10,
          maxDistance: 20,
          spacing: 15,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  const submitHandler = () => {
    const details = {
      name: nameRef?.current?.value,
      email: emailRef?.current?.value,
      techStack: techRef?.current?.value,
      totalExprience: totalExpRef?.current?.value,
    };
    localStorage.setItem("details", JSON.stringify(details));
    sendData(details);
  };

  const sendData = async (details) => {
    console.log("in send data", details);
  };

  return (
    <div className="bg-video-wrap">
      <div ref={vantaRef} className="vanta-bg" style={{ minHeight: "100vh" }}>
        
        <div className="overlay"></div>
        <div className="card-content">
          <Card sx={{ opacity: "80%", width: "100%" }}>
            <CardContent>
              <Typography variant="h5" component="div">
                💡 Interview Setup
              </Typography>
              <br />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="dense"
                inputRef={emailRef}
              />
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                margin="dense"
                inputRef={nameRef}
              />
              <TextField
                fullWidth
                label="Tech Stack"
                variant="outlined"
                margin="dense"
                inputRef={techRef}
              />
              <FormControl fullWidth margin="dense">
                <InputLabel>Year of Exp.</InputLabel>
                <Select
                  label="Year of Exp."
                  inputRef={totalExpRef}
                  defaultValue={1}
                >
                  {[...Array(9)].map((_, i) => (
                    <MenuItem key={i} value={i + 1}>
                      {i + 1}
                    </MenuItem>
                  ))}
                  <MenuItem value={11}>{">10"}</MenuItem>
                </Select>
              </FormControl>
              <Button
                size="large"
                variant="contained"
                sx={{ mt: 2, bornerRadius: "20px" }}
                onClick={submitHandler}
              >
                Begin
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Details;
