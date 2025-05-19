import TitleHeader from "../../../components/TitleHeader.tsx";
import {useState} from "react";
import {Alert, Button, Snackbar, SnackbarCloseReason} from "@mui/material";

const SnackbarEx = () => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true)
    }

    const handleClose = (
        event?: React.SyntheticEvent | Event,
        reason?: SnackbarCloseReason,
    ) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div>
            <TitleHeader title={'MUI Snackbar'} />
            <div>
                <Button onClick={handleClick}>Open Snackbar</Button>
                <Snackbar
                    anchorOrigin={{vertical: 'top', horizontal: 'center'}}
                    open={open}
                    autoHideDuration={1000}
                    onClose={handleClose}
                >
                    <Alert
                        onClose={handleClose}
                        severity="success"
                        variant="filled"
                    >
                        success alert
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default SnackbarEx;