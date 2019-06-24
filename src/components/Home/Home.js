import React, {Component} from 'react';

class Home extends Component {
    componentWillMount() {
        const {fetchFSS} = this.props
        fetchFSS()
    }

    render() {
        const { githubData = [] } = this.props
        const temp =[]
        console.log(githubData)
        return (
            <div>
            {githubData.map(data => <div>{data.name}</div>)}
            </div>
        )
    }
}

export default Home;
