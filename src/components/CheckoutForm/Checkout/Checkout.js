import React, { useState, useEffect }  from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress, CssBaseline } from '@material-ui/core';
import { commerce } from '../../../lib/commerce'

import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'

import useStyles from './styles'
const steps = ['Shipping address', 'Payment details'];


const Checkout = ({ cart, order, onCaptureCheckout, error }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});
    const [isFinished, setIsFinished] = useState(false)
    const history = useHistory()

    useEffect(()=>{
        const generateToken = async()=>{
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart'});

                console.log(token);

                setCheckoutToken(token)
            } catch (error) {
                history.pushState('/')
                
            }
        }
        generateToken();

    }, [cart]);
    const nextStep =()=> setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep =()=> setActiveStep((prevActiveStep) => prevActiveStep - 1);

    

    const next = (data)=>{
        setShippingData(data);

            nextStep()
    }
    const timeout = () =>{
        setTimeout(() => {
            setIsFinished(true)
        }, 3000);
    }


    let Confirmation = ()=> order.customer ?(
        <>
            <div>
                <Typography variant='h5'>
                    Thank you for your purchase, 
                    {order.customer.firstname}  
                    {order.customer.lastname}
                </Typography>
                <Divider className={classes.divider} />
                <Typography variant='subtitle2'>
                    Order ref: {order.customer_reference}
                </Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant='outlined' tyoe='button'>
                Back to home
            </Button>
        </>
    ): isFinished?(
        <>
            <Typography variant='h5'>
                Thank you for your purchase
            </Typography>
            <Divider className={classes.divider} />
            <br />
            <button component={Link} to="/" variant='outlined' type='button'>
                Back to Home
            </button>
        </>
    ): (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    )
    if(error){
        <>
            <Typography variant='h5'>
               Error: {error}
            </Typography>
            <br />
            <Button component={Link} to="/" variant='outlined' tyoe='button'>
                Back to home
            </Button>
        </>
    }

    const Form = ()=> activeStep === 0
            ? <AddressForm  checkoutToken={checkoutToken} next={next} />
            :<PaymentForm shippingData = {shippingData} 
                checkoutToken={checkoutToken} 
                nextStep={nextStep}
                backStep={backStep}
                onCaptureCheckout={onCaptureCheckout}
                timeout={timeout}
            />
    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant='4' align='center'>
                        Checkout
                    </Typography>
                    <Stepper activeStep={activeStep} className={classes.Stepper}>
                        {steps.map((step)=>(
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length? <Confirmation />: checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout
