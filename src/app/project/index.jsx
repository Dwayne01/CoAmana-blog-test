import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header"
import Footer from "../components/Footer"
import Cards from '../components/Cards'
import Pagination from '../components/Pagination'
import { getBlogPost } from "./_duck/actions";


class ProjectsPage extends React.Component {



  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      unitsByProject: [],
      page: 1,
      number: 6,
      blog: []
    };
   
    this.handleNext = this.handleNext.bind(this);
    this.handlePrevious = this.handlePrevious.bind(this);
  }


  componentDidMount = () => {
    this.props.getBlogPost(this.state.page, this.state.number)
  };


  componentDidUpdate = (prevProps, prevState) => {
    if(prevProps.blog !== this.props.blog){
      this.setState({blog: this.props.blog})
    }
  }

  

  handleNext = () => {
    this.setState({page: this.state.page + 1}, () => this.props.getBlogPost(this.state.page, this.state.number))
  }

  handlePrevious = () => {
    if(this.state.page > 1){
      this.setState({page: this.state.page - 1}, () => this.props.getBlogPost(this.state.page, this.state.number))
    }
  }

 
  render() {
   const { blog } = this.state;
   const { handleNext, handlePrevious } = this;
   const { history } = this.props;
    return (
      <div>
        <Header />
        <Cards history={history} blog={blog} />
        <Pagination handleNext={handleNext} handlePrevious={handlePrevious}/>
        <Footer />
      </div>
    );
  }
}

const stateToProps = state => ({ 
  blog: state.projectModule.blog.data,
});

const dispatchToProps = dispatch => ({
  getBlogPost: (page, number) => getBlogPost(page, number)(dispatch)
});

export default connect(
  stateToProps,
  dispatchToProps
)(ProjectsPage);
