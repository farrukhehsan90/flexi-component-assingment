import React from 'react'
import { InputLabel, MenuItem, FormControl, Card, Button, makeStyles, Select, TextField } from '@material-ui/core';
import './style.css'



const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 220,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));


const Flexi = ({ value, buttonLabel, handleSubmit }) => {
    const Items = Object.keys(value)
    const classes = useStyles();
    const [dropDownValue, setDropDownValue] = React.useState('');
    const handleChange = (event) => {
        setDropDownValue(event.target.value);
    }

    const renderDropDown = (val) => {
        return (
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-outlined-label">{val.label}</InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={dropDownValue}
                    onChange={handleChange}
                >
                    {
                        val.values.map((state, ind) => <MenuItem value={ind}>{state}</MenuItem>)
                    }
                </Select>
            </FormControl>
        )
    }
    return (
            <Card className='card'>
                <p className='text'>Flexi Component With Submit Button</p>
                {
                    Items.map(item => {
                        return value[item].map(val => {
                            if (val.type == 'TextField') {
                                return <TextField id="outlined-basic" name={val.name} label={val.label} variant="outlined" />
                            } else {
                                return renderDropDown(val)
                            }
                        })
                    })
                }
                <Button onClick={handleSubmit} variant="contained" color="primary" className='submitButton'>
                    {buttonLabel}
                </Button>
            </Card>
    )
}
export default Flexi
