import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { addTAGSStart } from '../../../../redux/config_tags/config_tags.actions';

const useStyles = makeStyles((theme) => ({
    btn: {
        marginTop: '1.5em'
    },
    title: {
        marginTop: '1em'
    },

}));

const validationSchema = yup.object({
    name: yup
        .string('Tag')
        .required('Tag is required'),
});

const TagAddForm = ({ setOpen }) => {
    const [submitError, setSubmitError] = useState('');
    const classes = useStyles();
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            name: '',

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            //alert(JSON.stringify(values, null, 2));
            dispatch(addTAGSStart(values))

            setOpen(false)
        },
    });

    return (
        <div>
            <Typography className={classes.title} variant='h3'> Add Tag Form</Typography>
            <form onSubmit={formik.handleSubmit}>
                <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Tag"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                />

                <Button className={classes.btn} color="primary" variant="contained" fullWidth type="submit">
                    Add Tag
        </Button>
            </form>
        </div>
    );
};

export default TagAddForm