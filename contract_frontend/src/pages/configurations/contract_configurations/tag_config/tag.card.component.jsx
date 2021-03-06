import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ConfigTagTable from "./tag.table.component";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from '@material-ui/core/TextField';
import AddIcon from "@material-ui/icons/Add";
import MoreIcon from '@material-ui/icons/More';
import Modal from '@material-ui/core/Modal';
import TagAddForm from './tag.form';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #fff',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    table: {
        width: '100%',
        maxHeight: 650,
    },
}));


function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

export default function ConfigTagMainPage() {
    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [searchResult, setSearchResult] = React.useState("");

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <TagAddForm setOpen={setOpen} />
        </div>
    );

    const handleChange = (event) => {
        console.log(event.target.value);
        setSearchResult(event.target.value);
      };

    return (
        <React.Fragment>
            <Grid container sm={6} xs={12} justify='space-between'>
                <Grid container item>
                    <Grid container justify="space-between" style={{ minWidth: '35em' }}>
                        <Grid item>
                            <Grid container alignItems="center">
                                <Grid item>
                                    <MoreIcon fontSize="large" />
                                </Grid>
                                <Grid item>
                                    <Typography variant="h3" style={{ marginLeft: "0.2em" }}>
                                        Tags
                  </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Button onClick={handleOpen} variant="contained" color="primary">
                                Add Tag <AddIcon />
                            </Button>
                            <Modal
                                open={open}
                                onClose={handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                            >
                                {body}
                            </Modal>
                        </Grid>
                    </Grid>
                    <Grid item>
                  
                  <TextField id="standard-search" label="Search Tag" type="search" className={classes.search} onChange={handleChange} />
                  </Grid>
                </Grid>
                <Grid item>
                    <ConfigTagTable searchResult={searchResult} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
