import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { getBlogPost } from "./_duck/actions";
import { Container } from "react-bootstrap";


class ViewPostPage extends React.Component {



  constructor(props) {
    super(props);
   
    this.state = {
      isLoading: false,
      body: ''
    };
   
    
  }


  componentWillMount = () => {
      if(!this.props.location.state){
          return this.props.history.goBack()
      }
    this.setState({body: this.props.location.state.data})
  };


  componentDidUpdate = (prevProps, prevState) => {
   
  }


  body = () => (
      <div className="body" dangerouslySetInnerHTML={{__html: this.state.body.content.rendered}}>

      </div>
  )

  

  render() {
   const { body } = this.state
    return (
      <div>
        <Header body={body} />
        {body && <Container>
            <img alt="featured" className="img" src={body.featured_image}/>
            {this.body()}
        </Container>}
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
)(ViewPostPage);
