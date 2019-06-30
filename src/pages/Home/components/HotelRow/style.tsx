import { makeStyles } from '@material-ui/styles';
export const styles = makeStyles({
  title: {
    color: '#07c',
    fontWeight: 'bold',
    fontSize: 18,
    maxWidth: '75%',
    marginRight: '5px',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginBottom: 10
  },
  listItem: {
    padding: 16,
    margin: '16px 0',
    border: '1px solid #c6c6c6',
    borderRadius: 3,
    alignItems: 'flex-start',
    cursor: 'pointer',
    maxWidth: 680,
    '&:hover': {
      backgroundColor: '#e9f0fa'
    }
  },
  wrapPhoto: {
    width: '200px',
    height: '200px'
  },
  hotelPhoto: {
    width: '200px',
    height: '200px'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 0 0 16px',
    alignItems: 'flex-start',
    maxWidth: 'calc(100% - 200px)'
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
  },
  wrapTitleHotel: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
