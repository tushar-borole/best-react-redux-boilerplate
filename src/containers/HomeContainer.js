import { connect } from 'react-redux'
import Home from '../components/Home'
import {fetchFSS} from '../modules/home/action'
import {defaultData } from '../modules/home/selectors'

const mapStateToProps = (state, ownProps) => {
    return {
        githubData : defaultData(state),
        ...ownProps
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchFSS: () => dispatch(fetchFSS())
    }
}

const HomeContainer = connect(mapStateToProps,mapDispatchToProps)(Home)

export default HomeContainer
