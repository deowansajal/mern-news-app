import { Dialog, DialogTitle, DialogActions, Button } from '@mui/material'
const DialogComponent = ({ openDialog, handleDialogClose }) => {
    return (
        <div>
            <Dialog open={openDialog} onClose={handleDialogClose}>
                <DialogTitle id="alert-dialog-title">
                    {'Are you sure you want to delete this?'}
                </DialogTitle>

                <DialogActions>
                    <Button onClick={handleDialogClose}>Confirm</Button>
                    <Button onClick={handleDialogClose} autoFocus>
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}

export default DialogComponent
