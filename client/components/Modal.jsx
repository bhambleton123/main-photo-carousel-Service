import React from "react";
import styled from 'styled-components';
import { X, FileText } from 'react-feather';
import faker from 'faker';
import MiniSlider from './MiniSlider.jsx';


export default class Modal extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          currentPhoto: this.props.currentPhotoIndex
        }
        this.increaseCur = this.increaseCur.bind(this);
        this.decreaseCur = this.decreaseCur.bind(this);
    };
    increaseCur() {
      if (this.state.currentPhoto < this.props.list.length - 1){
        this.setState({
          currentPhoto: this.state.currentPhoto + 1
        })
      }
    }

    decreaseCur() {
      if (this.state.currentPhoto > 0){
        this.setState({
          currentPhoto: this.state.currentPhoto - 1
        })
      }
    }

    onClose(e) {
      e.persist()
      if (this.props.onClose) {
        this.props.onClose(e);
      }
      };


    render() {
        if(!this.props.showPhotoModal) {
            return null;
        };
        return (
            <Idkanymore>
              <div>{this.props.children}</div>
                <Contents>
                    <Ax>
                        <X onClick={e => this.onClose(e)} size={40}/>
                    </Ax>
                    <div className="Idkanymore" style={{
                      display:'flex',
                      flexDirection: 'row',
                      margin: 'auto'
                    }}>
                    <i className="fas fa-chevron-left" onClick={this.decreaseCur} style={{
                      flexDirection: 'left',
                      margin: 'auto',
                      padding: '5px'
                    }}></i>
                    <Image><img src={this.props.list[this.state.currentPhoto]} style={{
                       borderRadius: '20px',
                       objectFit: 'cover'
                    }}/></Image>
                    <i className="fas fa-chevron-right" onClick={this.increaseCur} style={{
                      flexDirection: 'right',
                      margin: 'auto',
                      padding: '5px'
                    }}></i>
                    <MiniSlider list={this.props.list} homepagePhoto={this.props.homepagePhoto} currentPhoto={this.state.currentPhoto}/>
                    <Description>
                      <div style={{
                        fontWeight: 'bold',
                        textAlign: 'left'
                      }}>{`${this.state.currentPhoto + 1}/${this.props.list.length}`} </div>
                    <div>{this.props.list[this.state.currentPhoto].description}
                    </div>
                    <div style={{
                      fontSize: '10px',

                    }}>
                    Photo Verified by Airbnb
                    </div>
                    </Description>
                    </div>
                </Contents>
            </Idkanymore>
          );
    }
  }


  const Idkanymore = styled.div`
    position: fixed;
    width: 1430px;
    height: 720px;
    top: 1;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto auto;
    align-items: center;
    background: white;
    border: 1px solid #ccc;
  `;

  const Contents = styled.div`
    display: flex;
    flex-direction: column;
  `;



  const Ax = styled.span`
    display: inline-block;
    margin-top: 25px;
    margin-left: 30px;
    cursor: pointer;
    width: 30px;
  `

  const Description = styled.div`
    width: 200px;
    height: 200px;
    cursor: pointer;
    position: relative;
    display: inline-block;
    text-align: left;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: normal;
    padding-left: 20px;
    font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, "Helvetica Neue", sans-serif ;
    color: black;
    margin:150px 10px 10px -275px;

  `;

  const Image = styled.div`
    width: 600px;
    height: 450px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    padding-left: 22px;
    padding-right: 22px;
    background: rgb(255, 255, 255);
    margin: 10px auto 0 auto;
    justify-content: space-around;
    object-fit: cover;

  `;

