import './Search.scss'

const Search = ({ setSearch, setpageNum }) => {
    return (
        <form className='d-flex justify-content-center gap-4 mb-5 mt-5 search'>
            <input
                onChange={e => {
                    setSearch(e.target.value);
                    setpageNum(1);
                }}
                placeholder='Search for Characters' type="text" className='input' />
            <button onClick={(e) => e.preventDefault()} className='btn btn-primary fs-5'>Search </button>
        </form>
    )
}

export default Search