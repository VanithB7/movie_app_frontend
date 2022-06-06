
const Grid = ({image_url,name})=> {

    return(
       <>
    <div className="rounded-lg shadow-lg bg-white max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <img className="rounded-t-lg  md:h-64 lg:h-80 object-cover w-full" src={image_url} alt="" />
    </a>
    <div className="p-6">
        
      <h5 className="text-gray-900 text-sm lg:text-xl font-medium mb-2 text-center">{name}</h5>
    
     
         </div>
    <button type="button" className="w-full inline-block px-6 py-4 bg-[#c4242b] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#c4242b] hover:shadow-lg focus:bg-[#c4242b] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#c4242b] active:shadow-lg transition duration-150 ease-in-out">Book</button>
 
  </div>
     </>
    );
}

export default Grid;