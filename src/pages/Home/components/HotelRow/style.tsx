import { makeStyles } from '@material-ui/styles';
export const styles = makeStyles({
  title: {
    color: '#07c',
    fontWeight: 'bold',
    fontSize: 20
  },
  listItem: {
    padding: 16,
    margin: '16px 0',
    border: '1px solid #c6c6c6',
    borderRadius: 3,
    alignItems: 'flex-start',
    cursor: 'pointer',
    maxWidth: 580,
    '&:hover': {
      backgroundColor: '#e9f0fa'
    }
  },
  wrapPhoto: {},
  hotelPhoto: {
    width: '200px',
    height: '200px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 0 16px',
    alignItems: 'flex-start'
  },
  description: {
    fontSize: 12,
    margin: '.625em 0 0',
    lineHeight: '18px',
    fontWeight: 400
  },
  city: {
    fontSize: 12,
    color: '#07c',
    fontStyle: 'normal',
    fontWeight: 'normal',
    borderBottom: '1px solid',
    margin: '0 0 8px 0'
  }
});
