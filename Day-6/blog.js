let blogs = []

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'july',
  'August',
  'September',
  'October',
  'November',
  'December'
]

function addBlog(event){
    event.preventDefault()
    
    // proses ambil data dari DOM
    const title = document.getElementById('input-blog-title').value
    const content = document.getElementById('input-blog-content').value
    let image = document.getElementById('input-blog-image')

    image = URL.createObjectURL(image.files[0])

    ////console.log('value title : ',title)
    ////console.log('value content : ',content)
    ////console.log('value image : ',image)

    //mengirim data menggunakan DOM
    document.getElementById('input-blog-title').value = ''
    document.getElementById('input-blog-content').value = ''
    document.getElementById('input-blog-image').value = ''


    ////let images = document.getElementById('image')

    //DOM untuk memanipulasi element
    ////images.innerHTML += `<img src=${image} />`

   let blog = {
       author: 'Putra Rangga',
       title : title,
       image : image,
       content : content,
       postedAt : new Date()
   }

     blogs.push(blog)

    renderBlog()

}

//konsep perulangan
function renderBlog(){
    let blogContainer = document.getElementById('contents')

    blogContainer.innerHTML = firstBlogContent()
    
    for (let i=0; i<= blogs.length; i++){
        console.table(blogs[i])

        blogContainer.innerHTML += `<div class="blog-list-item">
        <div class="blog-image">
          <img src="${blogs[i].image}" alt="" />
        </div>
            <div class="blog-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Blog</button>
                </div>
            <h1>
                <a href="blog-detail.html" target="_blank">${blogs[i].title}</a>
            </h1>
            <div class="detail-blog-content">
              ${getFullTime(blogs[i].postedAt)} | Putra Rangga
            </div>
            <p>
                ${blogs[i].content}
            </p>
            <div style="text-align: right; font-size: 15px; color: grey;">
            ${getDistanceTime(blogs[i].postedAt)} 
            </div>
            </div>
        </div>
      `
    }
}

function getDistanceTime(time) {
  conts Distance = new Date() - new Date(time)
  // convert to day
  const miliseconds = 100
  const secondsInMinutes = 60
  const minutesInHours = 60
  const secondsInHours = secondsInMinutes * minutesInHours
  const hoursInDay = 23
  const dayDistance = distance / (miliseconds * secondsInHours * hoursInDay)

  if (dayDistance >=1) {
    return dayDistance + 'day ago'
  } else {
    //convert to hours
    const hoursDistance = Math.floor(distance / (miliseconds * secondsInHours))

    if (hoursDistance > 0) {
      return hoursDistance + 'hour ago'
    } else {
      //conver to minute
      const minuteDistance = math.floor(distance /(miliseconds * secondsInMinutes))
      return minutes
    }
  }

    
  
  
}
  

function getFullTime(time) {
  const date = time.getDate()
  const monthIndex = time.getMonth()
  const year = time.getFullYear()

  const hours = time.getHours()
  const minutes = time.getMinutes()

  return `${date} ${month[monthIndex]} ${year} ${hours} :${minutes} WIB`

  console.log(date)
  console.log(month[monthIndex])
  console.log(year)
}

function firstBlogContent () {
    return `
    <div class="blog-list-item">
          <div class="blog-image">
            <img src="assets/blog-img.png" alt="" />
          </div>
          <div class="blog-content">
            <div class="btn-group">
              <button class="btn-edit">Edit Post</button>
              <button class="btn-post">Post Blog</button>
            </div>
            <h1>
              <a href="blog-detail.html" target="_blank"
                >Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a
              >
            </h1>
            <div class="detail-blog-content">
              12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
            </div>
            <p>
              Ketimpangan sumber daya manusia (SDM) di sektor digital masih
              menjadi isu yang belum terpecahkan. Berdasarkan penelitian
              ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
              meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Quam, molestiae
              numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
              eligendi debitis?
            </p>
            <div style="text-align: right; font-size: 15px; color: grey;">
              1 hours ago
            </div>
          </div>
        </div>
        `
}