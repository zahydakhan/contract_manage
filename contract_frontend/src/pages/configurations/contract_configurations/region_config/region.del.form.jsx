import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { delRegionStart } from '../../../../redux/config/config.actions';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '1.5em',
        background: '#d90429'
    },
    title: {
        fontSize: '1.5em',
        lineHeight: '1em',
        fontWeight: '600',
    },
    subtitle: {
        marginTop: '1.5em',
        color: 'grey',
        fontSize: '1em'
    },


}));

const validationSchema = yup.object({

});

const RegiondelForm = ({ setOpen, row }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const submittion = async (row) => {
        await dispatch(delRegionStart(row));
        console.log('after deletion')
        setOpen(false)
    };


    const formik = useFormik({
        initialValues: {
            name: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            submittion(row)
        },
    });

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '1em' }}>
            <Grid item>
                <Grid container  justify='center' alignItems="center" style={{marginTop: "1em"}}>
                    <Grid item>
                    <ErrorOutlineIcon fontSize="large" color='error' style={{marginRight: "0.2em", fontSize: '3em'}}></ErrorOutlineIcon>
                    </Grid>
                    <Grid item>
                    <Typography className={classes.title} variant='h6'>Are You Sure?</Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
            <Grid item>
                <Typography className={classes.subtitle} variant='h6'>Click below to delete {row.name} Region permanently</Typography>
                <form onSubmit={formik.handleSubmit}>

                    <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                        Confirm Delete
                    </Button>
                </form>
            </Grid>


        </Grid>

    );
};

export default RegiondelForm;