// initialize empty array to store blog
let blogs = [];

const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

function addBlog(e) {
  e.preventDefault();

  let title = document.getElementById('input-blog-title').value;
  let content = document.getElementById('input-blog-content').value;
  let image = document.getElementById('input-blog-image');

  if (title == '' || image == '' || content == '') {
    return alert('All input fields must be not empty');
  }
  image = URL.createObjectURL(image.files[0]);

  // create blog item and push to blogs array-----------------------------------------------------------------------------------
  let blog = {
    author: 'Rhoma Irama',
    title: title,
    image: image,
    content: content,
    postedAt: new Date(),
  };

  blogs.push(blog);

  // invoke function to display updated blogs to HTML---------------------------------------------------
  renderBlog();
}

function renderBlog() {
  //display blogs array to console
  // console.table(blogs);

  // get blog content container element
  let blogContainer = document.getElementById('contents');

  blogContainer.innerHTML = firstBlogContent();

  // looping through blogs array to access elements
  for (let i = 0; i < blogs.length; i++) {
    // display every blog to console
    console.log(blogs[i]);

    // store data to HTML using DOM innerHTML
    blogContainer.innerHTML += `
    <div id="${i}" class="blog-list-item">
      <div class="blog-image">
        <img src="${blogs[i].image}" alt="" />
      </div>
      <div class="blog-content">
        <div class="btn-group">
          <button class="btn-edit">Edit Post</button>
          <button class="btn-post">Post Blog</button>
        </div>
        <h1>
          <a href="blog-detail.html" target="_blank"
            >${blogs[i].title}</a
          >
        </h1>
        <div class="detail-blog-content">
         ${getFullTime(blogs[i].postedAt)} | ${blogs[i].author}
        </div>
        <p>${blogs[i].content}</p>
        <div style="text-align: right">
          <span style="font-size: 13px; color: grey">
          ${getDistanceTime(blogs[i].postedAt)}
          </span>
        </div>
      </div>
    </div>
    `;
  }
}

function getDistanceTime(time) {
  const distance = new Date() - new Date(time);

  // Convert to day
  const miliseconds = 1000;
  const secondsInMinute = 3600; //Second in 1 minute
  const hoursInDay = 23;
  const dayDistance = distance / (miliseconds * secondsInMinute * hoursInDay);

  if (dayDistance >= 1) {
    return Math.floor(dayDistance) + ' day ago';
  } else {
    // Convert to hour
    const hourDistance = Math.floor(distance / (1000 * 60 * 60));
    if (hourDistance > 0) {
      return hourDistance + ' hour ago';
    } else {
      // Convert to minute
      const minuteDistance = Math.floor(distance / (1000 * 60));
      return minuteDistance + ' minute ago';
    }
  }
}

function getFullTime(time) {
  const date = time.getDate();
  const monthIndex = time.getMonth();
  const year = time.getFullYear();

  const hours = time.getHours();
  const minutes = time.getMinutes();

  return `${date} ${month[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function firstBlogContent() {
  return `<div class="blog-list-item">
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
                    <div style="text-align: right">
                      <span style="font-size: 13px; color: grey">1 hours ago</span>
                    </div>
                  </div>
                </div>`;
}

setInterval(() => {
  renderBlog();
}, 3000);
