import React, {Component} from "react";
import {posts, users} from "../../data/data";
import {comments} from "../../data/commentsData";
import {PostCard} from "../posts/PostCard";
import {DropDown} from "../dropDown/dropDown";
import './contentStyle.scss'


const methods =['default', 'by author'];



export class Content extends Component{
    state = {
        postsCopy: [...posts],
        method: methods[0]
    };
//////////////////////////////////////////////////////////
    onSort = (option)=>{

      const [op1, op2] = methods;
      switch (option) {
          case op1:
              this.sortDefault();
              this.setState({method: op1});
              break;
          case op2:
              this.sortAuthors();
              this.setState({method: op2});
              break;
          default:
              break;
      }

    };
/////////////////////////////////////////////////////////
    sortDefault = ()=>{
     this.setState({
         method: methods[0],
         postsCopy: [...posts]
     });
    };
/////////////////////////////////////////////////////////////
    sortAuthors = ()=>{
        let copy = [...this.state.postsCopy];
        let res = copy.sort(function (a,b) {
            const userA = users.find(value => value.id === a.userId);
            const userB = users.find(valueB => valueB.id === b.userId);
            if (userA.name < userB.name) {
                return -1;
            }
            if (userA.name > userB.name) {
                return 1;
            }
            return 0
        });

        this.setState({
            method: methods[1],
            postsCopy: res
        });
    };
//////////////////////////////////////////////////////////////////////////


    render() {
        const {postsCopy, method} = this.state;
        return (
            <div className="container d-flex flex-column align-items-center content">
              <div className='headSort'>
                  <DropDown
                      methodsArr={methods}
                      curMethod={method}
                      onSelect={this.onSort}
                  />
              </div>

                {postsCopy.map(value => {
                    let author =  users.find(value1 => value1.id === value.userId);
                    let commentsarr = comments.filter(value2 => value2.postId === value.id);
                    return (
                        <PostCard key={value.id} author={author} post={value} comments={commentsarr} />
                    )
                })}
            </div>
        );
    }
}


