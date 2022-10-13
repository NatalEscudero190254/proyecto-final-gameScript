import React from "react";
import {Card, CardActions, CardContent, CardMedia, Button,Typography,Checkbox} from "@mui/material";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector, } from "react-redux";
import { addWishes, removeWishes } from "../../redux/actions/videoGame";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


export default function MainCard({ name, description, background_image, price, id}) {
  const wishes = useSelector((state) => state.videogames.wishes)
  const [already, setAlreadyIs] = useState(false);
  const dispatch = useDispatch()
  console.log("alsdn")
  
  const addToWishes = () => {
      dispatch(
      addWishes({
        name:name,
        background_image:background_image
      })
    );
  
  }

  useEffect(() => {
		const find = wishes.some(el => el.name === name);
		if(find) setAlreadyIs(true)
		else setAlreadyIs(false)
	}, [wishes, id]);
      
// var descriptionFilter = "";
//   function descFilter() {   //Agrego una funcion que me acorte la descripcion, ya que me la trae muy larga de la API, en detalle se podra ver completa
//     descriptionFilter = description.slice(0, 100);
//   }
//   descFilter();

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="gameCard"
        width={190}
        height="140"
        image={background_image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="h6" color="text.primary">
          {price}
        </Typography>
      </CardContent>
      <CardActions>
        {
          already ? <Button size="small" onClick={() => {
            dispatch(removeWishes(name))
          }} ><DeleteIcon></DeleteIcon></Button>
          : <Checkbox 

          {...label} 
          icon={<FavoriteBorder />}
          onClick={() => {
            addToWishes();
          }} 
          
          size="small"
         
      ></Checkbox>
          
        }
        
        <Button size="small">Buy</Button>
        <NavLink to={`/detail/${id}`}>
          <Button variant="contained" size="small">More Detail</Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}

        