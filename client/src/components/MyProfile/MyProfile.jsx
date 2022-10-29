import React, { useEffect, useState } from 'react';
import {
	Container,
	FormControl,
	Typography,
	Grid,
	TextField,
	FormControlLabel,
	Switch,
	Button,
	Stack,
	Badge,
	Avatar,
	IconButton,
} from '@mui/material';
import { SaveAs, PhotoCamera } from '@mui/icons-material';
import { useSelector, useDispatch } from 'react-redux';

const MyProfile = () => {
	// const { user } = useSelector((state) => state.user);

	const [values, setValues] = useState({
		firstName: 'DAVID',
		lastName: 'HUARICANCHA',
		country: 'PERU',
		province: 'MADRE DE DIOS',
		city: 'PUERTO MALDONADO',
		address: 'BARRIO NUEVO PSJ 2 MZ 1 LT 1',
		cardHolder: 'DAVID JESUS LOPEZ ALIAGA',
		cardNumber: '4242 4242 4242 4242',
	});

	const [editProfile, setEditProfile] = useState(false);

	useEffect(() => {}, []);

	return (
		<Container
			maxWidth="sm"
			sx={{ mb: 5, paddingTop: '40px' }}
			component={Grid}
			spacing={2}
		>
			<FormControl>
				<Typography variant="h6" gutterBottom>
					Profile Settings
				</Typography>
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="firstName"
							name="firstName"
							label="First name"
							fullWidth
							autoComplete="given-name"
							variant="standard"
							value={values.firstName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="lastName"
							name="lastName"
							label="Last name"
							fullWidth
							autoComplete="family-name"
							variant="standard"
							value={values.lastName}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							required
							id="country"
							name="country"
							label="Country"
							fullWidth
							autoComplete="shipping country"
							variant="standard"
							value={values.country}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<TextField
							id="state"
							name="state"
							label="State/Province/Region"
							fullWidth
							variant="standard"
							value={values.province}
						/>
					</Grid>
					<Grid item xs={12} sm={12}>
						<TextField
							required
							id="city"
							name="city"
							label="City"
							fullWidth
							autoComplete="shipping address-level2"
							variant="standard"
							value={values.city}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="address1"
							name="address1"
							label="Address"
							fullWidth
							autoComplete="shipping address-line1"
							variant="standard"
							value={values.address}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="cardName"
							name="cardHolder"
							label="Card holder"
							fullWidth
							autoComplete="cc-name"
							variant="standard"
							value={values.cardHolder}
						/>
					</Grid>
					<Grid item xs={12}>
						<TextField
							required
							id="numberCard"
							name="numberCard"
							label="Card number"
							fullWidth
							autoComplete="cc-number"
							variant="standard"
							value={values.cardNumber}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<FormControlLabel
							control={<Switch defaultChecked />}
							label="Edit profile"
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Button variant="contained" endIcon={<SaveAs />}>
							Save
						</Button>
					</Grid>
				</Grid>
			</FormControl>
			<Stack direction="row" spacing={1}>
				<Badge
					overlap="circular"
					anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
					badgeContent={
						<IconButton
							color="primary"
							aria-label="upload picture"
							component="label"
						>
							<input hidden accept="image/*" type="file" />
							<PhotoCamera sx={{ width: 100, height: 100 }} />
						</IconButton>
					}
				>
					<Avatar
						sx={{ width: 400, height: 400 }}
						alt="Travis Howard"
						src="https://learn.microsoft.com/en-us/answers/storage/attachments/209536-360-f-364211147-1qglvxv1tcq0ohz3fawufrtonzz8nq3e.jpg"
					/>
				</Badge>
			</Stack>
		</Container>
	);
};

export default MyProfile;
