import ReactPaginate from 'react-paginate';

function PageButton({handlePageClick}) {
    return (
        <div className="bottom" >
        <ReactPaginate
            breakLabel="..."
            nextLabel=" ->"
            onPageChange={handlePageClick}
            pageRangeDisplayed={6}
            pageCount={10}
            previousLabel="<-"
            pageRangeDisplayed={2}
            containerClassName="pageC"
            activeLinkClassName="activeBtnPage"
        />
    </div>
    );
  }
  export default PageButton;