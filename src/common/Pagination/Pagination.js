import React from 'react';
import './Pagination.css';

class Pagination extends React.Component {
  selectPage(page) {
    page = page > 0 ? page <= this.props.totalPage ? page : this.props.totalPage : 1;
    // 1, 2, 3, ..., n
    if(this.props.page !== page) {
      this.props.onChange(page);
    }
  }

  componentDidMount() {
    // if(this.props.page < 1) this.selectPage(1);
    // else if(this.props.page > this.props.totalPage) this.selectPage(this.props.page);
  }

	render() {
    let {page, totalPage, pageRange = 9} = this.props; //pageRange is *** odd number
    if(!totalPage) return "";
    let isShowFirstEllipsis = totalPage > pageRange && page >= (pageRange + 3) / 2;
    let isShowLastEllipsis = totalPage > pageRange && page <= (totalPage - (pageRange + 1) / 2);
    let numberOfMid = Math.max(Math.min(totalPage, pageRange)-2, 0);
    let startIndexMidItem =  totalPage < pageRange ? 2 : (page < totalPage - (pageRange - 1)/2 ? page < (pageRange + 1)/2 ? 2 : page - (pageRange - 3)/2 : totalPage - (pageRange - 2))
    let midItem = [...Array(numberOfMid)].map((e, i)=>{
      return <div className={page === startIndexMidItem + i ? "active" : ""} onClick={this.selectPage.bind(this, startIndexMidItem + i)} key={i}>{startIndexMidItem + i}</div>;
  	});
    if(isShowFirstEllipsis){
      midItem.splice(0, 1, <div onClick={this.selectPage.bind(this, page - (pageRange - 3)/2)} key="first_ellipsis">..</div>)
    }
    if(isShowLastEllipsis){
      midItem.splice(-1, 1, <div onClick={this.selectPage.bind(this, page + (pageRange - 3)/2)} key="last_ellipsis">..</div>)
    }
		return (
			<div className="Main-Pagination">
        <div onClick={this.selectPage.bind(this, page - 1)} className={page === 1 ? "disabled" : ""}>«</div>
        <div className={page === 1 ? "active" : "" } onClick={this.selectPage.bind(this, 1)}>1</div>
        { midItem }
        { totalPage > 1 && <div className={page === totalPage ? "active" : ""} onClick={this.selectPage.bind(this, totalPage)}>{totalPage}</div> }
        <div onClick={this.selectPage.bind(this, page + 1)}  className={page === this.props.totalPage ? "disabled" : ""}>»</div>
			</div>
		);
	}
}

export default Pagination;
