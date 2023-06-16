import {Component} from 'react'
import Loader from 'react-loader-spinner'

import BlogList from '../BlogList'
import UserInfo from '../UserInfo'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class Home extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.renderLoading()
  }

  renderLoading = () => {
    this.setState({isLoading: false})
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <UserInfo />
            <BlogList />
          </>
        )}
      </div>
    )
  }
}

export default Home
