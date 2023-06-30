import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Container,
  Paper,
  styled,
  Typography,
  TextField,
  Button,
  Box,
  Stack,
} from "@mui/material";
import PostAddIcon from "@mui/icons-material/PostAdd";

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  display: "flex",
  flexDirection:"row",
}));

function App() {
  const [formData, setFormData] = useState([]);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    setFormData([...formData, data]);
    reset();
  };
  const handleDelete = (id) => {
    const newData = formData.filter((data, index) => {
      return index !== id;
    });
    setFormData(newData)
  };
  return (
    <Container
      maxWidth="lg"
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        height: "60vh",
      }}
    >
      <Paper
        elevation={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          margin: "7px 10px",
          justifyContent: "center",
          // backgroundColor: "transparent",
          background: "linear-gradient(rgba(118, 202, 212, 0.519) , #39b39d7c)",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{
            textAlign: "center",
            fontSize: "60px",
            fontFamily: "sans-serif",
          }}
        >
          Todo List <PostAddIcon fontSize="200px" />
        </Typography>
        <form
          style={{ display: "flex", margin: "20px", justifyContent: "center" }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <TextField
            id="content"
            placeholder="Write Something...."
            variant="standard"
            size="small"
            sx={{
              margin: "10px",
              width: "65%",
            }}
            {...register("content", { required: true })}
          />
          <Button
            type="submit"
            variant="text"
            size="small"
            sx={{ padding: "0px 25px" }}
          >
            Add
          </Button>
        </form>
        <Box>
          {formData.map((data, index) => (
            <Stack
            key={index}
            spacing={2}
            sx={{
              width: "100%",
              justifyContent: "center",
              marginTop: "10px",
              display: "flex",
              flexDirection: "row",
            }}
          >
            <Item
              sx={{
                display: "flex",
                justifyContent: "space-around",
                flexDirection: "row",
                backgroundColor: "transparent",
                cursor: "pointer",
                width:"50%"
              }}
            >
              <input
                type="checkbox"
                style={{ margin: "0px 20px", backgroundColor: "blue", width: "20px" }}
              />
              <Typography variant="h4">
                {data.content}
              </Typography>
  
              <Button
                type="button"
                variant="text"
                size="small"
                onClick={()=>handleDelete(index)}
                sx={{margin:"0px 20px"}}
              >
                Delete
              </Button>
            </Item>
          </Stack>
          ))}
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
