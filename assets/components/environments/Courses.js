import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'

import CoursesList from './../ecosystems/CoursesList'

import {
  fetchCourses,
  fetchUserCourses
} from './../../redux/actions/courses-actions'

class Courses extends Component {

  componentWillMount() {
    this.props.dispatch(fetchCourses())
    this.props.dispatch(fetchUserCourses(this.props.user.id))
  }

  render() {
    return (
      <section>
        <h1>Sign Up for Courses</h1>
        <CoursesList
          dispatch={this.props.dispatch}
          user={this.props.user}
          courses={this.props.courses} />
      </section>
    )
  }

}

Courses.propTypes = {
  dispatch: PropTypes.func,
  courses: PropTypes.array,
  user: PropTypes.object
}

export default connect(
  state => ({
    user: state.login.user,
    courses: state.courses
  })
)(Courses)
