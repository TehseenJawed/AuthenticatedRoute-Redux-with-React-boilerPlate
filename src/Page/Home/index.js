import {connect} from 'react-redux'
import Button from '@material-ui/core/Button';
import {Logout} from '../../store/action'
function Home(props){
    const {email, logout} = props
    console.log(email)
    return(
    <div>
        <h2>This is Home</h2>
        <Button variant="contained" onClick={logout} color="secondary">
        Logout
      </Button>
    </div>
    )
}
const mapStateToProps = (state) => ({
    email : state.user.email
})
const mapDispatchToProps = (dispatch) =>({
    logout : () => dispatch(Logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)