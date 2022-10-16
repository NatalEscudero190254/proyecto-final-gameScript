import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteFromCart, addOne, removeOne } from "../../redux/reducers/user";
import { ListItem, Avatar, Box, Typography, Divider, IconButton } from "@mui/material";
import { Close, Add, Remove } from '@mui/icons-material';

const styles = {
  container: {
    position: 'relative',
    display: "flex",
    justifyContent: "space-between",
    height: "max-content",
    gap: 2,
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0
  } 
};

export default function CartCard({ id, picture, name, price, cant, stock }) {
    const [ newCant, setNewCant ] = useState(cant)
    const dispatch = useDispatch()

    function handleDelete() {
        dispatch(deleteFromCart(id))
    }

    function handleAdd() {
        if(newCant === stock) {
					setNewCant(stock)
            alert('No hay mas unidades de este juego')
        } else {
					setNewCant(prev => ++prev)
						dispatch(addOne(id))
        }
    }

    function handleRemove(){
			if(newCant < 2) {
				setNewCant(1)
			} else {
				setNewCant(prev => --prev)
				dispatch(removeOne(id))
			}
        
    }

  return (
    <ListItem alignItems="flex-start" sx={styles.container}>
        <IconButton sx={styles.close} onClick={handleDelete}>
            <Close />
        </IconButton>
      <Avatar
        variant="square"
        src={picture}
        sx={{ width: 90, height: "auto" }}
      />
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"space-between"}
        width={"100%"}
        height={80}
      >
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Box display='flex' alignItems='center'>
            <IconButton onClick={handleRemove}>
                <Remove />
            </IconButton>
            <Typography>Cant: {cant}</Typography>
            <IconButton onClick={handleAdd}>
                <Add />
            </IconButton>
          </Box>
        </Box>
        <Typography textAlign={"end"}>${price || 0}</Typography>
        <Divider />
      </Box>
    </ListItem>
  );
}