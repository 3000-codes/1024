import { Component } from 'react';

export default class TouchCom extends Component {
  touchInfo = {
    startX: 0,
    startY: 0,
    moving: false
  }
  handleTouchStart = (e: React.TouchEvent<HTMLElement>) => {
    let finger = e.touches[0];
    this.touchInfo = {
      startX: finger.pageX,
      startY: finger.pageY,
      moving: false
    }
    console.log('开始');
  };
  handleTouchMove = (e: React.TouchEvent<HTMLElement>) => {
    let finger = e.touches[0];
    let moveX = finger.pageX - this.touchInfo.startX;
    let moveY = finger.pageY - this.touchInfo.startY;
    console.log('移动');
    if (Math.abs(moveX) > 10 || Math.abs(moveY) > 10) {
      this.touchInfo.moving = true;
    }
  };
  handleTouchEnd = (e: React.TouchEvent<HTMLElement>) => {
    if (!this.touchInfo.moving) {
      console.log('点击');
    }

  };
  render() {
    return (
      <div style={
        {
          width: '100px',
          height: '100px',
          backgroundColor: 'red'
        }
      }
        onTouchStart={this.handleTouchStart}
        onTouchMove={this.handleTouchMove}
        onTouchEnd={this.handleTouchEnd}
      >点击</div>
    );
  }
}