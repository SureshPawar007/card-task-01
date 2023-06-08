var cl = console.log ;  //first class function(FCF)

const imgContainer = document.getElementById("imgContainer");

const  images = [
  `https://source.unsplash.com/random/?city`,
  `https://source.unsplash.com/random/?nature`,
  `https://source.unsplash.com/random/?javascript`,
  `https://source.unsplash.com/random/?fashion`,
  `https://source.unsplash.com/random/?flower`,
  `https://source.unsplash.com/random/?birds`,
  `https://source.unsplash.com/random/?angular`,
  `https://source.unsplash.com/random/?html`,
  `https://source.unsplash.com/random/?css`,
  `https://source.unsplash.com/random/?node`,
  `https://source.unsplash.com/random/?sea`,
  `https://source.unsplash.com/random/?animal`,
  `https://source.unsplash.com/random/?farm`,
  `https://source.unsplash.com/random/?model`,
  `https://source.unsplash.com/random/?sky`,
]

let result = " ";

images.forEach((ele)=>{

  let catg = ele.substring(ele.indexOf("?")+1);

  result += `
        <div class="col-md-4 " >
          <div class="card">
           <div class="card-header">
                <h3 class="text-capitalize">
                   ${catg} Image
                </h3>
              </div>
              <div class="card-body card-img" >
                 <img src="${ele}" alt="Nature img" title="Nature_Img">
              </div>
        
              <div class="card-footer ">
                <button class="btn btn-primary">Edit</button>
                <button class="btn btn-danger">Delete</button>
              </div>
          </div>
      </div> 

  `
})

imgContainer.innerHTML=result;

