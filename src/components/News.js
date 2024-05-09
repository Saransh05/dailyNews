// import React, { Component } from "react";
import React ,{useState,useEffect}  from 'react';

import Newsitem from "./Newsitem";
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



// export default class News extends Component
const News=(props)=>
{

  // static defaultProps = {
  //   pageSize:4,
  //   country:'in',
  //   category:'general',

  // }
  // static propTypes = {
  //   pageSize:PropTypes.number,
  //   country:PropTypes.string,
  //   category:PropTypes.string,
  // }


  const[articles,setArticles]=useState([]);
  const[loading,setLoading]=useState(true);
  const[page,setPage]=useState(1);
  const[totalResults,setTotalResults]=useState(0);
  



   const capitalizeFirstletter =(string) => {
    return string.charAt(0).toUpperCase()+string.slice(1);

    
  }
 const capitalizeWholeword =(string) => {
    return string.toUpperCase()

    
  }


  // constructor(props) {
  //   super(props);
  //   console.log("hello i am a constructor");
  //   this.state = {
  //     articles: [],
  //     loading:false,
  //     // so that spinner visble on first instance
  //     page: 1,
  //     // intial values specifed
  //     totalResults:0


  //   };
  //   document.title=`${this.capitalizeFirstletter(props.category)}-NEWSMONEKY`

  // }
  

  const updateNews = async()=>{
    props.setProgress(10)

    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=26f4aaeff7b748818f11b61e8814b4bb&page=${page} &pageSize=${props.pageSize}`;
      //rember page={this.state.page} in class based in above url
      
      //  this.setState({loading:true})
      setLoading(true)

    let data = await fetch(url);
    props.setProgress(30)

    let parsedData = await data.json();
    props.setProgress(50)

    console.log(parsedData);

    setArticles(parsedData.articles)
    setLoading(false)
    setTotalResults(parsedData.totalResults)
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    //   loading:false
    // });

    props.setProgress(100)

  }

 useEffect(()=>{
  updateNews()
  document.title=`${capitalizeFirstletter(props.category)}-NEWSMONEKY` 
  

 } ,[])

   // async componentDidMount(){
    // props.setProgress(10)

    // let url =
    //   `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=26f4aaeff7b748818f11b61e8814b4bb&page=1 &pageSize=${props.pageSize}`;
    //   props.setProgress(30)

    // let data = await fetch(url);
    // let parsedData = await data.json();
    // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles,
    //   totalResults: parsedData.totalResults,
    // });

  //   setArticles(parsedData.articles)
  //   setTotalResults(parsedData.totalResults)
  //   props.setProgress(100)

  // }

 const handlePrevClick = async () => {
    // console.log("previous");
    // let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&category=${props.category}&apiKey=26f4aaeff7b748818f11b61e8814b4bb&page=${this.state.page - 1
    //   }&pageSize=${props.pageSize}`;
    //   this.setState({loading:true})
    // let data = await fetch(url);
    // let parsedData = await data.json();

    // console.log(parsedData);

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parsedData.articles,
    //   loading:false,
    //   // decrease page no and update the articles accordinglu
    // });
    // this.setState({
    //   // page: this.state.page - 1
      
    // })

    setPage(page-1)
    // this.updateNews()
    updateNews()

  };


  const handleNextClick = async () => {
    // console.log("next");
    // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / 20))) {
    // // if not true
    //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=26f4aaeff7b748818f11b61e8814b4bb&page=${this.state.page + 1
    //     }&pageSize=${props.pageSize}`;
    //     this.setState({loading:true})

    //   let data = await fetch(url);
    //   let parsedData = await data.json();
    //   console.log(parsedData);

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parsedData.articles,
    //     // decrease page no and update the articles accordinglu
    //     loading:false,
    //   });
    // }
    // this.setState({
    //   page: this.state.page + 1,
      
    // })

    setPage(page+1)
    // this.updateNews()
    updateNews()
  };


  const fetchMoreData= async() =>{
    // this.setState({page:this.state.page +1})
   
    let url =
      `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=26f4aaeff7b748818f11b61e8814b4bb&page=${page+1} &pageSize=${props.pageSize}`;
setPage(page+1)
let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    // this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalResults: parsedData.totalResults,
    
    // });

  setArticles(articles.concat(parsedData.articles))
  setTotalResults( parsedData.totalResults)
    

  }

  // render() {
    return (
      <div>
        
          {/* <h2 className="text-center"> TOP {this.capitalizeWholeword(props.category)} HEADLINES OF THE DAY </h2> */}
           <h2 className="text-center "style={{margin:'35px 0px',marginTop:'90px'}}> TOP {capitalizeWholeword(props.category)} HEADLINES OF THE DAY </h2> 
          

      {/* {this.state.loading && <Spinner/>}
       */}

{loading && <Spinner/>}


      {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
       /> */}

<div className="container my-3  ">
          <div className="row">
            {/* here one row conatins three cards or boxes .Thus div of row closed after 3 coumn containers
             */}


            {/* { !(this.state.loading) &&  */}
           {/* { this.state.articles.map((element) => */}
           { articles.map((element) => 

            {

              return (

                <div className="col-md-4" key={element.url}>
                  {/* column to be in one line */}

                  <Newsitem
                    title={element.title ? element.title.slice(0, 75) : " "} description={element.description? element.description.slice(0, 149): " " }imageUrl={element.urlToImage} newsUrl={element.url} author={!(element.author)?"Anonymous":element.author} date={element.publishedAt} source={element.source.name}/>
                  {/* separate addding of image */}

                  {/* if title and description exists then show the respective title else show "" */}


                </div>

              );
            })}
            {/* <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}
       /> */}
       <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !==totalResults}
          loader={<Spinner/>}
       />


            {/* <div className="container d-flex justify-content-between">
              <button disabled={this.state.page <= 1} type="button" className="btn btn-info my-2"onClick={this.handlePrevClick}> &larr;Previous</button>
              <button  disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}type="button" className="btn btn-info my-2"onClick={this.handleNextClick}>  Next & rarr;</button>


            </div> */}
          </div>
        </div>
      </div>
    );
  // }
          }    

News.defaultProps = {
  pageSize:4,
  country:'in',
  category:'general',

}
News.propTypes = {
  pageSize:PropTypes.number,
  country:PropTypes.string,
  category:PropTypes.string,
}


export default News
