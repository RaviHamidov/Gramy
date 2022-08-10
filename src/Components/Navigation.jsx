import searchLogo from "../img/icons8-search-48.png"
function Nav()
{
  const inputHandler=(e)=>
  {
    e.preventDefault();
  }

    return(
        <nav className="flex justify-between">
        <img src="https://www.logosvgpng.com/wp-content/uploads/2021/12/wolt-logo-vector-2021.png" className="w-[50px] h-[40px] m-8 " alt="logo"/>
         
        <form  onChange={inputHandler} className="w-32 flex justify-between mt-8">
          <img src={searchLogo} className="w-6 h-6 m-2" alt="search-logo"></img>
          <input type="text" placeholder="Search.." className="h-10 px-4 focus:ring focus:ring-gray-400 focus:rounded-xl"/>
        </form> 
  
        <div className="p-8">
            <a className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150" href="£">Daxil ol</a>
            <a className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150" href="£">Qeydiyyatdan keçin</a>
            <a className="mr-8 hover:opacity-80 hover:text-gray-400  hover:scale-x-150" href="£">Dil</a>
        </div>
  
  
      </nav>
    )
}
export default Nav;