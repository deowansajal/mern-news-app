import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
const DialogComponent = ({
    dialogTitle,
    openDialog,
    handleDialogClose,
    confirmHandler,
}) => {
    return (
        <div>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle id="alert-dialog-title">{dialogTitle}</DialogTitle>

                <DialogActions>
                    <Button
                        onClick={() => {
                            confirmHandler()
                            handleDialogClose()
                        }}
                    >
                        Confirm
                    </Button>
                    <Button
                        color="warning"
                        onClick={handleDialogClose}
                        autoFocus
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogComponent
