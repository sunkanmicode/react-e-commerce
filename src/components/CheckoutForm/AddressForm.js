import React, { uesState } from 'react'
import { Inputlabel, Select, MenuItem, Button, Grid, Typography } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { commerce } from '../../lib/commerce';

import FormInput from './CustomTextField'

const AddressForm = () => {
    // const [shippingCountries, setShippingCountries] = useState([]);
    // const [shippingCountry, setShippingCountry] = useState('');
    // const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
    // const [shippingSubdivision, setShippingSubdivision] = useState('');
    // const [shippingOptions, setShippingOptions] = useState([]);
    // const [shippingOption, setShippingOption] = useState('');
    const methods = useForm();


    // const fetchShippingCountries = async (checkoutTokenId)=>{
    //     const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);
    //     setShippingCountries(countries)
    // }

    return (
        <>
        <Typography variant='h6' gutterBottom>Shipping Address</Typography>
        <FormProvider { ...methods}>
            <form onSubmit=''>
                <Grid container spacing={3}>
                    <FormInput required name ='firstName' label ='First name' />
                    <FormInput required name ='lasttName' label ='Last name' /> 
                    <FormInput required name ='address' label ='Address' />
                    <FormInput required name ='email' label ='Email' />
                    <FormInput required name ='city' label ='City' />
                    <FormInput required name ='zip' label ='ZIP' />
                    {/* <Grid item xs={12} sm={6}>
                        <Inputlabel>Shipping Country</Inputlabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Inputlabel>Shipping Subdivision</Inputlabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid><Grid item xs={12} sm={6}>
                        <Inputlabel>Shipping options</Inputlabel>
                        <Select value={} fullWidth onChange={}>
                            <MenuItem key={} value={}>
                                Select me
                            </MenuItem>
                        </Select>
                    </Grid> */}
                </Grid>
            </form>

        </FormProvider>
            
        </>
    )
}

export default AddressForm
