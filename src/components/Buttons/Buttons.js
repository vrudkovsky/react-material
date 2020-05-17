import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import red from '@material-ui/core/colors/red';

const warning = red[700];

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(2)
        }
        // marginBottom: '140px',
        // margin: theme.spacing(2)
        // marginTop: '0px',

    },
    btn: {
        margin: theme.spacing(2),
        textTransform: 'capitalize',
        fontSize: '15px',
        fontFamily: 'montserrat, sans-serif',
        letterSpacing: '2px',

    },
    input: {
        display: 'none',
    },
}));

export default function AppButtons() {
    const classes = useStyles();

    return (
/*        <div className={classes.root}>
            <Button className={classes.btn} variant="contained" color="primary">default</Button>
            <Button className={classes.btn} variant="contained" color="primary">default</Button>
            <Button className={classes.btn} variant="contained" color="primary">default</Button>
            <Button className={classes.btn} variant="contained" color="primary">default</Button>
        </div>*/

    <div className={classes.root}>
        <Button variant="contained" color="primary" className={classes.btn}>
            default
        </Button>
        <Button color="primary" className={classes.btn}>
            default
        </Button>
        <Button variant="outlined" color="secondary" className={classes.btn}>
            default
        </Button>
        <input
            accept="image/*"
            className={classes.input}
            id="contained-button-file"
            multiple
            type="file"
        />
        <label htmlFor="contained-button-file">
            <Button variant="contained" color="primary" component="span" className={classes.btn} style={{backgroundColor: '#ba2111'}}>
                Upload
            </Button>
        </label>
        <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
        <label htmlFor="icon-button-file">
            <IconButton color="primary" aria-label="upload picture" component="span">
                <PhotoCamera />
            </IconButton>
        </label>

    </div>
    )
}