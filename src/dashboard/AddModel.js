import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { addIncome, addOutcome } from '../features/sold/soldSlice';
import { FaMoneyBillTrendUp, FaSackXmark } from 'react-icons/fa6';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 300,
  maxWidth:600,
  outline:"none",
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius:5,
  p: 4,
};

export default function AddModel({open, handleClose = () => {},type}) {
    const [amount, setAmount] = useState(0)
    const [raison, setRaison] = useState("")
    const [date, setDate] = useState(new Date().toISOString().split("T")[0])

    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isNaN(amount) || amount <= 0){
            alert("Invalid Amount !")
            return;
        }
        
        switch (type) {
            case "Income":
                dispatch(addIncome({amount, raison, date}))
                break;
            case "Outcome":
              dispatch(addOutcome({amount, raison, date}))
              break;
            default:
                break;
        }

        handleClose()

        
    }
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='flex gap-2 items-center'>
            {type === "Income" ? <FaMoneyBillTrendUp size={25}/> : <FaSackXmark size={25} />}
            <Typography id="modal-modal-title" variant="h3" component="h3">
                Add {type}
            </Typography>
        </div>
          <form className='w-full mt-4 flex flex-col gap-2' onSubmit={handleSubmit}>
            
            <TextField  onChange={(e) => setAmount(Number(e.target.value).toFixed(2))} required color='success' label="Amount"  variant="outlined" />
            
            <TextField  onChange={(e) => setRaison(e.target.value)} required color='success' label="Raison"  multiline minRows={4} variant="outlined" />
            
            <TextField  onChange={(e) => setDate(e.target.value)} required color='success' defaultValue={new Date().toISOString().split("T")[0]} type='date' variant="outlined" />

            <Button variant='contained' type='submit' sx={{backgroundColor:"#4aad9b"}} >Add</Button>
            <Button variant='contained' onClick={handleClose} type='reset' color='inherit' >Cancel</Button>

          </form>
        </Box>
      </Modal>
    </div>
  );
}
