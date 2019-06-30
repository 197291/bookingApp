import { makeStyles } from '@material-ui/styles';
export const styles = makeStyles({
  root: {
    fontSize: '12px',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 600,
    width: '100%',
    margin: 'auto',
    alignItems: 'center',
    position: 'relative'
  },
  btn: {
    width: 120,
    margin: '30px auto'
  },
  input: {
    width: '100%'
  },
  error: {
    color: 'red',
    position: 'absolute',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)'
  }
});
