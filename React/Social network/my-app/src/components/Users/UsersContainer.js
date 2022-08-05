import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator,setCurrentPageActionCreater, setTotalUsersCountActionCreater, toggleIsFetchingActionCreater} from "../../redux/users-reducer";
import * as axios from 'axios'; 
import React from 'react'
import preloaer from '../../assets/images/preloader.svg'
import Users from './Users.js'

class UsersContainer extends React.Component{
    componentDidMount() {
        this.props.toggleIsFetching(true);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then (response => {
          this.props.toggleIsFetching(false)
          this.props.setUsers(response.data.items);
          this.props.setTotalUsersCount(response.data.totalCount)
        })
    }
     onPageChanged = (pageNumber) => {
      this.props.toggleIsFetching(true);
      this.props.setCurrentPage(pageNumber);
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then (response => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items)
        })
    }
  
    render() {
      return<> 
      {this.props.isFetching ? <div><img src={preloaer} alt='preloader'/> </div> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize} currentPage={this.props.currentPage}onPageChanged={this.onPageChanged} users={this.props.users} follow={this.props.follow} unfollow={this.props.unfollow}/>
       </>
    }
  }

let mapStateToProps = (state) => {
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage:state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId)=> {
            dispatch(followActionCreator(userId))
        },
        unfollow:(userId) => {
            dispatch(unfollowActionCreator(userId))
        },
        setUsers:(users) => {
            dispatch(setUsersActionCreator(users))
        },
        setCurrentPage:(pageNumber) => {
            dispatch(setCurrentPageActionCreater(pageNumber))
        },
        setTotalUsersCount:(totalCount) => {
            dispatch(setTotalUsersCountActionCreater(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(toggleIsFetchingActionCreater(isFetching))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (UsersContainer);