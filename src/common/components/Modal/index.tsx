import React from 'react';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

interface Props {
  isOpen: boolean;
  handleClose?: () => void;
}

const Modal: React.FC<Props> = (props) => {
  const { handleClose = () => ({}), isOpen } = props;

  return (
    <div className="Modal">
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Thank you!</DialogTitle>
        <DialogContent>
          <DialogContentText>You've booked the hotel!</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Modal;
